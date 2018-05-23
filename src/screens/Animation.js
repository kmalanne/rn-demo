import React, { Component } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'forestgreen',
  },
});

const SPRING = {
  tension: 2,
  friction: 15,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pan: new Animated.ValueXY() };
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.spring(this.state.pan, {
        ...SPRING,
        toValue: { x: 0, y: 465 },
      }),
      Animated.spring(this.state.pan, {
        ...SPRING,
        toValue: { x: 275, y: 465 },
      }),
      Animated.spring(this.state.pan, {
        ...SPRING,
        toValue: { x: 275, y: 0 },
      }),
      Animated.spring(this.state.pan, {
        ...SPRING,
        toValue: { x: 0, y: 0 },
      }),
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Start" onPress={this.startAnimation} />
        <Animated.View
          style={[
            styles.square,
            { transform: this.state.pan.getTranslateTransform() },
          ]}
        />
      </View>
    );
  }
}
