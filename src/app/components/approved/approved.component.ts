import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateSessionDto } from "src/app/models/dto/createSession.dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-approved",
  templateUrl: "./approved.component.html",
  styleUrls: ["./approved.component.css"],
})
export class ApprovedComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  approved: boolean;

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams["approved"];
      const rToken = qParams["request_token"];
      this.approved = ap == "true" ? true : false;

      if (this.approved) {
        let session = new CreateSessionDto();
        session.request_token = rToken;
        debugger;
        this.authService.createSession(session).subscribe((resp) => {
          localStorage.setItem("session_id", resp.session_id);
          console.log("Session id: " + resp.session_id);
        });
      } else {
        if (localStorage.getItem("session_id") != null) {
          console.log("Session id: " + localStorage.getItem("session_id"));
          this.approved = true;
        }
      }
      this.router.navigate(["/landing"]);
    });
  }
}
