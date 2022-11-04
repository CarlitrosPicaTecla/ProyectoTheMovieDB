import { Component, OnInit } from "@angular/core";
import { DeleteSessionDto } from "src/app/models/dto/deleteSession.dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor(private authService : AuthService) {}

approved: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.approved = true;
      console.log(this.approved)
    }
  }

}
