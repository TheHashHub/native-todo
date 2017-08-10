import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Drawer } from 'native-base'
import { Router, Scene } from 'react-native-router-flux'

import { closeDrawer } from './actions/drawer'

import Login from './components/login/'
import Home from './components/home/'
import Signup from './components/sign-up'
import BlankPage from './components/blankPage'
import SideBar from './components/sideBar'

import { init } from './actions/auth'

const RouterWithRedux = connect()(Router)

class AppNavigator extends Component {
  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer()
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close()
    }
  }

  openDrawer() {
    this._drawer._root.open()
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer()
    }
  }

  render() {
    // this.props.init()
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref
        }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={ratio => {
          //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          }
        }}
        negotiatePan>
        <StatusBar backgroundColor="#2980b9" barStyle="light-content" />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} initial />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} />
            <Scene key="blankPage" component={BlankPage} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    )
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    init: () => dispatch(init()),
  }
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
})

export default connect(mapStateToProps, bindAction)(AppNavigator)
