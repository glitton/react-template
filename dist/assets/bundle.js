/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// const { createElement } = React Don't need this
	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;
	// Don't need this
	// const style = { 
	//   backgroundColor: 'pink',
	//   color: 'black',
	//   fontFamily: 'verdana'
	// }
	// Don't need this bec of JSX
	// const title = createElement(
	//   'h1',
	//   {id: 'title', className: 'header', style: style},
	//   'Hello Osay! You are Awesome!'
	// ) 

	render(React.createElement(
	    'h1',
	    { id: 'title',
	        className: 'header',
	        style: { backgroundColor: 'pink', color: 'black', fontFamily: 'verdana' } },
	    'Hello World'
	), document.getElementById('react-container'));

/***/ }
/******/ ]);