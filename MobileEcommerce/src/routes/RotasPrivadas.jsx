import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/pages/home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const RotasPrivadas = () => {

return(
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Carrinho" component={Carrinho}/>
    <Tab.Screen name="Login" component={Login}/>
    <Tab.Screen name="Produto" component={Produto}/>
    </Tab.Navigator>

    <Stack.Navigator>
    
    <Stack.Screen name="Carrinho" component={Carrinho}/>
    <Stack.Screen name="Produto" component={Produto}/>

    </Stack.Navigator>

    </NavigationContainer>
)

} 
 export default RotasPrivadas