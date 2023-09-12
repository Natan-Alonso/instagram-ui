import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Home from '../screens/Home';

import House from '../assets/house.svg'
import Search from '../assets/search.svg'
import Store from '../assets/store.svg'
import Union from '../assets/union.svg'
import foto1 from '../assets/foto1.png'

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000"
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <House />
        }}
        name="Home"
        component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Search />
        }}
        name="Home2"
        component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Store />
        }}
        name="Home3"
        component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Union />
        }}
        name="Home4"
        component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Image style={{
            width: 30,
            height: 30,
          }} source={foto1} />
        }}
        name="Home5"
        component={Home} />
    </Tab.Navigator>
  );
}