import { StyleSheet } from "react-native"

const corPrincipal = '#05f'
const corSecundaria = '#29292E'
const corBranco = '#fff'

const meusEstilos = StyleSheet.create({
    conteudoHeader: {
        flex: 1,
        backgroundColor: corPrincipal
    },
    conteudoCorpo: {
        flex: 1,
        backgroundColor: corBranco,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%',
        paddingTop: '2%'
    },
    botao: {
        backgroundColor: corPrincipal,
        borderRadius: 4,
        paddingVertical: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    textoBotao: {
        fontSize: 18,
        color: corBranco,
        fontWeight: 'bold'
    }
})

export {
    corPrincipal,
    corSecundaria,
    corBranco,
    meusEstilos
}