import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export default class TextComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>moromoro</Text>
      </View>
    );
  }
}
