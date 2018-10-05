import * as React from 'react';
import { Appbar, BottomNavigation, Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const MusicRoute = () => <Headline>Music</Headline>;

const AlbumsRoute = () => <Headline>Albums</Headline>;

const RecentsRoute = () => <Headline>Recents</Headline>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Seja Ninja', icon: 'queue-music' },
      { key: 'albums', title: 'Quem Somos', icon: 'home' },
      { key: 'recents', title: 'Financie', icon: 'info' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
