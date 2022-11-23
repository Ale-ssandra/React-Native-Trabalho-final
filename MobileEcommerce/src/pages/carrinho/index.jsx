import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import { Card } from '../../components/Card/card.jsx'
import { styles } from './styles.js';

export const Carrinho = ({navigation}) => {
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

      <Card />

      <View style={styles.finalizar}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
