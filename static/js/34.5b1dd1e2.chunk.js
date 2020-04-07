(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[34],{191:function(t,s,e){"use strict";e.r(s);var a=e(95),o=e(0),i=e.n(o),n=e(96),l=e(59),c=e(60);s.default=function(){return i.a.createElement(c.a,Object.assign({},n,{mapData:a,reportService:l.a}))}},57:function(t,s,e){"use strict";var a=e(68),o=e(65),i=e.n(o),n=e(61),l=e.n(n),c=e(63),d=e.n(c),r=e(64),p=e.n(r),I=e(62),u=e.n(I),h=e(66),f=e.n(h),y=e(0),C=e.n(y),L=e(18),m=(e(58),Object(y.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));u()(l.a),d()(l.a),p()(l.a),f()(l.a);function g(t){var s=t.baseColor,e=t.borderLines,o=t.colorKey,n=t.colorMaxValue,c=t.colorMinValue,d=t.colorValueInterval,r=t.data,p=t.drilldown,I=t.hoverColor,u=t.mapData,h=t.separatorLines,f=t.seriesJoinBy,g=t.stateBorderColor,b=t.title,D=t.tooltipFormat,v=t.tooltipHeader,M=t.tooltipSuffix,w=t.tooltipTitle,x=i()(s),k=h?{color:"#DDDDDD",data:h,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:n,min:c,stops:[].concat(Object(a.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],")")]]),tickInterval:d},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:l.a.defaultOptions&&l.a.defaultOptions.legend&&l.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:r,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:u,name:w,shadow:!1,states:{hover:{color:I}},tooltip:{pointFormat:D,headerFormat:v,valueSuffix:M}},{color:g,data:e,shadow:!1,type:"mapline"},k],title:{text:b}};return n&&r&&u&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(L.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(m,{constructorType:"mapChart",highcharts:l.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}g.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},s.a=g},58:function(t,s,e){},59:function(t,s,e){"use strict";var a={getTitle:function(t){var s=t.name,e=t.cases,a=t.deaths,o=t.lastUpdated,i=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(s," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(a.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(t){var s="";switch(t.state){case"New York":s="NYC split between boroughs.";break;case"Missouri":s="KC split between counties."}return s}({name:s}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};s.a=a},60:function(t,s,e){"use strict";var a=e(9),o=e(0),i=e.n(o),n=e(11),l=e(57);s.a=function(t){var s=t.data,e=t.mapData,c=t.reportService,d=t.summary,r=Object(o.useContext)(n.a).reportType;return i.a.createElement(l.a,{colorKey:r.category,colorMaxValue:d["".concat(r.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(d["".concat(r.category,"Max")]/5),data:s,mapData:e,seriesJoinBy:"fips",title:c.getTitle(Object(a.a)({},d,{reportType:r.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},96:function(t){t.exports=JSON.parse('{"summary":{"name":"Illinois","cases":12262,"casesMax":8728,"deaths":309,"deathsMax":209,"lastUpdated":"Tue, 07 Apr 2020 16:14:02 GMT"},"data":[{"county":"Cook","state":"Illinois","stateCode":"IL","fips":"17031","cases":8728,"deaths":209},{"county":"DuPage","state":"Illinois","stateCode":"IL","fips":"17043","cases":715,"deaths":22},{"county":"Will","state":"Illinois","stateCode":"IL","fips":"17197","cases":697,"deaths":19},{"county":"Kane","state":"Illinois","stateCode":"IL","fips":"17089","cases":234,"deaths":15},{"county":"Lake","state":"Illinois","stateCode":"IL","fips":"17097","cases":815,"deaths":15},{"county":"Kankakee","state":"Illinois","stateCode":"IL","fips":"17091","cases":90,"deaths":5},{"county":"Christian","state":"Illinois","stateCode":"IL","fips":"17021","cases":22,"deaths":3},{"county":"St. Clair","state":"Illinois","stateCode":"IL","fips":"17163","cases":92,"deaths":3},{"county":"McHenry","state":"Illinois","stateCode":"IL","fips":"17111","cases":144,"deaths":3},{"county":"Sangamon","state":"Illinois","stateCode":"IL","fips":"17167","cases":35,"deaths":2},{"county":"McLean","state":"Illinois","stateCode":"IL","fips":"17113","cases":46,"deaths":2},{"county":"Kendall","state":"Illinois","stateCode":"IL","fips":"17093","cases":55,"deaths":2},{"county":"Carroll","state":"Illinois","stateCode":"IL","fips":"17015","cases":4,"deaths":1},{"county":"Morgan","state":"Illinois","stateCode":"IL","fips":"17137","cases":7,"deaths":1},{"county":"LaSalle","state":"Illinois","stateCode":"IL","fips":"17099","cases":11,"deaths":1},{"county":"Peoria","state":"Illinois","stateCode":"IL","fips":"17143","cases":12,"deaths":1},{"county":"Tazewell","state":"Illinois","stateCode":"IL","fips":"17179","cases":14,"deaths":1},{"county":"Jackson","state":"Illinois","stateCode":"IL","fips":"17077","cases":16,"deaths":1},{"county":"Whiteside","state":"Illinois","stateCode":"IL","fips":"17195","cases":18,"deaths":1},{"county":"DeKalb","state":"Illinois","stateCode":"IL","fips":"17037","cases":22,"deaths":1},{"county":"Winnebago","state":"Illinois","stateCode":"IL","fips":"17201","cases":49,"deaths":1},{"county":"Cumberland","state":"Illinois","stateCode":"IL","fips":"17035","cases":1,"deaths":0},{"county":"Logan","state":"Illinois","stateCode":"IL","fips":"17107","cases":1,"deaths":0},{"county":"Marshall","state":"Illinois","stateCode":"IL","fips":"17123","cases":1,"deaths":0},{"county":"Knox","state":"Illinois","stateCode":"IL","fips":"17095","cases":1,"deaths":0},{"county":"Saline","state":"Illinois","stateCode":"IL","fips":"17165","cases":1,"deaths":0},{"county":"Ford","state":"Illinois","stateCode":"IL","fips":"17053","cases":1,"deaths":0},{"county":"Mason","state":"Illinois","stateCode":"IL","fips":"17125","cases":1,"deaths":0},{"county":"Moultrie","state":"Illinois","stateCode":"IL","fips":"17139","cases":1,"deaths":0},{"county":"Effingham","state":"Illinois","stateCode":"IL","fips":"17049","cases":1,"deaths":0},{"county":"Pike","state":"Illinois","stateCode":"IL","fips":"17149","cases":1,"deaths":0},{"county":"Calhoun","state":"Illinois","stateCode":"IL","fips":"17013","cases":1,"deaths":0},{"county":"Gallatin","state":"Illinois","stateCode":"IL","fips":"17059","cases":1,"deaths":0},{"county":"Jefferson","state":"Illinois","stateCode":"IL","fips":"17081","cases":1,"deaths":0},{"county":"Wabash","state":"Illinois","stateCode":"IL","fips":"17185","cases":1,"deaths":0},{"county":"Washington","state":"Illinois","stateCode":"IL","fips":"17189","cases":2,"deaths":0},{"county":"Franklin","state":"Illinois","stateCode":"IL","fips":"17055","cases":2,"deaths":0},{"county":"Menard","state":"Illinois","stateCode":"IL","fips":"17129","cases":2,"deaths":0},{"county":"Montgomery","state":"Illinois","stateCode":"IL","fips":"17135","cases":2,"deaths":0},{"county":"Clark","state":"Illinois","stateCode":"IL","fips":"17023","cases":2,"deaths":0},{"county":"Massac","state":"Illinois","stateCode":"IL","fips":"17127","cases":2,"deaths":0},{"county":"Mercer","state":"Illinois","stateCode":"IL","fips":"17131","cases":2,"deaths":0},{"county":"Lee","state":"Illinois","stateCode":"IL","fips":"17103","cases":2,"deaths":0},{"county":"Williamson","state":"Illinois","stateCode":"IL","fips":"17199","cases":3,"deaths":0},{"county":"Bureau","state":"Illinois","stateCode":"IL","fips":"17011","cases":3,"deaths":0},{"county":"Fayette","state":"Illinois","stateCode":"IL","fips":"17051","cases":3,"deaths":0},{"county":"Bond","state":"Illinois","stateCode":"IL","fips":"17005","cases":3,"deaths":0},{"county":"Marion","state":"Illinois","stateCode":"IL","fips":"17121","cases":3,"deaths":0},{"county":"Piatt","state":"Illinois","stateCode":"IL","fips":"17147","cases":3,"deaths":0},{"county":"De Witt","state":"Illinois","stateCode":"IL","fips":"17039","cases":3,"deaths":0},{"county":"Jersey","state":"Illinois","stateCode":"IL","fips":"17083","cases":3,"deaths":0},{"county":"Jasper","state":"Illinois","stateCode":"IL","fips":"17079","cases":4,"deaths":0},{"county":"Boone","state":"Illinois","stateCode":"IL","fips":"17007","cases":4,"deaths":0},{"county":"Stephenson","state":"Illinois","stateCode":"IL","fips":"17177","cases":5,"deaths":0},{"county":"Crawford","state":"Illinois","stateCode":"IL","fips":"17033","cases":5,"deaths":0},{"county":"Vermilion","state":"Illinois","stateCode":"IL","fips":"17183","cases":5,"deaths":0},{"county":"Woodford","state":"Illinois","stateCode":"IL","fips":"17203","cases":6,"deaths":0},{"county":"Jo Daviess","state":"Illinois","stateCode":"IL","fips":"17085","cases":6,"deaths":0},{"county":"Iroquois","state":"Illinois","stateCode":"IL","fips":"17075","cases":6,"deaths":0},{"county":"Ogle","state":"Illinois","stateCode":"IL","fips":"17141","cases":7,"deaths":0},{"county":"Macoupin","state":"Illinois","stateCode":"IL","fips":"17117","cases":7,"deaths":0},{"county":"Adams","state":"Illinois","stateCode":"IL","fips":"17001","cases":8,"deaths":0},{"county":"Livingston","state":"Illinois","stateCode":"IL","fips":"17105","cases":9,"deaths":0},{"county":"Grundy","state":"Illinois","stateCode":"IL","fips":"17063","cases":9,"deaths":0},{"county":"Macon","state":"Illinois","stateCode":"IL","fips":"17115","cases":9,"deaths":0},{"county":"Douglas","state":"Illinois","stateCode":"IL","fips":"17041","cases":10,"deaths":0},{"county":"Henry","state":"Illinois","stateCode":"IL","fips":"17073","cases":10,"deaths":0},{"county":"Clinton","state":"Illinois","stateCode":"IL","fips":"17027","cases":11,"deaths":0},{"county":"Monroe","state":"Illinois","stateCode":"IL","fips":"17133","cases":11,"deaths":0},{"county":"Randolph","state":"Illinois","stateCode":"IL","fips":"17157","cases":27,"deaths":0},{"county":"Rock Island","state":"Illinois","stateCode":"IL","fips":"17161","cases":47,"deaths":0},{"county":"Madison","state":"Illinois","stateCode":"IL","fips":"17119","cases":52,"deaths":0},{"county":"Champaign","state":"Illinois","stateCode":"IL","fips":"17019","cases":62,"deaths":0},{"county":"Unknown","state":"Illinois","stateCode":"IL","fips":"","cases":62,"deaths":0}]}')}}]);
//# sourceMappingURL=34.5b1dd1e2.chunk.js.map