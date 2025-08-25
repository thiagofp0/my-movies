import { Image, StyleSheet, Text, View } from "react-native";

export const MovieContainer = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text>Nome do filme</Text>
            <Text>Nota</Text>
        </View>
        <View>
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
    
});