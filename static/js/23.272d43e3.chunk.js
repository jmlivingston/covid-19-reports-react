(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[23],{163:function(a,e,t){"use strict";t.r(e);var s=t(50),o=t(53),i=t(0),n=t.n(i),d=t(5),l=t(9),r=t(38),c=t(59),p=t(40),h=t(60);e.default=function(){var a=Object(d.f)(),e=Object(i.useContext)(l.a).reportType;return n.a.createElement(r.a,{colorKey:e,colorMaxValue:c.summary["".concat(e,"Max")],colorMinValue:0,colorValueInterval:Math.round(c.summary["".concat(e,"Max")]/5),data:c.data,drilldown:function(e){return a.push("/us/".concat(e.point.properties["postal-code"].toLowerCase()))},hasSeparatorLines:!0,mapData:o,separatorLines:h,seriesJoinBy:"fips",title:Object(p.a)(Object(s.a)({},c.summary,{reportType:e})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}<br />Click for Details",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},38:function(a,e,t){"use strict";var s=t(49),o=t(43),i=t.n(o),n=t(42),d=t.n(n),l=t(44),r=t.n(l),c=t(45),p=t.n(c),h=t(46),f=t.n(h),u=t(47),C=t.n(u),w=t(0),S=t.n(w),U=t(14),m=(t(39),Object(w.lazy)((function(){return t.e(89).then(t.t.bind(null,48,7))})));f()(d.a),r()(d.a),p()(d.a),C()(d.a),d.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function M(a){var e=a.baseColor,t=a.borderLines,o=a.colorKey,n=a.colorMaxValue,l=a.colorMinValue,r=a.colorValueInterval,c=a.data,p=a.drilldown,h=a.hoverColor,f=a.mapData,u=a.separatorLines,C=a.seriesJoinBy,M=a.stateBorderColor,y=a.title,g=a.tooltipFormat,D=a.tooltipHeader,b=a.tooltipSuffix,N=a.tooltipTitle,x=i()(e),v=u?{color:"#DDDDDD",data:u,name:"Separator",shadow:!1,type:"mapline"}:{},k={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:n,min:l,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(a){return[a,"rgba(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],", ").concat(a,")")]}))),[[1,"rgb(".concat(x.color[0],", ").concat(x.color[1],", ").concat(x.color[2],")")]]),tickInterval:r},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:d.a.defaultOptions&&d.a.defaultOptions.legend&&d.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:c,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:C,mapData:f,name:N,shadow:!1,states:{hover:{color:h}},tooltip:{pointFormat:g,headerFormat:D,valueSuffix:b}},{color:M,data:t,shadow:!1,type:"mapline"},v],title:{text:y}};return n&&c&&f&&C?S.a.createElement(w.Suspense,{fallback:S.a.createElement(U.a,null)},S.a.createElement("div",{className:"highcharts-wrapper"},S.a.createElement(m,{constructorType:"mapChart",highcharts:d.a,options:k}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}M.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=M},39:function(a,e,t){},40:function(a,e,t){"use strict";function s(a){var e=a.name,t=a.cases,s=a.deaths,o=a.lastUpdated,i=a.reportType,n=a.details;return'<span style="font-size:24px;">COVID-19: '.concat(e," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(t.toLocaleString("en-US")).concat(n?" | (".concat(n,")"):"",'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}t.d(e,"a",(function(){return s}))},59:function(a){a.exports=JSON.parse('{"summary":{"name":"USA","cases":142161,"deaths":2486,"lastUpdated":"Tue, 31 Mar 2020 14:33:24 GMT","casesMax":59568,"deathsMax":965},"data":[{"state":"New York","drilldown":"New York","stateCode":"NY","fips":"US36","cases":59568,"deaths":965},{"state":"Washington","drilldown":"Washington","stateCode":"WA","fips":"US53","cases":4896,"deaths":207},{"state":"New Jersey","drilldown":"New Jersey","stateCode":"NJ","fips":"US34","cases":13386,"deaths":161},{"state":"Louisiana","drilldown":"Louisiana","stateCode":"LA","fips":"US22","cases":3540,"deaths":152},{"state":"Michigan","drilldown":"Michigan","stateCode":"MI","fips":"US26","cases":5486,"deaths":132},{"state":"California","drilldown":"California","stateCode":"CA","fips":"US06","cases":6266,"deaths":130},{"state":"Georgia","drilldown":"Georgia","stateCode":"GA","fips":"US13","cases":2683,"deaths":83},{"state":"Illinois","drilldown":"Illinois","stateCode":"IL","fips":"US17","cases":4613,"deaths":70},{"state":"Florida","drilldown":"Florida","stateCode":"FL","fips":"US12","cases":4942,"deaths":59},{"state":"Massachusetts","drilldown":"Massachusetts","stateCode":"MA","fips":"US25","cases":4955,"deaths":48},{"state":"Colorado","drilldown":"Colorado","stateCode":"CO","fips":"US08","cases":2315,"deaths":47},{"state":"Pennsylvania","drilldown":"Pennsylvania","stateCode":"PA","fips":"US42","cases":3441,"deaths":40},{"state":"Texas","drilldown":"Texas","stateCode":"TX","fips":"US48","cases":2712,"deaths":35},{"state":"Connecticut","drilldown":"Connecticut","stateCode":"CT","fips":"US09","cases":1993,"deaths":34},{"state":"Indiana","drilldown":"Indiana","stateCode":"IN","fips":"US18","cases":1514,"deaths":32},{"state":"Ohio","drilldown":"Ohio","stateCode":"OH","fips":"US39","cases":1665,"deaths":30},{"state":"Virginia","drilldown":"Virginia","stateCode":"VA","fips":"US51","cases":890,"deaths":22},{"state":"Arizona","drilldown":"Arizona","stateCode":"AZ","fips":"US04","cases":929,"deaths":18},{"state":"Wisconsin","drilldown":"Wisconsin","stateCode":"WI","fips":"US55","cases":1120,"deaths":17},{"state":"Oklahoma","drilldown":"Oklahoma","stateCode":"OK","fips":"US40","cases":429,"deaths":16},{"state":"South Carolina","drilldown":"South Carolina","stateCode":"SC","fips":"US45","cases":774,"deaths":16},{"state":"Nevada","drilldown":"Nevada","stateCode":"NV","fips":"US32","cases":920,"deaths":15},{"state":"Mississippi","drilldown":"Mississippi","stateCode":"MS","fips":"US28","cases":759,"deaths":14},{"state":"Oregon","drilldown":"Oregon","stateCode":"OR","fips":"US41","cases":548,"deaths":13},{"state":"Vermont","drilldown":"Vermont","stateCode":"VT","fips":"US50","cases":235,"deaths":12},{"state":"Missouri","drilldown":"Missouri","stateCode":"MO","fips":"US29","cases":903,"deaths":12},{"state":"Maryland","drilldown":"Maryland","stateCode":"MD","fips":"US24","cases":1244,"deaths":11},{"state":"Kentucky","drilldown":"Kentucky","stateCode":"KY","fips":"US21","cases":439,"deaths":9},{"state":"Minnesota","drilldown":"Minnesota","stateCode":"MN","fips":"US27","cases":504,"deaths":9},{"state":"Kansas","drilldown":"Kansas","stateCode":"KS","fips":"US20","cases":332,"deaths":7},{"state":"Tennessee","drilldown":"Tennessee","stateCode":"TN","fips":"US47","cases":1537,"deaths":7},{"state":"Delaware","drilldown":"Delaware","stateCode":"DE","fips":"US10","cases":232,"deaths":6},{"state":"Idaho","drilldown":"Idaho","stateCode":"ID","fips":"US16","cases":310,"deaths":6},{"state":"Arkansas","drilldown":"Arkansas","stateCode":"AR","fips":"US05","cases":449,"deaths":6},{"state":"North Carolina","drilldown":"North Carolina","stateCode":"NC","fips":"US37","cases":1167,"deaths":6},{"state":"Puerto Rico","drilldown":"Puerto Rico","stateCode":"PR","fips":"US72","cases":127,"deaths":5},{"state":"Alabama","drilldown":"Alabama","stateCode":"AL","fips":"US01","cases":830,"deaths":5},{"state":"Iowa","drilldown":"Iowa","stateCode":"IA","fips":"US19","cases":336,"deaths":4},{"state":"District of Columbia","drilldown":"District of Columbia","stateCode":"DC","fips":"US11","cases":342,"deaths":4},{"state":"Maine","drilldown":"Maine","stateCode":"ME","fips":"US23","cases":253,"deaths":3},{"state":"New Hampshire","drilldown":"New Hampshire","stateCode":"NH","fips":"US33","cases":258,"deaths":3},{"state":"Rhode Island","drilldown":"Rhode Island","stateCode":"RI","fips":"US44","cases":294,"deaths":3},{"state":"Nebraska","drilldown":"Nebraska","stateCode":"NE","fips":"US31","cases":137,"deaths":2},{"state":"New Mexico","drilldown":"New Mexico","stateCode":"NM","fips":"US35","cases":237,"deaths":2},{"state":"Utah","drilldown":"Utah","stateCode":"UT","fips":"US49","cases":719,"deaths":2},{"state":"Guam","drilldown":"Guam","stateCode":null,"fips":"US66","cases":58,"deaths":1},{"state":"South Dakota","drilldown":"South Dakota","stateCode":"SD","fips":"US46","cases":90,"deaths":1},{"state":"North Dakota","drilldown":"North Dakota","stateCode":"ND","fips":"US38","cases":98,"deaths":1},{"state":"Alaska","drilldown":"Alaska","stateCode":"AK","fips":"US02","cases":114,"deaths":1},{"state":"West Virginia","drilldown":"West Virginia","stateCode":"WV","fips":"US54","cases":124,"deaths":1},{"state":"Montana","drilldown":"Montana","stateCode":"MT","fips":"US30","cases":161,"deaths":1},{"state":"Northern Mariana Islands","drilldown":"Northern Mariana Islands","stateCode":null,"fips":"US69","cases":2,"deaths":0},{"state":"Virgin Islands","drilldown":"Virgin Islands","stateCode":null,"fips":"US78","cases":23,"deaths":0},{"state":"Wyoming","drilldown":"Wyoming","stateCode":"WY","fips":"US56","cases":87,"deaths":0},{"state":"Hawaii","drilldown":"Hawaii","stateCode":"HI","fips":"US15","cases":175,"deaths":0}]}')},60:function(a){a.exports=JSON.parse('[{"path":["M",-707,-5188,"L",3651,-2950,"M",1747,-2584,"L",1747,-3799],"properties":{"hc-group":"__separator_lines__"}}]')}}]);
//# sourceMappingURL=23.272d43e3.chunk.js.map