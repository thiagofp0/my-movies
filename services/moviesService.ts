import api from './api';
import { MoviesListDTO, mapMovieDTO } from './dto/moviesListDTO';

const getMovieByName = async (name: string): Promise<MoviesListDTO> => {
  try {
    const response = await api.get(`/search`, { params: { q: name, lsn: 1, v: 1 } });
    const data = response.data;
    return {
      ok: data.ok,
      description: data.description.map(mapMovieDTO),
    };
  } catch (error) {
    debugger
    console.error("Error fetching movie:", error);
    throw error;
  }
};

const getMovieById = async (id: string) => {
  try {
    const response = await api.get(`/search`, { params: { tt: id, lsn: 1, v: 1 } });
    const data = response.data;
    return {
      ok: data.ok,
      description: data.description.map(mapMovieDTO),
    };
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
};

export {
  getMovieByName,
  getMovieById
};