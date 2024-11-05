import{$ as p,r as Y,j as h}from"./jsx-runtime-DR3ia65l.js";import{z as ae,Z as Mr,L as Pr}from"./dashboard.event-types._index-C7eVkSGZ.js";import{S as Br,B as Wr}from"./link-CRDSIeJn.js";import{c as Ee}from"./utils-jM7Hu9J5.js";import{L as qr}from"./label-CuPqp-vH.js";import{I as Ae}from"./input-DLkiGXq8.js";import{S as $r,a as Hr,b as Kr,c as Yr,d as Zr}from"./select-DVYPlfdE.js";import"./components-C3Ru3G6J.js";import"./index-DDXsr2-v.js";import"./index-Cb6loArw.js";import"./Combination-CprkIGHr.js";var _e=e=>e.type==="checkbox",se=e=>e instanceof Date,U=e=>e==null;const yr=e=>typeof e=="object";var D=e=>!U(e)&&!Array.isArray(e)&&yr(e)&&!se(e),mr=e=>D(e)&&e.target?_e(e.target)?e.target.checked:e.target.value:e,zr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,hr=(e,t)=>e.has(zr(t)),Gr=e=>{const t=e.constructor&&e.constructor.prototype;return D(t)&&t.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(r||D(e)))if(t=r?[]:{},!r&&!Gr(e))t=e;else for(const i in e)e.hasOwnProperty(i)&&(t[i]=O(e[i]));else return e;return t}var ke=e=>Array.isArray(e)?e.filter(Boolean):[],j=e=>e===void 0,d=(e,t,r)=>{if(!t||!D(e))return r;const i=ke(t.split(/[,[\].]+?/)).reduce((n,a)=>U(n)?n:n[a],e);return j(i)||i===e?j(e[t])?r:e[t]:i},B=e=>typeof e=="boolean",qe=e=>/^\w*$/.test(e),gr=e=>ke(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,t,r)=>{let i=-1;const n=qe(t)?[t]:gr(t),a=n.length,c=a-1;for(;++i<a;){const m=n[i];let F=r;if(i!==c){const S=e[m];F=D(S)||Array.isArray(S)?S:isNaN(+n[i+1])?{}:[]}if(m==="__proto__")return;e[m]=F,e=e[m]}return e};const pe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},vr=p.createContext(null),Ce=()=>p.useContext(vr),Jr=e=>{const{children:t,...r}=e;return p.createElement(vr.Provider,{value:r},t)};var xr=(e,t,r,i=!0)=>{const n={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const c=a;return t._proxyFormState[c]!==$.all&&(t._proxyFormState[c]=!i||$.all),r&&(r[c]=!0),e[c]}});return n},R=e=>D(e)&&!Object.keys(e).length,br=(e,t,r,i)=>{r(e);const{name:n,...a}=e;return R(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(c=>t[c]===(!i||$.all))},xe=e=>Array.isArray(e)?e:[e],_r=(e,t,r)=>!e||!t||e===t||xe(e).some(i=>i&&(r?i===t:i.startsWith(t)||t.startsWith(i)));function $e(e){const t=p.useRef(e);t.current=e,p.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Qr(e){const t=Ce(),{control:r=t.control,disabled:i,name:n,exact:a}=e||{},[c,m]=p.useState(r._formState),F=p.useRef(!0),S=p.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),x=p.useRef(n);return x.current=n,$e({disabled:i,next:v=>F.current&&_r(x.current,v.name,a)&&br(v,S.current,r._updateFormState)&&m({...r._formState,...v}),subject:r._subjects.state}),p.useEffect(()=>(F.current=!0,S.current.isValid&&r._updateValid(!0),()=>{F.current=!1}),[r]),xr(c,r,S.current,!1)}var K=e=>typeof e=="string",Fr=(e,t,r,i,n)=>K(e)?(i&&t.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(a=>(i&&t.watch.add(a),d(r,a))):(i&&(t.watchAll=!0),r);function Xr(e){const t=Ce(),{control:r=t.control,name:i,defaultValue:n,disabled:a,exact:c}=e||{},m=p.useRef(i);m.current=i,$e({disabled:a,subject:r._subjects.values,next:x=>{_r(m.current,x.name,c)&&S(O(Fr(m.current,r._names,x.values||r._formValues,!1,n)))}});const[F,S]=p.useState(r._getWatch(i,n));return p.useEffect(()=>r._removeUnmounted()),F}function et(e){const t=Ce(),{name:r,disabled:i,control:n=t.control,shouldUnregister:a}=e,c=hr(n._names.array,r),m=Xr({control:n,name:r,defaultValue:d(n._formValues,r,d(n._defaultValues,r,e.defaultValue)),exact:!0}),F=Qr({control:n,name:r,exact:!0}),S=p.useRef(n.register(r,{...e.rules,value:m,...B(e.disabled)?{disabled:e.disabled}:{}}));return p.useEffect(()=>{const x=n._options.shouldUnregister||a,v=(W,H)=>{const T=d(n._fields,W);T&&T._f&&(T._f.mount=H)};if(v(r,!0),x){const W=O(d(n._options.defaultValues,r));w(n._defaultValues,r,W),j(d(n._formValues,r))&&w(n._formValues,r,W)}return()=>{(c?x&&!n._state.action:x)?n.unregister(r):v(r,!1)}},[r,n,c,a]),p.useEffect(()=>{d(n._fields,r)&&n._updateDisabledField({disabled:i,fields:n._fields,name:r,value:d(n._fields,r)._f.value})},[i,r,n]),{field:{name:r,value:m,...B(i)||F.disabled?{disabled:F.disabled||i}:{},onChange:p.useCallback(x=>S.current.onChange({target:{value:mr(x),name:r},type:pe.CHANGE}),[r]),onBlur:p.useCallback(()=>S.current.onBlur({target:{value:d(n._formValues,r),name:r},type:pe.BLUR}),[r,n]),ref:p.useCallback(x=>{const v=d(n._fields,r);v&&x&&(v._f.ref={focus:()=>x.focus(),select:()=>x.select(),setCustomValidity:W=>x.setCustomValidity(W),reportValidity:()=>x.reportValidity()})},[n._fields,r])},formState:F,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(F.errors,r)},isDirty:{enumerable:!0,get:()=>!!d(F.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!d(F.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!d(F.validatingFields,r)},error:{enumerable:!0,get:()=>d(F.errors,r)}})}}const rt=e=>e.render(et(e));var Vr=(e,t,r,i,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:n||!0}}:{},sr=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),ir=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const be=(e,t,r,i)=>{for(const n of r||Object.keys(e)){const a=d(e,n);if(a){const{_f:c,...m}=a;if(c){if(c.refs&&c.refs[0]&&t(c.refs[0],n)&&!i)return!0;if(c.ref&&t(c.ref,c.name)&&!i)return!0;if(be(m,t))break}else if(D(m)&&be(m,t))break}}};var tt=(e,t,r)=>{const i=xe(d(e,r));return w(i,"root",t[r]),w(e,r,i),e},He=e=>e.type==="file",Q=e=>typeof e=="function",Se=e=>{if(!We)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},we=e=>K(e),Ke=e=>e.type==="radio",je=e=>e instanceof RegExp;const nr={value:!1,isValid:!1},ar={value:!0,isValid:!0};var Ar=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!j(e[0].attributes.value)?j(e[0].value)||e[0].value===""?ar:{value:e[0].value,isValid:!0}:ar:nr}return nr};const lr={isValid:!1,value:null};var wr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,lr):lr;function or(e,t,r="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||B(e)&&!e)return{type:r,message:we(e)?e:"",ref:t}}var le=e=>D(e)&&!je(e)?e:{value:e,message:""},ur=async(e,t,r,i,n)=>{const{ref:a,refs:c,required:m,maxLength:F,minLength:S,min:x,max:v,pattern:W,validate:H,name:T,valueAsNumber:Le,mount:Z,disabled:X}=e._f,V=d(t,T);if(!Z||X)return{};const z=c?c[0]:a,G=_=>{i&&z.reportValidity&&(z.setCustomValidity(B(_)?"":_||""),z.reportValidity())},E={},ie=Ke(a),Fe=_e(a),re=ie||Fe,ne=(Le||He(a))&&j(a.value)&&j(V)||Se(a)&&a.value===""||V===""||Array.isArray(V)&&!V.length,M=Vr.bind(null,T,r,E),Ve=(_,A,k,I=J.maxLength,q=J.minLength)=>{const P=_?A:k;E[T]={type:_?I:q,message:P,ref:a,...M(_?I:q,P)}};if(n?!Array.isArray(V)||!V.length:m&&(!re&&(ne||U(V))||B(V)&&!V||Fe&&!Ar(c).isValid||ie&&!wr(c).isValid)){const{value:_,message:A}=we(m)?{value:!!m,message:m}:le(m);if(_&&(E[T]={type:J.required,message:A,ref:z,...M(J.required,A)},!r))return G(A),E}if(!ne&&(!U(x)||!U(v))){let _,A;const k=le(v),I=le(x);if(!U(V)&&!isNaN(V)){const q=a.valueAsNumber||V&&+V;U(k.value)||(_=q>k.value),U(I.value)||(A=q<I.value)}else{const q=a.valueAsDate||new Date(V),P=me=>new Date(new Date().toDateString()+" "+me),fe=a.type=="time",ye=a.type=="week";K(k.value)&&V&&(_=fe?P(V)>P(k.value):ye?V>k.value:q>new Date(k.value)),K(I.value)&&V&&(A=fe?P(V)<P(I.value):ye?V<I.value:q<new Date(I.value))}if((_||A)&&(Ve(!!_,k.message,I.message,J.max,J.min),!r))return G(E[T].message),E}if((F||S)&&!ne&&(K(V)||n&&Array.isArray(V))){const _=le(F),A=le(S),k=!U(_.value)&&V.length>+_.value,I=!U(A.value)&&V.length<+A.value;if((k||I)&&(Ve(k,_.message,A.message),!r))return G(E[T].message),E}if(W&&!ne&&K(V)){const{value:_,message:A}=le(W);if(je(_)&&!V.match(_)&&(E[T]={type:J.pattern,message:A,ref:a,...M(J.pattern,A)},!r))return G(A),E}if(H){if(Q(H)){const _=await H(V,t),A=or(_,z);if(A&&(E[T]={...A,...M(J.validate,A.message)},!r))return G(A.message),E}else if(D(H)){let _={};for(const A in H){if(!R(_)&&!r)break;const k=or(await H[A](V,t),z,A);k&&(_={...k,...M(A,k.message)},G(k.message),r&&(E[T]=_))}if(!R(_)&&(E[T]={ref:z,..._},!r))return E}}return G(!0),E};function st(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=j(e)?i++:e[t[i++]];return e}function it(e){for(const t in e)if(e.hasOwnProperty(t)&&!j(e[t]))return!1;return!0}function C(e,t){const r=Array.isArray(t)?t:qe(t)?[t]:gr(t),i=r.length===1?e:st(e,r),n=r.length-1,a=r[n];return i&&delete i[a],n!==0&&(D(i)&&R(i)||Array.isArray(i)&&it(i))&&C(e,r.slice(0,-1)),e}var Re=()=>{let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}},Be=e=>U(e)||!yr(e);function ee(e,t){if(Be(e)||Be(t))return e===t;if(se(e)&&se(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const n of r){const a=e[n];if(!i.includes(n))return!1;if(n!=="ref"){const c=t[n];if(se(a)&&se(c)||D(a)&&D(c)||Array.isArray(a)&&Array.isArray(c)?!ee(a,c):a!==c)return!1}}return!0}var pr=e=>e.type==="select-multiple",nt=e=>Ke(e)||_e(e),Me=e=>Se(e)&&e.isConnected,Sr=e=>{for(const t in e)if(Q(e[t]))return!0;return!1};function De(e,t={}){const r=Array.isArray(e);if(D(e)||r)for(const i in e)Array.isArray(e[i])||D(e[i])&&!Sr(e[i])?(t[i]=Array.isArray(e[i])?[]:{},De(e[i],t[i])):U(e[i])||(t[i]=!0);return t}function jr(e,t,r){const i=Array.isArray(e);if(D(e)||i)for(const n in e)Array.isArray(e[n])||D(e[n])&&!Sr(e[n])?j(t)||Be(r[n])?r[n]=Array.isArray(e[n])?De(e[n],[]):{...De(e[n])}:jr(e[n],U(t)?{}:t[n],r[n]):r[n]=!ee(e[n],t[n]);return r}var he=(e,t)=>jr(e,t,De(t)),Dr=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>j(e)?e:t?e===""?NaN:e&&+e:r&&K(e)?new Date(e):i?i(e):e;function Pe(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return He(t)?t.files:Ke(t)?wr(e.refs).value:pr(t)?[...t.selectedOptions].map(({value:r})=>r):_e(t)?Ar(e.refs).value:Dr(j(t.value)?e.ref.value:t.value,e)}var at=(e,t,r,i)=>{const n={};for(const a of e){const c=d(t,a);c&&w(n,a,c._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:i}},ge=e=>j(e)?e:je(e)?e.source:D(e)?je(e.value)?e.value.source:e.value:e;const cr="AsyncFunction";var lt=e=>(!e||!e.validate)&&!!(Q(e.validate)&&e.validate.constructor.name===cr||D(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===cr)),ot=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dr(e,t,r){const i=d(e,r);if(i||qe(r))return{error:i,name:r};const n=r.split(".");for(;n.length;){const a=n.join("."),c=d(t,a),m=d(e,a);if(c&&!Array.isArray(c)&&r!==a)return{name:r};if(m&&m.type)return{name:a,error:m};n.pop()}return{name:r}}var ut=(e,t,r,i,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?i.isOnBlur:n.isOnBlur)?!e:(r?i.isOnChange:n.isOnChange)?e:!0,ct=(e,t)=>!ke(d(e,t)).length&&C(e,t);const dt={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function ft(e={}){let t={...dt,...e},r={submitCount:0,isDirty:!1,isLoading:Q(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},i={},n=D(t.defaultValues)||D(t.values)?O(t.defaultValues||t.values)||{}:{},a=t.shouldUnregister?{}:O(n),c={action:!1,mount:!1,watch:!1},m={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,S=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Re(),array:Re(),state:Re()},W=sr(t.mode),H=sr(t.reValidateMode),T=t.criteriaMode===$.all,Le=s=>l=>{clearTimeout(S),S=setTimeout(s,l)},Z=async s=>{if(!e.disabled&&(x.isValid||s)){const l=t.resolver?R((await re()).errors):await M(i,!0);l!==r.isValid&&v.state.next({isValid:l})}},X=(s,l)=>{!e.disabled&&(x.isValidating||x.validatingFields)&&((s||Array.from(m.mount)).forEach(o=>{o&&(l?w(r.validatingFields,o,l):C(r.validatingFields,o))}),v.state.next({validatingFields:r.validatingFields,isValidating:!R(r.validatingFields)}))},V=(s,l=[],o,y,f=!0,u=!0)=>{if(y&&o&&!e.disabled){if(c.action=!0,u&&Array.isArray(d(i,s))){const g=o(d(i,s),y.argA,y.argB);f&&w(i,s,g)}if(u&&Array.isArray(d(r.errors,s))){const g=o(d(r.errors,s),y.argA,y.argB);f&&w(r.errors,s,g),ct(r.errors,s)}if(x.touchedFields&&u&&Array.isArray(d(r.touchedFields,s))){const g=o(d(r.touchedFields,s),y.argA,y.argB);f&&w(r.touchedFields,s,g)}x.dirtyFields&&(r.dirtyFields=he(n,a)),v.state.next({name:s,isDirty:_(s,l),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(a,s,l)},z=(s,l)=>{w(r.errors,s,l),v.state.next({errors:r.errors})},G=s=>{r.errors=s,v.state.next({errors:r.errors,isValid:!1})},E=(s,l,o,y)=>{const f=d(i,s);if(f){const u=d(a,s,j(o)?d(n,s):o);j(u)||y&&y.defaultChecked||l?w(a,s,l?u:Pe(f._f)):I(s,u),c.mount&&Z()}},ie=(s,l,o,y,f)=>{let u=!1,g=!1;const b={name:s};if(!e.disabled){const N=!!(d(i,s)&&d(i,s)._f&&d(i,s)._f.disabled);if(!o||y){x.isDirty&&(g=r.isDirty,r.isDirty=b.isDirty=_(),u=g!==b.isDirty);const L=N||ee(d(n,s),l);g=!!(!N&&d(r.dirtyFields,s)),L||N?C(r.dirtyFields,s):w(r.dirtyFields,s,!0),b.dirtyFields=r.dirtyFields,u=u||x.dirtyFields&&g!==!L}if(o){const L=d(r.touchedFields,s);L||(w(r.touchedFields,s,o),b.touchedFields=r.touchedFields,u=u||x.touchedFields&&L!==o)}u&&f&&v.state.next(b)}return u?b:{}},Fe=(s,l,o,y)=>{const f=d(r.errors,s),u=x.isValid&&B(l)&&r.isValid!==l;if(e.delayError&&o?(F=Le(()=>z(s,o)),F(e.delayError)):(clearTimeout(S),F=null,o?w(r.errors,s,o):C(r.errors,s)),(o?!ee(f,o):f)||!R(y)||u){const g={...y,...u&&B(l)?{isValid:l}:{},errors:r.errors,name:s};r={...r,...g},v.state.next(g)}},re=async s=>{X(s,!0);const l=await t.resolver(a,t.context,at(s||m.mount,i,t.criteriaMode,t.shouldUseNativeValidation));return X(s),l},ne=async s=>{const{errors:l}=await re(s);if(s)for(const o of s){const y=d(l,o);y?w(r.errors,o,y):C(r.errors,o)}else r.errors=l;return l},M=async(s,l,o={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:u,...g}=f;if(u){const b=m.array.has(u.name),N=f._f&&lt(f._f);N&&x.validatingFields&&X([y],!0);const L=await ur(f,a,T,t.shouldUseNativeValidation&&!l,b);if(N&&x.validatingFields&&X([y]),L[u.name]&&(o.valid=!1,l))break;!l&&(d(L,u.name)?b?tt(r.errors,L,u.name):w(r.errors,u.name,L[u.name]):C(r.errors,u.name))}!R(g)&&await M(g,l,o)}}return o.valid},Ve=()=>{for(const s of m.unMount){const l=d(i,s);l&&(l._f.refs?l._f.refs.every(o=>!Me(o)):!Me(l._f.ref))&&Te(s)}m.unMount=new Set},_=(s,l)=>!e.disabled&&(s&&l&&w(a,s,l),!ee(Ye(),n)),A=(s,l,o)=>Fr(s,m,{...c.mount?a:j(l)?n:K(s)?{[s]:l}:l},o,l),k=s=>ke(d(c.mount?a:n,s,e.shouldUnregister?d(n,s,[]):[])),I=(s,l,o={})=>{const y=d(i,s);let f=l;if(y){const u=y._f;u&&(!u.disabled&&w(a,s,Dr(l,u)),f=Se(u.ref)&&U(l)?"":l,pr(u.ref)?[...u.ref.options].forEach(g=>g.selected=f.includes(g.value)):u.refs?_e(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(b=>b===g.value):f===g.value)):u.refs[0]&&(u.refs[0].checked=!!f):u.refs.forEach(g=>g.checked=g.value===f):He(u.ref)?u.ref.value="":(u.ref.value=f,u.ref.type||v.values.next({name:s,values:{...a}})))}(o.shouldDirty||o.shouldTouch)&&ie(s,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&me(s)},q=(s,l,o)=>{for(const y in l){const f=l[y],u=`${s}.${y}`,g=d(i,u);(m.array.has(s)||D(f)||g&&!g._f)&&!se(f)?q(u,f,o):I(u,f,o)}},P=(s,l,o={})=>{const y=d(i,s),f=m.array.has(s),u=O(l);w(a,s,u),f?(v.array.next({name:s,values:{...a}}),(x.isDirty||x.dirtyFields)&&o.shouldDirty&&v.state.next({name:s,dirtyFields:he(n,a),isDirty:_(s,u)})):y&&!y._f&&!U(u)?q(s,u,o):I(s,u,o),ir(s,m)&&v.state.next({...r}),v.values.next({name:c.mount?s:void 0,values:{...a}})},fe=async s=>{c.mount=!0;const l=s.target;let o=l.name,y=!0;const f=d(i,o),u=()=>l.type?Pe(f._f):mr(s),g=b=>{y=Number.isNaN(b)||se(b)&&isNaN(b.getTime())||ee(b,d(a,o,b))};if(f){let b,N;const L=u(),te=s.type===pe.BLUR||s.type===pe.FOCUS_OUT,Ur=!ot(f._f)&&!t.resolver&&!d(r.errors,o)&&!f._f.deps||ut(te,d(r.touchedFields,o),r.isSubmitted,H,W),Ue=ir(o,m,te);w(a,o,L),te?(f._f.onBlur&&f._f.onBlur(s),F&&F(0)):f._f.onChange&&f._f.onChange(s);const Oe=ie(o,L,te,!1),Or=!R(Oe)||Ue;if(!te&&v.values.next({name:o,type:s.type,values:{...a}}),Ur)return x.isValid&&(e.mode==="onBlur"?te&&Z():Z()),Or&&v.state.next({name:o,...Ue?{}:Oe});if(!te&&Ue&&v.state.next({...r}),t.resolver){const{errors:rr}=await re([o]);if(g(L),y){const Rr=dr(r.errors,i,o),tr=dr(rr,i,Rr.name||o);b=tr.error,o=tr.name,N=R(rr)}}else X([o],!0),b=(await ur(f,a,T,t.shouldUseNativeValidation))[o],X([o]),g(L),y&&(b?N=!1:x.isValid&&(N=await M(i,!0)));y&&(f._f.deps&&me(f._f.deps),Fe(o,N,b,Oe))}},ye=(s,l)=>{if(d(r.errors,l)&&s.focus)return s.focus(),1},me=async(s,l={})=>{let o,y;const f=xe(s);if(t.resolver){const u=await ne(j(s)?s:f);o=R(u),y=s?!f.some(g=>d(u,g)):o}else s?(y=(await Promise.all(f.map(async u=>{const g=d(i,u);return await M(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!y&&!r.isValid)&&Z()):y=o=await M(i);return v.state.next({...!K(s)||x.isValid&&o!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:o}:{},errors:r.errors}),l.shouldFocus&&!y&&be(i,ye,s?f:m.mount),y},Ye=s=>{const l={...c.mount?a:n};return j(s)?l:K(s)?d(l,s):s.map(o=>d(l,o))},Ze=(s,l)=>({invalid:!!d((l||r).errors,s),isDirty:!!d((l||r).dirtyFields,s),error:d((l||r).errors,s),isValidating:!!d(r.validatingFields,s),isTouched:!!d((l||r).touchedFields,s)}),Nr=s=>{s&&xe(s).forEach(l=>C(r.errors,l)),v.state.next({errors:s?r.errors:{}})},ze=(s,l,o)=>{const y=(d(i,s,{_f:{}})._f||{}).ref,f=d(r.errors,s)||{},{ref:u,message:g,type:b,...N}=f;w(r.errors,s,{...N,...l,ref:y}),v.state.next({name:s,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},Lr=(s,l)=>Q(s)?v.values.subscribe({next:o=>s(A(void 0,l),o)}):A(s,l,!0),Te=(s,l={})=>{for(const o of s?xe(s):m.mount)m.mount.delete(o),m.array.delete(o),l.keepValue||(C(i,o),C(a,o)),!l.keepError&&C(r.errors,o),!l.keepDirty&&C(r.dirtyFields,o),!l.keepTouched&&C(r.touchedFields,o),!l.keepIsValidating&&C(r.validatingFields,o),!t.shouldUnregister&&!l.keepDefaultValue&&C(n,o);v.values.next({values:{...a}}),v.state.next({...r,...l.keepDirty?{isDirty:_()}:{}}),!l.keepIsValid&&Z()},Ge=({disabled:s,name:l,field:o,fields:y,value:f})=>{if(B(s)&&c.mount||s){const u=s?void 0:j(f)?Pe(o?o._f:d(y,l)._f):f;w(a,l,u),ie(l,u,!1,!1,!0)}},Ie=(s,l={})=>{let o=d(i,s);const y=B(l.disabled)||B(e.disabled);return w(i,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...l}}),m.mount.add(s),o?Ge({field:o,disabled:B(l.disabled)?l.disabled:e.disabled,name:s,value:l.value}):E(s,!0,l.value),{...y?{disabled:l.disabled||e.disabled}:{},...t.progressive?{required:!!l.required,min:ge(l.min),max:ge(l.max),minLength:ge(l.minLength),maxLength:ge(l.maxLength),pattern:ge(l.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:f=>{if(f){Ie(s,l),o=d(i,s);const u=j(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=nt(u),b=o._f.refs||[];if(g?b.find(N=>N===u):u===o._f.ref)return;w(i,s,{_f:{...o._f,...g?{refs:[...b.filter(Me),u,...Array.isArray(d(n,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),E(s,!1,void 0,u)}else o=d(i,s,{}),o._f&&(o._f.mount=!1),(t.shouldUnregister||l.shouldUnregister)&&!(hr(m.array,s)&&c.action)&&m.unMount.add(s)}}},Je=()=>t.shouldFocusError&&be(i,ye,m.mount),Tr=s=>{B(s)&&(v.state.next({disabled:s}),be(i,(l,o)=>{const y=d(i,o);y&&(l.disabled=y._f.disabled||s,Array.isArray(y._f.refs)&&y._f.refs.forEach(f=>{f.disabled=y._f.disabled||s}))},0,!1))},Qe=(s,l)=>async o=>{let y;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let f=O(a);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:u,values:g}=await re();r.errors=u,f=g}else await M(i);if(C(r.errors,"root"),R(r.errors)){v.state.next({errors:{}});try{await s(f,o)}catch(u){y=u}}else l&&await l({...r.errors},o),Je(),setTimeout(Je);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&!y,submitCount:r.submitCount+1,errors:r.errors}),y)throw y},Ir=(s,l={})=>{d(i,s)&&(j(l.defaultValue)?P(s,O(d(n,s))):(P(s,l.defaultValue),w(n,s,O(l.defaultValue))),l.keepTouched||C(r.touchedFields,s),l.keepDirty||(C(r.dirtyFields,s),r.isDirty=l.defaultValue?_(s,O(d(n,s))):_()),l.keepError||(C(r.errors,s),x.isValid&&Z()),v.state.next({...r}))},Xe=(s,l={})=>{const o=s?O(s):n,y=O(o),f=R(s),u=f?n:y;if(l.keepDefaultValues||(n=o),!l.keepValues){if(l.keepDirtyValues){const g=new Set([...m.mount,...Object.keys(he(n,a))]);for(const b of Array.from(g))d(r.dirtyFields,b)?w(u,b,d(a,b)):P(b,d(u,b))}else{if(We&&j(s))for(const g of m.mount){const b=d(i,g);if(b&&b._f){const N=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(Se(N)){const L=N.closest("form");if(L){L.reset();break}}}}i={}}a=e.shouldUnregister?l.keepDefaultValues?O(n):{}:O(u),v.array.next({values:{...u}}),v.values.next({values:{...u}})}m={mount:l.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!x.isValid||!!l.keepIsValid||!!l.keepDirtyValues,c.watch=!!e.shouldUnregister,v.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:f?!1:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!ee(s,n)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:f?{}:l.keepDirtyValues?l.keepDefaultValues&&a?he(n,a):r.dirtyFields:l.keepDefaultValues&&s?he(n,s):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},er=(s,l)=>Xe(Q(s)?s(a):s,l);return{control:{register:Ie,unregister:Te,getFieldState:Ze,handleSubmit:Qe,setError:ze,_executeSchema:re,_getWatch:A,_getDirty:_,_updateValid:Z,_removeUnmounted:Ve,_updateFieldArray:V,_updateDisabledField:Ge,_getFieldArray:k,_reset:Xe,_resetDefaultValues:()=>Q(t.defaultValues)&&t.defaultValues().then(s=>{er(s,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:Tr,_subjects:v,_proxyFormState:x,_setErrors:G,get _fields(){return i},get _formValues(){return a},get _state(){return c},set _state(s){c=s},get _defaultValues(){return n},get _names(){return m},set _names(s){m=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:me,register:Ie,handleSubmit:Qe,watch:Lr,setValue:P,getValues:Ye,reset:er,resetField:Ir,clearErrors:Nr,unregister:Te,setError:ze,setFocus:(s,l={})=>{const o=d(i,s),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),l.shouldSelect&&f.select())}},getFieldState:Ze}}function yt(e={}){const t=p.useRef(),r=p.useRef(),[i,n]=p.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...ft(e),formState:i});const a=t.current.control;return a._options=e,$e({subject:a._subjects.state,next:c=>{br(c,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),p.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),p.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==i.isDirty&&a._subjects.state.next({isDirty:c})}},[a,i.isDirty]),p.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,n(c=>({...c}))):a._resetDefaultValues()},[e.values,a]),p.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),p.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),p.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),p.useEffect(()=>{t.current&&(t.current.watch=t.current.watch.bind({}))},[i]),t.current.formState=xr(i,a),t.current}const mt=Jr,Er=Y.createContext({}),ve=({...e})=>h.jsx(Er.Provider,{value:{name:e.name},children:h.jsx(rt,{...e})}),Ne=()=>{const e=Y.useContext(Er),t=Y.useContext(kr),{getFieldState:r,formState:i}=Ce(),n=r(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:a}=t;return{id:a,name:e.name,formItemId:`${a}-form-item`,formDescriptionId:`${a}-form-item-description`,formMessageId:`${a}-form-item-message`,...n}},kr=Y.createContext({}),oe=Y.forwardRef(({className:e,...t},r)=>{const i=Y.useId();return h.jsx(kr.Provider,{value:{id:i},children:h.jsx("div",{ref:r,className:Ee("space-y-2",e),...t})})});oe.displayName="FormItem";const ue=Y.forwardRef(({className:e,...t},r)=>{const{error:i,formItemId:n}=Ne();return h.jsx(qr,{ref:r,className:Ee(i&&"text-destructive",e),htmlFor:n,...t})});ue.displayName="FormLabel";const ce=Y.forwardRef(({...e},t)=>{const{error:r,formItemId:i,formDescriptionId:n,formMessageId:a}=Ne();return h.jsx(Br,{ref:t,id:i,"aria-describedby":r?`${n} ${a}`:`${n}`,"aria-invalid":!!r,...e})});ce.displayName="FormControl";const ht=Y.forwardRef(({className:e,...t},r)=>{const{formDescriptionId:i}=Ne();return h.jsx("p",{ref:r,id:i,className:Ee("text-[0.8rem] text-muted-foreground",e),...t})});ht.displayName="FormDescription";const de=Y.forwardRef(({className:e,children:t,...r},i)=>{const{error:n,formMessageId:a}=Ne(),c=n?String(n==null?void 0:n.message):t;return c?h.jsx("p",{ref:i,id:a,className:Ee("text-[0.8rem] font-medium text-destructive",e),...r,children:c}):null});de.displayName="FormMessage";const fr=(e,t,r)=>{if(e&&"reportValidity"in e){const i=d(r,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},Cr=(e,t)=>{for(const r in t.fields){const i=t.fields[r];i&&i.ref&&"reportValidity"in i.ref?fr(i.ref,r,e):i.refs&&i.refs.forEach(n=>fr(n,r,e))}},gt=(e,t)=>{t.shouldUseNativeValidation&&Cr(e,t);const r={};for(const i in e){const n=d(t.fields,i),a=Object.assign(e[i]||{},{ref:n&&n.ref});if(vt(t.names||Object.keys(e),i)){const c=Object.assign({},d(r,i));w(c,"root",a),w(r,i,c)}else w(r,i,a)}return r},vt=(e,t)=>e.some(r=>r.startsWith(t+"."));var xt=function(e,t){for(var r={};e.length;){var i=e[0],n=i.code,a=i.message,c=i.path.join(".");if(!r[c])if("unionErrors"in i){var m=i.unionErrors[0].errors[0];r[c]={message:m.message,type:m.code}}else r[c]={message:a,type:n};if("unionErrors"in i&&i.unionErrors.forEach(function(x){return x.errors.forEach(function(v){return e.push(v)})}),t){var F=r[c].types,S=F&&F[i.code];r[c]=Vr(c,t,r,n,S?[].concat(S,i.message):i.message)}e.shift()}return r},bt=function(e,t,r){return r===void 0&&(r={}),function(i,n,a){try{return Promise.resolve(function(c,m){try{var F=Promise.resolve(e[r.mode==="sync"?"parse":"parseAsync"](i,t)).then(function(S){return a.shouldUseNativeValidation&&Cr({},a),{errors:{},values:r.raw?i:S}})}catch(S){return m(S)}return F&&F.then?F.then(void 0,m):F}(0,function(c){if(function(m){return Array.isArray(m==null?void 0:m.errors)}(c))return{values:{},errors:gt(xt(c.errors,!a.shouldUseNativeValidation&&a.criteriaMode==="all"),a)};throw c}))}catch(c){return Promise.reject(c)}}};const _t={id:1,title:"15 Min Meeting",url:"/15min",description:"A 15 minutes quick talk.",duration:15,location:"skype"};function It(){const e=_t,t=ae.object({id:ae.number().gt(0),title:ae.string().min(1),url:ae.string().min(2).startsWith("/"),description:ae.string().min(0),duration:ae.coerce.number().gt(5),location:Mr}),r=yt({resolver:bt(t),defaultValues:{...e}});function i(n){console.log(n)}return h.jsx(mt,{...r,children:h.jsx("form",{onSubmit:r.handleSubmit(i),className:"space-y-4",children:h.jsxs("div",{className:"max-w-full px-2 py-4 lg:px-6 space-y-4",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("h2",{className:"text-2xl sm:px-4",children:"编辑"}),h.jsx(Wr,{type:"submit",children:"保存"})]}),h.jsxs("div",{className:"border-subtle space-y-6 rounded-lg border p-6",children:[h.jsx(ve,{control:r.control,name:"title",render:({field:n})=>h.jsxs(oe,{children:[h.jsx(ue,{children:"标题"}),h.jsx(ce,{children:h.jsx(Ae,{placeholder:"Meeting...",...n})}),h.jsx(de,{})]})}),h.jsx(ve,{control:r.control,name:"description",render:({field:n})=>h.jsxs(oe,{children:[h.jsx(ue,{children:"介绍"}),h.jsx(ce,{children:h.jsx(Ae,{...n})}),h.jsx(de,{})]})}),h.jsx(ve,{control:r.control,name:"url",render:({field:n})=>h.jsxs(oe,{children:[h.jsx(ue,{children:"URL"}),h.jsxs("div",{className:"group relative mb-1 flex items-center rounded-md transition",children:[h.jsx("div",{className:"border-default h-9 border px-3 transition bg-accent rounded-l-md",children:h.jsx("div",{className:"min-h-9 flex flex-col justify-center text-sm leading-7",children:h.jsx("span",{className:"flex max-w-2xl overflow-y-auto whitespace-nowrap",children:"cal.com/nico-ng/"})})}),h.jsx(ce,{children:h.jsx(Ae,{className:"mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition w-full rounded-l-none border-l-0 !my-0",...n})})]}),h.jsx(de,{})]})})]}),h.jsx("div",{className:"border-subtle space-y-6 rounded-lg border p-6",children:h.jsx(ve,{control:r.control,name:"duration",render:({field:n})=>h.jsxs(oe,{children:[h.jsx(ue,{children:"时长"}),h.jsxs("div",{className:"group relative mb-1 flex items-center rounded-md transition",children:[h.jsx(ce,{children:h.jsx(Ae,{type:"number",className:"mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition rounded-r-none border-r-0 mr-[1px] !my-0",...n})}),h.jsx("div",{className:"h-9 border px-3 transition rounded-r-md",children:h.jsx("div",{className:"min-h-9 flex flex-col justify-center text-sm leading-7",children:h.jsx("span",{className:"flex max-w-2xl overflow-y-auto whitespace-nowrap",children:"分钟"})})})]}),h.jsx(de,{})]})})}),h.jsx("div",{className:"border-subtle space-y-6 rounded-lg border p-6",children:h.jsx(ve,{control:r.control,name:"location",render:({field:n})=>h.jsxs(oe,{children:[h.jsx(ue,{children:"地点"}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx(ce,{children:h.jsxs($r,{...n,children:[h.jsx(Hr,{children:h.jsx(Kr,{})}),h.jsx(Yr,{children:Pr.map((a,c)=>h.jsx(Zr,{value:a,children:a.charAt(0).toUpperCase()+a.slice(1)},c))})]})})}),h.jsx(de,{})]})})})]})})})}export{It as default};