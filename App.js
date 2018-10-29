import React, {Component} from 'react';
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import RootStack from "./src/screens/Router";

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <RootStack />
      </StyleProvider>
    )
  }
}

export default App;