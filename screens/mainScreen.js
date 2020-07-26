import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from '../styles/styles';
import Input from '../components/input';

export default class MainScreen extends Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.header}>
          <View style={{ flex: 0.6, paddingTop: 20 }}>
            <Text style={styles.headerText}>
              Latest on your feed!
            </Text>
          </View>
          <View style={{ flex: 0.35, paddingTop: 60, alignItems: 'flex-end' }}>
            <Image
              style={styles.headerImage}
              source={require("../assets/avatar2.jpg")}
            ></Image>
          </View>
        </SafeAreaView>
        <View style={{ alignItems: 'center' }}>
          <Input placeHolder="Search" />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.image}
              source={require("../assets/2.jpg")}
            ></Image>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image style={styles.image}
              source={require("../assets/3.jpg")}
            ></Image>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.image}
              source={require("../assets/4.jpg")}
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}

