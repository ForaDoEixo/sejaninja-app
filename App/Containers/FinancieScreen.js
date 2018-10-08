import * as React from 'react';
import { ScrollView, View, Linking } from 'react-native'
import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button,
  withTheme,
} from 'react-native-paper';
import styles from './Styles/LaunchScreenStyles'
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

// https://www.youtube.com/watch?v=3mG0BpvgHms
export default class MyComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <VideoPlayer
            videoProps={{
              shouldPlay: false,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: require('./../Images/videoplayback.mp4'),
              isMuted: false,
            }} />
          <Card style={styles.card}>
            {/* <Card.Cover source={require('../Images/giphy__2_.gif')} /> */}
            <Card.Content>
              <Title>Juntos podemos muito mais</Title>
              <Paragraph>Quem financia a Mídia Ninja é você!</Paragraph>
              <Paragraph></Paragraph>
              <Paragraph>Colabore, divulgue, compartilhe e seja parte do mutirão de Ninjas que constroem com as próprias mãos a narrativa de outros mundos possíveis.</Paragraph>
              <Paragraph></Paragraph>
              <Card.Actions>
                <Button
                  mode="outlined"
                  compact={true}
                  onPress={() => Linking.openURL('https://www.catarse.me/midianinja?utm_source=SejaNinjaApp').catch(err => console.error('An error occurred', err))
                }>
                  acesse o financiamento coletivo
                </Button>
              </Card.Actions>
            </Card.Content>

          </Card>

        </ScrollView>
      </View>
    );
  }
}
