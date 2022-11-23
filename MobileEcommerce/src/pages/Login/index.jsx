import {Text, View, ImageBackground, Image, Button, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.08}}
        source={require('../../images/texturaFundo.png')}
        style={styles.imageBackground}>
        <View style={styles.logo}>
          <View style={styles.iconShadow}>
            <Icon name="user-circle-o" size={200} color={'#B69DF8'} />
          </View>
        </View>
        <TextInput
            editable
      maxLength={40}
    />
      </ImageBackground>
    </View>
  );
};
