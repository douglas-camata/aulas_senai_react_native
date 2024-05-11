import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0D0D0D',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    logo: {
        width: 150,
        resizeMode: 'contain'
    },
    body: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 20,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        paddingTop: 10
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        color: '#F2F2F2',
        fontSize: 16,
    },
    button: {
        width: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        width: 18,
        height: 18,
        borderColor: '#F2F2F2',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    textButton: {
        lineHeight: 16,
        color: '#F2F2F2',
    },
    list: {
        marginTop: 20,
    },
    taskItem: {
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 8,
        padding: 12,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#333333',
        shadowOffset: { width: 2, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.8,
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 16,
        color: '#F2F2F2',
    },
    taskText2: {
        fontSize: 16,
        color: '#919191',
        textDecorationLine: 'line-through'
    },
});
export default styles