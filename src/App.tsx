import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Table from './screens/Table';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О приложении" component={Home} />
        <Tab.Screen name="Котировки" component={Table} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
