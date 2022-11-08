import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Actor, KnownFor } from "src/app/models/interfaces/actor.interface";
import { ActorDetails } from "src/app/models/interfaces/actorDetails.interface";
import { Cast } from "src/app/models/interfaces/movieCredits.interface";
import { ActorService } from "src/app/services/actor.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  actor: Actor = {} as Actor;
  idActor;
  actorDetails: ActorDetails;
  castList: Cast[] = [];

  constructor(
    private actorService: ActorService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const actorId = Number(this.ruta.snapshot.paramMap.get("id"));
    this.actorService.getActorDetails(actorId).subscribe((resp) => {
      this.actorDetails = resp;
      this.actorService.getMovieCredits(resp.id).subscribe((resp) => {
        this.castList = resp.cast;
      });
    });
  }
  getActorPhoto() {
    return `https://image.tmdb.org/t/p/w500/${this.actorDetails.profile_path}`;
  }
  getMovieIMG(cast: Cast) {
    return `https://image.tmdb.org/t/p/w500/${cast.poster_path}`;
  }
}
