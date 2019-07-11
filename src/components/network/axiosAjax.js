/**
 * Axios Ajax Library - Wrapper
 */

/**
 * Import Axios library
 */
import axios from 'axios';

/**
 * Import axios configuration object
 */
import axiosConfig from './axiosConfig';

/**
 * ClientJS
 * ClientJS is a simple library for finding device information and generating digital fingerprints.
 * See {@link https://clientjs.org/| ClientJS.org}
 * Here ClientJS is accessed from global browser window object, assuming the library is already available
 */
const ClientJS = window.ClientJS;
let client;
let payload;

/**
 * Listen for the window load event and do the data reading
 */
window.addEventListener('load', () => {
	// client = new ClientJS();
	// let clientData = {
	// 	'13': {
	// 		'11': Date.now(),
	// 		'16': client.getUserAgent() || '',
	// 		'19': client.getTimeZone() || '',
	// 		'7': client.getFingerprint() || '',
	// 		'5': client.getLanguage() || '',
	// 		'20': client.getSystemLanguage() || '',
	// 		'27': client.getBrowser() || '',
	// 		'21': client.getBrowserVersion() || '',
	// 		'8': client.getEngine() || '',
	// 		'23': client.getEngineVersion() || '',
	// 		'18': client.getOS() || '',
	// 		'25': client.getOSVersion() || '',
	// 		'10': window.screen.width,
	// 		'24': window.screen.height,
	// 		'2': client.getDeviceXDPI() || '',
	// 		'26': client.getDeviceYDPI() || '',
	// 		'13': client.getColorDepth() || '',
	// 		'15': client.isJava(),
	// 		'17': client.getJavaVersion() || '',
	// 		'30': client.isFlash(),
	// 		'12': client.getFlashVersion() || '',
	// 		'29': client.isSilverlight(),
	// 		'6': client.getSilverlightVersion() || '',
	// 		'9': client.isMimeTypes(),
	// 		'4': client.getMimeTypes() || '',
	// 		'1': client.getFonts() || '',
	// 		'3': client.isLocalStorage(),
	// 		'14': client.isSessionStorage(),
	// 		'22': client.isCookie(),
	// 		'28': client.getPlugins() || '',
	// 		'31': client.isMobile()
	// 	},
	// };

	// /**
	//  * Base64 encode payload
	//  */
	// payload = btoa(JSON.stringify(clientData));
});

/**
 * @class AxiosAjax
 * Axios Ajax class
 */
class AxiosAjax {
	/**
	 * initialize the data and attributes
	 */
	constructor(options) {
		/**
		 * Options for axios
		 */
		this.options = options || axiosConfig || {};

		/**
		 * Custom headers
		 * Authorization token can be added here
		 */
		this.options.headers = {};

		/**
		 * Initialize the axios instance
		 */
		this.http = axios.create(this.options);
	}

	/**
	 * @name makeRequest
	 * @inner
	 * Make a request with the options and parameters provided.
	 * @param {String} url - The url string
	 * @param {String} method - The HTTP method
	 * @param {Object} queryParameters - The query parameters
	 * @param {Object} body - The request body
	 */
	makeRequest = (url, method, queryParameters, body) => {
		this.url = url
			? url
			: (() => {
				throw new Error('URL required');
			})();
		this.queryParameters = queryParameters || {};
		this.body = body || {};
		this.method = method || 'get';

		/**
		 * Make the request
		 */
		this.queryParameters['api_key'] = 'iCGCQOPQ5717XlMiOtTA7pynCgPUTgSS';
		let request = this.http({
			method: this.method,
			url: this.url,
			params: this.queryParameters,
			data: this.body,
		});
		return request;
	};

	/**
	 * @name fetchUrl
	 * @inner
	 * Fetch a url with the options and parameters provided.
	 * @param {String} url - The url string
	 * @param {String} method - The HTTP method
	 * @param {Object} queryParameters - The query parameters
	 * @param {Object} body - The request body
	 */
	fetchUrl = (url, method, queryParameters, body) => {
		return this.makeRequest(
			url,
			method.toLowerCase(),
			(queryParameters = queryParameters ? queryParameters : ''),
			(body = body ? body : ''),
		)
			.then(function (res) {
				if (res.status === 403 || res.status === 401) {
					/**
					 * Redirect to login page
					 */
					// window.location.href = '/login';
				} else {
					return res.data;
				}
			})
			.catch(function (err) {
				return Promise.reject(err);
			});
	};
}

export default AxiosAjax;
