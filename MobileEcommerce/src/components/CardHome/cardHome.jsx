import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text,  TouchableOpacity, Image, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from "./styles"



const CardHome = ({ item }) => {
    const navigation = useNavigation();
   
    return(
        <TouchableOpacity  style={styles.taskContainer} onPress={() => navigation.navigate('Produto', item) }>
           <View style={styles.imagem}>
            <Image style={styles.imagem2} source={{uri: item.foto}} />
           </View>
                        <Text style={styles.textoNome}>{item.nome}</Text>
                        <View style={styles.valor} >
                        <Text style={styles.textoValor}>R$ {item.preco}</Text>
                        <Icon name='shopping-cart' size={30} color={'#EE6B22'}/> 
                        </View>
        </TouchableOpacity>
    )  
}

export default CardHome;
