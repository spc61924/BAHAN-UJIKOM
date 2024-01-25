/**
 * Highstock JS v11.3.0 (2024-01-10)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */!function(o){"object"==typeof module&&module.exports?(o.default=o,module.exports=o):"function"==typeof define&&define.amd?define("highcharts/indicators/supertrend",["highcharts","highcharts/modules/stock"],function(t){return o(t),o.Highcharts=t,o}):o("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(o){"use strict";var t=o?o._modules:{};function e(o,t,e,r){o.hasOwnProperty(t)||(o[t]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:o[t]}})))}e(t,"Stock/Indicators/Supertrend/SupertrendIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"],t["Core/Chart/StockChart.js"]],function(o,t,e){var r,n=this&&this.__extends||(r=function(o,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])})(o,t)},function(o,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=o}r(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),i=o.seriesTypes,l=i.atr,s=i.sma,a=t.addEvent,p=t.correctFloat,c=t.isArray,d=t.extend,u=t.merge,h=t.objectEach;function y(o,t,e){return{index:t,close:o.yData[t][e],x:o.xData[t]}}var f=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return n(t,o),t.prototype.init=function(){var t=this;o.prototype.init.apply(t,arguments);var r=a(e,"afterLinkSeries",function(){if(t.options){var o=t.options,e=t.linkedParent.options;o.cropThreshold=e.cropThreshold-(o.params.period-1)}r()},{order:1})},t.prototype.drawGraph=function(){for(var o,t,e,r,n,i,l,a,p,c=this,d=c.options,f=c.linkedParent,g=f?f.points:[],x=c.points,m=c.graph,C=g.length-x.length,T=C>0?C:0,v={options:{gapSize:d.gapSize}},S={top:[],bottom:[],intersect:[]},D={top:{styles:{lineWidth:d.lineWidth,lineColor:d.fallingTrendColor||d.color,dashStyle:d.dashStyle}},bottom:{styles:{lineWidth:d.lineWidth,lineColor:d.risingTrendColor||d.color,dashStyle:d.dashStyle}},intersect:d.changeTrendLine},b=x.length;b--;)o=x[b],t=x[b-1],e=g[b-1+T],r=g[b-2+T],n=g[b+T],i=g[b+T+1],l=o.options.color,a={x:o.x,plotX:o.plotX,plotY:o.plotY,isNull:!1},!r&&e&&f.yData[e.index-1]&&(r=y(f,e.index-1,3)),!i&&n&&f.yData[n.index+1]&&(i=y(f,n.index+1,3)),!e&&r&&f.yData[r.index+1]?e=y(f,r.index+1,3):!e&&n&&f.yData[n.index-1]&&(e=y(f,n.index-1,3)),o&&e&&n&&r&&o.x!==e.x&&(o.x===n.x?(r=e,e=n):o.x===r.x?(e=r,r={close:f.yData[e.index-1][3],x:f.xData[e.index-1]}):i&&o.x===i.x&&(e=i,r=n)),t&&r&&e?(p={x:t.x,plotX:t.plotX,plotY:t.plotY,isNull:!1},o.y>=e.close&&t.y>=r.close?(o.color=l||d.fallingTrendColor||d.color,S.top.push(a)):o.y<e.close&&t.y<r.close?(o.color=l||d.risingTrendColor||d.color,S.bottom.push(a)):(S.intersect.push(a),S.intersect.push(p),S.intersect.push(u(p,{isNull:!0})),o.y>=e.close&&t.y<r.close?(o.color=l||d.fallingTrendColor||d.color,t.color=l||d.risingTrendColor||d.color,S.top.push(a),S.top.push(u(p,{isNull:!0}))):o.y<e.close&&t.y>=r.close&&(o.color=l||d.risingTrendColor||d.color,t.color=l||d.fallingTrendColor||d.color,S.bottom.push(a),S.bottom.push(u(p,{isNull:!0}))))):e&&(o.y>=e.close?(o.color=l||d.fallingTrendColor||d.color,S.top.push(a)):(o.color=l||d.risingTrendColor||d.color,S.bottom.push(a)));h(S,function(o,t){c.points=o,c.options=u(D[t].styles,v),c.graph=c["graph"+t+"Line"],s.prototype.drawGraph.call(c),c["graph"+t+"Line"]=c.graph}),c.points=x,c.options=d,c.graph=m},t.prototype.getValues=function(o,t){var e,r,n,i,s,a,d,u,h,y=t.period,f=t.multiplier,g=o.xData,x=o.yData,m=[],C=[],T=[],v=0===y?0:y-1,S=[],D=[],b=[];if(!(g.length<=y)&&c(x[0])&&4===x[0].length&&!(y<0)){for(h=0,b=l.prototype.getValues.call(this,o,{period:y}).yData;h<b.length;h++)u=x[v+h],d=x[v+h-1]||[],i=S[h-1],s=D[h-1],a=T[h-1],0===h&&(i=s=a=0),e=p((u[1]+u[2])/2+f*b[h]),r=p((u[1]+u[2])/2-f*b[h]),e<i||d[3]>i?S[h]=e:S[h]=i,r>s||d[3]<s?D[h]=r:D[h]=s,a===i&&u[3]<S[h]||a===s&&u[3]<D[h]?n=S[h]:(a===i&&u[3]>S[h]||a===s&&u[3]>D[h])&&(n=D[h]),m.push([g[v+h],n]),C.push(g[v+h]),T.push(n);return{values:m,xData:C,yData:T}}},t.defaultOptions=u(s.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}}),t}(s);return d(f.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]}),o.registerSeriesType("supertrend",f),f}),e(t,"masters/indicators/supertrend.src.js",[],function(){})});