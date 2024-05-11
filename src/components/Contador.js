import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Contador = () => {

    //Sempre que tenho uma variável de estado preciso iniciá-la com o useState
    // precisamos também enviar o nome do método que será atualizada a variável
    //por padrão sempre colocamos o nome set seguido do nome da variável
    const [contador, setContador] = useState(0)

    //Criamos uma constante de função, com o objetivo de incrementar nosso contador
    //Chamamos ela no evento onPress do Botão
    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center', flex: 1, width:'100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 50 }}>{contador}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
                <Button title="+ 1" onPress={incrementar} />
                <Button title="- 1" onPress={decrementar} />
            </View>
        </View>
    )
}

export default Contador