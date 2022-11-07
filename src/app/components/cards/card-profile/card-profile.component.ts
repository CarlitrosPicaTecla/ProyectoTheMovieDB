import { Component, Input, OnInit } from "@angular/core";
import { Actor } from "src/app/models/interfaces/actor.interface";

@Component({
  selector: "app-card-profile",
  templateUrl: "./card-profile.component.html",
})


export class CardProfileComponent implements OnInit {

  @Input() actor:Actor = {} as Actor; 
  
  constructor() {}

  ngOnInit(): void {

  }
  
  getActorPhoto(actor: Actor) {
    return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  }

}
