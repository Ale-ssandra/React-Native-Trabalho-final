import {React, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from './styles.js';
import { mandarParaCarrinho } from '../../pages/produto/'

export const Card = ({ route, qtdProduto }) => {
  const [qtd, setQtd] = useState(qtdProduto);

  console.log(qtdProduto)
  console.log(route)
  
  const adicionar = () => {
    setQtd(qtdProduto + 1);
    setValor((qtd + 1) * route.params.preco)
  };

  const subtrair = () => {
    if (qtd == 1) {
      alert('Quantidade não pode ser zero');
    } else {
      setQtd(qtd - 1);
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
        <Text style={styles.quantidade}>{qtd}</Text>

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