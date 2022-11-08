import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { favMovies } from 'src/app/models/dto/favMovies.dto';
import { Account } from 'src/app/services/account.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movieList: Movie[]=[];
  pageActual: number=1;
  numPagesTotal: number=0;

  

  constructor(private movieservice : MoviesService, private account : Account) { }

  ngOnInit(): void {
    this.getMoviePage(this.pageActual);
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.movieservice.getMovie(this.pageActual).subscribe((res) => {
        this.movieList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.movieservice.getMovie(this.pageActual).subscribe((res) => {
        this.movieList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  getMoviePage(page: number) {
    this.movieservice.getMovie(page).subscribe((resp) => {
      this.movieList = resp.results;
      this.numPagesTotal = Math.ceil(resp.total_pages / 10);
    });
  }

  getMovie(id : number){
    this.movieservice.getMovie(id).subscribe((resp)=>{
      this.movieList=resp.results

    });
  }

  showImg(movie :Movie){
    let id = movie.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  getVoteAvgStyle(movie : Movie){
    return "width: " + (movie.vote_average*10).toFixed(0) + "%" ;
  }

markFavorite(id : number){
  let favmovie : favMovies= new favMovies(id, true);
  this.account.getDetails().subscribe((res)=>{

    this.account.markFavorite(favmovie, res.id).subscribe((res)=>{


  
    });
  })


}

}
