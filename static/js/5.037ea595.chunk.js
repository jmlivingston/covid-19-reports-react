(this["webpackJsonpcovid-19-reports-react"]=this["webpackJsonpcovid-19-reports-react"]||[]).push([[5],{29:function(t,e,a){"use strict";var o=a(42),n=a(36),r=a.n(n),c=a(28),l=a.n(c),s=a(39),i=a.n(s),p=a(40),u=a.n(p),d=a(0),f=a.n(d),h=a(4),m=(a(30),Object(d.lazy)((function(){return a.e(8).then(a.t.bind(null,41,7))})));i()(l.a),u()(l.a),l.a.setOptions({chart:{style:{fontFamily:"Lato"}}});function b(t){var e=t.baseColor,a=void 0===e?"#FF0000":e,n=t.borderLines,c=t.colorKey,s=void 0===c?"value":c,i=t.colorMaxValue,p=t.colorMinValue,u=t.colorValueInterval,b=t.data,v=t.hoverColor,D=void 0===v?"#A4EDBA":v,g=t.mapData,y=t.separatorLines,x=t.seriesJoinBy,O=t.stateBorderColor,S=void 0===O?"#DDDDDD":O,w=t.title,C=void 0===w?"Untitled":w,L=t.tooltipFormat,k=t.tooltipHeader,j=t.tooltipSuffix,F=t.tooltipTitle,B=r()(a),M=y?{color:"#DDDDDD",data:y,name:"Separator",shadow:!1,type:"mapline"}:{},A={chart:{fontFamily:"Lato"},colorAxis:{max:i,min:p,stops:[].concat(Object(o.a)([.025,.25,.5,.75].map((function(t){return[t,"rgba(".concat(B.color[0],", ").concat(B.color[1],", ").concat(B.color[2],", ").concat(t,")")]}))),[[1,"rgb(".concat(B.color[0],", ").concat(B.color[1],", ").concat(B.color[2],")")]]),tickInterval:u},exporting:{enabled:!0,buttons:{contextButton:{menuItems:[].concat(Object(o.a)(l.a.getOptions().exporting.buttons.contextButton.menuItems),["separator",{text:"County",onclick:function(){return window.location.href="/county"}},{text:"State",onclick:function(){return window.location.href="/"}}])}}},legend:{backgroundColor:l.a.defaultOptions&&l.a.defaultOptions.legend&&l.a.defaultOptions.legend.backgroundColor,floating:!0,layout:"vertical",align:"right"},mapNavigation:{buttonOptions:{verticalAlign:"bottom"},enabled:!0},plotOptions:{map:{colorKey:s},mapline:{showInLegend:!1,enableMouseTracking:!1}},series:[{borderWidth:.5,data:b,dataLabels:{enabled:!0,format:"{point.properties.postal-code}"},joinBy:x,mapData:g,name:F,shadow:!1,states:{hover:{color:D}},tooltip:{pointFormat:L,headerFormat:k,valueSuffix:j}},{color:S,data:n,shadow:!1,type:"mapline"},M],title:{text:C}};return i&&u&&b&&g&&x?f.a.createElement(d.Suspense,{fallback:f.a.createElement(h.a,null)},f.a.createElement("div",{className:"highcharts-wrapper"},f.a.createElement(m,{immutable:!0,constructorType:"mapChart",highcharts:l.a,options:A}))):"The following props are required: colorMaxValue, colorValueInterval, data, mapData, and seriesJoinBy"}b.defaultProps={baseColor:"#FF0000",colorKey:"value",hoverColor:"#A4EDBA",stateBorderColor:"#DDDDDD",title:"Untitled"},e.a=b},30:function(t,e,a){},31:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a(32);function n(t){var e=t.title;return'<span style="font-size:24px;">COVID-19: '.concat(e,'</span><br /><span style="font-size:16px;">Deaths: ').concat(o.deaths.toLocaleString("en-US")," | Cases: ").concat(o.cases.toLocaleString("en-US"),'</span><br />\n  <span style="font-size:12px; color: #333333">\n    Source: </span>\n    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ').concat(new Date(o.lastUpdated).toLocaleDateString()," ").concat(new Date(o.lastUpdated).toLocaleTimeString(),"</span>")}},32:function(t){t.exports=JSON.parse('{"cases":123580,"deaths":2133,"lastUpdated":"Sun, 29 Mar 2020 23:23:34 GMT"}')},33:function(t){t.exports=JSON.parse('[{"path":["M",-707,-5188,"L",3651,-2950,"M",1747,-2584,"L",1747,-3799],"properties":{"hc-group":"__separator_lines__"}}]')},55:function(t,e,a){"use strict";a.r(e);var o=a(34),n=a.n(o),r=a(35),c=a(5),l=a(51),s=a(2),i=a(0),p=a.n(i),u=a(4),d=a(29),f=a(31),h=a(33);e.default=function(){var t=Object(s.d)().reportType,e=void 0===t?"deaths":t,o=Object(i.useState)([]),m=Object(c.a)(o,2),b=m[0],v=m[1],D=Object(i.useState)(0),g=Object(c.a)(D,2),y=g[0],x=g[1];return Object(i.useEffect)((function(){Object(r.a)(n.a.mark((function t(){var o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.e(10).then(a.t.bind(null,53,3));case 2:o=t.sent,v(o.default),x(o.default.sort((function(t,a){return t[e]>a[e]?-1:1}))[0][e]);case 5:case"end":return t.stop()}}),t)})))()}),[e]),b.length?p.a.createElement(d.a,{baseColor:"#FF0000",colorKey:e,colorMaxValue:y,colorMinValue:0,colorValueInterval:Math.round(y/5),data:b,hasSeparatorLines:!0,hoverColor:"#A4EDBA",mapData:l,separatorLines:h,seriesJoinBy:"fips",title:Object(f.a)({title:"USA State ".concat(e.charAt(0).toUpperCase()+e.slice(1))}),tooltipFormat:"Deaths: {point.deaths}<br />Cases: {point.cases}<br />",tooltipHeader:"{point.key}<br />",tooltipSuffix:""}):p.a.createElement(u.a,null)}}}]);
//# sourceMappingURL=5.037ea595.chunk.js.map