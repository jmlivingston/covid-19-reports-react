(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[56],{180:function(t){t.exports=JSON.parse('{"summary":{"name":"West Virginia","cases":191,"casesMax":37,"deaths":1,"deathsMax":1,"lastUpdated":"Thu, 02 Apr 2020 22:16:39 GMT"},"data":[{"county":"Marion","state":"West Virginia","stateCode":"WV","fips":"54049","cases":8,"deaths":1},{"county":"Upshur","state":"West Virginia","stateCode":"WV","fips":"54097","cases":1,"deaths":0},{"county":"Pleasants","state":"West Virginia","stateCode":"WV","fips":"54073","cases":1,"deaths":0},{"county":"Cabell","state":"West Virginia","stateCode":"WV","fips":"54011","cases":1,"deaths":0},{"county":"Morgan","state":"West Virginia","stateCode":"WV","fips":"54065","cases":1,"deaths":0},{"county":"Wirt","state":"West Virginia","stateCode":"WV","fips":"54105","cases":1,"deaths":0},{"county":"Randolph","state":"West Virginia","stateCode":"WV","fips":"54083","cases":1,"deaths":0},{"county":"Hardy","state":"West Virginia","stateCode":"WV","fips":"54031","cases":1,"deaths":0},{"county":"Barbour","state":"West Virginia","stateCode":"WV","fips":"54001","cases":1,"deaths":0},{"county":"Mercer","state":"West Virginia","stateCode":"WV","fips":"54055","cases":2,"deaths":0},{"county":"Tucker","state":"West Virginia","stateCode":"WV","fips":"54093","cases":2,"deaths":0},{"county":"Wood","state":"West Virginia","stateCode":"WV","fips":"54107","cases":2,"deaths":0},{"county":"Wetzel","state":"West Virginia","stateCode":"WV","fips":"54103","cases":2,"deaths":0},{"county":"Roane","state":"West Virginia","stateCode":"WV","fips":"54087","cases":2,"deaths":0},{"county":"Preston","state":"West Virginia","stateCode":"WV","fips":"54077","cases":3,"deaths":0},{"county":"Logan","state":"West Virginia","stateCode":"WV","fips":"54045","cases":3,"deaths":0},{"county":"Raleigh","state":"West Virginia","stateCode":"WV","fips":"54081","cases":3,"deaths":0},{"county":"Mason","state":"West Virginia","stateCode":"WV","fips":"54053","cases":3,"deaths":0},{"county":"Greenbrier","state":"West Virginia","stateCode":"WV","fips":"54025","cases":3,"deaths":0},{"county":"Marshall","state":"West Virginia","stateCode":"WV","fips":"54051","cases":4,"deaths":0},{"county":"Putnam","state":"West Virginia","stateCode":"WV","fips":"54079","cases":5,"deaths":0},{"county":"Hancock","state":"West Virginia","stateCode":"WV","fips":"54029","cases":6,"deaths":0},{"county":"Jefferson","state":"West Virginia","stateCode":"WV","fips":"54037","cases":9,"deaths":0},{"county":"Jackson","state":"West Virginia","stateCode":"WV","fips":"54035","cases":11,"deaths":0},{"county":"Ohio","state":"West Virginia","stateCode":"WV","fips":"54069","cases":11,"deaths":0},{"county":"Harrison","state":"West Virginia","stateCode":"WV","fips":"54033","cases":14,"deaths":0},{"county":"Berkeley","state":"West Virginia","stateCode":"WV","fips":"54003","cases":21,"deaths":0},{"county":"Monongalia","state":"West Virginia","stateCode":"WV","fips":"54061","cases":32,"deaths":0},{"county":"Kanawha","state":"West Virginia","stateCode":"WV","fips":"54039","cases":37,"deaths":0}]}')},233:function(t,e,a){"use strict";a.r(e);var s=a(179),o=a(0),n=a.n(o),i=a(180),r=a(59),c=a(60);e.default=function(){return n.a.createElement(c.a,Object.assign({},i,{mapData:s,reportService:r.a}))}},57:function(t,e,a){"use strict";var s=a(68),o=a(65),n=a.n(o),i=a(61),r=a.n(i),c=a(63),l=a.n(c),d=a(64),p=a.n(d),u=a(62),h=a.n(u),V=a(66),f=a.n(V),g=a(0),W=a.n(g),y=a(18),C=(a(58),Object(g.lazy)((function(){return a.e(1).then(a.t.bind(null,67,7))})));h()(r.a),l()(r.a),p()(r.a),f()(r.a);function m(t){var e=t.baseColor,a=t.borderLines,o=t.colorKey,i=t.colorMaxValue,c=t.colorMinValue,l=t.colorValueInterval,d=t.data,p=t.drilldown,u=t.hoverColor,h=t.mapData,V=t.separatorLines,f=t.seriesJoinBy,m=t.stateBorderColor,b=t.title,v=t.tooltipFormat,D=t.tooltipHeader,x=t.tooltipSuffix,w=t.tooltipTitle,M=n()(e),k=V?{color:"#DDDDDD",data:V,name:"Separator",shadow:!1,type:"mapline"}:{},T={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:i,min:c,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:r.a.defaultOptions&&r.a.defaultOptions.legend&&r.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:h,name:w,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:x}},{color:m,data:a,shadow:!1,type:"mapline"},k],title:{text:b}};return i&&d&&h&&f?W.a.createElement(g.Suspense,{fallback:W.a.createElement(y.a,null)},W.a.createElement("div",{className:"highcharts-wrapper"},W.a.createElement(C,{constructorType:"mapChart",highcharts:r.a,options:T}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}m.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=m},58:function(t,e,a){},59:function(t,e,a){"use strict";var s={getTitle:function(t){var e=t.name,a=t.cases,s=t.deaths,o=t.lastUpdated,n=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(function(t){var e="";switch(t.state){case"New York":e="NYC split between boroughs.";break;case"Missouri":e="KC split between counties."}return e}({name:e}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};e.a=s},60:function(t,e,a){"use strict";var s=a(9),o=a(0),n=a.n(o),i=a(11),r=a(57);e.a=function(t){var e=t.data,a=t.mapData,c=t.reportService,l=t.summary,d=Object(o.useContext)(i.a).reportType;return n.a.createElement(r.a,{colorKey:d.category,colorMaxValue:l["".concat(d.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(d.category,"Max")]/5),data:e,mapData:a,seriesJoinBy:"fips",title:c.getTitle(Object(s.a)({},l,{reportType:d.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=56.729e165c.chunk.js.map