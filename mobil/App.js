/*
* File: App.js
* Author: Vinkovits László
* Copyright: 2024, Vinkovits László
* Group: SZOFT II/2/N
* Date: 2024-03-13
* Github: https://github.com/VinLaszlo
* Licenc: GNU GPL
*/

import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

export default function App() {
  let host = "http://localhost:8000/";
  let endpoint = "orszagok";
  let url = host + endpoint;

  const [orszagok, setOrszagok] = useState([]);

  function getOrszagok() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setOrszagok(res);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Országok adatai</Text>
      <Pressable onPress={getOrszagok}>
        <Text>Lekérés</Text>
      </Pressable>
      <FlatList
        data={orszagok}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nev}</Text>
            <Text>{item.terulet}</Text>
            <Text>{item.nepesseg}</Text>
            <Text>{item.fovaros}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    border: "2px solid black",
    borderRadius: "5px",
    margin: 3,
    padding: 3,
    boxShadow: "3px 3px 3px green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});