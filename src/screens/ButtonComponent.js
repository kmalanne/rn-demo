import React, { Component } from 'react';
import { Alert, Button, Text, TouchableHighlight, View } from 'react-native';

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <View>
        <Button
          title="Hit me!"
          onPress={() => Alert.alert('You tapped the button!')}
        />
        <TouchableHighlight
          style={{
            backgroundColor: 'green',
            padding: 10,
            margin: 20,
            borderRadius: 10,
            borderWidth: 3,
            borderColor: 'black',
            alignItems: 'center',
          }}
          onPress={() => Alert.alert('You tapped the touchable!')}
        >
          <Text style={{ fontSize: 20 }}>No, hit me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
