import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  approved: boolean;
  login: boolean = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams["approved"];
      this.approved = ap == "true" ? true : false;
      if(this.approved){
        this.login=true;
      }
    });
  }
}
