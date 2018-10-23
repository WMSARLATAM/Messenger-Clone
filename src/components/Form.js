import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from "react-native";

class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Username"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 6,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#0084ff',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4.8,
  },
  text: {
    fontSize: 20,
    color: '#0084ff',
  },
});

export default Form;