function P(){}const ct=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function I(){return Object.create(null)}function x(t){t.forEach(J)}function K(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function qt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function ot(t){return Object.keys(t).length===0}function Lt(t,e,n,i){if(t){const s=Q(t,e,n,i);return t[0](s)}}function Q(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Bt(t,e,n,i,s,o){if(s){const r=Q(e,n,i,o);t.p(r,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function It(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const U=typeof window<"u";let ut=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):P;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&F(V)}function at(t){let e;return $.size===0&&F(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let R=!1;function ft(){R=!0}function _t(){R=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:dt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(r[c],_)}}function mt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Y("style");return yt(X(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(R){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){R&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Jt(){return H(" ")}function Kt(){return H("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:bt(t,i,e[i])}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,s=!1){vt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,e,n,i){return Z(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Vt(t,e,n){return tt(t,e,n,Y)}function Xt(t,e,n){return tt(t,e,n,xt)}function Et(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Yt(t){return Et(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ee(t,e,n){t.classList[n?"add":"remove"](e)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}const D=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:pt(e),rules:{}};return D.set(t,n),n}function W(t,e,n,i,s,o,r,l=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*o(p);u+=p*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${kt(_)}_${l}`,a=X(t),{stylesheet:d,rules:h}=D.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,M+=1,f}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),M-=s,M||At())}function At(){F(()=>{M||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let E;function v(t){E=t}function k(){if(!E)throw new Error("Function called outside component initialization");return E}function ne(t){k().$$.on_mount.push(t)}function ie(t){k().$$.after_update.push(t)}function re(t){k().$$.on_destroy.push(t)}function se(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function ce(t,e){return k().$$.context.set(t,e),e}function le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],G=[],S=[],z=[],nt=Promise.resolve();let B=!1;function it(){B||(B=!0,nt.then(rt))}function oe(){return it(),nt}function O(t){S.push(t)}function ue(t){z.push(t)}const q=new Set;let A=0;function rt(){const t=E;do{for(;A<w.length;){const e=w[A];A++,v(e),St(e.$$)}for(v(null),w.length=0,A=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(w.length);for(;z.length;)z.pop()();B=!1,q.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let b;function Ct(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function L(t,e,n){t.dispatchEvent(et(`${e?"intro":"outro"}${n}`))}const C=new Set;let m;function ae(){m={r:0,c:[],p:m}}function fe(){m.r||x(m.c),m=m.p}function Dt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),m.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function de(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,l=null,c=null;function u(){c&&jt(t,c)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=ct,tick:p=P,css:g}=s||Mt,T={start:ut()+d,b:a};a||(T.group=m,m.r+=1),r||l?l=T:(g&&(u(),c=W(t,o,a,h,d,y,g)),a&&p(0,1),r=_(T,h),O(()=>L(t,a,"start")),at(N=>{if(l&&N>l.start&&(r=_(l,h),l=null,L(t,r.b,"start"),g&&(u(),c=W(t,o,r.b,r.duration,0,y,s.css))),r){if(N>=r.end)p(o=r.b,1-o),L(t,r.b,"end"),l||(r.b?u():--r.group.r||x(r.group.c)),r=null;else if(N>=r.start){const st=N-r.start;o=r.a+r.d*y(st/r.duration),p(o,1-o)}}return!!(r||l)}))}return{run(a){K(s)?Ct().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=l=null}}}function he(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const c=o.map(J).filter(K);r?r.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(O)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,s,o,r,l=[-1]){const c=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:P,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Rt(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ft();const f=wt(e.target);u.fragment&&u.fragment.l(f),f.forEach($t)}else u.fragment&&u.fragment.c();e.intro&&Dt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),_t(),rt()}v(c)}class xe{$destroy(){Pt(this,1),this.$destroy=P}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{It as $,he as A,me as B,Pt as C,lt as D,oe as E,ut as F,at as G,Gt as H,gt as I,Qt as J,ee as K,x as L,le as M,G as N,pe as O,ue as P,O as Q,qt as R,xe as S,de as T,Lt as U,Bt as V,Ft as W,zt as X,xt as Y,Xt as Z,Ut as _,Jt as a,se as a0,re as a1,Ht as a2,Wt as b,Yt as c,fe as d,Kt as e,Dt as f,ae as g,$t as h,$e as i,ce as j,ie as k,Y as l,Vt as m,P as n,ne as o,wt as p,bt as q,te as r,Tt as s,_e as t,H as u,Et as v,Zt as w,ye as x,ge as y,Ot as z};