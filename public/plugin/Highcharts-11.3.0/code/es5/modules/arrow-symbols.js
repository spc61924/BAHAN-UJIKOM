/**
 * Highcharts JS v11.3.0 (2024-01-10)
 *
 * Arrow Symbols
 *
 * (c) 2017-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */!function(o){"object"==typeof module&&module.exports?(o.default=o,module.exports=o):"function"==typeof define&&define.amd?define("highcharts/modules/arrow-symbols",["highcharts"],function(e){return o(e),o.Highcharts=e,o}):o("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(o){"use strict";var e=o?o._modules:{};function t(o,e,t,n){o.hasOwnProperty(e)||(o[e]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:o[e]}})))}t(e,"Extensions/ArrowSymbols.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(o,e){var t=o.composed,n=e.pushUnique;function r(o,e,t,n){return[["M",o,e+n/2],["L",o+t,e],["L",o,e+n/2],["L",o+t,e+n]]}function s(o,e,t,n){return r(o,e,t/2,n)}function i(o,e,t,n){return[["M",o+t,e],["L",o,e+n/2],["L",o+t,e+n],["Z"]]}function u(o,e,t,n){return i(o,e,t/2,n)}return{compose:function o(e){if(n(t,o)){var l=e.prototype.symbols;l.arrow=r,l["arrow-filled"]=i,l["arrow-filled-half"]=u,l["arrow-half"]=s,l["triangle-left"]=i,l["triangle-left-half"]=u}}}}),t(e,"masters/modules/arrow-symbols.src.js",[e["Core/Globals.js"],e["Extensions/ArrowSymbols.js"]],function(o,e){e.compose(o.SVGRenderer)})});