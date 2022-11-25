import React, { useContext } from "react";
import { Text, View, Image,TouchableOpacity,ImageBackground, StatusBar } from "react-native";
import AuthContext from "../../context/AuthContext";
import { styles } from "./style";

export const Usuario = () => {
    const { logoutContext } = useContext(AuthContext)
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
                <Text style={styles.nome}>Nome</Text>
            </View>
            <View style={styles.boxSair}>
                <TouchableOpacity style={styles.botaoSair} onPress={() => logoutContext()}>
            
                    <Text style={styles.textoSair}>Sair</Text>
                   
                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}