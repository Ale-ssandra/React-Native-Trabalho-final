import React, { useContext, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import {Card} from '../../components/Card/card.jsx';
import {styles} from './styles.js';
import AuthContext from '../../context/AuthContext.jsx';

export const Carrinho = ({}) => {
  const [valorTotal, setValorTotal] = useState(0)
  const {zeraCarrinho, carrinho} = useContext(AuthContext)

  useEffect(() => {
    carrinho.forEach(element => {
      setValorTotal(valorTotal + (element.quantidade * element.preco))
    });
  }, [carrinho])

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.discordapp.com/attachments/1006252680735363154/1044747356983263282/texturaFundo.png',
      }}
      imageStyle={{opacity: 0.09}}
      style={styles.imageBackground}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.header}>
        <Text style={styles.texto}>Carrinho</Text>
        <Text style={styles.texto}>R$ {valorTotal}</Text>
      </View>
      <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card item={item} />}
      />
      <View style={styles.finalizar}>
        <TouchableOpacity style={styles.botao} >
          <Text style={styles.botaoTexto}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};