

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };


  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem
        key={index}
        placeName={place}
      />
    ));

    return (
      <View style={styles.container}>
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
        />
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#feffe0',
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5
  },
  listContainer: {
    width: '100%'
  }
});
