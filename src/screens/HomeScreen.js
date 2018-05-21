import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#72ba3a",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Demo</Text>
        <Button
          title="Something"
          onPress={() => this.props.navigation.navigate("Part1")}
        />
      </View>
    );
  }
}
