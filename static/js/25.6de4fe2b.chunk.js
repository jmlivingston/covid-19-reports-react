(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[25],{174:function(a){a.exports=JSON.parse('{"summary":{"name":"Alaska","cases":172,"casesMax":81,"deaths":5,"deathsMax":2,"lastUpdated":"Sun, 05 Apr 2020 21:23:40 GMT"},"data":[{"county":"Anchorage","state":"Alaska","stateCode":"AK","fips":"02020","cases":81,"deaths":2},{"county":"Petersburg Borough","state":"Alaska","stateCode":"AK","fips":"02195","cases":1,"deaths":1},{"county":"Kenai Peninsula Borough","state":"Alaska","stateCode":"AK","fips":"02122","cases":11,"deaths":1},{"county":"Fairbanks North Star Borough","state":"Alaska","stateCode":"AK","fips":"02090","cases":46,"deaths":1},{"county":"Unknown","state":"Alaska","stateCode":"AK","fips":"","cases":1,"deaths":0},{"county":"Yukon-Koyukuk Census Area","state":"Alaska","stateCode":"AK","fips":"02290","cases":1,"deaths":0},{"county":"Southeast Fairbanks Census Area","state":"Alaska","stateCode":"AK","fips":"02240","cases":1,"deaths":0},{"county":"Matanuska-Susitna Borough","state":"Alaska","stateCode":"AK","fips":"02170","cases":4,"deaths":0},{"county":"Juneau City and Borough","state":"Alaska","stateCode":"AK","fips":"02110","cases":12,"deaths":0},{"county":"Ketchikan Gateway Borough","state":"Alaska","stateCode":"AK","fips":"02130","cases":14,"deaths":0}]}')},230:function(a,t,e){"use strict";e.r(t);var o=e(173),s=e(0),n=e.n(s),r=e(174),c=e(59),l=e(60);t.default=function(){return n.a.createElement(l.a,Object.assign({},r,{mapData:o,reportService:c.a}))}},57:function(a,t,e){"use strict";var o=e(68),s=e(65),n=e.n(s),r=e(61),c=e.n(r),l=e(63),i=e.n(l),p=e(64),u=e.n(p),d=e(62),h=e.n(d),f=e(66),y=e.n(f),m=e(0),b=e.n(m),g=e(18),k=(e(58),Object(m.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));h()(c.a),i()(c.a),u()(c.a),y()(c.a);function A(a){var t=a.baseColor,e=a.borderLines,s=a.colorKey,r=a.colorMaxValue,l=a.colorMinValue,i=a.colorValueInterval,p=a.data,u=a.drilldown,d=a.hoverColor,h=a.mapData,f=a.separatorLines,y=a.seriesJoinBy,A=a.stateBorderColor,C=a.title,v=a.tooltipFormat,D=a.tooltipHeader,w=a.tooltipSuffix,x=a.tooltipTitle,S=n()(t),K=f?{color:"#DDDDDD",data:f,name:"Separator",shadow:!1,type:"mapline"}:{},F={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:u},fontFamily:"Lato"},colorAxis:{max:r,min:l,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],")")]]),tickInterval:i},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:s},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:p,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:y,mapData:h,name:x,shadow:!1,states:{hover:{color:d}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:w}},{color:A,data:e,shadow:!1,type:"mapline"},K],title:{text:C}};return r&&p&&h&&y?b.a.createElement(m.Suspense,{fallback:b.a.createElement(g.a,null)},b.a.createElement("div",{className:"highcharts-wrapper"},b.a.createElement(k,{constructorType:"mapChart",highcharts:c.a,options:F}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}A.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=A},58:function(a,t,e){},59:function(a,t,e){"use strict";var o={getTitle:function(a){var t=a.name,e=a.cases,o=a.deaths,s=a.lastUpdated,n=a.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(a){var t="";switch(a.state){case"New York":t="NYC split between boroughs.";break;case"Missouri":t="KC split between counties."}return t}({name:t}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(s).toLocaleDateString()," ").concat(new Date(s).toLocaleTimeString(),"</span>")}};t.a=o},60:function(a,t,e){"use strict";var o=e(9),s=e(0),n=e.n(s),r=e(11),c=e(57);t.a=function(a){var t=a.data,e=a.mapData,l=a.reportService,i=a.summary,p=Object(s.useContext)(r.a).reportType;return n.a.createElement(c.a,{colorKey:p.category,colorMaxValue:i["".concat(p.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(i["".concat(p.category,"Max")]/5),data:t,mapData:e,seriesJoinBy:"fips",title:l.getTitle(Object(o.a)({},i,{reportType:p.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=25.6de4fe2b.chunk.js.map