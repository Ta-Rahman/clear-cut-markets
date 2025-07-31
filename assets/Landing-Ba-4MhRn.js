import{r as y,o as nt,a as vt,B as P,b as Pt,R as At,z as it,v as E,C as S,h as Z,O as Ot,W as yt,k as jt,$ as Ht,x as A,U as tt,T as Rt,c as Vt,Y as Kt,Q as T,s as Y,d as rt,u as xt,e as C,w as X,f as h,g as p,i as n,j as f,l as B,m as i,n as x,t as l,p as _,q as _t,y as kt,A as G,D as W,E as et,F as wt,G as $,H as b,I as w,J as z,K as I,L as Wt,M as F,N as Ft,_ as N,P as O,S as Nt,V as $t,X as qt,Z as Ct,a0 as Ut,a1 as Yt,a2 as Zt,a3 as Xt,a4 as lt,a5 as q,a6 as U,a7 as st,a8 as Et,a9 as Gt}from"./index-Dyu7bxGR.js";import{C as Jt,s as ot,a as Qt}from"./index-C34KvgP8.js";import{s as k}from"./index-D6X5rIIn.js";import{s as te,a as ee,b as oe,F as ne,c as se}from"./index-B9YrEBhA.js";function ae(){let e=null,t=0;const o=y("down"),s=()=>{window.addEventListener("scroll",()=>{const r=window.scrollY;o.value=r>t?"down":"up",t=r});const a={threshold:.1,rootMargin:"0px 0px -50px 0px"};e=new IntersectionObserver(r=>{r.forEach(u=>{u.isIntersecting?u.target.classList.add("animate-in"):o.value==="up"&&u.target.classList.remove("animate-in")})},a),document.querySelectorAll(".fade-up, .fade-in, .fade-left, .fade-right, .scale-in").forEach(r=>{e.observe(r)})};return nt(()=>{s()}),vt(()=>{e&&e.disconnect(),window.removeEventListener("scroll",()=>{})}),{observeElements:s}}var ie=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`,re={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},le=P.extend({name:"tooltip-directive",style:ie,classes:re}),de=Pt.extend({style:le});function ce(e,t){return me(e)||ge(e,t)||pe(e,t)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,t){if(e){if(typeof e=="string")return dt(e,t);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?dt(e,t):void 0}}function dt(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,s=Array(t);o<t;o++)s[o]=e[o];return s}function ge(e,t){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var s,a,r,u,g=[],c=!0,d=!1;try{if(r=(o=o.call(e)).next,t!==0)for(;!(c=(s=r.call(o)).done)&&(g.push(s.value),g.length!==t);c=!0);}catch(v){d=!0,a=v}finally{try{if(!c&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(d)throw a}}return g}}function me(e){if(Array.isArray(e))return e}function ct(e,t,o){return(t=fe(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fe(e){var t=he(e,"string");return L(t)=="symbol"?t:t+""}function he(e,t){if(L(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(L(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}var St=de.extend("tooltip",{beforeMount:function(t,o){var s,a=this.getTarget(t);if(a.$_ptooltipModifiers=this.getModifiers(o),o.value){if(typeof o.value=="string")a.$_ptooltipValue=o.value,a.$_ptooltipDisabled=!1,a.$_ptooltipEscape=!0,a.$_ptooltipClass=null,a.$_ptooltipFitContent=!0,a.$_ptooltipIdAttr=Y("pv_id")+"_tooltip",a.$_ptooltipShowDelay=0,a.$_ptooltipHideDelay=0,a.$_ptooltipAutoHide=!0;else if(L(o.value)==="object"&&o.value){if(rt(o.value.value)||o.value.value.trim()==="")return;a.$_ptooltipValue=o.value.value,a.$_ptooltipDisabled=!!o.value.disabled===o.value.disabled?o.value.disabled:!1,a.$_ptooltipEscape=!!o.value.escape===o.value.escape?o.value.escape:!0,a.$_ptooltipClass=o.value.class||"",a.$_ptooltipFitContent=!!o.value.fitContent===o.value.fitContent?o.value.fitContent:!0,a.$_ptooltipIdAttr=o.value.id||Y("pv_id")+"_tooltip",a.$_ptooltipShowDelay=o.value.showDelay||0,a.$_ptooltipHideDelay=o.value.hideDelay||0,a.$_ptooltipAutoHide=!!o.value.autoHide===o.value.autoHide?o.value.autoHide:!0}}else return;a.$_ptooltipZIndex=(s=o.instance.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.zIndex)===null||s===void 0?void 0:s.tooltip,this.bindEvents(a,o),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,o){var s=this.getTarget(t);if(s.$_ptooltipModifiers=this.getModifiers(o),this.unbindEvents(s),!!o.value){if(typeof o.value=="string")s.$_ptooltipValue=o.value,s.$_ptooltipDisabled=!1,s.$_ptooltipEscape=!0,s.$_ptooltipClass=null,s.$_ptooltipIdAttr=s.$_ptooltipIdAttr||Y("pv_id")+"_tooltip",s.$_ptooltipShowDelay=0,s.$_ptooltipHideDelay=0,s.$_ptooltipAutoHide=!0,this.bindEvents(s,o);else if(L(o.value)==="object"&&o.value)if(rt(o.value.value)||o.value.value.trim()===""){this.unbindEvents(s,o);return}else s.$_ptooltipValue=o.value.value,s.$_ptooltipDisabled=!!o.value.disabled===o.value.disabled?o.value.disabled:!1,s.$_ptooltipEscape=!!o.value.escape===o.value.escape?o.value.escape:!0,s.$_ptooltipClass=o.value.class||"",s.$_ptooltipFitContent=!!o.value.fitContent===o.value.fitContent?o.value.fitContent:!0,s.$_ptooltipIdAttr=o.value.id||s.$_ptooltipIdAttr||Y("pv_id")+"_tooltip",s.$_ptooltipShowDelay=o.value.showDelay||0,s.$_ptooltipHideDelay=o.value.hideDelay||0,s.$_ptooltipAutoHide=!!o.value.autoHide===o.value.autoHide?o.value.autoHide:!0,this.bindEvents(s,o)}},unmounted:function(t,o){var s=this.getTarget(t);this.hide(t,0),this.remove(s),this.unbindEvents(s,o),s.$_ptooltipScrollHandler&&(s.$_ptooltipScrollHandler.destroy(),s.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,o){var s=this,a=t.$_ptooltipModifiers;a.focus?(t.$_ptooltipFocusEvent=function(r){return s.onFocus(r,o)},t.$_ptooltipBlurEvent=this.onBlur.bind(this),t.addEventListener("focus",t.$_ptooltipFocusEvent),t.addEventListener("blur",t.$_ptooltipBlurEvent)):(t.$_ptooltipMouseEnterEvent=function(r){return s.onMouseEnter(r,o)},t.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),t.$_ptooltipClickEvent=this.onClick.bind(this),t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.addEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.addEventListener("click",t.$_ptooltipClickEvent)),t.$_ptooltipKeydownEvent=this.onKeydown.bind(this),t.addEventListener("keydown",t.$_ptooltipKeydownEvent),t.$_pWindowResizeEvent=this.onWindowResize.bind(this,t)},unbindEvents:function(t){var o=t.$_ptooltipModifiers;o.focus?(t.removeEventListener("focus",t.$_ptooltipFocusEvent),t.$_ptooltipFocusEvent=null,t.removeEventListener("blur",t.$_ptooltipBlurEvent),t.$_ptooltipBlurEvent=null):(t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.$_ptooltipMouseEnterEvent=null,t.removeEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.$_ptooltipMouseLeaveEvent=null,t.removeEventListener("click",t.$_ptooltipClickEvent),t.$_ptooltipClickEvent=null),t.removeEventListener("keydown",t.$_ptooltipKeydownEvent),window.removeEventListener("resize",t.$_pWindowResizeEvent),t.$_ptooltipId&&this.remove(t)},bindScrollListener:function(t){var o=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new Jt(t,function(){o.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,o){var s=t.currentTarget,a=s.$_ptooltipShowDelay;this.show(s,o,a)},onMouseLeave:function(t){var o=t.currentTarget,s=o.$_ptooltipHideDelay,a=o.$_ptooltipAutoHide;if(a)this.hide(o,s);else{var r=T(t.target,"data-pc-name")==="tooltip"||T(t.target,"data-pc-section")==="arrow"||T(t.target,"data-pc-section")==="text"||T(t.relatedTarget,"data-pc-name")==="tooltip"||T(t.relatedTarget,"data-pc-section")==="arrow"||T(t.relatedTarget,"data-pc-section")==="text";!r&&this.hide(o,s)}},onFocus:function(t,o){var s=t.currentTarget,a=s.$_ptooltipShowDelay;this.show(s,o,a)},onBlur:function(t){var o=t.currentTarget,s=o.$_ptooltipHideDelay;this.hide(o,s)},onClick:function(t){var o=t.currentTarget,s=o.$_ptooltipHideDelay;this.hide(o,s)},onKeydown:function(t){var o=t.currentTarget,s=o.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,s)},onWindowResize:function(t){Kt()||this.hide(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},tooltipActions:function(t,o){if(!(t.$_ptooltipDisabled||!Rt(t))){var s=this.create(t,o);this.align(t),!this.isUnstyled()&&Vt(s,250);var a=this;window.addEventListener("resize",t.$_pWindowResizeEvent),s.addEventListener("mouseleave",function r(){a.hide(t),s.removeEventListener("mouseleave",r),t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),setTimeout(function(){return t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(t),A.set("tooltip",s,t.$_ptooltipZIndex)}},show:function(t,o,s){var a=this;s!==void 0?this.timer=setTimeout(function(){return a.tooltipActions(t,o)},s):this.tooltipActions(t,o)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},hide:function(t,o){var s=this;clearTimeout(this.timer),o!==void 0?setTimeout(function(){return s.tooltipRemoval(t)},o):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},getArrowElement:function(t){var o=this.getTooltipElement(t);return it(o,'[data-pc-section="arrow"]')},create:function(t){var o=t.$_ptooltipModifiers,s=tt("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:o})}),a=tt("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:o})});t.$_ptooltipEscape?(a.innerHTML="",a.appendChild(document.createTextNode(t.$_ptooltipValue))):a.innerHTML=t.$_ptooltipValue;var r=tt("div",ct(ct({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:o})),s,a);return document.body.appendChild(r),t.$_ptooltipId=r.id,this.$el=r,r},remove:function(t){if(t){var o=this.getTooltipElement(t);o&&o.parentElement&&(A.clear(o),document.body.removeChild(o)),t.$_ptooltipId=null}},align:function(t){var o=t.$_ptooltipModifiers;o.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):o.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):o.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var o=t.getBoundingClientRect(),s=o.left+jt(),a=o.top+Ht();return{left:s,top:a}},alignRight:function(t){this.preAlign(t,"right");var o=this.getTooltipElement(t),s=this.getArrowElement(t),a=this.getHostOffset(t),r=a.left+E(t),u=a.top+(S(t)-S(o))/2;o.style.left=r+"px",o.style.top=u+"px",s.style.top="50%",s.style.right=null,s.style.bottom=null,s.style.left="0"},alignLeft:function(t){this.preAlign(t,"left");var o=this.getTooltipElement(t),s=this.getArrowElement(t),a=this.getHostOffset(t),r=a.left-E(o),u=a.top+(S(t)-S(o))/2;o.style.left=r+"px",o.style.top=u+"px",s.style.top="50%",s.style.right="0",s.style.bottom=null,s.style.left=null},alignTop:function(t){this.preAlign(t,"top");var o=this.getTooltipElement(t),s=this.getArrowElement(t),a=E(o),r=E(t),u=Z(),g=u.width,c=this.getHostOffset(t),d=c.left+(r-a)/2,v=c.top-S(o);d<0?d=0:d+a>g&&(d=Math.floor(c.left+r-a)),o.style.left=d+"px",o.style.top=v+"px";var m=c.left-this.getHostOffset(o).left+r/2;s.style.top=null,s.style.right=null,s.style.bottom="0",s.style.left=m+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var o=this.getTooltipElement(t),s=this.getArrowElement(t),a=E(o),r=E(t),u=Z(),g=u.width,c=this.getHostOffset(t),d=c.left+(r-a)/2,v=c.top+S(t);d<0?d=0:d+a>g&&(d=Math.floor(c.left+r-a)),o.style.left=d+"px",o.style.top=v+"px";var m=c.left-this.getHostOffset(o).left+r/2;s.style.top="0",s.style.right=null,s.style.bottom=null,s.style.left=m+"px"},preAlign:function(t,o){var s=this.getTooltipElement(t);s.style.left="-999px",s.style.top="-999px",Ot(s,"p-tooltip-".concat(s.$_ptooltipPosition)),!this.isUnstyled()&&yt(s,"p-tooltip-".concat(o)),s.$_ptooltipPosition=o,s.setAttribute("data-p-position",o)},isOutOfBounds:function(t){var o=this.getTooltipElement(t),s=o.getBoundingClientRect(),a=s.top,r=s.left,u=E(o),g=S(o),c=Z();return r+u>c.width||r<0||a<0||a+g>c.height},getTarget:function(t){var o;return At(t,"p-inputwrapper")&&(o=it(t,"input"))!==null&&o!==void 0?o:t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&L(t.arg)==="object"?Object.entries(t.arg).reduce(function(o,s){var a=ce(s,2),r=a[0],u=a[1];return(r==="event"||r==="position")&&(o[u]=!0),o},{}):{}}}}),be={name:"Dropdown",extends:te,mounted:function(){console.warn("Deprecated since v4. Use Select component instead.")}};const ve={class:"sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between"},ye={class:"flex gap-3 items-center"},xe={key:0,class:"flex items-center gap-2"},_e={class:"flex items-center"},ke={__name:"LandingNav",setup(e){xt();const{t,locale:o}=C(),s=y(!1),a=()=>{s.value=!s.value,s.value?(document.documentElement.classList.add("app-dark"),localStorage.setItem("app-dark-mode","true")):(document.documentElement.classList.remove("app-dark"),localStorage.setItem("app-dark-mode","false"))},r=y([{name:"English",code:"en"},{name:"Deutsch",code:"de"}]),u=y(),g=c=>{var d;(d=document.getElementById(c))==null||d.scrollIntoView({behavior:"smooth"})};return nt(()=>{const c=localStorage.getItem("app-dark-mode");c!==null?s.value=c==="true":s.value=window.matchMedia("(prefers-color-scheme: dark)").matches,s.value&&document.documentElement.classList.add("app-dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",m=>{localStorage.getItem("app-dark-mode")===null&&(s.value=m.matches,m.matches?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark"))});const d=navigator.language.split("-")[0],v=r.value.find(m=>m.code===d)||r.value[0];u.value=v,o.value=v.code}),X(u,c=>{c&&(o.value=c.code)}),(c,d)=>{const v=St;return p(),h("div",ve,[d[5]||(d[5]=n("div",{class:"flex items-center"},[n("i",{class:"pi pi-chart-line text-primary text-3xl mr-2"}),n("span",{class:"text-gray-900 dark:text-gray-100 font-bold text-2xl"},"Clear Cut Markets")],-1)),n("div",ye,[f(i(k),{label:i(t)("nav.features"),class:"p-button-text",onClick:d[0]||(d[0]=m=>g("features"))},null,8,["label"]),f(i(k),{label:i(t)("nav.pricing"),class:"p-button-text",onClick:d[1]||(d[1]=m=>g("pricing"))},null,8,["label"]),f(i(be),{modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=m=>u.value=m),options:r.value,optionLabel:"name",class:"p-button-text p-button-sm w-auto"},{value:x(m=>[m.value?(p(),h("div",xe,[d[4]||(d[4]=n("i",{class:"pi pi-globe"},null,-1)),n("div",null,l(m.value.code.toUpperCase()),1)])):_("",!0)]),option:x(m=>[n("div",_e,[n("div",null,l(m.option.name),1)])]),_:1},8,["modelValue","options"]),B(f(i(k),{icon:s.value?"pi pi-sun":"pi pi-moon",class:"p-button-rounded p-button-text",onClick:a},null,8,["icon"]),[[v,s.value?"Light Mode":"Dark Mode",void 0,{bottom:!0}]]),f(i(k),{label:i(t)("nav.login"),class:"p-button-outlined",onClick:d[3]||(d[3]=m=>c.$router.push("/auth/login"))},null,8,["label"])])])}}};var we=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,$e={root:function(t){var o=t.props;return["p-message p-component p-message-"+o.severity,{"p-message-outlined":o.variant==="outlined","p-message-simple":o.variant==="simple","p-message-sm":o.size==="small","p-message-lg":o.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ce=P.extend({name:"message",style:we,classes:$e}),Ee={name:"BaseMessage",extends:G,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Ce,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function ut(e,t,o){return(t=Se(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Se(e){var t=Le(e,"string");return j(t)=="symbol"?t:t+""}function Le(e,t){if(j(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(j(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lt={name:"Message",extends:Ee,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return W(ut(ut({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:kt},components:{TimesIcon:_t}};function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function pt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,s)}return o}function gt(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?pt(Object(o),!0).forEach(function(s){ze(e,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):pt(Object(o)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))})}return e}function ze(e,t,o){return(t=De(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function De(e){var t=Me(e,"string");return H(t)=="symbol"?t:t+""}function Me(e,t){if(H(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(H(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Be=["data-p"],Te=["data-p"],Ie=["data-p"],Pe=["aria-label","data-p"],Ae=["data-p"];function Oe(e,t,o,s,a,r){var u=et("TimesIcon"),g=wt("ripple");return p(),$(F,b({name:"p-message",appear:""},e.ptmi("transition")),{default:x(function(){return[B(n("div",b({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":r.dataP},e.ptm("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:r.close}):(p(),h("div",b({key:1,class:e.cx("content"),"data-p":r.dataP},e.ptm("content")),[w(e.$slots,"icon",{class:z(e.cx("icon"))},function(){return[(p(),$(I(e.icon?"span":null),b({class:[e.cx("icon"),e.icon],"data-p":r.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(p(),h("div",b({key:0,class:e.cx("text"),"data-p":r.dataP},e.ptm("text")),[w(e.$slots,"default")],16,Ie)):_("",!0),e.closable?B((p(),h("button",b({key:1,class:e.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(c){return r.close(c)}),"data-p":r.dataP},gt(gt({},e.closeButtonProps),e.ptm("closeButton"))),[w(e.$slots,"closeicon",{},function(){return[e.closeIcon?(p(),h("i",b({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,Ae)):(p(),$(u,b({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,Pe)),[[g]]):_("",!0)],16,Te))],16,Be),[[Wt,a.visible]])]}),_:3},16)}Lt.render=Oe;var je=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,He={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Re=P.extend({name:"chip",style:je,classes:He}),Ve={name:"BaseChip",extends:G,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Re,provide:function(){return{$pcChip:this,$parentInstance:this}}},at={name:"Chip",extends:Ve,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return W({removable:this.removable})}},components:{TimesCircleIcon:Ft}},Ke=["aria-label","data-p"],We=["src"];function Fe(e,t,o,s,a,r){return a.visible?(p(),h("div",b({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":r.dataP}),[w(e.$slots,"default",{},function(){return[e.image?(p(),h("img",b({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,We)):e.$slots.icon?(p(),$(I(e.$slots.icon),b({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(p(),h("span",b({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):_("",!0),e.label!==null?(p(),h("div",b({key:3,class:e.cx("label")},e.ptm("label")),l(e.label),17)):_("",!0)]}),e.removable?w(e.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(p(),$(I(e.removeIcon?"span":"TimesCircleIcon"),b({class:[e.cx("removeIcon"),e.removeIcon],onClick:r.close,onKeydown:r.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):_("",!0)],16,Ke)):_("",!0)}at.render=Fe;const Ne={id:"hero-section",class:"min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"},qe={class:"text-center"},Ue={class:"mb-4 animate-fade-in-down animation-delay-0"},Ye={class:"text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200"},Ze={class:"flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300"},Xe={class:"flex-1"},Ge={key:0,class:"mt-3 animate-fade-in"},Je={class:"mt-6 animate-fade-in-up animation-delay-500"},Qe={class:"flex justify-center items-center gap-4 flex-wrap"},to={class:"text-center px-6"},eo={class:"text-4xl font-bold text-primary mb-1"},oo={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},no={class:"text-center px-6"},so={class:"text-4xl font-bold text-primary mb-1"},ao={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},io={class:"text-center px-6"},ro={class:"text-4xl font-bold text-primary mb-1"},lo={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},co={class:"text-center px-6"},uo={class:"text-4xl font-bold text-primary mb-1"},po={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},go={__name:"LandingHero",props:{animatedWaitlist:{type:Number,default:0},animatedSaved:{type:Number,default:0},animatedModules:{type:Number,default:0},animatedSources:{type:Number,default:0}},setup(e){const{t}=C(),o=y(""),s=y(!1),a=y(""),r=y("success"),u=y(!1),g=async()=>{if(!o.value||!o.value.includes("@")){u.value=!0,a.value="Please enter a valid email address",r.value="error",setTimeout(()=>{u.value=!1},500);return}s.value=!0,setTimeout(()=>{a.value="Thanks for joining! We'll be in touch soon.",r.value="success",o.value="",s.value=!1,setTimeout(()=>{a.value=""},5e3)},1e3)};return(c,d)=>(p(),h("div",Ne,[n("div",qe,[n("div",Ue,[f(i(at),{label:"🚀 Launching Soon",class:"px-3 py-2"})]),d[4]||(d[4]=n("h1",{class:"text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in-down animation-delay-100"},[O(" Smarter Insights on "),n("span",{class:"text-gradient"},"What Matters Most")],-1)),n("p",Ye,l(i(t)("hero.subtitle")),1),n("div",Ze,[n("div",Xe,[f(i(oe),{iconPosition:"left",class:"w-full"},{default:x(()=>[f(i(ee),{class:"pi pi-envelope text-gray-500"}),f(i(ot),{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=v=>o.value=v),placeholder:i(t)("hero.form.placeholder"),onKeyup:Nt(g,["enter"]),class:z(["w-full",{"shake-animation":u.value}])},null,8,["modelValue","placeholder","class"])]),_:1})]),f(i(k),{label:i(t)("hero.form.button"),class:"p-button-primary p-button-raised",onClick:g,loading:s.value},null,8,["label","loading"])]),f(F,{name:"fade"},{default:x(()=>[a.value?(p(),h("div",Ge,[f(i(Lt),{severity:r.value,closable:!1},{default:x(()=>[O(l(a.value),1)]),_:1},8,["severity"])])):_("",!0)]),_:1}),n("div",Je,[n("div",Qe,[n("div",to,[n("h3",eo,l(e.animatedWaitlist)+"+",1),n("p",oo,l(i(t)("hero.stats.waitlist")),1)]),d[1]||(d[1]=n("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),n("div",no,[n("h3",so,"$"+l(e.animatedSaved)+"k",1),n("p",ao,l(i(t)("hero.stats.saved")),1)]),d[2]||(d[2]=n("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),n("div",io,[n("h3",ro,l(e.animatedModules),1),n("p",lo,l(i(t)("hero.stats.modules")),1)]),d[3]||(d[3]=n("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),n("div",co,[n("h3",uo,l(e.animatedSources)+"+",1),n("p",po,l(i(t)("hero.stats.sources")),1)])])])])]))}},mo=N(go,[["__scopeId","data-v-963ee27a"]]);var zt={name:"WindowMaximizeIcon",extends:$t};function fo(e,t,o,s,a,r){return p(),h("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}zt.render=fo;var Dt={name:"WindowMinimizeIcon",extends:$t};function ho(e,t,o,s,a,r){return p(),h("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}Dt.render=ho;function mt(){Ut({variableName:Ct("scrollbar.width").name})}function ft(){qt({variableName:Ct("scrollbar.width").name})}var bo=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
`,vo={mask:function(t){var o=t.position,s=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:o==="left"||o==="topleft"||o==="bottomleft"?"flex-start":o==="right"||o==="topright"||o==="bottomright"?"flex-end":"center",alignItems:o==="top"||o==="topleft"||o==="topright"?"flex-start":o==="bottom"||o==="bottomleft"||o==="bottomright"?"flex-end":"center",pointerEvents:s?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},yo={mask:function(t){var o=t.props,s=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],a=s.find(function(r){return r===o.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal},a?"p-dialog-".concat(a):""]},root:function(t){var o=t.props,s=t.instance;return["p-dialog p-component",{"p-dialog-maximized":o.maximizable&&s.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},xo=P.extend({name:"dialog",style:bo,classes:yo,inlineStyles:vo}),_o={name:"BaseDialog",extends:G,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:xo,provide:function(){return{$pcDialog:this,$parentInstance:this}}},J={name:"Dialog",extends:_o,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:q(function(){return t._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&A.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&A.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&yt(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),lt(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&A.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(a){return a&&a.querySelector("[autofocus]")},o=this.$slots.footer&&t(this.footerContainer);o||(o=this.$slots.header&&t(this.headerContainer),o||(o=this.$slots.default&&t(this.content),o||(this.maximizable?(this.focusableMax=!0,o=this.maximizableButton):(this.focusableClose=!0,o=this.closeButton)))),o&&lt(o,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?mt():ft())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&mt()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&ft()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Xt(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var o="";for(var s in this.breakpoints)o+=`
                        @media screen and (max-width: `.concat(s,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[s],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&Zt(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(o){if(t.dragging){var s=E(t.container),a=S(t.container),r=o.pageX-t.lastPageX,u=o.pageY-t.lastPageY,g=t.container.getBoundingClientRect(),c=g.left+r,d=g.top+u,v=Z(),m=getComputedStyle(t.container),D=parseFloat(m.marginLeft),M=parseFloat(m.marginTop);t.container.style.position="fixed",t.keepInViewport?(c>=t.minX&&c+s<v.width&&(t.lastPageX=o.pageX,t.container.style.left=c-D+"px"),d>=t.minY&&d+a<v.height&&(t.lastPageY=o.pageY,t.container.style.top=d-M+"px")):(t.lastPageX=o.pageX,t.container.style.left=c-D+"px",t.lastPageY=o.pageY,t.container.style.top=d-M+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(o){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",o))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.$id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return W({maximized:this.maximized,modal:this.modal})}},directives:{ripple:kt,focustrap:ne},components:{Button:k,Portal:Yt,WindowMinimizeIcon:Dt,WindowMaximizeIcon:zt,TimesIcon:_t}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function ht(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,s)}return o}function bt(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?ht(Object(o),!0).forEach(function(s){ko(e,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ht(Object(o)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))})}return e}function ko(e,t,o){return(t=wo(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function wo(e){var t=$o(e,"string");return R(t)=="symbol"?t:t+""}function $o(e,t){if(R(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(R(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Co=["data-p"],Eo=["aria-labelledby","aria-modal","data-p"],So=["id"],Lo=["data-p"];function zo(e,t,o,s,a,r){var u=et("Button"),g=et("Portal"),c=wt("focustrap");return p(),$(g,{appendTo:e.appendTo},{default:x(function(){return[a.containerVisible?(p(),h("div",b({key:0,ref:r.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return r.onMaskMouseDown&&r.onMaskMouseDown.apply(r,arguments)}),onMouseup:t[2]||(t[2]=function(){return r.onMaskMouseUp&&r.onMaskMouseUp.apply(r,arguments)}),"data-p":r.dataP},e.ptm("mask")),[f(F,b({name:"p-dialog",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?B((p(),h("div",b({key:0,ref:r.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":r.ariaLabelledById,"aria-modal":e.modal,"data-p":r.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:r.close,maximizeCallback:function(v){return r.maximize(v)}}):(p(),h(U,{key:1},[e.showHeader?(p(),h("div",b({key:0,ref:r.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return r.initDrag&&r.initDrag.apply(r,arguments)})},e.ptm("header")),[w(e.$slots,"header",{class:z(e.cx("title"))},function(){return[e.header?(p(),h("span",b({key:0,id:r.ariaLabelledById,class:e.cx("title")},e.ptm("title")),l(e.header),17,So)):_("",!0)]}),n("div",b({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?w(e.$slots,"maximizebutton",{key:0,maximized:a.maximized,maximizeCallback:function(v){return r.maximize(v)}},function(){return[f(u,b({ref:r.maximizableRef,autofocus:a.focusableMax,class:e.cx("pcMaximizeButton"),onClick:r.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:x(function(d){return[w(e.$slots,"maximizeicon",{maximized:a.maximized},function(){return[(p(),$(I(r.maximizeIconComponent),b({class:[d.class,a.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])]}):_("",!0),e.closable?w(e.$slots,"closebutton",{key:1,closeCallback:r.close},function(){return[f(u,b({ref:r.closeButtonRef,autofocus:a.focusableClose,class:e.cx("pcCloseButton"),onClick:r.close,"aria-label":r.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:x(function(d){return[w(e.$slots,"closeicon",{},function(){return[(p(),$(I(e.closeIcon?"span":"TimesIcon"),b({class:[e.closeIcon,d.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])]}):_("",!0)],16)],16)):_("",!0),n("div",b({ref:r.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle,"data-p":r.dataP},bt(bt({},e.contentProps),e.ptm("content"))),[w(e.$slots,"default")],16,Lo),e.footer||e.$slots.footer?(p(),h("div",b({key:1,ref:r.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer",{},function(){return[O(l(e.footer),1)]})],16)):_("",!0)],64))],16,Eo)),[[c,{disabled:!e.modal}]]):_("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Co)):_("",!0)]}),_:3},8,["appendTo"])}J.render=zo;const Do={class:"flex items-center gap-3"},Mo={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Bo={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},To={class:"flex flex-col gap-6 p-4"},Io={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},Po={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},Ao={class:"text-sm text-gray-600 dark:text-gray-400"},Oo={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},jo={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},Ho={class:"text-sm text-gray-600 dark:text-gray-400"},Ro={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},Vo={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},Ko={class:"text-sm text-gray-600 dark:text-gray-400"},Wo={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},Fo={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},No={class:"text-sm text-gray-600 dark:text-gray-400"},qo={class:"text-xl font-bold text-green-500"},Mt={__name:"StockPreviewModal",props:{visible:{type:Boolean,default:!1},stockData:{type:Object,required:!0}},emits:["close"],setup(e,{emit:t}){const{t:o}=C(),s=e,a=y(s.visible);X(()=>s.visible,g=>{a.value=g});const r=q(()=>({labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Stock Price",data:s.stockData.chart,fill:!0,borderColor:"#6366F1",tension:.4,backgroundColor:"rgba(99, 102, 241, 0.2)"}]})),u=y({maintainAspectRatio:!1,aspectRatio:2,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}},y:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}}}});return(g,c)=>(p(),$(i(J),{visible:a.value,"onUpdate:visible":c[0]||(c[0]=d=>a.value=d),modal:"",header:e.stockData.symbol,style:{width:"45rem"},dismissableMask:!0,onHide:c[1]||(c[1]=d=>g.$emit("close"))},{header:x(()=>[n("div",Do,[c[2]||(c[2]=n("i",{class:"pi pi-chart-line text-2xl text-primary"},null,-1)),n("div",null,[n("h2",Mo,l(e.stockData.name)+" ("+l(e.stockData.symbol)+")",1),n("p",Bo,l(i(o)("stockModal.subtitle")),1)])])]),default:x(()=>[n("div",To,[n("div",null,[f(i(se),{type:"line",data:r.value,options:u.value},null,8,["data","options"])]),n("div",Io,[n("div",Po,[n("p",Ao,l(i(o)("stockModal.price")),1),n("p",Oo,"$"+l(e.stockData.price),1)]),n("div",jo,[n("p",Ho,l(i(o)("stockModal.market_cap")),1),n("p",Ro,"$"+l(e.stockData.marketCap),1)]),n("div",Vo,[n("p",Ko,l(i(o)("stockModal.pe_ratio")),1),n("p",Wo,l(e.stockData.peRatio),1)]),n("div",Fo,[n("p",No,l(i(o)("stockModal.sentiment")),1),n("p",qo,l(e.stockData.sentiment)+"% "+l(i(o)("stockModal.bullish")),1)])])])]),_:1},8,["visible","header"]))}},Uo={class:"flex items-center gap-3"},Yo={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Zo={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},Xo={class:"p-4"},Go={class:"mb-6"},Jo={class:"text-sm text-gray-500 dark:text-gray-400"},Qo={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},tn={class:"text-xs text-gray-500 dark:text-gray-400"},en={class:"space-y-4"},on={class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},nn={class:"text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"},sn={class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},an={class:"bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-lg p-3"},rn={class:"font-bold"},ln={class:"text-sm"},dn={__name:"NewsPreviewModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const{t:o}=C(),s=e,a=y(s.visible);return X(()=>s.visible,r=>{a.value=r}),(r,u)=>(p(),$(i(J),{visible:a.value,"onUpdate:visible":u[0]||(u[0]=g=>a.value=g),modal:"",header:i(o)("newsModal.title"),style:{width:"40rem"},dismissableMask:!0,onHide:u[1]||(u[1]=g=>r.$emit("close"))},{header:x(()=>[n("div",Uo,[u[2]||(u[2]=n("i",{class:"pi pi-globe text-2xl text-primary"},null,-1)),n("div",null,[n("h2",Yo,l(i(o)("newsModal.title")),1),n("p",Zo,l(i(o)("newsModal.subtitle")),1)])])]),default:x(()=>[n("div",Xo,[n("div",Go,[n("p",Jo,l(i(o)("newsModal.source_article")),1),n("h3",Qo,'"'+l(i(o)("usp.news_title"))+'"',1),n("p",tn,l(i(o)("newsModal.source_name")),1)]),n("div",en,[n("div",null,[n("p",on,l(i(o)("newsModal.summary")),1),n("p",nn,l(i(o)("newsModal.summary_text")),1)]),n("div",null,[n("p",sn,l(i(o)("newsModal.sentiment_analysis")),1),n("div",an,[n("p",rn,l(i(o)("newsModal.sentiment_title")),1),n("p",ln,l(i(o)("newsModal.sentiment_text")),1)])])])])]),_:1},8,["visible","header"]))}},cn={class:"px-4 py-16 md:px-6 lg:px-8"},un={class:"text-center mb-12"},pn={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},gn={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},mn={class:"max-w-5xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 fade-up stagger-2"},fn={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"},hn={class:"flex flex-col items-center text-center"},bn={class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},vn={class:"text-lg font-bold text-gray-900 dark:text-gray-100"},yn={class:"text-sm text-gray-600 dark:text-gray-400 mt-2"},xn={class:"flex flex-col items-center text-center"},_n={class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},kn={class:"flex justify-center gap-4 mt-4 w-full h-full"},wn={class:"flex items-center justify-center gap-2 mt-1"},$n={class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},Cn={class:"flex items-center justify-center gap-2 mt-1"},En={class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},Sn={class:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"},Ln={class:"bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 rounded-lg p-4 flex items-center gap-4"},zn={class:"font-bold"},Dn={__name:"LandingUsp",setup(e){const{t}=C(),o=y(!1),s=y(!1),a=y({}),r={TSLA:{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",marketCap:"758B",peRatio:"71.2",sentiment:85,chart:[220,225,230,228,235,238]},NVDA:{symbol:"NVDA",name:"NVIDIA Corp.",price:"471.16",marketCap:"1.16T",peRatio:"61.5",sentiment:78,chart:[450,455,465,460,472,471]}},u=c=>{a.value=r[c],o.value=!0},g=()=>{s.value=!0};return(c,d)=>(p(),h("div",null,[n("div",cn,[n("div",un,[n("h2",pn,l(i(t)("usp.title")),1),n("p",gn,l(i(t)("usp.subtitle")),1)]),n("div",mn,[n("div",fn,[n("div",hn,[d[4]||(d[4]=n("i",{class:"pi pi-globe text-4xl text-blue-500 mb-4"},null,-1)),n("p",bn,l(i(t)("usp.market_event")),1),n("div",{onClick:g,class:"mt-4 p-4 w-full h-full border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[n("p",vn,'"'+l(i(t)("usp.news_title"))+'"',1),n("p",yn,l(i(t)("usp.news_source")),1)])]),n("div",xn,[d[9]||(d[9]=n("i",{class:"pi pi-chart-pie text-4xl text-green-500 mb-4"},null,-1)),n("p",_n,l(i(t)("usp.impact_title")),1),n("div",kn,[n("div",{onClick:d[0]||(d[0]=v=>u("TSLA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[d[6]||(d[6]=n("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"TSLA",-1)),n("div",wn,[n("span",$n,l(i(t)("usp.potential_decline")),1),d[5]||(d[5]=n("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"},null,-1))])]),n("div",{onClick:d[1]||(d[1]=v=>u("NVDA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[d[8]||(d[8]=n("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"NVDA",-1)),n("div",Cn,[n("span",En,l(i(t)("usp.potential_decline")),1),d[7]||(d[7]=n("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"},null,-1))])])])])]),n("div",Sn,[n("div",Ln,[d[10]||(d[10]=n("i",{class:"pi pi-sparkles text-2xl"},null,-1)),n("div",null,[n("p",zn,l(i(t)("usp.alert_title")),1),n("p",null,[O(l(i(t)("usp.alert_text"))+" ",1),n("button",{onClick:g,class:"font-semibold underline hover:text-violet-200"},l(i(t)("usp.alert_link")),1)])])])])])]),f(Mt,{visible:o.value,"stock-data":a.value,onClose:d[2]||(d[2]=v=>o.value=!1)},null,8,["visible","stock-data"]),f(dn,{visible:s.value,onClose:d[3]||(d[3]=v=>s.value=!1)},null,8,["visible"])]))}};var Mn=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,Bn={root:function(t){var o=t.props;return["p-tag p-component",{"p-tag-info":o.severity==="info","p-tag-success":o.severity==="success","p-tag-warn":o.severity==="warn","p-tag-danger":o.severity==="danger","p-tag-secondary":o.severity==="secondary","p-tag-contrast":o.severity==="contrast","p-tag-rounded":o.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Tn=P.extend({name:"tag",style:Mn,classes:Bn}),In={name:"BaseTag",extends:G,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Tn,provide:function(){return{$pcTag:this,$parentInstance:this}}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function Pn(e,t,o){return(t=An(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function An(e){var t=On(e,"string");return V(t)=="symbol"?t:t+""}function On(e,t){if(V(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(V(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Bt={name:"Tag",extends:In,inheritAttrs:!1,computed:{dataP:function(){return W(Pn({rounded:this.rounded},this.severity,this.severity))}}},jn=["data-p"];function Hn(e,t,o,s,a,r){return p(),h("span",b({class:e.cx("root"),"data-p":r.dataP},e.ptmi("root")),[e.$slots.icon?(p(),$(I(e.$slots.icon),b({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(p(),h("span",b({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):_("",!0),e.value!=null||e.$slots.default?w(e.$slots,"default",{key:2},function(){return[n("span",b({class:e.cx("label")},e.ptm("label")),l(e.value),17)]}):_("",!0)],16,jn)}Bt.render=Hn;const Rn={class:"px-4 py-8 md:px-6 lg:px-8"},Vn={class:"text-center mb-6"},Kn={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},Wn={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},Fn={class:"text-sm text-gray-500 dark:text-gray-500 mt-2 fade-up stagger-2"},Nn={class:"max-w-7xl mx-auto py-8"},qn={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Un={class:"module-card group h-full bg-white dark:bg-gray-800 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 flex flex-col"},Yn={class:"mb-4"},Zn={class:"flex justify-between items-start"},Xn={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Gn={class:"text-sm text-gray-600 dark:text-gray-400 m-0"},Jn={class:"mb-4"},Qn={class:"flex items-baseline mb-1"},ts={class:"text-4xl font-bold text-gray-900 dark:text-gray-100"},es={class:"text-sm text-gray-500 dark:text-gray-400"},os={class:"ml-2"},ns={class:"h-16 my-4 bg-gray-50 dark:bg-gray-700/50 rounded-md p-2 flex-shrink-0"},ss={viewBox:"0 0 100 40",preserveAspectRatio:"none",class:"w-full h-full"},as=["points","stroke"],is=["d","fill"],rs={class:"grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6 flex-shrink-0"},ls={class:"text-center"},ds={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},cs={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},us={class:"text-center"},ps={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},gs={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},ms={class:"text-center"},fs={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},hs={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},bs={class:"mb-4 flex flex-col flex-grow"},vs={class:"flex items-center gap-2 mb-3"},ys={class:"font-semibold text-gray-900 dark:text-gray-100"},xs={class:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed"},_s={class:"mt-auto bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"},ks={class:"flex justify-between items-center mb-2"},ws={class:"text-xs text-gray-500 dark:text-gray-400"},$s={class:"text-xs font-bold text-gray-900 dark:text-gray-100"},Cs={class:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"},Es={class:"flex justify-center gap-4 pt-2"},Ss={class:"text-center mt-8"},Ls={class:"text-gray-600 dark:text-gray-400 mt-3"},zs={__name:"LandingModulesDemo",setup(e){const{t}=C();y(null);const o=y(!1),s=y({}),a=y([{symbol:"AAPL",name:"Apple Inc.",price:"195.89",change:2.5,changeAmount:"+$4.73",simpleChart:"0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5",volume:"52.3M",marketCap:"3.04T",peRatio:"32.1",sentiment:78,insightKey:"aapl_insight",chart:[180,185,182,188,192,195]},{symbol:"BTC",name:"Bitcoin",price:"43,250",change:-1.2,changeAmount:"-$525.50",simpleChart:"0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30",volume:"$24.8B",marketCap:"847B",peRatio:"N/A",sentiment:45,insightKey:"btc_insight",chart:[42e3,42500,41800,43e3,43500,43250]},{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",change:3.8,changeAmount:"+$8.73",simpleChart:"0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2",volume:"118.2M",marketCap:"758B",peRatio:"71.2",sentiment:85,insightKey:"tsla_insight",chart:[220,225,230,228,235,238]}]),r=q(()=>a.value.map(c=>({...c,insight:t(`modulesDemo.cards.${c.insightKey}`)}))),u=c=>c>=70?"#22c55e":c>=30?"#f59e0b":"#ef4444",g=c=>{s.value=c,o.value=!0};return(c,d)=>{const v=St;return p(),h("div",null,[n("div",Rn,[n("div",Vn,[n("h2",Kn,l(i(t)("modulesDemo.title")),1),n("p",Wn,l(i(t)("modulesDemo.subtitle")),1),n("p",Fn,l(i(t)("modulesDemo.placeholder_text")),1)]),n("div",Nn,[n("div",qn,[(p(!0),h(U,null,st(r.value,(m,D)=>(p(),h("div",{key:m.symbol,class:z(["p-4","fade-up",`stagger-${D+2}`])},[n("div",Un,[n("div",Yn,[n("div",Zn,[n("div",null,[n("h3",Xn,l(m.symbol),1),n("p",Gn,l(m.name),1)]),f(i(Bt),{severity:m.change>0?"success":"danger",class:"font-semibold"},{default:x(()=>[O(l(m.change>0?"+":"")+l(m.change)+"% ",1)]),_:2},1032,["severity"])])]),n("div",Jn,[n("div",Qn,[d[1]||(d[1]=n("span",{class:"text-xl text-gray-600 dark:text-gray-500 mr-1"},"$",-1)),n("span",ts,l(m.price),1)]),n("div",es,[n("span",null,l(m.changeAmount),1),n("span",os,l(i(t)("modulesDemo.cards.today")),1)])]),n("div",ns,[(p(),h("svg",ss,[d[2]||(d[2]=n("line",{x1:"0",y1:"20",x2:"100",y2:"20",stroke:"#f0f0f0","stroke-width":"1"},null,-1)),n("polyline",{points:m.simpleChart,fill:"none",stroke:m.change>0?"#22c55e":"#ef4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,as),n("path",{d:`M ${m.simpleChart} L 100,40 L 0,40 Z`,fill:m.change>0?"#22c55e20":"#ef444420"},null,8,is)]))]),n("div",rs,[n("div",ls,[n("span",ds,l(i(t)("modulesDemo.cards.volume")),1),n("span",cs,l(m.volume),1)]),n("div",us,[n("span",ps,l(i(t)("modulesDemo.cards.market_cap")),1),n("span",gs,l(m.marketCap),1)]),n("div",ms,[n("span",fs,l(i(t)("modulesDemo.cards.pe_ratio")),1),n("span",hs,l(m.peRatio),1)])]),n("div",bs,[n("div",vs,[d[3]||(d[3]=n("i",{class:"pi pi-sparkles text-primary"},null,-1)),n("span",ys,l(i(t)("modulesDemo.cards.ai_analysis")),1)]),n("p",xs,l(m.insight),1),n("div",_s,[n("div",ks,[n("span",ws,l(i(t)("modulesDemo.cards.sentiment")),1),n("span",$s,l(m.sentiment)+"% "+l(i(t)("modulesDemo.cards.bullish")),1)]),n("div",Cs,[n("div",{class:"h-full rounded-full transition-all duration-500",style:Et({width:m.sentiment+"%",backgroundColor:u(m.sentiment)})},null,4)])])]),n("div",Es,[B(f(i(k),{icon:"pi pi-bell",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[v,i(t)("tooltips.alerts")]]),B(f(i(k),{onClick:M=>g(m),icon:"pi pi-chart-line",class:"p-button-text p-button-sm p-button-rounded"},null,8,["onClick"]),[[v,i(t)("tooltips.details")]]),B(f(i(k),{icon:"pi pi-cog",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[v,i(t)("tooltips.settings")]])])])],2))),128))]),n("div",Ss,[f(i(k),{label:i(t)("modulesDemo.dashboard_button"),class:"p-button-outlined p-button-lg",disabled:""},null,8,["label"]),n("p",Ls,l(i(t)("modulesDemo.waitlist_prompt")),1)])])]),f(Mt,{visible:o.value,"stock-data":s.value,onClose:d[0]||(d[0]=m=>o.value=!1)},null,8,["visible","stock-data"])])}}},Ds=N(zs,[["__scopeId","data-v-a9feb2c3"]]),Ms={id:"features",class:"px-4 py-8 md:px-6 lg:px-8"},Bs={class:"text-center text-gray-900 dark:text-gray-100 text-3xl font-bold mb-6 fade-up"},Ts={class:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"},Is=["onMouseenter"],Ps={class:"mb-4"},As={class:"text-gray-900 dark:text-gray-100 text-xl mb-3 font-semibold"},Os={class:"text-gray-600 dark:text-gray-400 leading-relaxed"},js={__name:"LandingFeatures",setup(e){const{t}=C(),o=y(null),s=y([{icon:"pi-filter",key:"tracking"},{icon:"pi-sparkles",key:"insights"},{icon:"pi-sitemap",key:"alerts"},{icon:"pi-shield",key:"security"},{icon:"pi-mobile",key:"access"},{icon:"pi-dollar",key:"power"}]),a=q(()=>s.value.map(r=>({...r,title:t(`features.cards.${r.key}.title`),description:t(`features.cards.${r.key}.description`)})));return(r,u)=>(p(),h("div",Ms,[n("h2",Bs,l(i(t)("features.title")),1),n("div",Ts,[(p(!0),h(U,null,st(a.value,(g,c)=>(p(),h("div",{key:c,class:z(["text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700","fade-up",`stagger-${c%3+1}`]),onMouseenter:d=>o.value=c,onMouseleave:u[0]||(u[0]=d=>o.value=null)},[n("div",Ps,[n("i",{class:z([`pi ${g.icon} text-5xl transition-colors duration-300`,o.value===c?"text-primary":"text-violet-400"])},null,2)]),n("h3",As,l(g.title),1),n("p",Os,l(g.description),1)],42,Is))),128))])]))}},Hs={class:"px-4 py-16 md:px-6 lg:px-8"},Rs={class:"text-center mb-12"},Vs={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},Ks={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},Ws={class:"max-w-4xl mx-auto"},Fs={class:"p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 fade-up stagger-1"},Ns={class:"space-y-8"},qs={class:"flex items-start gap-4"},Us={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},Ys={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},Zs={class:"flex items-start gap-4"},Xs={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},Gs={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},Js={class:"flex items-start gap-4"},Qs={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},ta={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},ea={__name:"LandingUseCases",setup(e){const{t}=C();return(o,s)=>(p(),h("div",Hs,[n("div",Rs,[n("h2",Vs,l(i(t)("useCases.title")),1),n("p",Ks,l(i(t)("useCases.subtitle")),1)]),n("div",Ws,[n("div",Fs,[n("ul",Ns,[n("li",qs,[s[0]||(s[0]=n("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[n("i",{class:"pi pi-filter-fill text-2xl text-violet-600 dark:text-violet-400"})],-1)),n("div",null,[n("h3",Us,l(i(t)("useCases.focused_title")),1),n("p",Ys,l(i(t)("useCases.focused_text")),1)])]),n("li",Zs,[s[1]||(s[1]=n("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[n("i",{class:"pi pi-sitemap text-2xl text-violet-600 dark:text-violet-400"})],-1)),n("div",null,[n("h3",Xs,l(i(t)("useCases.cross_asset_title")),1),n("p",Gs,l(i(t)("useCases.cross_asset_text")),1)])]),n("li",Js,[s[2]||(s[2]=n("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[n("i",{class:"pi pi-clock text-2xl text-violet-600 dark:text-violet-400"})],-1)),n("div",null,[n("h3",Qs,l(i(t)("useCases.time_strapped_title")),1),n("p",ta,l(i(t)("useCases.time_strapped_text")),1)])])])])])]))}};var oa=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,na={root:function(t){var o=t.instance,s=t.props;return["p-textarea p-component",{"p-filled":o.$filled,"p-textarea-resizable ":s.autoResize,"p-textarea-sm p-inputfield-sm":s.size==="small","p-textarea-lg p-inputfield-lg":s.size==="large","p-invalid":o.$invalid,"p-variant-filled":o.$variant==="filled","p-textarea-fluid":o.$fluid}]}},sa=P.extend({name:"textarea",style:oa,classes:na}),aa={name:"BaseTextarea",extends:Qt,props:{autoResize:Boolean},style:sa,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function ia(e,t,o){return(t=ra(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ra(e){var t=la(e,"string");return K(t)=="symbol"?t:t+""}function la(e,t){if(K(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(K(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Tt={name:"Textarea",extends:aa,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return b(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return W(ia({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},da=["value","name","disabled","aria-invalid","data-p"];function ca(e,t,o,s,a,r){return p(),h("textarea",b({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":r.dataP,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,da)}Tt.render=ca;const ua={class:"flex items-center gap-3"},pa={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},ga={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},ma={class:"p-4"},fa={class:"flex flex-col gap-4"},ha={for:"name",class:"font-semibold text-gray-700 dark:text-gray-300"},ba={for:"email",class:"font-semibold text-gray-700 dark:text-gray-300"},va={for:"message",class:"font-semibold text-gray-700 dark:text-gray-300"},ya={__name:"ContactSalesModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const{t:o}=C(),s=e,a=y(s.visible);return X(()=>s.visible,r=>{a.value=r}),(r,u)=>(p(),$(i(J),{visible:a.value,"onUpdate:visible":u[2]||(u[2]=g=>a.value=g),modal:"",header:i(o)("contactModal.title"),style:{width:"35rem"},dismissableMask:!0,onHide:u[3]||(u[3]=g=>r.$emit("close"))},{header:x(()=>[n("div",ua,[u[4]||(u[4]=n("i",{class:"pi pi-envelope text-2xl text-primary"},null,-1)),n("div",null,[n("h2",pa,l(i(o)("contactModal.title")),1),n("p",ga,l(i(o)("contactModal.subtitle")),1)])])]),footer:x(()=>[f(i(k),{label:i(o)("contactModal.cancel_button"),text:"",severity:"secondary",onClick:u[0]||(u[0]=g=>r.$emit("close"))},null,8,["label"]),f(i(k),{label:i(o)("contactModal.send_button"),severity:"success",icon:"pi pi-send",onClick:u[1]||(u[1]=g=>r.$emit("close"))},null,8,["label"])]),default:x(()=>[n("div",ma,[n("div",fa,[n("div",null,[n("label",ha,l(i(o)("contactModal.name_label")),1),f(i(ot),{id:"name",class:"w-full mt-1",placeholder:i(o)("contactModal.name_placeholder")},null,8,["placeholder"])]),n("div",null,[n("label",ba,l(i(o)("contactModal.email_label")),1),f(i(ot),{id:"email",class:"w-full mt-1",placeholder:i(o)("contactModal.email_placeholder")},null,8,["placeholder"])]),n("div",null,[n("label",va,l(i(o)("contactModal.message_label")),1),f(i(Tt),{id:"message",class:"w-full mt-1",placeholder:i(o)("contactModal.message_placeholder"),rows:"4"},null,8,["placeholder"])])])])]),_:1},8,["visible","header"]))}},xa={id:"pricing",class:"py-12 px-4 md:px-6 lg:px-8"},_a={class:"text-center mb-12"},ka={class:"text-gray-900 dark:text-gray-100 font-bold mb-3 text-4xl fade-up"},wa={class:"text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto fade-up stagger-1"},$a={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"},Ca={class:"p-0 md:p-4 fade-up stagger-1"},Ea={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},Sa={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},La={class:"text-3xl font-bold"},za={class:"text-gray-600 dark:text-gray-400 mt-2"},Da={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},Ma={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},Ba={class:"mb-8 flex flex-col items-center gap-4"},Ta={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},Ia={class:"flex items-start"},Pa={class:"text-gray-700 dark:text-gray-300"},Aa={class:"flex items-start"},Oa={class:"text-gray-700 dark:text-gray-300"},ja={class:"flex items-start"},Ha={class:"text-gray-700 dark:text-gray-300"},Ra={class:"flex items-start"},Va={class:"text-gray-700 dark:text-gray-300"},Ka={class:"flex items-start"},Wa={class:"text-gray-400 dark:text-gray-500"},Fa={class:"flex items-start"},Na={class:"text-gray-400 dark:text-gray-500"},qa={class:"flex items-start"},Ua={class:"text-gray-400 dark:text-gray-500"},Ya={class:"p-0 md:p-4 fade-up stagger-2"},Za={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-violet-500 duration-300 transition-all cursor-pointer h-full"},Xa={class:"absolute -top-4 left-1/2 -translate-x-1/2"},Ga={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},Ja={class:"text-3xl font-bold"},Qa={class:"text-gray-600 dark:text-gray-400 mt-2"},ti={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},ei={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},oi={class:"mb-8 flex flex-col items-center gap-4"},ni={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},si={class:"flex items-start"},ai={class:"text-gray-700 dark:text-gray-300"},ii={class:"flex items-start"},ri={class:"text-gray-700 dark:text-gray-300"},li={class:"flex items-start"},di={class:"text-gray-700 dark:text-gray-300"},ci={class:"flex items-start"},ui={class:"text-gray-700 dark:text-gray-300"},pi={class:"flex items-start"},gi={class:"text-gray-700 dark:text-gray-300"},mi={class:"flex items-start"},fi={class:"text-gray-700 dark:text-gray-300"},hi={class:"flex items-start"},bi={class:"text-gray-400 dark:text-gray-500"},vi={class:"p-0 md:p-4 fade-up stagger-3"},yi={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},xi={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},_i={class:"text-3xl font-bold"},ki={class:"text-gray-600 dark:text-gray-400 mt-2"},wi={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},$i={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},Ci={class:"mb-8 flex flex-col items-center gap-4"},Ei={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},Si={class:"flex items-start"},Li={class:"text-gray-700 dark:text-gray-300"},zi={class:"flex items-start"},Di={class:"text-gray-700 dark:text-gray-300"},Mi={class:"flex items-start"},Bi={class:"text-gray-700 dark:text-gray-300"},Ti={class:"flex items-start"},Ii={class:"text-gray-700 dark:text-gray-300"},Pi={class:"flex items-start"},Ai={class:"text-gray-700 dark:text-gray-300"},Oi={class:"flex items-start"},ji={class:"text-gray-700 dark:text-gray-300"},Hi={class:"flex items-start"},Ri={class:"text-gray-700 dark:text-gray-300"},Vi={class:"mt-12 text-center bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto"},Ki={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"},Wi={class:"text-gray-600 dark:text-gray-400 mb-6"},Fi={__name:"LandingPricing",setup(e){const{t}=C();xt();const o=y(!1);return(s,a)=>(p(),h(U,null,[n("div",xa,[n("div",_a,[n("h2",ka,l(i(t)("pricing.title")),1),n("p",wa,l(i(t)("pricing.subtitle")),1)]),n("div",$a,[n("div",Ca,[n("div",Ea,[n("div",Sa,[n("h3",La,l(i(t)("pricing.essential_name")),1),n("p",za,l(i(t)("pricing.essential_desc")),1)]),n("div",Da,[n("span",Ma,"3 "+l(i(t)("pricing.modules_label")),1)]),n("div",Ba,[a[2]||(a[2]=n("div",{class:"flex items-baseline"},[n("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$19"),n("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),f(i(k),{label:i(t)("pricing.trial_button"),outlined:"",class:"w-full",onClick:s.scrollToWaitlist},null,8,["label","onClick"])]),a[10]||(a[10]=n("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),n("ul",Ta,[n("li",Ia,[a[3]||(a[3]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Pa,l(i(t)("pricing.features.real_time")),1)]),n("li",Aa,[a[4]||(a[4]=n("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),n("span",Oa,l(i(t)("pricing.features.sentiment")),1)]),n("li",ja,[a[5]||(a[5]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Ha,l(i(t)("pricing.features.standard_support")),1)]),n("li",Ra,[a[6]||(a[6]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Va,l(i(t)("pricing.features.works_on_all")),1)]),n("li",Ka,[a[7]||(a[7]=n("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),n("span",Wa,l(i(t)("pricing.features.cross_investment")),1)]),n("li",Fa,[a[8]||(a[8]=n("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),n("span",Na,l(i(t)("pricing.features.custom_alerts")),1)]),n("li",qa,[a[9]||(a[9]=n("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),n("span",Ua,l(i(t)("pricing.features.export")),1)])])])]),n("div",Ya,[n("div",Za,[n("div",Xa,[f(i(at),{label:i(t)("pricing.popular_badge"),class:"bg-violet-600 text-white px-4 py-2"},null,8,["label"])]),n("div",Ga,[n("h3",Ja,l(i(t)("pricing.advanced_name")),1),n("p",Qa,l(i(t)("pricing.advanced_desc")),1)]),n("div",ti,[n("span",ei,"6 "+l(i(t)("pricing.modules_label")),1)]),n("div",oi,[a[11]||(a[11]=n("div",{class:"flex items-baseline"},[n("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$29"),n("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),f(i(k),{label:i(t)("pricing.trial_button"),severity:"success",class:"w-full",onClick:s.scrollToWaitlist},null,8,["label","onClick"])]),a[19]||(a[19]=n("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),n("ul",ni,[n("li",si,[a[12]||(a[12]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",ai,l(i(t)("pricing.features.real_time")),1)]),n("li",ii,[a[13]||(a[13]=n("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),n("span",ri,l(i(t)("pricing.features.sentiment")),1)]),n("li",li,[a[14]||(a[14]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",di,[n("strong",null,l(i(t)("pricing.features.priority_support")),1)])]),n("li",ci,[a[15]||(a[15]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",ui,l(i(t)("pricing.features.works_on_all")),1)]),n("li",pi,[a[16]||(a[16]=n("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),n("span",gi,[n("strong",null,l(i(t)("pricing.features.cross_investment")),1)])]),n("li",mi,[a[17]||(a[17]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",fi,l(i(t)("pricing.features.custom_alerts")),1)]),n("li",hi,[a[18]||(a[18]=n("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),n("span",bi,l(i(t)("pricing.features.export")),1)])])])]),n("div",vi,[n("div",yi,[n("div",xi,[n("h3",_i,l(i(t)("pricing.professional_name")),1),n("p",ki,l(i(t)("pricing.professional_desc")),1)]),n("div",wi,[n("span",$i,"9 "+l(i(t)("pricing.modules_label")),1)]),n("div",Ci,[a[20]||(a[20]=n("div",{class:"flex items-baseline"},[n("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$34"),n("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),f(i(k),{label:i(t)("pricing.trial_button"),outlined:"",class:"w-full",onClick:s.scrollToWaitlist},null,8,["label","onClick"])]),a[28]||(a[28]=n("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),n("ul",Ei,[n("li",Si,[a[21]||(a[21]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Li,l(i(t)("pricing.features.real_time")),1)]),n("li",zi,[a[22]||(a[22]=n("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),n("span",Di,l(i(t)("pricing.features.sentiment")),1)]),n("li",Mi,[a[23]||(a[23]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Bi,[n("strong",null,l(i(t)("pricing.features.dedicated_support")),1)])]),n("li",Ti,[a[24]||(a[24]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Ii,l(i(t)("pricing.features.works_on_all")),1)]),n("li",Pi,[a[25]||(a[25]=n("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),n("span",Ai,[n("strong",null,l(i(t)("pricing.features.cross_investment")),1)])]),n("li",Oi,[a[26]||(a[26]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",ji,l(i(t)("pricing.features.custom_alerts")),1)]),n("li",Hi,[a[27]||(a[27]=n("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),n("span",Ri,[n("strong",null,l(i(t)("pricing.features.export")),1)])])])])])]),n("div",Vi,[n("h3",Ki,l(i(t)("pricing.enterprise_title")),1),n("p",Wi,l(i(t)("pricing.enterprise_text")),1),f(i(k),{label:i(t)("pricing.contact_button"),class:"p-button-outlined p-button-lg",icon:"pi pi-arrow-right",iconPos:"right",onClick:a[0]||(a[0]=r=>o.value=!0)},null,8,["label"])])]),f(ya,{visible:o.value,onClose:a[1]||(a[1]=r=>o.value=!1)},null,8,["visible"])],64))}},Ni={class:"px-4 py-16 md:px-6 lg:px-8"},qi={class:"max-w-4xl mx-auto"},Ui={class:"text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"},Yi={class:"space-y-4"},Zi=["onClick","aria-expanded"],Xi={class:"font-semibold text-gray-900 dark:text-gray-100"},Gi={key:0,class:"bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700"},Ji={class:"px-6 pb-4 pt-2 text-gray-700 dark:text-gray-300"},Qi={__name:"LandingFAQ",setup(e){const{t}=C(),o=y(null),s=q(()=>[{question:t("faq.q1"),answer:t("faq.a1")},{question:t("faq.q2"),answer:t("faq.a2")},{question:t("faq.q3"),answer:t("faq.a3")},{question:t("faq.q4"),answer:t("faq.a4")},{question:t("faq.q5"),answer:t("faq.a5")},{question:t("faq.q6"),answer:t("faq.a6")}]),a=r=>{o.value=o.value===r?null:r};return(r,u)=>(p(),h("section",Ni,[n("div",qi,[n("h2",Ui,l(i(t)("faq.title")),1),n("div",Yi,[(p(!0),h(U,null,st(s.value,(g,c)=>(p(),h("div",{key:c,class:z(["border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden","fade-up",`stagger-${c+1}`])},[n("button",{onClick:d=>a(c),class:"w-full px-6 py-4 text-left flex items-center justify-between bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors","aria-expanded":o.value===c},[n("span",Xi,l(g.question),1),n("i",{class:z(["pi",o.value===c?"pi-chevron-up":"pi-chevron-down","text-gray-500 dark:text-gray-400 transition-transform duration-300"])},null,2)],8,Zi),f(F,{name:"accordion-fade"},{default:x(()=>[o.value===c?(p(),h("div",Gi,[n("div",Ji,l(g.answer),1)])):_("",!0)]),_:2},1024)],2))),128))])])]))}},tr=N(Qi,[["__scopeId","data-v-680cc850"]]),er={class:"px-4 py-8 md:px-6 lg:px-8 text-center"},or={class:"max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8"},nr={class:"flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-4 mb-4"},sr={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},ar={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},ir={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},rr={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},lr={class:"text-sm text-gray-500 dark:text-gray-500"},dr={class:"text-xs text-gray-400 dark:text-gray-600 mt-2"},cr={__name:"LandingFooter",setup(e){const{t}=C();return(o,s)=>(p(),h("footer",er,[n("div",or,[n("div",nr,[n("a",sr,l(i(t)("footer.legal")),1),n("a",ar,l(i(t)("footer.privacy")),1),n("a",ir,l(i(t)("footer.terms")),1),n("a",rr,l(i(t)("footer.cancellation")),1)]),n("p",lr,l(i(t)("footer.copyright",{year:new Date().getFullYear()})),1),n("p",dr,l(i(t)("footer.disclaimer")),1)])]))}};function ur(){return{scrollToWaitlist:()=>{const t=document.getElementById("hero-section"),o=document.getElementById("waitlist-email-input");t&&t.scrollIntoView({behavior:"smooth",block:"center"}),o&&setTimeout(()=>{o.focus()},500)}}}const pr={class:"fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40"},gr={class:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"},mr={class:"text-center md:text-left"},fr={class:"font-semibold"},hr={class:"text-sm opacity-90"},br={__name:"LandingStickyCTA",setup(e){const{t}=C(),{scrollToWaitlist:o}=ur();return(s,a)=>(p(),h("div",pr,[n("div",gr,[n("div",mr,[n("p",fr,l(i(t)("stickyCTA.title")),1),n("p",hr,l(i(t)("stickyCTA.subtitle")),1)]),f(i(k),{label:i(t)("stickyCTA.button_beta"),class:"bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold",onClick:i(o)},null,8,["label","onClick"])])]))}},vr=N(br,[["__scopeId","data-v-f5c7e33a"]]),yr={__name:"Landing",setup(e){ae();const t=y(0),o=y(0),s=y(0),a=y(0),r=y(!1),u=(c,d,v,m)=>{const M=(v-d)/(m/16);let Q=d;const It=setInterval(()=>{Q+=M,Q>=v?(c.value=v,clearInterval(It)):c.value=Math.floor(Q)},16)},g=()=>{const c=window.scrollY,d=window.innerHeight,v=document.documentElement.scrollHeight,m=c>d*2,D=c>v-d*1.5,M=document.getElementById("pricing")&&c>document.getElementById("pricing").offsetTop;r.value=m&&M||D};return nt(()=>{u(t,0,234,2e3),u(o,0,23,2e3),u(s,0,9,1500),u(a,0,15,1800),window.addEventListener("scroll",g),document.title="Clear Cut Markets - Smarter Insights on What Matters Most"}),vt(()=>{window.removeEventListener("scroll",g)}),(c,d)=>(p(),h("div",{class:"relative overflow-x-hidden sticky-bar-padding",style:Et({paddingBottom:r.value?"96px":"0"})},[d[0]||(d[0]=Gt('<div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10" data-v-58f9f638></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-58f9f638><div class="absolute inset-0" data-v-58f9f638><div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent" data-v-58f9f638></div><div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent" data-v-58f9f638></div><div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45" data-v-58f9f638></div><div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45" data-v-58f9f638></div></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-58f9f638><div class="absolute inset-0" style="background-image:radial-gradient(circle, #667eea 1px, transparent 1px);background-size:50px 50px;opacity:0.3;" data-v-58f9f638></div></div>',3)),f(ke),f(mo,{animatedWaitlist:t.value,animatedSaved:o.value,animatedModules:s.value,animatedSources:a.value},null,8,["animatedWaitlist","animatedSaved","animatedModules","animatedSources"]),f(Ds),f(Dn),f(js),f(ea),f(Fi),f(tr),f(cr),f(F,{name:"sticky-slide"},{default:x(()=>[r.value?(p(),$(vr,{key:0})):_("",!0)]),_:1})],4))}},$r=N(yr,[["__scopeId","data-v-58f9f638"]]);export{$r as default};
