import React from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Button } from "react-native";
import { ResultImc } from "./ResultImc";

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
                keyboardType="numeric" />
            <Button title="calcular IMC"/>
            <ResultImc messageResult={messageImc} resultImc={imc}/>
            </View>
        </View>
    )
}