(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[7],{34:function(a,s,e){"use strict";var t=e(45),o=e(40),i=e.n(o),n=e(35),r=e.n(n),c=e(41),l=e.n(c),p=e(42),d=e.n(p),h=e(0),f=e.n(h),S=e(12),u=(e(38),Object(h.lazy)((function(){return e.e(11).then(e.t.bind(null,44,7))})));l()(r.a),d()(r.a),r.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function U(a){var s=a.baseColor,e=void 0===s?"#FF0000":s,o=a.borderLines,n=a.colorKey,c=void 0===n?"value":n,l=a.colorMaxValue,p=a.colorMinValue,d=a.colorValueInterval,U=a.data,m=a.hoverColor,D=void 0===m?"#A4EDBA":m,b=a.mapData,v=a.separatorLines,g=a.seriesJoinBy,y=a.stateBorderColor,w=void 0===y?"#DDDDDD":y,C=a.title,x=void 0===C?"Untitled":C,M=a.tooltipFormat,k=a.tooltipHeader,L=a.tooltipSuffix,O=a.tooltipTitle,A=i()(e),N=v?{color:"#DDDDDD",data:v,name:"Separator",shadow:!1,type:"mapline"}:{},F={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{fontFamily:"Lato"},colorAxis:{max:l,min:p,stops:[].concat(Object(t.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(A.color[0],", ").concat(A.color[1],", ").concat(A.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(A.color[0],", ").concat(A.color[1],", ").concat(A.color[2],")")]]),tickInterval:d},legend:{backgroundColor:r.a.defaultOptions&&r.a.defaultOptions.legend&&r.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:c},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:U,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:g,mapData:b,name:O,shadow:!1,states:{hover:{color:D}},tooltip:{pointFormat:M,headerFormat:k,valueSuffix:L}},{color:w,data:o,shadow:!1,type:"mapline"},N],title:{text:x}};return l&&d&&U&&b&&g?f.a.createElement(h.Suspense,{fallback:f.a.createElement(S.a,null)},f.a.createElement("div",{className:"highcharts-wrapper"},f.a.createElement(u,{constructorType:"mapChart",highcharts:r.a,options:F}))):"The following props are required: colorMaxValue, colorValueInterval, data, mapData, and seriesJoinBy"}U.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},s.a=U},36:function(a,s,e){"use strict";e.d(s,"a",(function(){return o}));var t=e(39);function o(a){var s=a.title;return'<span style="font-size:24px;">COVID-19: '.concat(s,'</span><br /><span style="font-size:16px;">Deaths: ').concat(t.deaths.toLocaleString("en-US")," | Cases: ").concat(t.cases.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(t.lastUpdated).toLocaleDateString()," ").concat(new Date(t.lastUpdated).toLocaleTimeString(),"</span>")}},37:function(a){a.exports=JSON.parse('[{"path":["M",-707,-5188,"L",3651,-2950,"M",1747,-2584,"L",1747,-3799],"properties":{"hc-group":"__separator_lines__"}}]')},38:function(a,s,e){},39:function(a){a.exports=JSON.parse('{"cases":123580,"deaths":2133,"lastUpdated":"Sun, 29 Mar 2020 23:23:34 GMT"}')},43:function(a){a.exports=JSON.parse('[{"state":"Washington","fips":"US53","cases":4311,"deaths":191},{"state":"Illinois","fips":"US17","cases":3547,"deaths":50},{"state":"California","fips":"US06","cases":5565,"deaths":121},{"state":"Arizona","fips":"US04","cases":773,"deaths":15},{"state":"Massachusetts","fips":"US25","cases":4257,"deaths":44},{"state":"Wisconsin","fips":"US55","cases":1042,"deaths":17},{"state":"Texas","fips":"US48","cases":2161,"deaths":29},{"state":"Nebraska","fips":"US31","cases":122,"deaths":2},{"state":"Utah","fips":"US49","cases":608,"deaths":2},{"state":"Oregon","fips":"US41","cases":479,"deaths":13},{"state":"Florida","fips":"US12","cases":4038,"deaths":56},{"state":"New York","fips":"US36","cases":53363,"deaths":782},{"state":"Rhode Island","fips":"US44","cases":239,"deaths":2},{"state":"Georgia","fips":"US13","cases":2447,"deaths":79},{"state":"New Hampshire","fips":"US33","cases":214,"deaths":2},{"state":"North Carolina","fips":"US37","cases":972,"deaths":4},{"state":"New Jersey","fips":"US34","cases":11124,"deaths":140},{"state":"Colorado","fips":"US08","cases":2061,"deaths":44},{"state":"Maryland","fips":"US24","cases":1066,"deaths":10},{"state":"Nevada","fips":"US32","cases":738,"deaths":14},{"state":"Tennessee","fips":"US47","cases":1373,"deaths":6},{"state":"Hawaii","fips":"US15","cases":151,"deaths":0},{"state":"Indiana","fips":"US18","cases":1232,"deaths":31},{"state":"Kentucky","fips":"US21","cases":394,"deaths":9},{"state":"Minnesota","fips":"US27","cases":441,"deaths":5},{"state":"Oklahoma","fips":"US40","cases":377,"deaths":15},{"state":"Pennsylvania","fips":"US42","cases":2815,"deaths":35},{"state":"South Carolina","fips":"US45","cases":660,"deaths":15},{"state":"District of Columbia","fips":"US11","cases":342,"deaths":4},{"state":"Kansas","fips":"US20","cases":271,"deaths":6},{"state":"Missouri","fips":"US29","cases":838,"deaths":10},{"state":"Vermont","fips":"US50","cases":211,"deaths":12},{"state":"Virginia","fips":"US51","cases":740,"deaths":17},{"state":"Connecticut","fips":"US09","cases":1524,"deaths":33},{"state":"Iowa","fips":"US19","cases":298,"deaths":3},{"state":"Louisiana","fips":"US22","cases":3315,"deaths":137},{"state":"Ohio","fips":"US39","cases":1406,"deaths":25},{"state":"Michigan","fips":"US26","cases":4635,"deaths":111},{"state":"South Dakota","fips":"US46","cases":68,"deaths":1},{"state":"Arkansas","fips":"US05","cases":409,"deaths":5},{"state":"Delaware","fips":"US10","cases":214,"deaths":5},{"state":"Mississippi","fips":"US28","cases":669,"deaths":13},{"state":"New Mexico","fips":"US35","cases":208,"deaths":2},{"state":"North Dakota","fips":"US38","cases":94,"deaths":1},{"state":"Wyoming","fips":"US56","cases":84,"deaths":0},{"state":"Alaska","fips":"US02","cases":102,"deaths":1},{"state":"Maine","fips":"US23","cases":211,"deaths":1},{"state":"Alabama","fips":"US01","cases":720,"deaths":4},{"state":"Idaho","fips":"US16","cases":261,"deaths":5},{"state":"Montana","fips":"US30","cases":147,"deaths":1},{"state":"Puerto Rico","fips":"US72","cases":64,"deaths":2},{"state":"Virgin Islands","fips":"US78","cases":17,"deaths":0},{"state":"Guam","fips":"US66","cases":49,"deaths":1},{"state":"West Virginia","fips":"US54","cases":113,"deaths":0}]')},59:function(a,s,e){"use strict";e.r(s);var t=e(51),o=e(0),i=e.n(o),n=e(34),r=e(36),c=e(37),l=e(43);s.default=function(){var a=l.sort((function(a,s){return a.cases>s.cases?-1:1}))[0].cases;return i.a.createElement(n.a,{baseColor:"#FF0000",colorKey:"cases",colorMaxValue:a,colorMinValue:0,colorValueInterval:Math.round(a/5),data:l,hasSeparatorLines:!0,hoverColor:"#A4EDBA",mapData:t,separatorLines:c,seriesJoinBy:"fips",title:Object(r.a)({title:"USA State ".concat("cases".charAt(0).toUpperCase()+"cases".slice(1))}),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}<br />",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}}}]);
//# sourceMappingURL=7.1387f1e4.chunk.js.map