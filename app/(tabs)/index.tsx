import { TextInput, View } from "react-native";
import { Header } from "../components/Header";
import { MovieContainer } from "../components/MovieContainer";

export default function HomeScreen() {
  return (
    <>
      <Header>MyMovies</Header>
      <View>
        <TextInput placeholder="Search movies..." />
        <MovieContainer />
      </View>
    </>
  );
}