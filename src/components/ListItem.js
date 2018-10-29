import React, { Component } from "react";
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

class Users extends Component {
  render() {
    return (
      <ListItem avatar onPress={() => this.props.navigation.navigate('Chat')}>
        <Left>
          <Thumbnail source={require('../images/user1.jpeg')}/>
        </Left>
        <Body>
          <Text>Mia Khalifa</Text>
          <Text note>Mia envió una foto.</Text>
        </Body>
        <Right>
          <Text note>10:43 pm</Text>
        </Right>
      </ListItem>
    )
  }
}

export default Users;