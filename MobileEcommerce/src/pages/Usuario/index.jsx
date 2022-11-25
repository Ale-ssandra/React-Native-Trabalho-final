import React, { useContext } from "react";
import { Text, View } from "react-native";
import AuthContext from "../../context/AuthContext";

export const Usuario = () => {
    const { logoutContext } = useContext(AuthContext)
    
    
    return(
        <View style={{flex: 1, display:'flex', justifyContent: 'center', alignItems: 'center'}}>

        <Text  onPress={logoutContext}>
           DESISTIR
        </Text>

        </View>
    )
}