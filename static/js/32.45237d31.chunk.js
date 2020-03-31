(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[32],{130:function(t){t.exports=JSON.parse('{"summary":{"name":"Idaho","cases":416,"casesMax":151,"deaths":7,"deathsMax":3,"lastUpdated":"Tue, 31 Mar 2020 15:35:32 GMT"},"data":[{"county":"Ada","state":"Idaho","stateCode":"ID","fips":"16001","cases":151,"deaths":3},{"county":"Blaine","state":"Idaho","stateCode":"ID","fips":"16013","cases":148,"deaths":2},{"county":"Nez Perce","state":"Idaho","stateCode":"ID","fips":"16069","cases":7,"deaths":1},{"county":"Canyon","state":"Idaho","stateCode":"ID","fips":"16027","cases":48,"deaths":1},{"county":"Bingham","state":"Idaho","stateCode":"ID","fips":"16011","cases":1,"deaths":0},{"county":"Cassia","state":"Idaho","stateCode":"ID","fips":"16031","cases":1,"deaths":0},{"county":"Fremont","state":"Idaho","stateCode":"ID","fips":"16043","cases":1,"deaths":0},{"county":"Idaho","state":"Idaho","stateCode":"ID","fips":"16049","cases":1,"deaths":0},{"county":"Payette","state":"Idaho","stateCode":"ID","fips":"16075","cases":1,"deaths":0},{"county":"Custer","state":"Idaho","stateCode":"ID","fips":"16037","cases":1,"deaths":0},{"county":"Unknown","state":"Idaho","stateCode":"ID","fips":"","cases":1,"deaths":0},{"county":"Lincoln","state":"Idaho","stateCode":"ID","fips":"16063","cases":1,"deaths":0},{"county":"Owyhee","state":"Idaho","stateCode":"ID","fips":"16073","cases":1,"deaths":0},{"county":"Bonner","state":"Idaho","stateCode":"ID","fips":"16017","cases":1,"deaths":0},{"county":"Elmore","state":"Idaho","stateCode":"ID","fips":"16039","cases":1,"deaths":0},{"county":"Jerome","state":"Idaho","stateCode":"ID","fips":"16053","cases":1,"deaths":0},{"county":"Minidoka","state":"Idaho","stateCode":"ID","fips":"16067","cases":1,"deaths":0},{"county":"Teton","state":"Idaho","stateCode":"ID","fips":"16081","cases":2,"deaths":0},{"county":"Madison","state":"Idaho","stateCode":"ID","fips":"16065","cases":2,"deaths":0},{"county":"Valley","state":"Idaho","stateCode":"ID","fips":"16085","cases":2,"deaths":0},{"county":"Jefferson","state":"Idaho","stateCode":"ID","fips":"16051","cases":2,"deaths":0},{"county":"Bonneville","state":"Idaho","stateCode":"ID","fips":"16019","cases":2,"deaths":0},{"county":"Bannock","state":"Idaho","stateCode":"ID","fips":"16005","cases":3,"deaths":0},{"county":"Gem","state":"Idaho","stateCode":"ID","fips":"16045","cases":3,"deaths":0},{"county":"Twin Falls","state":"Idaho","stateCode":"ID","fips":"16083","cases":5,"deaths":0},{"county":"Kootenai","state":"Idaho","stateCode":"ID","fips":"16055","cases":28,"deaths":0}]}')},198:function(t,a,e){"use strict";e.r(a);var o=e(129),s=e(0),n=e.n(s),c=e(130),r=e(41);a.default=function(){return n.a.createElement(r.a,{data:c,mapData:o})}},38:function(t,a,e){"use strict";var o=e(49),s=e(43),n=e.n(s),c=e(42),r=e.n(c),i=e(44),d=e.n(i),l=e(45),p=e.n(l),u=e(46),h=e.n(u),f=e(47),y=e.n(f),I=e(0),m=e.n(I),D=e(14),C=(e(39),Object(I.lazy)((function(){return e.e(89).then(e.t.bind(null,48,7))})));h()(r.a),d()(r.a),p()(r.a),y()(r.a),r.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function b(t){var a=t.baseColor,e=t.borderLines,s=t.colorKey,c=t.colorMaxValue,i=t.colorMinValue,d=t.colorValueInterval,l=t.data,p=t.drilldown,u=t.hoverColor,h=t.mapData,f=t.separatorLines,y=t.seriesJoinBy,b=t.stateBorderColor,v=t.title,x=t.tooltipFormat,g=t.tooltipHeader,w=t.tooltipSuffix,F=t.tooltipTitle,M=n()(a),T=f?{color:"#DDDDDD",data:f,name:"Separator",shadow:!1,type:"mapline"}:{},k={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:c,min:i,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(M.color[0],", ").concat(M.color[1],", ").concat(M.color[2],")")]]),tickInterval:d},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:r.a.defaultOptions&&r.a.defaultOptions.legend&&r.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:s},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:l,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:y,mapData:h,name:F,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:x,headerFormat:g,valueSuffix:w}},{color:b,data:e,shadow:!1,type:"mapline"},T],title:{text:v}};return c&&l&&h&&y?m.a.createElement(I.Suspense,{fallback:m.a.createElement(D.a,null)},m.a.createElement("div",{className:"highcharts-wrapper"},m.a.createElement(C,{constructorType:"mapChart",highcharts:r.a,options:k}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=b},39:function(t,a,e){},40:function(t,a,e){"use strict";function o(t){var a=t.name,e=t.cases,o=t.deaths,s=t.lastUpdated,n=t.reportType,c=t.details;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(c?" | (".concat(c,")"):"",'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(s).toLocaleDateString()," ").concat(new Date(s).toLocaleTimeString(),"</span>")}e.d(a,"a",(function(){return o}))},41:function(t,a,e){"use strict";var o=e(50),s=e(0),n=e.n(s),c=e(9),r=e(38),i=e(40);a.a=function(t){var a=t.data,e=t.mapData,d=Object(s.useContext)(c.a).reportType,l="";switch(a.summary.name){case"New York":l="NYC split between boroughs.";break;case"Missouri":l="KC split between counties."}return n.a.createElement(r.a,{colorKey:d,colorMaxValue:a.summary["".concat(d,"Max")],colorMinValue:0,colorValueInterval:Math.round(a.summary["".concat(d,"Max")]/5),data:a.data,hasSeparatorLines:!0,mapData:e,seriesJoinBy:"fips",title:Object(i.a)(Object(o.a)({},a.summary,{reportType:d,details:l})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}}}]);
//# sourceMappingURL=32.45237d31.chunk.js.map