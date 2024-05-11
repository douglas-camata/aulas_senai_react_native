import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }} />
        <Tab.Screen name="Cadastro" component={Cadastro}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="add" size={size} color={color} />
            ),
          }} />
        <Tab.Screen name="Relatorio" component={Relatorio}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="print" size={size} color={color} />
            ),
          }} />
        <Tab.Screen name="Grafico" component={Grafico}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="bar-chart" size={size} color={color} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabs