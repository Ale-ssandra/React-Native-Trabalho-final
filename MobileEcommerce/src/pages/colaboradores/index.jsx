import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { styles } from '../colaboradores/style';
export const Colaboradores = ({navigation}) => {
  const link = (site) => {
    Linking.openURL(site);
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.desenvolverdor}>Desenvolvedores</Text>
          <Image
            style={styles.icone}
            source={require('../../images/hacker.png')}></Image>
        </View>

        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/96076314?v=4',
            }}></Image>
          <Text style={styles.nome}>Alessandra Pinheiro</Text>
          <Text style={styles.sobre}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Text>
          <Text style={styles.contato}>Entre em contato com Alessandra</Text>
          <View style={styles.social}>
          
            <TouchableOpacity style={styles.midia} onPress={() => link("https://www.linkedin.com/in/alessandra-pinheiro-30b085178/")}>
              
              <Image
                style={styles.contatoLinkedin}
                source={require('../../images/linkedin.png')}></Image>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.midia} onPress={() => link("https://github.com/Ale-ssandra")}>
              <Image
                style={styles.contatoGit}
                source={require('../../images/github.png')}></Image>
            </TouchableOpacity>
                
          </View>
            <Image
              style={styles.arrow}
              source={require('../../images/down-arrow.png')}></Image>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/102622495?v=4',
            }}></Image>
          <Text style={styles.nome}>Erick Viana</Text>
          <Text style={styles.sobre}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Text>
          <Text style={styles.contato}>Entre em contato com Erick</Text>
          <View style={styles.social}>
          
          <TouchableOpacity style={styles.midia} onPress={() => link("https://www.linkedin.com/in/erickviana/")}>
            <Image
              style={styles.contatoLinkedin}
              source={require('../../images/linkedin.png')}></Image>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.midia} onPress={() => link("https://github.com/ErickNotFound")}>
            <Image
              style={styles.contatoGit}
              source={require('../../images/github.png')}></Image>
          </TouchableOpacity>
        </View>
        <Image
              style={styles.arrow}
              source={require('../../images/down-arrow.png')}></Image>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/110869515?v=4',
            }}></Image>
          <Text style={styles.nome}>Thaísa Muniz </Text>
          <Text style={styles.sobre}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Text>
          <Text style={styles.contato}>Entre em contato com Thaísa</Text>
          <View style={styles.social}>
          
          <TouchableOpacity style={styles.midia} onPress={() => link("https://www.linkedin.com/in/tha%C3%ADsa-muniz89/")}>
            <Image
              style={styles.contatoLinkedin}
              source={require('../../images/linkedin.png')}></Image>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.midia} onPress={() => link("https://github.com/thaisamuniz89")}>
            <Image
              style={styles.contatoGit}
              source={require('../../images/github.png')}></Image>
          </TouchableOpacity>
              
        </View>
        <Image
              style={styles.arrow}
              source={require('../../images/down-arrow.png')}></Image>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/80910617?v=4',
            }}></Image>
          <Text style={styles.nome}>José Pedro</Text>
          <Text style={styles.sobre}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Text>
          <Text style={styles.contato}>Entre em contato com José Pedro</Text>
          <View style={styles.social}>
          
          <TouchableOpacity style={styles.midia} onPress={() => link("https://www.linkedin.com/in/jos%C3%A9-pedro-nolasco-31a057221/")}>
            <Image
              style={styles.contatoLinkedin}
              source={require('../../images/linkedin.png')}></Image>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.midia} onPress={() => link("https://github.com/J-Pedr0")}>
            <Image
              style={styles.contatoGit}
              source={require('../../images/github.png')}></Image>
          </TouchableOpacity>
              
        </View>
        <Image
              style={styles.arrow}
              source={require('../../images/down-arrow.png')}></Image>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/110867246?v=4',
            }}></Image>
          <Text style={styles.nome}>Gabriel Pinheiro</Text>
          <Text style={styles.sobre}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Text>
          <Text style={styles.contato}>Entre em contato com Gabriel</Text>
          <View style={styles.social}>
          
          <TouchableOpacity style={styles.midia} onPress={() => link("https://www.linkedin.com/in/gabriel-pinheiro-358b6986/")}>
            <Image
              style={styles.contatoLinkedin}
              source={require('../../images/linkedin.png')}></Image>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.midia} onPress={() => link("https://github.com/BilPinheiro")}>
            <Image
              style={styles.contatoGit}
              source={require('../../images/github.png')}></Image>
          </TouchableOpacity>
              
        </View>
        </View>
      </ScrollView>
    </>
  );
};
