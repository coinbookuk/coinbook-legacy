(this.webpackJsonpcoinbook=this.webpackJsonpcoinbook||[]).push([[0],{183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(60),c=a.n(s),o=(a(67),a(1)),i=a(2),l=a(6),u=a(3),p=a(4),d=a(33),m=a.n(d),h=(a(68),a(31)),g=(a(69),a(34)),b=a(9),y=a(35),k=a(11),C=a.n(k),E=a(32),f=a.n(E),v=(a(183),a(61)),S=(a(184),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={coinsOnMoonPay:n.props.coinsOnMoonPay,url:"https://buy.moonpay.io?apiKey=pk_live_M4RiDyjN7nnYeRFyBlwDBZzPNlkZHrjn&currencyCode=".concat(n.props.symbol,"&colorCode=%23d1004d")},n}return Object(i.a)(a,[{key:"render",value:function(){var e=window.innerWidth;return this.state.coinsOnMoonPay.includes(this.props.coin.toLowerCase())?e>768?r.a.createElement(v.a,{contentStyle:{width:"400px",height:"400px",padding:"0px",borderRadius:"12px",boxShadow:"rgb(226, 207, 213) 1.5px 1.5px 3px,\n            rgb(247, 242, 244) -3px -3px 6px -0.5px",border:"none"},trigger:r.a.createElement("a",{className:"btn-buy"},r.a.createElement("p",{className:"buttontext"}," ","Buy"," ",this.props.coin.charAt(0).toUpperCase()+this.props.coin.slice(1)," ","\ud83d\udcb3")),position:"top left"},r.a.createElement(h.a,{allow:"accelerometer; autoplay; camera; gyroscope; payment",frameborder:"0",height:"100%",colorCode:"%23F0E7EA",src:"https://buy-staging.moonpay.io?apiKey=pk_test_123",width:"100%"},r.a.createElement("p",null,"Your browser does not support iframes."))):r.a.createElement("a",{className:"btn-buy",href:this.state.url},r.a.createElement("p",{className:"buttontext"}," ","Buy"," ",this.props.coin.charAt(0).toUpperCase()+this.props.coin.slice(1)," ","\ud83d\udcb3")):r.a.createElement("p",null)}}]),a}(r.a.Component)),w=function(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)({}),i=Object(b.a)(o,2),l=i[0],u=i[1],p=Object(n.useState)(e.id),d=Object(b.a)(p,1)[0],m=Object(n.useState)(e.coinsOnMoonPay),h=(Object(b.a)(m,1)[0],Object(n.useState)(e.currency)),k=(Object(b.a)(h,1)[0],Object(n.useState)(e.currencysymbols)),E=Object(b.a)(k,1)[0],v=Object(n.useState)(e.days),S=(Object(b.a)(v,1)[0],Object(n.useState)({})),w=Object(b.a)(S,2),N=w[0],_=w[1];return Object(n.useEffect)((function(){!function(e){var t=e.days,a=e.currency,n=(e.currencysymbols,[]),r=[],s=[],o=[],i=[],l=[],p=[],m=[],h=d;function b(e){if(e>=1){return(Math.floor(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2)}if(e>=.001){return Math.floor(e*Math.pow(10,6))/Math.pow(10,6).toFixed(4)}return Math.floor(e*Math.pow(10,9))/Math.pow(10,9)}C.a.get("https://api.coingecko.com/api/v3/coins/".concat(h,"/market_chart?vs_currency=").concat(a,"&days=").concat(t)).then((function(e){console.log(e);var t,a=Object(g.a)(e.data.prices);try{for(a.s();!(t=a.n()).done;){var d=t.value;n.push(d[0]),r.push(d[1])}}catch(E){a.e(E)}finally{a.f()}console.log(r);for(var h=0;h<r.length;h+=1)s.push(b(r[h]));for(h=0;h<n.length;h++)l.push(n[h]);for(h=0;h<l.length;h++)m.push(f()(l[h]).format("lll"));var y,k=Object(g.a)(e.data.total_volumes);try{for(k.s();!(y=k.n()).done;){var C=y.value;n.push(C[0]),o.push(C[1])}}catch(E){k.e(E)}finally{k.f()}console.log(o);for(h=0;h<o.length;h+=4)i.push(o[h]);for(h=0;h<m.length;h+=4)p.push(m[h]);c({labels:m,datasets:[{label:"Price",backgroundColor:"#5C68FF",borderWidth:"0px",data:s}]}),u({labels:p,datasets:[{label:"Volume",backgroundColor:"#222222",borderColor:"rgba(135, 99, 225, 1)",data:i}]}),_(!0),_(!1)})).catch((function(e){console.log(e)}))}(e)}),[e]),r.a.createElement("div",{className:"charts-div"},r.a.createElement("td",{className:"charts"},r.a.createElement("p",{className:"chart-name"},"Price"),r.a.createElement(y.Line,{redraw:N,data:s,options:{legend:{display:!1},tooltips:{displayColors:!1,mode:"x-axis",backgroundColor:"#FFFFFF",bodyFontColor:"#323232",titleFontColor:"#323232",borderWidth:1,borderColor:"#F0F0F0",callbacks:{label:function(e){return e.yLabel>1?E+e.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):E+e.yLabel.toString()}}},responsive:!0,title:{text:"SCALE",display:!1},elements:{point:{radius:0},line:{tension:.05}},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!1,fontColor:"#323232",callback:function(t){return t>1?e.currencysymbols+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e.currencysymbols+t.toString()}},gridLines:{display:!1}}],xAxes:[{ticks:{maxTicksLimit:4,maxRotation:0,minRotation:0,fontColor:"#323232",callback:function(e){return e.split(",")[0]}},gridLines:{display:!1}}]}}})),window.innerWidth>768?r.a.createElement(r.a.Fragment,null):r.a.createElement("br",null),r.a.createElement("td",{className:"charts-vol"},r.a.createElement("p",{className:"chart-name"},"Volume"),r.a.createElement(y.Bar,{redraw:N,data:l,options:{legend:{display:!1},tooltips:{displayColors:!1,mode:"x-axis",backgroundColor:"#FFFFFF",bodyFontColor:"#323232",titleFontColor:"#323232",borderWidth:1,borderColor:"#F0F0F0",callbacks:{label:function(e){return E+e.yLabel.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},responsive:!0,title:{text:"SCALE",display:!1},elements:{point:{radius:0},line:{tension:.05}},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!1,fontColor:"#323232",callback:function(t){return e.currencysymbols+((a=t)>1e6?(a/1e9).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"B":a);var a}},gridLines:{display:!1}}],xAxes:[{ticks:{maxTicksLimit:4,maxRotation:0,minRotation:0,fontColor:"#323232",callback:function(e){return e.split(",")[0]}},gridLines:{display:!1}}]}}})))},N=(a(185),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentPage:n.props.pageNumber},n}return Object(i.a)(a,[{key:"handlePageHandsDown",value:function(){var e=this;if(""===this.props.searchValue)return this.props.pageNumber>1?r.a.createElement("a",{className:"page-button",onClick:function(){e.props.onClick("down")}},"\u2b05\ufe0f"):r.a.createElement("a",null)}},{key:"handlePageHandsup",value:function(){var e=this;if(""===this.props.searchValue)return this.props.pageNumber<25?r.a.createElement("a",{className:"page-button",onClick:function(){e.props.onClick("up")}},"\u27a1\ufe0f"):r.a.createElement("a",null)}},{key:"render",value:function(){this.props.pageNumber;return r.a.createElement("td",{colspan:"8"},r.a.createElement("div",{class:"container"},this.handlePageHandsDown(),r.a.createElement("br",null),r.a.createElement("p",null," Page ",this.props.pageNumber," "),r.a.createElement("br",null),this.handlePageHandsup()))}}]),a}(r.a.Component)),_=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={coinClicked:"",chartDays:1,redraw:!1,currency:n.props.currency,currency_symbols:n.props.currency_symbols,button_color:"white",orderSelection:n.props.orderSelection},n.dateClick=n.dateClick.bind(Object(l.a)(n)),n.buttonStyleForData=n.buttonStyleForData.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"handleUporDown",value:function(e){return e>0?"up":e<-10?"crash":"down"}},{key:"handleEmoji",value:function(e){return e<-20||e<-10||e<-5||e<0||e<10||e<20||e>20?r.a.createElement("span",{className:"singleemoji"}):void 0}},{key:"roundDownPrice",value:function(e){if(e>=1){return(Math.floor(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}if(e>=.001){return Math.floor(e*Math.pow(10,6))/Math.pow(10,6).toString()}return e.toFixed(8).toString()}},{key:"roundDown",value:function(e,t){return t=t||0,Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}},{key:"handleClick",value:function(e){if(this.state.coinClicked!==e.currentTarget.getAttribute("data-item")){var t=e.currentTarget.getAttribute("data-item"),a=e.currentTarget.getAttribute("data-item-symbol");this.setState({coinClicked:t,coinClickedSymbol:a}),console.log("We need to get the details for "+t)}else this.setState({coinClicked:"",coinClickedSymbol:""});this.chartRender(this.props.coins.id,this.state.chartDays)}},{key:"dateClick",value:function(e){var t=e.currentTarget.getAttribute("data-item");this.setState({chartDays:t})}},{key:"buttonStyleForData",value:function(e){return e.currentTarget.getAttribute("data-item")===this.state.chartDays?"btn-2":"btn-1"}},{key:"chartRender",value:function(e,t,a,n,s){var c=window.innerWidth,o=this.props.coins,i=(o.error,o.isLoaded,o.coins,this.state.currency_symbols[this.props.currency.toUpperCase()]),l=this.state.coinClickedSymbol;if(e===this.state.coinClicked)return c>768?r.a.createElement("tr",{className:"chartandpay"},r.a.createElement("td",{colspan:"8"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{className:"btn btn-1",key:"1-days","data-item":1,onClick:this.dateClick,id:e},"1 day"),r.a.createElement("a",{className:"btn btn-1",key:"7-days","data-item":7,onClick:this.dateClick,id:e},"1 week"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":30,onClick:this.dateClick,id:e},"1 month"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":90,onClick:this.dateClick,id:e},"3 months"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":365,onClick:this.dateClick,id:e},"1 year"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":730,onClick:this.dateClick,id:e},"2 years"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":1825,onClick:this.dateClick,id:e},"5 years"),r.a.createElement("div",{class:"container"},r.a.createElement(S,{className:"btn btn-1",coin:e,symbol:l,coinsOnMoonPay:this.props.coinsOnMoonPay}))),r.a.createElement(w,{id:e,days:t,redraw:this.state.redraw,currency:this.props.currency,currencysymbols:i,coinsOnMoonPay:this.props.coinsOnMoonPay}),r.a.createElement("div",{class:"container"},r.a.createElement(S,{className:"btn btn-1",coin:e,symbol:l,coinsOnMoonPay:this.props.coinsOnMoonPay})))):r.a.createElement("tr",{className:"chartandpay"},r.a.createElement("td",{colspan:"8"},r.a.createElement("table",{className:"additionalData"},r.a.createElement("tr",{colspan:"4"},r.a.createElement("th",{className:"mobHeader"},"MarketCap"),r.a.createElement("th",{className:"mobHeader"},"Supply")),r.a.createElement("tr",null,r.a.createElement("td",{className:"mobData"},s,a),r.a.createElement("td",{className:"mobData"},n))),r.a.createElement("div",{class:"container"},r.a.createElement("a",{className:"btn btn-1",key:"1-days","data-item":1,onClick:this.dateClick,id:e},"1D"),r.a.createElement("a",{className:"btn btn-1",key:"7-days","data-item":7,onClick:this.dateClick,id:e},"1W"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":30,onClick:this.dateClick,id:e},"1M"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":90,onClick:this.dateClick,id:e},"3M"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":365,onClick:this.dateClick,id:e},"1Y"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":730,onClick:this.dateClick,id:e},"2Y"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":1825,onClick:this.dateClick,id:e},"5Y")),r.a.createElement(w,{id:e,days:t,redraw:this.state.redraw,currency:this.props.currency,currencysymbols:i,coinsOnMoonPay:this.props.coinsOnMoonPay}),r.a.createElement("div",{class:"container"},r.a.createElement(S,{className:"btn btn-1",coin:e,symbol:l,coinsOnMoonPay:this.props.coinsOnMoonPay}))))}},{key:"result",value:function(){var e=this,t=window.innerWidth,a=this.props.coins,n=(a.error,a.isLoaded,a.coins);if(n.length>0){if(t>768){this.props.pageSettings;return n.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:t.id,"data-item":t.id,"data-item-symbol":t.symbol,onClick:e.handleClick.bind(e)},r.a.createElement("td",null,t.market_cap_rank),r.a.createElement("td",{className:"theCoinId"},r.a.createElement("p",{className:"theCoinIdSec"},r.a.createElement("img",{src:t.image,className:"Coin-Logo"}),t.name,r.a.createElement("span",{className:"symbol"},t.symbol.toUpperCase()))),r.a.createElement("td",null,e.props.currency_symbols[e.props.currency.toUpperCase()],e.roundDownPrice(t.current_price)),r.a.createElement("td",{className:e.handleUporDown(t.price_change_percentage_24h)},e.roundDown(t.price_change_percentage_24h,2),"%"),r.a.createElement("td",null,e.state.currency_symbols[e.props.currency.toUpperCase()],e.roundDown(t.total_volume).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",null,e.state.currency_symbols[e.props.currency.toUpperCase()],t.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",null,e.roundDown(t.circulating_supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",{className:"emoji"},e.handleEmoji(t.price_change_percentage_24h))),e.chartRender(t.id,e.state.chartDays))}))}this.props.pageSettings;return n.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"idcoin",key:t.id,"data-item":t.id,"data-item-symbol":t.symbol,onClick:e.handleClick.bind(e)},r.a.createElement("td",{className:"theCoinId"},r.a.createElement("p",{className:"theCoinIdSec"},r.a.createElement("img",{src:t.image,className:"Coin-Logo"}),t.name,r.a.createElement("span",{className:"symbol"},t.symbol.toUpperCase()))),r.a.createElement("td",null,e.props.currency_symbols[e.props.currency.toUpperCase()],e.roundDownPrice(t.current_price)),r.a.createElement("td",{className:e.handleUporDown(t.price_change_percentage_24h)},e.roundDown(t.price_change_percentage_24h,2),"%"),r.a.createElement("td",{className:"emoji"},e.handleEmoji(t.price_change_percentage_24h))),e.chartRender(t.id,e.state.chartDays,t.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e.roundDown(t.circulating_supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e.state.currency_symbols[e.props.currency.toUpperCase()]))}))}return r.a.createElement("p",null,"No results \ud83d\ude15")}},{key:"render",value:function(){var e=window.innerWidth,t=this.props.coins,a=t.error,n=t.isLoaded;t.coins;return a?r.a.createElement("div",null,"Error: ",a.message):n?e>768?r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"table-header-button","data-item":"market_cap_rank",onClick:this.props.handleTableHeaderClick},"Rank"),r.a.createElement("th",null,"Coin"),r.a.createElement("th",{className:"table-header-button","data-item":"current_price",onClick:this.props.handleTableHeaderClick},"Price"),r.a.createElement("th",{className:"table-header-button","data-item":"price_change_percentage_24h",onClick:this.props.handleTableHeaderClick},"Change 24H"),r.a.createElement("th",{className:"table-header-button","data-item":"total_volume",onClick:this.props.handleTableHeaderClick},"Volume"),r.a.createElement("th",{className:"table-header-button","data-item":"market_cap",onClick:this.props.handleTableHeaderClick},"MarketCap"),r.a.createElement("th",null,"Supply")),this.result(),r.a.createElement("tr",null,r.a.createElement(N,{pageNumber:this.props.pageNumber,onClick:this.props.onClick,searchValue:this.props.searchValue}))):r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Coin"),r.a.createElement("th",{className:"table-header-button","data-item":"current_price",onClick:this.props.handleTableHeaderClick},"Price"),r.a.createElement("th",{className:"table-header-button","data-item":"price_change_percentage_24h",onClick:this.props.handleTableHeaderClick},"Change 24H")),this.result(),r.a.createElement("tr",null,r.a.createElement(N,{pageNumber:this.props.pageNumber,onClick:this.props.onClick,searchValue:this.props.searchValue}))):r.a.createElement("div",{class:"loader"},"\ud83e\ude99")}}]),a}(r.a.Component),O=(a(186),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,coins:[],currency:n.props.currency,currency_symbols:n.props.currency_symbols,currencyUpdated:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({currencyUpdated:this.props.currency}),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(this.props.currency,"&order=market_cap_desc&per_page=50&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,coins:e.manageCoins(t)})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentWillUpdate",value:function(){var e=this;this.props.currency!==this.state.currencyUpdated&&(console.log("lol"),this.setState({currencyUpdated:this.props.currency}),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(this.props.currency,"&order=market_cap_desc&per_page=10&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,coins:e.manageCoins(t)})}),(function(t){e.setState({isLoaded:!0,error:t})})))}},{key:"handleUporDown",value:function(e){return e>0?"Card-up":"Card-down"}},{key:"roundDown",value:function(e,t){return t=t||0,Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}},{key:"roundDownPrice",value:function(e){if(e>=1){return(Math.floor(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Math.floor(e*Math.pow(10,4))/Math.pow(10,4).toString()}},{key:"handleEmoji",value:function(e){return e<-10?r.a.createElement("span",{className:"emojicard"},"\ud83d\udc80"):e<0?r.a.createElement("span",{className:"emojicard"},"\ud83d\ude15"):e<10?r.a.createElement("span",{className:"emojicard"},"\ud83d\ude03"):e<20?r.a.createElement("span",{className:"emojicard"},"\ud83d\ude80"):e>20?r.a.createElement("span",{className:"emojicard"},"\ud83e\udd2f"):void 0}},{key:"manageCoins",value:function(e){var t=window.innerWidth,a=e.sort((function(e,t){return parseFloat(t.price_change_percentage_24h)-parseFloat(e.price_change_percentage_24h)}));return t>768?a.slice(0,5):a.slice(0,3)}},{key:"render",value:function(){var e=this,t=window.innerWidth,a=this.state,n=a.error,s=a.isLoaded,c=a.coins;a.currency_symbols;return n?r.a.createElement("div",null,"Error: ",n.message):s?t>768?r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},c.map((function(t){return r.a.createElement("div",{class:e.handleUporDown(t.price_change_percentage_24h)},r.a.createElement("p",{className:"card-text"},r.a.createElement("img",{className:"image",src:t.image}),t.name," "),r.a.createElement("p",{className:"card-info"},e.props.currency_symbols[e.props.currency.toUpperCase()],e.roundDownPrice(t.current_price),"\xa0\xa0\xa0\xa0",e.roundDown(t.price_change_percentage_24h,2)," %"))})))):r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{class:"loader"},"\ud83e\ude99")}}]),a}(r.a.Component)),j=(a(187),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return window.innerWidth>256?r.a.createElement("div",{class:"wrapper"},r.a.createElement("p",{className:"glass"},"\ud83d\udd0e"),r.a.createElement("input",{className:"search",placeholder:"Search Coin",type:"text",onChange:this.props.onChange,value:this.props.inputValue})):r.a.createElement("div",{class:"wrapper"},r.a.createElement("input",{className:"search",placeholder:"\ud83d\udd0e Search Coin",type:"text",onChange:this.props.onChange,value:this.props.inputValue}))}}]),a}(r.a.Component));a(188);var F=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currencies:n.props.currencies,settingsOptions:n.props.settingsOptions},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=window.innerWidth,a=this.state,n=a.currencies,s=a.settingsOptions;return t>768?r.a.createElement("span",{className:"settings"},r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn"},"\ud83d\udcb7"),r.a.createElement("div",{class:"dropdown-content"},n.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.onClick,value:e.props.inputValue},t.toUpperCase())})))),r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn"},"\ud83d\udc8e"),r.a.createElement("div",{class:"dropdown-content"},s.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.settings,value:e.props.inputValue},t)}))))):r.a.createElement("div",{className:"settings"},r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn1"},"\ud83d\udcb7"),r.a.createElement("div",{class:"dropdown-content",id:"dropdown-content-1"},n.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.onClick,value:e.props.inputValue},t.toUpperCase())})))),r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn2"},"\ud83d\udc8e"),r.a.createElement("div",{class:"dropdown-content",id:"dropdown-content-2"},s.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.settings,value:e.props.inputValue},t)})))))}}]),a}(r.a.Component),P=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:null,searchOn:!1,value:"",isLoaded:!1,coins:[],coinsForCard:[],rawCoins:[],coinsOnMoonPay:[],currencies:["gbp","btc","eth","usd","aud","cad","eur","rub","idr","krw","cny","thb"],settings:["Coming Soon"],settingsAPIParam:{All:"all"},currencySymbols:{GBP:"\xa3",EUR:"\u20ac",CRC:"\u20a1",USD:"$",ILS:"\u20aa",INR:"\u20b9",JPY:"\xa5",KRW:"\u20a9",NGN:"\u20a6",PHP:"\u20b1",PLN:"z\u0142",PYG:"\u20b2",THB:"\u0e3f",AUD:"$",CAD:"$",RUB:"\u20bd",IDR:"Rp",CNY:"\xa5",BTC:"\u20bf",ETH:"\u039e"},currency:"gbp",currencySymbol:"\xa3",dataSettings:"all",pageNumber:1,pageSettings:[0,10],orderSelection:""},n.onChange=n.onChange.bind(Object(l.a)(n)),n.handleCurrencyClick=n.handleCurrencyClick.bind(Object(l.a)(n)),n.handleSettingsClick=n.handleSettingsClick.bind(Object(l.a)(n)),n.handlePageChange=n.handlePageChange.bind(Object(l.a)(n)),n.handleTableHeaderClick=n.handleTableHeaderClick.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.localStorage();var t=this.state.currency;this.state.settingsAPIParam[this.state.dataSettings];fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(null!==localStorage.getItem("currency")?localStorage.getItem("currency"):t,"&order=market_cap_desc&per_page=350&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,coins:t.slice(e.state.pageSettings[0],e.state.pageSettings[1]),rawCoins:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),C.a.get("https://api.moonpay.io/v3/currencies?apiKey=pk_test_XYlfn9ISmwfjwReteBLpiN1TdSDV7Pw7").then((function(t){for(var a=[],n=0;t.data.length>n;n++)a.push(t.data[n].name.toLowerCase());console.log(a),e.setState({coinsOnMoonPay:a})})).catch((function(e){console.log(e)}))}},{key:"updateData",value:function(e,t){var a=this;this.state.settingsAPIParam[this.state.dataSettings];console.log(t),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(function(){return null!==localStorage.getItem("currency")?localStorage.getItem("currency"):this.state.currency}(),"&order=market_cap_desc&per_page=350&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,coins:e.slice(a.state.pageSettings[0],a.state.pageSettings[1]),rawCoins:e})}),(function(e){a.setState({isLoaded:!0,error:e})}))}},{key:"localStorage",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){null!==localStorage.getItem("currency")&&this.setState({currency:localStorage.getItem("currency")}),null!==localStorage.getItem("dataSettings")&&this.setState({dataSettings:localStorage.getItem("dataSettings")})}))},{key:"onChange",value:function(e){var t=this.state.rawCoins;if(this.setState({value:e.target.value}),""==e.target.value)this.setState({coins:t.slice(this.state.pageSettings[0],this.state.pageSettings[1])});else if(e.target.value.length<this.state.value.length){var a=e.target.value.toLowerCase();t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a)}));this.setState({coins:t.slice(this.state.pageSettings[0],this.state.pageSettings[1])})}else if(e.target.value!==this.state.value){var n=e.target.value.toLowerCase(),r=t.filter((function(e){return-1!==e.name.toLowerCase().concat(e.symbol.toLowerCase()).indexOf(n)}));this.setState({coins:r})}}},{key:"handleTableHeaderClick",value:function(e){var t=e.currentTarget.getAttribute("data-item");if(console.log("coins being managed"+this.state.pageSettings),t===this.state.orderSelection){var a=this.state.rawCoins;this.setState({coins:a.slice(this.state.pageSettings[0],this.state.pageSettings[1]),orderSelection:""})}else if("price_change_percentage_24h"===t){var n=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.price_change_percentage_24h)-parseFloat(e.price_change_percentage_24h)}));console.log(n),this.setState({coins:n,orderSelection:t})}else if("total_volume"===t){var r=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.total_volume)-parseFloat(e.total_volume)}));this.setState({coins:r,orderSelection:t})}else if("current_price"===t){var s=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.current_price)-parseFloat(e.current_price)}));this.setState({coins:s,orderSelection:t})}else if("market_cap"===t){var c=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.market_cap)-parseFloat(e.market_cap)}));this.setState({coins:c,orderSelection:t})}else if("market_cap_rank"===t){var o=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(e.market_cap_rank)-parseFloat(t.market_cap_rank)}));this.setState({coins:o,orderSelection:t})}}},{key:"handleCurrencyClick",value:function(e){return this.setState({currency:e.currentTarget.getAttribute("data-item")}),localStorage.setItem("currency",e.currentTarget.getAttribute("data-item")),this.updateData(e.currentTarget.getAttribute("data-item"),this.state.dataSettings)}},{key:"handleSettingsClick",value:function(e){return this.setState({dataSettings:this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")],pageNumber:1,pageSettings:[0,10],orderSelection:""}),localStorage.setItem("dataSettings",this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")]),this.updateData(this.state.currency,this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")])}},{key:"handlePageChange",value:function(e){var t=this.state.rawCoins;if("up"===e){var a=this.state.pageSettings.map((function(e){return e+10}));this.setState({pageNumber:this.state.pageNumber+1,pageSettings:a,coins:t.slice(a[0],a[1])})}else if("down"===e){var n=this.state.pageSettings.map((function(e){return e-10}));this.setState({pageNumber:this.state.pageNumber-1,pageSettings:n,coins:t.slice(n[0],n[1])})}}},{key:"render",value:function(){return window.innerWidth>768?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"footer-title",style:{backgroundColor:"#"}},r.a.createElement("a",{target:"_blank",href:"https://www.binance.com/en/register?ref=BC0PJGIM/",style:{color:"#FFFFFF"}},"Sign up to Binance and earn back 10% commission on all your trades"))),r.a.createElement("div",{className:"row"},r.a.createElement("h1",{classname:"logo-text"},r.a.createElement("img",{className:"brain",src:m.a})," Coinbook.co.uk"))),r.a.createElement("body",{className:"App-body"},r.a.createElement(O,{currency:this.state.currency,currency_symbols:this.state.currencySymbols,data:this.state}),r.a.createElement("div",{style:{width:500}}),r.a.createElement("div",null,r.a.createElement(j,{inputValue:this.state.value,onChange:this.onChange}),r.a.createElement("span",null,r.a.createElement(F,{currencies:this.state.currencies,settings:this.handleSettingsClick,settingsOptions:this.state.settings,onClick:this.handleCurrencyClick,inputValue:this.state.currency}))),r.a.createElement("div",null,r.a.createElement(_,{coins:this.state,currency:this.state.currency,currency_symbols:this.state.currencySymbols,settings:this.state.settingsData,pageNumber:this.state.pageNumber,pageSettings:this.state.pageSettings,onClick:this.handlePageChange,searchValue:this.state.value,handleTableHeaderClick:this.handleTableHeaderClick,orderSelection:this.state.orderSelection,coinsOnMoonPay:this.state.coinsOnMoonPay})),r.a.createElement("div",null)),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("div",{className:"donate"},r.a.createElement("p",{className:"footer-title"},"Donations \u2764\ufe0f"),r.a.createElement("p",{className:"footer-title"},"Bitcoin: 14Z6pUMZikKGcuBDxxSMHSmrhcUwrAHcNs"),r.a.createElement("p",{className:"footer-title"},"Ethereum: 0xe44400ea92cD298FA05D7a901362530EC2A51C34"),r.a.createElement("p",{className:"footer-title"},"BNB: bnb1udd4c7dsxrf2gjca9w6y3yau2wujnvxzd8vzla"),r.a.createElement("p",{className:"footer-title"},"XRP: rfsGFqq8ZHTEbUs3ibvbTVZN8LnvZNT2UY"),r.a.createElement("p",{className:"footer-title"},"Brave Verified Creator")))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{classname:"logo-text"},r.a.createElement("img",{className:"brain",src:m.a})," ",r.a.createElement("br",null),"Coinbook")),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"footer-title",style:{backgroundColor:"#"}},r.a.createElement("a",{target:"_blank",href:"https://www.binance.com/en/register?ref=BC0PJGIM/",style:{color:"#FFFFFF"}},"Sign up to Binance and earn back 10% commission on all your trades")))),r.a.createElement("body",{className:"App-body"},r.a.createElement(O,{currency:this.state.currency,currency_symbols:this.state.currencySymbols,data:this.state}),r.a.createElement("div",{style:{width:500}}),r.a.createElement(F,{currencies:this.state.currencies,settings:this.handleSettingsClick,settingsOptions:this.state.settings,onClick:this.handleCurrencyClick,inputValue:this.state.currency}),r.a.createElement(j,{inputValue:this.state.value,onChange:this.onChange}),r.a.createElement(_,{coins:this.state,currency:this.state.currency,currency_symbols:this.state.currencySymbols,settings:this.state.settingsData,pageNumber:this.state.pageNumber,pageSettings:this.state.pageSettings,onClick:this.handlePageChange,searchValue:this.state.value,handleTableHeaderClick:this.handleTableHeaderClick,orderSelection:this.state.orderSelection,coinsOnMoonPay:this.state.coinsOnMoonPay})),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("div",{className:"donate"},r.a.createElement("p",{className:"footer-title"},"Donations \u2764\ufe0f"),r.a.createElement("p",{className:"footer-title"},"Bitcoin: 14Z6pUMZikKGcuBDxxSMHSmrhcUwrAHcNs"),r.a.createElement("p",{className:"footer-title"},"Ethereum: 0xe44400ea92cD298FA05D7a901362530EC2A51C34"),r.a.createElement("p",{className:"footer-title"},"BNB: bnb1udd4c7dsxrf2gjca9w6y3yau2wujnvxzd8vzla"),r.a.createElement("p",{className:"footer-title"},"XRP: rfsGFqq8ZHTEbUs3ibvbTVZN8LnvZNT2UY"),r.a.createElement("p",{className:"footer-title"},"Brave Verified Creator"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){e.exports=a.p+"static/media/logoheader.fbc90136.svg"},62:function(e,t,a){e.exports=a(189)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.9ca41dd1.chunk.js.map