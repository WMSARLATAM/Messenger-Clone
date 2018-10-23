import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';

import Message from "../screens/Message";
import Active from "../screens/Active";
import Group from "../screens/Group";

class Tabbar extends Component {
  render() {
    return (
      <Tabs>
        <Tab heading="MENSAJES">
          <Message />
        </Tab>
        <Tab heading="ACTIVOS">
          <Active />
        </Tab>
        <Tab heading="GRUPOS">
          <Group />
        </Tab>
      </Tabs>
    )
  }
}

export default Tabbar;