// ThirdScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './Theme';

const ExtraScreen = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#212121' : '#FFFFFF' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Another Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ExtraScreen;
