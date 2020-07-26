import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from '../styles/styles';

export default function Input({ placeHolder, onChangeText }) {
  return (
    <>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="search" size={20} 
        style={{ 
          position: 'absolute', 
          left: 5, 
          top: 13,
          color : '#aaa' 
          }} />
        <TextInput
          placeholderTextColor="#aaa"
          style={styles.input}
          placeholder={placeHolder} />
      </View>
    </>
  )
}