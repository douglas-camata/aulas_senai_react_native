import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff' 
    },
    imagem: {
        width: 250,
        height: 150,
        resizeMode: 'stretch',
        marginBottom: 40,
    },
    input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 2,
        marginVertical: 10,
        textAlign: 'center'
    },
    texto: {
        fontSize: 18,
        marginVertical: 10
    }
})

export default styles