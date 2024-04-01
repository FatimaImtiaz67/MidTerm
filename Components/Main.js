import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor:'hotpink',borderRadius:5, width:10, height:10 }}>
        <Text>Get started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'plum', 
        justifyContent:'center',
        alignItems:'center'

    }
})