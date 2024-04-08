import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon"

export default function Pokedex() {

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })()
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}