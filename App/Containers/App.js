import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper'

// create our store
const store = createStore()
const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'black',
    accent: 'yellow',
  },
};
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <RootContainer />
        </PaperProvider>
      </StoreProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
