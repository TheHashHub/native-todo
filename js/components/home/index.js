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
  Card,
  CardItem,
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
      <Container style={{ backgroundColor: '#bdc3c7' }}>
        <Image source={glow2} style={styles.container}>
          <Header>
            <Left />
            <Body>
              <Title>All Tasks</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>

          <Content padder>
            <Card style={styles.card}>
              <CardItem>
                <Body>
                  <List
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data =>
                      <ListItem>
                        <Text>
                          {' '}{data}{' '}
                        </Text>
                      </ListItem>}
                    renderLeftHiddenRow={data =>
                      <Button full onPress={() => alert(data)}>
                        <Icon active name="information-circle" />
                      </Button>}
                    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                      <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                        <Icon active name="trash" />
                      </Button>}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                  />
                </Body>
              </CardItem>
            </Card>
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
