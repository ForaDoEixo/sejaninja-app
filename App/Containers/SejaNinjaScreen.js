
import * as React from 'react';

import { Alert, ScrollView, StyleSheet, Platform, Share } from 'react-native';

import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button,
  Chip,
  withTheme,
} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'
// const title = 'Card';
class CardExample extends React.Component {
  // state = {
  //   visible: true,
  // }

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.card}>
          <Card.Cover source={require('../Images/ele_nao.jpg')} />
          <Card.Content>
            {/* <Title>Abandoned Shiiiip</Title> */}
            <Paragraph></Paragraph>
            <Paragraph>
            Não adianta trapacear! Ninguém vai hackear o voto das mulheres. Mais de 2 milhões de mulheres ciberneticamente violadas em sua luta contra o fascismo. A elas, toda solidariedade e máximo respeito!
            </Paragraph>
            <Card.Actions>
            <Chip icon={() => (<FontAwesome name="hashtag" size={11} />)} onPress={() => console.log('Pressed')}>EleNão</Chip>
            <Chip icon={() => (<FontAwesome name="hashtag" size={11} />)} onPress={() => console.log('Pressed')}>MulheresContraOFacismo</Chip>
</Card.Actions>
<Card.Actions>
            <Chip icon={() => (<FontAwesome name="hashtag" size={11} />)} onPress={() => console.log('Pressed')}>EleNunca</Chip>
            <Chip icon={() => (<FontAwesome name="hashtag" size={11} />)} onPress={() => console.log('Pressed')}>MulheresContraBolsonaro</Chip>
</Card.Actions>
<Card.Actions>
            <Button mode="contained" primary onPress={() => { Share.share({
    message: 'Não adianta trapacear! Ninguém vai hackear o voto das mulheres. Mais de 2 milhões de mulheres ciberneticamente violadas em sua luta contra o fascismo. A elas, toda solidariedade e máximo respeito!',
    url: 'https://midianinja.org',
    title: '#EleNão #EleNunca'
  }, {})}}>
              Compartilhe
            </Button>
          </Card.Actions>

          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Berries</Title>
            <Caption>Omega Ruby</Caption>
            <Paragraph>
              Dotted around the Hoenn region, you will find loamy soil, many of
              which are housing berries. Once you have picked the berries, then
              you have the ability to use that loamy soil to grow your own
              berries. These can be any berry and will require attention to get
              the best crop.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Title>Just Strawberries</Title>
          {/* <Card.Cover source={require('../assets/strawberries.jpg')} /> */}
        </Card>
        <Card
          style={styles.card}
          onPress={() => {
            Alert.alert('The Chameleon is Pressed');
          }}
        >
          {/* <Card.Cover source={require('../assets/chameleon.jpg')} /> */}
          <Card.Content>
            <Title>Pressable Chameleon</Title>
            <Paragraph>
              This is a pressable chameleon. If you press me, I will alert.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={styles.card}
          onLongPress={() => {
            Alert.alert('The City is Long Pressed');
          }}
        >
          {/* <Card.Cover source={require('../assets/city.jpg')} /> */}
          <Card.Content>
            <Title>Long Pressable City</Title>
            <Paragraph>
              This is a long press only city. If you long press me, I will
              alert.
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
});

export default withTheme(CardExample);
