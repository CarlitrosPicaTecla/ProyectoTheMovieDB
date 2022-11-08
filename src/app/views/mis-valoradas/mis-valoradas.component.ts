import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { RatedMovies } from 'src/app/models/interfaces/ratedMovies.interface';
import { Account } from 'src/app/services/account.service';

@Component({
  selector: 'app-mis-valoradas',
  templateUrl: './mis-valoradas.component.html',
})
export class MisValoradasComponent implements OnInit {

  constructor(private account : Account) { }

  ratedMoviesList : RatedMovies[]=[];
  pageActual: number=1;
  numPagesTotal: number=0;
  ngOnInit(): void {

    this.getRatedMovies(this.pageActual);
  }


  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.account.getRatedMovies(this.pageActual).subscribe((res) => {
        this.ratedMoviesList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.account.getRatedMovies(this.pageActual).subscribe((res) => {
        this.ratedMoviesList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  getRatedMovies(page : number){

    this.account.getRatedMovies(page).subscribe((res)=>{
      this.ratedMoviesList=res.results;
      this.numPagesTotal = Math.ceil(res.total_pages / 10);

    });
  }

  showImg(movie :RatedMovies){
    let id = movie.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  getVoteAvgStyle(movie : RatedMovies){
    return "width: " + (movie.vote_average*10).toFixed(1) + "%" ;
  }
}
