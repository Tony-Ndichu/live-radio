import {
  SET_CATEGORY_NAME, SET_FULL_PAGE_LOADER, SET_CATEGORY_DATA, SET_LOGIN_PAGE_MODAL,
} from '../../constants';

export const setCategoryName = (payload) => ({
  type: SET_CATEGORY_NAME,
  payload,
});

export const setFullPageLoader = (payload) => ({
  type: SET_FULL_PAGE_LOADER,
  payload,
});

export const setCategoryData = (payload) => ({
  type: SET_CATEGORY_DATA,
  payload,
});

export const setLoginPageModal = (payload) => ({
  type: SET_LOGIN_PAGE_MODAL,
  payload,
});


export default setCategoryName;
