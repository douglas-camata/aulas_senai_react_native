import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const API_Lista = ( {navigation} ) => {
    const [dadosProduto, setDadosProduto] = useState([]);
    const [txtPesquisa, setTxtPesquisa] = useState('');
    const [ordenacao, setOrdenacao] = useState('titulo');

    const buscarDadosAPI = async () => {
        try {
            const response = await fetch('http://192.168.0.237:5000/obterProdutos');
            const json = await response.json();
            setDadosProduto(json);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };  

    const exibirItemLista = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} 
                onPress={() => navigation.navigate('API Cad Produtos', { produtoAlterar: item })}
            >
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.textContainer}>
                    <Text>{item.titulo}</Text>
                    <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
                </View>
                <Button title='Excluir' onPress={() => botaoExcluirProduto(item.id)} />
            </TouchableOpacity>
        );
    }

    const botaoExcluirProduto = async (id) => {
        try {
            const resposta = await fetch(`http://192.168.0.237:5000/excluirProduto/${id}`, 
                {method: 'DELETE'})
            if (resposta.ok) 
                buscarDadosAPI()
        } catch (error) {
            console.error('Erro ao excluir Produto:', error)
        }
    }

    const filtrarDados = () => {
        
        let dadosFiltrados = dadosProduto.filter(item => item.titulo.toLowerCase().includes(txtPesquisa.toLowerCase()))

        if (ordenacao == 'titulo') {
            dadosFiltrados.sort((a,b) => a.titulo.localeCompare(b.titulo))
        } 
        else if (ordenacao == 'preco') {
            dadosFiltrados.sort((a,b) => a.preco - b.preco)
        }

        return dadosFiltrados;
    };

    return (
        <View style={styles.container}>
            <Button title="Adicionar novo produto" 
                onPress={() => navigation.navigate('API Cad Produtos')} />
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
                    <Picker.Item label="Preço" value="preco" />
                </Picker>
                
            </View>           

            <FlatList
                style={styles.flat}
                data={filtrarDados()}
                renderItem={exibirItemLista}
                keyExtractor={(item) => item.id.toString()}
            />
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

export default API_Lista;
