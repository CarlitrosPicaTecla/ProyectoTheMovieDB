export class favMovies {
    media_type: string="movie";
    media_id: number;
    favorite: boolean;
    constructor(media_id: number, favorite:boolean) {
        this.media_id=media_id;
        this.favorite=favorite;

    }

}


