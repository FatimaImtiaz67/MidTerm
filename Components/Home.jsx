import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Switch, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { surahNames } from './Quran';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [showSurahDetails, setShowSurahDetails] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const handleShowSurahDetails = () => {
      setShowSurahDetails(!showSurahDetails);
  };


    const filteredSurahs = surahNames.filter((surah) =>
        surah.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        surah.arabic.includes(searchQuery)
    );

    return (
        <View style={[styles.container, darkMode && styles.darkMode]}>
            <Text style={styles.title}>Quran Explorer Siti Ayesha</Text>
            <View style={styles.header}>
                <Image style={styles.img1} source={require('../assets/abc.jpg')} />
 
            </View>
            <View style={styles.toggleContainer}>
                <Text style={darkMode ? styles.iconDark : styles.icon}>☀︎</Text>
                <Switch
                    value={darkMode}
                    onValueChange={toggleDarkMode}
                    style={styles.switch}
                />
                <Text style={darkMode ? styles.iconDark : styles.icon}>☾</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Search Surah..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
           <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleShowSurahDetails} style={styles.button}>
                    <Text style={styles.buttonText}>Juzz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShowSurahDetails} style={styles.button}>
                    <Text style={styles.buttonText}>Surah</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={filteredSurahs}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.english} - {item.arabic}
                    </Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'plum',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
img1: {
      width: '100%',
      height:120,
      marginTop: 60,
      borderRadius: 7,
  },
  img2: {
      width: '100%',
      height:120,
      marginTop: 250,
      alignContent: 'center',
      marginLeft: -400,
      borderRadius: 7,
  },
    darkMode: {
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:30,
        marginBottom: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    switch: {
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
    icon: {
        fontSize: 24,
        color: 'yellow',
    },
    iconDark: {
        fontSize: 24,
        color: 'slateblue',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  button: {
      backgroundColor: 'blue',
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 5,
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold',
  },
});

export default Home;
