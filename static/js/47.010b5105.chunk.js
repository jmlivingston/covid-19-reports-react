(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[47],{186:function(t,e,a){"use strict";a.r(e);var s=a(97),o=a(0),i=a.n(o),c=a(98),n=a(47),d=a(48);e.default=function(){return i.a.createElement(d.a,Object.assign({},c,{mapData:s,reportService:n.a}))}},45:function(t,e,a){"use strict";var s=a(56),o=a(53),i=a.n(o),c=a(49),n=a.n(c),d=a(51),r=a.n(d),h=a(52),p=a.n(h),l=a(50),O=a.n(l),u=a(54),f=a.n(u),y=a(0),C=a.n(y),H=a(15),m=(a(46),Object(y.lazy)((function(){return a.e(1).then(a.t.bind(null,55,7))})));O()(n.a),r()(n.a),p()(n.a),f()(n.a);function g(t){var e=t.baseColor,a=t.borderLines,o=t.colorKey,c=t.colorMaxValue,d=t.colorMinValue,r=t.colorValueInterval,h=t.data,p=t.drilldown,l=t.hoverColor,O=t.mapData,u=t.separatorLines,f=t.seriesJoinBy,g=t.stateBorderColor,b=t.title,D=t.tooltipFormat,w=t.tooltipHeader,v=t.tooltipSuffix,k=t.tooltipTitle,x=i()(e),M=u?{color:"#DDDDDD",data:u,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:c,min:d,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],")")]]),tickInterval:r},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:n.a.defaultOptions&&n.a.defaultOptions.legend&&n.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:h,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:O,name:k,shadow:!1,states:{hover:{color:l}},tooltip:{pointFormat:D,headerFormat:w,valueSuffix:v}},{color:g,data:a,shadow:!1,type:"mapline"},M],title:{text:b}};return c&&h&&O&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(H.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(m,{constructorType:"mapChart",highcharts:n.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}g.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=g},46:function(t,e,a){},47:function(t,e,a){"use strict";var s={getTitle:function(t){var e=t.name,a=t.cases,s=t.deaths,o=t.lastUpdated,i=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US")).concat(function(t){var e="";switch(t.state){case"New York":e="NYC split between boroughs.";break;case"Missouri":e="KC split between counties."}return e}({name:e}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};e.a=s},48:function(t,e,a){"use strict";var s=a(8),o=a(0),i=a.n(o),c=a(10),n=a(45);e.a=function(t){var e=t.data,a=t.mapData,d=t.reportService,r=t.summary,h=Object(o.useContext)(c.a).reportType;return i.a.createElement(n.a,{colorKey:h.category,colorMaxValue:r["".concat(h.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(r["".concat(h.category,"Max")]/5),data:e,mapData:a,seriesJoinBy:"fips",title:d.getTitle(Object(s.a)({},r,{reportType:h.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},98:function(t){t.exports=JSON.parse('{"summary":{"name":"Ohio","cases":1934,"casesMax":493,"deaths":40,"deathsMax":5,"lastUpdated":"Tue, 31 Mar 2020 19:31:37 GMT"},"data":[{"county":"Miami","state":"Ohio","stateCode":"OH","fips":"39109","cases":46,"deaths":5},{"county":"Summit","state":"Ohio","stateCode":"OH","fips":"39153","cases":118,"deaths":5},{"county":"Mahoning","state":"Ohio","stateCode":"OH","fips":"39099","cases":117,"deaths":4},{"county":"Cuyahoga","state":"Ohio","stateCode":"OH","fips":"39035","cases":493,"deaths":4},{"county":"Lucas","state":"Ohio","stateCode":"OH","fips":"39095","cases":114,"deaths":3},{"county":"Columbiana","state":"Ohio","stateCode":"OH","fips":"39029","cases":11,"deaths":2},{"county":"Trumbull","state":"Ohio","stateCode":"OH","fips":"39155","cases":42,"deaths":2},{"county":"Stark","state":"Ohio","stateCode":"OH","fips":"39151","cases":44,"deaths":2},{"county":"Lorain","state":"Ohio","stateCode":"OH","fips":"39093","cases":78,"deaths":2},{"county":"Franklin","state":"Ohio","stateCode":"OH","fips":"39049","cases":281,"deaths":2},{"county":"Gallia","state":"Ohio","stateCode":"OH","fips":"39053","cases":1,"deaths":1},{"county":"Huron","state":"Ohio","stateCode":"OH","fips":"39077","cases":3,"deaths":1},{"county":"Athens","state":"Ohio","stateCode":"OH","fips":"39009","cases":3,"deaths":1},{"county":"Erie","state":"Ohio","stateCode":"OH","fips":"39043","cases":5,"deaths":1},{"county":"Montgomery","state":"Ohio","stateCode":"OH","fips":"39113","cases":31,"deaths":1},{"county":"Portage","state":"Ohio","stateCode":"OH","fips":"39133","cases":32,"deaths":1},{"county":"Delaware","state":"Ohio","stateCode":"OH","fips":"39041","cases":38,"deaths":1},{"county":"Lake","state":"Ohio","stateCode":"OH","fips":"39085","cases":43,"deaths":1},{"county":"Medina","state":"Ohio","stateCode":"OH","fips":"39103","cases":48,"deaths":1},{"county":"Highland","state":"Ohio","stateCode":"OH","fips":"39071","cases":1,"deaths":0},{"county":"Fayette","state":"Ohio","stateCode":"OH","fips":"39047","cases":1,"deaths":0},{"county":"Lawrence","state":"Ohio","stateCode":"OH","fips":"39087","cases":1,"deaths":0},{"county":"Unknown","state":"Ohio","stateCode":"OH","fips":"","cases":1,"deaths":0},{"county":"Wyandot","state":"Ohio","stateCode":"OH","fips":"39175","cases":1,"deaths":0},{"county":"Pike","state":"Ohio","stateCode":"OH","fips":"39131","cases":1,"deaths":0},{"county":"Van Wert","state":"Ohio","stateCode":"OH","fips":"39161","cases":1,"deaths":0},{"county":"Brown","state":"Ohio","stateCode":"OH","fips":"39015","cases":1,"deaths":0},{"county":"Holmes","state":"Ohio","stateCode":"OH","fips":"39075","cases":1,"deaths":0},{"county":"Preble","state":"Ohio","stateCode":"OH","fips":"39135","cases":1,"deaths":0},{"county":"Ross","state":"Ohio","stateCode":"OH","fips":"39141","cases":1,"deaths":0},{"county":"Ashland","state":"Ohio","stateCode":"OH","fips":"39005","cases":2,"deaths":0},{"county":"Mercer","state":"Ohio","stateCode":"OH","fips":"39107","cases":2,"deaths":0},{"county":"Muskingum","state":"Ohio","stateCode":"OH","fips":"39119","cases":2,"deaths":0},{"county":"Fulton","state":"Ohio","stateCode":"OH","fips":"39051","cases":2,"deaths":0},{"county":"Auglaize","state":"Ohio","stateCode":"OH","fips":"39011","cases":2,"deaths":0},{"county":"Ottawa","state":"Ohio","stateCode":"OH","fips":"39123","cases":2,"deaths":0},{"county":"Clinton","state":"Ohio","stateCode":"OH","fips":"39027","cases":3,"deaths":0},{"county":"Greene","state":"Ohio","stateCode":"OH","fips":"39057","cases":3,"deaths":0},{"county":"Hancock","state":"Ohio","stateCode":"OH","fips":"39063","cases":3,"deaths":0},{"county":"Knox","state":"Ohio","stateCode":"OH","fips":"39083","cases":3,"deaths":0},{"county":"Logan","state":"Ohio","stateCode":"OH","fips":"39091","cases":3,"deaths":0},{"county":"Sandusky","state":"Ohio","stateCode":"OH","fips":"39143","cases":3,"deaths":0},{"county":"Washington","state":"Ohio","stateCode":"OH","fips":"39167","cases":3,"deaths":0},{"county":"Champaign","state":"Ohio","stateCode":"OH","fips":"39021","cases":3,"deaths":0},{"county":"Seneca","state":"Ohio","stateCode":"OH","fips":"39147","cases":3,"deaths":0},{"county":"Union","state":"Ohio","stateCode":"OH","fips":"39159","cases":4,"deaths":0},{"county":"Shelby","state":"Ohio","stateCode":"OH","fips":"39149","cases":4,"deaths":0},{"county":"Allen","state":"Ohio","stateCode":"OH","fips":"39003","cases":4,"deaths":0},{"county":"Coshocton","state":"Ohio","stateCode":"OH","fips":"39031","cases":5,"deaths":0},{"county":"Richland","state":"Ohio","stateCode":"OH","fips":"39139","cases":5,"deaths":0},{"county":"Defiance","state":"Ohio","stateCode":"OH","fips":"39039","cases":5,"deaths":0},{"county":"Carroll","state":"Ohio","stateCode":"OH","fips":"39019","cases":5,"deaths":0},{"county":"Madison","state":"Ohio","stateCode":"OH","fips":"39097","cases":5,"deaths":0},{"county":"Crawford","state":"Ohio","stateCode":"OH","fips":"39033","cases":5,"deaths":0},{"county":"Pickaway","state":"Ohio","stateCode":"OH","fips":"39129","cases":5,"deaths":0},{"county":"Clark","state":"Ohio","stateCode":"OH","fips":"39023","cases":6,"deaths":0},{"county":"Ashtabula","state":"Ohio","stateCode":"OH","fips":"39007","cases":6,"deaths":0},{"county":"Tuscarawas","state":"Ohio","stateCode":"OH","fips":"39157","cases":7,"deaths":0},{"county":"Marion","state":"Ohio","stateCode":"OH","fips":"39101","cases":7,"deaths":0},{"county":"Wayne","state":"Ohio","stateCode":"OH","fips":"39169","cases":7,"deaths":0},{"county":"Jefferson","state":"Ohio","stateCode":"OH","fips":"39081","cases":7,"deaths":0},{"county":"Belmont","state":"Ohio","stateCode":"OH","fips":"39013","cases":8,"deaths":0},{"county":"Clermont","state":"Ohio","stateCode":"OH","fips":"39025","cases":9,"deaths":0},{"county":"Darke","state":"Ohio","stateCode":"OH","fips":"39037","cases":12,"deaths":0},{"county":"Wood","state":"Ohio","stateCode":"OH","fips":"39173","cases":13,"deaths":0},{"county":"Fairfield","state":"Ohio","stateCode":"OH","fips":"39045","cases":13,"deaths":0},{"county":"Warren","state":"Ohio","stateCode":"OH","fips":"39165","cases":20,"deaths":0},{"county":"Licking","state":"Ohio","stateCode":"OH","fips":"39089","cases":21,"deaths":0},{"county":"Geauga","state":"Ohio","stateCode":"OH","fips":"39055","cases":22,"deaths":0},{"county":"Butler","state":"Ohio","stateCode":"OH","fips":"39017","cases":30,"deaths":0},{"county":"Hamilton","state":"Ohio","stateCode":"OH","fips":"39061","cases":101,"deaths":0}]}')}}]);
//# sourceMappingURL=47.010b5105.chunk.js.map