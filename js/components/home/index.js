import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
} from 'native-base'

import { openDrawer } from '../../actions/drawer'

import styles from './styles'

const glow2 = require('../../../images/glow2.png')

class Home extends Component {
  // eslint-disable-line

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (!this.props.authenticated) {
      Actions.login()
    }
  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container}>
          <Header>
            <Left />
            <Body>
              <Title>Todo</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }} padder>
            <Text>Create Something Awesome . . .</Text>

            <Button
              transparent
              large
              style={styles.roundedButton}
              onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon name="close" style={styles.closeIcon} />
            </Button>
          </Content>
        </Image>
      </Container>
    )
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps, bindAction)(Home)
