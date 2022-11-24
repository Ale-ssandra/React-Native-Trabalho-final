import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardHome from '../../components/CardHome/cardHome';
import {CardCategoria} from '../../components/CardCategoria';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {getCategoria, getFood} from '../../services/taskClient';


export const Home = ({navigation}) => {
  const [categoria, setCategoria] = useState([]);
  const [produtos, setProdutos] = useState([]);
  
  let i = 1;

  useEffect(() => {
    const pegaInformações = async () => {
      const cats = await getCategoria();
      const prods = await getFood();
      setCategoria(cats.data);
      setProdutos(prods);
    }

    pegaInformações();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Home</Text>
        <Text style={styles.texto}>Logo</Text>
        <Text style={styles.texto}>Loja</Text>
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
            renderItem={({item}) => 
            item.categoriaId == i ? <CardHome item={item} /> : null
            } 
            />
            </View>
      </ImageBackground>
    </View>
  );
};
