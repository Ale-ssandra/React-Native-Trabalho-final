import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home/index';
import {Carrinho} from '../pages/Carrinho';
import {Pesquisa} from '../pages/Pesquisa';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Produto} from '../pages/produto';
import {Usuario} from '../pages/Usuario';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
 return( <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />

    <Stack.Screen name="Produto" component={Produto} options={{ title: "Nome Produto", headerShown: true}} />
  </Stack.Navigator>
 );
}
export const SearchStack = () => {
 return( <Stack.Navigator >
    <Stack.Screen name="Pesquisa" component={Pesquisa} options={{headerShown: false}} />

    <Stack.Screen name="Produto" component={Produto} options={{ title: "Nome Produto", headerShown: true}} />
  </Stack.Navigator>
 );
}




export const RotasPrivadas = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            borderTopWidth: 0,
            position: 'absolute',
            height: 60,
            backgroundColor: '#2f0d26',
            borderRadius: 20,
            left: 5,
            right: 5,
            bottom: 5,
            elevation: 0,
            ...styles.shadow,
          },
        ],
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'white' : '#6f0d26',
                }}
              />
              <Text
                style={{
                  color: focused ? 'white' : '#6f0d26',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PesquisaStack"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/search.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'white' : '#6f0d26',
                }}
              />
              <Text
                style={{
                  color: focused ?'white' : '#6f0d26',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Pesquisa
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/carrinho.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'white' :'#6f0d26',
                }}
              />
              <Text
                style={{
                  color: focused ?'white' : '#6f0d26' ,
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Carrinho
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={Usuario}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'white' : '#6f0d26' ,
                }}
              />
              <Text
                style={{
                  color: focused ? 'white' :'#6f0d26' ,
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Usuario
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '##6f0d26',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});
