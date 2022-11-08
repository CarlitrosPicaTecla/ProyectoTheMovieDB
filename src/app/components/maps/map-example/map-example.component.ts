import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/models/interfaces/actor.interface";
import { ActorService } from "src/app/services/actor.service";

declare const google: any;

@Component({
  selector: "app-map-example",
  templateUrl: "./map-example.component.html",
})
export class MapExampleComponent implements OnInit {
  
  constructor(private actorService:ActorService) {}
  listaActores: Actor[] = []
  pageActual:number;
  numPagesTotal: number;

  ngOnInit(): void {
    this.pageActual=0
   this.getAllActors(this.pageActual+1 );
  }

  nextPage() {
    this.actorService.getAllActors(this.pageActual++).subscribe(resp=>{
      this.listaActores = resp.results
    })
  }

  backPage() {
    this.actorService.getAllActors(this.pageActual--).subscribe(resp=>{
      this.listaActores = resp.results
    })
  }
  
    getAllActors(page:number){
      this.actorService.getAllActors(page).subscribe(resp=>{
        this.listaActores = resp.results
      })
    }
}