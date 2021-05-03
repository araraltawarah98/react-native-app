import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListScreen, SettingsScreen} from '../../screens';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'List') {
            iconName = require('../../assets/images/visualization.png');
          } else if (route.name === 'Settings') {
            iconName = require('../../assets/images/more.png');
          }
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {backgroundColor: 'rgba(248, 248, 248, 0.92)'},
      }}>
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
//
