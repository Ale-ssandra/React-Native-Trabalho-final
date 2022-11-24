import { FlatList, Image, ImageBackground, Text, TextInput, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { styles } from "./style"
import AuthContext from "../../context/AuthContext"
import CardProdutos from "../../components/CardProdutos"

export const Pesquisa =({navigation})=>{
    
    const {produtos, categoria} = useContext(AuthContext)
    const [pesquisa, setPesquisa] = useState(" ")
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
   
   
   useEffect(() => {
       setProdutosFiltrados(produtos.filter(produto => produto.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1))
   }, [pesquisa])

   
    return(
        <View style={styles.container}>
            <View style={styles.containerPesquisa}>
                <Image style={styles.imgPesquisa} source={require('../../images/search.png')} />
                <TextInput type={'text'} style={styles.inputPesquisa} placeholder={'Pesquisa'} placeholderTextColor={'#ffffff'} onChangeText={(e) => {setPesquisa(e)}}/>
            </View>
            <View style={styles.boxFiltros}>
                <Text style={styles.textInput}>Pesquisa: </Text>
                <Text style={styles.textInput}>(Filtros Ativos) </Text>
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
                <CardProdutos item={item} />
            } 
            />

        </ImageBackground>

        </View>
    )


}
