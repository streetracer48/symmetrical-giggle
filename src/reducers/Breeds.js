
import {
    FETCH_BREEDS_INIT,
    FETCH_BREEDS_SUCCESS,
    FETCH_FAIL,
    FETCH_BREED_BY_ID
  } from '../actions/types';
const initialState = {
  breed: {},
  breeds: [],
  loading: false
};

export default function(state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
        case FETCH_BREEDS_INIT:
        return {
          ...state,
          breed: null,
          breeds: null,
          loading: true
        };
      case FETCH_BREEDS_SUCCESS:
        return {
          ...state,
          breeds: payload,
          loading: false
        };
        case FETCH_BREED_BY_ID:
            return {
              ...state,
              breed: payload,
              loading: false
            };
      case FETCH_FAIL:
        return {
          ...state,
          breed: null,
          breeds: null,
          loading: false
        };

      default:
        return state;
    }
  }