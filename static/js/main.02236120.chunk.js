(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(34)},31:function(e,n,t){},32:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(10),i=t.n(a),c=t(5),s=t(13),l=t(2),u=t(14),d=(t(31),t(15)),h=t(16),f=t(18),g=t(17),b=t(19),p=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},E=function(e){var n=e.robots;return r.a.createElement("div",null,n.map(function(e,t){return r.a.createElement(p,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},m=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=(t(32),function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobot()}},{key:"render",value:function(){var e=this.props,n=e.searchfield,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(m,{searchChange:t}),r.a.createElement(v,null,r.a.createElement(E,{robots:i})))}}]),n}(o.Component)),O=Object(c.b)(function(e){return{searchfield:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobot:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(w),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(33);var S={searchField:""},j={isPending:!1,robots:[],error:""},C=Object(u.createLogger)(),_=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),N=Object(l.d)(_,Object(l.a)(s.a,C));i.a.render(r.a.createElement(c.a,{store:N},r.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");R?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.02236120.chunk.js.map