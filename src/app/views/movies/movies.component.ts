import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {


  movieList: Movie[]=[];
  pageActual: number=1;
  numPagesTotal: number=0;
  select: Movie | undefined;

  constructor(private movieservice : MoviesService) { }



  ngOnInit(): void {
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

}
