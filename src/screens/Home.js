import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  { title: 'Hello', screen: 'Hello' },
  { title: 'Props and State', screen: 'PropState' },
  { title: 'Style', screen: 'Style' },
  { title: 'Width and Height', screen: 'WidthHeight' },
  { title: 'FlexBox', screen: 'FlexBox' },
  { title: 'View', screen: 'ViewComponent' },
  { title: 'Text', screen: 'TextComponent' },
  { title: 'Button', screen: 'ButtonComponent' },
  { title: 'ScrollView', screen: 'ScrollViewComponent' },
  { title: 'List', screen: 'ListComponent' },
  { title: 'Animation', screen: 'Animation' },
  { title: 'Gesture', screen: 'Gesture' },
  { title: 'AsyncStorage', screen: 'AsyncStorage' },
  { title: 'Networking', screen: 'Networking' },
  { title: 'Platform', screen: 'Platform' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
  },
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: 'forestgreen',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 20,
  },
});

class MyListItem extends Component {
  onPress = () => {
    this.props.onPressItem(this.props.screen);
  };

  render() {
    return (
      <TouchableOpacity style={styles.listItem} onPress={this.onPress}>
        <View>
          <Text style={styles.itemText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Home extends Component {
  onPressItem = screen => {
    this.props.navigation.navigate(screen);
  };

  keyExtractor = item => item.screen;

  renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this.onPressItem}
      title={item.title}
      screen={item.screen}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Introduction</Text>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
