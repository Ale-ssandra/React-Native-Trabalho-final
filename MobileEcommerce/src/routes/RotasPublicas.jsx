import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login/index'
import { Home } from '../pages/Home';
import { Carrinho } from '../pages/Carrinho';
import { Pesquisa } from '../pages/Pesquisa';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export const RotasPublicas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Tab.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false}}/>
      <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false}}/>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
};