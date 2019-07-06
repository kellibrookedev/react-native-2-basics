import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
  addPhoto
} from './src/store/actions/index';

class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

    placeSelectedHandler = key => {
      this.props.onSelectPlace(key);
    };

    placeDeletedHandler = () => {
      this.props.onDeletePlace();
    };

    modalClosedHandler = () => {
      this.props.onDeselectPlace();
    };

    handleChoosePhoto = () => {
      const options = {
        noData: true,
        mediaType: 'photo'
      };
      ImagePicker.showImagePicker(options, response => {
        console.log("response", response);
        if (response.uri) {
          console.log(this.props.response);
          this.props.onAddPhoto(response);
        }
      });
    };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={this.props.photo} />
        <View style={styles.choosePhoto}>
          <Button
            title="Choose Photo"
            onPress={this.handleChoosePhoto}/>
        </View>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
        />
      <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
      />
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
  choosePhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photo: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = state => {
  return {
    places:state.places.places,
    selectedPlace: state.places.selectedPlace,
    photo: state.places.photo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
    onAddPhoto: (photo) => dispatch(addPhoto(photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
