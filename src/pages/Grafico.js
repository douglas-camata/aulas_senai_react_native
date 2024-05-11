import React from "react";
import { View, Text, Button } from "react-native";

//Recebemos como props o navigation, para podermos navegar entre as telas
const Grafico = ({navigation}) => {
    return (        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f8cadc'}}>
            <Text style={{fontSize: 30}}> TELA DE GRÁFICO </Text>
            {/* Navegar para a página de Relatório */}
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')}/>
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')}/>
            {/* Navegar para a página anterior */}
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Grafico