export interface Movie {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

export interface TrailerResponse {
    id:      number;
    results: Details[];
}

export interface Details {
    iso_639_1:    string;
    iso_3166_1:   string;
    name:         string;
    key:          string;
    published_at: string;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    id:           string;
}
