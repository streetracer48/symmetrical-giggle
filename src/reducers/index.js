import { combineReducers } from 'redux';
import breedsCat from './Breeds';
import alert from './createAlert'

export default combineReducers({
  breedsCat,
  alert,
});