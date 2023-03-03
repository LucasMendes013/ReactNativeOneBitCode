import React from "react";
import { View, Text } from "react-native";

export function ResultImc({messageResult, resultImc}){
    return (
        <View>
                        <Text>{messageResult}</Text>
            <Text>{resultImc}</Text>

        </View>
    )
}