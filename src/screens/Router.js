import LoginScreen from "./Login";
import MainScreen from "./Main";
import Chat from "./Chat";
import TakePhoto from "./Camera";

import { createStackNavigator } from "react-navigation";
import React from "react";
import { HeaderBackButton } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Login: { 
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    Main: { 
      screen: MainScreen,
      navigationOptions: {
        header: null,
      }
    },
    Camera: {
      screen: TakePhoto,
      navigationOptions: {
        header: null,
      }
    },
    Chat: { 
      screen: Chat, 
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#0084FF',
        },
        headerTintColor: '#fff',
        headerLeft:(<HeaderBackButton/>),
        title: 'React'
      }
    },
  },  
  {
    initialRouteName: 'Main'
  }
)

export default RootStack;