import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './styles';
import AuthContext, {verificaEstaParada} from '../../context/AuthContext';

export const Login = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {loginContext} = useContext(AuthContext)

  const verificacaoLogin = async () => {
    if (userName != null || password != null) {
      const retorno = await verificaEstaParada(userName, password);
      console.log(retorno);
      if (!retorno) {
         alert('Usuário e/ou senha inválidos');
      }
    }
  };

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
            onChangeText={setUserName}
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
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text onPress={() => verificacaoLogin()} style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
