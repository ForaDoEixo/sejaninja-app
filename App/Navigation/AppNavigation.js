import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { Appbar } from 'react-native-paper';

import AboutScreen from '../Containers/AboutScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import CardScreen from '../Containers/CardScreen'
import IconLogo from '../Components/IconLogo'

export default createMaterialBottomTabNavigator({
  CardScreen: {
    screen: CardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Seja Ninja',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <IconLogo />
      )
    }),
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Quem Somos',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo name="network" size={24} color="white" />
      )
    }),
  },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Financie',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name="money" size={19} color="white" />
      )
    }),
  },
}, {
  initialRouteName: 'CardScreen',
  header: (
    <Appbar.Header>
      <Appbar.Content title="Seja Ninja" />
    </Appbar.Header>
  ),
});
