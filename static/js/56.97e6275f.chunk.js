(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[56],{182:function(t){t.exports=JSON.parse('{"summary":{"name":"West Virginia","cases":483,"casesMax":73,"deaths":4,"deathsMax":1,"lastUpdated":"Fri, 10 Apr 2020 00:38:18 GMT"},"data":[{"county":"Jackson","state":"West Virginia","stateCode":"WV","fips":"54035","cases":19,"deaths":1},{"county":"Harrison","state":"West Virginia","stateCode":"WV","fips":"54033","cases":29,"deaths":1},{"county":"Marion","state":"West Virginia","stateCode":"WV","fips":"54049","cases":29,"deaths":1},{"county":"Monongalia","state":"West Virginia","stateCode":"WV","fips":"54061","cases":73,"deaths":1},{"county":"Pleasants","state":"West Virginia","stateCode":"WV","fips":"54073","cases":1,"deaths":0},{"county":"Wirt","state":"West Virginia","stateCode":"WV","fips":"54105","cases":1,"deaths":0},{"county":"Pendleton","state":"West Virginia","stateCode":"WV","fips":"54071","cases":1,"deaths":0},{"county":"Lewis","state":"West Virginia","stateCode":"WV","fips":"54041","cases":1,"deaths":0},{"county":"Brooke","state":"West Virginia","stateCode":"WV","fips":"54009","cases":1,"deaths":0},{"county":"Fayette","state":"West Virginia","stateCode":"WV","fips":"54019","cases":1,"deaths":0},{"county":"Tyler","state":"West Virginia","stateCode":"WV","fips":"54095","cases":1,"deaths":0},{"county":"Wyoming","state":"West Virginia","stateCode":"WV","fips":"54109","cases":1,"deaths":0},{"county":"Boone","state":"West Virginia","stateCode":"WV","fips":"54005","cases":1,"deaths":0},{"county":"Braxton","state":"West Virginia","stateCode":"WV","fips":"54007","cases":1,"deaths":0},{"county":"Upshur","state":"West Virginia","stateCode":"WV","fips":"54097","cases":2,"deaths":0},{"county":"Roane","state":"West Virginia","stateCode":"WV","fips":"54087","cases":2,"deaths":0},{"county":"Hardy","state":"West Virginia","stateCode":"WV","fips":"54031","cases":2,"deaths":0},{"county":"Nicholas","state":"West Virginia","stateCode":"WV","fips":"54067","cases":2,"deaths":0},{"county":"Hampshire","state":"West Virginia","stateCode":"WV","fips":"54027","cases":2,"deaths":0},{"county":"Tucker","state":"West Virginia","stateCode":"WV","fips":"54093","cases":3,"deaths":0},{"county":"Greenbrier","state":"West Virginia","stateCode":"WV","fips":"54025","cases":3,"deaths":0},{"county":"Wetzel","state":"West Virginia","stateCode":"WV","fips":"54103","cases":3,"deaths":0},{"county":"Randolph","state":"West Virginia","stateCode":"WV","fips":"54083","cases":3,"deaths":0},{"county":"Mineral","state":"West Virginia","stateCode":"WV","fips":"54057","cases":3,"deaths":0},{"county":"McDowell","state":"West Virginia","stateCode":"WV","fips":"54047","cases":3,"deaths":0},{"county":"Morgan","state":"West Virginia","stateCode":"WV","fips":"54065","cases":4,"deaths":0},{"county":"Barbour","state":"West Virginia","stateCode":"WV","fips":"54001","cases":4,"deaths":0},{"county":"Marshall","state":"West Virginia","stateCode":"WV","fips":"54051","cases":5,"deaths":0},{"county":"Raleigh","state":"West Virginia","stateCode":"WV","fips":"54081","cases":5,"deaths":0},{"county":"Taylor","state":"West Virginia","stateCode":"WV","fips":"54091","cases":5,"deaths":0},{"county":"Mercer","state":"West Virginia","stateCode":"WV","fips":"54055","cases":6,"deaths":0},{"county":"Preston","state":"West Virginia","stateCode":"WV","fips":"54077","cases":6,"deaths":0},{"county":"Mason","state":"West Virginia","stateCode":"WV","fips":"54053","cases":6,"deaths":0},{"county":"Hancock","state":"West Virginia","stateCode":"WV","fips":"54029","cases":7,"deaths":0},{"county":"Logan","state":"West Virginia","stateCode":"WV","fips":"54045","cases":8,"deaths":0},{"county":"Putnam","state":"West Virginia","stateCode":"WV","fips":"54079","cases":10,"deaths":0},{"county":"Cabell","state":"West Virginia","stateCode":"WV","fips":"54011","cases":13,"deaths":0},{"county":"Wood","state":"West Virginia","stateCode":"WV","fips":"54107","cases":14,"deaths":0},{"county":"Ohio","state":"West Virginia","stateCode":"WV","fips":"54069","cases":19,"deaths":0},{"county":"Jefferson","state":"West Virginia","stateCode":"WV","fips":"54037","cases":40,"deaths":0},{"county":"Kanawha","state":"West Virginia","stateCode":"WV","fips":"54039","cases":70,"deaths":0},{"county":"Berkeley","state":"West Virginia","stateCode":"WV","fips":"54003","cases":73,"deaths":0}]}')},234:function(t,e,a){"use strict";a.r(e);var s=a(181),o=a(0),i=a.n(o),n=a(182),r=a(59),c=a(60);e.default=function(){return i.a.createElement(c.a,Object.assign({},n,{mapData:s,reportService:r.a}))}},57:function(t,e,a){"use strict";var s=a(68),o=a(65),i=a.n(o),n=a(61),r=a.n(n),c=a(63),d=a.n(c),l=a(64),p=a.n(l),u=a(62),V=a.n(u),W=a(66),h=a.n(W),y=a(0),f=a.n(y),g=a(18),C=(a(58),Object(y.lazy)((function(){return a.e(1).then(a.t.bind(null,67,7))})));V()(r.a),d()(r.a),p()(r.a),h()(r.a);function m(t){var e=t.baseColor,a=t.borderLines,o=t.colorKey,n=t.colorMaxValue,c=t.colorMinValue,d=t.colorValueInterval,l=t.data,p=t.drilldown,u=t.hoverColor,V=t.mapData,W=t.separatorLines,h=t.seriesJoinBy,m=t.stateBorderColor,b=t.title,v=t.tooltipFormat,D=t.tooltipHeader,w=t.tooltipSuffix,x=t.tooltipTitle,M=i()(e),k=W?{color:"#DDDDDD",data:W,name:"Separator",shadow:!1,type:"mapline"}:{},T={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:n,min:c,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],")")]]),tickInterval:d},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:r.a.defaultOptions&&r.a.defaultOptions.legend&&r.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:l,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:h,mapData:V,name:x,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:w}},{color:m,data:a,shadow:!1,type:"mapline"},k],title:{text:b}};return n&&l&&V&&h?f.a.createElement(y.Suspense,{fallback:f.a.createElement(g.a,null)},f.a.createElement("div",{className:"highcharts-wrapper"},f.a.createElement(C,{constructorType:"mapChart",highcharts:r.a,options:T}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}m.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=m},58:function(t,e,a){},59:function(t,e,a){"use strict";var s={getTitle:function(t){var e=t.name,a=t.cases,s=t.deaths,o=t.lastUpdated,i=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(function(t){var e="";switch(t.state){case"New York":e="NYC split between boroughs.";break;case"Missouri":e="KC split between counties."}return e}({name:e}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};e.a=s},60:function(t,e,a){"use strict";var s=a(9),o=a(0),i=a.n(o),n=a(11),r=a(57);e.a=function(t){var e=t.data,a=t.mapData,c=t.reportService,d=t.summary,l=Object(o.useContext)(n.a).reportType;return i.a.createElement(r.a,{colorKey:l.category,colorMaxValue:d["".concat(l.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(d["".concat(l.category,"Max")]/5),data:e,mapData:a,seriesJoinBy:"fips",title:c.getTitle(Object(s.a)({},d,{reportType:l.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=56.97e6275f.chunk.js.map