
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  ADD_PHOTO
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
  photo: null
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.placeName,
          image: {
            uri: 'https://photos.smugmug.com/US-Destinations/Arkansas/Hot-Springs-Arkansas-Hot-Sprin/Hot-Springs-Arkansas-Garvan-Wo/i-qmZ93DF/0/59a0c89c/Ti/Hot%20Springs%20Arkansas%2C%20Preening%20Peacock%2C%20Garvan%20Woodland%20Gardens-Ti.jpg'
          }
        })
      };

      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
        };

      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace: state.places.find(place => {
            return place.key === action.placeKey;
          })
        };

      case DESELECT_PLACE:
        return {
          ...state,
          selectedPlace: null
        };

      case ADD_PHOTO:
        return {
          ...state,
          photo: action.photo
        };

    default:
      return state;
  }
};

export default reducer;
