import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home"
import Cadastro from "./Cadastro"
import Relatorio from "./Relatorio"
import Grafico from "./Grafico"
import { MaterialIcons, IonsIcon } from '@expo/vector-icons';

import PrimeiroComponente from '../components/PrimeiroComponente'
import ComponenteClasse from '../components/ComponenteClasse'
import Jogo from '../components/JogoAdivinhacao'
import Listas from '../components/Listas';
import Todo from '../components/Todo';
import MaiorMenor from '../components/MaiorMenor';
import Estilizacao from '../components/Estilizacao';
import Contador from '../components/Contador';
import Login from '../components/Login';
import Evento from '../components/Evento';
import API_Cep from '../components/API_CEP';
import API_Dog from '../components/API_Dog';
import API_Lista from '../components/API_Lista';
import API_Livros from '../components/API_Livros';
import Picker from '../components/Picker'
import API_Cad_Produto from '../components/API_Cad_Produto'
import Animacao from "../components/Animacao";
import LoginAnimado from '../components/LoginAnimado'

//Configuração do Drawer Navigator
const Drawer = createDrawerNavigator()

const MenuDrawer = ({navigation}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#c6cbef',
                        width: 250,
                    },
                    drawerLabelStyle: {
                        fontSize: 18,
                    },
                    drawerActiveBackgroundColor: '#e9e9e9',
                    drawerActiveTintColor: '#008069',
                }}
                initialRouteName="Home">

                <Drawer.Screen
                    name="Home" component={Home}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="Cadastro" component={Cadastro}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="add" size={size} color={color} />
                        ),
                    }} />
                <Drawer.Screen name="Relatorio" component={Relatorio}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="print" size={size} color={color} />
                        ),
                    }} />
                <Drawer.Screen name="Grafico" component={Grafico} 
                    options={{
                        drawerIcon: ({ size, color }) => (
                          <MaterialIcons name="bar-chart" size={size} color={color} />
                        ),
                      }}/>

                {/* <Drawer.Screen name="PrimeiroComponente" component={PrimeiroComponente} />
                <Drawer.Screen name="ComponenteClasse" component={ComponenteClasse} />
                <Drawer.Screen name="Maior Menor" component={MaiorMenor} /> */}
                <Drawer.Screen name="Estilização" component={Estilizacao} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Evento" component={Evento} />
                <Drawer.Screen name="Contador" component={Contador} />
                <Drawer.Screen name="Adivinhação" component={Jogo} />
                <Drawer.Screen name="Listas" component={Listas} />
                <Drawer.Screen name="ToDo" component={Todo} />
                <Drawer.Screen name="API Dog" component={API_Dog} />
                <Drawer.Screen name="API CEP" component={API_Cep} />
                <Drawer.Screen name="Picker" component={Picker} />
                <Drawer.Screen name="API Lista" component={API_Lista} />
                <Drawer.Screen name="API Livros" component={API_Livros} />
                <Drawer.Screen name="API Cad Produtos" component={API_Cad_Produto}  />
                <Drawer.Screen name="Animação" component={Animacao}  />
                <Drawer.Screen name="Login Animado" component={LoginAnimado}  />
                {/* <Drawer.Screen name="API Cad Produtos"  > 
                    {() => <API_Cad_Produto navigation={navigation} route={{params:''}} />}
                </Drawer.Screen> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MenuDrawer