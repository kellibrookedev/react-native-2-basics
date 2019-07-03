import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  render() {
    return(
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
    );
  }
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
