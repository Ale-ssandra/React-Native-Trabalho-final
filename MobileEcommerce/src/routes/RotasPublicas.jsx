import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login/index';
import {Home} from '../pages/Home';
import {Carrinho} from '../pages/Carrinho';
import {Pesquisa} from '../pages/Pesquisa';
import { Colaboradores } from '../pages/Colaboradores';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
            backgroundColor:'#272626',
            borderRadius:20,
            left: 5,
            right: 5,
            bottom: 5,
            elevation:0,
            ...styles.shadow
          }
        ]
      }}>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown: false,
      tabBarIcon: ({focused}) =>
        (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/home.png')} resizeMode='contain' style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#B69DF8' : 'white',
            }} />
            <Text style={{color: focused ? '#B69DF8' : 'white', fontSize: 12, marginTop: 3}}>Home</Text>
          </View>
        )
    }} 
      
      />
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{headerShown: false,
          tabBarIcon: ({focused}) =>
            (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/search.png')} resizeMode='contain' style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#B69DF8' : 'white',
                }} />
                <Text style={{color: focused ? '#B69DF8' : 'white', fontSize: 12, marginTop: 3}}>Pesquisar</Text>
              </View>
            )
        }} 
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{headerShown: false,
          tabBarIcon: ({focused}) =>
            (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/carrinho.png')} resizeMode='contain' style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#B69DF8' : 'white',
                }} />
                <Text style={{color: focused ? '#B69DF8' : 'white', fontSize: 12, marginTop: 3}}>Carrinho</Text>
              </View>
            )
        }} 
      />
      <Tab.Screen 
      name="Colaboradores" 
      component={Colaboradores} 
      options={{headerShown: false,
      tabBarIcon: ({focused}) =>
        (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/hacker.png')} resizeMode='contain' style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#B69DF8' : 'white',
            }} />
            <Text style={{color: focused ? '#B69DF8' : 'white', fontSize: 12, marginTop: 3}}>Staff</Text>
          </View>
        )
    }} 
      
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{headerShown: false,
          tabBarIcon: ({focused}) =>
            (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/user.png')} resizeMode='contain' style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#B69DF8' : 'white',
                }} />
                <Text style={{color: focused ? '#B69DF8' : 'white', fontSize: 12, marginTop: 3}}>Login</Text>
              </View>
            )
        }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#B69DF8',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  }
});
