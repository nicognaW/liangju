import{r as i,j as m}from"./jsx-runtime-DR3ia65l.js";import{c as x}from"./utils-jM7Hu9J5.js";function R(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function w(...e){return t=>e.forEach(r=>R(r,t))}function D(...e){return i.useCallback(w(...e),e)}var C=i.forwardRef((e,t)=>{const{children:r,...n}=e,o=i.Children.toArray(r),s=o.find(L);if(s){const a=s.props.children,u=o.map(c=>c===s?i.Children.count(a)>1?i.Children.only(null):i.isValidElement(a)?a.props.children:null:c);return m.jsx(g,{...n,ref:t,children:i.isValidElement(a)?i.cloneElement(a,void 0,u):null})}return m.jsx(g,{...n,ref:t,children:r})});C.displayName="Slot";var g=i.forwardRef((e,t)=>{const{children:r,...n}=e;if(i.isValidElement(r)){const o=S(r);return i.cloneElement(r,{...O(n,r.props),ref:t?w(t,o):o})}return i.Children.count(r)>1?i.Children.only(null):null});g.displayName="SlotClone";var A=({children:e})=>m.jsx(m.Fragment,{children:e});function L(e){return i.isValidElement(e)&&e.type===A}function O(e,t){const r={...t};for(const n in t){const o=e[n],s=t[n];/^on[A-Z]/.test(n)?o&&s?r[n]=(...u)=>{s(...u),o(...u)}:o&&(r[n]=o):n==="style"?r[n]={...o,...s}:n==="className"&&(r[n]=[o,s].filter(Boolean).join(" "))}return{...e,...r}}function S(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function k(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=k(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function P(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=k(e))&&(n&&(n+=" "),n+=t);return n}const y=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,b=P,W=(e,t)=>r=>{var n;if((t==null?void 0:t.variants)==null)return b(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(l=>{const d=r==null?void 0:r[l],v=s==null?void 0:s[l];if(d===null)return null;const f=y(d)||y(v);return o[l][f]}),u=r&&Object.entries(r).reduce((l,d)=>{let[v,f]=d;return f===void 0||(l[v]=f),l},{}),c=t==null||(n=t.compoundVariants)===null||n===void 0?void 0:n.reduce((l,d)=>{let{class:v,className:f,...N}=d;return Object.entries(N).every(V=>{let[h,p]=V;return Array.isArray(p)?p.includes({...s,...u}[h]):{...s,...u}[h]===p})?[...l,v,f]:l},[]);return b(e,a,c,r==null?void 0:r.class,r==null?void 0:r.className)},B=W("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),q=i.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...o},s)=>{const a=n?C:"button";return m.jsx(a,{className:x(B({variant:t,size:r,className:e})),ref:s,...o})});q.displayName="Button";const I=i.forwardRef(({className:e,type:t,...r},n)=>m.jsx("input",{type:t,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...r}));I.displayName="Input";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:s,iconNode:a,...u},c)=>i.createElement("svg",{ref:c,...$,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:j("lucide",o),...u},[...a.map(([l,d])=>i.createElement(l,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(e,t)=>{const r=i.forwardRef(({className:n,...o},s)=>i.createElement(H,{ref:s,iconNode:t,className:j(`lucide-${M(e)}`,n),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=E("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=E("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);export{q as B,K as E,I,Z as L,C as S,E as a,A as b,W as c,w as d,D as u};