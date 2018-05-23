import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Counter extends Component {
  render() {
    return <Text>{this.props.count}</Text>;
  }
}

export default class PropState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <View>
        <Button
          title="Increment"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
        <Counter count={this.state.count} />
      </View>
    );
  }
}
