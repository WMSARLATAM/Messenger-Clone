import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/Logo.png')}/>
        <Text style={styles.text}>Messenger</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 20
  }
});

export default Logo;