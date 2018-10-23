import React, { Component } from "react";
import { Header, Thumbnail, Item, Input, Icon } from "native-base";

class Navbar extends Component {
  render() {
    return(
      <Header searchBar>
        <Item>
          <Icon name="search" type="MaterialIcons"/>
          <Input placeholder="Buscar" />
          <Thumbnail small source={require('../images/Perfil.jpg')} />
        </Item>
      </Header>
    )
  }
}

export default Navbar;