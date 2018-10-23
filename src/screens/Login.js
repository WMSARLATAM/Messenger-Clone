import React, { Component } from 'react';
import { View, StatusBar } from "react-native";
import { styles } from "../utils/Styles";

import Logo from "../components/Logo";
import Form from "../components/Form";
import SignupSection from "../components/SignUp";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          hidden={true}
        />
        <Logo />
        <Form />
        <SignupSection />
      </View>
    )
  }
}

export default LoginScreen;