(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[54],{189:function(t,a,e){"use strict";e.r(a);var s=e(91),o=e(0),n=e.n(o),c=e(92),i=e(59),r=e(60);a.default=function(){return n.a.createElement(r.a,Object.assign({},c,{mapData:s,reportService:i.a}))}},57:function(t,a,e){"use strict";var s=e(68),o=e(65),n=e.n(o),c=e(61),i=e.n(c),r=e(63),l=e.n(r),d=e(64),p=e.n(d),h=e(62),u=e.n(h),W=e(66),f=e.n(W),g=e(0),y=e.n(g),C=e(18),m=(e(58),Object(g.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));u()(i.a),l()(i.a),p()(i.a),f()(i.a);function A(t){var a=t.baseColor,e=t.borderLines,o=t.colorKey,c=t.colorMaxValue,r=t.colorMinValue,l=t.colorValueInterval,d=t.data,p=t.drilldown,h=t.hoverColor,u=t.mapData,W=t.separatorLines,f=t.seriesJoinBy,A=t.stateBorderColor,b=t.title,v=t.tooltipFormat,D=t.tooltipHeader,w=t.tooltipSuffix,x=t.tooltipTitle,S=n()(a),k=W?{color:"#DDDDDD",data:W,name:"Separator",shadow:!1,type:"mapline"}:{},T={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:c,min:r,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:i.a.defaultOptions&&i.a.defaultOptions.legend&&i.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:d,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:u,name:x,shadow:!1,states:{hover:{color:h}},tooltip:{pointFormat:v,headerFormat:D,valueSuffix:w}},{color:A,data:e,shadow:!1,type:"mapline"},k],title:{text:b}};return c&&d&&u&&f?y.a.createElement(g.Suspense,{fallback:y.a.createElement(C.a,null)},y.a.createElement("div",{className:"highcharts-wrapper"},y.a.createElement(m,{constructorType:"mapChart",highcharts:i.a,options:T}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}A.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=A},58:function(t,a,e){},59:function(t,a,e){"use strict";var s={getTitle:function(t){var a=t.name,e=t.cases,s=t.deaths,o=t.lastUpdated,n=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(t){var a="";switch(t.state){case"New York":a="NYC split between boroughs.";break;case"Missouri":a="KC split between counties."}return a}({name:a}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};a.a=s},60:function(t,a,e){"use strict";var s=e(9),o=e(0),n=e.n(o),c=e(11),i=e(57);a.a=function(t){var a=t.data,e=t.mapData,r=t.reportService,l=t.summary,d=Object(o.useContext)(c.a).reportType;return n.a.createElement(i.a,{colorKey:d.category,colorMaxValue:l["".concat(d.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(d.category,"Max")]/5),data:a,mapData:e,seriesJoinBy:"fips",title:r.getTitle(Object(s.a)({},l,{reportType:d.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},92:function(t){t.exports=JSON.parse('{"summary":{"name":"Washington","cases":5588,"casesMax":2498,"deaths":250,"deathsMax":166,"lastUpdated":"Thu, 02 Apr 2020 22:16:39 GMT"},"data":[{"county":"King","state":"Washington","stateCode":"WA","fips":"53033","cases":2498,"deaths":166},{"county":"Snohomish","state":"Washington","stateCode":"WA","fips":"53061","cases":1304,"deaths":39},{"county":"Whatcom","state":"Washington","stateCode":"WA","fips":"53073","cases":144,"deaths":8},{"county":"Pierce","state":"Washington","stateCode":"WA","fips":"53053","cases":423,"deaths":7},{"county":"Benton","state":"Washington","stateCode":"WA","fips":"53005","cases":108,"deaths":6},{"county":"Clark","state":"Washington","stateCode":"WA","fips":"53011","cases":130,"deaths":6},{"county":"Skagit","state":"Washington","stateCode":"WA","fips":"53057","cases":143,"deaths":4},{"county":"Spokane","state":"Washington","stateCode":"WA","fips":"53063","cases":145,"deaths":4},{"county":"Island","state":"Washington","stateCode":"WA","fips":"53029","cases":114,"deaths":3},{"county":"Yakima","state":"Washington","stateCode":"WA","fips":"53077","cases":200,"deaths":3},{"county":"Chelan","state":"Washington","stateCode":"WA","fips":"53007","cases":15,"deaths":2},{"county":"Klickitat","state":"Washington","stateCode":"WA","fips":"53039","cases":9,"deaths":1},{"county":"Kitsap","state":"Washington","stateCode":"WA","fips":"53035","cases":74,"deaths":1},{"county":"Columbia","state":"Washington","stateCode":"WA","fips":"53013","cases":1,"deaths":0},{"county":"Grays Harbor","state":"Washington","stateCode":"WA","fips":"53027","cases":1,"deaths":0},{"county":"Lincoln","state":"Washington","stateCode":"WA","fips":"53043","cases":1,"deaths":0},{"county":"Ferry","state":"Washington","stateCode":"WA","fips":"53019","cases":1,"deaths":0},{"county":"Skamania","state":"Washington","stateCode":"WA","fips":"53059","cases":1,"deaths":0},{"county":"Okanogan","state":"Washington","stateCode":"WA","fips":"53047","cases":3,"deaths":0},{"county":"Stevens","state":"Washington","stateCode":"WA","fips":"53065","cases":4,"deaths":0},{"county":"Douglas","state":"Washington","stateCode":"WA","fips":"53017","cases":5,"deaths":0},{"county":"Mason","state":"Washington","stateCode":"WA","fips":"53045","cases":6,"deaths":0},{"county":"San Juan","state":"Washington","stateCode":"WA","fips":"53055","cases":6,"deaths":0},{"county":"Walla Walla","state":"Washington","stateCode":"WA","fips":"53071","cases":8,"deaths":0},{"county":"Clallam","state":"Washington","stateCode":"WA","fips":"53009","cases":8,"deaths":0},{"county":"Kittitas","state":"Washington","stateCode":"WA","fips":"53037","cases":10,"deaths":0},{"county":"Lewis","state":"Washington","stateCode":"WA","fips":"53041","cases":10,"deaths":0},{"county":"Whitman","state":"Washington","stateCode":"WA","fips":"53075","cases":10,"deaths":0},{"county":"Adams","state":"Washington","stateCode":"WA","fips":"53001","cases":14,"deaths":0},{"county":"Jefferson","state":"Washington","stateCode":"WA","fips":"53031","cases":17,"deaths":0},{"county":"Cowlitz","state":"Washington","stateCode":"WA","fips":"53015","cases":18,"deaths":0},{"county":"Franklin","state":"Washington","stateCode":"WA","fips":"53021","cases":33,"deaths":0},{"county":"Thurston","state":"Washington","stateCode":"WA","fips":"53067","cases":51,"deaths":0},{"county":"Grant","state":"Washington","stateCode":"WA","fips":"53025","cases":73,"deaths":0}]}')}}]);
//# sourceMappingURL=54.3a1e978b.chunk.js.map