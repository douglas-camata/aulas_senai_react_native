import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, FlatList, Image, StatusBar  } from 'react-native'

import styles from './style'

const Todo = () => {
    const [tarefa, setTarefa] = useState('')
    const [listaTarefas, setListaTarefas] = useState([
        { id: 1, titulo: 'Ir no mercado', completa: false },
        { id: 2, titulo: 'Estudar para prova', completa: true },
    ])

    const exibirItens = (props) => {
        return (
            <TouchableOpacity 
                style={[styles.taskItem, 
                    { backgroundColor: props.item.completa == true ? '#525252' : '#262626' }] } 
                    // Se item estiver completo como true
                    // ? então
                    // cor #525252
                    // : senão
                    // cor #262626
                onLongPress={()=> excluirTarefa(props.item.id) }
                onPress={()=> atualizarTarefa(props.item.id) }                
            >
                {/* <Text style={styles.taskText }> {props.item.titulo} </Text>  */}
                <Text style={props.item.completa == true ? styles.taskText2 : styles.taskText }> 
                    {props.item.titulo}
                </Text>
                <Button title='X' onPress={()=> excluirTarefa(props.item.id) } />
            </TouchableOpacity>
        );
    }

    const atualizarTarefa = (id) => {
        const novaLista = listaTarefas.map(item => {
            //If para buscar na lista de tarefas o item com o mesmo id do alterado
            if (item.id == id)  
                return {...item, completa: !item.completa}
            return item
        })
        //Atualizando nossa lista de tarefas 
        setListaTarefas(novaLista)
    }



    const excluirTarefa = (id) => {
        const novaLista = listaTarefas.filter(item => item.id != id)
        setListaTarefas(novaLista)
    }
    
    const adicionarTarefa = () => {
        const novaTarefa = { id :Date.now(), titulo: tarefa, completa: false }
        const novaLista = [...listaTarefas, novaTarefa]
        setListaTarefas(novaLista)
        setTarefa('')
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#0D0D0D' barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.body}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        style={styles.input}
                        value={tarefa}
                        onChangeText={text => setTarefa(text)}
                     />
                     <TouchableOpacity onPress={adicionarTarefa} style={styles.button}>
                        <View style={styles.iconButton}>
                            <Text style={styles.textButton}>+</Text>
                        </View>
                     </TouchableOpacity>

                </View>

                <FlatList 
                    data={listaTarefas}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />

            </View>

        </View>
    )
}

export default Todo