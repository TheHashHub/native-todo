
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import styles from './styles';


const glow2 = require('../../../images/glow2.png');

class BlankPage extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }


  render() {
    return (
      <Container style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Blank Page</Title>
            </Body>

            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon name="ios-menu" />
              </Button>
            </Right>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} />
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(BlankPage);
