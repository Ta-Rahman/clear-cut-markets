import{B as F,a as At,R as It,z as nt,v as _,C as S,h as Y,O as Tt,W as ft,k as Bt,$ as Pt,x as j,U as G,T as Ot,b as jt,Y as Ht,Q as T,s as K,c as ot,r as b,o as J,d as vt,u as Q,e as m,f as c,g as o,i as g,w as M,j as y,l as bt,m as yt,n as U,p as q,q as X,t as ht,y as C,A as x,D as f,E as k,F as h,G as z,H as B,I as Rt,J as O,K as Vt,L as v,_ as A,M as H,N as Wt,P as xt,S as Nt,V as kt,X as Ft,Z as Kt,a0 as Yt,a1 as Ut,a2 as st,a3 as wt,a4 as P,a5 as $t,a6 as tt,a7 as Ct,a8 as L}from"./index-BI8cAbIw.js";import{C as qt,s as Zt}from"./index-ZfUi_kt1.js";import{s as w}from"./index-B68n88_W.js";import{s as Gt,a as Xt,F as Jt,b as Qt}from"./index-BC-5AjPc.js";var te=`
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
`,ee={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ae=F.extend({name:"tooltip-directive",style:te,classes:ee}),ne=At.extend({style:ae});function oe(e,t){return le(e)||re(e,t)||ie(e,t)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(e,t){if(e){if(typeof e=="string")return it(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?it(e,t):void 0}}function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function re(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,i,s,d,l=[],r=!0,p=!1;try{if(s=(a=a.call(e)).next,t!==0)for(;!(r=(n=s.call(a)).done)&&(l.push(n.value),l.length!==t);r=!0);}catch(u){p=!0,i=u}finally{try{if(!r&&a.return!=null&&(d=a.return(),Object(d)!==d))return}finally{if(p)throw i}}return l}}function le(e){if(Array.isArray(e))return e}function rt(e,t,a){return(t=de(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function de(e){var t=ce(e,"string");return D(t)=="symbol"?t:t+""}function ce(e,t){if(D(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(D(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}var Et=ne.extend("tooltip",{beforeMount:function(t,a){var n,i=this.getTarget(t);if(i.$_ptooltipModifiers=this.getModifiers(a),a.value){if(typeof a.value=="string")i.$_ptooltipValue=a.value,i.$_ptooltipDisabled=!1,i.$_ptooltipEscape=!0,i.$_ptooltipClass=null,i.$_ptooltipFitContent=!0,i.$_ptooltipIdAttr=K("pv_id")+"_tooltip",i.$_ptooltipShowDelay=0,i.$_ptooltipHideDelay=0,i.$_ptooltipAutoHide=!0;else if(D(a.value)==="object"&&a.value){if(ot(a.value.value)||a.value.value.trim()==="")return;i.$_ptooltipValue=a.value.value,i.$_ptooltipDisabled=!!a.value.disabled===a.value.disabled?a.value.disabled:!1,i.$_ptooltipEscape=!!a.value.escape===a.value.escape?a.value.escape:!0,i.$_ptooltipClass=a.value.class||"",i.$_ptooltipFitContent=!!a.value.fitContent===a.value.fitContent?a.value.fitContent:!0,i.$_ptooltipIdAttr=a.value.id||K("pv_id")+"_tooltip",i.$_ptooltipShowDelay=a.value.showDelay||0,i.$_ptooltipHideDelay=a.value.hideDelay||0,i.$_ptooltipAutoHide=!!a.value.autoHide===a.value.autoHide?a.value.autoHide:!0}}else return;i.$_ptooltipZIndex=(n=a.instance.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.zIndex)===null||n===void 0?void 0:n.tooltip,this.bindEvents(i,a),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,a){var n=this.getTarget(t);if(n.$_ptooltipModifiers=this.getModifiers(a),this.unbindEvents(n),!!a.value){if(typeof a.value=="string")n.$_ptooltipValue=a.value,n.$_ptooltipDisabled=!1,n.$_ptooltipEscape=!0,n.$_ptooltipClass=null,n.$_ptooltipIdAttr=n.$_ptooltipIdAttr||K("pv_id")+"_tooltip",n.$_ptooltipShowDelay=0,n.$_ptooltipHideDelay=0,n.$_ptooltipAutoHide=!0,this.bindEvents(n,a);else if(D(a.value)==="object"&&a.value)if(ot(a.value.value)||a.value.value.trim()===""){this.unbindEvents(n,a);return}else n.$_ptooltipValue=a.value.value,n.$_ptooltipDisabled=!!a.value.disabled===a.value.disabled?a.value.disabled:!1,n.$_ptooltipEscape=!!a.value.escape===a.value.escape?a.value.escape:!0,n.$_ptooltipClass=a.value.class||"",n.$_ptooltipFitContent=!!a.value.fitContent===a.value.fitContent?a.value.fitContent:!0,n.$_ptooltipIdAttr=a.value.id||n.$_ptooltipIdAttr||K("pv_id")+"_tooltip",n.$_ptooltipShowDelay=a.value.showDelay||0,n.$_ptooltipHideDelay=a.value.hideDelay||0,n.$_ptooltipAutoHide=!!a.value.autoHide===a.value.autoHide?a.value.autoHide:!0,this.bindEvents(n,a)}},unmounted:function(t,a){var n=this.getTarget(t);this.hide(t,0),this.remove(n),this.unbindEvents(n,a),n.$_ptooltipScrollHandler&&(n.$_ptooltipScrollHandler.destroy(),n.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,a){var n=this,i=t.$_ptooltipModifiers;i.focus?(t.$_ptooltipFocusEvent=function(s){return n.onFocus(s,a)},t.$_ptooltipBlurEvent=this.onBlur.bind(this),t.addEventListener("focus",t.$_ptooltipFocusEvent),t.addEventListener("blur",t.$_ptooltipBlurEvent)):(t.$_ptooltipMouseEnterEvent=function(s){return n.onMouseEnter(s,a)},t.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),t.$_ptooltipClickEvent=this.onClick.bind(this),t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.addEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.addEventListener("click",t.$_ptooltipClickEvent)),t.$_ptooltipKeydownEvent=this.onKeydown.bind(this),t.addEventListener("keydown",t.$_ptooltipKeydownEvent),t.$_pWindowResizeEvent=this.onWindowResize.bind(this,t)},unbindEvents:function(t){var a=t.$_ptooltipModifiers;a.focus?(t.removeEventListener("focus",t.$_ptooltipFocusEvent),t.$_ptooltipFocusEvent=null,t.removeEventListener("blur",t.$_ptooltipBlurEvent),t.$_ptooltipBlurEvent=null):(t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.$_ptooltipMouseEnterEvent=null,t.removeEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.$_ptooltipMouseLeaveEvent=null,t.removeEventListener("click",t.$_ptooltipClickEvent),t.$_ptooltipClickEvent=null),t.removeEventListener("keydown",t.$_ptooltipKeydownEvent),window.removeEventListener("resize",t.$_pWindowResizeEvent),t.$_ptooltipId&&this.remove(t)},bindScrollListener:function(t){var a=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new qt(t,function(){a.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,a){var n=t.currentTarget,i=n.$_ptooltipShowDelay;this.show(n,a,i)},onMouseLeave:function(t){var a=t.currentTarget,n=a.$_ptooltipHideDelay,i=a.$_ptooltipAutoHide;if(i)this.hide(a,n);else{var s=T(t.target,"data-pc-name")==="tooltip"||T(t.target,"data-pc-section")==="arrow"||T(t.target,"data-pc-section")==="text"||T(t.relatedTarget,"data-pc-name")==="tooltip"||T(t.relatedTarget,"data-pc-section")==="arrow"||T(t.relatedTarget,"data-pc-section")==="text";!s&&this.hide(a,n)}},onFocus:function(t,a){var n=t.currentTarget,i=n.$_ptooltipShowDelay;this.show(n,a,i)},onBlur:function(t){var a=t.currentTarget,n=a.$_ptooltipHideDelay;this.hide(a,n)},onClick:function(t){var a=t.currentTarget,n=a.$_ptooltipHideDelay;this.hide(a,n)},onKeydown:function(t){var a=t.currentTarget,n=a.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,n)},onWindowResize:function(t){Ht()||this.hide(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},tooltipActions:function(t,a){if(!(t.$_ptooltipDisabled||!Ot(t))){var n=this.create(t,a);this.align(t),!this.isUnstyled()&&jt(n,250);var i=this;window.addEventListener("resize",t.$_pWindowResizeEvent),n.addEventListener("mouseleave",function s(){i.hide(t),n.removeEventListener("mouseleave",s),t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),setTimeout(function(){return t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(t),j.set("tooltip",n,t.$_ptooltipZIndex)}},show:function(t,a,n){var i=this;n!==void 0?this.timer=setTimeout(function(){return i.tooltipActions(t,a)},n):this.tooltipActions(t,a)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},hide:function(t,a){var n=this;clearTimeout(this.timer),a!==void 0?setTimeout(function(){return n.tooltipRemoval(t)},a):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},getArrowElement:function(t){var a=this.getTooltipElement(t);return nt(a,'[data-pc-section="arrow"]')},create:function(t){var a=t.$_ptooltipModifiers,n=G("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:a})}),i=G("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:a})});t.$_ptooltipEscape?(i.innerHTML="",i.appendChild(document.createTextNode(t.$_ptooltipValue))):i.innerHTML=t.$_ptooltipValue;var s=G("div",rt(rt({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:a})),n,i);return document.body.appendChild(s),t.$_ptooltipId=s.id,this.$el=s,s},remove:function(t){if(t){var a=this.getTooltipElement(t);a&&a.parentElement&&(j.clear(a),document.body.removeChild(a)),t.$_ptooltipId=null}},align:function(t){var a=t.$_ptooltipModifiers;a.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):a.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):a.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var a=t.getBoundingClientRect(),n=a.left+Bt(),i=a.top+Pt();return{left:n,top:i}},alignRight:function(t){this.preAlign(t,"right");var a=this.getTooltipElement(t),n=this.getArrowElement(t),i=this.getHostOffset(t),s=i.left+_(t),d=i.top+(S(t)-S(a))/2;a.style.left=s+"px",a.style.top=d+"px",n.style.top="50%",n.style.right=null,n.style.bottom=null,n.style.left="0"},alignLeft:function(t){this.preAlign(t,"left");var a=this.getTooltipElement(t),n=this.getArrowElement(t),i=this.getHostOffset(t),s=i.left-_(a),d=i.top+(S(t)-S(a))/2;a.style.left=s+"px",a.style.top=d+"px",n.style.top="50%",n.style.right="0",n.style.bottom=null,n.style.left=null},alignTop:function(t){this.preAlign(t,"top");var a=this.getTooltipElement(t),n=this.getArrowElement(t),i=_(a),s=_(t),d=Y(),l=d.width,r=this.getHostOffset(t),p=r.left+(s-i)/2,u=r.top-S(a);p<0?p=0:p+i>l&&(p=Math.floor(r.left+s-i)),a.style.left=p+"px",a.style.top=u+"px";var $=r.left-this.getHostOffset(a).left+s/2;n.style.top=null,n.style.right=null,n.style.bottom="0",n.style.left=$+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var a=this.getTooltipElement(t),n=this.getArrowElement(t),i=_(a),s=_(t),d=Y(),l=d.width,r=this.getHostOffset(t),p=r.left+(s-i)/2,u=r.top+S(t);p<0?p=0:p+i>l&&(p=Math.floor(r.left+s-i)),a.style.left=p+"px",a.style.top=u+"px";var $=r.left-this.getHostOffset(a).left+s/2;n.style.top="0",n.style.right=null,n.style.bottom=null,n.style.left=$+"px"},preAlign:function(t,a){var n=this.getTooltipElement(t);n.style.left="-999px",n.style.top="-999px",Tt(n,"p-tooltip-".concat(n.$_ptooltipPosition)),!this.isUnstyled()&&ft(n,"p-tooltip-".concat(a)),n.$_ptooltipPosition=a,n.setAttribute("data-p-position",a)},isOutOfBounds:function(t){var a=this.getTooltipElement(t),n=a.getBoundingClientRect(),i=n.top,s=n.left,d=_(a),l=S(a),r=Y();return s+d>r.width||s<0||i<0||i+l>r.height},getTarget:function(t){var a;return It(t,"p-inputwrapper")&&(a=nt(t,"input"))!==null&&a!==void 0?a:t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&D(t.arg)==="object"?Object.entries(t.arg).reduce(function(a,n){var i=oe(n,2),s=i[0],d=i[1];return(s==="event"||s==="position")&&(a[d]=!0),a},{}):{}}}});function pe(){let e=null,t=0;const a=b("down"),n=()=>{window.addEventListener("scroll",()=>{const s=window.scrollY;a.value=s>t?"down":"up",t=s});const i={threshold:.1,rootMargin:"0px 0px -50px 0px"};e=new IntersectionObserver(s=>{s.forEach(d=>{d.isIntersecting?d.target.classList.add("animate-in"):a.value==="up"&&d.target.classList.remove("animate-in")})},i),document.querySelectorAll(".fade-up, .fade-in, .fade-left, .fade-right, .scale-in").forEach(s=>{e.observe(s)})};return J(()=>{n()}),vt(()=>{e&&e.disconnect(),window.removeEventListener("scroll",()=>{})}),{observeElements:n}}const ue={class:"sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between"},ge={class:"flex gap-3 items-center"},me={__name:"LandingNav",setup(e){Q();const t=b(!1);pe();const a=()=>{t.value=!t.value,t.value?(document.documentElement.classList.add("app-dark"),localStorage.setItem("app-dark-mode","true")):(document.documentElement.classList.remove("app-dark"),localStorage.setItem("app-dark-mode","false"))},n=i=>{var s;(s=document.getElementById(i))==null||s.scrollIntoView({behavior:"smooth"})};return J(()=>{const i=localStorage.getItem("app-dark-mode");i!==null?t.value=i==="true":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value&&document.documentElement.classList.add("app-dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{localStorage.getItem("app-dark-mode")===null&&(t.value=s.matches,s.matches?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark"))})}),(i,s)=>{const d=Et;return c(),m("div",ue,[s[3]||(s[3]=o("div",{class:"flex items-center"},[o("i",{class:"pi pi-chart-line text-primary text-3xl mr-2"}),o("span",{class:"text-gray-900 dark:text-gray-100 font-bold text-2xl"},"Clear Cut Markets")],-1)),o("div",ge,[g(y(w),{label:"Features",class:"p-button-text",onClick:s[0]||(s[0]=l=>n("features"))}),g(y(w),{label:"Pricing",class:"p-button-text",onClick:s[1]||(s[1]=l=>n("pricing"))}),M(g(y(w),{icon:t.value?"pi pi-sun":"pi pi-moon",class:"p-button-rounded p-button-text",onClick:a},null,8,["icon"]),[[d,t.value?"Light Mode":"Dark Mode",void 0,{bottom:!0}]]),g(y(w),{label:"Login",class:"p-button-outlined",onClick:s[2]||(s[2]=l=>i.$router.push("/auth/login"))})])])}}};var fe=`
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
`,ve={root:function(t){var a=t.props;return["p-message p-component p-message-"+a.severity,{"p-message-outlined":a.variant==="outlined","p-message-simple":a.variant==="simple","p-message-sm":a.size==="small","p-message-lg":a.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},be=F.extend({name:"message",style:fe,classes:ve}),ye={name:"BaseMessage",extends:U,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:be,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function lt(e,t,a){return(t=he(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function he(e){var t=xe(e,"string");return R(t)=="symbol"?t:t+""}function xe(e,t){if(R(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(R(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _t={name:"Message",extends:ye,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return q(lt(lt({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:yt},components:{TimesIcon:bt}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function dt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function ct(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(a),!0).forEach(function(n){ke(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ke(e,t,a){return(t=we(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function we(e){var t=$e(e,"string");return V(t)=="symbol"?t:t+""}function $e(e,t){if(V(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(V(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ce=["data-p"],Ee=["data-p"],_e=["data-p"],Se=["aria-label","data-p"],Le=["data-p"];function De(e,t,a,n,i,s){var d=X("TimesIcon"),l=ht("ripple");return c(),C(O,f({name:"p-message",appear:""},e.ptmi("transition")),{default:x(function(){return[M(o("div",f({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":s.dataP},e.ptm("root")),[e.$slots.container?k(e.$slots,"container",{key:0,closeCallback:s.close}):(c(),m("div",f({key:1,class:e.cx("content"),"data-p":s.dataP},e.ptm("content")),[k(e.$slots,"icon",{class:z(e.cx("icon"))},function(){return[(c(),C(B(e.icon?"span":null),f({class:[e.cx("icon"),e.icon],"data-p":s.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(c(),m("div",f({key:0,class:e.cx("text"),"data-p":s.dataP},e.ptm("text")),[k(e.$slots,"default")],16,_e)):h("",!0),e.closable?M((c(),m("button",f({key:1,class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(r){return s.close(r)}),"data-p":s.dataP},ct(ct({},e.closeButtonProps),e.ptm("closeButton"))),[k(e.$slots,"closeicon",{},function(){return[e.closeIcon?(c(),m("i",f({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":s.dataP},e.ptm("closeIcon")),null,16,Le)):(c(),C(d,f({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":s.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,Se)),[[l]]):h("",!0)],16,Ee))],16,Ce),[[Rt,i.visible]])]}),_:3},16)}_t.render=De;var ze=`
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
`,Me={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ae=F.extend({name:"chip",style:ze,classes:Me}),Ie={name:"BaseChip",extends:U,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Ae,provide:function(){return{$pcChip:this,$parentInstance:this}}},et={name:"Chip",extends:Ie,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return q({removable:this.removable})}},components:{TimesCircleIcon:Vt}},Te=["aria-label","data-p"],Be=["src"];function Pe(e,t,a,n,i,s){return i.visible?(c(),m("div",f({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":s.dataP}),[k(e.$slots,"default",{},function(){return[e.image?(c(),m("img",f({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Be)):e.$slots.icon?(c(),C(B(e.$slots.icon),f({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),m("span",f({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):h("",!0),e.label!==null?(c(),m("div",f({key:3,class:e.cx("label")},e.ptm("label")),v(e.label),17)):h("",!0)]}),e.removable?k(e.$slots,"removeicon",{key:0,removeCallback:s.close,keydownCallback:s.onKeydown},function(){return[(c(),C(B(e.removeIcon?"span":"TimesCircleIcon"),f({class:[e.cx("removeIcon"),e.removeIcon],onClick:s.close,onKeydown:s.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):h("",!0)],16,Te)):h("",!0)}et.render=Pe;const Oe={class:"min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"},je={class:"text-center"},He={class:"mb-4 animate-fade-in-down animation-delay-0"},Re={class:"flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300"},Ve={class:"flex-1"},We={key:0,class:"mt-3 animate-fade-in"},Ne={class:"mt-6 animate-fade-in-up animation-delay-500"},Fe={class:"flex justify-center items-center gap-4 flex-wrap"},Ke={class:"text-center px-6"},Ye={class:"text-4xl font-bold text-primary mb-1"},Ue={class:"text-center px-6"},qe={class:"text-4xl font-bold text-primary mb-1"},Ze={class:"text-center px-6"},Ge={class:"text-4xl font-bold text-primary mb-1"},Xe={class:"text-center px-6"},Je={class:"text-4xl font-bold text-primary mb-1"},Qe={__name:"LandingHero",props:{animatedWaitlist:{type:Number,default:0},animatedSaved:{type:Number,default:0},animatedModules:{type:Number,default:0},animatedSources:{type:Number,default:0}},setup(e){const t=b(""),a=b(!1),n=b(""),i=b("success"),s=b(!1),d=async()=>{if(!t.value||!t.value.includes("@")){s.value=!0,n.value="Please enter a valid email address",i.value="error",setTimeout(()=>{s.value=!1},500);return}a.value=!0,setTimeout(()=>{console.log("Email submitted:",t.value),n.value="Thanks for joining! We'll be in touch soon.",i.value="success",t.value="",a.value=!1,setTimeout(()=>{n.value=""},5e3)},1e3)};return(l,r)=>(c(),m("div",Oe,[o("div",je,[o("div",He,[g(y(et),{label:"🚀 Launching Soon",class:"px-3 py-2"})]),r[8]||(r[8]=o("h1",{class:"text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in-down animation-delay-100"},[H(" Smarter Insights on "),o("span",{class:"text-gradient"},"What Matters Most")],-1)),r[9]||(r[9]=o("p",{class:"text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200"}," Our AI co-pilot analyzes market news and sentiment, so you can focus on your key investments with confidence. ",-1)),o("div",Re,[o("div",Ve,[g(y(Gt),{iconPosition:"left",class:"w-full"},{default:x(()=>[g(y(Xt),{class:"pi pi-envelope text-gray-500"}),g(y(Zt),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),placeholder:"Enter your email",onKeyup:Wt(d,["enter"]),class:z(["w-full",{"shake-animation":s.value}])},null,8,["modelValue","class"])]),_:1})]),g(y(w),{label:"Join Waitlist",class:"p-button-primary p-button-raised",onClick:d,loading:a.value},null,8,["loading"])]),g(O,{name:"fade"},{default:x(()=>[n.value?(c(),m("div",We,[g(y(_t),{severity:i.value,closable:!1},{default:x(()=>[H(v(n.value),1)]),_:1},8,["severity"])])):h("",!0)]),_:1}),o("div",Ne,[o("div",Fe,[o("div",Ke,[o("h3",Ye,v(e.animatedWaitlist)+"+",1),r[1]||(r[1]=o("p",{class:"text-gray-600 dark:text-gray-400 text-sm m-0"},"On Waitlist",-1))]),r[5]||(r[5]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",Ue,[o("h3",qe,"$"+v(e.animatedSaved)+"k",1),r[2]||(r[2]=o("p",{class:"text-gray-600 dark:text-gray-400 text-sm m-0"},"Saved vs competitors",-1))]),r[6]||(r[6]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",Ze,[o("h3",Ge,v(e.animatedModules),1),r[3]||(r[3]=o("p",{class:"text-gray-600 dark:text-gray-400 text-sm m-0"},"Possible Modules",-1))]),r[7]||(r[7]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",Xe,[o("h3",Je,v(e.animatedSources)+"+",1),r[4]||(r[4]=o("p",{class:"text-gray-600 dark:text-gray-400 text-sm m-0"},"Data Sources",-1))])])])])]))}},ta=A(Qe,[["__scopeId","data-v-38a8a056"]]);var St={name:"WindowMaximizeIcon",extends:xt};function ea(e,t,a,n,i,s){return c(),m("svg",f({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}St.render=ea;var Lt={name:"WindowMinimizeIcon",extends:xt};function aa(e,t,a,n,i,s){return c(),m("svg",f({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}Lt.render=aa;function pt(){Ft({variableName:kt("scrollbar.width").name})}function ut(){Nt({variableName:kt("scrollbar.width").name})}var na=`
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
`,oa={mask:function(t){var a=t.position,n=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"||a==="topleft"||a==="bottomleft"?"flex-start":a==="right"||a==="topright"||a==="bottomright"?"flex-end":"center",alignItems:a==="top"||a==="topleft"||a==="topright"?"flex-start":a==="bottom"||a==="bottomleft"||a==="bottomright"?"flex-end":"center",pointerEvents:n?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},sa={mask:function(t){var a=t.props,n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],i=n.find(function(s){return s===a.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal},i?"p-dialog-".concat(i):""]},root:function(t){var a=t.props,n=t.instance;return["p-dialog p-component",{"p-dialog-maximized":a.maximizable&&n.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},ia=F.extend({name:"dialog",style:na,classes:sa,inlineStyles:oa}),ra={name:"BaseDialog",extends:U,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:ia,provide:function(){return{$pcDialog:this,$parentInstance:this}}},at={name:"Dialog",extends:ra,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:wt(function(){return t._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&j.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&j.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ft(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),st(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&j.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(i){return i&&i.querySelector("[autofocus]")},a=this.$slots.footer&&t(this.footerContainer);a||(a=this.$slots.header&&t(this.headerContainer),a||(a=this.$slots.default&&t(this.content),a||(this.maximizable?(this.focusableMax=!0,a=this.maximizableButton):(this.focusableClose=!0,a=this.closeButton)))),a&&st(a,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?pt():ut())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&pt()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&ut()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Ut(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var a="";for(var n in this.breakpoints)a+=`
                        @media screen and (max-width: `.concat(n,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[n],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=a}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&Yt(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(a){if(t.dragging){var n=_(t.container),i=S(t.container),s=a.pageX-t.lastPageX,d=a.pageY-t.lastPageY,l=t.container.getBoundingClientRect(),r=l.left+s,p=l.top+d,u=Y(),$=getComputedStyle(t.container),E=parseFloat($.marginLeft),I=parseFloat($.marginTop);t.container.style.position="fixed",t.keepInViewport?(r>=t.minX&&r+n<u.width&&(t.lastPageX=a.pageX,t.container.style.left=r-E+"px"),p>=t.minY&&p+i<u.height&&(t.lastPageY=a.pageY,t.container.style.top=p-I+"px")):(t.lastPageX=a.pageX,t.container.style.left=r-E+"px",t.lastPageY=a.pageY,t.container.style.top=p-I+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(a){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",a))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.$id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return q({maximized:this.maximized,modal:this.modal})}},directives:{ripple:yt,focustrap:Jt},components:{Button:w,Portal:Kt,WindowMinimizeIcon:Lt,WindowMaximizeIcon:St,TimesIcon:bt}};function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}function gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function mt(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(a),!0).forEach(function(n){la(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function la(e,t,a){return(t=da(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function da(e){var t=ca(e,"string");return W(t)=="symbol"?t:t+""}function ca(e,t){if(W(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(W(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pa=["data-p"],ua=["aria-labelledby","aria-modal","data-p"],ga=["id"],ma=["data-p"];function fa(e,t,a,n,i,s){var d=X("Button"),l=X("Portal"),r=ht("focustrap");return c(),C(l,{appendTo:e.appendTo},{default:x(function(){return[i.containerVisible?(c(),m("div",f({key:0,ref:s.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return s.onMaskMouseDown&&s.onMaskMouseDown.apply(s,arguments)}),onMouseup:t[2]||(t[2]=function(){return s.onMaskMouseUp&&s.onMaskMouseUp.apply(s,arguments)}),"data-p":s.dataP},e.ptm("mask")),[g(O,f({name:"p-dialog",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?M((c(),m("div",f({key:0,ref:s.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":s.ariaLabelledById,"aria-modal":e.modal,"data-p":s.dataP},e.ptmi("root")),[e.$slots.container?k(e.$slots,"container",{key:0,closeCallback:s.close,maximizeCallback:function(u){return s.maximize(u)}}):(c(),m(P,{key:1},[e.showHeader?(c(),m("div",f({key:0,ref:s.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return s.initDrag&&s.initDrag.apply(s,arguments)})},e.ptm("header")),[k(e.$slots,"header",{class:z(e.cx("title"))},function(){return[e.header?(c(),m("span",f({key:0,id:s.ariaLabelledById,class:e.cx("title")},e.ptm("title")),v(e.header),17,ga)):h("",!0)]}),o("div",f({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?k(e.$slots,"maximizebutton",{key:0,maximized:i.maximized,maximizeCallback:function(u){return s.maximize(u)}},function(){return[g(d,f({ref:s.maximizableRef,autofocus:i.focusableMax,class:e.cx("pcMaximizeButton"),onClick:s.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:x(function(p){return[k(e.$slots,"maximizeicon",{maximized:i.maximized},function(){return[(c(),C(B(s.maximizeIconComponent),f({class:[p.class,i.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])]}):h("",!0),e.closable?k(e.$slots,"closebutton",{key:1,closeCallback:s.close},function(){return[g(d,f({ref:s.closeButtonRef,autofocus:i.focusableClose,class:e.cx("pcCloseButton"),onClick:s.close,"aria-label":s.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:x(function(p){return[k(e.$slots,"closeicon",{},function(){return[(c(),C(B(e.closeIcon?"span":"TimesIcon"),f({class:[e.closeIcon,p.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])]}):h("",!0)],16)],16)):h("",!0),o("div",f({ref:s.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle,"data-p":s.dataP},mt(mt({},e.contentProps),e.ptm("content"))),[k(e.$slots,"default")],16,ma),e.footer||e.$slots.footer?(c(),m("div",f({key:1,ref:s.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[k(e.$slots,"footer",{},function(){return[H(v(e.footer),1)]})],16)):h("",!0)],64))],16,ua)),[[r,{disabled:!e.modal}]]):h("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,pa)):h("",!0)]}),_:3},8,["appendTo"])}at.render=fa;const va={class:"flex items-center gap-3"},ba={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},ya={class:"flex flex-col gap-6 p-4"},ha={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},xa={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},ka={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},wa={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},$a={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},Ca={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},Ea={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},_a={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},Sa={class:"text-xl font-bold text-green-500"},Dt={__name:"StockPreviewModal",props:{visible:{type:Boolean,default:!1},stockData:{type:Object,required:!0}},emits:["close"],setup(e,{emit:t}){const a=e,n=b(a.visible);$t(()=>a.visible,d=>{n.value=d});const i=wt(()=>({labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Stock Price",data:a.stockData.chart,fill:!0,borderColor:"#6366F1",tension:.4,backgroundColor:"rgba(99, 102, 241, 0.2)"}]})),s=b({maintainAspectRatio:!1,aspectRatio:2,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}},y:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}}}});return(d,l)=>(c(),C(y(at),{visible:n.value,"onUpdate:visible":l[0]||(l[0]=r=>n.value=r),modal:"",header:e.stockData.symbol,style:{width:"45rem"},dismissableMask:!0,onHide:l[1]||(l[1]=r=>d.$emit("close"))},{header:x(()=>[o("div",va,[l[3]||(l[3]=o("i",{class:"pi pi-chart-line text-2xl text-primary"},null,-1)),o("div",null,[o("h2",ba,v(e.stockData.name)+" ("+v(e.stockData.symbol)+")",1),l[2]||(l[2]=o("p",{class:"text-sm text-gray-500 dark:text-gray-400 m-0"},"Placeholder Data - Live data available in the full version.",-1))])])]),default:x(()=>[o("div",ya,[o("div",null,[g(y(Qt),{type:"line",data:i.value,options:s.value},null,8,["data","options"])]),o("div",ha,[o("div",xa,[l[4]||(l[4]=o("p",{class:"text-sm text-gray-600 dark:text-gray-400"},"Market Price",-1)),o("p",ka,"$"+v(e.stockData.price),1)]),o("div",wa,[l[5]||(l[5]=o("p",{class:"text-sm text-gray-600 dark:text-gray-400"},"Market Cap",-1)),o("p",$a,"$"+v(e.stockData.marketCap),1)]),o("div",Ca,[l[6]||(l[6]=o("p",{class:"text-sm text-gray-600 dark:text-gray-400"},"P/E Ratio",-1)),o("p",Ea,v(e.stockData.peRatio),1)]),o("div",_a,[l[7]||(l[7]=o("p",{class:"text-sm text-gray-600 dark:text-gray-400"},"Sentiment",-1)),o("p",Sa,v(e.stockData.sentiment)+"% Bullish",1)])])])]),_:1},8,["visible","header"]))}},La={__name:"NewsPreviewModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const a=e,n=b(a.visible);return $t(()=>a.visible,i=>{n.value=i}),(i,s)=>(c(),C(y(at),{visible:n.value,"onUpdate:visible":s[0]||(s[0]=d=>n.value=d),modal:"",header:"AI News Analysis",style:{width:"40rem"},dismissableMask:!0,onHide:s[1]||(s[1]=d=>i.$emit("close"))},{header:x(()=>s[2]||(s[2]=[o("div",{class:"flex items-center gap-3"},[o("i",{class:"pi pi-globe text-2xl text-primary"}),o("div",null,[o("h2",{class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},"AI News Analysis"),o("p",{class:"text-sm text-gray-500 dark:text-gray-400 m-0"},"Placeholder Data - Live analysis in the full version.")])],-1)])),default:x(()=>[s[3]||(s[3]=o("div",{class:"p-4"},[o("div",{class:"mb-6"},[o("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"Source Article"),o("h3",{class:"text-xl font-bold text-gray-900 dark:text-gray-100"},'"Global Chip Shortage Worsens, Impacting Major Tech Sectors"'),o("p",{class:"text-xs text-gray-500 dark:text-gray-400"},"Global Tech Times")]),o("div",{class:"space-y-4"},[o("div",null,[o("p",{class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},"AI-Generated Summary:"),o("p",{class:"text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"}," The article highlights a deepening global semiconductor shortage, primarily affecting automotive and consumer electronics. Supply chain disruptions are expected to persist, leading to potential production delays and increased costs for major manufacturers like Tesla and NVIDIA. ")]),o("div",null,[o("p",{class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},"Sentiment Analysis:"),o("div",{class:"bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-lg p-3"},[o("p",{class:"font-bold"},"Highly Negative (85% Confidence)"),o("p",{class:"text-sm"},"The overall sentiment is strongly bearish due to widespread discussion of production cuts and financial losses.")])])])],-1))]),_:1,__:[3]},8,["visible"]))}},Da={class:"px-4 py-16 md:px-6 lg:px-8"},za={class:"max-w-5xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 fade-up stagger-2"},Ma={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"},Aa={class:"flex flex-col items-center text-center"},Ia={class:"flex justify-center gap-4 mt-4 w-full h-full"},Ta={__name:"LandingUsp",setup(e){const t=b(!1),a=b(!1),n=b({}),i={TSLA:{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",marketCap:"758B",peRatio:"71.2",sentiment:85,chart:[220,225,230,228,235,238]},NVDA:{symbol:"NVDA",name:"NVIDIA Corp.",price:"471.16",marketCap:"1.16T",peRatio:"61.5",sentiment:78,chart:[450,455,465,460,472,471]}},s=l=>{n.value=i[l],t.value=!0},d=()=>{a.value=!0};return(l,r)=>(c(),m(P,null,[o("div",Da,[r[14]||(r[14]=o("div",{class:"text-center mb-12"},[o("h2",{class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},"See Connections Others Miss"),o("p",{class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"}," Our AI acts as your early-warning system, connecting even indirectly related news to your specific holdings. ")],-1)),o("div",za,[o("div",Ma,[o("div",{class:"flex flex-col items-center text-center"},[r[5]||(r[5]=o("i",{class:"pi pi-globe text-4xl text-blue-500 mb-4"},null,-1)),r[6]||(r[6]=o("p",{class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},"Market Event",-1)),o("div",{onClick:d,class:"mt-4 p-4 w-full h-full border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},r[4]||(r[4]=[o("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},'"Global Chip Shortage Worsens"',-1),o("p",{class:"text-sm text-gray-600 dark:text-gray-400 mt-2"},"Source: Global Tech Times",-1)]))]),o("div",Aa,[r[9]||(r[9]=o("i",{class:"pi pi-chart-pie text-4xl text-green-500 mb-4"},null,-1)),r[10]||(r[10]=o("p",{class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},"Potential Impact On Your Portfolio",-1)),o("div",Ia,[o("div",{onClick:r[0]||(r[0]=p=>s("TSLA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},r[7]||(r[7]=[o("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"TSLA",-1),o("div",{class:"flex items-center justify-center gap-2 mt-1"},[o("span",{class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},"Potential Decline"),o("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"})],-1)])),o("div",{onClick:r[1]||(r[1]=p=>s("NVDA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},r[8]||(r[8]=[o("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"NVDA",-1),o("div",{class:"flex items-center justify-center gap-2 mt-1"},[o("span",{class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},"Potential Decline"),o("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"})],-1)]))])])]),o("div",{class:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"},[o("div",{class:"bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 rounded-lg p-4 flex items-center gap-4"},[r[13]||(r[13]=o("i",{class:"pi pi-sparkles text-2xl"},null,-1)),o("div",null,[r[12]||(r[12]=o("p",{class:"font-bold"},"Clear Cut Alert:",-1)),o("p",null,[r[11]||(r[11]=H("Worsening chip shortages may negatively impact your **TSLA** and **NVDA** holdings. ")),o("button",{onClick:d,class:"font-semibold underline hover:text-violet-200"},"See AI Analysis")])])])])])]),g(Dt,{visible:t.value,"stock-data":n.value,onClose:r[2]||(r[2]=p=>t.value=!1)},null,8,["visible","stock-data"]),g(La,{visible:a.value,onClose:r[3]||(r[3]=p=>a.value=!1)},null,8,["visible"])],64))}};var Ba=`
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
`,Pa={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Oa=F.extend({name:"tag",style:Ba,classes:Pa}),ja={name:"BaseTag",extends:U,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Oa,provide:function(){return{$pcTag:this,$parentInstance:this}}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function Ha(e,t,a){return(t=Ra(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ra(e){var t=Va(e,"string");return N(t)=="symbol"?t:t+""}function Va(e,t){if(N(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(N(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zt={name:"Tag",extends:ja,inheritAttrs:!1,computed:{dataP:function(){return q(Ha({rounded:this.rounded},this.severity,this.severity))}}},Wa=["data-p"];function Na(e,t,a,n,i,s){return c(),m("span",f({class:e.cx("root"),"data-p":s.dataP},e.ptmi("root")),[e.$slots.icon?(c(),C(B(e.$slots.icon),f({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),m("span",f({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):h("",!0),e.value!=null||e.$slots.default?k(e.$slots,"default",{key:2},function(){return[o("span",f({class:e.cx("label")},e.ptm("label")),v(e.value),17)]}):h("",!0)],16,Wa)}zt.render=Na;const Fa={class:"px-4 py-8 md:px-6 lg:px-8"},Ka={class:"max-w-7xl mx-auto py-8"},Ya={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ua=["onMouseenter"],qa={class:"mb-4"},Za={class:"flex justify-between items-start"},Ga={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Xa={class:"text-sm text-gray-600 dark:text-gray-400 m-0"},Ja={class:"mb-4"},Qa={class:"flex items-baseline mb-1"},tn={class:"text-4xl font-bold text-gray-900 dark:text-gray-100"},en={class:"text-sm text-gray-500 dark:text-gray-400"},an={class:"h-16 my-4 bg-gray-50 dark:bg-gray-700/50 rounded-md p-2"},nn={viewBox:"0 0 100 40",preserveAspectRatio:"none",class:"w-full h-full"},on=["points","stroke"],sn=["d","fill"],rn={class:"grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6"},ln={class:"text-center"},dn={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},cn={class:"text-center"},pn={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},un={class:"text-center"},gn={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},mn={class:"mb-4"},fn={class:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed"},vn={class:"mt-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"},bn={class:"flex justify-between items-center mb-2"},yn={class:"text-xs font-bold text-gray-900 dark:text-gray-100"},hn={class:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"},xn={class:"flex justify-center gap-4 pt-2"},kn={class:"text-center mt-8"},wn={__name:"LandingModulesDemo",setup(e){const t=b(null),a=b(!1),n=b({}),i=b([{symbol:"AAPL",name:"Apple Inc.",price:"195.89",change:2.5,changeAmount:"+$4.73",simpleChart:"0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5",volume:"52.3M",marketCap:"3.04T",peRatio:"32.1",sentiment:78,insight:"Strong momentum with institutional buying detected. Q4 earnings beat expectations.",chart:[180,185,182,188,192,195]},{symbol:"BTC",name:"Bitcoin",price:"43,250",change:-1.2,changeAmount:"-$525.50",simpleChart:"0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30",volume:"$24.8B",marketCap:"847B",peRatio:"N/A",sentiment:45,insight:"Key support at $42,000. Watch for breakout above $45,000 resistance.",chart:[42e3,42500,41800,43e3,43500,43250]},{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",change:3.8,changeAmount:"+$8.73",simpleChart:"0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2",volume:"118.2M",marketCap:"758B",peRatio:"71.2",sentiment:85,insight:"Q4 delivery beats driving bullish sentiment. China demand remains strong.",chart:[220,225,230,228,235,238]}]),s=l=>l>=70?"#22c55e":l>=30?"#f59e0b":"#ef4444",d=l=>{n.value=l,a.value=!0};return(l,r)=>{const p=Et;return c(),m(P,null,[o("div",Fa,[r[11]||(r[11]=o("div",{class:"text-center mb-6"},[o("h2",{class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},"Your Investment Modules"),o("p",{class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"}," Each module is a complete investment tracking system. Choose what matters to you. "),o("p",{class:"text-sm text-gray-500 dark:text-gray-500 mt-2 fade-up stagger-2"},"(Demo data shown below)")],-1)),o("div",Ka,[o("div",Ya,[(c(!0),m(P,null,tt(i.value,(u,$)=>(c(),m("div",{key:u.symbol,class:z(["p-4","fade-up",`stagger-${$+2}`])},[o("div",{class:"module-card group h-full bg-white dark:bg-gray-800 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30",onMouseenter:E=>t.value=$,onMouseleave:r[0]||(r[0]=E=>t.value=null)},[o("div",qa,[o("div",Za,[o("div",null,[o("h3",Ga,v(u.symbol),1),o("p",Xa,v(u.name),1)]),g(y(zt),{severity:u.change>0?"success":"danger",class:"font-semibold"},{default:x(()=>[H(v(u.change>0?"+":"")+v(u.change)+"% ",1)]),_:2},1032,["severity"])])]),o("div",Ja,[o("div",Qa,[r[2]||(r[2]=o("span",{class:"text-xl text-gray-600 dark:text-gray-500 mr-1"},"$",-1)),o("span",tn,v(u.price),1)]),o("div",en,[o("span",null,v(u.changeAmount),1),r[3]||(r[3]=o("span",{class:"ml-2"},"Today",-1))])]),o("div",an,[(c(),m("svg",nn,[r[4]||(r[4]=o("line",{x1:"0",y1:"20",x2:"100",y2:"20",stroke:"#f0f0f0","stroke-width":"1"},null,-1)),o("polyline",{points:u.simpleChart,fill:"none",stroke:u.change>0?"#22c55e":"#ef4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,on),o("path",{d:`M ${u.simpleChart} L 100,40 L 0,40 Z`,fill:u.change>0?"#22c55e20":"#ef444420"},null,8,sn)]))]),o("div",rn,[o("div",ln,[r[5]||(r[5]=o("span",{class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},"Volume",-1)),o("span",dn,v(u.volume),1)]),o("div",cn,[r[6]||(r[6]=o("span",{class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},"Market Cap",-1)),o("span",pn,v(u.marketCap),1)]),o("div",un,[r[7]||(r[7]=o("span",{class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},"P/E Ratio",-1)),o("span",gn,v(u.peRatio),1)])]),o("div",mn,[r[9]||(r[9]=o("div",{class:"flex items-center gap-2 mb-3"},[o("i",{class:"pi pi-sparkles text-primary"}),o("span",{class:"font-semibold text-gray-900 dark:text-gray-100"},"AI Analysis")],-1)),o("p",fn,v(u.insight),1),o("div",vn,[o("div",bn,[r[8]||(r[8]=o("span",{class:"text-xs text-gray-500 dark:text-gray-400"},"Sentiment",-1)),o("span",yn,v(u.sentiment)+"% Bullish",1)]),o("div",hn,[o("div",{class:"h-full rounded-full transition-all duration-500",style:Ct({width:u.sentiment+"%",backgroundColor:s(u.sentiment)})},null,4)])])]),o("div",xn,[M(g(y(w),{icon:"pi pi-bell",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[p,"Set custom price and sentiment alerts"]]),M(g(y(w),{onClick:E=>d(u),icon:"pi pi-chart-line",class:"p-button-text p-button-sm p-button-rounded"},null,8,["onClick"]),[[p,"View Details"]]),M(g(y(w),{icon:"pi pi-cog",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[p,"Customize module settings"]])])],40,Ua)],2))),128))]),o("div",kn,[g(y(w),{label:"This could be your dashboard",class:"p-button-outlined p-button-lg",disabled:""}),r[10]||(r[10]=o("p",{class:"text-gray-600 dark:text-gray-400 mt-3"},"Join the waitlist to start tracking your investments",-1))])])]),g(Dt,{visible:a.value,"stock-data":n.value,onClose:r[1]||(r[1]=u=>a.value=!1)},null,8,["visible","stock-data"])],64)}}},$n=A(wn,[["__scopeId","data-v-0e237ee4"]]),Cn={id:"features",class:"px-4 py-8 md:px-6 lg:px-8 bg-transparent"},En={class:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto bg-transparent"},_n=["onMouseenter"],Sn={class:"mb-4"},Ln={class:"text-gray-900 text-xl mb-3 font-semibold"},Dn={class:"text-gray-600 leading-relaxed"},zn={__name:"LandingFeatures",setup(e){const t=b(null),a=b([{icon:"pi-filter",title:"Focused Module Tracking",description:"Eliminate noise by monitoring only the 3-9 investments that matter most to you."},{icon:"pi-sparkles",title:"AI-Powered Insights",description:"Get automated sentiment analysis and digestible summaries from 15+ news and data sources."},{icon:"pi-sitemap",title:"Cross-Investment Alerts",description:"Our AI connects the dots between market news and your specific holdings to give you an early warning."},{icon:"pi-shield",title:"Bank-Level Security",description:"Your data is encrypted and secure with enterprise-grade protection."},{icon:"pi-mobile",title:"Access Anywhere",description:"Monitor your investments from any device, anytime, with a clean and modern interface."},{icon:"pi-dollar",title:"Affordable Power",description:"Get institutional-grade tools and insights without the enterprise price tag."}]);return(n,i)=>(c(),m("div",Cn,[i[1]||(i[1]=o("h2",{class:"text-center text-gray-900 text-3xl font-bold mb-6 fade-up"},"Everything You Need, Nothing You Don't",-1)),o("div",En,[(c(!0),m(P,null,tt(a.value,(s,d)=>(c(),m("div",{key:d,class:z(["text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105","fade-up",`stagger-${d%3+1}`]),onMouseenter:l=>t.value=d,onMouseleave:i[0]||(i[0]=l=>t.value=null)},[o("div",Sn,[o("i",{class:z([`pi ${s.icon} text-5xl transition-colors duration-300`,t.value===d?"text-primary":"text-gray-400"])},null,2)]),o("h3",Ln,v(s.title),1),o("p",Dn,v(s.description),1)],42,_n))),128))])]))}},Mn=A(zn,[["__scopeId","data-v-1cabae36"]]),An={class:"px-4 py-16 md:px-6 lg:px-8"},In={__name:"LandingUseCases",setup(e){return(t,a)=>(c(),m("div",An,a[0]||(a[0]=[L('<div class="text-center mb-12"><h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up">Is Clear Cut Markets the right fit for you?</h2><p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"> See if our approach matches your investment style. </p></div><div class="max-w-4xl mx-auto"><div class="p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 fade-up stagger-1"><ul class="space-y-8"><li class="flex items-start gap-4"><div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"><i class="pi pi-filter-fill text-2xl text-violet-600 dark:text-violet-400"></i></div><div><h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Focused Investor</h3><p class="text-gray-700 dark:text-gray-300 leading-relaxed"> You believe in a &quot;less is more&quot; philosophy. You have high-conviction picks and want to deeply understand them without the distraction of the broader market&#39;s noise. </p></div></li><li class="flex items-start gap-4"><div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"><i class="pi pi-sitemap text-2xl text-violet-600 dark:text-violet-400"></i></div><div><h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Cross-Asset Analyst</h3><p class="text-gray-700 dark:text-gray-300 leading-relaxed"> You understand that a policy change in Asia can impact both your tech stocks and your crypto portfolio. You need a tool that connects the dots across different asset classes. </p></div></li><li class="flex items-start gap-4"><div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"><i class="pi pi-clock text-2xl text-violet-600 dark:text-violet-400"></i></div><div><h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Time-Strapped Professional</h3><p class="text-gray-700 dark:text-gray-300 leading-relaxed"> Your time is your most valuable asset. You need an AI co-pilot to do the heavy lifting, delivering critical insights so you can make informed decisions, faster. </p></div></li></ul></div></div>',2)])))}},Tn={id:"pricing",class:"py-12 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"},Bn={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"},Pn={class:"p-0 md:p-4 fade-up stagger-1"},On={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},jn={class:"mb-8 flex flex-col items-center gap-4"},Hn={class:"p-0 md:p-4 fade-up stagger-2"},Rn={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-violet-500 duration-300 transition-all cursor-pointer h-full"},Vn={class:"absolute -top-4 left-1/2 -translate-x-1/2"},Wn={class:"mb-8 flex flex-col items-center gap-4"},Nn={class:"p-0 md:p-4 fade-up stagger-3"},Fn={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},Kn={class:"mb-8 flex flex-col items-center gap-4"},Yn={class:"mt-12 text-center bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto"},Un={__name:"LandingPricing",setup(e){Q();const t=()=>{window.location.href="mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry"};return(a,n)=>(c(),m("div",Tn,[n[11]||(n[11]=o("div",{class:"text-center mb-12"},[o("h2",{class:"text-gray-900 dark:text-gray-100 font-bold mb-3 text-4xl fade-up"},"Simple, Transparent Pricing"),o("p",{class:"text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto fade-up stagger-1"}," Choose the plan that fits your portfolio. 14-day free trial on all plans. ")],-1)),o("div",Bn,[o("div",Pn,[o("div",On,[n[1]||(n[1]=L('<div class="text-gray-900 dark:text-gray-100 text-center mb-4" data-v-7437e6cd><h3 class="text-3xl font-bold" data-v-7437e6cd>Essential</h3><p class="text-gray-600 dark:text-gray-400 mt-2" data-v-7437e6cd>For new investors</p></div><div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8" data-v-7437e6cd><span class="text-2xl font-bold text-violet-600 dark:text-violet-400" data-v-7437e6cd>3 Modules</span></div>',2)),o("div",jn,[n[0]||(n[0]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$19"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(y(w),{label:"Start Free Trial",outlined:"",class:"w-full"})]),n[2]||(n[2]=L('<div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4" data-v-7437e6cd></div><ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-7437e6cd><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Real-time Price Data</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>AI Sentiment Analysis</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Standard Support</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Works on Desktop, Tablet &amp; Mobile</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-400 dark:text-gray-500" data-v-7437e6cd>Cross-Investment Correlation Alerts</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-400 dark:text-gray-500" data-v-7437e6cd>Customizable Alert Thresholds</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-400 dark:text-gray-500" data-v-7437e6cd>Export Data &amp; Reports</span></li></ul>',2))])]),o("div",Hn,[o("div",Rn,[o("div",Vn,[g(y(et),{label:"Most Popular",class:"bg-violet-600 text-white px-4 py-2"})]),n[4]||(n[4]=L('<div class="text-gray-900 dark:text-gray-100 text-center mb-4" data-v-7437e6cd><h3 class="text-3xl font-bold" data-v-7437e6cd>Advanced</h3><p class="text-gray-600 dark:text-gray-400 mt-2" data-v-7437e6cd>For active investors</p></div><div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8" data-v-7437e6cd><span class="text-2xl font-bold text-violet-600 dark:text-violet-400" data-v-7437e6cd>6 Modules</span></div>',2)),o("div",Wn,[n[3]||(n[3]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$29"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(y(w),{label:"Start Free Trial",severity:"success",class:"w-full"})]),n[5]||(n[5]=L('<div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4" data-v-7437e6cd></div><ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-7437e6cd><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Real-time Price Data</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>AI Sentiment Analysis</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd><strong data-v-7437e6cd>Priority Support</strong></span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Works on Desktop, Tablet &amp; Mobile</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd><strong data-v-7437e6cd>Cross-Investment Correlation Alerts</strong></span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Customizable Alert Thresholds</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-400 dark:text-gray-500" data-v-7437e6cd>Export Data &amp; Reports</span></li></ul>',2))])]),o("div",Nn,[o("div",Fn,[n[7]||(n[7]=L('<div class="text-gray-900 dark:text-gray-100 text-center mb-4" data-v-7437e6cd><h3 class="text-3xl font-bold" data-v-7437e6cd>Professional</h3><p class="text-gray-600 dark:text-gray-400 mt-2" data-v-7437e6cd>For power users</p></div><div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8" data-v-7437e6cd><span class="text-2xl font-bold text-violet-600 dark:text-violet-400" data-v-7437e6cd>9 Modules</span></div>',2)),o("div",Kn,[n[6]||(n[6]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$34"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(y(w),{label:"Start Free Trial",outlined:"",class:"w-full"})]),n[8]||(n[8]=L('<div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4" data-v-7437e6cd></div><ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-7437e6cd><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Real-time Price Data</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>AI Sentiment Analysis</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd><strong data-v-7437e6cd>Dedicated Support</strong></span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Works on Desktop, Tablet &amp; Mobile</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd><strong data-v-7437e6cd>Cross-Investment Correlation Alerts</strong></span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd>Customizable Alert Thresholds</span></li><li class="flex items-start" data-v-7437e6cd><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-7437e6cd></i><span class="text-gray-700 dark:text-gray-300" data-v-7437e6cd><strong data-v-7437e6cd>Export Data &amp; Reports (CSV)</strong></span></li></ul>',2))])])]),o("div",Yn,[n[9]||(n[9]=o("h3",{class:"text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"},"Need More Than 9 Modules?",-1)),n[10]||(n[10]=o("p",{class:"text-gray-600 dark:text-gray-400 mb-6"}," We offer custom enterprise plans. Contact us for a personalized quote. ",-1)),g(y(w),{label:"Contact Sales",class:"p-button-outlined p-button-lg",icon:"pi pi-arrow-right",iconPos:"right",onClick:t})])]))}},qn=A(Un,[["__scopeId","data-v-7437e6cd"]]),Zn={class:"px-4 py-16 md:px-6 lg:px-8 bg-white dark:bg-gray-900"},Gn={class:"max-w-4xl mx-auto"},Xn={class:"space-y-4"},Jn=["onClick","aria-expanded"],Qn={class:"font-semibold text-gray-900 dark:text-gray-100"},to={key:0,class:"bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700"},eo={class:"px-6 pb-4 pt-2 text-gray-700 dark:text-gray-300"},ao={__name:"LandingFAQ",setup(e){const t=b(null),a=b([{question:"Is this a replacement for my brokerage account?",answer:"Not at all. Clear Cut Markets is not a broker; it's an AI-powered companion that works alongside your existing accounts. You manage your trades on your preferred platform, and we provide the high-signal insights to inform those decisions."},{question:"How does the AI analysis actually work?",answer:"Our system continuously scans over 15 verified data sources, including global news outlets, financial filings, and social sentiment platforms. We use a Large Language Model (LLM) to analyze the content, identify key topics, and determine the potential impact on specific assets and the connections between them."},{question:"What kind of assets can I track in a module?",answer:"You can track a wide range of assets, including individual stocks (e.g., TSLA), major ETFs (e.g., SPY), and leading cryptocurrencies (e.g., Bitcoin, Ethereum). We are constantly expanding our coverage based on user demand."},{question:"How does the free trial work?",answer:"All our plans come with a full-featured 14-day free trial, no credit card required upfront. You get to explore the entire platform, including the premium features, to make sure it's the right fit for you before committing."},{question:"Can I change my plan or cancel later?",answer:"Of course. You can upgrade, downgrade, or cancel your plan at any time directly from your account dashboard. Any changes will be pro-rated, and cancellations take effect at the end of your current billing period."},{question:"What makes this different from a standard news aggregator?",answer:"News aggregators give you a firehose of information that you still have to sift through. Clear Cut is the opposite. We do the sifting for you, using AI to connect the dots and only alerting you to the news that has a potential, tangible impact on your specific holdings."}]),n=i=>{t.value=t.value===i?null:i};return(i,s)=>(c(),m("section",Zn,[o("div",Gn,[s[0]||(s[0]=o("h2",{class:"text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"}," Frequently Asked Questions ",-1)),o("div",Xn,[(c(!0),m(P,null,tt(a.value,(d,l)=>(c(),m("div",{key:l,class:z(["border rounded-lg border-gray-200 dark:border-gray-700","fade-up",`stagger-${l+1}`])},[o("button",{onClick:r=>n(l),class:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors","aria-expanded":t.value===l},[o("span",Qn,v(d.question),1),o("i",{class:z(["pi",t.value===l?"pi-chevron-up":"pi-chevron-down","text-gray-500 dark:text-gray-400 transition-transform duration-300"])},null,2)],8,Jn),g(O,{name:"accordion-fade"},{default:x(()=>[t.value===l?(c(),m("div",to,[o("div",eo,v(d.answer),1)])):h("",!0)]),_:2},1024)],2))),128))])])]))}},no=A(ao,[["__scopeId","data-v-2570dc54"]]),oo={class:"fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40"},so={class:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"},io={__name:"LandingStickyCTA",setup(e){return Q(),(t,a)=>(c(),C(O,{name:"sticky-slide"},{default:x(()=>[o("div",oo,[o("div",so,[a[1]||(a[1]=o("div",{class:"text-center md:text-left"},[o("p",{class:"font-semibold"},"Ready to start tracking smarter?"),o("p",{class:"text-sm opacity-90"},"Join 234+ investors • 14-day free trial")],-1)),g(y(w),{label:"Start Free Trial",class:"bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold",onClick:a[0]||(a[0]=n=>t.$router.push("/auth/register"))})])])]),_:1}))}},ro=A(io,[["__scopeId","data-v-60a91161"]]),lo={__name:"Landing",setup(e){const t=b(0),a=b(0),n=b(0),i=b(0),s=b(!1),d=(r,p,u,$)=>{const I=(u-p)/($/16);let Z=p;const Mt=setInterval(()=>{Z+=I,Z>=u?(r.value=u,clearInterval(Mt)):r.value=Math.floor(Z)},16)},l=()=>{const r=window.scrollY,p=window.innerHeight,u=document.documentElement.scrollHeight,$=r>p*2,E=r>u-p*1.5,I=document.getElementById("pricing")&&r>document.getElementById("pricing").offsetTop;s.value=$&&I||E};return J(()=>{d(t,0,234,2e3),d(a,0,23,2e3),d(n,0,9,1500),d(i,0,15,1800),window.addEventListener("scroll",l),document.title="Clear Cut Markets - Smarter Insights on What Matters Most"}),vt(()=>{window.removeEventListener("scroll",l)}),(r,p)=>(c(),m("div",{class:"relative overflow-x-hidden sticky-bar-padding",style:Ct({paddingBottom:s.value?"96px":"0"})},[p[0]||(p[0]=L('<div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10" data-v-65cada14></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-65cada14><div class="absolute inset-0" data-v-65cada14><div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent" data-v-65cada14></div><div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent" data-v-65cada14></div><div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45" data-v-65cada14></div><div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45" data-v-65cada14></div></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-65cada14><div class="absolute inset-0" style="background-image:radial-gradient(circle, #667eea 1px, transparent 1px);background-size:50px 50px;opacity:0.3;" data-v-65cada14></div></div>',3)),g(me),g(ta,{animatedWaitlist:t.value,animatedSaved:a.value,animatedModules:n.value,animatedSources:i.value},null,8,["animatedWaitlist","animatedSaved","animatedModules","animatedSources"]),g($n),g(Ta),g(Mn),g(In),g(qn),g(no),g(O,{name:"sticky-slide"},{default:x(()=>[s.value?(c(),C(ro,{key:0})):h("",!0)]),_:1})],4))}},mo=A(lo,[["__scopeId","data-v-65cada14"]]);export{mo as default};
