import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';

const API_CEP = () => {
    const [txtCEP, setTxtCEP] = useState('')
    const [dadosAPI, setDadosAPI] = useState('')

    const buscarCEP = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${txtCEP}/json/`);
            const data = await response.json();
            setDadosAPI(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>

            <Image source={{ uri: 'https://buscadecep.com/logo.png' }} style={{ width: 300, height: 50, resizeMode: 'contain' }} />
            <TextInput
                style={styles.input}
                placeholder="Digite o CEP"
                keyboardType="numeric"
                value={txtCEP}
                onChangeText={(text) => setTxtCEP(text)}
            />
            <Button title="Consultar CEP" onPress={buscarCEP} />
            {dadosAPI && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>CEP: {dadosAPI.cep}</Text>
                    <Text style={styles.resultText}>Logradouro: {dadosAPI.logradouro}</Text>
                    <Text style={styles.resultText}>Bairro: {dadosAPI.bairro}</Text>
                    <Text style={styles.resultText}>Cidade: {dadosAPI.localidade}</Text>
                    <Text style={styles.resultText}>Estado: {dadosAPI.uf}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    resultText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default API_CEP