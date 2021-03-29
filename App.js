import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const navigator = createStackNavigator(
  {// paginas
    Home: HomeScreen,
    Menu:MenuScreen,
    Login:LoginScreen,
    SignUp:SignUpScreen
  },
  {// rota inicial!
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Gadolandia',
    },
  }
);
//createStacknav é oque faz a pagina carregar.
export default createAppContainer(navigator);
