import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

export function Home() {
    return (
        <View style={styles.header}>
            <Text>Calcule seu IMC</Text>
        </View>
    )
}