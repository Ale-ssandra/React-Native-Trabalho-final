import {StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import {useState} from 'react';
import {styles} from './styles.js';
const image = {
  uri: 'https://img.elo7.com.br/product/zoom/37C1703/papel-de-parede-adesivo-hamburgueria-preto.jpg',
};

export const Produto = ({navigation}) => {
  const [qtd, setQtd] = useState(1);
  const [valor, setValor] = useState(30);

  const adicionar = () => {
    setQtd(qtd + 1);
  };

  const subtrair = () => {
    if (qtd == 1) {
      alert('Quantidade não pode ser zero');
    } else {
      setQtd(qtd - 1);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.discordapp.com/attachments/1006252680735363154/1044747356983263282/texturaFundo.png',
      }}
      imageStyle={{opacity: 0.09}}
      style={styles.imageBackground}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.cont1}>
        <View style={styles.viewFoto}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Image
              source={{
                uri: 'https://www.imagensempng.com.br/wp-content/uploads/2022/09/Lamborghini-Amarela-Png-300x300.png',
              }}
              style={styles.produto}
            />
          </ImageBackground>
        </View>
      </View>

      <View style={styles.cont2}>
        <View style={styles.informacao}>
          <View style={styles.viewTexto}>
            <View style={styles.texto1espaco}>
              <Text style={styles.texto1}>X - Beacon</Text>
            </View>
            <View style={styles.texto2espaco}>
              <Text style={styles.texto2}>
                Melhor lanche que alguém já comeu.? tu é mano?..
              </Text>
            </View>
          </View>

          <View style={styles.viewCompra}>
            <View style={styles.quantidade}>
              <TouchableOpacity onPress={subtrair}>
                <Image
                  source={require('../../images/baixo.png')}
                  style={styles.icone}
                />
              </TouchableOpacity>

              <Text style={styles.quantidade1} >{qtd}</Text>

              <TouchableOpacity onPress={adicionar}>
                <Image
                  source={require('../../images/cima.png')}
                  style={styles.icone}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.valor}>
              <Text style={styles.textoValor1}>Add no carrinho</Text>
              <Text style={styles.textoValor2}>R$ {valor}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};
