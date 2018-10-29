import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Container } from 'native-base'

import HomeScreen from "../screens/Home";
import CallScreen from "../screens/CallScreen";
import TakePhoto from "../screens/Camera";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false
    });
  }
  toggleTab5() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true
    });
  }
  render() {
    let AppComponent = null;

    if (this.state.tab1) {
      AppComponent = HomeScreen 
    } else if (this.state.tab2) {
      AppComponent = CallScreen
    }
    return (
      <Container>
        <AppComponent />
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} active name="home" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="phone" type="MaterialIcons" />
            </Button>
            <Button active={this.state.tab3} onPress={() => this.props.navigation.navigate('Camera')}>
              <Icon active={this.state.tab3} name="camera" />
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="people" type="MaterialIcons"/>
            </Button>
            <Button active={this.state.tab5} onPress={() => this.toggleTab5()}>
              <Icon active={this.state.tab5} name="game-controller-b" type="Ionicons" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default Toolbar;