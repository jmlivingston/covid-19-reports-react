(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[38],{188:function(a,t,e){"use strict";e.r(t);var s=e(89),o=e(0),i=e.n(o),n=e(90),c=e(59),r=e(60);t.default=function(){return i.a.createElement(r.a,Object.assign({},n,{mapData:s,reportService:c.a}))}},57:function(a,t,e){"use strict";var s=e(68),o=e(65),i=e.n(o),n=e(61),c=e.n(n),r=e(63),u=e.n(r),d=e(64),l=e.n(d),p=e(62),L=e.n(p),h=e(66),f=e.n(h),y=e(0),C=e.n(y),A=e(18),m=(e(58),Object(y.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));L()(c.a),u()(c.a),l()(c.a),f()(c.a);function b(a){var t=a.baseColor,e=a.borderLines,o=a.colorKey,n=a.colorMaxValue,r=a.colorMinValue,u=a.colorValueInterval,d=a.data,l=a.drilldown,p=a.hoverColor,L=a.mapData,h=a.separatorLines,f=a.seriesJoinBy,b=a.stateBorderColor,g=a.title,v=a.tooltipFormat,D=a.tooltipHeader,S=a.tooltipSuffix,w=a.tooltipTitle,x=i()(t),T=h?{color:"#DDDDDD",data:h,name:"Separator",shadow:!1,type:"mapline"}:{},M={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:l},fontFamily:"Lato"},colorAxis:{max:n,min:r,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],")")]]),tickInterval:u},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:L,name:w,shadow:!1,states:{hover:{color:p}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:S}},{color:b,data:e,shadow:!1,type:"mapline"},T],title:{text:g}};return n&&d&&L&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(A.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(m,{constructorType:"mapChart",highcharts:c.a,options:M}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=b},58:function(a,t,e){},59:function(a,t,e){"use strict";var s={getTitle:function(a){var t=a.name,e=a.cases,s=a.deaths,o=a.lastUpdated,i=a.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(a){var t="";switch(a.state){case"New York":t="NYC split between boroughs.";break;case"Missouri":t="KC split between counties."}return t}({name:t}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};t.a=s},60:function(a,t,e){"use strict";var s=e(9),o=e(0),i=e.n(o),n=e(11),c=e(57);t.a=function(a){var t=a.data,e=a.mapData,r=a.reportService,u=a.summary,d=Object(o.useContext)(n.a).reportType;return i.a.createElement(c.a,{colorKey:d.category,colorMaxValue:u["".concat(d.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(u["".concat(d.category,"Max")]/5),data:t,mapData:e,seriesJoinBy:"fips",title:r.getTitle(Object(s.a)({},u,{reportType:d.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},90:function(a){a.exports=JSON.parse('{"summary":{"name":"Louisiana","cases":14867,"casesMax":4565,"deaths":512,"deathsMax":171,"lastUpdated":"Tue, 07 Apr 2020 16:14:02 GMT"},"data":[{"county":"Orleans","state":"Louisiana","stateCode":"LA","fips":"22071","cases":4565,"deaths":171},{"county":"Jefferson","state":"Louisiana","stateCode":"LA","fips":"22051","cases":3530,"deaths":121},{"county":"East Baton Rouge","state":"Louisiana","stateCode":"LA","fips":"22033","cases":816,"deaths":25},{"county":"St. John the Baptist","state":"Louisiana","stateCode":"LA","fips":"22095","cases":366,"deaths":24},{"county":"Caddo","state":"Louisiana","stateCode":"LA","fips":"22017","cases":711,"deaths":21},{"county":"St. Tammany","state":"Louisiana","stateCode":"LA","fips":"22103","cases":637,"deaths":17},{"county":"St. Charles","state":"Louisiana","stateCode":"LA","fips":"22089","cases":285,"deaths":15},{"county":"Ascension","state":"Louisiana","stateCode":"LA","fips":"22005","cases":347,"deaths":11},{"county":"St. Bernard","state":"Louisiana","stateCode":"LA","fips":"22087","cases":267,"deaths":8},{"county":"West Baton Rouge","state":"Louisiana","stateCode":"LA","fips":"22121","cases":45,"deaths":7},{"county":"Terrebonne","state":"Louisiana","stateCode":"LA","fips":"22109","cases":182,"deaths":7},{"county":"Lafourche","state":"Louisiana","stateCode":"LA","fips":"22057","cases":305,"deaths":7},{"county":"Plaquemines","state":"Louisiana","stateCode":"LA","fips":"22075","cases":100,"deaths":6},{"county":"Iberville","state":"Louisiana","stateCode":"LA","fips":"22047","cases":136,"deaths":6},{"county":"St. James","state":"Louisiana","stateCode":"LA","fips":"22093","cases":167,"deaths":6},{"county":"Lafayette","state":"Louisiana","stateCode":"LA","fips":"22055","cases":260,"deaths":6},{"county":"Allen","state":"Louisiana","stateCode":"LA","fips":"22003","cases":52,"deaths":5},{"county":"Iberia","state":"Louisiana","stateCode":"LA","fips":"22045","cases":83,"deaths":5},{"county":"St. Landry","state":"Louisiana","stateCode":"LA","fips":"22097","cases":52,"deaths":4},{"county":"De Soto","state":"Louisiana","stateCode":"LA","fips":"22031","cases":82,"deaths":4},{"county":"St. Martin","state":"Louisiana","stateCode":"LA","fips":"22099","cases":90,"deaths":4},{"county":"Rapides","state":"Louisiana","stateCode":"LA","fips":"22079","cases":110,"deaths":4},{"county":"Unknown","state":"Louisiana","stateCode":"LA","fips":"","cases":48,"deaths":3},{"county":"Bossier","state":"Louisiana","stateCode":"LA","fips":"22015","cases":139,"deaths":3},{"county":"Calcasieu","state":"Louisiana","stateCode":"LA","fips":"22019","cases":159,"deaths":3},{"county":"Claiborne","state":"Louisiana","stateCode":"LA","fips":"22027","cases":30,"deaths":2},{"county":"Webster","state":"Louisiana","stateCode":"LA","fips":"22119","cases":51,"deaths":2},{"county":"Acadia","state":"Louisiana","stateCode":"LA","fips":"22001","cases":79,"deaths":2},{"county":"Washington","state":"Louisiana","stateCode":"LA","fips":"22117","cases":92,"deaths":2},{"county":"Tangipahoa","state":"Louisiana","stateCode":"LA","fips":"22105","cases":186,"deaths":2},{"county":"Winn","state":"Louisiana","stateCode":"LA","fips":"22127","cases":2,"deaths":1},{"county":"Concordia","state":"Louisiana","stateCode":"LA","fips":"22029","cases":9,"deaths":1},{"county":"Catahoula","state":"Louisiana","stateCode":"LA","fips":"22025","cases":12,"deaths":1},{"county":"Bienville","state":"Louisiana","stateCode":"LA","fips":"22013","cases":14,"deaths":1},{"county":"Vermilion","state":"Louisiana","stateCode":"LA","fips":"22113","cases":17,"deaths":1},{"county":"Jefferson Davis","state":"Louisiana","stateCode":"LA","fips":"22053","cases":21,"deaths":1},{"county":"Avoyelles","state":"Louisiana","stateCode":"LA","fips":"22009","cases":40,"deaths":1},{"county":"Livingston","state":"Louisiana","stateCode":"LA","fips":"22063","cases":79,"deaths":1},{"county":"Ouachita","state":"Louisiana","stateCode":"LA","fips":"22073","cases":230,"deaths":1},{"county":"Madison","state":"Louisiana","stateCode":"LA","fips":"22065","cases":1,"deaths":0},{"county":"East Carroll","state":"Louisiana","stateCode":"LA","fips":"22035","cases":1,"deaths":0},{"county":"West Carroll","state":"Louisiana","stateCode":"LA","fips":"22123","cases":1,"deaths":0},{"county":"Red River","state":"Louisiana","stateCode":"LA","fips":"22081","cases":2,"deaths":0},{"county":"Jackson","state":"Louisiana","stateCode":"LA","fips":"22049","cases":4,"deaths":0},{"county":"LaSalle","state":"Louisiana","stateCode":"LA","fips":"22059","cases":6,"deaths":0},{"county":"Sabine","state":"Louisiana","stateCode":"LA","fips":"22085","cases":7,"deaths":0},{"county":"St. Helena","state":"Louisiana","stateCode":"LA","fips":"22091","cases":8,"deaths":0},{"county":"Grant","state":"Louisiana","stateCode":"LA","fips":"22043","cases":10,"deaths":0},{"county":"Vernon","state":"Louisiana","stateCode":"LA","fips":"22115","cases":10,"deaths":0},{"county":"Richland","state":"Louisiana","stateCode":"LA","fips":"22083","cases":11,"deaths":0},{"county":"Caldwell","state":"Louisiana","stateCode":"LA","fips":"22021","cases":11,"deaths":0},{"county":"Morehouse","state":"Louisiana","stateCode":"LA","fips":"22067","cases":15,"deaths":0},{"county":"Lincoln","state":"Louisiana","stateCode":"LA","fips":"22061","cases":19,"deaths":0},{"county":"Natchitoches","state":"Louisiana","stateCode":"LA","fips":"22069","cases":22,"deaths":0},{"county":"Beauregard","state":"Louisiana","stateCode":"LA","fips":"22011","cases":23,"deaths":0},{"county":"Evangeline","state":"Louisiana","stateCode":"LA","fips":"22039","cases":23,"deaths":0},{"county":"Pointe Coupee","state":"Louisiana","stateCode":"LA","fips":"22077","cases":24,"deaths":0},{"county":"Union","state":"Louisiana","stateCode":"LA","fips":"22111","cases":26,"deaths":0},{"county":"Franklin","state":"Louisiana","stateCode":"LA","fips":"22041","cases":28,"deaths":0},{"county":"West Feliciana","state":"Louisiana","stateCode":"LA","fips":"22125","cases":30,"deaths":0},{"county":"East Feliciana","state":"Louisiana","stateCode":"LA","fips":"22037","cases":39,"deaths":0},{"county":"St. Mary","state":"Louisiana","stateCode":"LA","fips":"22101","cases":73,"deaths":0},{"county":"Assumption","state":"Louisiana","stateCode":"LA","fips":"22007","cases":77,"deaths":0}]}')}}]);
//# sourceMappingURL=38.10175f02.chunk.js.map