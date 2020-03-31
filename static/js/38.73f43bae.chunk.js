(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[38],{167:function(t,a,e){"use strict";e.r(a);var s=e(67),o=e(0),n=e.n(o),i=e(68),c=e(41);a.default=function(){return n.a.createElement(c.a,{data:i,mapData:s})}},38:function(t,a,e){"use strict";var s=e(49),o=e(43),n=e.n(o),i=e(42),c=e.n(i),d=e(44),r=e.n(d),h=e(45),p=e.n(h),l=e(46),M=e.n(l),u=e(47),f=e.n(u),y=e(0),g=e.n(y),C=e(14),I=(e(39),Object(y.lazy)((function(){return e.e(89).then(e.t.bind(null,48,7))})));M()(c.a),r()(c.a),p()(c.a),f()(c.a),c.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function m(t){var a=t.baseColor,e=t.borderLines,o=t.colorKey,i=t.colorMaxValue,d=t.colorMinValue,r=t.colorValueInterval,h=t.data,p=t.drilldown,l=t.hoverColor,M=t.mapData,u=t.separatorLines,f=t.seriesJoinBy,m=t.stateBorderColor,b=t.title,w=t.tooltipFormat,D=t.tooltipHeader,v=t.tooltipSuffix,x=t.tooltipTitle,k=n()(a),O=u?{color:"#DDDDDD",data:u,name:"Separator",shadow:!1,type:"mapline"}:{},S={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:i,min:d,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],")")]]),tickInterval:r},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:h,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:M,name:x,shadow:!1,states:{hover:{color:l}},tooltip:{pointFormat:w,headerFormat:D,valueSuffix:v}},{color:m,data:e,shadow:!1,type:"mapline"},O],title:{text:b}};return i&&h&&M&&f?g.a.createElement(y.Suspense,{fallback:g.a.createElement(C.a,null)},g.a.createElement("div",{className:"highcharts-wrapper"},g.a.createElement(I,{constructorType:"mapChart",highcharts:c.a,options:S}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}m.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},a.a=m},39:function(t,a,e){},40:function(t,a,e){"use strict";function s(t){var a=t.name,e=t.cases,s=t.deaths,o=t.lastUpdated,n=t.reportType,i=t.details;return'<span style="font-size:24px;">COVID-19: '.concat(a," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US")).concat(i?" | (".concat(i,")"):"",'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}e.d(a,"a",(function(){return s}))},41:function(t,a,e){"use strict";var s=e(50),o=e(0),n=e.n(o),i=e(9),c=e(38),d=e(40);a.a=function(t){var a=t.data,e=t.mapData,r=Object(o.useContext)(i.a).reportType,h="";switch(a.summary.name){case"New York":h="NYC split between boroughs.";break;case"Missouri":h="KC split between counties."}return n.a.createElement(c.a,{colorKey:r,colorMaxValue:a.summary["".concat(r,"Max")],colorMinValue:0,colorValueInterval:Math.round(a.summary["".concat(r,"Max")]/5),data:a.data,hasSeparatorLines:!0,mapData:e,seriesJoinBy:"fips",title:Object(d.a)(Object(s.a)({},a.summary,{reportType:r,details:h})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},68:function(t){t.exports=JSON.parse('{"summary":{"name":"Michigan","cases":6511,"casesMax":3195,"deaths":197,"deathsMax":83,"lastUpdated":"Tue, 31 Mar 2020 15:35:32 GMT"},"data":[{"county":"Wayne","state":"Michigan","stateCode":"MI","fips":"26163","cases":3195,"deaths":83},{"county":"Oakland","state":"Michigan","stateCode":"MI","fips":"26125","cases":1391,"deaths":59},{"county":"Macomb","state":"Michigan","stateCode":"MI","fips":"26099","cases":728,"deaths":27},{"county":"Genesee","state":"Michigan","stateCode":"MI","fips":"26049","cases":150,"deaths":7},{"county":"Washtenaw","state":"Michigan","stateCode":"MI","fips":"26161","cases":266,"deaths":6},{"county":"Muskegon","state":"Michigan","stateCode":"MI","fips":"26121","cases":18,"deaths":2},{"county":"Livingston","state":"Michigan","stateCode":"MI","fips":"26093","cases":64,"deaths":2},{"county":"Gogebic","state":"Michigan","stateCode":"MI","fips":"26053","cases":1,"deaths":1},{"county":"Missaukee","state":"Michigan","stateCode":"MI","fips":"26113","cases":1,"deaths":1},{"county":"Mecosta","state":"Michigan","stateCode":"MI","fips":"26107","cases":2,"deaths":1},{"county":"Tuscola","state":"Michigan","stateCode":"MI","fips":"26157","cases":5,"deaths":1},{"county":"Isabella","state":"Michigan","stateCode":"MI","fips":"26073","cases":5,"deaths":1},{"county":"Kalkaska","state":"Michigan","stateCode":"MI","fips":"26079","cases":5,"deaths":1},{"county":"Hillsdale","state":"Michigan","stateCode":"MI","fips":"26059","cases":12,"deaths":1},{"county":"Kalamazoo","state":"Michigan","stateCode":"MI","fips":"26077","cases":24,"deaths":1},{"county":"Berrien","state":"Michigan","stateCode":"MI","fips":"26021","cases":32,"deaths":1},{"county":"Jackson","state":"Michigan","stateCode":"MI","fips":"26075","cases":37,"deaths":1},{"county":"Kent","state":"Michigan","stateCode":"MI","fips":"26081","cases":96,"deaths":1},{"county":"Leelanau","state":"Michigan","stateCode":"MI","fips":"26089","cases":1,"deaths":0},{"county":"Barry","state":"Michigan","stateCode":"MI","fips":"26015","cases":1,"deaths":0},{"county":"Clare","state":"Michigan","stateCode":"MI","fips":"26035","cases":1,"deaths":0},{"county":"Roscommon","state":"Michigan","stateCode":"MI","fips":"26143","cases":1,"deaths":0},{"county":"Chippewa","state":"Michigan","stateCode":"MI","fips":"26033","cases":1,"deaths":0},{"county":"Newaygo","state":"Michigan","stateCode":"MI","fips":"26123","cases":1,"deaths":0},{"county":"Manistee","state":"Michigan","stateCode":"MI","fips":"26101","cases":1,"deaths":0},{"county":"Iosco","state":"Michigan","stateCode":"MI","fips":"26069","cases":1,"deaths":0},{"county":"Luce","state":"Michigan","stateCode":"MI","fips":"26095","cases":1,"deaths":0},{"county":"Crawford","state":"Michigan","stateCode":"MI","fips":"26039","cases":1,"deaths":0},{"county":"Dickinson","state":"Michigan","stateCode":"MI","fips":"26043","cases":1,"deaths":0},{"county":"Cheboygan","state":"Michigan","stateCode":"MI","fips":"26031","cases":1,"deaths":0},{"county":"Delta","state":"Michigan","stateCode":"MI","fips":"26041","cases":1,"deaths":0},{"county":"Houghton","state":"Michigan","stateCode":"MI","fips":"26061","cases":1,"deaths":0},{"county":"Allegan","state":"Michigan","stateCode":"MI","fips":"26005","cases":2,"deaths":0},{"county":"Wexford","state":"Michigan","stateCode":"MI","fips":"26165","cases":2,"deaths":0},{"county":"Oceana","state":"Michigan","stateCode":"MI","fips":"26127","cases":2,"deaths":0},{"county":"Osceola","state":"Michigan","stateCode":"MI","fips":"26133","cases":2,"deaths":0},{"county":"Antrim","state":"Michigan","stateCode":"MI","fips":"26009","cases":2,"deaths":0},{"county":"Gladwin","state":"Michigan","stateCode":"MI","fips":"26051","cases":3,"deaths":0},{"county":"Marquette","state":"Michigan","stateCode":"MI","fips":"26103","cases":3,"deaths":0},{"county":"Gratiot","state":"Michigan","stateCode":"MI","fips":"26057","cases":3,"deaths":0},{"county":"Huron","state":"Michigan","stateCode":"MI","fips":"26063","cases":3,"deaths":0},{"county":"St. Joseph","state":"Michigan","stateCode":"MI","fips":"26149","cases":3,"deaths":0},{"county":"Montcalm","state":"Michigan","stateCode":"MI","fips":"26117","cases":4,"deaths":0},{"county":"Charlevoix","state":"Michigan","stateCode":"MI","fips":"26029","cases":4,"deaths":0},{"county":"Emmet","state":"Michigan","stateCode":"MI","fips":"26047","cases":4,"deaths":0},{"county":"Van Buren","state":"Michigan","stateCode":"MI","fips":"26159","cases":4,"deaths":0},{"county":"Ionia","state":"Michigan","stateCode":"MI","fips":"26067","cases":4,"deaths":0},{"county":"Ogemaw","state":"Michigan","stateCode":"MI","fips":"26129","cases":4,"deaths":0},{"county":"Cass","state":"Michigan","stateCode":"MI","fips":"26027","cases":4,"deaths":0},{"county":"Sanilac","state":"Michigan","stateCode":"MI","fips":"26151","cases":5,"deaths":0},{"county":"Lapeer","state":"Michigan","stateCode":"MI","fips":"26087","cases":6,"deaths":0},{"county":"Grand Traverse","state":"Michigan","stateCode":"MI","fips":"26055","cases":7,"deaths":0},{"county":"Shiawassee","state":"Michigan","stateCode":"MI","fips":"26155","cases":8,"deaths":0},{"county":"Bay","state":"Michigan","stateCode":"MI","fips":"26017","cases":9,"deaths":0},{"county":"Midland","state":"Michigan","stateCode":"MI","fips":"26111","cases":9,"deaths":0},{"county":"Eaton","state":"Michigan","stateCode":"MI","fips":"26045","cases":15,"deaths":0},{"county":"Lenawee","state":"Michigan","stateCode":"MI","fips":"26091","cases":15,"deaths":0},{"county":"Otsego","state":"Michigan","stateCode":"MI","fips":"26137","cases":17,"deaths":0},{"county":"Calhoun","state":"Michigan","stateCode":"MI","fips":"26025","cases":17,"deaths":0},{"county":"Clinton","state":"Michigan","stateCode":"MI","fips":"26037","cases":19,"deaths":0},{"county":"St. Clair","state":"Michigan","stateCode":"MI","fips":"26147","cases":25,"deaths":0},{"county":"Ottawa","state":"Michigan","stateCode":"MI","fips":"26139","cases":28,"deaths":0},{"county":"Saginaw","state":"Michigan","stateCode":"MI","fips":"26145","cases":36,"deaths":0},{"county":"Monroe","state":"Michigan","stateCode":"MI","fips":"26115","cases":45,"deaths":0},{"county":"Ingham","state":"Michigan","stateCode":"MI","fips":"26065","cases":73,"deaths":0},{"county":"Unknown","state":"Michigan","stateCode":"MI","fips":"","cases":78,"deaths":0}]}')}}]);
//# sourceMappingURL=38.73f43bae.chunk.js.map