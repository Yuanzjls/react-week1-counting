(this.webpackJsonpcounting=this.webpackJsonpcounting||[]).push([[0],{14:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),u=a.n(r),l=(a(14),a(8)),o=a(7),b=Object(o.a)({myButton:{color:"black",background:"white","&:focus":{background:"gray"}},myResetButton:{color:"#4d4d4d;",background:"white","&:focus":{background:"gray"}}});var i=function(e){var t=b(),a="reset"!==e.btnType?t.myButton:t.myResetButton;return c.a.createElement("button",{type:"button",className:a,disabled:e.btnEnable,onClick:e.btnFunc,accessKey:e.btnKey},c.a.createElement("span",null,e.btnText))};var m=function(e){var t=e.currentNumber>=e.maxCapacity?"Max capacity is reached!":"Welcome";return c.a.createElement("div",{className:"label__lg"},c.a.createElement("h2",null,"Capacity:",e.maxCapacity),c.a.createElement("p",{className:"num-p"},e.currentNumber),c.a.createElement("h2",null,t))};function s(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],u=a[1],o=r<e.maxCapacity,b=r>0;return Object(n.useEffect)((function(){o||alert("Max capacity is reached!")}),[o]),c.a.createElement("div",{className:"count stack-large"},c.a.createElement(i,{btnType:"reset",btnText:"Reset",btnKey:"r",btnFunc:function(){u(0)}}),c.a.createElement(m,{maxCapacity:e.maxCapacity,currentNumber:r}),c.a.createElement("div",{className:"filters btn-group stack-exception"},c.a.createElement(i,{btnText:"+",btnFunc:function(){o&&u(r+1)},btnEnable:!o,btnKey:"+"}),c.a.createElement(i,{btnText:"-",btnFunc:function(){b&&u(r-1)},btnEnable:!b,btnKey:"-"})))}var y=function(){return c.a.createElement(s,{maxCapacity:100})};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.0f5091e8.chunk.js.map