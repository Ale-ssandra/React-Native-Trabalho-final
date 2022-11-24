import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AuthContext from '../../context/AuthContext';
import {styles} from './styles';

export const ButtonCategoria = () => {
  const {categoriaPesquisa, setCategoriaPesquisa} = useContext(AuthContext);

  if (categoriaPesquisa != null) {
    return (
      <TouchableOpacity style={styles.container} onPress={() => {
        setCategoriaPesquisa(null)
      }} >
        <Image source={require('../../images/cancel.png')} style={styles.closeButon}/>
        <Text style={styles.texto}>{categoriaPesquisa.nome}</Text>
      </TouchableOpacity>
    );
  } else return <Text> </Text>;
};
