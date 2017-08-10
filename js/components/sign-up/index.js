import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Item,
  Input,
  Label,
  View,
  Text,
  Left,
  Body,
  Right,
  Spinner,
} from 'native-base'
import { Actions } from 'react-native-router-flux'

import { signupEmail } from '../../actions/auth'

import styles from './styles'

const glow2 = require('../../../images/glow2.png')

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      cpassword: '',
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#2980b9' }}>
        <Image source={glow2} style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Left>
            <Body>
              <Title>SignUp</Title>
            </Body>
            <Right />
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <View padder>
              <View style={styles.mb25}>
                <Item underline floatingLabel>
                  <Icon name="mail-open" />
                  <Label style={styles.label}>Email</Label>
                  <Input
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor="#FFF"
                  />
                </Item>
              </View>

              <View style={styles.mb25}>
                <Item underline floatingLabel>
                  <Icon name="unlock" />
                  <Label style={styles.label}>Password</Label>
                  <Input
                    onChangeText={password => this.setState({ password })}
                    placeholderTextColor="#FFF"
                    secureTextEntry
                  />
                </Item>
              </View>

              <View style={styles.mb25}>
                <Item underline floatingLabel>
                  <Icon name="unlock" />
                  <Label style={styles.label}>Confirm Password</Label>
                  <Input
                    onChangeText={cpassword => this.setState({ cpassword })}
                    placeholderTextColor="#FFF"
                    secureTextEntry
                  />
                </Item>
              </View>

              {this.props.loading && <Spinner color="red" />}

              <Button
                onPress={() => {
                  console.log(this.state.password, this.state.cpassword)
                  this.props.signupEmail(
                    this.state.email,
                    this.state.password,
                    this.state.cpassword
                  )
                }}
                rounded
                block
                style={{ backgroundColor: '#fff', marginTop: 20 }}
                textStyle={{ color: '#00c497' }}>
                <Text style={{ color: '#00C497' }}>SIGNUP</Text>
              </Button>
            </View>
          </Content>
        </Image>
      </Container>
    )
  }
}

function bindAction(dispatch) {
  return {
    signupEmail: (n, e, p, c) => dispatch(signupEmail(n, e, p, c)),
  }
}

const mapStateToProps = state => {
  return {
    loading: state.feedback.loading,
  }
}

export default connect(mapStateToProps, bindAction)(SignUp)
