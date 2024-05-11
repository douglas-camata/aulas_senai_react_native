import React from "react";
import { View, Text, Button } from "react-native";

//Recebemos como props o navigation, para podermos navegar entre as telas
const Relatorio = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#C4BDF3'}}>
            <Text style={{fontSize: 30}}> TELA DE RELATÓRIO </Text>
            {/* Navegar para a página de Cadastro */}
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')}/>
            <Button title="Tela de Gráfico" onPress={() => navigation.navigate('Grafico')}/>
            {/* Navegar para a página anterior */}
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Relatorio