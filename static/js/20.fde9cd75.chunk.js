(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[20],{141:function(e){e.exports=JSON.parse('{"title":"Rhode Island","version":"1.1.3","type":"FeatureCollection","copyright":"Copyright (c) 2020 Highsoft AS, Based on data from The United States Census Bureau","copyrightShort":"USA Census Bureau","copyrightUrl":"http://www.census.gov","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:2840"}},"hc-transform":{"default":{"crs":"+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","scale":0.00725218756947,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":68889.4403705,"yoffset":103903.143813}},"features":[{"type":"Feature","id":"US.RI.009","properties":{"hc-group":"admin2","hc-middle-x":0.5,"hc-middle-y":0.35,"hc-key":"us-ri-009","hc-a2":"WA","fips":"44009","name":"Washington"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1823,-999],[1425,-931],[1479,-614],[1814,-12],[2079,-835],[1823,-999]]],[[[3295,5304],[3318,4781],[3035,4305],[3205,3859],[3192,2983],[2923,2201],[2520,1704],[2212,1831],[1568,1720],[-999,916],[-901,1135],[-601,1412],[-716,2265],[-300,2340],[-213,4587],[2644,4656],[2849,5099],[3295,5304]]]]}},{"type":"Feature","id":"US.RI.005","properties":{"hc-group":"admin2","hc-middle-x":0.84,"hc-middle-y":0.46,"hc-key":"us-ri-005","hc-a2":"NE","fips":"44005","name":"Newport"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3506,2915],[3480,3704],[3645,4347],[3831,4100],[3705,3154],[3506,2915]]],[[[4231,4384],[4085,4318],[4035,4952],[3840,5017],[3961,5505],[4340,4953],[4231,4384]]],[[[6047,3544],[5448,2988],[5295,3411],[5242,5203],[5355,5563],[5939,5382],[6047,3544]]],[[[4872,5201],[5114,5382],[5004,4699],[4999,3242],[4706,3327],[4346,2955],[3943,2809],[3833,3031],[4293,3318],[4166,3755],[4291,4221],[4509,4396],[4738,5102],[4777,5101],[4872,5201]]]]}},{"type":"Feature","id":"US.RI.007","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.53,"hc-key":"us-ri-007","hc-a2":"PR","fips":"44007","name":"Providence"},"geometry":{"type":"Polygon","coordinates":[[[3849,6448],[3513,7354],[3476,6679],[3082,6617],[2916,6274],[-212,6181],[-279,8759],[-288,9721],[2341,9810],[2514,9830],[3602,9851],[3604,9429],[3602,8283],[4003,8348],[4047,7898],[3925,7408],[4201,6822],[3864,6512],[3849,6448]]]}},{"type":"Feature","id":"US.RI.001","properties":{"hc-group":"admin2","hc-middle-x":0.69,"hc-middle-y":0.52,"hc-key":"us-ri-001","hc-a2":"BR","fips":"44001","name":"Bristol"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3849,6448],[3864,6512],[4201,6822],[4733,6524],[5014,6098],[4742,5263],[4353,5368],[4355,5905],[4547,6389],[4379,6572],[4286,6147],[3849,6448]]],[[[4738,5102],[4766,5133],[4872,5201],[4777,5101],[4738,5102]]]]}},{"type":"Feature","id":"US.RI.003","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.6,"hc-key":"us-ri-003","hc-a2":"KE","fips":"44003","name":"Kent"},"geometry":{"type":"Polygon","coordinates":[[[3476,6679],[3737,6168],[3580,5549],[3260,5803],[2996,5586],[3295,5304],[2849,5099],[2644,4656],[-213,4587],[-202,4896],[-191,5326],[-212,6181],[2916,6274],[3082,6617],[3476,6679]]]}}]}')},142:function(e){e.exports=JSON.parse('{"summary":{"name":"Rhode Island","cases":2976,"casesMax":1300,"deaths":73,"deathsMax":53,"lastUpdated":"Wed, 15 Apr 2020 02:56:15 GMT"},"data":[{"county":"Unknown","state":"Rhode Island","stateCode":"RI","fips":"","cases":1300,"deaths":53},{"county":"Providence","state":"Rhode Island","stateCode":"RI","fips":"44007","cases":1278,"deaths":20},{"county":"Bristol","state":"Rhode Island","stateCode":"RI","fips":"44001","cases":39,"deaths":0},{"county":"Newport","state":"Rhode Island","stateCode":"RI","fips":"44005","cases":74,"deaths":0},{"county":"Washington","state":"Rhode Island","stateCode":"RI","fips":"44009","cases":116,"deaths":0},{"county":"Kent","state":"Rhode Island","stateCode":"RI","fips":"44003","cases":169,"deaths":0}]}')},214:function(e,t,a){"use strict";a.r(t);var o=a(141),r=a(0),n=a.n(r),s=a(142),c=a(59),i=a(60);t.default=function(){return n.a.createElement(i.a,Object.assign({},s,{mapData:o,reportService:c.a}))}},57:function(e,t,a){"use strict";var o=a(68),r=a(65),n=a.n(r),s=a(61),c=a.n(s),i=a(63),l=a.n(i),p=a(64),d=a.n(p),u=a(62),h=a.n(u),m=a(66),y=a.n(m),f=a(0),g=a.n(f),b=a(18),v=(a(58),Object(f.lazy)((function(){return a.e(1).then(a.t.bind(null,67,7))})));h()(c.a),l()(c.a),d()(c.a),y()(c.a);function x(e){var t=e.baseColor,a=e.borderLines,r=e.colorKey,s=e.colorMaxValue,i=e.colorMinValue,l=e.colorValueInterval,p=e.data,d=e.drilldown,u=e.hoverColor,h=e.mapData,m=e.separatorLines,y=e.seriesJoinBy,x=e.stateBorderColor,w=e.title,D=e.tooltipFormat,S=e.tooltipHeader,C=e.tooltipSuffix,I=e.tooltipTitle,R=n()(t),k=m?{color:"#DDDDDD",data:m,name:"Separator",shadow:!1,type:"mapline"}:{},F={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:d},fontFamily:"Lato"},colorAxis:{max:s,min:i,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(e){return[e,"rgba(".concat(R.color[0],", ").concat(R.color[1],", ").concat(R.color[2],", ").concat(e,")")]}))),[[1,"rgb(".concat(R.color[0],", ").concat(R.color[1],", ").concat(R.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:r},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:p,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:y,mapData:h,name:I,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:D,headerFormat:S,valueSuffix:C}},{color:x,data:a,shadow:!1,type:"mapline"},k],title:{text:w}};return s&&p&&h&&y?g.a.createElement(f.Suspense,{fallback:g.a.createElement(b.a,null)},g.a.createElement("div",{className:"highcharts-wrapper"},g.a.createElement(v,{constructorType:"mapChart",highcharts:c.a,options:F}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}x.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=x},58:function(e,t,a){},59:function(e,t,a){"use strict";var o={getTitle:function(e){var t=e.name,a=e.cases,o=e.deaths,r=e.lastUpdated,n=e.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(function(e){var t="";switch(e.state){case"New York":t="NYC split between boroughs.";break;case"Missouri":t="KC split between counties."}return t}({name:t}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(r).toLocaleDateString()," ").concat(new Date(r).toLocaleTimeString(),"</span>")}};t.a=o},60:function(e,t,a){"use strict";var o=a(9),r=a(0),n=a.n(r),s=a(11),c=a(57);t.a=function(e){var t=e.data,a=e.mapData,i=e.reportService,l=e.summary,p=Object(r.useContext)(s.a).reportType;return n.a.createElement(c.a,{colorKey:p.category,colorMaxValue:l["".concat(p.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(l["".concat(p.category,"Max")]/5),data:t,mapData:a,seriesJoinBy:"fips",title:i.getTitle(Object(o.a)({},l,{reportType:p.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}}}]);
//# sourceMappingURL=20.fde9cd75.chunk.js.map