import {React, useContext, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.js';
import { mandarParaCarrinho, } from '../../pages/produto'
import AuthContext from '../../context/AuthContext.jsx';

export const Card = ( {item} ) => {
const {alteraQuantidade} = useContext(AuthContext)


  const adicionar = () => {
    alteraQuantidade(item, 1)
  };

  const subtrair = () => {
    if (item.quantidade == 1) {
      alert('Quantidade não pode ser zero');
    } else {
      alteraQuantidade(item, 0)
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image
          source={require('../../images/trash.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: '#FFFF',
          }}
        />
      </TouchableOpacity>
      <View style={styles.preco}>
        <Image
          source={{
            uri: item.foto,
          }}
          style={{
            width: 60.62,
            height: 36.93
          }}
        />
        <Text style={styles.texto}>R$ {item.preco}</Text>
      </View>
      <View styles={styles.qtd}>
        <TouchableOpacity onPress={adicionar}>
          <Image
            source={require('../../images/cima.png')}
            style={styles.imagens}
          />
        </TouchableOpacity>
        <Text style={styles.quantidade}>{item.quantidade}</Text>

        <TouchableOpacity onPress={subtrair}>
          <Image
            source={require('../../images/baixo.png')}
            style={styles.imagens}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};