import { NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import PreLogin from './screens/PreLogin';
import Login from './screens/Login';

const Stack = createStackNavigator(); 

export default function App() { 
return ( 
<NavigationContainer> 
  <Stack.Navigator initialRouteName="PreLogin"> 
    <Stack.Screen name="PreLogin" component={PreLogin} options={{ headerShown: false }} /> 
    <Stack.Screen name="Login" component={Login}/>
  </Stack.Navigator> 
</NavigationContainer>
);
}