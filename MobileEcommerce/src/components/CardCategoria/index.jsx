import React, { useContext } from 'react';
import {styles} from './style';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';

export const CardCategoria = ({item}) => {
  const navigation = useNavigation();
  const {setCategoriaPesquisa} = useContext(AuthContext)
  return (
    <TouchableOpacity
      onPress={() => {
        setCategoriaPesquisa(item);
        navigation.navigate('PesquisaStack')}
      }
      style={styles.cardCategoria}>
      <View style={styles.imagem}>
        <Image source={{uri: item.foto}} style={styles.image} />
        <Text style={styles.textoCategoria}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};
