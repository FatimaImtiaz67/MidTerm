// SideMenu.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Side Menu</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Go to Third"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SideMenu;
