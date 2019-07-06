import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, ADD_PHOTO } from './actionTypes';

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
}

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
}

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
}

export const addPhoto = (photo) => {
  return {
    type: ADD_PHOTO,
    photo: photo
  };
}
