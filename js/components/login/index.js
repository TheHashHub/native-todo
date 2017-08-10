import React, { Component } from 'react'
import { Image, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Form,
  Label,
  Spinner,
} from 'native-base'

import { loginEmail } from '../../actions/auth'

import styles from './styles'

const backgroundImage = require('../../../images/glow2.png')
const logo = require('../../../images/logo.png')

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      scroll: false,
    }
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#2980b9' }} scrollEnabled={true} bounces={false}>
          <Image source={backgroundImage} style={styles.container}>
            <Image source={logo} style={styles.shadow}>
              <View style={styles.bg}>
                <Item floatingLabel underline style={{ marginBottom: 20 }}>
                  <Icon active name="person" />
                  <Label style={styles.label}>Email</Label>
                  <Input
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    autoCorrect={false}
                    placeholderTextColor="#FFF"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item floatingLabel underline style={{ marginBottom: 30 }}>
                  <Icon name="unlock" />
                  <Label style={styles.label}>Password</Label>
                  <Input
                    placeholderTextColor="#FFF"
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
                {this.props.loading && <Spinner color="red" />}
                <Button
                  transparent
                  style={{
                    alignSelf: 'flex-end',
                    marginBottom: Platform.OS === 'ios' ? 5 : 0,
                    marginTop: Platform.OS === 'ios' ? -10 : 5,
                  }}>
                  <Text>Forgot Password?</Text>
                </Button>
                <Button
                  rounded
                  block
                  style={{ marginBottom: 10 }}
                  onPress={() => {
                    this.props.loginEmail(this.state.email, this.state.password)
                  }}>
                  <Text style={{ color: '#00C497' }}>Login</Text>
                </Button>
                <Button
                  transparent
                  style={{ alignSelf: 'center' }}
                  onPress={() => Actions.signup()}>
                  <Text>Create Account</Text>
                </Button>
              </View>
            </Image>
          </Image>
        </Content>
      </Container>
    )
  }
}

function bindActions(dispatch) {
  return {
    replaceAtIndex: (routeKey, route, key) => dispatch(replaceAtIndex(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    loginEmail: (email, password) => dispatch(loginEmail(email, password)),
  }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  loading: state.feedback.loading,
})

export default connect(mapStateToProps, bindActions)(Login)
