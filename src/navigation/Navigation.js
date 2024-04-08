import React from "react";
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteScreen from "../Screen/FavoriteScreen"
import PokedexNavigation from "./PokeDexNavigation";
import AccountScreen from "../Screen/AccountScreen"

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({color, size}) => (
          <Icon name="heart" color={color} size={size}/>), headerTitle: "Favorito", headerTitleAlign: 'center'      
      }} />
      <Tab.Screen name="Pokedax" component={PokedexNavigation} options={{
        tabBarLabel: "", 
        tabBarIcon: () => renderPokeball(), headerTitleAlign: 'center'
      }}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarLabel: "Cuenta",
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size}/>
        ), headerTitle: "Cuenta", headerTitleAlign: 'center'
      }}/>
    </Tab.Navigator>
  );
}

function renderPokeball(){
  return (
      <Image
        source={require('../assets/pokeball.png')}
        style={{width: 60, height: 60, top: -15}}
      />
  )
}