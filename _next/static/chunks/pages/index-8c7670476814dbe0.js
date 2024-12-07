(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6887)}])},627:(e,t)=>{"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_HMR_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return a},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n}});let u="refresh",o="navigate",l="restore",f="server-patch",c="prefetch",i="hmr-refresh",a="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(n||(n={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(7677),u=n(4848),o=r._(n(6540)),l=n(6847),f=n(7785),c=n(2772),i=n(1278),a=n(6185),s=n(7644),d=n(9258),p=n(6334),h=n(5157),b=n(296),y=n(627),_=n(1903),v=new Set;function g(e,t,n,r,u,o){if(o||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck&&!o){let u=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(u))return;v.add(u)}(async()=>o?e.prefetch(t,u):e.prefetch(t,n,r))().catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let O=o.default.forwardRef(function(e,t){let n,r;let{href:c,as:v,children:O,prefetch:m=null,passHref:E,replace:C,shallow:P,scroll:x,locale:M,onClick:R,onMouseEnter:T,onTouchStart:k,legacyBehavior:A=!1,...I}=e;n=O,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,u.jsx)("a",{children:n}));let N=o.default.useContext(s.RouterContext),S=o.default.useContext(d.AppRouterContext),L=null!=N?N:S,w=!N,U=!1!==m,D=null===m?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:H,as:K}=o.default.useMemo(()=>{if(!N){let e=j(c);return{href:e,as:v?j(v):e}}let[e,t]=(0,l.resolveHref)(N,c,!0);return{href:e,as:v?(0,l.resolveHref)(N,v):t||e}},[N,c,v]),F=o.default.useRef(H),V=o.default.useRef(K);A&&(r=o.default.Children.only(n));let X=A?r&&"object"==typeof r&&r.ref:t,[q,z,B]=(0,p.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(V.current!==K||F.current!==H)&&(B(),V.current=K,F.current=H),q(e)},[K,H,B,q]),Y=(0,_.useMergedRef)(G,X);o.default.useEffect(()=>{L&&z&&U&&g(L,H,K,{locale:M},{kind:D},w)},[K,H,z,M,U,null==N?void 0:N.locale,L,w,D]);let J={ref:Y,onClick(e){A||"function"!=typeof R||R(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,u,l,c,i,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==c||c;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:l,locale:i,scroll:e}):t[u?"replace":"push"](r||n,{scroll:e})};a?o.default.startTransition(d):d()}(e,L,H,K,C,P,x,M,w)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(U||!w)&&g(L,H,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:D},w)},onTouchStart:function(e){A||"function"!=typeof k||k(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(U||!w)&&g(L,H,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:D},w)}};if((0,i.isAbsoluteUrl)(K))J.href=K;else if(!A||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);J.href=t||(0,b.addBasePath)((0,a.addLocale)(K,e,null==N?void 0:N.defaultLocale))}return A?o.default.cloneElement(r,J):(0,u.jsx)("a",{...I,...J,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(6540),u=n(4959),o="function"==typeof IntersectionObserver,l=new Map,f=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!o,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(i||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:u,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let u=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:u},f.push(n),l.set(n,t),t}(n);return o.set(e,t),u.observe(e),function(){if(o.delete(e),u.unobserve(e),0===o.size){u.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,u.requestIdleCallback)(()=>s(!0));return()=>(0,u.cancelIdleCallback)(e)}},[i,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let r=n(6540);function u(e,t){let n=(0,r.useRef)(()=>{}),u=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),u.current()):(n.current=o(e,r),u.current=o(t,r))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6887:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(4848),u=n(3368),o=n.n(u),l=n(1106),f=n.n(l);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"3D Scene"}),(0,r.jsx)("meta",{name:"description",content:"Interactive 3D scene with dynamic lighting"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-center",children:(0,r.jsx)(f(),{href:"/page3",className:"text-2xl font-bold hover:text-blue-500 transition-colors",children:"Enter 3D Scene"})})]})}},3368:(e,t,n)=>{e.exports=n(6085)},1106:(e,t,n)=>{e.exports=n(6397)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2022)),_N_E=e.O()}]);