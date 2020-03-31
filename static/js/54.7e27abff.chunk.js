(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[54],{169:function(t,s,e){"use strict";e.r(s);var a=e(71),o=e(0),n=e.n(o),i=e(72),c=e(41);s.default=function(){return n.a.createElement(c.a,{data:i,mapData:a})}},38:function(t,s,e){"use strict";var a=e(49),o=e(43),n=e.n(o),i=e(42),c=e.n(i),r=e(44),d=e.n(r),l=e(45),p=e.n(l),u=e(46),W=e.n(u),h=e(47),f=e.n(h),y=e(0),C=e.n(y),m=e(14),I=(e(39),Object(y.lazy)((function(){return e.e(89).then(e.t.bind(null,48,7))})));W()(c.a),d()(c.a),p()(c.a),f()(c.a),c.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function b(t){var s=t.baseColor,e=t.borderLines,o=t.colorKey,i=t.colorMaxValue,r=t.colorMinValue,d=t.colorValueInterval,l=t.data,p=t.drilldown,u=t.hoverColor,W=t.mapData,h=t.separatorLines,f=t.seriesJoinBy,b=t.stateBorderColor,D=t.title,g=t.tooltipFormat,v=t.tooltipHeader,x=t.tooltipSuffix,w=t.tooltipTitle,S=n()(s),O=h?{color:"#DDDDDD",data:h,name:"Separator",shadow:!1,type:"mapline"}:{},k={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:i,min:r,stops:[].concat(Object(a.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(S.color[0],", ").concat(S.color[1],", ").concat(S.color[2],")")]]),tickInterval:d},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:c.a.defaultOptions&&c.a.defaultOptions.legend&&c.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:l,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:W,name:w,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:g,headerFormat:v,valueSuffix:x}},{color:b,data:e,shadow:!1,type:"mapline"},O],title:{text:D}};return i&&l&&W&&f?C.a.createElement(y.Suspense,{fallback:C.a.createElement(m.a,null)},C.a.createElement("div",{className:"highcharts-wrapper"},C.a.createElement(I,{constructorType:"mapChart",highcharts:c.a,options:k}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},s.a=b},39:function(t,s,e){},40:function(t,s,e){"use strict";function a(t){var s=t.name,e=t.cases,a=t.deaths,o=t.lastUpdated,n=t.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(s," ").concat(n.charAt(0).toUpperCase()+n.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(a.toLocaleString("en-US")," | Cases: ").concat(e.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}e.d(s,"a",(function(){return a}))},41:function(t,s,e){"use strict";var a=e(50),o=e(0),n=e.n(o),i=e(9),c=e(38),r=e(40);s.a=function(t){var s=t.data,e=t.mapData,d=Object(o.useContext)(i.a).reportType;return n.a.createElement(c.a,{colorKey:d,colorMaxValue:s.summary[d],colorMinValue:0,colorValueInterval:Math.round(s.summary[d]/5),data:s.data,hasSeparatorLines:!0,mapData:e,seriesJoinBy:"fips",title:Object(r.a)(Object(a.a)({},s.summary,{reportType:d})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},72:function(t){t.exports=JSON.parse('{"summary":{"name":"Wisconsin","cases":1120,"deaths":17,"lastUpdated":"Tue, 31 Mar 2020 01:01:54 GMT"},"data":[{"county":"Dane","state":"Wisconsin","stateCode":"WI","fips":"55025","cases":179,"deaths":1},{"county":"Pierce","state":"Wisconsin","stateCode":"WI","fips":"55093","cases":4,"deaths":0},{"county":"Fond du Lac","state":"Wisconsin","stateCode":"WI","fips":"55039","cases":20,"deaths":1},{"county":"Waukesha","state":"Wisconsin","stateCode":"WI","fips":"55133","cases":83,"deaths":0},{"county":"Milwaukee","state":"Wisconsin","stateCode":"WI","fips":"55079","cases":565,"deaths":9},{"county":"Racine","state":"Wisconsin","stateCode":"WI","fips":"55101","cases":17,"deaths":0},{"county":"Sheboygan","state":"Wisconsin","stateCode":"WI","fips":"55117","cases":8,"deaths":0},{"county":"Winnebago","state":"Wisconsin","stateCode":"WI","fips":"55139","cases":8,"deaths":0},{"county":"Outagamie","state":"Wisconsin","stateCode":"WI","fips":"55087","cases":6,"deaths":0},{"county":"Wood","state":"Wisconsin","stateCode":"WI","fips":"55141","cases":2,"deaths":0},{"county":"Kenosha","state":"Wisconsin","stateCode":"WI","fips":"55059","cases":30,"deaths":0},{"county":"Brown","state":"Wisconsin","stateCode":"WI","fips":"55009","cases":6,"deaths":0},{"county":"La Crosse","state":"Wisconsin","stateCode":"WI","fips":"55063","cases":15,"deaths":0},{"county":"Washington","state":"Wisconsin","stateCode":"WI","fips":"55131","cases":31,"deaths":0},{"county":"Bayfield","state":"Wisconsin","stateCode":"WI","fips":"55007","cases":2,"deaths":0},{"county":"Calumet","state":"Wisconsin","stateCode":"WI","fips":"55015","cases":1,"deaths":0},{"county":"Columbia","state":"Wisconsin","stateCode":"WI","fips":"55021","cases":9,"deaths":0},{"county":"Eau Claire","state":"Wisconsin","stateCode":"WI","fips":"55035","cases":10,"deaths":0},{"county":"Ozaukee","state":"Wisconsin","stateCode":"WI","fips":"55089","cases":34,"deaths":3},{"county":"Sauk","state":"Wisconsin","stateCode":"WI","fips":"55111","cases":12,"deaths":1},{"county":"Walworth","state":"Wisconsin","stateCode":"WI","fips":"55127","cases":6,"deaths":0},{"county":"Chippewa","state":"Wisconsin","stateCode":"WI","fips":"55017","cases":4,"deaths":0},{"county":"Douglas","state":"Wisconsin","stateCode":"WI","fips":"55031","cases":6,"deaths":0},{"county":"Dunn","state":"Wisconsin","stateCode":"WI","fips":"55033","cases":3,"deaths":0},{"county":"Green","state":"Wisconsin","stateCode":"WI","fips":"55045","cases":4,"deaths":0},{"county":"Jefferson","state":"Wisconsin","stateCode":"WI","fips":"55055","cases":8,"deaths":0},{"county":"Marathon","state":"Wisconsin","stateCode":"WI","fips":"55073","cases":1,"deaths":0},{"county":"Rock","state":"Wisconsin","stateCode":"WI","fips":"55105","cases":14,"deaths":0},{"county":"St. Croix","state":"Wisconsin","stateCode":"WI","fips":"55109","cases":4,"deaths":0},{"county":"Dodge","state":"Wisconsin","stateCode":"WI","fips":"55027","cases":8,"deaths":0},{"county":"Grant","state":"Wisconsin","stateCode":"WI","fips":"55043","cases":1,"deaths":0},{"county":"Iowa","state":"Wisconsin","stateCode":"WI","fips":"55049","cases":3,"deaths":0},{"county":"Juneau","state":"Wisconsin","stateCode":"WI","fips":"55057","cases":3,"deaths":0},{"county":"Monroe","state":"Wisconsin","stateCode":"WI","fips":"55081","cases":1,"deaths":0},{"county":"Clark","state":"Wisconsin","stateCode":"WI","fips":"55019","cases":3,"deaths":0},{"county":"Portage","state":"Wisconsin","stateCode":"WI","fips":"55097","cases":1,"deaths":0},{"county":"Vilas","state":"Wisconsin","stateCode":"WI","fips":"55125","cases":2,"deaths":0},{"county":"Iron","state":"Wisconsin","stateCode":"WI","fips":"55051","cases":1,"deaths":1},{"county":"Marinette","state":"Wisconsin","stateCode":"WI","fips":"55075","cases":1,"deaths":0},{"county":"Richland","state":"Wisconsin","stateCode":"WI","fips":"55103","cases":2,"deaths":0},{"county":"Waupaca","state":"Wisconsin","stateCode":"WI","fips":"55135","cases":1,"deaths":1},{"county":"Oneida","state":"Wisconsin","stateCode":"WI","fips":"55085","cases":1,"deaths":0}]}')}}]);
//# sourceMappingURL=54.7e27abff.chunk.js.map