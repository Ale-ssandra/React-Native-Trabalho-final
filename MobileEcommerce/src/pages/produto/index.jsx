import { RecyclerViewBackedScrollViewComponent, StatusBar } from 'react-native';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useContext, useState } from 'react';
import { styles } from './styles.js';
import AuthContext from '../../context/AuthContext.jsx';
const image = {
  uri: 'https://img.elo7.com.br/product/zoom/37C1703/papel-de-parede-adesivo-hamburgueria-preto.jpg',
};
;
export const Produto = ({ navigation, route }) => {
  const [qtdProduto, setqtdProduto] = useState(1);
  const [valor, setValor] = useState(route.params.preco);
  const { adicionaCarrinho } = useContext(AuthContext)

  const adicionar = () => {
    setqtdProduto(qtdProduto + 1);
    setValor((qtdProduto + 1) * route.params.preco)
  };

  const subtrair = () => {
    if (qtdProduto == 1) {
      alert('Quantidade não pode ser zero');
    } else {
      setqtdProduto(qtdProduto - 1);
      setValor((qtdProduto - 1) * route.params.preco);
    }
  };

  const mandarParaCarrinho = () => {

   
    const item = {preco: route.params.preco, quantidade:qtdProduto , nome: route.params.nome, foto: route.params.foto} ;
    adicionaCarrinho(item) 
  
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.discordapp.com/attachments/1006252680735363154/1044747356983263282/texturaFundo.png',
      }}
      imageStyle={{ opacity: 0.09 }}
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
                uri: route.params.foto
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
              <Text style={styles.texto1}>{route.params.nome}</Text>
            </View>
            <View style={styles.texto2espaco}>
              <Text style={styles.texto2}>
                {route.params.descricao}
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

              <Text style={styles.quantidade1} >{qtdProduto}</Text>

              <TouchableOpacity onPress={adicionar}>
                <Image
                  source={require('../../images/cima.png')}
                  style={styles.icone}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.valor} onPress={() => mandarParaCarrinho()}>
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
