import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import VoucherScreen from './screens/VoucherScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import HistoryScreen from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const iconSize = 24;

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search';
              break;
            case 'Voucher':
              iconName = focused ? 'ticket' : 'ticket';
              break;
            case 'Favorite':
              iconName = focused ? 'heart' : 'heart';
              break;
            case 'History':
              iconName = focused ? 'history' : 'history';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'green',
        style: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Voucher" component={VoucherScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
