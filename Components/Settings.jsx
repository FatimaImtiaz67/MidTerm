// SettingsScreen.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './Theme';

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#212121' : '#FCE4EC' }]}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#FFCDD2', true: '#880E4F' }}
          thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
          ios_backgroundColor="#FFCDD2"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#880E4F', // Dark pinkish color
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#880E4F', // Dark pinkish color
  },
});

export default SettingsScreen;
