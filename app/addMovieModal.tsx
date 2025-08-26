import { View, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AddMovieModal() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TextInput style={styles.search} placeholder="Buscar filme..." />
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
    justifyContent: "flex-start",
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
});
