import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'forestgreen',
  },
});

const rows = [
  { text: 'First' },
  { text: 'Second' },
  { text: 'Third' },
  { text: 'Fourth' },
  { text: 'Fifth' },
];

export default class ListComponent extends Component {
  keyExtractor = item => item.text;

  renderItem = ({ item }) => <Text style={styles.row}>{item.text}</Text>;

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
