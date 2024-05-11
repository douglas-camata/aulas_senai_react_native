import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://s3-sa-east-1.amazonaws.com/recrutai-dev/fa6e1de0-005a-11ec-9c76-59037194a6de/logo/fa6e1de0-005a-11ec-9c76-59037194a6de_1630771003936_128.png' }} style={styles.img} />
            <Text style={{fontSize:30}}>Login</Text>
            <TextInput placeholder='Digite o usuário' style={styles.input} />
            <TextInput placeholder='Digite a senha' style={styles.input} secureTextEntry={true} />
            <Button title="Entrar" color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    img : {
      width: '80%',
      height: 60,
      resizeMode: 'contain'
    },
    input :{
      borderWidth: 1,
      borderColor: 'black',
      margin: 10,
      padding: 5,
      width: 300,
      backgroundColor: '#fff'
    }
  });

  export default Login