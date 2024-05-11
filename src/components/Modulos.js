import React from 'react'
import { View, Text} from 'react-native'
import { estilo1, estilo2 } from './styles/ModulosStyle'

const ComponenteNomeado1 = () => {
    return (
        <Text style={estilo1.texto}> Meu componente nomeado 1 </Text>
    )
} 

const ComponenteNomeado2 = () => {
    return (
        <Text style={estilo2.texto2}> Meu componente nomeado 2 </Text>
    )
}

const ComponentePadrao = () => {
    return (
        <Text style={[estilo1.texto, estilo2.texto2]}> Este é um componente padrão </Text>
    )
}

export { ComponenteNomeado1, ComponenteNomeado2 }
export default ComponentePadrao 