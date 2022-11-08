import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieRated } from 'src/app/models/dto/movieRated.dto';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
})
export class MovieInfoComponent implements OnInit {
  movie: Movie = {} as Movie;
  valor : number = 0;

  constructor(private movieservice : MoviesService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>
    this.movie.id = res ["id"]);


    this.getInfo(this.movie.id);
    
  }

  getInfo(id : number) {
    this.movieservice.getMovieId(id).subscribe((res) => {
      this.movie = res;
    });
  }

  showImg(movie :Movie){
    let id = movie.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  rateMovie(){

    let movierated =  new movieRated();
    movierated.value=this.valor;
    this.movieservice.rateMovie(movierated, this.movie.id).subscribe(res =>{
      if(res.success){

        alert('furula');
      }
    });
  }

}
