(function(t){function e(e){for(var r,a,u=e[0],s=e[1],p=e[2],c=0,h=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/english-word-game/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("English Word Game")])])],1),n("v-content",[n("v-textarea",{attrs:{label:"Input an English paragraph."},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("v-btn",{on:{click:function(e){return t.submitInput()}}},[t._v("Submit")]),n("br"),t._l(t.brokenInput,(function(e,r){return[n("v-chip",{key:"chip"+r+e,attrs:{outlined:""},on:{click:function(e){return t.clickChip(r)}}},[t._v("\n        "+t._s(e)+" \n      ")])]})),n("p",t._l(t.selected,(function(e,r){return n("span",{key:"given_answer"+r+e},[t._v("\n        "+t._s(e)+"\n      ")])})),0)],2)],1)},o=[],a={name:"App",data:()=>({input:"",answer:"",brokenInput:[],selected:[]}),methods:{shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},submitInput(){this.brokenInput=this.shuffle(this.input.split(" ")),this.answer=this.input,this.input=""},clickChip(t){this.selected.push(this.brokenInput.splice(t,1)[0]),this.selected.length==this.answer.split(" ").length&&(this.selected.join(" ")==this.answer?(alert("Congratulations, you got it right!"),this.initialize()):alert("Noo, you got it wrong! :("))},initialize(){this.input="",this.answer="",this.brokenInput=[],this.selected=[]},retry(){}}},u=a,s=n("2877"),p=n("6544"),l=n.n(p),c=n("7496"),h=n("40dc"),f=n("8336"),d=n("cc20"),b=n("a75b"),v=n("a844"),g=n("2a7f"),y=Object(s["a"])(u,i,o,!1,null,"dee58a5c",null),w=y.exports;l()(y,{VApp:c["a"],VAppBar:h["a"],VBtn:f["a"],VChip:d["a"],VContent:b["a"],VTextarea:v["a"],VToolbarTitle:g["a"]});var m=n("f309");r["a"].use(m["a"]);var _=new m["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:_,render:t=>t(w)}).$mount("#app")}});
//# sourceMappingURL=app.2eeb736e.js.map