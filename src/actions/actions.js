import axios from 'axios'

import {
    FETCH_BREEDS_INIT,
    FETCH_BREEDS_SUCCESS,
    FETCH_FAIL,
    FETCH_BREED_BY_ID
  } from './types';
  import {createAlert} from './createAlert'

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
        dispatch(createAlert('Something went wrong', "danger"))
      dispatch({
        type: FETCH_FAIL,
        payload: err
      });
    }
  }
  
  export const getbreedById = id => async dispatch => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      dispatch(fetchBreedsInit());
      const res = await axios.get(`https://­breedscat.herokuapp.c­om/api/v1/breeds/${id}`, config);
      dispatch({
        type: FETCH_BREED_BY_ID,
        payload: res.data
      });
    } catch (error) {
        dispatch(createAlert('Something went wrong', "danger"))
  
      dispatch({
        type: FETCH_FAIL,
        payload: error
      });
    }
  };