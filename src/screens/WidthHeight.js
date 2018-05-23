import React, { Component } from 'react';
import { View } from 'react-native';

export default class WidthHeight extends Component {
  render() {
    return (
      <View>
        <View
          style={{ width: 50, height: 50, backgroundColor: 'lightgreen' }}
        />
        <View
          style={{ width: 100, height: 100, backgroundColor: 'limegreen' }}
        />
        <View
          style={{ width: 150, height: 150, backgroundColor: 'forestgreen' }}
        />
      </View>
    );
  }
}
