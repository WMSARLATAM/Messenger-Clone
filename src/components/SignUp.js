import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#007bff',
    backgroundColor: 'transparent',
  },
});

export default SignupSection;