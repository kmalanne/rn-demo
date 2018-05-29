import React, { Component } from 'react';
import { AsyncStorage, Text, TextInput, View, StyleSheet } from 'react-native';

const STORAGE_KEY = 'KEY';

const styles = StyleSheet.create({
  input: {
    padding: 20,
    height: 60,
  },
  text: {
    padding: 20,
    fontSize: 30,
  },
});

export default class AStorage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.load();
  }

  load = async () => {
    try {
      const text = await AsyncStorage.getItem(STORAGE_KEY);

      if (text !== null) {
        this.setState({ text });
      }
    } catch (e) {
      console.log('Fail'); // eslint-disable-line no-console
    }
  };

  save = async text => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text);

      this.setState({ text });
    } catch (e) {
      console.error('Fail'); // eslint-disable-line no-console
    }
  };

  render() {
    const { text } = this.state;

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Enter text'}
          onChangeText={t => this.save(t)}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
