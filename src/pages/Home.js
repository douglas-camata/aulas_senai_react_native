import React from "react";
import { View, Text, Button } from "react-native";

//Recebemos como props o navigation, para podermos navegar entre as telas
const Home = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#d5edb9'}}>
            <Text style={{fontSize: 30}}> TELA PRINCIPAL </Text>
            {/* Nos botões, no onPress dizemos para qual tela quero navegar ao clicar no botão */}
            {/* Navegar para a página de Cadastro */}
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')}/>
            {/* Navegar para a página de Relatório */}
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')}/>
            <Button title="Tela de Gráfico" onPress={() => navigation.navigate('Grafico')}/>
        </View>
    )
}

export default Home