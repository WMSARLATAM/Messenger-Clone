import React, { Component } from "react";
import Tabbar from '../components/Tabbar'
import { Container } from "native-base";

import Fabs from "../components/Fab";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Tabbar />
        <Fabs />
      </Container>
    )
  }
}

export default HomeScreen;