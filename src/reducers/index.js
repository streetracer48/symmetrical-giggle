import axios from 'axios';
const initialState = {
  breed: {},
  breeds: [],
  loading: false
};

export default function(state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
      default:
        return state;
    }
  }