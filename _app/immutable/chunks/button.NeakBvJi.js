import{e as y,a as m,f as n}from"./disclose-version.D_0R5w7p.js";import{i as U}from"./legacy.WUkXPhl2.js";import{p as q,f as x,a as C,t as B,N as V,g as D,D as G}from"./utils.6KhQ9vBw.js";import{e as I,a as P,j as O,d as R,f as F}from"./base.BXdhyv9S.js";import{b as i}from"./misc.DY5zbGlJ.js";import{l as N,a as d,i as H,b as S,s as J}from"./index-client.CzxfyyCv.js";import{c as K}from"./index.DjVdTCw3.js";import"./paths.DtyiJOPp.js";function L(f,t){const u=[];return t.builders.forEach(c=>{const r=c.action(f);r&&u.push(r)}),{destroy:()=>{u.forEach(c=>{c.destroy&&c.destroy()})}}}function Q(f){const t={};return f.forEach(u=>{Object.keys(u).forEach(c=>{c!=="action"&&(t[c]=u[c])})}),t}function T(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["href","type","builders","el"]);q(t,!1);let r=d(t,"href",24,()=>{}),k=d(t,"type",24,()=>{}),v=d(t,"builders",24,()=>[]),b=d(t,"el",28,()=>{});const w={"data-button-root":""};U();var l=y(),j=x(l);H(j,()=>v()&&v().length,g=>{var h=y(),A=x(h);const o=G(()=>Q(v()));I(A,()=>r()?"a":"button",!1,(s,z)=>{S(s,e=>b(e),()=>b()),O(s,(e,M)=>L(e,M),()=>({builders:v()}));let _;B(()=>_=R(s,_,{type:r()?void 0:k(),href:r(),tabindex:"0",...D(o),...c,...w},void 0,s.namespaceURI===V,s.nodeName.includes("-"))),n("click",s,function(e){i.call(this,t,e)}),n("change",s,function(e){i.call(this,t,e)}),n("keydown",s,function(e){i.call(this,t,e)}),n("keyup",s,function(e){i.call(this,t,e)}),n("mouseenter",s,function(e){i.call(this,t,e)}),n("mouseleave",s,function(e){i.call(this,t,e)}),n("mousedown",s,function(e){i.call(this,t,e)}),n("pointerdown",s,function(e){i.call(this,t,e)}),n("mouseup",s,function(e){i.call(this,t,e)}),n("pointerup",s,function(e){i.call(this,t,e)});var E=y(),a=x(E);P(a,t,"default",{}),m(z,E)}),m(g,h)},g=>{var h=y(),A=x(h);I(A,()=>r()?"a":"button",!1,(o,s)=>{S(o,a=>b(a),()=>b());let z;B(()=>z=R(o,z,{type:r()?void 0:k(),href:r(),tabindex:"0",...c,...w},void 0,o.namespaceURI===V,o.nodeName.includes("-"))),n("click",o,function(a){i.call(this,t,a)}),n("change",o,function(a){i.call(this,t,a)}),n("keydown",o,function(a){i.call(this,t,a)}),n("keyup",o,function(a){i.call(this,t,a)}),n("mouseenter",o,function(a){i.call(this,t,a)}),n("mouseleave",o,function(a){i.call(this,t,a)}),n("mousedown",o,function(a){i.call(this,t,a)}),n("pointerdown",o,function(a){i.call(this,t,a)}),n("mouseup",o,function(a){i.call(this,t,a)}),n("pointerup",o,function(a){i.call(this,t,a)});var _=y(),E=x(_);P(E,t,"default",{}),m(s,_)}),m(g,h)}),m(f,l),C()}const W=K({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function it(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["class","variant","size","builders"]);q(t,!1);let r=d(t,"class",8,void 0),k=d(t,"variant",8,"default"),v=d(t,"size",8,"default"),b=d(t,"builders",24,()=>[]);U();var w=G(()=>F(W({variant:k(),size:v(),className:r()})));T(f,J({get builders(){return b()},get class(){return D(w)},type:"button"},()=>c,{$$events:{click(l){i.call(this,t,l)},keydown(l){i.call(this,t,l)}},children:(l,j)=>{var g=y(),h=x(g);P(h,t,"default",{}),m(l,g)},$$slots:{default:!0}})),C()}export{it as B};
