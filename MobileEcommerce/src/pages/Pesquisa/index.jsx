import { FlatList, Image, ImageBackground, Text, TextInput, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { styles } from "./style"
import AuthContext from "../../context/AuthContext"
import CardProdutos from "../../components/CardProdutos"
import { ButtonCategoria } from "../../components/ButtonCategoria"

export const Pesquisa =()=>{
    
    const {produtos, categoriaPesquisa} = useContext(AuthContext)
    const [pesquisa, setPesquisa] = useState("")
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [controleFiltro, setControleFiltro] = useState([])
   
    



    useEffect(() =>{
        
        setProdutosFiltrados(controleFiltro.filter(produto => produto.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1))  
    },[pesquisa])
 


    useEffect(() =>{
        if(categoriaPesquisa != null){
            setProdutosFiltrados(produtos.filter(produto => produto.categoriaId == categoriaPesquisa.id));
            setControleFiltro(produtos.filter(produto => produto.categoriaId == categoriaPesquisa.id));
       }
        else {
            setProdutosFiltrados(produtos);
            setControleFiltro(produtos);
        }
    },[categoriaPesquisa])

    return(
        <View style={styles.container}>
            <View style={styles.containerPesquisa}>
                <Image style={styles.imgPesquisa} source={require('../../images/search.png')} />
                <TextInput type={'text'} style={styles.inputPesquisa} placeholder={'Pesquisa'} placeholderTextColor={'#ffffff'} onChangeText={(e) => {setPesquisa(e)}}/>
            </View>
            <View style={styles.boxFiltros}>
                <Text style={styles.textInput}>Pesquisa: </Text>
                {categoriaPesquisa != null ? <ButtonCategoria /> : null}
            </View>
            <ImageBackground
        imageStyle={{opacity: 0.08}}
        source={require('../../images/texturaFundo.png')}
        style={styles.imageBackground}>
             <FlatList
            data={produtosFiltrados}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
               return <View style={styles.cardsProdutos}><CardProdutos item={item}  /></View>
            }
            } 
            />
        </ImageBackground>

        </View>
    )


}
