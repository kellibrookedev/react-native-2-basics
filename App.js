

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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="enter text here..."
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            />
          <Button
            style={styles.placeButton}
            title="add"
            onPress={this.placeSubmitHandler}
          />
        </View>
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "dotted",
    padding: 10,
    backgroundColor: "white"
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
