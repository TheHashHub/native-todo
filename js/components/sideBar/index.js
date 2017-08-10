import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Icon, ListItem, Content, Thumbnail, Left, Right, Body } from 'native-base'

import { Actions } from 'react-native-router-flux'

import { closeDrawer } from '../../actions/drawer'

import styles from './style'

const logo = require('../../../images/newlogo.png')

class SideBar extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#2980b9' }}>
        <Thumbnail
          style={{
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 15,
            resizeMode: 'contain',
            height: 200,
            width: 200,
          }}
          circular
          source={logo}
        />
        <ListItem
          button
          onPress={() => {
            Actions.home()
            this.props.closeDrawer()
          }}
          icon
          style={styles.links}>
          <Left>
            <Icon active name="home" />
          </Left>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          onPress={() => {
            Actions.blankPage()
            this.props.closeDrawer()
          }}
          icon
          style={styles.links}>
          <Left>
            <Icon active name="chatboxes" />
          </Left>
          <Body>
            <Text>Blank Page</Text>
          </Body>
          <Right />
        </ListItem>
      </Content>
    )
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  }
}

export default connect(null, bindAction)(SideBar)
