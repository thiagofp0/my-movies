import { Image, StyleSheet, Text, View } from "react-native";

export const MovieContainer = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainRow}>
            <Text>Nome do filme</Text>
            <Text>Nota</Text>
        </View>
        <View style={styles.mainRow}>
            <View>
                <Text>Genero - Ano</Text>
                <Text>Descrição do filme</Text>
            </View>
            <View>
                <Image source={{uri: 'https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg'}} style={{width: 100, height: 150}} />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    mainRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    

});