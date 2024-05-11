import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    texto : {
        fontSize: 30,
        borderWidth: 4,                 //Tamanho da borda
        borderColor: '#20232a',         //cor da borda
        borderRadius: 6,                //Arredondamento da borda 
        backgroundColor: '#61dafb',     //cor de fundo
        color: '#20232a',               //cod da fonte
        textAlign: 'center',            //alinhamento do texto
        fontWeight: 'bold',             //estilo da fonte
        paddingHorizontal: 20,          //espaçamento interno nas 2 laterais
        paddingVertical: 10,            //espaçamento interno em cima e em baixo

        shadowColor: '#171717',         //cor do sombreado
        shadowOpacity: 0.5,             //opacidade do sombreado
        shadowRadius: 3,                //arredondamento do sombreado
        shadowOffset: {width: 6, height: 6},    //tamanho da sombra        
    }
})

export default styles