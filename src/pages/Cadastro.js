import React from "react";
import { View, Text, Button } from "react-native";

//Recebemos como props o navigation, para podermos navegar entre as telas
const Cadastro = ({navigation}) => {
    return (        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#a5e1e9'}}>
            <Text style={{fontSize: 30}}> TELA DE CADASTRO </Text>
            {/* Navegar para a página de Relatório */}
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')}/>
            <Button title="Tela de Gráfico" onPress={() => navigation.navigate('Grafico')}/>
            {/* Navegar para a página anterior */}
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Cadastro