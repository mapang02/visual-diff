(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}})();var Z,w,Re,P,Le,qe,ne,We,de,te,oe,Ye,U={},Be=[],tn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pe=Array.isArray;function O(n,e){for(var t in e)n[t]=e[t];return n}function he(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function on(n,e,t){var o,l,r,u={};for(r in e)r=="key"?o=e[r]:r=="ref"?l=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?Z.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)u[r]===void 0&&(u[r]=n.defaultProps[r]);return q(n,u,o,l,null)}function q(n,e,t,o,l){var r={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++Re,__i:-1,__u:0};return l==null&&w.vnode!=null&&w.vnode(r),r}function Q(n){return n.children}function W(n,e){this.props=n,this.context=e}function A(n,e){if(e==null)return n.__?A(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?A(n):null}function Je(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Je(n)}}function re(n){(!n.__d&&(n.__d=!0)&&P.push(n)&&!B.__r++||Le!==w.debounceRendering)&&((Le=w.debounceRendering)||qe)(B)}function B(){var n,e,t,o,l,r,u,_;for(P.sort(ne);n=P.shift();)n.__d&&(e=P.length,o=void 0,r=(l=(t=n).__v).__e,u=[],_=[],t.__P&&((o=O({},l)).__v=l.__v+1,w.vnode&&w.vnode(o),ve(t.__P,o,l,t.__n,t.__P.namespaceURI,32&l.__u?[r]:null,u,r??A(l),!!(32&l.__u),_),o.__v=l.__v,o.__.__k[o.__i]=o,Ze(u,o,_),o.__e!=r&&Je(o)),P.length>e&&P.sort(ne));B.__r=0}function Xe(n,e,t,o,l,r,u,_,a,s,p){var i,v,h,y,L,c,m=o&&o.__k||Be,f=e.length;for(a=rn(t,e,m,a,f),i=0;i<f;i++)(h=t.__k[i])!=null&&(v=h.__i===-1?U:m[h.__i]||U,h.__i=i,c=ve(n,h,v,l,r,u,_,a,s,p),y=h.__e,h.ref&&v.ref!=h.ref&&(v.ref&&me(v.ref,null,h),p.push(h.ref,h.__c||y,h)),L==null&&y!=null&&(L=y),4&h.__u||v.__k===h.__k?a=Ge(h,a,n):typeof h.type=="function"&&c!==void 0?a=c:y&&(a=y.nextSibling),h.__u&=-7);return t.__e=L,a}function rn(n,e,t,o,l){var r,u,_,a,s,p=t.length,i=p,v=0;for(n.__k=new Array(l),r=0;r<l;r++)(u=e[r])!=null&&typeof u!="boolean"&&typeof u!="function"?(a=r+v,(u=n.__k[r]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?q(null,u,null,null,null):pe(u)?q(Q,{children:u},null,null,null):u.constructor===void 0&&u.__b>0?q(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=n,u.__b=n.__b+1,_=null,(s=u.__i=ln(u,t,a,i))!==-1&&(i--,(_=t[s])&&(_.__u|=2)),_==null||_.__v===null?(s==-1&&v--,typeof u.type!="function"&&(u.__u|=4)):s!=a&&(s==a-1?v--:s==a+1?v++:(s>a?v--:v++,u.__u|=4))):n.__k[r]=null;if(i)for(r=0;r<p;r++)(_=t[r])!=null&&!(2&_.__u)&&(_.__e==o&&(o=A(_)),Qe(_,_));return o}function Ge(n,e,t){var o,l;if(typeof n.type=="function"){for(o=n.__k,l=0;o&&l<o.length;l++)o[l]&&(o[l].__=n,e=Ge(o[l],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=A(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ln(n,e,t,o){var l,r,u=n.key,_=n.type,a=e[t];if(a===null||a&&u==a.key&&_===a.type&&!(2&a.__u))return t;if(o>(a!=null&&!(2&a.__u)?1:0))for(l=t-1,r=t+1;l>=0||r<e.length;){if(l>=0){if((a=e[l])&&!(2&a.__u)&&u==a.key&&_===a.type)return l;l--}if(r<e.length){if((a=e[r])&&!(2&a.__u)&&u==a.key&&_===a.type)return r;r++}}return-1}function xe(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||tn.test(e)?t:t+"px"}function F(n,e,t,o,l){var r;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||xe(n.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||xe(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(We,"$1")),e=e.toLowerCase()in n||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?o?t.u=o.u:(t.u=de,n.addEventListener(e,r?oe:te,r)):n.removeEventListener(e,r?oe:te,r);else{if(l=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Te(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=de++;else if(e.t<t.u)return;return t(w.event?w.event(e):e)}}}function ve(n,e,t,o,l,r,u,_,a,s){var p,i,v,h,y,L,c,m,f,x,g,E,k,I,$,S,b,N=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(a=!!(32&t.__u),r=[_=e.__e=t.__e]),(p=w.__b)&&p(e);e:if(typeof N=="function")try{if(m=e.props,f="prototype"in N&&N.prototype.render,x=(p=N.contextType)&&o[p.__c],g=p?x?x.props.value:p.__:o,t.__c?c=(i=e.__c=t.__c).__=i.__E:(f?e.__c=i=new N(m,g):(e.__c=i=new W(m,g),i.constructor=N,i.render=_n),x&&x.sub(i),i.props=m,i.state||(i.state={}),i.context=g,i.__n=o,v=i.__d=!0,i.__h=[],i._sb=[]),f&&i.__s==null&&(i.__s=i.state),f&&N.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=O({},i.__s)),O(i.__s,N.getDerivedStateFromProps(m,i.__s))),h=i.props,y=i.state,i.__v=e,v)f&&N.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),f&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(f&&N.getDerivedStateFromProps==null&&m!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,g),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,g)===!1||e.__v==t.__v)){for(e.__v!=t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(M){M&&(M.__=e)}),E=0;E<i._sb.length;E++)i.__h.push(i._sb[E]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,g),f&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,y,L)})}if(i.context=g,i.props=m,i.__P=n,i.__e=!1,k=w.__r,I=0,f){for(i.state=i.__s,i.__d=!1,k&&k(e),p=i.render(i.props,i.state,i.context),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[]}else do i.__d=!1,k&&k(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++I<25);i.state=i.__s,i.getChildContext!=null&&(o=O(O({},o),i.getChildContext())),f&&!v&&i.getSnapshotBeforeUpdate!=null&&(L=i.getSnapshotBeforeUpdate(h,y)),_=Xe(n,pe(S=p!=null&&p.type===Q&&p.key==null?p.props.children:p)?S:[S],e,t,o,l,r,u,_,a,s),i.base=e.__e,e.__u&=-161,i.__h.length&&u.push(i),c&&(i.__E=i.__=null)}catch(M){if(e.__v=null,a||r!=null)if(M.then){for(e.__u|=a?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;r[r.indexOf(_)]=null,e.__e=_}else for(b=r.length;b--;)he(r[b]);else e.__e=t.__e,e.__k=t.__k;w.__e(M,e,t)}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):_=e.__e=un(t.__e,e,t,o,l,r,u,a,s);return(p=w.diffed)&&p(e),128&e.__u?void 0:_}function Ze(n,e,t){for(var o=0;o<t.length;o++)me(t[o],t[++o],t[++o]);w.__c&&w.__c(e,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(r){r.call(l)})}catch(r){w.__e(r,l.__v)}})}function un(n,e,t,o,l,r,u,_,a){var s,p,i,v,h,y,L,c=t.props,m=e.props,f=e.type;if(f=="svg"?l="http://www.w3.org/2000/svg":f=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),r!=null){for(s=0;s<r.length;s++)if((h=r[s])&&"setAttribute"in h==!!f&&(f?h.localName==f:h.nodeType==3)){n=h,r[s]=null;break}}if(n==null){if(f==null)return document.createTextNode(m);n=document.createElementNS(l,f,m.is&&m),_&&(w.__m&&w.__m(e,r),_=!1),r=null}if(f===null)c===m||_&&n.data===m||(n.data=m);else{if(r=r&&Z.call(n.childNodes),c=t.props||U,!_&&r!=null)for(c={},s=0;s<n.attributes.length;s++)c[(h=n.attributes[s]).name]=h.value;for(s in c)if(h=c[s],s!="children"){if(s=="dangerouslySetInnerHTML")i=h;else if(!(s in m)){if(s=="value"&&"defaultValue"in m||s=="checked"&&"defaultChecked"in m)continue;F(n,s,null,h,l)}}for(s in m)h=m[s],s=="children"?v=h:s=="dangerouslySetInnerHTML"?p=h:s=="value"?y=h:s=="checked"?L=h:_&&typeof h!="function"||c[s]===h||F(n,s,h,c[s],l);if(p)_||i&&(p.__html===i.__html||p.__html===n.innerHTML)||(n.innerHTML=p.__html),e.__k=[];else if(i&&(n.innerHTML=""),Xe(n,pe(v)?v:[v],e,t,o,f=="foreignObject"?"http://www.w3.org/1999/xhtml":l,r,u,r?r[0]:t.__k&&A(t,0),_,a),r!=null)for(s=r.length;s--;)he(r[s]);_||(s="value",f=="progress"&&y==null?n.removeAttribute("value"):y!==void 0&&(y!==n[s]||f=="progress"&&!y||f=="option"&&y!==c[s])&&F(n,s,y,c[s],l),s="checked",L!==void 0&&L!==n[s]&&F(n,s,L,c[s],l))}return n}function me(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(l){w.__e(l,t)}}function Qe(n,e,t){var o,l;if(w.unmount&&w.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||me(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){w.__e(r,e)}o.base=o.__P=null}if(o=n.__k)for(l=0;l<o.length;l++)o[l]&&Qe(o[l],e,t||typeof n.type!="function");t||he(n.__e),n.__c=n.__=n.__e=void 0}function _n(n,e,t){return this.constructor(n,t)}function sn(n,e,t){var o,l,r,u;e==document&&(e=document.documentElement),w.__&&w.__(n,e),l=(o=typeof t=="function")?null:e.__k,r=[],u=[],ve(e,n=e.__k=on(Q,null,[n]),l||U,U,e.namespaceURI,l?null:e.firstChild?Z.call(e.childNodes):null,r,l?l.__e:e.firstChild,o,u),Ze(r,n,u)}function je(n,e){var t={__c:e="__cC"+Ye++,__:n,Consumer:function(o,l){return o.children(l)},Provider:function(o){var l,r;return this.getChildContext||(l=new Set,(r={})[e]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){l=null},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&l.forEach(function(_){_.__e=!0,re(_)})},this.sub=function(u){l.add(u);var _=u.componentWillUnmount;u.componentWillUnmount=function(){l&&l.delete(u),_&&_.call(u)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}Z=Be.slice,w={__e:function(n,e,t,o){for(var l,r,u;e=e.__;)if((l=e.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(n)),u=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(n,o||{}),u=l.__d),u)return l.__E=l}catch(_){n=_}throw n}},Re=0,W.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=O({},this.state),typeof n=="function"&&(n=n(O({},t),this.props)),n&&O(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),re(this))},W.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),re(this))},W.prototype.render=Q,P=[],qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne=function(n,e){return n.__v.__b-e.__v.__b},B.__r=0,We=/(PointerCapture)$|Capture$/i,de=0,te=Te(!1),oe=Te(!0),Ye=0;var an=0;function d(n,e,t,o,l,r){e||(e={});var u,_,a=e;if("ref"in a)for(_ in a={},e)_=="ref"?u=e[_]:a[_]=e[_];var s={type:n,props:a,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--an,__i:-1,__u:0,__source:l,__self:r};if(typeof n=="function"&&(u=n.defaultProps))for(_ in u)a[_]===void 0&&(a[_]=u[_]);return w.vnode&&w.vnode(s),s}var V,T,ee,Ce,le=0,Ke=[],C=w,Ee=C.__b,be=C.__r,ke=C.diffed,De=C.__c,Ie=C.unmount,$e=C.__;function ge(n,e){C.__h&&C.__h(T,n,le||e),le=0;var t=T.__H||(T.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ie(n){return le=1,cn(en,n)}function cn(n,e,t){var o=ge(V++,2);if(o.t=n,!o.__c&&(o.__=[en(void 0,e),function(_){var a=o.__N?o.__N[0]:o.__[0],s=o.t(a,_);a!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=T,!T.u)){var l=function(_,a,s){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(v){return!!v.__c});if(p.every(function(v){return!v.__N}))return!r||r.call(this,_,a,s);var i=o.__c.props!==_;return p.forEach(function(v){if(v.__N){var h=v.__[0];v.__=v.__N,v.__N=void 0,h!==v.__[0]&&(i=!0)}}),r&&r.call(this,_,a,s)||i};T.u=!0;var r=T.shouldComponentUpdate,u=T.componentWillUpdate;T.componentWillUpdate=function(_,a,s){if(this.__e){var p=r;r=void 0,l(_,a,s),r=p}u&&u.call(this,_,a,s)},T.shouldComponentUpdate=l}return o.__N||o.__}function fn(n,e){var t=ge(V++,7);return hn(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function J(n){var e=T.context[n.__c],t=ge(V++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(T)),e.props.value):n.__}function dn(){for(var n;n=Ke.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Y),n.__H.__h.forEach(ue),n.__H.__h=[]}catch(e){n.__H.__h=[],C.__e(e,n.__v)}}C.__b=function(n){T=null,Ee&&Ee(n)},C.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),$e&&$e(n,e)},C.__r=function(n){be&&be(n),V=0;var e=(T=n.__c).__H;e&&(ee===T?(e.__h=[],T.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(Y),e.__h.forEach(ue),e.__h=[],V=0)),ee=T},C.diffed=function(n){ke&&ke(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ke.push(e)!==1&&Ce===C.requestAnimationFrame||((Ce=C.requestAnimationFrame)||pn)(dn)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),ee=T=null},C.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Y),t.__h=t.__h.filter(function(o){return!o.__||ue(o)})}catch(o){e.some(function(l){l.__h&&(l.__h=[])}),e=[],C.__e(o,t.__v)}}),De&&De(n,e)},C.unmount=function(n){Ie&&Ie(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{Y(o)}catch(l){e=l}}),t.__H=void 0,e&&C.__e(e,t.__v))};var Ne=typeof requestAnimationFrame=="function";function pn(n){var e,t=function(){clearTimeout(o),Ne&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,100);Ne&&(e=requestAnimationFrame(t))}function Y(n){var e=T,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),T=e}function ue(n){var e=T;n.__c=n.__(),T=e}function hn(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function en(n,e){return typeof e=="function"?e(n):e}function D(){}D.prototype={diff:function(e,t){var o,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=l.callback;typeof l=="function"&&(r=l,l={});var u=this;function _(g){return g=u.postProcess(g,l),r?(setTimeout(function(){r(g)},0),!0):g}e=this.castInput(e,l),t=this.castInput(t,l),e=this.removeEmpty(this.tokenize(e,l)),t=this.removeEmpty(this.tokenize(t,l));var a=t.length,s=e.length,p=1,i=a+s;l.maxEditLength!=null&&(i=Math.min(i,l.maxEditLength));var v=(o=l.timeout)!==null&&o!==void 0?o:1/0,h=Date.now()+v,y=[{oldPos:-1,lastComponent:void 0}],L=this.extractCommon(y[0],t,e,0,l);if(y[0].oldPos+1>=s&&L+1>=a)return _(Se(u,y[0].lastComponent,t,e,u.useLongestToken));var c=-1/0,m=1/0;function f(){for(var g=Math.max(c,-p);g<=Math.min(m,p);g+=2){var E=void 0,k=y[g-1],I=y[g+1];k&&(y[g-1]=void 0);var $=!1;if(I){var S=I.oldPos-g;$=I&&0<=S&&S<a}var b=k&&k.oldPos+1<s;if(!$&&!b){y[g]=void 0;continue}if(!b||$&&k.oldPos<I.oldPos?E=u.addToPath(I,!0,!1,0,l):E=u.addToPath(k,!1,!0,1,l),L=u.extractCommon(E,t,e,g,l),E.oldPos+1>=s&&L+1>=a)return _(Se(u,E.lastComponent,t,e,u.useLongestToken));y[g]=E,E.oldPos+1>=s&&(m=Math.min(m,g-1)),L+1>=a&&(c=Math.max(c,g+1))}p++}if(r)(function g(){setTimeout(function(){if(p>i||Date.now()>h)return r();f()||g()},0)})();else for(;p<=i&&Date.now()<=h;){var x=f();if(x)return x}},addToPath:function(e,t,o,l,r){var u=e.lastComponent;return u&&!r.oneChangePerToken&&u.added===t&&u.removed===o?{oldPos:e.oldPos+l,lastComponent:{count:u.count+1,added:t,removed:o,previousComponent:u.previousComponent}}:{oldPos:e.oldPos+l,lastComponent:{count:1,added:t,removed:o,previousComponent:u}}},extractCommon:function(e,t,o,l,r){for(var u=t.length,_=o.length,a=e.oldPos,s=a-l,p=0;s+1<u&&a+1<_&&this.equals(o[a+1],t[s+1],r);)s++,a++,p++,r.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return p&&!r.oneChangePerToken&&(e.lastComponent={count:p,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=a,s},equals:function(e,t,o){return o.comparator?o.comparator(e,t):e===t||o.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],o=0;o<e.length;o++)e[o]&&t.push(e[o]);return t},castInput:function(e){return e},tokenize:function(e){return Array.from(e)},join:function(e){return e.join("")},postProcess:function(e){return e}};function Se(n,e,t,o,l){for(var r=[],u;e;)r.push(e),u=e.previousComponent,delete e.previousComponent,e=u;r.reverse();for(var _=0,a=r.length,s=0,p=0;_<a;_++){var i=r[_];if(i.removed)i.value=n.join(o.slice(p,p+i.count)),p+=i.count;else{if(!i.added&&l){var v=t.slice(s,s+i.count);v=v.map(function(h,y){var L=o[p+y];return L.length>h.length?L:h}),i.value=n.join(v)}else i.value=n.join(t.slice(s,s+i.count));s+=i.count,i.added||(p+=i.count)}}return r}var vn=new D;function mn(n,e,t){return vn.diff(n,e,t)}function Oe(n,e){var t;for(t=0;t<n.length&&t<e.length;t++)if(n[t]!=e[t])return n.slice(0,t);return n.slice(0,t)}function Pe(n,e){var t;if(!n||!e||n[n.length-1]!=e[e.length-1])return"";for(t=0;t<n.length&&t<e.length;t++)if(n[n.length-(t+1)]!=e[e.length-(t+1)])return n.slice(-t);return n.slice(-t)}function _e(n,e,t){if(n.slice(0,e.length)!=e)throw Error("string ".concat(JSON.stringify(n)," doesn't start with prefix ").concat(JSON.stringify(e),"; this is a bug"));return t+n.slice(e.length)}function se(n,e,t){if(!e)return n+t;if(n.slice(-e.length)!=e)throw Error("string ".concat(JSON.stringify(n)," doesn't end with suffix ").concat(JSON.stringify(e),"; this is a bug"));return n.slice(0,-e.length)+t}function H(n,e){return _e(n,e,"")}function R(n,e){return se(n,e,"")}function Ae(n,e){return e.slice(0,gn(n,e))}function gn(n,e){var t=0;n.length>e.length&&(t=n.length-e.length);var o=e.length;n.length<e.length&&(o=n.length);var l=Array(o),r=0;l[0]=0;for(var u=1;u<o;u++){for(e[u]==e[r]?l[u]=l[r]:l[u]=r;r>0&&e[u]!=e[r];)r=l[r];e[u]==e[r]&&r++}r=0;for(var _=t;_<n.length;_++){for(;r>0&&n[_]!=e[r];)r=l[r];n[_]==e[r]&&r++}return r}var X="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",yn=new RegExp("[".concat(X,"]+|\\s+|[^").concat(X,"]"),"ug"),j=new D;j.equals=function(n,e,t){return t.ignoreCase&&(n=n.toLowerCase(),e=e.toLowerCase()),n.trim()===e.trim()};j.tokenize=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t;if(e.intlSegmenter){if(e.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');t=Array.from(e.intlSegmenter.segment(n),function(r){return r.segment})}else t=n.match(yn)||[];var o=[],l=null;return t.forEach(function(r){/\s/.test(r)?l==null?o.push(r):o.push(o.pop()+r):/\s/.test(l)?o[o.length-1]==l?o.push(o.pop()+r):o.push(l+r):o.push(r),l=r}),o};j.join=function(n){return n.map(function(e,t){return t==0?e:e.replace(/^\s+/,"")}).join("")};j.postProcess=function(n,e){if(!n||e.oneChangePerToken)return n;var t=null,o=null,l=null;return n.forEach(function(r){r.added?o=r:r.removed?l=r:((o||l)&&Me(t,l,o,r),t=r,o=null,l=null)}),(o||l)&&Me(t,l,o,null),n};function Me(n,e,t,o){if(e&&t){var l=e.value.match(/^\s*/)[0],r=e.value.match(/\s*$/)[0],u=t.value.match(/^\s*/)[0],_=t.value.match(/\s*$/)[0];if(n){var a=Oe(l,u);n.value=se(n.value,u,a),e.value=H(e.value,a),t.value=H(t.value,a)}if(o){var s=Pe(r,_);o.value=_e(o.value,_,s),e.value=R(e.value,s),t.value=R(t.value,s)}}else if(t)n&&(t.value=t.value.replace(/^\s*/,"")),o&&(o.value=o.value.replace(/^\s*/,""));else if(n&&o){var p=o.value.match(/^\s*/)[0],i=e.value.match(/^\s*/)[0],v=e.value.match(/\s*$/)[0],h=Oe(p,i);e.value=H(e.value,h);var y=Pe(H(p,h),v);e.value=R(e.value,y),o.value=_e(o.value,p,y),n.value=se(n.value,p,p.slice(0,p.length-y.length))}else if(o){var L=o.value.match(/^\s*/)[0],c=e.value.match(/\s*$/)[0],m=Ae(c,L);e.value=R(e.value,m)}else if(n){var f=n.value.match(/\s*$/)[0],x=e.value.match(/^\s*/)[0],g=Ae(f,x);e.value=H(e.value,g)}}var nn=new D;nn.tokenize=function(n){var e=new RegExp("(\\r?\\n)|[".concat(X,"]+|[^\\S\\n\\r]+|[^").concat(X,"]"),"ug");return n.match(e)||[]};function wn(n,e,t){return nn.diff(n,e,t)}var K=new D;K.tokenize=function(n,e){e.stripTrailingCr&&(n=n.replace(/\r\n/g,`
`));var t=[],o=n.split(/(\n|\r\n)/);o[o.length-1]||o.pop();for(var l=0;l<o.length;l++){var r=o[l];l%2&&!e.newlineIsToken?t[t.length-1]+=r:t.push(r)}return t};K.equals=function(n,e,t){return t.ignoreWhitespace?((!t.newlineIsToken||!n.includes(`
`))&&(n=n.trim()),(!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(n.endsWith(`
`)&&(n=n.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),D.prototype.equals.call(this,n,e,t)};function Ln(n,e,t){return K.diff(n,e,t)}var xn=new D;xn.tokenize=function(n){return n.split(/(\S.+?[.!?])(?=\s+|$)/)};var Tn=new D;Tn.tokenize=function(n){return n.split(/([{}:;,]|\s+)/)};function ae(n){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(n)}var z=new D;z.useLongestToken=!0;z.tokenize=K.tokenize;z.castInput=function(n,e){var t=e.undefinedReplacement,o=e.stringifyReplacer,l=o===void 0?function(r,u){return typeof u>"u"?t:u}:o;return typeof n=="string"?n:JSON.stringify(ce(n,null,null,l),l,"  ")};z.equals=function(n,e,t){return D.prototype.equals.call(z,n.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"),t)};function ce(n,e,t,o,l){e=e||[],t=t||[],o&&(n=o(l,n));var r;for(r=0;r<e.length;r+=1)if(e[r]===n)return t[r];var u;if(Object.prototype.toString.call(n)==="[object Array]"){for(e.push(n),u=new Array(n.length),t.push(u),r=0;r<n.length;r+=1)u[r]=ce(n[r],e,t,o,l);return e.pop(),t.pop(),u}if(n&&n.toJSON&&(n=n.toJSON()),ae(n)==="object"&&n!==null){e.push(n),u={},t.push(u);var _=[],a;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&_.push(a);for(_.sort(),r=0;r<_.length;r+=1)a=_[r],u[a]=ce(n[a],e,t,o,a);e.pop(),t.pop()}else u=n;return u}var fe=new D;fe.tokenize=function(n){return n.slice()};fe.join=fe.removeEmpty=function(n){return n};const ye=je(null),we=je(null),Cn="bg-red-400/50",En="bg-green-400/50",He="",bn="table-cell text-left whitespace-pre-wrap bg-red-200/50",kn="table-cell text-left whitespace-pre-wrap bg-green-200/50",Ue="table-cell text-left whitespace-pre-wrap",Ve="table-cell text-left bg-gray-400/20",ze="p-0 bg-gray-200/50 hover:bg-gray-200/75",G="table-cell text-right pr-2";function Dn(){const{options:n}=J(ye),{inputState:e}=J(we),t=fn(()=>o(e.oldTextValue,e.newTextValue,n),[e.oldTextValue,e.newTextValue,n]);function o(l,r,u){const _=Ln(l,r,{newlineIsToken:!1,ignoreNewlineAtEof:!1});console.log(_);let a=[],s=[];const p={count:0,value:"",added:!1,removed:!1};_.forEach(c=>{let m=c.value.split(`
`);if(m.length>c.count&&m.pop(),c.removed)m.forEach(f=>{a.push({count:1,value:f,added:c.added,removed:c.removed})});else if(c.added)m.forEach(f=>{s.push({count:1,value:f,added:c.added,removed:c.removed})});else{for(;s.length>a.length;)a.push(p);for(;a.length>s.length;)s.push(p);m.forEach(f=>{a.push({count:1,value:f,added:c.added,removed:c.removed}),s.push({count:1,value:f,added:c.added,removed:c.removed})})}});for(let c=_.length-1;c>=0;c--)if(!_[c].added){_[c].value.endsWith(`
`)&&a.push({count:1,value:"",added:_[c].added,removed:_[c].removed});break}for(let c=_.length-1;c>=0;c--)if(!_[c].removed){_[c].value.endsWith(`
`)&&s.push({count:1,value:"",added:_[c].added,removed:_[c].removed});break}for(;s.length>a.length;)a.push(p);for(;a.length>s.length;)s.push(p);console.log("oLines:"),console.log(a),console.log("nLines:"),console.log(s);let i=[],v=[];for(let c=0;c<a.length;c++)if(a[c].count===0)i.push([]),v.push([s[c]]);else if(s[c].count===0)v.push([]),i.push([a[c]]);else if(!a[c].removed&&!s[c].added)i.push([a[c]]),v.push([s[c]]);else{let m;u.diffMode==="char"?m=mn(a[c].value,s[c].value):m=wn(a[c].value,s[c].value);let f=[],x=[];m.forEach(g=>{g.removed?f.push(g):(g.added||f.push(g),x.push(g))}),f.length===0&&f.push({count:0,value:"",added:!1,removed:!1}),x.length===0&&x.push({count:0,value:"",added:!1,removed:!1}),i.push(f),v.push(x)}console.log(i),console.log(v);let h=[],y=0,L=0;for(let c=0;c<i.length;c++){let m=Ve;i[c].length>0&&(m=bn,y+=1);let f=Ve;v[c].length>0&&(f=kn,L+=1),i[c].length===1&&!i[c][0].removed&&v[c].length===1&&!v[c][0].added&&(m=Ue,f=Ue);const x=i[c].map(b=>b.removed?d("span",{class:Cn,children:b.value}):d("span",{class:He,children:b.value})),g=v[c].map(b=>b.added?d("span",{class:En,children:b.value}):d("span",{class:He,children:b.value})),E=d("div",{class:m,children:x}),k=d("div",{class:f,children:g}),I=d("div",{class:G,children:x.length>0?y:""}),$=d("div",{class:G,children:g.length>0?L:""}),S=d("div",{class:"table-row",children:[I,E,$,k]});h.push(S)}if(u.collapseLines){let c=[],m={start:0,end:0};for(let f=h.length-1;f>=0;f--)m.end===0&&i[f].length===1&&!i[f][0].removed&&v[f].length===1&&!v[f][0].added&&(m.end=f+1),m.end>0&&(f===0||!(i[f-1].length===1&&!i[f-1][0].removed&&v[f-1].length===1&&!v[f-1][0].added))&&(m.start=f,c.push(m),m={start:0,end:0});console.log(c),c.forEach(({start:f,end:x})=>{if(x-f>1){const g=h.splice(f,x-f);console.log(g);const E=d(In,{oStartLineno:f,nStartLineno:f,collapsedLines:g});h.splice(f,0,E)}})}return h}return d("table",{class:"table-fixed w-full font-mono",children:[d("thead",{children:d("tr",{children:[d("th",{class:"w-16"}),d("th",{}),d("th",{class:"w-16"}),d("th",{})]})}),d("tbody",{children:t})]})}function In(n){const[e,t]=ie(!1);return e?d("div",{class:"table-row",title:"Click to hide unedited lines",onClick:()=>t(!1),children:d("td",{colspan:4,class:ze,children:d("table",{class:"table-fixed w-full",children:[d("thead",{children:d("tr",{children:[d("th",{class:"w-16"}),d("th",{}),d("th",{class:"w-16"}),d("th",{})]})}),d("tbody",{children:n.collapsedLines})]})})}):d("tr",{class:ze,title:"Click to show collapsed lines",onClick:()=>t(!0),children:[d("td",{class:G,children:"..."}),d("td",{children:`Lines ${n.oStartLineno} to ${n.oStartLineno+n.collapsedLines.length} collapsed`}),d("td",{class:G,children:"..."}),d("td",{children:`Lines ${n.nStartLineno} to ${n.nStartLineno+n.collapsedLines.length} collapsed`})]})}function $n(){const{options:n,setOptions:e}=J(ye);return d("fieldset",{class:"w-max border border-neutral-200 rounded p-2 m-auto text-left",children:[d("legend",{class:"text-center px-2 m-auto",children:"Options"}),d("div",{children:[d("label",{class:"text-left mx-2",children:"Diff level:"}),d("input",{type:"radio",id:"diff-mode-option-1",name:"diff-mode-option",onClick:()=>e({...n,diffMode:"word"}),checked:n.diffMode==="word"}),d("label",{class:"pl-0.5 pr-2",for:"diff-option-1",children:"Word"}),d("input",{type:"radio",id:"diff-mode-option-2",name:"diff-mode-option",onClick:()=>e({...n,diffMode:"char"})}),d("label",{class:"pl-0.5 pr-2",for:"diff-option-2",children:"Character"})]}),d("div",{children:[d("label",{class:"text-left mx-2",for:"collapse-option",children:"Collapse common lines:"}),d("input",{type:"checkbox",id:"collapse-option",name:"collapse-option",onClick:()=>e({...n,collapseLines:!n.collapseLines})})]})]})}const Fe="w-full border border-neutral-200 p-2 rounded font-mono resize-none";function Nn(){const{inputState:n,setInputState:e}=J(we),t=()=>{e({oldInput:n.newTextValue,newInput:n.oldTextValue,oldTextValue:n.newTextValue,newTextValue:n.oldTextValue})};return d("div",{class:"table table-fixed w-full",children:[d("div",{class:"grid grid-cols-[1fr_max-content_1fr] gap-x-2 gap-y-2 items-center",children:[d("div",{children:"Original text:"}),d("div",{}),d("div",{children:"Modified text:"}),d("textarea",{name:"old-text",class:Fe,onInput:o=>e({...n,oldInput:o.currentTarget.value}),value:n.oldInput}),d("button",{class:"h-max p-1",title:"Swap the two inputs",onClick:t,children:"⇄"}),d("textarea",{name:"new-text",class:Fe,onInput:o=>e({...n,newInput:o.currentTarget.value}),value:n.newInput})]}),d("button",{class:"my-2",onClick:()=>e({...n,oldTextValue:n.oldInput,newTextValue:n.newInput}),children:"Compute Diff"})]})}function Sn(){const n={diffMode:"word",collapseLines:!1},[e,t]=ie(n),[o,l]=ie({oldInput:"",newInput:"",oldTextValue:"",newTextValue:""}),r=d("div",{class:"h-[50svh] overflow-auto bg-gray-100/10 border border-neutral-200 rounded my-2 p-1",children:d(Dn,{})});return d(ye.Provider,{value:{options:e,setOptions:t},children:d(we.Provider,{value:{inputState:o,setInputState:l},children:[d($n,{}),d("div",{class:"m-4 max-h-svh",children:[o.oldTextValue===""&&o.newTextValue===""?d("div",{}):r,d(Nn,{})]})]})})}sn(d(Sn,{}),document.getElementById("app"));
