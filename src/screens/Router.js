import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main";

export const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    }
  },
)