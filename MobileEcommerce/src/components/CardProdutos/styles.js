import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#8f0d27',
        width: 160,
        height: 200,
        borderRadius: 30,
        alignItems:'center',
        shadowColor:'#ffff',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
      imagem:{
        height: 120,
        width: 120,
        borderRadius: 30,  
        marginTop: 8,
      },
      imagem2:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
      },

      textoNome:{
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginTop:5,
        padding: 2,
      },

      textoValor:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 20,
      },

      valor:{
        display: 'flex' ,
        height: 40,
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems:'center',
      
      },
})
