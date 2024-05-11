import React from "react";
import { Text } from "react-native"; 

const MaiorMenor = (props) => {
    let maior = props.n1
    let menor = props.n2

    if (maior < menor) {
        menor = props.n1
        maior = props.n2
    }

    return (
        <Text style={{color: props.cor}}>
            O maior número é {maior} e o menor é {menor}
        </Text>
    )
} 

export default MaiorMenor