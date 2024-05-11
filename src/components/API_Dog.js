//imports
import React, { useState, useEffect } from 'react'
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native'

//const API_Dog
const API_Dog = () => {
    const [dogImage, setDogImage] = useState('')
    //Criando variável de estado para controlar Indicator de carregamento
    const [carregando, setCarregando] = useState(false)

    // função para buscar a API da image
    const buscarImagemDog = async () => {
        setCarregando(true)
        try {
            //Buscando dados da API de Dog
            const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
            //Convertendo para json a resposta da API
            const dados = await resposta.json()
            console.log(dados)
            //Guardando o Objeto retornado na const dogImage
            setDogImage(dados)
        } catch (error) {
            console.error(error)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        buscarImagemDog()
    }, [])

    return (
        <View>
            <Text> Imagem de Cachorro</Text>
            {carregando == true && <ActivityIndicator size="large" />}
            <Image source={{ uri: dogImage.message }}
                style={styles.imagem} />
            <Button title='Gerar nova imagem' onPress={buscarImagemDog} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        margin: 15
    }
})

//export
export default API_Dog