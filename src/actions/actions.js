import axios from 'axios'

import {
    FETCH_BREEDS_INIT,
    FETCH_BREEDS_SUCCESS,
    FETCH_FAIL
  } from './types';

  const fetchBreedsInit = () => {
    return {
      type: FETCH_BREEDS_INIT
    }
  }

  export const getbreeds = (breed) => async dispatch => {

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      dispatch(fetchBreedsInit())
      const url = breed ? `https://breedscat.herokuapp.com/api/v1/breeds?name=${breed}` : 'https://­breedscat.herokuapp.c­om/api/v1/breeds';
      const res = await axios.get(url, config);
      console.log(res)
      dispatch({
        type: FETCH_BREEDS_SUCCESS,
        payload: res.data
      });
    } catch (err) {
  
      dispatch({
        type: FETCH_FAIL,
        payload: err
      });
    }
  }
  