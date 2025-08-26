import { TextInput, View, StyleSheet, ScrollView, TouchableHighlight, Text } from "react-native";
import Header from "../components/Header";
import MovieContainer from "../components/MovieContainer";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header>MyMovies</Header>
      <View style={styles.content}>
        <TextInput placeholder="Search movies..." style={styles.search} />
        <ScrollView style={styles.feed}>
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
          <MovieContainer />
        </ScrollView>
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => {
            router.push("/addMovieModal");
          }}
        >
          <Text>Adicionar filme</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  content:{
    marginTop: 16,
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
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
  addButton: {
    width: "90%",
    padding: 16,
    backgroundColor: "#FFD700",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 16,
  },
});
