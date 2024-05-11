import React, {useState} from "react";
import { View, Text, TextInput, Button, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const CompPicker = () => {
    //Variável de estado iniciando como vazio
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [sexo, setSexo] = useState('m')
    const [saudacao, setSaudacao] = useState('')
    const [dadosRacas, setDadosRacas] = useState([])
    const [racaSelecionada, setRacaSelecionada] = useState('')
    const [dogImage, setDogImage] = useState('')

    const botaoSaudar = () => {
        if (sexo == 'm') {
            setSaudacao(`Olá, Sr. ${nome} ${sobrenome}!`)
        } else {
            setSaudacao(`Olá, Sra. ${nome} ${sobrenome}!`)
        }
    }

    const botaobuscarRacas = async () => {
        try {
            const resposta = await fetch('http://192.168.0.237:5000/obterRacasCachorro')
            const dados = await resposta.json()
            setDadosRacas(dados)
        } catch (error) {
            console.error('Erro ao buscar dados', error)
        }
    }

    const botaoBuscarImagem = async () => {
        try {
            const resposta = await fetch(`https://dog.ceo/api/breed/${racaSelecionada}/images/random`)
            const dados = await resposta.json()
            setDogImage(dados)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <TextInput placeholder="Digite o nome"
                value={nome}
                onChangeText={setNome}
                style={{ height: 40, width: 200, 
                    borderColor: 'gray', borderWidth: 1}}
            />
            <TextInput placeholder="Digite o sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
                style={{ height: 40, width: 200, 
                    borderColor: 'gray', borderWidth: 1}}
            />
            <Text> Sexo: </Text>
            <Picker 
                selectedValue={sexo}
                onValueChange={setSexo}
                style={{ height:50, width: 200 }}
            >
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Feminino" value="f" />
            </Picker>
            <Button title='Saudar' onPress={botaoSaudar} />
            <Text> {saudacao} </Text>

            <Text> Qual é a raça de cachorro você gosta? </Text>
            <Picker 
                selectedValue={racaSelecionada}
                onValueChange={setRacaSelecionada}
                style={ {height:50, width: 200}}
            >
                {/* Aqui receberemos os itens do picker*/}
                {dadosRacas.map((raca, index) => (
                    <Picker.Item key={index} label={raca.apelido} value={raca.nome} />
                ))}

            </Picker>
            <Button title="Carregar Raças" onPress={botaobuscarRacas} />
            <Image source={{uri: dogImage.message}} style={{width:300, height:300, resizeMode:'contain'}} />
            <Button title="Buscar Foto" onPress={botaoBuscarImagem} />
        </View>
    )

}

export default CompPicker