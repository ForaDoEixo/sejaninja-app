import React, { Component } from 'react'
import { ScrollView, Text, Linking, View } from 'react-native'
// import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button,
  withTheme,
} from 'react-native-paper';

// import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
          <Card style={styles.card}>
            {/* <Card.Cover source={require('../Images/giphy__2_.gif')} /> */}
            <Card.Content>
              <Title>O que é a Mídia NINJA</Title>
              <Paragraph>Narrativas Independentes, Jornalismo e Ação.</Paragraph>
              <Paragraph></Paragraph>
              <Paragraph>Surgimos em meio a multidão. Num momento decisivo em que a história do país se pôs diante de nós. Em Junho de 2013 fomos os olhos, a voz e o coração de milhares de pessoas. Transmitindo de dentro os acontecimentos, nos envolvemos e fomos parte do processo de transmutação política de nossa geração. De lá para cá, compartilhamos nossa tecnologia e conectamos milhares de pessoas, sempre ao lado dos que lutam por democracia e direitos no Brasil e no mundo.</Paragraph>
              <Paragraph></Paragraph>
              <Paragraph>Hoje somos uma plataforma narrativa formada por uma rede de comunicadores e ativistas que, a partir de novas formas de produção e distribuição da informação, pautamos aquilo que não pode mais se calar nem inviabilizar. </Paragraph>
              <Paragraph></Paragraph>
              <Card.Actions>
                <Button
                  mode="outlined"
                  compact={true}
                  onPress={() => Linking.openURL('https://midianinja.org.br?utm_source=SejaNinjaApp').catch(err => console.error('An error occurred', err))
                }>
                  accesse o site
                </Button>
              </Card.Actions>
            </Card.Content>

          </Card>
      </View>
    )
  }
}
