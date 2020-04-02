(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[9],{145:function(e){e.exports=JSON.parse('{"title":"Delaware","version":"1.1.3","type":"FeatureCollection","copyright":"Copyright (c) 2020 Highsoft AS, Based on data from The United States Census Bureau","copyrightShort":"USA Census Bureau","copyrightUrl":"http://www.census.gov","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:102257"}},"hc-transform":{"default":{"crs":"+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs","scale":0.00454400191313,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":168083.656432,"yoffset":204151.095509}},"features":[{"type":"Feature","id":"US.DE.003","properties":{"hc-group":"admin2","hc-middle-x":0.31,"hc-middle-y":0.6,"hc-key":"us-de-003","hc-a2":"NC","fips":"10003","name":"New Castle"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1207,9465],[1285,9542],[1310,9523],[1317,9518],[1207,9465]]],[[[671,7724],[662,7778],[584,7859],[667,7813],[671,7724]]],[[[516,7177],[494,7270],[561,7184],[554,7183],[516,7177]]],[[[718,6195],[230,5705],[16,5716],[-176,5572],[-837,5615],[-999,8363],[-997,8942],[-398,9621],[175,9841],[265,9851],[861,9776],[1205,9602],[887,9328],[820,9012],[436,8501],[220,8421],[109,8114],[348,7802],[414,7523],[211,6910],[718,6195]]]]}},{"type":"Feature","id":"US.DE.001","properties":{"hc-group":"admin2","hc-middle-x":0.42,"hc-middle-y":0.53,"hc-key":"us-de-001","hc-a2":"KE","fips":"10001","name":"Kent"},"geometry":{"type":"Polygon","coordinates":[[[-623,1963],[-712,3478],[-837,5615],[-176,5572],[16,5716],[230,5705],[718,6195],[1141,5753],[1386,5047],[1321,4637],[1388,3725],[1701,3449],[1870,3166],[1894,2871],[1465,2988],[1287,2637],[837,2544],[615,2163],[403,2006],[-623,1963]]]}},{"type":"Feature","id":"US.DE.005","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.61,"hc-key":"us-de-005","hc-a2":"SU","fips":"10005","name":"Sussex"},"geometry":{"type":"Polygon","coordinates":[[[-623,1963],[403,2006],[615,2163],[837,2544],[1287,2637],[1465,2988],[1894,2871],[1898,2727],[2302,2195],[2781,1685],[3001,1595],[3282,1699],[3397,777],[3407,422],[3273,897],[2949,854],[3069,626],[2863,626],[3199,467],[3060,333],[2639,217],[2629,-94],[3032,88],[3173,-100],[3436,265],[3539,-995],[3455,-996],[3288,-921],[3297,-996],[2384,-999],[1712,-994],[-454,-928],[-623,1963]]]}}]}')},146:function(e){e.exports=JSON.parse('{"summary":{"name":"Delaware","cases":368,"casesMax":226,"deaths":11,"deathsMax":6,"lastUpdated":"Thu, 02 Apr 2020 22:16:39 GMT"},"data":[{"county":"New Castle","state":"Delaware","stateCode":"DE","fips":"10003","cases":226,"deaths":6},{"county":"Sussex","state":"Delaware","stateCode":"DE","fips":"10005","cases":101,"deaths":3},{"county":"Kent","state":"Delaware","stateCode":"DE","fips":"10001","cases":41,"deaths":2}]}')},216:function(e,t,a){"use strict";a.r(t);var o=a(145),r=a(0),n=a.n(r),s=a(146),c=a(59),i=a(60);t.default=function(){return n.a.createElement(i.a,Object.assign({},s,{mapData:o,reportService:c.a}))}},57:function(e,t,a){"use strict";var o=a(68),r=a(65),n=a.n(r),s=a(61),c=a.n(s),i=a(63),l=a.n(i),p=a(64),d=a.n(p),u=a(62),m=a.n(u),h=a(66),y=a.n(h),f=a(0),g=a.n(f),D=a(18),b=(a(58),Object(f.lazy)((function(){return a.e(1).then(a.t.bind(null,67,7))})));m()(c.a),l()(c.a),d()(c.a),y()(c.a);function w(e){var t=e.baseColor,a=e.borderLines,r=e.colorKey,s=e.colorMaxValue,i=e.colorMinValue,l=e.colorValueInterval,p=e.data,d=e.drilldown,u=e.hoverColor,m=e.mapData,h=e.separatorLines,y=e.seriesJoinBy,w=e.stateBorderColor,x=e.title,v=e.tooltipFormat,S=e.tooltipHeader,C=e.tooltipSuffix,F=e.tooltipTitle,k=n()(t),T=h?{color:"#DDDDDD",data:h,name:"Separator",shadow:!1,type:"mapline"}:{},E={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:d},fontFamily:"Lato"},colorAxis:{max:s,min:i,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(e){return[e,"rgba(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],", ").concat(e,")")]}))),[[1,"rgb(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:r},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:p,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:y,mapData:m,name:F,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:v,headerFormat:S,valueSuffix:C}},{color:w,data:a,shadow:!1,type:"mapline"},T],title:{text:x}};return s&&p&&m&&y?g.a.createElement(f.Suspense,{fallback:g.a.createElement(D.a,null)},g.a.createElement("div",{className:"highcharts-wrapper"},g.a.createElement(b,{constructorType:"mapChart",highcharts:c.a,options:E}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}w.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=w},58:function(e,t,a){},59:function(e,t,a){"use strict";var o={getTitle:function(e){var t=e.name,a=e.cases,o=e.deaths,r=e.lastUpdated,n=e.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(function(e){var t="";switch(e.state){case"New York":t="NYC split between boroughs.";break;case"Missouri":t="KC split between counties."}return t}({name:t}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(r).toLocaleDateString()," ").concat(new Date(r).toLocaleTimeString(),"</span>")}};t.a=o},60:function(e,t,a){"use strict";var o=a(9),r=a(0),n=a.n(r),s=a(11),c=a(57);t.a=function(e){var t=e.data,a=e.mapData,i=e.reportService,l=e.summary,p=Object(r.useContext)(s.a).reportType;return n.a.createElement(c.a,{colorKey:p.category,colorMaxValue:l["".concat(p.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(p.category,"Max")]/5),data:t,mapData:a,seriesJoinBy:"fips",title:i.getTitle(Object(o.a)({},l,{reportType:p.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=9.622de937.chunk.js.map