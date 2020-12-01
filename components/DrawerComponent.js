import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SettingScreen from '../Screens/SettingsScreen'
import { AppTabNavigator } from './AppTabNavigator.js'
import CustomSideBarMenu from './CustomSideBarMenu'
export const AppDrawerNavigator = createDrawNavigator(
    { Home: { screen: AppTabNavigator }, Settings: { screen: SettingScreen } },
    { contentComponent: CustomSideBarMenu },
    { initalRoutename: 'Home' }
)