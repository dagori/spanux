webpackJsonp([3],{"8UmN":function(t,e,r){var i=r("Gde4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("3e1af956",i,!1,{sourceMap:!1})},AIuP:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("E9Ro"),o=r("S4re"),s=!1;var a=function(t){s||r("8UmN")},l=r("VU/8")(i.a,o.a,!1,a,null,null);l.options.__file="pages\\blog.vue",e.default=l.exports},E9Ro:function(t,e,r){"use strict";var i=r("Xxa5"),o=r.n(i),s=r("exGp"),a=r.n(s);e.a={data:function(){return{posts:null,currentPost:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=a()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("https://www.mocky.io/v2/5b6f4b17310000ab14781ad1");case 2:e=t.sent,this.posts=e,this.currentPost=e[0];case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},Gde4:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,'.container__blog{height:100%}.button-list{display:-webkit-box;display:-ms-flexbox;display:flex}.button-list__button{background-color:blue;color:#fff;font-size:80%;border:none;border-top-right-radius:10px;border-top-left-radius:10px;height:minmax(2em,auto);width:auto;padding:3px;-webkit-transition:-webkit-transform,-webkit-box-shadow;transition:-webkit-transform,-webkit-box-shadow;transition:transform,box-shadow;transition:transform,box-shadow,-webkit-transform,-webkit-box-shadow;-webkit-transition-delay:0s,-.5s;transition-delay:0s,-.5s;word-wrap:break-word}.button-list__button:nth-of-type(0n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="0" /></filter></svg>#filter\');-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}.button-list__button:nth-of-type(1n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="15" /></filter></svg>#filter\');-webkit-filter:hue-rotate(15deg);filter:hue-rotate(15deg)}.button-list__button:nth-of-type(2n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="30" /></filter></svg>#filter\');-webkit-filter:hue-rotate(30deg);filter:hue-rotate(30deg)}.button-list__button:nth-of-type(3n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="45" /></filter></svg>#filter\');-webkit-filter:hue-rotate(45deg);filter:hue-rotate(45deg)}.button-list__button:nth-of-type(4n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="60" /></filter></svg>#filter\');-webkit-filter:hue-rotate(60deg);filter:hue-rotate(60deg)}.button-list__button:nth-of-type(5n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="75" /></filter></svg>#filter\');-webkit-filter:hue-rotate(75deg);filter:hue-rotate(75deg)}.button-list__button:nth-of-type(6n){filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="90" /></filter></svg>#filter\');-webkit-filter:hue-rotate(90deg);filter:hue-rotate(90deg)}.button-list__button.active{-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 10px 0 0 blue;box-shadow:0 10px 0 0 blue}.post{width:100%;text-align:center;padding:0 10px;margin:0 auto;display:grid;grid-column-gap:10px;text-align:justify;background:#d3d3d3}.post__image{width:100%;height:auto;-ms-flex-item-align:stretch;align-self:stretch;-o-object-fit:cover;object-fit:cover;margin-top:5px}@media (min-width:600px){.button-list__button{font-size:100%}.post{grid-template-columns:1fr 300px;grid-template-rows:30px 1fr}.post__image{grid-row:1/3;grid-column:2/3}}@media (min-width:990px){.post{grid-template-columns:1fr 500px;border-bottom-left-radius:10px}}',""])},S4re:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container__blog"},[r("div",{staticClass:"button-list"},t._l(t.posts,function(e){return r("button",{key:e.id,class:["button-list__button",{active:e==t.currentPost}],attrs:{type:"button"},on:{click:function(r){t.currentPost=e}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),t.currentPost?r("div",{staticClass:"post",class:["post__item"]},[r("h2",{staticClass:"post__title"},[t._v(t._s(t.currentPost.title))]),r("div",{staticClass:"post__content"},[t._v(t._s(t.currentPost.content))]),r("img",{staticClass:"post__image",attrs:{src:t.currentPost.photo[0]}})]):t._e()])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o}});