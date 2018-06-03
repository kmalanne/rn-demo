import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const text = Platform.OS === 'ios' ? `I'm iOS` : `I'm Android`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default class MyPlatform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
