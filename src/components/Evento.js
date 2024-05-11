import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, Alert} from "react-native";

const Evento = () => {
    /*function Cliquei () {
        console.log("Clicou")
    }*/

    const Cliquei = () => {
        Alert.alert("Clicou")
    }

    return (
        <View>
            <Button title="Clique aqui" onPress={Cliquei} />
            <Button title="Clique 2" onPress={() => Alert.alert("Clicou 2") } />
        </View>
    )
}

export default Evento