(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[55],{162:function(t){t.exports=JSON.parse('{"summary":{"name":"West Virginia","cases":124,"deaths":1,"lastUpdated":"Tue, 31 Mar 2020 01:01:54 GMT"},"data":[{"county":"Jefferson","state":"West Virginia","stateCode":"WV","fips":"54037","cases":5,"deaths":0},{"county":"Mercer","state":"West Virginia","stateCode":"WV","fips":"54055","cases":2,"deaths":0},{"county":"Monongalia","state":"West Virginia","stateCode":"WV","fips":"54061","cases":30,"deaths":0},{"county":"Tucker","state":"West Virginia","stateCode":"WV","fips":"54093","cases":2,"deaths":0},{"county":"Jackson","state":"West Virginia","stateCode":"WV","fips":"54035","cases":8,"deaths":0},{"county":"Kanawha","state":"West Virginia","stateCode":"WV","fips":"54039","cases":19,"deaths":0},{"county":"Marshall","state":"West Virginia","stateCode":"WV","fips":"54051","cases":4,"deaths":0},{"county":"Putnam","state":"West Virginia","stateCode":"WV","fips":"54079","cases":3,"deaths":0},{"county":"Berkeley","state":"West Virginia","stateCode":"WV","fips":"54003","cases":10,"deaths":0},{"county":"Harrison","state":"West Virginia","stateCode":"WV","fips":"54033","cases":7,"deaths":0},{"county":"Preston","state":"West Virginia","stateCode":"WV","fips":"54077","cases":1,"deaths":0},{"county":"Wood","state":"West Virginia","stateCode":"WV","fips":"54107","cases":2,"deaths":0},{"county":"Logan","state":"West Virginia","stateCode":"WV","fips":"54045","cases":1,"deaths":0},{"county":"Marion","state":"West Virginia","stateCode":"WV","fips":"54049","cases":5,"deaths":1},{"county":"Ohio","state":"West Virginia","stateCode":"WV","fips":"54069","cases":7,"deaths":0},{"county":"Raleigh","state":"West Virginia","stateCode":"WV","fips":"54081","cases":4,"deaths":0},{"county":"Mason","state":"West Virginia","stateCode":"WV","fips":"54053","cases":3,"deaths":0},{"county":"Upshur","state":"West Virginia","stateCode":"WV","fips":"54097","cases":1,"deaths":0},{"county":"Greenbrier","state":"West Virginia","stateCode":"WV","fips":"54025","cases":2,"deaths":0},{"county":"Hancock","state":"West Virginia","stateCode":"WV","fips":"54029","cases":3,"deaths":0},{"county":"Pleasants","state":"West Virginia","stateCode":"WV","fips":"54073","cases":1,"deaths":0},{"county":"Cabell","state":"West Virginia","stateCode":"WV","fips":"54011","cases":1,"deaths":0},{"county":"Morgan","state":"West Virginia","stateCode":"WV","fips":"54065","cases":1,"deaths":0},{"county":"Wetzel","state":"West Virginia","stateCode":"WV","fips":"54103","cases":1,"deaths":0},{"county":"Wirt","state":"West Virginia","stateCode":"WV","fips":"54105","cases":1,"deaths":0}]}')},214:function(t,e,a){"use strict";a.r(e);var s=a(161),o=a(0),n=a.n(o),i=a(162),r=a(41);e.default=function(){return n.a.createElement(r.a,{data:i,mapData:s})}},38:function(t,e,a){"use strict";var s=a(49),o=a(43),n=a.n(o),i=a(42),r=a.n(i),c=a(44),l=a.n(c),d=a(45),p=a.n(d),u=a(46),h=a.n(u),f=a(47),V=a.n(f),y=a(0),W=a.n(y),g=a(14),m=(a(39),Object(y.lazy)((function(){return a.e(89).then(a.t.bind(null,48,7))})));h()(r.a),l()(r.a),p()(r.a),V()(r.a),r.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function C(t){var e=t.baseColor,a=t.borderLines,o=t.colorKey,i=t.colorMaxValue,c=t.colorMinValue,l=t.colorValueInterval,d=t.data,p=t.drilldown,u=t.hoverColor,h=t.mapData,f=t.separatorLines,V=t.seriesJoinBy,C=t.stateBorderColor,b=t.title,D=t.tooltipFormat,v=t.tooltipHeader,x=t.tooltipSuffix,w=t.tooltipTitle,M=n()(e),O=f?{color:"#DDDDDD",data:f,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:i,min:c,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:r.a.defaultOptions&&r.a.defaultOptions.legend&&r.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:V,mapData:h,name:w,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:D,headerFormat:v,valueSuffix:x}},{color:C,data:a,shadow:!1,type:"mapline"},O],title:{text:b}};return i&&d&&h&&V?W.a.createElement(y.Suspense,{fallback:W.a.createElement(g.a,null)},W.a.createElement("div",{className:"highcharts-wrapper"},W.a.createElement(m,{constructorType:"mapChart",highcharts:r.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}C.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=C},39:function(t,e,a){},40:function(t,e,a){"use strict";function s(t){var e=t.name,a=t.cases,s=t.deaths,o=t.lastUpdated,n=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}a.d(e,"a",(function(){return s}))},41:function(t,e,a){"use strict";var s=a(50),o=a(0),n=a.n(o),i=a(9),r=a(38),c=a(40);e.a=function(t){var e=t.data,a=t.mapData,l=Object(o.useContext)(i.a).reportType;return n.a.createElement(r.a,{colorKey:l,colorMaxValue:e.summary[l],colorMinValue:0,colorValueInterval:Math.round(e.summary[l]/5),data:e.data,hasSeparatorLines:!0,mapData:a,seriesJoinBy:"fips",title:Object(c.a)(Object(s.a)({},e.summary,{reportType:l})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}<br />",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}}}]);
//# sourceMappingURL=55.6e61885c.chunk.js.map