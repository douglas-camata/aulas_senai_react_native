import React, { useState, useTransition } from 'react'
import { View, Text, Image, TextInput, Button, Alert } from 'react-native'
//Importando o estilo que criaremos para o jogo
import styles from './style'
//Importar o logo que está dentro da pasta img
import logo from './img/logo.png'

const JogoAdivinhacao = () => {
    //Math.floor(Math.random() * 100) + 1 -> Fórmula para gerar um número aleatório de 1 a 100
    // a variavel numeroSorteado irá receber e guardar o número a ser adivinhado
    //setNumeroSorteado irá atualizar o valor de numeroSorteado
    const [numeroSorteado, setNumeroSorteado] = useState(Math.floor(Math.random() * 100) + 1)
    const [chute, setChute] = useState('')
    const [feedback, setFeedback] = useState('')
    //        |---> nome da variável que terá o valor a ser exibido na tela
    //        |         |--> método que atualiza o valor
    //        |         |                    |--> Valor inicial ao abrr o app
    const [acertou, setAcertou] = useState(false)

    //function verificarChute () { }
    const verificarChute = () => {
        //Convertendo o valor que o jogador digitou para inteiro
        const chuteValido = parseInt(chute)
        if (chuteValido > 100 || chuteValido < 0 || isNaN(chuteValido) ){
            Alert.alert('Por favor, insira um número válido entre 0 e 100')
            //Quando quero sair de uma função coloco o return
            //quando o computador encontra o return não executa o resto do código da função
            return
        }

        if ( chuteValido < numeroSorteado) {
            setFeedback(`Tente um número maior que ${chuteValido}!`)
        } else if ( chuteValido > numeroSorteado ) {
            setFeedback(`Tente um número menor que ${chuteValido}!`)
        } else  {
            Alert.alert(`Parabéns! Você adivinhou o número secreto ${numeroSorteado}`)
            setFeedback(`Parabéns! Você adivinhou o número secreto ${numeroSorteado}`)
            setAcertou(true)
        }

        setChute('')
    }

    //Zerando e limpando minhas variáveis para um novo jogo
    const reiniciarJogo = () => {
        //Sortear novo número
        setNumeroSorteado(Math.floor(Math.random() * 100) + 1) 
        //Limpando o número chutado
        setChute('')
        //Limpando o feedback
        setFeedback('')
        //Limpando a variável acertou
        setAcertou(false)
    }
    
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem}/>
            {/* If ternário */}
            {/* condição      ?        resposta verdadeira                                : senão */}
            { acertou == true ? <Button title='Reiniciar jogo' onPress={reiniciarJogo} /> : null }

            <Text style = {styles.texto}> Adivinhe o número entre 0 e 100 </Text>
            <TextInput 
                style = {styles.input}
                // Sempre que tiver um TextInput preciso atualizar a variavel através do set
                onChangeText={texto => setChute(texto)}
                // E preciso colocar a variável dentro do atributo value
                value={chute}
                // keyboardType é qual tipo de teclado quero abrir no celular
                keyboardType='numeric'
                placeholder='Chute um nº'
                editable = {!acertou} />
            <Button title='    Chutar    ' onPress={verificarChute} disabled={acertou} />
            <Text style={styles.texto}>{feedback}</Text>
        </View>
    )
}

export default JogoAdivinhacao