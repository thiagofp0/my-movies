import { StyleSheet, Text, View } from "react-native";

const MovieContainer = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainRow}>
            <Text style={styles.MovieNameText}>Nome do filme</Text>
            <Text style={styles.MovieRateText}>Nota/Nota</Text>
        </View>
        <View style={styles.mainRow}>
            <View style={styles.infoColumn}>
                <Text style={styles.MovieInfoText}>Comédia - 2020</Text>
                <Text style={styles.MovieDescriptionText}>Lero lero lero lero lero lero lero lero lero lero lero lero lero lero lero lero lerolero lero </Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: "100%",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
    },
    mainRow: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
    },
    infoColumn: {
        width: "70%"
    },
    photoColumn: {
        width: "30%",
    },
    MovieNameText:{
        fontWeight: "bold",
        fontSize: 16,
        textOverflow: "ellipsis",
    },
    MovieRateText:{
        fontWeight: "bold",
        fontSize: 14,
        color: "#FFD700",
    },
    MovieInfoText:{
        fontSize: 12,
        color: "#666"
    },
    MovieDescriptionText:{
        fontSize: 12,
        color: "#666"
    }
});

export default MovieContainer;