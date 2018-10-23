import React, { Component } from "react";
import { Container } from "native-base";

import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";

class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Toolbar />
      </Container>
    )
  }
}

export default MainScreen;