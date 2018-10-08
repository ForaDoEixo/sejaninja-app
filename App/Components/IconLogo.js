import React from 'react';
import { Image } from 'react-native';

export default class SlackIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../Images/logo.png')}
        fadeDuration={0}
        style={{width: 25, height: 25}}
      />
    );
  }
}

