(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[30],{177:function(e,t,a){"use strict";a.r(t);var s=a(87),o=a(0),i=a.n(o),c=a(88),n=a(41);t.default=function(){return i.a.createElement(n.a,{data:c,mapData:s})}},38:function(e,t,a){"use strict";var s=a(49),o=a(43),i=a.n(o),c=a(42),n=a.n(c),r=a(44),d=a.n(r),G=a(45),p=a.n(G),u=a(46),h=a.n(u),l=a(47),f=a.n(l),y=a(0),g=a.n(y),C=a(14),A=(a(39),Object(y.lazy)((function(){return a.e(89).then(a.t.bind(null,48,7))})));h()(n.a),d()(n.a),p()(n.a),f()(n.a),n.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function m(e){var t=e.baseColor,a=e.borderLines,o=e.colorKey,c=e.colorMaxValue,r=e.colorMinValue,d=e.colorValueInterval,G=e.data,p=e.drilldown,u=e.hoverColor,h=e.mapData,l=e.separatorLines,f=e.seriesJoinBy,m=e.stateBorderColor,b=e.title,D=e.tooltipFormat,w=e.tooltipHeader,k=e.tooltipSuffix,v=e.tooltipTitle,T=i()(t),x=l?{color:"#DDDDDD",data:l,name:"Separator",shadow:!1,type:"mapline"}:{},B={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:p},fontFamily:"Lato"},colorAxis:{max:c,min:r,stops:[].concat(Object(s.a)([.025,.25,.5,.75].map((function(e){return[e,"rgba(".concat(T.color[0],", ").concat(T.color[1],", ").concat(T.color[2],", ").concat(e,")")]}))),[[1,"rgb(".concat(T.color[0],", ").concat(T.color[1],", ").concat(T.color[2],")")]]),tickInterval:d},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:n.a.defaultOptions&&n.a.defaultOptions.legend&&n.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:o},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:G,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:f,mapData:h,name:v,shadow:!1,states:{hover:{color:u}},tooltip:{pointFormat:D,headerFormat:w,valueSuffix:k}},{color:m,data:a,shadow:!1,type:"mapline"},x],title:{text:b}};return c&&G&&h&&f?g.a.createElement(y.Suspense,{fallback:g.a.createElement(C.a,null)},g.a.createElement("div",{className:"highcharts-wrapper"},g.a.createElement(A,{constructorType:"mapChart",highcharts:n.a,options:B}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}m.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=m},39:function(e,t,a){},40:function(e,t,a){"use strict";function s(e){var t=e.name,a=e.cases,s=e.deaths,o=e.lastUpdated,i=e.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(i.charAt(0).toUpperCase()+i.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(s.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o).toLocaleDateString()," ").concat(new Date(o).toLocaleTimeString(),"</span>")}a.d(t,"a",(function(){return s}))},41:function(e,t,a){"use strict";var s=a(50),o=a(0),i=a.n(o),c=a(9),n=a(38),r=a(40);t.a=function(e){var t=e.data,a=e.mapData,d=Object(o.useContext)(c.a).reportType;return i.a.createElement(n.a,{colorKey:d,colorMaxValue:t.summary[d],colorMinValue:0,colorValueInterval:Math.round(t.summary[d]/5),data:t.data,hasSeparatorLines:!0,mapData:a,seriesJoinBy:"fips",title:Object(r.a)(Object(s.a)({},t.summary,{reportType:d})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},88:function(e){e.exports=JSON.parse('{"summary":{"name":"Georgia","cases":2688,"deaths":83,"lastUpdated":"Tue, 31 Mar 2020 01:01:54 GMT"},"data":[{"county":"Fulton","state":"Georgia","stateCode":"GA","fips":"13121","cases":425,"deaths":12},{"county":"Polk","state":"Georgia","stateCode":"GA","fips":"13233","cases":10,"deaths":0},{"county":"Cobb","state":"Georgia","stateCode":"GA","fips":"13067","cases":228,"deaths":9},{"county":"Gwinnett","state":"Georgia","stateCode":"GA","fips":"13135","cases":145,"deaths":1},{"county":"Cherokee","state":"Georgia","stateCode":"GA","fips":"13057","cases":60,"deaths":1},{"county":"DeKalb","state":"Georgia","stateCode":"GA","fips":"13089","cases":273,"deaths":3},{"county":"Fayette","state":"Georgia","stateCode":"GA","fips":"13113","cases":27,"deaths":3},{"county":"Floyd","state":"Georgia","stateCode":"GA","fips":"13115","cases":28,"deaths":2},{"county":"Charlton","state":"Georgia","stateCode":"GA","fips":"13049","cases":1,"deaths":0},{"county":"Bartow","state":"Georgia","stateCode":"GA","fips":"13015","cases":119,"deaths":1},{"county":"Lee","state":"Georgia","stateCode":"GA","fips":"13177","cases":43,"deaths":6},{"county":"Lowndes","state":"Georgia","stateCode":"GA","fips":"13185","cases":20,"deaths":1},{"county":"Gordon","state":"Georgia","stateCode":"GA","fips":"13129","cases":14,"deaths":1},{"county":"Henry","state":"Georgia","stateCode":"GA","fips":"13151","cases":56,"deaths":2},{"county":"Coweta","state":"Georgia","stateCode":"GA","fips":"13077","cases":23,"deaths":2},{"county":"Clarke","state":"Georgia","stateCode":"GA","fips":"13059","cases":35,"deaths":2},{"county":"Clayton","state":"Georgia","stateCode":"GA","fips":"13063","cases":59,"deaths":1},{"county":"Dougherty","state":"Georgia","stateCode":"GA","fips":"13095","cases":247,"deaths":17},{"county":"Newton","state":"Georgia","stateCode":"GA","fips":"13217","cases":18,"deaths":0},{"county":"Forsyth","state":"Georgia","stateCode":"GA","fips":"13117","cases":28,"deaths":1},{"county":"Hall","state":"Georgia","stateCode":"GA","fips":"13139","cases":33,"deaths":0},{"county":"Paulding","state":"Georgia","stateCode":"GA","fips":"13223","cases":23,"deaths":0},{"county":"Troup","state":"Georgia","stateCode":"GA","fips":"13285","cases":10,"deaths":1},{"county":"Richmond","state":"Georgia","stateCode":"GA","fips":"13245","cases":12,"deaths":0},{"county":"Whitfield","state":"Georgia","stateCode":"GA","fips":"13313","cases":8,"deaths":2},{"county":"Columbia","state":"Georgia","stateCode":"GA","fips":"13073","cases":12,"deaths":0},{"county":"Houston","state":"Georgia","stateCode":"GA","fips":"13153","cases":15,"deaths":1},{"county":"Bibb","state":"Georgia","stateCode":"GA","fips":"13021","cases":14,"deaths":0},{"county":"Early","state":"Georgia","stateCode":"GA","fips":"13099","cases":16,"deaths":1},{"county":"Effingham","state":"Georgia","stateCode":"GA","fips":"13103","cases":4,"deaths":0},{"county":"Glynn","state":"Georgia","stateCode":"GA","fips":"13127","cases":8,"deaths":0},{"county":"Laurens","state":"Georgia","stateCode":"GA","fips":"13175","cases":12,"deaths":0},{"county":"Peach","state":"Georgia","stateCode":"GA","fips":"13225","cases":6,"deaths":1},{"county":"Rockdale","state":"Georgia","stateCode":"GA","fips":"13247","cases":18,"deaths":1},{"county":"Carroll","state":"Georgia","stateCode":"GA","fips":"13045","cases":70,"deaths":0},{"county":"Chatham","state":"Georgia","stateCode":"GA","fips":"13051","cases":16,"deaths":0},{"county":"Dawson","state":"Georgia","stateCode":"GA","fips":"13085","cases":4,"deaths":0},{"county":"Douglas","state":"Georgia","stateCode":"GA","fips":"13097","cases":38,"deaths":1},{"county":"Heard","state":"Georgia","stateCode":"GA","fips":"13149","cases":1,"deaths":1},{"county":"Lamar","state":"Georgia","stateCode":"GA","fips":"13171","cases":3,"deaths":0},{"county":"Lincoln","state":"Georgia","stateCode":"GA","fips":"13181","cases":3,"deaths":0},{"county":"Miller","state":"Georgia","stateCode":"GA","fips":"13201","cases":4,"deaths":0},{"county":"Monroe","state":"Georgia","stateCode":"GA","fips":"13207","cases":3,"deaths":0},{"county":"Muscogee","state":"Georgia","stateCode":"GA","fips":"13215","cases":9,"deaths":0},{"county":"Oconee","state":"Georgia","stateCode":"GA","fips":"13219","cases":11,"deaths":0},{"county":"Pickens","state":"Georgia","stateCode":"GA","fips":"13227","cases":5,"deaths":1},{"county":"Randolph","state":"Georgia","stateCode":"GA","fips":"13243","cases":3,"deaths":0},{"county":"Spalding","state":"Georgia","stateCode":"GA","fips":"13255","cases":12,"deaths":0},{"county":"Sumter","state":"Georgia","stateCode":"GA","fips":"13261","cases":15,"deaths":1},{"county":"Terrell","state":"Georgia","stateCode":"GA","fips":"13273","cases":10,"deaths":2},{"county":"Tift","state":"Georgia","stateCode":"GA","fips":"13277","cases":13,"deaths":0},{"county":"Turner","state":"Georgia","stateCode":"GA","fips":"13287","cases":2,"deaths":0},{"county":"Unknown","state":"Georgia","stateCode":"GA","fips":"","cases":228,"deaths":2},{"county":"Worth","state":"Georgia","stateCode":"GA","fips":"13321","cases":10,"deaths":1},{"county":"Baldwin","state":"Georgia","stateCode":"GA","fips":"13009","cases":2,"deaths":0},{"county":"Lumpkin","state":"Georgia","stateCode":"GA","fips":"13187","cases":4,"deaths":0},{"county":"Barrow","state":"Georgia","stateCode":"GA","fips":"13013","cases":6,"deaths":1},{"county":"Butts","state":"Georgia","stateCode":"GA","fips":"13035","cases":5,"deaths":0},{"county":"Chattooga","state":"Georgia","stateCode":"GA","fips":"13055","cases":1,"deaths":0},{"county":"Clinch","state":"Georgia","stateCode":"GA","fips":"13065","cases":1,"deaths":0},{"county":"Coffee","state":"Georgia","stateCode":"GA","fips":"13069","cases":10,"deaths":0},{"county":"Tattnall","state":"Georgia","stateCode":"GA","fips":"13267","cases":2,"deaths":0},{"county":"Twiggs","state":"Georgia","stateCode":"GA","fips":"13289","cases":2,"deaths":0},{"county":"Burke","state":"Georgia","stateCode":"GA","fips":"13033","cases":4,"deaths":0},{"county":"Catoosa","state":"Georgia","stateCode":"GA","fips":"13047","cases":3,"deaths":0},{"county":"Harris","state":"Georgia","stateCode":"GA","fips":"13145","cases":3,"deaths":0},{"county":"Liberty","state":"Georgia","stateCode":"GA","fips":"13179","cases":3,"deaths":0},{"county":"Madison","state":"Georgia","stateCode":"GA","fips":"13195","cases":3,"deaths":0},{"county":"Morgan","state":"Georgia","stateCode":"GA","fips":"13211","cases":1,"deaths":0},{"county":"Pierce","state":"Georgia","stateCode":"GA","fips":"13229","cases":2,"deaths":0},{"county":"Washington","state":"Georgia","stateCode":"GA","fips":"13303","cases":2,"deaths":0},{"county":"Baker","state":"Georgia","stateCode":"GA","fips":"13007","cases":1,"deaths":1},{"county":"Ben Hill","state":"Georgia","stateCode":"GA","fips":"13017","cases":2,"deaths":0},{"county":"Bryan","state":"Georgia","stateCode":"GA","fips":"13029","cases":7,"deaths":0},{"county":"Camden","state":"Georgia","stateCode":"GA","fips":"13039","cases":2,"deaths":0},{"county":"Colquitt","state":"Georgia","stateCode":"GA","fips":"13071","cases":6,"deaths":0},{"county":"Crisp","state":"Georgia","stateCode":"GA","fips":"13081","cases":6,"deaths":0},{"county":"Fannin","state":"Georgia","stateCode":"GA","fips":"13111","cases":3,"deaths":0},{"county":"Greene","state":"Georgia","stateCode":"GA","fips":"13133","cases":1,"deaths":0},{"county":"Irwin","state":"Georgia","stateCode":"GA","fips":"13155","cases":3,"deaths":0},{"county":"Jasper","state":"Georgia","stateCode":"GA","fips":"13159","cases":2,"deaths":0},{"county":"Macon","state":"Georgia","stateCode":"GA","fips":"13193","cases":1,"deaths":0},{"county":"Meriwether","state":"Georgia","stateCode":"GA","fips":"13199","cases":5,"deaths":0},{"county":"Mitchell","state":"Georgia","stateCode":"GA","fips":"13205","cases":15,"deaths":0},{"county":"Pulaski","state":"Georgia","stateCode":"GA","fips":"13235","cases":3,"deaths":0},{"county":"Seminole","state":"Georgia","stateCode":"GA","fips":"13253","cases":5,"deaths":0},{"county":"Stephens","state":"Georgia","stateCode":"GA","fips":"13257","cases":3,"deaths":0},{"county":"Telfair","state":"Georgia","stateCode":"GA","fips":"13271","cases":1,"deaths":0},{"county":"Walton","state":"Georgia","stateCode":"GA","fips":"13297","cases":4,"deaths":0},{"county":"Decatur","state":"Georgia","stateCode":"GA","fips":"13087","cases":4,"deaths":0},{"county":"Dodge","state":"Georgia","stateCode":"GA","fips":"13091","cases":1,"deaths":0},{"county":"Jackson","state":"Georgia","stateCode":"GA","fips":"13157","cases":2,"deaths":0},{"county":"Jones","state":"Georgia","stateCode":"GA","fips":"13169","cases":2,"deaths":0},{"county":"Long","state":"Georgia","stateCode":"GA","fips":"13183","cases":1,"deaths":0},{"county":"Taylor","state":"Georgia","stateCode":"GA","fips":"13269","cases":1,"deaths":0},{"county":"Thomas","state":"Georgia","stateCode":"GA","fips":"13275","cases":7,"deaths":0},{"county":"Ware","state":"Georgia","stateCode":"GA","fips":"13299","cases":5,"deaths":0},{"county":"White","state":"Georgia","stateCode":"GA","fips":"13311","cases":1,"deaths":0},{"county":"Wilkes","state":"Georgia","stateCode":"GA","fips":"13317","cases":1,"deaths":0},{"county":"Calhoun","state":"Georgia","stateCode":"GA","fips":"13037","cases":3,"deaths":0},{"county":"Franklin","state":"Georgia","stateCode":"GA","fips":"13119","cases":2,"deaths":0},{"county":"Haralson","state":"Georgia","stateCode":"GA","fips":"13143","cases":2,"deaths":0},{"county":"McDuffie","state":"Georgia","stateCode":"GA","fips":"13189","cases":1,"deaths":0},{"county":"Toombs","state":"Georgia","stateCode":"GA","fips":"13279","cases":2,"deaths":0},{"county":"Chattahoochee","state":"Georgia","stateCode":"GA","fips":"13053","cases":1,"deaths":0},{"county":"Habersham","state":"Georgia","stateCode":"GA","fips":"13137","cases":1,"deaths":0},{"county":"Hart","state":"Georgia","stateCode":"GA","fips":"13147","cases":1,"deaths":0},{"county":"Upson","state":"Georgia","stateCode":"GA","fips":"13293","cases":5,"deaths":0},{"county":"Bulloch","state":"Georgia","stateCode":"GA","fips":"13031","cases":1,"deaths":0},{"county":"Jenkins","state":"Georgia","stateCode":"GA","fips":"13165","cases":1,"deaths":0},{"county":"Murray","state":"Georgia","stateCode":"GA","fips":"13213","cases":3,"deaths":0},{"county":"Pike","state":"Georgia","stateCode":"GA","fips":"13231","cases":2,"deaths":0},{"county":"Wheeler","state":"Georgia","stateCode":"GA","fips":"13309","cases":1,"deaths":0},{"county":"Bacon","state":"Georgia","stateCode":"GA","fips":"13005","cases":1,"deaths":0},{"county":"Brooks","state":"Georgia","stateCode":"GA","fips":"13027","cases":1,"deaths":0},{"county":"Candler","state":"Georgia","stateCode":"GA","fips":"13043","cases":1,"deaths":0}]}')}}]);
//# sourceMappingURL=30.d18c3879.chunk.js.map