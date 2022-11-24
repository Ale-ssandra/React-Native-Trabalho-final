import { FlatList, Image, ImageBackground, Text, TextInput, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { styles } from "./style"
import AuthContext from "../../context/AuthContext"
import CardProdutos from "../../components/CardProdutos"
import { ButtonCategoria } from "../../components/ButtonCategoria"

export const Pesquisa =(item)=>{
    
    const {produtos, categoriaPesquisa, setCategoriaPesquisa} = useContext(AuthContext)
    const [pesquisa, setPesquisa] = useState(" ")
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
   
   useEffect(() => {
        setProdutosFiltrados(produtos.filter(produto => produto.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1))
}, [pesquisa, categoriaPesquisa])
   
    return(
        <View style={styles.container}>
            <View style={styles.containerPesquisa}>
                <Image style={styles.imgPesquisa} source={require('../../images/search.png')} />
                <TextInput type={'text'} style={styles.inputPesquisa} placeholder={'Pesquisa'} placeholderTextColor={'#ffffff'} onChangeText={(e) => {setPesquisa(e)}}/>
            </View>
            <View style={styles.boxFiltros}>
                <Text style={styles.textInput}>Pesquisa: </Text>
                <ButtonCategoria />
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
                if(categoriaPesquisa != null){
                    if(item.categoriaId == categoriaPesquisa.id){
                      return <View style={styles.cardsProdutos}><CardProdutos item={item}  /></View>
                    }
                }else return <View style={styles.cardsProdutos}><CardProdutos item={item}  /></View>
            }
            } 
            />

        </ImageBackground>

        </View>
    )


}
