import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
})
export class MovieInfoComponent implements OnInit {
  movie: Movie = {} as Movie;
  id : number =0;

  constructor(private movieservice : MoviesService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>
    this.id = res ["id"]);

    this.getInfo(this.id);
    
  }

  getInfo(id : number) {
    this.movieservice.getMovieId(id).subscribe((res) => {
      this.movie = res;
    });
  }



}
