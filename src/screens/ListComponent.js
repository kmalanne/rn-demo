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
  { text: 'Item1' },
  { text: 'Item2' },
  { text: 'Item3' },
  { text: 'Item4' },
  { text: 'Item5' },
  { text: 'Item6' },
  { text: 'Item7' },
  { text: 'Item8' },
  { text: 'Item9' },
  { text: 'Item10' },
  { text: 'Item11' },
  { text: 'Item12' },
  { text: 'Item13' },
  { text: 'Item14' },
  { text: 'Item15' },
  { text: 'Item16' },
  { text: 'Item17' },
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
