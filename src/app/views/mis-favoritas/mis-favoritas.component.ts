import { Component, OnInit } from '@angular/core';
import { favMovies } from 'src/app/models/dto/favMovies.dto';
import { MoviesFav } from 'src/app/models/interfaces/moviesFav.interface';
import { Account } from 'src/app/services/account.service';

@Component({
  selector: 'app-mis-favoritas',
  templateUrl: './mis-favoritas.component.html',
})
export class MisFavoritasComponent implements OnInit {

  constructor(private account : Account) { }


  favMoviesList : MoviesFav[]=[];
  pageActual: number=1;
  numPagesTotal: number=0;
  ngOnInit(): void {
    this.getFavMovies(this.pageActual);
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.account.getRatedMovies(this.pageActual).subscribe((res) => {
        this.favMoviesList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.account.getRatedMovies(this.pageActual).subscribe((res) => {
        this.favMoviesList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }


  getFavMovies(page : number){

    this.account.getFavMovies(page).subscribe((res)=>{
      this.favMoviesList=res.results;
      this.numPagesTotal = Math.ceil(res.total_pages / 10);

    });
  }

  showImg(movie :MoviesFav){
    let id = movie.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  getVoteAvgStyle(movie : MoviesFav){
    return "width: " + (movie.vote_average*10).toFixed(2) + "%" ;
  }

}
