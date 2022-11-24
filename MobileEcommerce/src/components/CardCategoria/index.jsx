import React from 'react';
import {styles} from './style';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const CardCategoria = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PesquisaStack', item)}
      style={styles.cardCategoria}>
      <View style={styles.imagem}>
        <Image source={{uri: item.foto}} style={styles.image} />
        <Text style={styles.textoCategoria}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};
