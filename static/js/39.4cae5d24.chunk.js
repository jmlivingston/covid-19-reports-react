(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[39],{187:function(t,a,e){"use strict";e.r(a);var s=e(87),o=e(0),c=e.n(o),i=e(88),n=e(59),d=e(60);a.default=function(){return c.a.createElement(d.a,Object.assign({},i,{mapData:s,reportService:n.a}))}},57:function(t,a,e){"use strict";var s=e(68),o=e(65),c=e.n(o),i=e(61),n=e.n(i),d=e(63),r=e.n(d),h=e(64),M=e.n(h),p=e(62),l=e.n(p),u=e(66),g=e.n(u),f=e(0),y=e.n(f),C=e(18),I=(e(58),Object(f.lazy)((function(){return e.e(1).then(e.t.bind(null,67,7))})));l()(n.a),r()(n.a),M()(n.a),g()(n.a);function m(t){var a=t.baseColor,e=t.borderLines,o=t.colorKey,i=t.colorMaxValue,d=t.colorMinValue,r=t.colorValueInterval,h=t.data,M=t.drilldown,p=t.hoverColor,l=t.mapData,u=t.separatorLines,g=t.seriesJoinBy,m=t.stateBorderColor,b=t.title,w=t.tooltipFormat,v=t.tooltipHeader,D=t.tooltipSuffix,x=t.tooltipTitle,k=c()(a),O=u?{color:"#DDDDDD",data:u,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:M},fontFamily:"Lato"},colorAxis:{max:i,min:d,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],")")]]),tickInterval:r},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"}},legend:{backgroundColor:n.a.defaultOptions&&n.a.defaultOptions.legend&&n.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:h,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:g,mapData:l,name:x,shadow:!1,states:{hover:{color:p}},tooltip:{pointFormat:w,headerFormat:v,valueSuffix:D}},{color:m,data:e,shadow:!1,type:"mapline"},O],title:{text:b}};return i&&h&&l&&g?y.a.createElement(f.Suspense,{fallback:y.a.createElement(C.a,null)},y.a.createElement("div",{className:"highcharts-wrapper"},y.a.createElement(I,{constructorType:"mapChart",highcharts:n.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}m.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=m},58:function(t,a,e){},59:function(t,a,e){"use strict";var s={getTitle:function(t){var a=t.name,e=t.cases,s=t.deaths,o=t.lastUpdated,c=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(c.charAt(0).toUpperCase()+c.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(function(t){var a="";switch(t.state){case"New York":a="NYC split between boroughs.";break;case"Missouri":a="KC split between counties."}return a}({name:a}),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}};a.a=s},60:function(t,a,e){"use strict";var s=e(9),o=e(0),c=e.n(o),i=e(11),n=e(57);a.a=function(t){var a=t.data,e=t.mapData,d=t.reportService,r=t.summary,h=Object(o.useContext)(i.a).reportType;return c.a.createElement(n.a,{colorKey:h.category,colorMaxValue:r["".concat(h.category,"Max")],colorMinValue:0,colorValueInterval:Math.round(r["".concat(h.category,"Max")]/5),data:a,mapData:e,seriesJoinBy:"fips",title:d.getTitle(Object(s.a)({},r,{reportType:h.category})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />"})}},88:function(t){t.exports=JSON.parse('{"summary":{"name":"Michigan","cases":20222,"casesMax":9626,"deaths":959,"deathsMax":446,"lastUpdated":"Fri, 10 Apr 2020 00:38:18 GMT"},"data":[{"county":"Wayne","state":"Michigan","stateCode":"MI","fips":"26163","cases":9626,"deaths":446},{"county":"Oakland","state":"Michigan","stateCode":"MI","fips":"26125","cases":4007,"deaths":234},{"county":"Macomb","state":"Michigan","stateCode":"MI","fips":"26099","cases":2626,"deaths":141},{"county":"Genesee","state":"Michigan","stateCode":"MI","fips":"26049","cases":713,"deaths":39},{"county":"Washtenaw","state":"Michigan","stateCode":"MI","fips":"26161","cases":610,"deaths":13},{"county":"Kent","state":"Michigan","stateCode":"MI","fips":"26081","cases":207,"deaths":9},{"county":"Kalamazoo","state":"Michigan","stateCode":"MI","fips":"26077","cases":67,"deaths":6},{"county":"Saginaw","state":"Michigan","stateCode":"MI","fips":"26145","cases":186,"deaths":6},{"county":"Lapeer","state":"Michigan","stateCode":"MI","fips":"26087","cases":64,"deaths":5},{"county":"Muskegon","state":"Michigan","stateCode":"MI","fips":"26121","cases":42,"deaths":4},{"county":"Hillsdale","state":"Michigan","stateCode":"MI","fips":"26059","cases":62,"deaths":4},{"county":"Jackson","state":"Michigan","stateCode":"MI","fips":"26075","cases":126,"deaths":4},{"county":"Grand Traverse","state":"Michigan","stateCode":"MI","fips":"26055","cases":15,"deaths":3},{"county":"Eaton","state":"Michigan","stateCode":"MI","fips":"26045","cases":67,"deaths":3},{"county":"St. Clair","state":"Michigan","stateCode":"MI","fips":"26147","cases":140,"deaths":3},{"county":"Unknown","state":"Michigan","stateCode":"MI","fips":"","cases":363,"deaths":3},{"county":"Kalkaska","state":"Michigan","stateCode":"MI","fips":"26079","cases":10,"deaths":2},{"county":"Emmet","state":"Michigan","stateCode":"MI","fips":"26047","cases":15,"deaths":2},{"county":"Marquette","state":"Michigan","stateCode":"MI","fips":"26103","cases":18,"deaths":2},{"county":"Isabella","state":"Michigan","stateCode":"MI","fips":"26073","cases":22,"deaths":2},{"county":"Sanilac","state":"Michigan","stateCode":"MI","fips":"26151","cases":22,"deaths":2},{"county":"Tuscola","state":"Michigan","stateCode":"MI","fips":"26157","cases":27,"deaths":2},{"county":"Otsego","state":"Michigan","stateCode":"MI","fips":"26137","cases":29,"deaths":2},{"county":"Berrien","state":"Michigan","stateCode":"MI","fips":"26021","cases":72,"deaths":2},{"county":"Livingston","state":"Michigan","stateCode":"MI","fips":"26093","cases":174,"deaths":2},{"county":"Ingham","state":"Michigan","stateCode":"MI","fips":"26065","cases":205,"deaths":2},{"county":"Missaukee","state":"Michigan","stateCode":"MI","fips":"26113","cases":1,"deaths":1},{"county":"Dickinson","state":"Michigan","stateCode":"MI","fips":"26043","cases":2,"deaths":1},{"county":"Gogebic","state":"Michigan","stateCode":"MI","fips":"26053","cases":3,"deaths":1},{"county":"Oceana","state":"Michigan","stateCode":"MI","fips":"26127","cases":3,"deaths":1},{"county":"Iosco","state":"Michigan","stateCode":"MI","fips":"26069","cases":4,"deaths":1},{"county":"Crawford","state":"Michigan","stateCode":"MI","fips":"26039","cases":5,"deaths":1},{"county":"Mecosta","state":"Michigan","stateCode":"MI","fips":"26107","cases":8,"deaths":1},{"county":"Cass","state":"Michigan","stateCode":"MI","fips":"26027","cases":9,"deaths":1},{"county":"Cheboygan","state":"Michigan","stateCode":"MI","fips":"26031","cases":10,"deaths":1},{"county":"Ionia","state":"Michigan","stateCode":"MI","fips":"26067","cases":11,"deaths":1},{"county":"Montcalm","state":"Michigan","stateCode":"MI","fips":"26117","cases":18,"deaths":1},{"county":"Van Buren","state":"Michigan","stateCode":"MI","fips":"26159","cases":18,"deaths":1},{"county":"Branch","state":"Michigan","stateCode":"MI","fips":"26023","cases":18,"deaths":1},{"county":"Midland","state":"Michigan","stateCode":"MI","fips":"26111","cases":24,"deaths":1},{"county":"Calhoun","state":"Michigan","stateCode":"MI","fips":"26025","cases":51,"deaths":1},{"county":"Clinton","state":"Michigan","stateCode":"MI","fips":"26037","cases":82,"deaths":1},{"county":"Chippewa","state":"Michigan","stateCode":"MI","fips":"26033","cases":1,"deaths":0},{"county":"Luce","state":"Michigan","stateCode":"MI","fips":"26095","cases":1,"deaths":0},{"county":"Houghton","state":"Michigan","stateCode":"MI","fips":"26061","cases":1,"deaths":0},{"county":"Schoolcraft","state":"Michigan","stateCode":"MI","fips":"26153","cases":1,"deaths":0},{"county":"Presque Isle","state":"Michigan","stateCode":"MI","fips":"26141","cases":1,"deaths":0},{"county":"Benzie","state":"Michigan","stateCode":"MI","fips":"26019","cases":1,"deaths":0},{"county":"Ontonagon","state":"Michigan","stateCode":"MI","fips":"26131","cases":1,"deaths":0},{"county":"Mason","state":"Michigan","stateCode":"MI","fips":"26105","cases":1,"deaths":0},{"county":"Oscoda","state":"Michigan","stateCode":"MI","fips":"26135","cases":2,"deaths":0},{"county":"Clare","state":"Michigan","stateCode":"MI","fips":"26035","cases":3,"deaths":0},{"county":"Newaygo","state":"Michigan","stateCode":"MI","fips":"26123","cases":3,"deaths":0},{"county":"Ogemaw","state":"Michigan","stateCode":"MI","fips":"26129","cases":3,"deaths":0},{"county":"Osceola","state":"Michigan","stateCode":"MI","fips":"26133","cases":3,"deaths":0},{"county":"Mackinac","state":"Michigan","stateCode":"MI","fips":"26097","cases":3,"deaths":0},{"county":"Leelanau","state":"Michigan","stateCode":"MI","fips":"26089","cases":4,"deaths":0},{"county":"Gladwin","state":"Michigan","stateCode":"MI","fips":"26051","cases":4,"deaths":0},{"county":"Huron","state":"Michigan","stateCode":"MI","fips":"26063","cases":4,"deaths":0},{"county":"Arenac","state":"Michigan","stateCode":"MI","fips":"26011","cases":4,"deaths":0},{"county":"Gratiot","state":"Michigan","stateCode":"MI","fips":"26057","cases":5,"deaths":0},{"county":"Roscommon","state":"Michigan","stateCode":"MI","fips":"26143","cases":6,"deaths":0},{"county":"Antrim","state":"Michigan","stateCode":"MI","fips":"26009","cases":6,"deaths":0},{"county":"Barry","state":"Michigan","stateCode":"MI","fips":"26015","cases":7,"deaths":0},{"county":"Wexford","state":"Michigan","stateCode":"MI","fips":"26165","cases":7,"deaths":0},{"county":"Charlevoix","state":"Michigan","stateCode":"MI","fips":"26029","cases":8,"deaths":0},{"county":"Delta","state":"Michigan","stateCode":"MI","fips":"26041","cases":8,"deaths":0},{"county":"Manistee","state":"Michigan","stateCode":"MI","fips":"26101","cases":9,"deaths":0},{"county":"St. Joseph","state":"Michigan","stateCode":"MI","fips":"26149","cases":16,"deaths":0},{"county":"Allegan","state":"Michigan","stateCode":"MI","fips":"26005","cases":18,"deaths":0},{"county":"Shiawassee","state":"Michigan","stateCode":"MI","fips":"26155","cases":27,"deaths":0},{"county":"Lenawee","state":"Michigan","stateCode":"MI","fips":"26091","cases":36,"deaths":0},{"county":"Bay","state":"Michigan","stateCode":"MI","fips":"26017","cases":39,"deaths":0},{"county":"Ottawa","state":"Michigan","stateCode":"MI","fips":"26139","cases":55,"deaths":0},{"county":"Monroe","state":"Michigan","stateCode":"MI","fips":"26115","cases":152,"deaths":0}]}')}}]);
//# sourceMappingURL=39.4cae5d24.chunk.js.map