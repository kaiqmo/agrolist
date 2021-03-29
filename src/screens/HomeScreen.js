import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World React Native</Text>
     
      <Button 
      onPress={ () => navigation.navigate('Text')}
      title="LOGIN"/> 
      <Button 
        onPress={ () => navigation.navigate('Box')}
        title="SIGN UP"/>  
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
