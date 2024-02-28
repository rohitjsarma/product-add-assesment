// actions/productActions.js
import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (page, limit) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    axios
      .get(`https://gist.githubusercontent.com/rohitjsarma/97629c374b806812967e6c53ad877f85/raw/2f43ca54c71c4d7c55963a7c6c748834f75d92e6/gistfile1.txt?page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: error.message,
        });
      });
  };
};
