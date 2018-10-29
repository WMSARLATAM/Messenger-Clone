import React, { Component } from 'react';
import { StatusBar } from "react-native";
import { Container, Content } from "native-base";

class Chat extends Component {
  render() {
    return (
      <Container>
        <StatusBar 
          translucent={true}
          backgroundColor="rgba(0,0,0,0.2)"
        />
      </Container>
    )
  }
}

export default Chat;

