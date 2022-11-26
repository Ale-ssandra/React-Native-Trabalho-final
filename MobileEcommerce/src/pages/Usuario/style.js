import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0e0c24',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    perfil: {
        width: 150,
        height: 150,
    },
    nome: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
    },
    box: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#8f0d27 ',
        width: '60%',
        height: '40%',
        borderRadius: 50,

    },
    textoSair: {
        color: '#FFF',

        fontSize: 20,
    },
    botaoSair: {
        width: 150,
        height: 50,
        backgroundColor: '#8f0d27',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});