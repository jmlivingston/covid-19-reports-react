(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[38],{188:function(a,t,e){"use strict";e.r(t);var s=e(89),o=e(0),i=e.n(o),n=e(90),c=e(59),r=e(60);t.default=function(){return i.a.createElement(r.a,Object.assign({},n,{mapData:s,reportService:c.a}))}},57:function(a,t,e){"use strict";var s=e(68),o=e(65),i=e.n(o),n=e(61),c=e.n(n),r=e(63),u=e.n(r),d=e(64),l=e.n(d),p=e(62),L=e.n(p),h=e(66),f=e.n(h),y=e(0),C=e.n(y),A=e(18),m=(e(58),Object(y.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));L()(c.a),u()(c.a),l()(c.a),f()(c.a);function b(a){var t=a.baseColor,e=a.borderLines,o=a.colorKey,n=a.colorMaxValue,r=a.colorMinValue,u=a.colorValueInterval,d=a.data,l=a.drilldown,p=a.hoverColor,L=a.mapData,h=a.separatorLines,f=a.seriesJoinBy,b=a.stateBorderColor,g=a.title,v=a.tooltipFormat,D=a.tooltipHeader,S=a.tooltipSuffix,w=a.tooltipTitle,x=i()(t),F=h?{color:"#DDDDDD",data:h,name:"Separator",shadow:!1,type:"mapline"}:{},M={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:l},fontFamily:"Lato"},colorAxis:{max:n,min:r,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],")")]]),tickInterval:u},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:L,name:w,shadow:!1,states:{hover:{color:p}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:S}},{color:b,data:e,shadow:!1,type:"mapline"},F],title:{text:g}};return n&&d&&L&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(A.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(m,{constructorType:"mapChart",highcharts:c.a,options:M}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=b},58:function(a,t,e){},59:function(a,t,e){"use strict";var s={getTitle:function(a){var t=a.name,e=a.cases,s=a.deaths,o=a.lastUpdated,i=a.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(a){var t="";switch(a.state){case"New York":t="NYC split between boroughs.";break;case"Missouri":t="KC split between counties."}return t}({name:t}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};t.a=s},60:function(a,t,e){"use strict";var s=e(9),o=e(0),i=e.n(o),n=e(11),c=e(57);t.a=function(a){var t=a.data,e=a.mapData,r=a.reportService,u=a.summary,d=Object(o.useContext)(n.a).reportType;return i.a.createElement(c.a,{colorKey:d.category,colorMaxValue:u["".concat(d.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(u["".concat(d.category,"Max")]/5),data:t,mapData:e,seriesJoinBy:"fips",title:r.getTitle(Object(s.a)({},u,{reportType:d.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},90:function(a){a.exports=JSON.parse('{"summary":{"name":"Louisiana","cases":17030,"casesMax":5070,"deaths":652,"deathsMax":208,"lastUpdated":"Fri, 10 Apr 2020 00:38:18 GMT"},"data":[{"county":"Orleans","state":"Louisiana","stateCode":"LA","fips":"22071","cases":5070,"deaths":208},{"county":"Jefferson","state":"Louisiana","stateCode":"LA","fips":"22051","cases":4092,"deaths":149},{"county":"St. John the Baptist","state":"Louisiana","stateCode":"LA","fips":"22095","cases":432,"deaths":35},{"county":"East Baton Rouge","state":"Louisiana","stateCode":"LA","fips":"22033","cases":935,"deaths":33},{"county":"Caddo","state":"Louisiana","stateCode":"LA","fips":"22017","cases":803,"deaths":25},{"county":"St. Charles","state":"Louisiana","stateCode":"LA","fips":"22089","cases":328,"deaths":19},{"county":"St. Tammany","state":"Louisiana","stateCode":"LA","fips":"22103","cases":733,"deaths":18},{"county":"Ascension","state":"Louisiana","stateCode":"LA","fips":"22005","cases":366,"deaths":15},{"county":"Terrebonne","state":"Louisiana","stateCode":"LA","fips":"22109","cases":209,"deaths":14},{"county":"Lafourche","state":"Louisiana","stateCode":"LA","fips":"22057","cases":355,"deaths":11},{"county":"Lafayette","state":"Louisiana","stateCode":"LA","fips":"22055","cases":285,"deaths":10},{"county":"St. Bernard","state":"Louisiana","stateCode":"LA","fips":"22087","cases":304,"deaths":10},{"county":"West Baton Rouge","state":"Louisiana","stateCode":"LA","fips":"22121","cases":54,"deaths":9},{"county":"Iberville","state":"Louisiana","stateCode":"LA","fips":"22047","cases":171,"deaths":9},{"county":"De Soto","state":"Louisiana","stateCode":"LA","fips":"22031","cases":91,"deaths":7},{"county":"Plaquemines","state":"Louisiana","stateCode":"LA","fips":"22075","cases":123,"deaths":7},{"county":"St. James","state":"Louisiana","stateCode":"LA","fips":"22093","cases":181,"deaths":7},{"county":"Bossier","state":"Louisiana","stateCode":"LA","fips":"22015","cases":159,"deaths":6},{"county":"Allen","state":"Louisiana","stateCode":"LA","fips":"22003","cases":65,"deaths":5},{"county":"Washington","state":"Louisiana","stateCode":"LA","fips":"22117","cases":106,"deaths":5},{"county":"St. Landry","state":"Louisiana","stateCode":"LA","fips":"22097","cases":86,"deaths":4},{"county":"Iberia","state":"Louisiana","stateCode":"LA","fips":"22045","cases":97,"deaths":4},{"county":"St. Martin","state":"Louisiana","stateCode":"LA","fips":"22099","cases":112,"deaths":4},{"county":"Rapides","state":"Louisiana","stateCode":"LA","fips":"22079","cases":135,"deaths":4},{"county":"Calcasieu","state":"Louisiana","stateCode":"LA","fips":"22019","cases":191,"deaths":4},{"county":"Tangipahoa","state":"Louisiana","stateCode":"LA","fips":"22105","cases":269,"deaths":4},{"county":"Union","state":"Louisiana","stateCode":"LA","fips":"22111","cases":35,"deaths":3},{"county":"Ouachita","state":"Louisiana","stateCode":"LA","fips":"22073","cases":275,"deaths":3},{"county":"Winn","state":"Louisiana","stateCode":"LA","fips":"22127","cases":5,"deaths":2},{"county":"Claiborne","state":"Louisiana","stateCode":"LA","fips":"22027","cases":33,"deaths":2},{"county":"Unknown","state":"Louisiana","stateCode":"LA","fips":"","cases":49,"deaths":2},{"county":"Webster","state":"Louisiana","stateCode":"LA","fips":"22119","cases":51,"deaths":2},{"county":"Acadia","state":"Louisiana","stateCode":"LA","fips":"22001","cases":86,"deaths":2},{"county":"Red River","state":"Louisiana","stateCode":"LA","fips":"22081","cases":3,"deaths":1},{"county":"Concordia","state":"Louisiana","stateCode":"LA","fips":"22029","cases":12,"deaths":1},{"county":"Catahoula","state":"Louisiana","stateCode":"LA","fips":"22025","cases":14,"deaths":1},{"county":"Bienville","state":"Louisiana","stateCode":"LA","fips":"22013","cases":17,"deaths":1},{"county":"Vermilion","state":"Louisiana","stateCode":"LA","fips":"22113","cases":22,"deaths":1},{"county":"Beauregard","state":"Louisiana","stateCode":"LA","fips":"22011","cases":23,"deaths":1},{"county":"Jefferson Davis","state":"Louisiana","stateCode":"LA","fips":"22053","cases":28,"deaths":1},{"county":"East Feliciana","state":"Louisiana","stateCode":"LA","fips":"22037","cases":39,"deaths":1},{"county":"Avoyelles","state":"Louisiana","stateCode":"LA","fips":"22009","cases":48,"deaths":1},{"county":"Livingston","state":"Louisiana","stateCode":"LA","fips":"22063","cases":99,"deaths":1},{"county":"East Carroll","state":"Louisiana","stateCode":"LA","fips":"22035","cases":1,"deaths":0},{"county":"West Carroll","state":"Louisiana","stateCode":"LA","fips":"22123","cases":1,"deaths":0},{"county":"Cameron","state":"Louisiana","stateCode":"LA","fips":"22023","cases":1,"deaths":0},{"county":"Madison","state":"Louisiana","stateCode":"LA","fips":"22065","cases":2,"deaths":0},{"county":"Jackson","state":"Louisiana","stateCode":"LA","fips":"22049","cases":5,"deaths":0},{"county":"Sabine","state":"Louisiana","stateCode":"LA","fips":"22085","cases":7,"deaths":0},{"county":"LaSalle","state":"Louisiana","stateCode":"LA","fips":"22059","cases":8,"deaths":0},{"county":"Grant","state":"Louisiana","stateCode":"LA","fips":"22043","cases":10,"deaths":0},{"county":"St. Helena","state":"Louisiana","stateCode":"LA","fips":"22091","cases":10,"deaths":0},{"county":"Vernon","state":"Louisiana","stateCode":"LA","fips":"22115","cases":11,"deaths":0},{"county":"Richland","state":"Louisiana","stateCode":"LA","fips":"22083","cases":13,"deaths":0},{"county":"Caldwell","state":"Louisiana","stateCode":"LA","fips":"22021","cases":14,"deaths":0},{"county":"Morehouse","state":"Louisiana","stateCode":"LA","fips":"22067","cases":23,"deaths":0},{"county":"Lincoln","state":"Louisiana","stateCode":"LA","fips":"22061","cases":24,"deaths":0},{"county":"Evangeline","state":"Louisiana","stateCode":"LA","fips":"22039","cases":25,"deaths":0},{"county":"Natchitoches","state":"Louisiana","stateCode":"LA","fips":"22069","cases":25,"deaths":0},{"county":"Pointe Coupee","state":"Louisiana","stateCode":"LA","fips":"22077","cases":27,"deaths":0},{"county":"Franklin","state":"Louisiana","stateCode":"LA","fips":"22041","cases":30,"deaths":0},{"county":"West Feliciana","state":"Louisiana","stateCode":"LA","fips":"22125","cases":32,"deaths":0},{"county":"St. Mary","state":"Louisiana","stateCode":"LA","fips":"22101","cases":81,"deaths":0},{"county":"Assumption","state":"Louisiana","stateCode":"LA","fips":"22007","cases":89,"deaths":0}]}')}}]);
//# sourceMappingURL=38.214949d9.chunk.js.map