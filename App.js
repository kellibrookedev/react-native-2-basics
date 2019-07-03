

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/tayrona.jpg';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          image: placeImage
        })
      };
    });
  };

    placeSelectedHandler = key => {
      this.setState(prevState => {
        return {
          selectedPlace: prevState.places.find(place => {
            return place.key === key;
          })
        };
      });
    };

    placeDeletedHandler = () => {
      this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        };
      });
    };

    modalClosedHandler = () => {
      this.setState({
        selectedPlace: null
      });
    }
  // placeDeletedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key;
  //       })
  //     }
  //   })
  // }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
        />
      <PlaceList
          places={this.state.places}
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
  }
});
