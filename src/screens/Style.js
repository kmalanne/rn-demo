import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40,
  },
  green: {
    color: 'green',
  },
  blue: {
    color: 'blue',
  },
});

export default class Style extends Component {
  render() {
    return (
      <View>
        <Text style={styles.green}>Green</Text>
        <Text style={styles.bigGreen}>Bold and Big</Text>
        <Text style={[styles.bigGreen, styles.blue]}>Combo</Text>
      </View>
    );
  }
}
