import { Component, OnInit } from "@angular/core";
import { DeleteSessionDto } from "src/app/models/dto/deleteSession.dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  approved = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.approved = true;
    }
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    debugger;
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authService.deleteSession(deleteSessionDto).subscribe((resp) => {
        if (resp.success) {
          localStorage.removeItem('session_id');
          this.approved = false;
        }
      });
    }
  }
}
