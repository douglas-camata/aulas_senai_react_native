import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { meusEstilos, corPrincipal } from '../style/meusEstilos'

import * as Animar from 'react-native-animatable'

const Animacao = ( {navigation} ) => {
    return (
        <View style={meusEstilos.conteudoHeader}>
            <View style={styles.logo}>
                <Animar.Image 
                    animation='flipInY'
                    source={require('../assets/logo.png')} 
                    resizeMode='contain' />
            </View>

            <Animar.View 
                animation='fadeInUp'
                delay={600}
                style={meusEstilos.conteudoCorpo}>
                <Text style={styles.apresentacao}>Texto de apresentação do app!</Text>
                <Text>Faça o login para começar</Text>
                <TouchableOpacity style={meusEstilos.botao}>
                    <Text style={meusEstilos.textoBotao} >Acessar</Text>
                </TouchableOpacity>
            </Animar.View>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    apresentacao : {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12,
        textAlign: 'center'
    }
})

export default Animacao