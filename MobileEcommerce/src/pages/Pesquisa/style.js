import { StyleSheet } from 'react-native';
 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0c24',
      },
      containerPesquisa:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 120,
        width: "100%",
          },
      imgPesquisa:{
        position: 'absolute',
        tintColor: '#fff',
        height: 40,
        width: 40,
        left: 75, 
        bottom: 10,
      },
      inputPesquisa:{
        width: '70%',
        height: 60,
        borderColor: '#8f0d27',
        borderWidth:2,
        borderRadius: 100,
        paddingLeft: 70,
        color: '#8f0d27',
        fontSize: 18,
      },    
      boxFiltros:{
        height: '7%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 20,
      },  
      textInput:{
        fontSize: 20,
        color: '#FFFFFF',
        left: 30,
      },
      imageBackground: {
        flex: 1,
        left: 30,
        borderTopColor: '#8f0d27',
        borderLeftColor:'#8f0d27',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        
        paddingBottom: 65
      },
      cardsProdutos:{
        padding: 10
      }
 });