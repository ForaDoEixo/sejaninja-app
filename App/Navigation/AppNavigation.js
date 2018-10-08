import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons'

import QuemSomosScreen from '../Containers/QuemSomosScreen'
import FinancieScreen from '../Containers/FinancieScreen'
import SejaNinjaScreen from '../Containers/SejaNinjaScreen'
import IconLogo from '../Components/IconLogo'

export default createMaterialBottomTabNavigator({
  SejaNinjaScreen: {
    screen: SejaNinjaScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Seja Ninja',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <IconLogo />
      )
    }),
  },
  QuemSomosScreen: {
    screen: QuemSomosScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Quem Somos',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo name="network" size={24} color="white" />
      )
    }),
  },
  FinancieScreen: {
    screen: FinancieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Financie',
      tabBarColor: 'white',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name="money" size={19} color="white" />
      )
    }),
  },
}, {
  initialRouteName: 'SejaNinjaScreen',
});

