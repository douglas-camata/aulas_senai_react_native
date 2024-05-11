import React, { Component } from "react";
import { View , Text } from 'react-native'

//Quando temos um componente de classe, declaramos ele como uma classe
// e estendemos da classe Component do Reade para usar seus recursos
class ComponenteClasse extends Component 
{
    //Em todo componente de classe ele será gerado pelo método render()
    render(){
        return (
            <View>
                <Text>Este é um componente de classe</Text>
            </View>
        )    
    }
}

export default ComponenteClasse