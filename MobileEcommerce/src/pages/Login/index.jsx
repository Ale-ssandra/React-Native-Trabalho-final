import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
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
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.logo}>
          <View style={styles.imageBox}>
           <Image source={require('../../images/user.png')} style={styles.image}/>
          </View>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            type="text"
            style={styles.inputs}
            placeholder="Login"
            placeholderTextColor={'#E8DEF8'}
            editable
            maxLength={40}
          />
          <TextInput
            type="password"
            style={styles.inputs}
            placeholder="Senha"
            placeholderTextColor={'#E8DEF8'}
            editable
            maxLength={40}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonLogin} >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      
      </ImageBackground>

    </View>
  );
};
