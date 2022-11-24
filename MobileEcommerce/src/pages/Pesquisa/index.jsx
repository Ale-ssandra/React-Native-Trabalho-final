import { FlatList, Image, ImageBackground, Text, TextInput, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { styles } from "./style"
import AuthContext from "../../context/AuthContext"
import CardProdutos from "../../components/CardProdutos"

export const Pesquisa =(item)=>{
    
    const {produtos, categoriaPesquisa, setCategoriaPesquisa} = useContext(AuthContext)
    const [pesquisa, setPesquisa] = useState(" ")
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
   
   useEffect(() => {
        setProdutosFiltrados(produtosFiltrados.filter(produto => produto.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1))   
    
}, [pesquisa]);

    useEffect(()=>{
        if(categoriaPesquisa != null){
            setProdutosFiltrados(produtos.filter(produto => produto.categoriaId == categoriaPesquisa.id))
        }  else{
            setProdutosFiltrados(produtos);
        }
    } ,[categoriaPesquisa]); //])
   
    return(
        <View style={styles.container}>
            <View style={styles.containerPesquisa}>
                <Image style={styles.imgPesquisa} source={require('../../images/search.png')} />
                <TextInput type={'text'} style={styles.inputPesquisa} placeholder={'Pesquisa'} placeholderTextColor={'#ffffff'} onChangeText={(e) => {setPesquisa(e)}}/>
            </View>
            <View style={styles.boxFiltros}>
                <Text style={styles.textInput}>Pesquisa: </Text>
                <Text style={styles.textInput} onPress={() => setCategoriaPesquisa(null)}>(Filtros Ativos) </Text>
            </View>
            <ImageBackground
        imageStyle={{opacity: 0.08}}
        source={require('../../images/texturaFundo.png')}
        style={styles.imageBackground}>
             <FlatList
            numColumns={2}
            data={produtosFiltrados}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <View style={styles.cardsProdutos}><CardProdutos item={item}  /></View>
            } 
            />

        </ImageBackground>

        </View>
    )


}
