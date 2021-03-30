import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Table from './screens/Table';
import {
  COLOR_TAB_TEXT,
  COLOR_TAB_TEXT_ACTIVE,
  BACKGROUND_COLOR,
} from './utils/colors';
import {Image} from 'react-native';
import {ICON_TAB_INFO, ICON_TAB_TABLE} from './utils/images';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 12},
          activeTintColor: COLOR_TAB_TEXT_ACTIVE,
          inactiveTintColor: COLOR_TAB_TEXT,
          style: {
            backgroundColor: BACKGROUND_COLOR,
          },
        }}>
        <Tab.Screen
          name="О приложении"
          component={Home}
          options={{
            tabBarIcon: tabInfo => (
              <Image
                source={ICON_TAB_INFO}
                style={{width: 22, height: 22, tintColor: tabInfo.color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Котировки"
          component={Table}
          options={{
            tabBarIcon: tabInfo => (
              <Image
                source={ICON_TAB_TABLE}
                style={{width: 22, height: 22, tintColor: tabInfo.color}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
