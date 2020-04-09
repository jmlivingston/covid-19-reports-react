(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[43],{172:function(t){t.exports=JSON.parse('{"summary":{"name":"Montana","cases":319,"casesMax":118,"deaths":6,"deathsMax":3,"lastUpdated":"Thu, 09 Apr 2020 05:01:30 GMT"},"data":[{"county":"Toole","state":"Montana","stateCode":"MT","fips":"30101","cases":15,"deaths":3},{"county":"Lincoln","state":"Montana","stateCode":"MT","fips":"30053","cases":7,"deaths":1},{"county":"Madison","state":"Montana","stateCode":"MT","fips":"30057","cases":9,"deaths":1},{"county":"Missoula","state":"Montana","stateCode":"MT","fips":"30063","cases":24,"deaths":1},{"county":"Roosevelt","state":"Montana","stateCode":"MT","fips":"30085","cases":1,"deaths":0},{"county":"Hill","state":"Montana","stateCode":"MT","fips":"30041","cases":1,"deaths":0},{"county":"Meagher","state":"Montana","stateCode":"MT","fips":"30059","cases":1,"deaths":0},{"county":"Liberty","state":"Montana","stateCode":"MT","fips":"30051","cases":1,"deaths":0},{"county":"Musselshell","state":"Montana","stateCode":"MT","fips":"30065","cases":1,"deaths":0},{"county":"Glacier","state":"Montana","stateCode":"MT","fips":"30035","cases":1,"deaths":0},{"county":"Beaverhead","state":"Montana","stateCode":"MT","fips":"30001","cases":1,"deaths":0},{"county":"Ravalli","state":"Montana","stateCode":"MT","fips":"30081","cases":2,"deaths":0},{"county":"Jefferson","state":"Montana","stateCode":"MT","fips":"30043","cases":2,"deaths":0},{"county":"Carbon","state":"Montana","stateCode":"MT","fips":"30009","cases":2,"deaths":0},{"county":"Deer Lodge","state":"Montana","stateCode":"MT","fips":"30023","cases":3,"deaths":0},{"county":"Broadwater","state":"Montana","stateCode":"MT","fips":"30007","cases":4,"deaths":0},{"county":"Lake","state":"Montana","stateCode":"MT","fips":"30047","cases":5,"deaths":0},{"county":"Park","state":"Montana","stateCode":"MT","fips":"30067","cases":6,"deaths":0},{"county":"Silver Bow","state":"Montana","stateCode":"MT","fips":"30093","cases":11,"deaths":0},{"county":"Cascade","state":"Montana","stateCode":"MT","fips":"30013","cases":11,"deaths":0},{"county":"Lewis and Clark","state":"Montana","stateCode":"MT","fips":"30049","cases":15,"deaths":0},{"county":"Flathead","state":"Montana","stateCode":"MT","fips":"30029","cases":31,"deaths":0},{"county":"Yellowstone","state":"Montana","stateCode":"MT","fips":"30111","cases":47,"deaths":0},{"county":"Gallatin","state":"Montana","stateCode":"MT","fips":"30031","cases":118,"deaths":0}]}')},229:function(t,a,e){"use strict";e.r(a);var o=e(171),s=e(0),n=e.n(s),r=e(172),c=e(59),i=e(60);a.default=function(){return n.a.createElement(i.a,Object.assign({},r,{mapData:o,reportService:c.a}))}},57:function(t,a,e){"use strict";var o=e(68),s=e(65),n=e.n(s),r=e(61),c=e.n(r),i=e(63),l=e.n(i),d=e(64),p=e.n(d),u=e(62),h=e.n(u),M=e(66),f=e.n(M),y=e(0),m=e.n(y),C=e(18),T=(e(58),Object(y.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));h()(c.a),l()(c.a),p()(c.a),f()(c.a);function b(t){var a=t.baseColor,e=t.borderLines,s=t.colorKey,r=t.colorMaxValue,i=t.colorMinValue,l=t.colorValueInterval,d=t.data,p=t.drilldown,u=t.hoverColor,h=t.mapData,M=t.separatorLines,f=t.seriesJoinBy,b=t.stateBorderColor,g=t.title,v=t.tooltipFormat,D=t.tooltipHeader,w=t.tooltipSuffix,x=t.tooltipTitle,L=n()(a),S=M?{color:"#DDDDDD",data:M,name:"Separator",shadow:!1,type:"mapline"}:{},k={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:r,min:i,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(L.color[0],", ").concat(L.color[1],", ").concat(L.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(L.color[0],", ").concat(L.color[1],", ").concat(L.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:s},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:h,name:x,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:w}},{color:b,data:e,shadow:!1,type:"mapline"},S],title:{text:g}};return r&&d&&h&&f?m.a.createElement(y.Suspense,{fallback:m.a.createElement(C.a,null)},m.a.createElement("div",{className:"highcharts-wrapper"},m.a.createElement(T,{constructorType:"mapChart",highcharts:c.a,options:k}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=b},58:function(t,a,e){},59:function(t,a,e){"use strict";var o={getTitle:function(t){var a=t.name,e=t.cases,o=t.deaths,s=t.lastUpdated,n=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(t){var a="";switch(t.state){case"New York":a="NYC split between boroughs.";break;case"Missouri":a="KC split between counties."}return a}({name:a}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(s).toLocaleDateString()," ").concat(new Date(s).toLocaleTimeString(),"</span>")}};a.a=o},60:function(t,a,e){"use strict";var o=e(9),s=e(0),n=e.n(s),r=e(11),c=e(57);a.a=function(t){var a=t.data,e=t.mapData,i=t.reportService,l=t.summary,d=Object(s.useContext)(r.a).reportType;return n.a.createElement(c.a,{colorKey:d.category,colorMaxValue:l["".concat(d.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(d.category,"Max")]/5),data:a,mapData:e,seriesJoinBy:"fips",title:i.getTitle(Object(o.a)({},l,{reportType:d.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=43.1d08a6e8.chunk.js.map