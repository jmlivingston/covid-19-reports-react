(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[45],{158:function(a){a.exports=JSON.parse('{"summary":{"name":"Nebraska","cases":186,"casesMax":104,"deaths":3,"deathsMax":1,"lastUpdated":"Tue, 31 Mar 2020 19:31:37 GMT"},"data":[{"county":"Lincoln","state":"Nebraska","stateCode":"NE","fips":"31111","cases":5,"deaths":1},{"county":"Hall","state":"Nebraska","stateCode":"NE","fips":"31079","cases":6,"deaths":1},{"county":"Douglas","state":"Nebraska","stateCode":"NE","fips":"31055","cases":104,"deaths":1},{"county":"Nemaha","state":"Nebraska","stateCode":"NE","fips":"31127","cases":1,"deaths":0},{"county":"Dawson","state":"Nebraska","stateCode":"NE","fips":"31047","cases":1,"deaths":0},{"county":"Hamilton","state":"Nebraska","stateCode":"NE","fips":"31081","cases":1,"deaths":0},{"county":"Kearney","state":"Nebraska","stateCode":"NE","fips":"31099","cases":1,"deaths":0},{"county":"Gosper","state":"Nebraska","stateCode":"NE","fips":"31073","cases":1,"deaths":0},{"county":"Platte","state":"Nebraska","stateCode":"NE","fips":"31141","cases":1,"deaths":0},{"county":"Scotts Bluff","state":"Nebraska","stateCode":"NE","fips":"31157","cases":1,"deaths":0},{"county":"Antelope","state":"Nebraska","stateCode":"NE","fips":"31003","cases":1,"deaths":0},{"county":"York","state":"Nebraska","stateCode":"NE","fips":"31185","cases":1,"deaths":0},{"county":"Cass","state":"Nebraska","stateCode":"NE","fips":"31025","cases":2,"deaths":0},{"county":"Knox","state":"Nebraska","stateCode":"NE","fips":"31107","cases":2,"deaths":0},{"county":"Madison","state":"Nebraska","stateCode":"NE","fips":"31119","cases":2,"deaths":0},{"county":"Saunders","state":"Nebraska","stateCode":"NE","fips":"31155","cases":2,"deaths":0},{"county":"Unknown","state":"Nebraska","stateCode":"NE","fips":"","cases":2,"deaths":0},{"county":"Adams","state":"Nebraska","stateCode":"NE","fips":"31001","cases":3,"deaths":0},{"county":"Dodge","state":"Nebraska","stateCode":"NE","fips":"31053","cases":3,"deaths":0},{"county":"Buffalo","state":"Nebraska","stateCode":"NE","fips":"31019","cases":6,"deaths":0},{"county":"Lancaster","state":"Nebraska","stateCode":"NE","fips":"31109","cases":8,"deaths":0},{"county":"Sarpy","state":"Nebraska","stateCode":"NE","fips":"31153","cases":13,"deaths":0},{"county":"Washington","state":"Nebraska","stateCode":"NE","fips":"31177","cases":19,"deaths":0}]}')},216:function(a,e,t){"use strict";t.r(e);var s=t(157),o=t(0),n=t.n(o),r=t(158),c=t(47),i=t(48);e.default=function(){return n.a.createElement(i.a,Object.assign({},r,{mapData:s,reportService:c.a}))}},45:function(a,e,t){"use strict";var s=t(56),o=t(53),n=t.n(o),r=t(49),c=t.n(r),i=t(51),l=t.n(i),p=t(52),d=t.n(p),u=t(50),h=t.n(u),f=t(54),b=t.n(f),y=t(0),N=t.n(y),m=t(15),C=(t(46),Object(y.lazy)((function(){return t.e(1).then(t.t.bind(null,55,7))})));h()(c.a),l()(c.a),d()(c.a),b()(c.a);function k(a){var e=a.baseColor,t=a.borderLines,o=a.colorKey,r=a.colorMaxValue,i=a.colorMinValue,l=a.colorValueInterval,p=a.data,d=a.drilldown,u=a.hoverColor,h=a.mapData,f=a.separatorLines,b=a.seriesJoinBy,k=a.stateBorderColor,g=a.title,D=a.tooltipFormat,E=a.tooltipHeader,v=a.tooltipSuffix,x=a.tooltipTitle,w=n()(e),S=f?{color:"#DDDDDD",data:f,name:"Separator",shadow:!1,type:"mapline"}:{},M={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:d},fontFamily:"Lato"},colorAxis:{max:r,min:i,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(w.color[0],", ").concat(w.color[1],", ").concat(w.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(w.color[0],", ").concat(w.color[1],", ").concat(w.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:p,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:b,mapData:h,name:x,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:D,headerFormat:E,valueSuffix:v}},{color:k,data:t,shadow:!1,type:"mapline"},S],title:{text:g}};return r&&p&&h&&b?N.a.createElement(y.Suspense,{fallback:N.a.createElement(m.a,null)},N.a.createElement("div",{className:"highcharts-wrapper"},N.a.createElement(C,{constructorType:"mapChart",highcharts:c.a,options:M}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}k.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=k},46:function(a,e,t){},47:function(a,e,t){"use strict";var s={getTitle:function(a){var e=a.name,t=a.cases,s=a.deaths,o=a.lastUpdated,n=a.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(t.toLocaleString("en-US")).concat(function(a){var e="";switch(a.state){case"New York":e="NYC split between boroughs.";break;case"Missouri":e="KC split between counties."}return e}({name:e}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};e.a=s},48:function(a,e,t){"use strict";var s=t(8),o=t(0),n=t.n(o),r=t(10),c=t(45);e.a=function(a){var e=a.data,t=a.mapData,i=a.reportService,l=a.summary,p=Object(o.useContext)(r.a).reportType;return n.a.createElement(c.a,{colorKey:p.category,colorMaxValue:l["".concat(p.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(p.category,"Max")]/5),data:e,mapData:t,seriesJoinBy:"fips",title:i.getTitle(Object(s.a)({},l,{reportType:p.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=45.49a485f4.chunk.js.map