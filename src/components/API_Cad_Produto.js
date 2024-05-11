import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const API_Cad_Produto = ({ navigation, route }) => {
    const [inputTitulo, setInputTitulo] = useState('')
    const [inputPreco, setInputPreco] = useState('')
    const [inputLinkImagem, setInputLinkImagem] = useState('')

    useEffect(
        () => {
            if (route.params && route.params.produtoAlterar){
                setInputTitulo(route.params.produtoAlterar.titulo) 
                setInputPreco(route.params.produtoAlterar.preco)
                setInputLinkImagem(route.params.produtoAlterar.imagem)
            } else {
                setInputTitulo('') 
                setInputPreco('')
                setInputLinkImagem('')
            }
        }, [route.params]
    )

    const botaoSalvarProduto = async () => {
        try {
            //Criando variável para apontar qual endpoint deve ir
            let endpoint = 'http://192.168.0.237:5000/novoProduto'
            let metodo = 'POST'

            if (route.params && route.params.produtoAlterar){
                endpoint =`http://192.168.0.237:5000/atualizarProduto/${route.params.produtoAlterar.id}`
                metodo = 'PUT'
            }

            //Endereço do endpoint do POST
            const resposta = await fetch(endpoint,
                {
                    method: metodo,  //Qual é o método do endpoint
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        titulo: inputTitulo,
                        preco: parseFloat(inputPreco),
                        imagem: inputLinkImagem
                    })
                }
            )
            if (resposta.ok) {
                alert('Produto salvo com sucesso')
                //Redirecionando para a tela com todos os produtos
                navigation.navigate('API Lista')
            }

        } catch (error) {
            console.error('Erro ao salvar produto:', error)
        }
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput placeholder='Título do produto' value={inputTitulo}
                onChangeText={setInputTitulo} style={styles.input} />
            <TextInput placeholder='Preço do produto' value={inputPreco}
                onChangeText={setInputPreco} style={styles.input} />
            <TextInput placeholder='Link da imagem do produto' value={inputLinkImagem}
                onChangeText={setInputLinkImagem} style={styles.input} />
            <Image source={{ uri: inputLinkImagem }} style={styles.imagem} />
            <Button title='Salvar' onPress={botaoSalvarProduto} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    imagem: {
        width: 200,
        height: 200,
    },
})

export default API_Cad_Produto