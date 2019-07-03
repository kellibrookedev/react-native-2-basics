import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  constructor(props){
      super(props)
      this.state = {
        placeName: ''
      }
  }

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
  }

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

}

const styles = StyleSheet.create({
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
  }
});

export default PlaceInput;
