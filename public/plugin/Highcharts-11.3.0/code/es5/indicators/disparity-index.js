/**
 * Highstock JS v11.3.0 (2024-01-10)
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2024 Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/disparity-index",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function r(t,e,r,n){t.hasOwnProperty(e)||(t[e]=n.apply(null,r),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}r(e,"Stock/Indicators/DisparityIndex/DisparityIndexIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=t.seriesTypes.sma,a=e.correctFloat,o=e.defined,s=e.extend,p=e.isArray,u=e.merge,c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.init=function(){var e=arguments,r=e[1].params,n=r&&r.average?r.average:void 0;this.averageIndicator=t.seriesTypes[n]||i,this.averageIndicator.prototype.init.apply(this,e)},r.prototype.calculateDisparityIndex=function(t,e){return a(t-e)/e*100},r.prototype.getValues=function(t,e){var r=e.index,n=t.xData,i=t.yData,a=i?i.length:0,s=[],u=[],c=[],d=this.averageIndicator,l=p(i[0]),f=d.prototype.getValues(t,e),y=f.yData,h=n.indexOf(f.xData[0]);if(y&&0!==y.length&&o(r)&&!(i.length<=h)){for(var g=h;g<a;g++){var v=this.calculateDisparityIndex(l?i[g][r]:i[g],y[g-h]);s.push([n[g],v]),u.push(n[g]),c.push(v)}return{values:s,xData:u,yData:c}}},r.defaultOptions=u(i.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),r}(i);return s(c.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),t.registerSeriesType("disparityindex",c),c}),r(e,"masters/indicators/disparity-index.src.js",[],function(){})});