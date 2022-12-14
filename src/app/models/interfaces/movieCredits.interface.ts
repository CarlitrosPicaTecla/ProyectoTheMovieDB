// Generated by https://quicktype.io

export interface MovieCreditsResponse {
  cast: Cast[];
  crew: any[];
  id:   number;
}

export interface Cast {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
  character:         string;
  credit_id:         string;
  order:             number;
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Ko = "ko",
  Zh = "zh",
}
