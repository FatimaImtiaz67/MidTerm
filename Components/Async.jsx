import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Async = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error));
  }, []);

  //retrieving data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      //alert(jsonValue);
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      <Text>AsyncPractice</Text>
      <FlatList
        data={getData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Movie", item)}>
            <View
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}> {item.id} </Text>
              <Text style={{ color: "black" }}> {item.title} </Text>
              <Text style={{ color: "grey" }}> {item.releaseYear} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Async;

const styles = StyleSheet.create({});
