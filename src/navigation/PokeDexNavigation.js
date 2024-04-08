import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../Screen/PokedexScreen"
import Pokemon from "../Screen/Pokemon"

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokemon" component={Pokemon} options={{headerShown: false}}/>
        <Stack.Screen name="Pokedex" component={PokedexScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}