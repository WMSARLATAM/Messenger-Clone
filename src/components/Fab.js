import React, { Component } from "react";
import { Icon, Fab } from "native-base";

class Fabs extends Component {
  render() {
    return (
      <Fab position="bottomRight" style={{backgroundColor: '#0084FF'}} onPress={() => alert('Este es un boton flotante alv')}>
        <Icon name="message" type="MaterialIcons"/>
      </Fab>
    )
  }
}

export default Fabs;