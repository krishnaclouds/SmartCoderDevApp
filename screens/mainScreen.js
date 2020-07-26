import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { styles } from '../styles/styles';
import Input from '../components/input';
import ImageButton from '../components/imageButton';
import Animated, { Easing } from 'react-native-reanimated';

const { height } = Dimensions.get('screen');

export default class MainScreen extends Component {

  state = {
    alignment: new Animated.Value(height)
  }

  AnimateHeader = () => {
    Animated.timing(this.state.alignment, {
      toValue: 150,
      duration: 600,
      easing : Easing.linear
    }).start();
  }

  componentDidMount(){
    this.AnimateHeader()  
  }

  render() {

    const AnimatedHeader = {
      height : this.state.alignment
    }

    return (
      <View>
        <Animated.View style={[styles.header, AnimatedHeader]}>
          <View style={{ flex: 0.6, paddingTop: 10 }}>
            <Text style={styles.headerText}>
              Latest on your feed!
            </Text>
          </View>
          <View style={{ flex: 0.35, paddingTop: 30, alignItems: 'flex-end' }}>
            <Image
              style={styles.headerImage}
              source={require("../assets/avatar2.jpg")}
            ></Image>
          </View>
        </Animated.View>
        <View style={{ alignItems : 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Input placeHolder="Search" />
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../assets/1.jpg")}
              ></Image>
              <ImageButton
                title="The Boat"
                description="The Trio in Sunset"
              />
            </View>
            <View style={styles.imageView}>
              <Image style={styles.image}
                source={require("../assets/2.jpg")}
              />
              <ImageButton
                title="The Beach"
                description="The rays of the beach stones"
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image style={styles.image}
                source={require("../assets/3.jpg")}
              />
              <ImageButton
                title="Trees"
                description="Waiting on the long way"
              />
            </View>
            <View style={styles.imageView}>
              <Image style={styles.image}
                source={require("../assets/4.jpg")}
              />
              <ImageButton
                title="The Water"
                description="Floating on the waves"
              />
            </View>
          </View>

        </View>
      </View>
    );
  }
}

