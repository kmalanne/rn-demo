import React, { Component } from 'react';
import { StyleSheet, View, Text, PanResponder } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});

export default class Gesture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      initialTop: 50,
      initialLeft: 50,
      offsetTop: 0,
      offsetLeft: 0,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
  }

  render() {
    const {
      dragging,
      initialTop,
      initialLeft,
      offsetTop,
      offsetLeft,
    } = this.state;

    const style = {
      backgroundColor: dragging ? 'skyblue' : 'forestgreen',
      top: initialTop + offsetTop,
      left: initialLeft + offsetLeft,
    };

    return (
      <View style={styles.container}>
        <View {...this.panResponder.panHandlers} style={[styles.square, style]}>
          <Text style={styles.text}>DRAG</Text>
        </View>
      </View>
    );
  }

  // Activate pan responder when square is pressed
  handleStartShouldSetPanResponder = () => true;

  // Responder status actiavted
  handlePanResponderGrant = () => {
    this.setState({ dragging: true });
  };

  // On mouse touch/move
  handlePanResponderMove = (e, gestureState) => {
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx,
    });
  };

  // On mouse touch/move end
  handlePanResponderEnd = (e, gestureState) => {
    const { initialTop, initialLeft } = this.state;

    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0,
    });
  };
}
