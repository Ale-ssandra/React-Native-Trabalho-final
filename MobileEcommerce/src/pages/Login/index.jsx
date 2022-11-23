import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React, { useState } from "react";
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthProvider} from '../../context/AuthContext';
import {verificaEstaParada} from '../../context/AuthContext';

export const Login = ({navigation}) => {

  const [  userName,setUserName] = useState("")
    const [  password,setPassword] = useState("")

  
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.08}}
        source={require('../../images/texturaFundo.png')}
        style={styles.imageBackground}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.logo}>
          <View style={styles.imageBox}>
            <Image
              source={require('../../images/user.png')}
              style={styles.image}
            />
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
            onChange={setUserName} 
            value={userName}
          />
          <TextInput
            type="password"
            style={styles.inputs}
            placeholder="Senha"
            placeholderTextColor={'#E8DEF8'}
            editable
            maxLength={40}
            secureTextEntry={true}
            onChange={setPassword} 
            value={password}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text
              onPress={() => verificaEstaParada(userName, password)}
              style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
