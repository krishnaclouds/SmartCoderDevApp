import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function ImageButton({title, description }) {
  return (
    <>
      <TouchableOpacity style={styles.imageButton}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
    </>
  )
}