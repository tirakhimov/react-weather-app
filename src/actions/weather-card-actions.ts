import {Dispatch} from "redux";

export const SEARCH_CITY = 'SEARCH_CITY';
export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';

export const searchCity = (inputValue: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: SEARCH_CITY,
    payload: inputValue,
  });
};

export const setDocumentTitle = () => (dispatch: Dispatch): void => {
  dispatch({
    type: SET_DOCUMENT_TITLE,
  })
}