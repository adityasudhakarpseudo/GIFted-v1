import AxiosAjax from './../../../../network/axiosAjax';
import URL_SCHEMA from './../../../../lib/urlSchema.json';

// import {
//   FETCH_GIF_BY_KEYWORD_REQUEST,
//   FETCH_GIF_BY_KEYWORD_SUCCESS,
//   FETCH_GIF_BY_KEYWORD_ERROR,
// } from './types';
export const FETCH_GIF_BY_KEYWORD_REQUEST = 'FETCH_GIF_BY_KEYWORD_REQUEST';
export const FETCH_GIF_BY_KEYWORD_SUCCESS = 'FETCH_GIF_BY_KEYWORD_SUCCESS';
export const FETCH_GIF_BY_KEYWORD_ERROR = 'FETCH_GIF_BY_KEYWORD_ERROR';



let prepareToSearchGIFByKeyword = (ajax_config) => {
  let raw_url, method, ajax;

  if (ajax_config.url_config.method === 'post' || ajax_config.url_config.method === 'put') {
    ajax = new AxiosAjax({ headers: { 'Content-Type': 'multipart/form-data' } });
  } else {
    ajax = new AxiosAjax();
  }
  
  raw_url = URL_SCHEMA.root_url + URL_SCHEMA.app_gifted.search_gif_by_keyword;
  let params = convertJSONTOParams(ajax_config.params);
  if (params.length) {
    raw_url += '?' + params;
  }

  method = ajax_config.url_config.method;
  return ajax.makeRequest(raw_url, method, null, ajax_config.formData);
  
}

let convertJSONTOParams = (json) => {
  return Object.keys(json).map(function (k) {
    if (k !== 'model_id') {
      return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
    } else{
      return ''
    }
  }).join('&')
}

export const searchGIFByKeyword = (ajax_config) => {
  return dispatch => {
    dispatch(request());
    return prepareToSearchGIFByKeyword(ajax_config)
      .then(result => {
        dispatch(successResponse(result));
        return ajax_config.callbackFunction(result);
      })
      .catch(error => {
        dispatch(errorResponse(error));
        return ajax_config.callbackFunction(error);
      });
  }
}



export const request = () => ({
  type: FETCH_GIF_BY_KEYWORD_REQUEST,
});

export const successResponse = response => {
  return {
    type: FETCH_GIF_BY_KEYWORD_SUCCESS,
    payload: response
  };
};

export const errorResponse = error => ({
  type: FETCH_GIF_BY_KEYWORD_ERROR,
  payload: { error },
});