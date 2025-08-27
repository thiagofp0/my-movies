import { useState } from "react"
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import MovieContainer from "./components/MovieContainer";
import { getMovieByName } from "../services/moviesService";
import { MovieDTO, MoviesListDTO } from "@/services/dto/moviesListDTO";

export default function AddMovieModal() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MoviesListDTO | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieDTO>({} as MovieDTO);
  const [showRenderOptions, setShowRenderOptions] = useState<boolean>(true);

  const getMoviesBySearch = async () => {
    const results = await getMovieByName(searchTerm);
    setSearchResults(results);
  };

  const onSearchChange = (text: string) => {
    setSearchTerm(text);
    getMoviesBySearch();
  };

  const renderFields = () => {
    if (!selectedMovie) return null;

    return (
        <View style={styles.content}>
            <MovieContainer movie={selectedMovie} />
            <TextInput keyboardType="decimal-pad" style={styles.rateInput} placeholder="Sua nota... (Entre 0 e 10)" />
            <TextInput multiline numberOfLines={10} style={styles.descriptionInput} placeholder="O que você achou do filme?" />
        </View>
    );
  };

  const renderOptions = () => {
    if (!showRenderOptions) return null;
    if (!searchResults || !searchResults.description) return null;

    return (
      <View style={styles.options} onTouchEnd={() => setShowRenderOptions(false)}>
        {searchResults.description.map((movie) => (
          <TouchableOpacity
            key={movie.imdbId}
            style={styles.optionItem}
            onPress={() => setSelectedMovie(movie)}
          >
            <Text>{movie.title} - {movie.year}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.search} onChangeText={(e) => onSearchChange(e)} placeholder="Buscar filme..." />
        {renderOptions()}
        {renderFields()}
        <TouchableOpacity style={selectedMovie ? styles.button : styles.buttonDisabled} onPress={() => {router.push('/')}} disabled={!selectedMovie}>
            <Text>Adicionar Filme</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content:{
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16
  },
  feed: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#f5f5f5",
    
  },
  search: {
    width: "90%",
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  rateInput: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  descriptionInput: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlignVertical: "top"
  },
  button: {
    width: "90%",
    padding: 16,
    backgroundColor: "#FFD700",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 16,
  },
  buttonDisabled: {
    width: "90%",
    padding: 16,
    backgroundColor: "#afafafff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 16,
  },
  options: {
    width: "90%",
    maxHeight: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  optionItem: {
    height: 15,
    width: "100%",
    justifyContent: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
