(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[13],{178:function(e,t,a){"use strict";a.r(t);var o=a(89),r=a(0),s=a.n(r),n=a(90),i=a(41);t.default=function(){return s.a.createElement(i.a,{data:n,mapData:o})}},38:function(e,t,a){"use strict";var o=a(49),r=a(43),s=a.n(r),n=a(42),i=a.n(n),c=a(44),l=a.n(c),p=a(45),d=a.n(p),h=a(46),u=a.n(h),m=a(47),y=a.n(m),f=a(0),g=a.n(f),S=a(14),H=(a(39),Object(f.lazy)((function(){return a.e(89).then(a.t.bind(null,48,7))})));u()(i.a),l()(i.a),d()(i.a),y()(i.a),i.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function x(e){var t=e.baseColor,a=e.borderLines,r=e.colorKey,n=e.colorMaxValue,c=e.colorMinValue,l=e.colorValueInterval,p=e.data,d=e.drilldown,h=e.hoverColor,u=e.mapData,m=e.separatorLines,y=e.seriesJoinBy,x=e.stateBorderColor,C=e.title,N=e.tooltipFormat,b=e.tooltipHeader,w=e.tooltipSuffix,v=e.tooltipTitle,k=s()(t),D=m?{color:"#DDDDDD",data:m,name:"Separator",shadow:!1,type:"mapline"}:{},F={boost:{enabled:!0,useGPUTranslations:!0,usePreallocated:!0},chart:{events:{drilldown:d},fontFamily:"Lato"},colorAxis:{max:n,min:c,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(e){return[e,"rgba(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],", ").concat(e,")")]}))),[[1,"rgb(".concat(k.color[0],", ").concat(k.color[1],", ").concat(k.color[2],")")]]),tickInterval:l},drilldown:{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}},legend:{backgroundColor:i.a.defaultOptions&&i.a.defaultOptions.legend&&i.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:r},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:p,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:y,mapData:u,name:v,shadow:!1,states:{hover:{color:h}},tooltip:{pointFormat:N,headerFormat:b,valueSuffix:w}},{color:x,data:a,shadow:!1,type:"mapline"},D],title:{text:C}};return n&&p&&u&&y?g.a.createElement(f.Suspense,{fallback:g.a.createElement(S.a,null)},g.a.createElement("div",{className:"highcharts-wrapper"},g.a.createElement(H,{constructorType:"mapChart",highcharts:i.a,options:F}))):"The following props are required: colorMaxValue, data, mapData, and seriesJoinBy"}x.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},t.a=x},39:function(e,t,a){},40:function(e,t,a){"use strict";function o(e){var t=e.name,a=e.cases,o=e.deaths,r=e.lastUpdated,s=e.reportType;return'<span style="font-size:24px;">COVID-19: '.concat(t," ").concat(s.charAt(0).toUpperCase()+s.slice(1),'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.toLocaleString("en-US")," | Cases: ").concat(a.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(r).toLocaleDateString()," ").concat(new Date(r).toLocaleTimeString(),"</span>")}a.d(t,"a",(function(){return o}))},41:function(e,t,a){"use strict";var o=a(50),r=a(0),s=a.n(r),n=a(9),i=a(38),c=a(40);t.a=function(e){var t=e.data,a=e.mapData,l=Object(r.useContext)(n.a).reportType;return s.a.createElement(i.a,{colorKey:l,colorMaxValue:t.summary[l],colorMinValue:0,colorValueInterval:Math.round(t.summary[l]/5),data:t.data,hasSeparatorLines:!0,mapData:a,seriesJoinBy:"fips",title:Object(c.a)(Object(o.a)({},t.summary,{reportType:l})),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}",tooltipHeader:"{point.key}<br />",tooltipSuffix:""})}},89:function(e){e.exports=JSON.parse('{"title":"New Hampshire","version":"1.1.3","type":"FeatureCollection","copyright":"Copyright (c) 2020 Highsoft AS, Based on data from The United States Census Bureau","copyrightShort":"USA Census Bureau","copyrightUrl":"http://www.census.gov","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:2823"}},"hc-transform":{"default":{"crs":"+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","scale":0.00241538592332,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851,"xoffset":227219.159352,"yoffset":311757.916412}},"features":[{"type":"Feature","id":"US.NH.015","properties":{"hc-group":"admin2","hc-middle-x":0.33,"hc-middle-y":0.5,"hc-key":"us-nh-015","hc-a2":"RO","fips":"33015","name":"Rockingham"},"geometry":{"type":"Polygon","coordinates":[[[2559,420],[3001,1402],[3675,840],[3536,605],[3813,610],[3960,643],[4138,605],[4179,790],[4305,781],[4463,664],[4532,601],[4508,519],[4645,546],[4590,322],[4429,61],[4331,-259],[4229,-308],[4115,-219],[3976,-211],[3868,-277],[3670,-320],[3571,-540],[3361,-479],[3198,-608],[3212,-828],[3017,-809],[2972,-754],[2692,-687],[2583,-474],[2459,-469],[2384,-29],[2616,7],[2564,297],[2564,297],[2564,297],[2559,420]]]}},{"type":"Feature","id":"US.NH.013","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.57,"hc-key":"us-nh-013","hc-a2":"ME","fips":"33013","name":"Merrimack"},"geometry":{"type":"Polygon","coordinates":[[[2559,420],[2564,297],[2564,297],[2563,297],[2564,297],[2387,345],[2195,460],[2178,546],[1803,484],[1722,893],[1149,739],[976,1122],[684,1042],[514,1322],[440,1604],[561,1833],[552,2096],[681,2078],[913,2458],[1173,2802],[1268,2524],[1440,2620],[1541,2603],[1653,2404],[1811,2308],[1867,2110],[1924,2069],[2058,2152],[2616,1760],[3035,1446],[3024,1432],[3001,1402],[2559,420]]]}},{"type":"Feature","id":"US.NH.003","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.49,"hc-key":"us-nh-003","hc-a2":"CA","fips":"33003","name":"Carroll"},"geometry":{"type":"Polygon","coordinates":[[[3688,5611],[3745,4261],[3767,3562],[3824,2639],[3857,2518],[3671,2275],[3630,2469],[3406,2373],[3356,2647],[3248,2507],[3139,2589],[2953,2641],[2319,3242],[2131,3441],[2033,3974],[2642,4068],[2578,4512],[2685,4707],[2580,4826],[2562,5066],[2486,5111],[2476,5301],[2538,5313],[2569,5165],[2652,5110],[2694,4804],[2789,4802],[2806,4991],[2965,5437],[3428,5403],[3593,5414],[3585,5605],[3688,5611]]]}},{"type":"Feature","id":"US.NH.001","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.47,"hc-key":"us-nh-001","hc-a2":"BE","fips":"33001","name":"Belknap"},"geometry":{"type":"Polygon","coordinates":[[[2131,3441],[2319,3242],[2953,2641],[3139,2589],[3248,2507],[3162,2395],[3263,1743],[3035,1446],[2616,1760],[2058,2152],[1924,2069],[1867,2110],[1811,2308],[1653,2404],[1541,2603],[1530,2706],[1668,2735],[1773,2842],[1782,3113],[2162,3159],[2131,3441]]]}},{"type":"Feature","id":"US.NH.009","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.51,"hc-key":"us-nh-009","hc-a2":"GR","fips":"33009","name":"Grafton"},"geometry":{"type":"Polygon","coordinates":[[[2476,5301],[2486,5111],[2562,5066],[2580,4826],[2685,4707],[2578,4512],[2642,4068],[2033,3974],[2131,3441],[2162,3159],[1782,3113],[1773,2842],[1668,2735],[1530,2706],[1541,2603],[1440,2620],[1268,2524],[1173,2802],[913,2458],[514,2524],[442,2462],[395,2564],[88,2698],[-278,2763],[-294,2828],[-198,3044],[-202,3158],[-99,3317],[103,3471],[172,3634],[159,3820],[202,3924],[358,4083],[374,4399],[496,4606],[634,4759],[567,4922],[610,5067],[598,5073],[531,5208],[586,5413],[526,5557],[673,5753],[787,5824],[1009,5868],[1111,5819],[1289,5897],[1284,6005],[1433,6110],[1636,5800],[1666,5818],[1963,5686],[1998,5478],[2202,5513],[2394,5456],[2476,5301]]]}},{"type":"Feature","id":"US.NH.005","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.54,"hc-key":"us-nh-005","hc-a2":"CH","fips":"33005","name":"Cheshire"},"geometry":{"type":"Polygon","coordinates":[[[874,-619],[922,-937],[322,-912],[-164,-892],[-702,-866],[-802,-674],[-868,-711],[-999,-336],[-984,-206],[-895,-71],[-918,85],[-739,155],[-694,273],[-716,495],[-615,618],[-666,941],[-604,834],[-423,817],[-435,924],[235,1020],[167,812],[594,797],[531,340],[517,32],[689,27],[783,-616],[874,-619]]]}},{"type":"Feature","id":"US.NH.007","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.62,"hc-key":"us-nh-007","hc-a2":"CO","fips":"33007","name":"Coos"},"geometry":{"type":"Polygon","coordinates":[[[3688,5611],[3585,5605],[3593,5414],[3428,5403],[2965,5437],[2806,4991],[2789,4802],[2694,4804],[2652,5110],[2569,5165],[2538,5313],[2476,5301],[2394,5456],[2202,5513],[1998,5478],[1963,5686],[1666,5818],[1636,5800],[1433,6110],[1584,6122],[1749,6259],[1786,6389],[1993,6505],[1945,6593],[2009,6658],[1931,6725],[2108,6839],[2034,7132],[1832,7551],[1987,7686],[2055,7952],[2223,8208],[2174,8406],[2097,8517],[2214,8634],[2225,8856],[2424,9088],[2406,9159],[2501,9475],[2396,9550],[2552,9550],[2618,9693],[2822,9797],[3032,9636],[3297,9604],[3437,9851],[3458,9626],[3522,8545],[3605,7328],[3688,5611]]]}},{"type":"Feature","id":"US.NH.017","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.65,"hc-key":"us-nh-017","hc-a2":"ST","fips":"33017","name":"Strafford"},"geometry":{"type":"Polygon","coordinates":[[[3001,1402],[3024,1432],[3035,1446],[3263,1743],[3162,2395],[3248,2507],[3356,2647],[3406,2373],[3630,2469],[3671,2275],[3857,2518],[3883,2440],[3820,2258],[3866,2207],[3787,1988],[3793,1843],[3881,1660],[3960,1666],[4178,1344],[4332,1205],[4263,879],[4305,781],[4179,790],[4138,605],[3960,643],[3813,610],[3536,605],[3675,840],[3001,1402]]]}},{"type":"Feature","id":"US.NH.019","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.48,"hc-key":"us-nh-019","hc-a2":"SU","fips":"33019","name":"Sullivan"},"geometry":{"type":"Polygon","coordinates":[[[-278,2763],[88,2698],[395,2564],[442,2462],[514,2524],[913,2458],[681,2078],[552,2096],[561,1833],[440,1604],[514,1322],[684,1042],[599,1020],[640,927],[594,797],[167,812],[235,1020],[-435,924],[-423,817],[-604,834],[-666,941],[-659,1070],[-611,1240],[-608,1346],[-488,1568],[-531,1653],[-472,1745],[-540,1777],[-474,2203],[-436,2300],[-489,2393],[-404,2682],[-278,2763]]]}},{"type":"Feature","id":"US.NH.011","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.55,"hc-key":"us-nh-011","hc-a2":"HI","fips":"33011","name":"Hillsborough"},"geometry":{"type":"Polygon","coordinates":[[[594,797],[640,927],[599,1020],[684,1042],[976,1122],[1149,739],[1722,893],[1803,484],[2178,546],[2195,460],[2387,345],[2564,297],[2564,297],[2616,7],[2384,-29],[2459,-469],[2583,-474],[2692,-687],[2972,-754],[3017,-809],[2987,-834],[2868,-999],[922,-937],[874,-619],[783,-616],[689,27],[517,32],[531,340],[594,797]]]}}]}')},90:function(e){e.exports=JSON.parse('{"summary":{"name":"New Hampshire","cases":258,"deaths":3,"lastUpdated":"Tue, 31 Mar 2020 01:01:54 GMT"},"data":[{"county":"Grafton","state":"New Hampshire","stateCode":"NH","fips":"33009","cases":30,"deaths":0},{"county":"Rockingham","state":"New Hampshire","stateCode":"NH","fips":"33015","cases":100,"deaths":1},{"county":"Hillsborough","state":"New Hampshire","stateCode":"NH","fips":"33011","cases":68,"deaths":2},{"county":"Carroll","state":"New Hampshire","stateCode":"NH","fips":"33003","cases":10,"deaths":0},{"county":"Belknap","state":"New Hampshire","stateCode":"NH","fips":"33001","cases":9,"deaths":0},{"county":"Merrimack","state":"New Hampshire","stateCode":"NH","fips":"33013","cases":18,"deaths":0},{"county":"Cheshire","state":"New Hampshire","stateCode":"NH","fips":"33005","cases":3,"deaths":0},{"county":"Strafford","state":"New Hampshire","stateCode":"NH","fips":"33017","cases":17,"deaths":0},{"county":"Sullivan","state":"New Hampshire","stateCode":"NH","fips":"33019","cases":3,"deaths":0}]}')}}]);
//# sourceMappingURL=13.1b438f34.chunk.js.map