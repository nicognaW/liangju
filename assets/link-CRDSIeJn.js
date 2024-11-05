import{r as a,j as v}from"./jsx-runtime-DR3ia65l.js";import{c as N}from"./utils-jM7Hu9J5.js";function R(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function x(...e){return t=>e.forEach(n=>R(n,t))}function D(...e){return a.useCallback(x(...e),e)}var w=a.forwardRef((e,t)=>{const{children:n,...r}=e,o=a.Children.toArray(n),s=o.find(L);if(s){const i=s.props.children,u=o.map(d=>d===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:d);return v.jsx(y,{...r,ref:t,children:a.isValidElement(i)?a.cloneElement(i,void 0,u):null})}return v.jsx(y,{...r,ref:t,children:n})});w.displayName="Slot";var y=a.forwardRef((e,t)=>{const{children:n,...r}=e;if(a.isValidElement(n)){const o=S(n);return a.cloneElement(n,{...O(r,n.props),ref:t?x(t,o):o})}return a.Children.count(n)>1?a.Children.only(null):null});y.displayName="SlotClone";var A=({children:e})=>v.jsx(v.Fragment,{children:e});function L(e){return a.isValidElement(e)&&e.type===A}function O(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...u)=>{s(...u),o(...u)}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function S(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function C(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=C(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function P(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=C(e))&&(r&&(r+=" "),r+=t);return r}const p=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,b=P,W=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return b(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:s}=t,i=Object.keys(o).map(l=>{const c=n==null?void 0:n[l],m=s==null?void 0:s[l];if(c===null)return null;const f=p(c)||p(m);return o[l][f]}),u=n&&Object.entries(n).reduce((l,c)=>{let[m,f]=c;return f===void 0||(l[m]=f),l},{}),d=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((l,c)=>{let{class:m,className:f,...E}=c;return Object.entries(E).every(V=>{let[g,h]=V;return Array.isArray(h)?h.includes({...s,...u}[g]):{...s,...u}[g]===h})?[...l,m,f]:l},[]);return b(e,i,d,n==null?void 0:n.class,n==null?void 0:n.className)},B=W("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),q=a.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?w:"button";return v.jsx(i,{className:N(B({variant:t,size:n,className:e})),ref:s,...o})});q.displayName="Button";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:i,...u},d)=>a.createElement("svg",{ref:d,...$,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:k("lucide",o),...u},[...i.map(([l,c])=>a.createElement(l,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const n=a.forwardRef(({className:r,...o},s)=>a.createElement(H,{ref:s,iconNode:t,className:k(`lucide-${M(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=j("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=j("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);export{q as B,I as E,K as L,w as S,j as a,A as b,W as c,x as d,D as u};
