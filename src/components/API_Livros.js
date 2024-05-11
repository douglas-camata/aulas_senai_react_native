import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const API_Livros = () => {
    const [dadosLivros, setDadosLivros] = useState([]);
    const [txtPesquisa, setTxtPesquisa] = useState('');
    const [ordenacao, setOrdenacao] = useState('title');

    const buscarDadosAPI = async () => {
        try {
            const response = await fetch('http://192.168.0.237:5000/obterLivros');
            const json = await response.json();
            console.log(json)
            setDadosLivros(json);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const exibirItemLista = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.textContainer}>
                    <Text>{item.TITULO}</Text>
                    <Text style={styles.preco}>{item.AUTOR}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const filtrarDados = () => {
        
        let dadosFiltrados = dadosLivros.filter(item => item.TITULO.toLowerCase().includes(txtPesquisa.toLowerCase()))

        if (ordenacao == 'titulo') {
            dadosFiltrados.sort((a, b) => a.TITULO.localeCompare(b.TITULO));
        } else if (ordenacao == 'autor') {
            dadosFiltrados.sort((a, b) => a.AUTOR.localeCompare(b.AUTOR));
        }

        return dadosFiltrados;
    };

    return (
        <View style={styles.container}>
            <Button title="Carregar Dados API" onPress={buscarDadosAPI} />
            <View style={styles.controles}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar"
                    value={txtPesquisa}
                    onChangeText={setTxtPesquisa}
                />
                <Picker
                    selectedValue={ordenacao}
                    style={styles.picker}
                    onValueChange={setOrdenacao}
                >
                    <Picker.Item label="Título" value="titulo" />
                    <Picker.Item label="Autor" value="autor" />
                </Picker>
                
            </View>           

            { filtrarDados().length == 0 ?
                <Text style={{textAlign:'center'}}> Nenhum registro encontrado</Text> :
                <FlatList
                    style={styles.flat}
                    data={filtrarDados()}
                    renderItem={exibirItemLista}
                    keyExtractor={(item, index) => index}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    controles: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
        paddingLeft: 10,
    },
    picker: {
        flex: 1,
        height: 40,
        width: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
    },
    flat: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    preco: {
        fontSize: 18,
    }
});

export default API_Livros;
