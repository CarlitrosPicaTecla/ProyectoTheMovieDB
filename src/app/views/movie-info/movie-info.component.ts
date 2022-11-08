import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { movieRated } from 'src/app/models/dto/movieRated.dto';
import { Details, Movie } from 'src/app/models/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
})
export class MovieInfoComponent implements OnInit {
  
  movie: Movie = {} as Movie;
  valor : number = 0;

  id : number =0;
  key:string;
  url:string;
  videos: Details []=[];

  constructor(private movieservice : MoviesService, private route : ActivatedRoute,private sanitazer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>
    this.movie.id = res ["id"]);


    this.getInfo(this.movie.id);
    
    this.getInfo(this.id);

        this.movieservice.getTrailerResponse(this.id.toString()).subscribe(a => {
      a.results.filter(b => {
        if (b.type == 'Trailer') {
          this.videos.push(b)
        }
      })
    })
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

  getTrailerVideo(v: Details) {
    let url = `https://www.youtube.com/embed/${v.key}`

    return this.sanitazer.bypassSecurityTrustResourceUrl(url)
  }
}
