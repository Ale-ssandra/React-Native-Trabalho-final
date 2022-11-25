import React, { useContext, useState } from "react";
import { Text, View, Image,TouchableOpacity,ImageBackground, StatusBar ,useEffect } from "react-native";
import AuthContext from "../../context/AuthContext";
import { styles } from "./style";
import { getLogin } from "../../services/taskClient";

export const Usuario = () => {
    const { logoutContext } = useContext(AuthContext)
<<<<<<< HEAD
=======
    const [login, setLogin] = useState('')

    const nomeUsuario = async () => {
        const newUsuario = await getLogin();
        setLogin(newUsuario);
      };
    

>>>>>>> 1870d1d3836a4040011c72cea4425b4b3a79ed44
    return (
        <ImageBackground
        source={{
          uri: 'https://cdn.discordapp.com/attachments/1006252680735363154/1044747356983263282/texturaFundo.png',
        }}
        imageStyle={{opacity: 0.09}}
        style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />

            <View style={styles.box}>

                <Image style={styles.perfil} source={require('../../images/user.png')}>
                </Image>
                <Text style={styles.nome}>{login.nome}</Text>
            </View>
            <View style={styles.boxSair}>
<<<<<<< HEAD
                <TouchableOpacity style={styles.botaoSair} onPress={() => logoutContext()}>
=======
                <TouchableOpacity style={styles.botaoSair} onPress = {()=> logoutContext()}>
>>>>>>> 1870d1d3836a4040011c72cea4425b4b3a79ed44
            
                    <Text style={styles.textoSair}>Sair</Text>
                   
                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}