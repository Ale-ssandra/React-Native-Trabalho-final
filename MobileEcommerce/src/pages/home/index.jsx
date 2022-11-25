import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useContext} from 'react';
import {CardCategoria} from '../../components/CardCategoria';
import {styles} from './styles';
import AuthContext from '../../context/AuthContext';
import CardProdutos from '../../components/CardProdutos';


export const Home = ({navigation}) => {
  const {produtos, categoria} = useContext(AuthContext)
  

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.header}>
        <View style={styles.logo}>
        <Image source={require('../../images/Logo.png')} style={{height: '100%', width: '100%'}}/>
        </View>
        <Text style={styles.texto}>(Nome Usuario)</Text>
      </View>

      <ImageBackground
        imageStyle={{opacity: 0.08}}
        source={require('../../images/texturaFundo.png')}
        style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.banner}
          onPress={() => {
            console.log('direcionarrr');
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 12,
            }}>
            <Text style={styles.textoBanner}>Ganhe</Text>
            <Text style={styles.textoBanner}>20% off</Text>
          </View>
          <Image
            style={{width: 120, height: 120}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigbXuQd0qPA4daOcE_WJmFSVY_56PqygHX-mDkgrwRTZJT0rxmjg9fq912j_Bgp-cM8A&usqp=CAU',
            }}
          />
        </TouchableOpacity>

        <View style={styles.flatbox}>
          <FlatList
            data={categoria}
            keyExtractor={item => item.id}
            renderItem={(item) => <CardCategoria item={item.item} />} 
            horizontal={true} style={{marginBottom: 5}}
          />
        <FlatList
            numColumns={2}
            data={produtos}
            keyExtractor={item => item.id}
            style={styles.cardsProdutos}
            renderItem={({item}) => 
            item.categoriaId == 1 ? <View style={styles.cardsProdutos}><CardProdutos item={item}  /></View> : null
            } 
            />
            </View>
      </ImageBackground>
    </View>
  );
};
