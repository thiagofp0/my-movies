export interface MovieDTO {
  title: string;
  year: number;
  imdbId: string;
  rank: number;
  actors: string;
  aka: string;
  imdbUrl: string;
  imdbIv: string;
  imgPoster: string;
  photoWidth: number;
  photoHeight: number;
}

export function mapMovieDTO(data: any): MovieDTO {
  return {
    title: data["#TITLE"],
    year: data["#YEAR"],
    imdbId: data["#IMDB_ID"],
    rank: data["#RANK"],
    actors: data["#ACTORS"],
    aka: data["#AKA"],
    imdbUrl: data["#IMDB_URL"],
    imdbIv: data["#IMDB_IV"],
    imgPoster: data["#IMG_POSTER"],
    photoWidth: data["photo_width"],
    photoHeight: data["photo_height"],
  };
}
export interface MoviesListDTO {
  ok: boolean;
  description: MovieDTO[];
}