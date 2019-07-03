

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = userInput => {
    this.setState({
      placeName: userInput
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
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
