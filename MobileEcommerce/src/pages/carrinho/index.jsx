import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import { useState, useEffect} from 'react';
import { Card } from '../../components/Card/card.jsx'
import { getFood } from '../../services/taskClient.js';
import { styles } from './styles.js';





export const Carrinho = ({navigation}) => {
  
  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    const esperaEstaPorra = async () => {
    const teste = await getFood();
    setProdutos(teste);
    }
    esperaEstaPorra();
  },[]);

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
        <Text style={styles.texto}>R$ 120,00</Text>
      </View>
      <FlatList 
        data={produtos} 
        keyExtractor={item => item.id} 
        renderItem={({item}) => <Card />} 
        />
      <View style={styles.finalizar}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
