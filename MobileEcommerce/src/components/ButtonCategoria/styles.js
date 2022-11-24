import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        height:30,
        width: 'auto',
        borderRadius: 50,
        padding: 4, 
    },
    texto:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButon:{
        height: 20, 
        width: 20,
        marginRight: 5,
    }

})