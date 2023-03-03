import React, {useState} from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Button } from "react-native";
import { ResultImc } from "./ResultImc";

export function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [massageImc, setMassageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight !== null && height !== null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMassageImc("Seu IMC é igual a:")
        setTextButton("Calcular Novamente")
        return
    } else {
        setImc(null)
        setTextButton("Calcular")
        setMassageImc("preencha o peso e altura")
    }
}

    return (
        <View>
            <View>
            <Text style={styles.textData}>Altura</Text>
            <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="digite sua altura" 
                keyboardType="numeric" />
            <Text style={styles.textData}>Peso</Text>
            <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="digite seu peso" 
                keyboardType="numeric" />
            <Button 
                onPress={() => validationImc()}
                title={textButton}/>
            <ResultImc messageResult={massageImc} resultImc={imc}/>
            </View>
        </View>
    )
}