
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/pages/home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const App = () => {

return(
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>

    </NavigationContainer>
)

} 
 export default App