(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[46],{179:function(t,e,a){"use strict";a.r(e);var s=a(91),o=a(0),n=a.n(o),i=a(92),c=a(41);e.default=function(){return n.a.createElement(c.a,{data:i,mapData:s})}},38:function(t,e,a){"use strict";var s=a(49),o=a(43),n=a.n(o),i=a(42),c=a.n(i),d=a(44),r=a.n(d),h=a(45),l=a.n(h),p=a(46),u=a.n(p),O=a(47),f=a.n(O),y=a(0),C=a.n(y),H=a(14),m=(a(39),Object(y.lazy)((function(){return a.e(89).then(a.t.bind(null,48,7))})));u()(c.a),r()(c.a),l()(c.a),f()(c.a),c.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function b(t){var e=t.baseColor,a=t.borderLines,o=t.colorKey,i=t.colorMaxValue,d=t.colorMinValue,r=t.colorValueInterval,h=t.data,l=t.drilldown,p=t.hoverColor,u=t.mapData,O=t.separatorLines,f=t.seriesJoinBy,b=t.stateBorderColor,g=t.title,D=t.tooltipFormat,w=t.tooltipHeader,x=t.tooltipSuffix,v=t.tooltipTitle,k=n()(e),M=O?{color:"#DDDDDD",data:O,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:l},fontFamily:"Lato"},colorAxis:{max:i,min:d,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],")")]]),tickInterval:r},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:h,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:u,name:v,shadow:!1,states:{hover:{color:p}},tooltip:{pointFormat:D,headerFormat:w,valueSuffix:x}},{color:b,data:a,shadow:!1,type:"mapline"},M],title:{text:g}};return i&&h&&u&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(H.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(m,{constructorType:"mapChart",highcharts:c.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=b},39:function(t,e,a){},40:function(t,e,a){"use strict";function s(t){var e=t.name,a=t.cases,s=t.deaths,o=t.lastUpdated,n=t.reportType,i=t.details;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(i?" | (".concat(i,")"):"",'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}a.d(e,"a",(function(){return s}))},41:function(t,e,a){"use strict";var s=a(50),o=a(0),n=a.n(o),i=a(9),c=a(38),d=a(40);e.a=function(t){var e=t.data,a=t.mapData,r=Object(o.useContext)(i.a).reportType,h="";switch(e.summary.name){case"New York":h="NYC split between boroughs.";break;case"Missouri":h="KC split between counties."}return n.a.createElement(c.a,{colorKey:r,colorMaxValue:e.summary["".concat(r,"Max")],colorMinValue:0,colorValueInterval:Math.round(e.summary["".concat(r,"Max")]/5),data:e.data,hasSeparatorLines:!0,mapData:a,seriesJoinBy:"fips",title:Object(d.a)(Object(s.a)({},e.summary,{reportType:r,details:h})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},92:function(t){t.exports=JSON.parse('{"summary":{"name":"Ohio","cases":1666,"casesMax":449,"deaths":30,"deathsMax":5,"lastUpdated":"Tue, 31 Mar 2020 14:33:24 GMT"},"data":[{"county":"Miami","state":"Ohio","stateCode":"OH","fips":"39109","cases":43,"deaths":5},{"county":"Summit","state":"Ohio","stateCode":"OH","fips":"39153","cases":99,"deaths":5},{"county":"Cuyahoga","state":"Ohio","stateCode":"OH","fips":"39035","cases":449,"deaths":4},{"county":"Stark","state":"Ohio","stateCode":"OH","fips":"39151","cases":29,"deaths":2},{"county":"Trumbull","state":"Ohio","stateCode":"OH","fips":"39155","cases":36,"deaths":2},{"county":"Mahoning","state":"Ohio","stateCode":"OH","fips":"39099","cases":84,"deaths":2},{"county":"Lucas","state":"Ohio","stateCode":"OH","fips":"39095","cases":94,"deaths":2},{"county":"Franklin","state":"Ohio","stateCode":"OH","fips":"39049","cases":247,"deaths":2},{"county":"Gallia","state":"Ohio","stateCode":"OH","fips":"39053","cases":1,"deaths":1},{"county":"Erie","state":"Ohio","stateCode":"OH","fips":"39043","cases":5,"deaths":1},{"county":"Columbiana","state":"Ohio","stateCode":"OH","fips":"39029","cases":11,"deaths":1},{"county":"Lake","state":"Ohio","stateCode":"OH","fips":"39085","cases":35,"deaths":1},{"county":"Medina","state":"Ohio","stateCode":"OH","fips":"39103","cases":45,"deaths":1},{"county":"Lorain","state":"Ohio","stateCode":"OH","fips":"39093","cases":74,"deaths":1},{"county":"Highland","state":"Ohio","stateCode":"OH","fips":"39071","cases":1,"deaths":0},{"county":"Fayette","state":"Ohio","stateCode":"OH","fips":"39047","cases":1,"deaths":0},{"county":"Lawrence","state":"Ohio","stateCode":"OH","fips":"39087","cases":1,"deaths":0},{"county":"Unknown","state":"Ohio","stateCode":"OH","fips":"","cases":1,"deaths":0},{"county":"Wyandot","state":"Ohio","stateCode":"OH","fips":"39175","cases":1,"deaths":0},{"county":"Ottawa","state":"Ohio","stateCode":"OH","fips":"39123","cases":1,"deaths":0},{"county":"Pike","state":"Ohio","stateCode":"OH","fips":"39131","cases":1,"deaths":0},{"county":"Van Wert","state":"Ohio","stateCode":"OH","fips":"39161","cases":1,"deaths":0},{"county":"Ashland","state":"Ohio","stateCode":"OH","fips":"39005","cases":2,"deaths":0},{"county":"Champaign","state":"Ohio","stateCode":"OH","fips":"39021","cases":2,"deaths":0},{"county":"Crawford","state":"Ohio","stateCode":"OH","fips":"39033","cases":2,"deaths":0},{"county":"Mercer","state":"Ohio","stateCode":"OH","fips":"39107","cases":2,"deaths":0},{"county":"Seneca","state":"Ohio","stateCode":"OH","fips":"39147","cases":2,"deaths":0},{"county":"Muskingum","state":"Ohio","stateCode":"OH","fips":"39119","cases":2,"deaths":0},{"county":"Fulton","state":"Ohio","stateCode":"OH","fips":"39051","cases":2,"deaths":0},{"county":"Auglaize","state":"Ohio","stateCode":"OH","fips":"39011","cases":2,"deaths":0},{"county":"Darke","state":"Ohio","stateCode":"OH","fips":"39037","cases":3,"deaths":0},{"county":"Huron","state":"Ohio","stateCode":"OH","fips":"39077","cases":3,"deaths":0},{"county":"Union","state":"Ohio","stateCode":"OH","fips":"39159","cases":3,"deaths":0},{"county":"Clinton","state":"Ohio","stateCode":"OH","fips":"39027","cases":3,"deaths":0},{"county":"Greene","state":"Ohio","stateCode":"OH","fips":"39057","cases":3,"deaths":0},{"county":"Hancock","state":"Ohio","stateCode":"OH","fips":"39063","cases":3,"deaths":0},{"county":"Knox","state":"Ohio","stateCode":"OH","fips":"39083","cases":3,"deaths":0},{"county":"Logan","state":"Ohio","stateCode":"OH","fips":"39091","cases":3,"deaths":0},{"county":"Sandusky","state":"Ohio","stateCode":"OH","fips":"39143","cases":3,"deaths":0},{"county":"Washington","state":"Ohio","stateCode":"OH","fips":"39167","cases":3,"deaths":0},{"county":"Athens","state":"Ohio","stateCode":"OH","fips":"39009","cases":3,"deaths":0},{"county":"Shelby","state":"Ohio","stateCode":"OH","fips":"39149","cases":3,"deaths":0},{"county":"Coshocton","state":"Ohio","stateCode":"OH","fips":"39031","cases":4,"deaths":0},{"county":"Carroll","state":"Ohio","stateCode":"OH","fips":"39019","cases":4,"deaths":0},{"county":"Madison","state":"Ohio","stateCode":"OH","fips":"39097","cases":4,"deaths":0},{"county":"Pickaway","state":"Ohio","stateCode":"OH","fips":"39129","cases":4,"deaths":0},{"county":"Wayne","state":"Ohio","stateCode":"OH","fips":"39169","cases":4,"deaths":0},{"county":"Allen","state":"Ohio","stateCode":"OH","fips":"39003","cases":4,"deaths":0},{"county":"Tuscarawas","state":"Ohio","stateCode":"OH","fips":"39157","cases":5,"deaths":0},{"county":"Richland","state":"Ohio","stateCode":"OH","fips":"39139","cases":5,"deaths":0},{"county":"Defiance","state":"Ohio","stateCode":"OH","fips":"39039","cases":5,"deaths":0},{"county":"Jefferson","state":"Ohio","stateCode":"OH","fips":"39081","cases":5,"deaths":0},{"county":"Ashtabula","state":"Ohio","stateCode":"OH","fips":"39007","cases":6,"deaths":0},{"county":"Marion","state":"Ohio","stateCode":"OH","fips":"39101","cases":6,"deaths":0},{"county":"Clark","state":"Ohio","stateCode":"OH","fips":"39023","cases":7,"deaths":0},{"county":"Belmont","state":"Ohio","stateCode":"OH","fips":"39013","cases":8,"deaths":0},{"county":"Clermont","state":"Ohio","stateCode":"OH","fips":"39025","cases":8,"deaths":0},{"county":"Wood","state":"Ohio","stateCode":"OH","fips":"39173","cases":12,"deaths":0},{"county":"Fairfield","state":"Ohio","stateCode":"OH","fips":"39045","cases":14,"deaths":0},{"county":"Geauga","state":"Ohio","stateCode":"OH","fips":"39055","cases":17,"deaths":0},{"county":"Licking","state":"Ohio","stateCode":"OH","fips":"39089","cases":17,"deaths":0},{"county":"Warren","state":"Ohio","stateCode":"OH","fips":"39165","cases":20,"deaths":0},{"county":"Montgomery","state":"Ohio","stateCode":"OH","fips":"39113","cases":25,"deaths":0},{"county":"Butler","state":"Ohio","stateCode":"OH","fips":"39017","cases":27,"deaths":0},{"county":"Portage","state":"Ohio","stateCode":"OH","fips":"39133","cases":27,"deaths":0},{"county":"Delaware","state":"Ohio","stateCode":"OH","fips":"39041","cases":31,"deaths":0},{"county":"Hamilton","state":"Ohio","stateCode":"OH","fips":"39061","cases":85,"deaths":0}]}')}}]);
//# sourceMappingURL=46.4412ae41.chunk.js.map