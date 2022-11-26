import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login';
import {Home} from '../pages/home/index';
import {Pesquisa} from '../pages/Pesquisa';
import {Colaboradores} from '../pages/colaboradores';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Produto} from '../pages/produto';

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




export const RotasPublicas = () => {
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
                  tintColor: focused ? '#0e0c24' : 'white',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0e0c24' : 'white',
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
                  tintColor: focused ? '#0e0c24' : 'white',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0e0c24' : 'white',
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
        name="Colaboradores"
        component={Colaboradores}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/hacker.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#0e0c24' : 'white',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0e0c24' : 'white',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Staff
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
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
                  tintColor: focused ? '#0e0c24' : 'white',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0e0c24' : 'white',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Login
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
    shadowColor: '#0e0c24',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});
