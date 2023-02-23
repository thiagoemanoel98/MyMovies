export interface IMovie {
  id: string;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  genre_ids: number[];
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
