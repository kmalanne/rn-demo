import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  waiting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Networking extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, photos: [] };
    this.load();
  }

  load = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/album/1/photos'
      );
      const photos = await response.json();

      this.setState({ loading: false, photos });
    } catch (e) {
      console.log('Fail'); // eslint-disable-line no-console
    }
  };

  renderImage = ({ id, url }) => {
    const uri = url.replace('http', 'https');
    return (
      <Image style={{ width: 150, height: 150 }} key={id} source={{ uri }} />
    );
  };

  render() {
    const { loading, photos } = this.state;

    if (loading) {
      return (
        <View style={styles.waiting}>
          <ActivityIndicator animating={true} />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {photos.map(this.renderImage)}
      </ScrollView>
    );
  }
}
