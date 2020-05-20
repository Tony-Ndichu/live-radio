import {
    SET_CATEGORY_NAME, SET_FULL_PAGE_LOADER, SET_CATEGORY_DATA, SET_LANDING_PAGE,
  } from '../../constants';
  
  export const initialState = {
    name: '',
    show: true,
    showFullPageLoader: true,
    data: [],
    showLandingpage: true,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_CATEGORY_NAME:
        return {
          ...state,
          name: payload,
        };
  
      case SET_FULL_PAGE_LOADER:
        return {
          ...state,
          showFullPageLoader: payload,
        };
  
      case SET_CATEGORY_DATA:
        return {
          ...state,
          data: payload,
        };
  
      case SET_LANDING_PAGE:
        return {
          ...state,
          showLandingpage: payload,
        };
  
      default:
        return state;
    }
  };
  