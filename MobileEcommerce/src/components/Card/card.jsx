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

export const Card = () => {
  const [qtd, setQtd] = useState(1);

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
            uri: 'https://w7.pngwing.com/pngs/315/715/png-transparent-burger-with-ham-and-cheese-hamburger-bacon-sushi-pizza-cheeseburger-burger-king-food-recipe-cheese-thumbnail.png',
          }}
          style={{
            width: 60.62,
            height: 36.93,
          }}
        />
        <Text>R$ 30,00</Text>
      </View>
      <View styles={styles.qtd}>
        <TouchableOpacity onPress={adicionar}>
          <Image
            source={require('../../images/cima.png')}
            style={styles.imagens}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>{qtd}</Text>

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
