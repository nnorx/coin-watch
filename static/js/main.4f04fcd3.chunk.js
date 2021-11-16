(this.webpackJsonpcoinwatch=this.webpackJsonpcoinwatch||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(22),s=c.n(a),i=c(6),r=c(2),o=c(8),l=c.n(o),d=c(12),j=c(3),u=c(27),b=c(23),m=c.n(b),h={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:2e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear"}]}},x=c(0),p=function(e){var t=e.data,c=Object(n.useRef)(),a=t.day,s=t.week,i=t.year,r=t.detail,o=Object(n.useState)("24h"),l=Object(j.a)(o,2),d=l[0],b=l[1],p=function(){switch(d){default:return a;case"7d":return s;case"1y":return i}};Object(n.useEffect)((function(){if(c&&c.current&&r)new m.a(c.current,{type:"line",data:{datasets:[{label:"".concat(r.name," price"),data:p(),backgroundColor:"rgba(174, 305, 194, 0.5)",borderColor:"rgba(174, 305, 194, 0.4",pointRadius:0}]},options:Object(u.a)({},h)})}));return Object(x.jsxs)("div",{className:"bg-white border mt-2 rounded p-3",children:[Object(x.jsx)("div",{children:function(){if(r)return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"my-0",children:["$",r.current_price.toFixed(2)]}),Object(x.jsxs)("p",{className:r.price_change_24h<0?"text-danger my-0":"text-success my-0",children:["24h \u0394: "+r.price_change_percentage_24h.toFixed(2),"%"]})]})}()}),Object(x.jsx)("div",{children:Object(x.jsx)("canvas",{ref:c,id:"myChart",width:250,height:250})}),Object(x.jsxs)("div",{className:"chart-button mt-1",children:[Object(x.jsx)("button",{onClick:function(){return b("24h")},className:"btn gbtn btn-outline-secondary btn-sm",children:"24h"}),Object(x.jsx)("button",{onClick:function(){return b("7d")},className:"btn gbtn btn-outline-secondary btn-sm mx-1",children:"7d"}),Object(x.jsx)("button",{onClick:function(){return b("1y")},className:"btn gbtn btn-outline-secondary btn-sm",children:"1y"})]})]})},O=function(e){var t=e.data;return Object(x.jsx)("div",{children:function(){if(t)return Object(x.jsxs)("div",{className:"bg-white mt-3 p-2 rounded border row",children:[Object(x.jsxs)("div",{className:"col-sm",children:[Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"Market Cap"}),Object(x.jsx)("span",{children:"$"+t.market_cap.toLocaleString()})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"Volume (24h)"}),Object(x.jsx)("span",{children:"$"+t.total_volume.toLocaleString()})]}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{className:"col-sm",children:[Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"Total Supply"}),Object(x.jsx)("span",{children:null===t.total_supply?"undefined":t.total_supply.toLocaleString()})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"Circulating Supply"}),Object(x.jsx)("span",{children:t.circulating_supply.toLocaleString()})]}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{className:"col-sm",children:[Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"High (24h)"}),Object(x.jsx)("span",{children:"$"+t.high_24h.toLocaleString()})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("span",{className:"text-muted coin-data-category",children:"Low (24h)"}),Object(x.jsx)("span",{children:"$"+t.low_24h.toLocaleString()})]}),Object(x.jsx)("hr",{})]})]})}()})},N=c(24),f=c.n(N).a.create({baseURL:"https://api.coingecko.com/api/v3"}),v=(c(54),c(25)),g=function(){return Object(x.jsx)("div",{className:"footer-container",children:Object(x.jsx)("section",{className:"social-media",children:Object(x.jsxs)("div",{className:"social-media-wrap",children:[Object(x.jsx)("small",{className:"website-rights"}),Object(x.jsxs)("div",{className:"social-icons",children:[Object(x.jsx)(i.b,{className:"social-icon-link",to:"//www.github.com/nnorx",target:"_blank","aria-label":"Github",children:Object(x.jsx)(v.a,{})}),Object(x.jsx)(i.b,{className:"social-icon-link",to:"//www.nicknorcross.com/",target:"_blank","aria-label":"NickNorcross.com",children:Object(x.jsx)("img",{className:"nn-logo",src:"data:image/png;base64,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",alt:""})})]})]})})})},y=function(){var e=Object(r.g)().id,t=Object(n.useState)({}),c=Object(j.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),u=o[0],b=o[1],m=function(e){return e.map((function(e){return{t:e[0],y:e[1]}}))};Object(n.useEffect)((function(){var t=function(){var t=Object(d.a)(l.a.mark((function t(){var c,n,a,i,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.next=3,Promise.all([f.get("/coins/".concat(e,"/market_chart"),{params:{vs_currency:"usd",days:"1"}}),f.get("/coins/".concat(e,"/market_chart"),{params:{vs_currency:"usd",days:"7"}}),f.get("/coins/".concat(e,"/market_chart"),{params:{vs_currency:"usd",days:"365"}}),f.get("/coins/markets/",{params:{vs_currency:"usd",id:e}})]);case 3:c=t.sent,n=Object(j.a)(c,4),a=n[0],i=n[1],r=n[2],o=n[3],s({day:m(a.data.prices),week:m(i.data.prices),year:m(r.data.prices),detail:o.data.find((function(t){return t.id===e}))}),b(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);return u?Object(x.jsx)("div",{className:"loading",children:"Loading..."}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"coinlist",children:[Object(x.jsx)(p,{data:a}),Object(x.jsx)(O,{data:a.detail})]}),Object(x.jsx)(g,{})]})},w=c(26),A=Object(n.createContext)(),R=function(e){var t,c=Object(n.useState)((null===(t=localStorage.getItem("watchList"))||void 0===t?void 0:t.split(","))||["bitcoin","ethereum","cardano","polkadot","terra-luna"]),a=Object(j.a)(c,2),s=a[0],i=a[1];Object(n.useEffect)((function(){localStorage.setItem("watchList",s)}),[s]);return Object(x.jsx)(A.Provider,{value:{watchList:s,deleteCoin:function(e){i(s.filter((function(t){return t!==e})))},addCoin:function(e){-1===s.indexOf(e)&&i([].concat(Object(w.a)(s),[e]))}},children:e.children})},k=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(A),i=s.addCoin,r=s.watchList,o=["bitcoin","ethereum","polkadot","dogecoin","terra-luna","ripple","avalanche-2","chainlink","bitcoin-cash","litecoin","uniswap","algorand","matic-network","tezos","stellar","cardano","cosmos","vechain","the-graph","binance Coin","blockstack"].filter((function(e){return!r.includes(e)}));return Object(x.jsxs)("div",{className:"dropdown",children:[Object(x.jsx)("button",{onClick:function(){return a(!c)},className:"btn sbtn btn-primary dropdown-toggle",type:"button",children:"Add Coin"}),Object(x.jsx)("div",{className:c?"dropdown-menu show":"dropdown-menu",children:o.map((function(e){return Object(x.jsx)("a",{onClick:function(){return i(e),void a(!1)},href:"#",className:"dropdown-item",children:e})}))})]})},L=function(e){var t=e.coin,c=e.deleteCoin;return Object(x.jsx)(i.b,{to:"/coins/".concat(t.id),className:"text-decoration-none my-1 coin",children:Object(x.jsxs)("li",{className:"coinlist-item list-group-item list-group-item-action d-flex justify-content-around align-items-center flex-fill text-dark",children:[Object(x.jsx)("div",{className:"col-sm-1",children:Object(x.jsx)("div",{className:"imgwrapper",children:Object(x.jsx)("img",{className:"coinlist-image",src:t.image,alt:""})})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("span",{className:"text-decoration-none",children:t.name})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("span",{className:"text-decoration-none",children:"$"+t.current_price.toFixed(2)})}),Object(x.jsx)("div",{className:"col-sm-2",children:Object(x.jsxs)("span",{className:t.price_change_percentage_24h<0?"text-danger mr-2":"text-success mr-2",children:[t.price_change_percentage_24h<0?Object(x.jsx)("i",{className:"fas fa-sort-down align-middle mr-1"}):Object(x.jsx)("i",{className:"fas fa-sort-up align-middle mr-1"}),t.price_change_percentage_24h.toFixed(2)+"%"]})}),Object(x.jsx)("i",{onClick:function(e){e.preventDefault(),c(t.id)},className:"delete-icon far fa-times-circle text-danger"})]})})},S=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(A),i=s.watchList,r=s.deleteCoin,o=Object(n.useState)(!1),u=Object(j.a)(o,2),b=u[0],m=u[1];console.log(i),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,f.get("/coins/markets/",{params:{vs_currency:"usd",ids:i.join(",")}});case 3:t=e.sent,a(t.data),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.length>0?e():a([])}),[i]);return Object(x.jsx)("div",{children:b?Object(x.jsx)("div",{className:"loading",children:"Loading..."}):Object(x.jsxs)("div",{className:"listwrapper",children:[Object(x.jsx)("ul",{className:"coinlist list-group mt-2",children:Object(x.jsxs)("li",{className:"coinlist-item list-group-item list-group-item-action d-flex justify-content-around align-items-center text-dark",children:[Object(x.jsx)("div",{className:"col-sm-1",children:Object(x.jsx)("span",{className:"text-decoration-none"})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("span",{className:"text-decoration-none",children:"Coin"})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("span",{className:"text-decoration-none",children:"Price"})}),Object(x.jsx)("div",{className:"col-sm-2",children:Object(x.jsx)("span",{children:"24h"})})]})}),Object(x.jsx)("ul",{className:"coinlist list-group mt-2",children:c.map((function(e){return Object(x.jsx)(L,{coin:e,deleteCoin:r},e.id)}))})]})})},C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"coinsummary shadow border p-2 rounded mt-2 bg-light",children:[Object(x.jsx)(k,{}),Object(x.jsx)(S,{})]}),Object(x.jsx)(g,{})]})},K=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("h2",{className:"text-center text-#84a98c mt-3 mb-4",children:"Coin Watch"})})})},q=(c(55),function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(R,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(K,{}),Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",element:Object(x.jsx)(C,{})}),Object(x.jsx)(r.a,{path:"/coins/:id",element:Object(x.jsx)(y,{})})]})]})})})});s.a.render(Object(x.jsx)(q,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4f04fcd3.chunk.js.map