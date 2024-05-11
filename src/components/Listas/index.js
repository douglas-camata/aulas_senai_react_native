import  React from 'react'
import { View, Text, FlatList } from 'react-native'

//function Listas () {
const Listas = () => {
    // Definindo um vetor de turmas como fonte de dados para o FlatList
    const turmas = [
        { id : '1', turma: '3º A', pontos: 13 },
        { id : '2', turma: '2º A', pontos: 0 },
        { id : '3', turma: '1º A', pontos: 10 },
        { id : '4', turma: '9º A', pontos: 5 },
        { id : '5', turma: '9º B', pontos: 8 },
        { id : '6', turma: '8º A', pontos: 50 },
    ]

    //Método sort realiza a ordenação do vetor
    turmas.sort( (a, b) => b.pontos - a.pontos )

    //Criando nossa função para desenhar nossos itens da lista
    const exibirItensLista = ( props ) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text> Turma: { props.item.turma } </Text>
                <Text> Pontos: { props.item.pontos } </Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Classificação do Interclasse 2024</Text>
            <FlatList  
                data={turmas} // Passando o vetor de turmas como prop
                renderItem={exibirItensLista}   // Passamos a função que irá desenhar nossos itens
                keyExtractor={(item) => item.id}  //Passando função que extrai chave de cada item
            />
        </View>
    )
}

export default Listas
