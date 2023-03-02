import React from "react";
import { styles } from "./styles";
import { View, Text, TextInput } from "react-native";

export function Form() {
    return (
        <View>
            <View>
            <Text style={styles.textData}>Altura</Text>
            <TextInput 
                placeholder="digite sua altura" 
                keyboardType="numeric"></TextInput>
            <Text style={styles.textData}>Peso</Text>
            <TextInput 
                placeholder="digite seu peso" 
                keyboardType="numeric"></TextInput>
            </View>
        </View>
    )
}