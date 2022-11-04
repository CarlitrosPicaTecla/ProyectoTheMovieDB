import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CreateSessionDto } from "src/app/models/dto/createSession.dto";
import { DeleteSessionDto } from "src/app/models/dto/deleteSession.dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor(private authService : AuthService,private route:ActivatedRoute) {}
login:boolean = false;
approved: boolean;

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams['approved'];
      const rToken = qParams['request_token'];
      this.approved = ap == 'true' ? true : false;

      if (this.approved) {
        this.login = true;
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.authService.createSession(session).subscribe((resp) => {
          localStorage.setItem('session_id', resp.session_id);
          console.log('Session id: ' + resp.session_id);
        });
      } else {
        if (localStorage.getItem('session_id') != null) {
          console.log('Session id: ' + localStorage.getItem('session_id'));
          this.approved = true;
        }
      }
    });
    }
  }

