import React, { Component } from "react";
import { Container, List } from 'native-base';

import Users from "../components/ListItem";

class Message extends Component {
  render() {
    return (
      <Container>
        <List>
          <Users />
        </List>
      </Container>
    )
  }
}

export default Message;