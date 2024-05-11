import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from "./Home"
import Cadastro from "./Cadastro"
import Relatorio from "./Relatorio"
import Grafico from "./Grafico"

const Tab = createMaterialTopTabNavigator()

const MenuTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Relatorio" component={Relatorio} />
                <Tab.Screen name="Grafico" component={Grafico} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MenuTab
