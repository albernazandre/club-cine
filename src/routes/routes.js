import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';

import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Voucher from "../pages/voucher/Voucher";
import Heart from "../pages/heart/Heart";
import BuyHistory from "../pages/history/BuyHistory";

// import { Entypo, Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function AppRoutes() {
      <Tab.Navigator
        style={styles.navbar}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Voucher" component={Voucher} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="BuyHistory" component={BuyHistory} />
      </Tab.Navigator>
}

const styles = StyleSheet.create({
  
  navbar:{
    backgroundColor: '#000',
    height: 20,
  }

});