import AxiosAjax from './../../../../network/axiosAjax';
import URL_SCHEMA from './../../../../lib/urlSchema.json';

// import {
//   FETCH_TRENDING_GIF_REQUEST,
//   FETCH_TRENDING_GIF_SUCCESS,
//   FETCH_TRENDING_GIF_ERROR,
// } from './types';
export const FETCH_TRENDING_GIF_REQUEST = 'FETCH_TRENDING_GIF_REQUEST';
export const FETCH_TRENDING_GIF_SUCCESS = 'FETCH_TRENDING_GIF_SUCCESS';
export const FETCH_TRENDING_GIF_ERROR = 'FETCH_TRENDING_GIF_ERROR';



let prepareToFetchTrendingGIF = (ajax_config) => {
  let raw_url, method, ajax;

  if (ajax_config.url_config.method === 'post' || ajax_config.url_config.method === 'put') {
    ajax = new AxiosAjax({ headers: { 'Content-Type': 'multipart/form-data' } });
  } else {
    ajax = new AxiosAjax();
  }
  
  raw_url = URL_SCHEMA.root_url + URL_SCHEMA.app_gifted.trending_gifs;
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
    } else {
      return ''
    }
  }).join('&')
}

export const fetchTrendingGIF = (ajax_config) => {
  return dispatch => {
    dispatch(request());
    return prepareToFetchTrendingGIF(ajax_config)
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
  type: FETCH_TRENDING_GIF_REQUEST,
});

export const successResponse = response => {
  return {
    type: FETCH_TRENDING_GIF_SUCCESS,
    payload: response
  };
};

export const errorResponse = error => ({
  type: FETCH_TRENDING_GIF_ERROR,
  payload: { error },
});