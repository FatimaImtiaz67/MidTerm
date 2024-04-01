import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from './Theme';

const Movies = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
    
    const fetchDataAndSaveToLocalDB = async () => {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
       
        AsyncStorage.setItem('moviesdata', JSON.stringify(json.movies));
        setData(json.movies); 
      } catch (error) {
        console.error(error);
      }
    };


    
    const fetchLocalData = async () => {
      try {
        const localData = await AsyncStorage.getItem('moviesdata');
        if (localData) {
          setData(JSON.parse(localData)); 
        }
      } catch (error) {
        console.error(error);
      }
    };

    
    AsyncStorage.getItem('moviesdata')
      .then((localData) => {
        if (!localData) {
          fetchDataAndSaveToLocalDB();
        } else {
          fetchLocalData();
        }
      })
      .catch((error) => console.error(error));
  }, []); 

  const { isDarkMode } = useTheme();
  return(
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#212121' : '#F3E5F5' }]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'lavenderblush',
              marginBottom: 10,
              marginTop:20,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'black' }}> {item.id} </Text>
            <Text style={{ color: 'black' }}> {item.title} </Text>
            <Text style={{ color: 'grey' }}> {item.releaseYear} </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container:{
    alignContent:'center', flex:1, marginTop:30, backgroundColor:'lavenderblush'
  }
});
