import React from "react";
import { View, Text} from 'react-native'
import styles from './styles/EstilizacaoStyle'

const Estilizacao = () => {
    return (
        <View style={{flex:1, width:'100%', flexDirection:'row'}}>
            {/* <Text style={styles.texto}>React Native</Text> */}
            <View style={{flex:1, backgroundColor:'red' }} />
            <View style={{flex:5, backgroundColor:'darkorange' }} />
            <View style={{flex:3, backgroundColor:'green' }} />
            <View style={{flex:1, backgroundColor:'darkblue' }} />
        </View>
    )
}
export default Estilizacao