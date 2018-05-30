!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===y&&O()}(e,n),t&&t(e,n)};var n,o=!0,r="a834fb94ee6eb67e9d3d",i=1e4,a={},s=[],c=[];function l(e){var t=M[e];if(!t)return j;var o=function(o){return t.hot.active?(M[o]?-1===M[o].parents.indexOf(e)&&M[o].parents.push(e):(s=[e],n=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),s=[]),j(o)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var i in j)Object.prototype.hasOwnProperty.call(j,i)&&"e"!==i&&Object.defineProperty(o,i,r(i));return o.e=function(e){return"ready"===u&&f("prepare"),y++,j.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(b[e]||D(e),0===y&&0===m&&O())}},o}var d=[],u="idle";function f(e){u=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var p,h,v,m=0,y=0,b={},_={},x={};function g(e){return+e+""===e?+e:e}function w(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,i=j.p+""+r+".hot-update.json";o.open("GET",i,!0),o.timeout=t,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;_={},b={},x=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return D(1),"prepare"===u&&0===y&&0===m&&O(),t});var t}function D(e){x[e]?(_[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=j.p+""+e+"."+r+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function O(){f("ready");var e=p;if(p=null,e)if(o)Promise.resolve().then(function(){return E(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(g(n));e.resolve(t)}}function E(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,o,i,c,l;function d(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var r=o.pop(),i=r.id,a=r.chain;if((c=M[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],d=M[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),p(n[l],[i])):(delete n[l],t.push(l),o.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var m={},y=[],b={},_=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var D;l=g(w);var O=!1,E=!1,B=!1,N="";switch((D=h[w]?d(l):{type:"disposed",moduleId:w}).chain&&(N="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+D.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(D),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(D),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(D),B=!0;break;default:throw new Error("Unexception type "+D.type)}if(O)return f("abort"),Promise.reject(O);if(E)for(l in b[l]=h[l],p(y,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,l)&&(m[l]||(m[l]=[]),p(m[l],D.outdatedDependencies[l]));B&&(p(y,[D.moduleId]),b[l]=_)}var I,C=[];for(o=0;o<y.length;o++)l=y[o],M[l]&&M[l].hot._selfAccepted&&C.push({module:l,errorHandler:M[l].hot._selfAccepted});f("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var P,S,k=y.slice();k.length>0;)if(l=k.pop(),c=M[l]){var R={},H=c.hot._disposeHandlers;for(i=0;i<H.length;i++)(n=H[i])(R);for(a[l]=R,c.hot.active=!1,delete M[l],delete m[l],i=0;i<c.children.length;i++){var A=M[c.children[i]];A&&((I=A.parents.indexOf(l))>=0&&A.parents.splice(I,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=M[l]))for(S=m[l],i=0;i<S.length;i++)P=S[i],(I=c.children.indexOf(P))>=0&&c.children.splice(I,1);for(l in f("apply"),r=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var U=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=M[l])){S=m[l];var T=[];for(o=0;o<S.length;o++)if(P=S[o],n=c.hot._acceptedDependencies[P]){if(-1!==T.indexOf(n))continue;T.push(n)}for(o=0;o<T.length;o++){n=T[o];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[o],error:e}),t.ignoreErrored||U||(U=e)}}}for(o=0;o<C.length;o++){var L=C[o];l=L.module,s=[l];try{j(l)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(y)}))}var M={};function j(t){if(M[t])return M[t].exports;var o=M[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:E,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(c=s,s=[],c),children:[]};return e[t].call(o.exports,o,o.exports,l(t)),o.l=!0,o.exports}j.m=e,j.c=M,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},j.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="",j.h=function(){return r},l("./test/entry.jsx")(j.s="./test/entry.jsx")}({"./node_modules/antd/es/index.js":function(e,t,n){e.exports=n("dll-reference staticMod_44a5a3dfc8b2c003c886")("./node_modules/antd/es/index.js")},"./node_modules/prop-types/index.js":function(e,t,n){e.exports=n("dll-reference staticMod_44a5a3dfc8b2c003c886")("./node_modules/prop-types/index.js")},"./node_modules/react-dom/index.js":function(e,t,n){e.exports=n("dll-reference staticMod_44a5a3dfc8b2c003c886")("./node_modules/react-dom/index.js")},"./node_modules/react/index.js":function(e,t,n){e.exports=n("dll-reference staticMod_44a5a3dfc8b2c003c886")("./node_modules/react/index.js")},"./src/videoDscBox.css":function(e,t,n){e.exports={videoDscBoxBoard:"src-videoDscBox__videoDscBoxBoard",videoDscBoxIn:"src-videoDscBox__videoDscBoxIn",preview:"src-videoDscBox__preview",previewProgresser:"src-videoDscBox__previewProgresser",videoDscBoxBot:"src-videoDscBox__videoDscBoxBot",videoDscBoxRightSm:"src-videoDscBox__videoDscBoxRightSm",videoDscBoxRightMd:"src-videoDscBox__videoDscBoxRightMd",infoIn:"src-videoDscBox__infoIn",infoName:"src-videoDscBox__infoName",infoD1:"src-videoDscBox__infoD1",infoVisitCount:"src-videoDscBox__infoVisitCount",infoDanmuCount:"src-videoDscBox__infoDanmuCount",infoAuthor:"src-videoDscBox__infoAuthor",infoBot:"src-videoDscBox__infoBot",infoRightSm:"src-videoDscBox__infoRightSm"}},"./src/videoDscBox.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("./node_modules/react/index.js")),r=s(n("./node_modules/prop-types/index.js")),i=n("./node_modules/antd/es/index.js"),a=s(n("./src/videoDscBox.css"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function f(e){return(f=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return u(o,(n=o=u(this,(e=f(t)).call.apply(e,[this].concat(i))),h(p(p(o)),"state",{previewOn:!1,percent:0,index:0}),n))}var n,r,s;return n=t,(r=[{key:"handlerMousemove",value:function(e){var t=e.nativeEvent.offsetX/this.refs.cover.scrollWidth;t=t>=1?.99:t;var n=Math.floor(t/(1/this.props.previewCount));n=(n=n<0?0:n)>this.props.previewCount?5:n,this.setState({previewOn:!0,percent:100*t,index:n})}},{key:"handlerMouseLeave",value:function(e){this.setState({previewOn:!1,percent:0,index:0})}},{key:"handlerMouseOver",value:function(e){this.props.onMouseOver&&this.props.onMouseOver.call(this,e)}},{key:"handlerMouseEnter",value:function(e){this.props.onMouseEnter&&this.props.onMouseEnter.call(this,e)}},{key:"handlerBoardMouseLeave",value:function(e){this.props.onMouseLeave&&this.props.onMouseLeave.call(this,e)}},{key:"render",value:function(){var e,t,n=this.state,r=this.props,s=r.data,c={className:a.default.videoDscBoxBoard+" "+(r.className||""),imgInClassName:a.default.videoDscBoxIn,imgBotClassName:a.default.videoDscBoxBot,imgRightSmClassName:a.default.videoDscBoxRightSm,imgRightMdClassName:a.default.videoDscBoxRightMd,previewClassName:a.default.preview,infoInClassName:a.default.infoIn,infoBotClassName:a.default.infoBot,infoRightSmClassName:a.default.infoRightSm,infoNameClassName:a.default.infoName,infoVisitCountClassName:a.default.infoVisitCount,infoAuthorClassName:a.default.infoAuthor,infoD1ClassName:a.default.infoD1};switch(r.infoType){case"in":t=c.imgInClassName,e=c.infoInClassName;break;case"bottom":t=c.imgBotClassName,e=c.infoBotClassName;break;case"right":t=c.imgRightSmClassName,e=c.infoRightSmClassName;break;default:t=c.imgInClassName,e=c.infoInClassName}var l,d=o.default.createElement("div",{className:e},o.default.createElement("span",{className:a.default.infoName},s.name),s.D1?o.default.createElement("span",{className:a.default.infoD1},s.D1):null,o.default.createElement("span",{className:a.default.infoAuthor},s.author),s.D2?o.default.createElement("span",{className:a.default.infoD1},s.D1):null,s.D3?o.default.createElement("span",{className:a.default.infoD1},s.D1):null);if(this.props.preview){var u=r.preview&&n.previewOn,f=!(u&&!r.infoOpenWhenPreview),p=(r.data.resUrl||"")+"/"+n.index.toString()+r.suffix,h=o.default.createElement("div",{className:c.previewClassName,style:{backgroundImage:"url("+encodeURI(p)+")"}},o.default.createElement(i.Progress,{className:a.default.previewProgresser,showInfo:!1,percent:n.percent})),v=u?h:"",m=o.default.createElement("a",{ref:"cover",title:r.data.name,href:r.data.url,target:"_blank",onMouseLeave:this.handlerMouseLeave.bind(this),onMouseMove:this.handlerMousemove.bind(this),className:t,style:{backgroundImage:"url("+encodeURI(r.data.coverUrl)+")"}},v);l=o.default.createElement("div",{onMouseEnter:this.handlerMouseEnter.bind(this),onMouseLeave:this.handlerBoardMouseLeave.bind(this),onMouseOver:this.handlerMouseOver.bind(this),className:c.className,style:Object.assign({position:"relative"},this.props.style)},this.props.prefix?this.props.prefix:void 0,this.props.displayImage?m:null,f?r.customInfo?r.customInfo.apply(this):d:null)}else{m=o.default.createElement("a",{ref:"cover",title:r.data.name,href:r.data.url,target:"_blank",onMouseLeave:this.handlerMouseLeave.bind(this),onMouseMove:this.handlerMousemove.bind(this),className:t,resurl:r.data.resUrl,style:{backgroundImage:"url("+encodeURI(r.data.coverUrl)+")"}});l=o.default.createElement("div",{onMouseEnter:this.handlerMouseEnter.bind(this),onMouseLeave:this.handlerBoardMouseLeave.bind(this),onMouseOver:this.handlerMouseOver.bind(this),className:c.className,style:Object.assign({position:"relative"},this.props.style)},this.props.prefix?this.props.prefix:void 0,this.props.displayImage?m:null,r.customInfo?r.customInfo.apply(this):d)}return l}}])&&d(n.prototype,r),s&&d(n,s),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");l(e.prototype,t&&t.prototype),t&&l(e,t)}(t,e),t}(o.default.Component);t.default=v,h(v,"proptypes",{data:r.default.object.isRequired,prefix:r.default.node,infoType:r.default.string,display:r.default.object.isRequired,preview:r.default.bool.isRequired,infoOpenWhenPreview:r.default.bool.isRequired,onMouseOver:r.default.func,displayImage:r.default.bool,animBorder:r.default.bool,previewCount:r.default.number,suffix:r.default.string}),h(v,"defaultProps",{data:null,name:null,suffix:".jpg",describe:null,customInfo:null,author:null,visitCount:null,danmuCount:null,imageLink:!0,infoType:"in",coverurl:"",preview:!0,infoOpenWhenPreview:!1,previewCount:6,displayImage:!0,animBorder:!1,display:{name:!0,visitCount:!0}})},"./test/entry.jsx":function(e,t,n){"use strict";var o=s(n("./node_modules/react/index.js")),r=s(n("./node_modules/react-dom/index.js")),i=s(n("./src/videoDscBox.tsx")),a=n("./node_modules/antd/es/index.js");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function f(e){return(f=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=a.Select.Option,v=function(e){function t(){var e,n,o,r,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return u(o,(n=o=u(this,(e=f(t)).call.apply(e,[this].concat(c))),r=p(p(o)),a={infoType:"in",infoOpenWhenPreview:!1},(i="state")in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,n))}var n,r,s;return n=t,(r=[{key:"render",value:function(){var e=this,t={coverUrl:"./resource/res1/cover.jpg",resUrl:"./resource/res1",name:"视频1",author:o.default.createElement("a",{href:""},"作者1"),D1:"简介：简介简介简介简介简介简介简介"},n={coverUrl:"./resource/res2/cover.jpg",resUrl:"./resource/res2",name:"视频2",author:o.default.createElement("a",{href:""},"作者2"),D1:"简介：简介简介简介简介简介简介简介"},r=this.state,s=(this.props,{float:"left",margin:"0px 10px 5px 0px"});return o.default.createElement("div",{style:{padding:"10px 0px"}},o.default.createElement("div",{key:"video",style:{width:360,margin:"0px auto"},className:"clearfix"},o.default.createElement(i.default,{infoOpenWhenPreview:r.infoOpenWhenPreview,style:s,infoType:r.infoType,data:t}),o.default.createElement(i.default,{infoOpenWhenPreview:r.infoOpenWhenPreview,style:s,infoType:r.infoType,data:n})),o.default.createElement("div",{key:"select"},o.default.createElement("label",null,"infoType:"),o.default.createElement(a.Select,{style:{width:200},defaultValue:"in",onChange:function(t){var n=!("in"==t);e.setState({infoType:t,infoOpenWhenPreview:n})}},o.default.createElement(h,{value:"in"},"in"),o.default.createElement(h,{value:"bottom"},"bottom"),o.default.createElement(h,{value:"right"},"rightSm"))))}}])&&d(n.prototype,r),s&&d(n,s),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");l(e.prototype,t&&t.prototype),t&&l(e,t)}(t,e),t}(o.default.Component);window.addEventListener("load",function(){r.default.render(o.default.createElement(v,null),window.document.getElementById("approot"))})},"dll-reference staticMod_44a5a3dfc8b2c003c886":function(e,t){e.exports=staticMod_44a5a3dfc8b2c003c886}});
//# sourceMappingURL=test.js.map