import React from "react";
import { styles } from "./style"; 
import { Text, View, Image } from "react-native";


export const CardCategoria = () => {

    return (
        <View style={styles.cardCategoria}>
        <View style={styles.imgCategoria}>
            <Image/>


        </View>
        <Text style={styles.textoCategoria}>categoria</Text>

    </View>
    )


}