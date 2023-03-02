import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { Form } from "../../Form";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text  style={styles.title}>Calcule seu IMC</Text>
            </View>
            <View style={styles.main}>
                <Form/>
            </View>
        </View>
    )
}