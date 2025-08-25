
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { Platform, StatusBar } from "react-native";

export const Header = ({children}: {children: React.ReactNode}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.TextPrincipal}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 16,
        backgroundColor: '#eeeeeeff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextPrincipal:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#414141ff'
    }
})