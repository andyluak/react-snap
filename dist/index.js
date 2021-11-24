"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("styled-components"));exports.SnapContainer=e=>{const r=t.default.div`
		height: 100vh;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	`;return React.createElement(r,null,e.children)},exports.SnapItem=e=>{let r=t.default.div`
		height: 100vh;
		scroll-snap-align: start;
	`;return React.createElement(r,null,e.children)};
