(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[42],{158:function(t){t.exports=JSON.parse('{"summary":{"name":"Montana","cases":161,"casesMax":62,"deaths":1,"deathsMax":1,"lastUpdated":"Tue, 31 Mar 2020 14:33:24 GMT"},"data":[{"county":"Lincoln","state":"Montana","stateCode":"MT","fips":"30053","cases":4,"deaths":1},{"county":"Roosevelt","state":"Montana","stateCode":"MT","fips":"30085","cases":1,"deaths":0},{"county":"Ravalli","state":"Montana","stateCode":"MT","fips":"30081","cases":1,"deaths":0},{"county":"Hill","state":"Montana","stateCode":"MT","fips":"30041","cases":1,"deaths":0},{"county":"Meagher","state":"Montana","stateCode":"MT","fips":"30059","cases":1,"deaths":0},{"county":"Deer Lodge","state":"Montana","stateCode":"MT","fips":"30023","cases":1,"deaths":0},{"county":"Jefferson","state":"Montana","stateCode":"MT","fips":"30043","cases":2,"deaths":0},{"county":"Park","state":"Montana","stateCode":"MT","fips":"30067","cases":2,"deaths":0},{"county":"Broadwater","state":"Montana","stateCode":"MT","fips":"30007","cases":3,"deaths":0},{"county":"Lake","state":"Montana","stateCode":"MT","fips":"30047","cases":3,"deaths":0},{"county":"Madison","state":"Montana","stateCode":"MT","fips":"30057","cases":4,"deaths":0},{"county":"Toole","state":"Montana","stateCode":"MT","fips":"30101","cases":5,"deaths":0},{"county":"Cascade","state":"Montana","stateCode":"MT","fips":"30013","cases":7,"deaths":0},{"county":"Flathead","state":"Montana","stateCode":"MT","fips":"30029","cases":8,"deaths":0},{"county":"Silver Bow","state":"Montana","stateCode":"MT","fips":"30093","cases":9,"deaths":0},{"county":"Lewis and Clark","state":"Montana","stateCode":"MT","fips":"30049","cases":10,"deaths":0},{"county":"Missoula","state":"Montana","stateCode":"MT","fips":"30063","cases":11,"deaths":0},{"county":"Yellowstone","state":"Montana","stateCode":"MT","fips":"30111","cases":26,"deaths":0},{"county":"Gallatin","state":"Montana","stateCode":"MT","fips":"30031","cases":62,"deaths":0}]}')},212:function(t,a,e){"use strict";e.r(a);var o=e(157),s=e(0),n=e.n(s),r=e(158),c=e(41);a.default=function(){return n.a.createElement(c.a,{data:r,mapData:o})}},38:function(t,a,e){"use strict";var o=e(49),s=e(43),n=e.n(s),r=e(42),c=e.n(r),i=e(44),l=e.n(i),d=e(45),p=e.n(d),u=e(46),h=e.n(u),f=e(47),M=e.n(f),y=e(0),m=e.n(y),C=e(14),b=(e(39),Object(y.lazy)((function(){return e.e(89).then(e.t.bind(null,48,7))})));h()(c.a),l()(c.a),p()(c.a),M()(c.a),c.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function T(t){var a=t.baseColor,e=t.borderLines,s=t.colorKey,r=t.colorMaxValue,i=t.colorMinValue,l=t.colorValueInterval,d=t.data,p=t.drilldown,u=t.hoverColor,h=t.mapData,f=t.separatorLines,M=t.seriesJoinBy,T=t.stateBorderColor,v=t.title,D=t.tooltipFormat,g=t.tooltipHeader,x=t.tooltipSuffix,w=t.tooltipTitle,L=n()(a),S=f?{color:"#DDDDDD",data:f,name:"Separator",shadow:!1,type:"mapline"}:{},k={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:r,min:i,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(L.color[0],", ").concat(L.color[1],", ").concat(L.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(L.color[0],", ").concat(L.color[1],", ").concat(L.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:s},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:M,mapData:h,name:w,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:D,headerFormat:g,valueSuffix:x}},{color:T,data:e,shadow:!1,type:"mapline"},S],title:{text:v}};return r&&d&&h&&M?m.a.createElement(y.Suspense,{fallback:m.a.createElement(C.a,null)},m.a.createElement("div",{className:"highcharts-wrapper"},m.a.createElement(b,{constructorType:"mapChart",highcharts:c.a,options:k}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}T.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=T},39:function(t,a,e){},40:function(t,a,e){"use strict";function o(t){var a=t.name,e=t.cases,o=t.deaths,s=t.lastUpdated,n=t.reportType,r=t.details;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(r?" | (".concat(r,")"):"",'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(s).toLocaleDateString()," ").concat(new Date(s).toLocaleTimeString(),"</span>")}e.d(a,"a",(function(){return o}))},41:function(t,a,e){"use strict";var o=e(50),s=e(0),n=e.n(s),r=e(9),c=e(38),i=e(40);a.a=function(t){var a=t.data,e=t.mapData,l=Object(s.useContext)(r.a).reportType,d="";switch(a.summary.name){case"New York":d="NYC split between boroughs.";break;case"Missouri":d="KC split between counties."}return n.a.createElement(c.a,{colorKey:l,colorMaxValue:a.summary["".concat(l,"Max")],colorMinValue:0,colorValueInterval:Math.round(a.summary["".concat(l,"Max")]/5),data:a.data,hasSeparatorLines:!0,mapData:e,seriesJoinBy:"fips",title:Object(i.a)(Object(o.a)({},a.summary,{reportType:l,details:d})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}}}]);
//# sourceMappingURL=42.252c51eb.chunk.js.map