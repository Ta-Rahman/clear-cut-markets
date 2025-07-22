import{r as h,o as N,w as ht,B as H,a as bt,R as yt,z as ot,v as L,C as M,h as Q,O as xt,W as wt,k as $t,$ as _t,x as at,U as J,T as kt,b as Et,Y as St,Q as I,s as R,c as it,d as ut,_ as C,e as Tt,f as u,g as a,i as p,j as P,u as v,l as X,m as c,n as Ct,p as Lt,q as K,t as V,y as Mt,A as It,D as k,E as w,F as f,G as _,H as x,I as T,J as F,K as Pt,L as E,M as zt,N as m,P as z,S as At,V as G,X as tt,Z as et,a0 as A}from"./index-Cg0btwtK.js";import{C as Bt,s as Ot}from"./index-BFzQKBNA.js";import{s as y}from"./index-BJR2udEj.js";import{s as Dt,a as jt}from"./index-DF7GtBZl.js";function Ht(){const n=h(!1),t=()=>{const o=localStorage.getItem("theme");o?n.value=o==="dark":n.value=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e()},e=()=>{const o=document.documentElement;n.value?o.classList.add("p-dark"):o.classList.remove("p-dark")},s=()=>{n.value=!n.value,localStorage.setItem("theme",n.value?"dark":"light"),e()};return N(()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{localStorage.getItem("theme")||(n.value=i.matches,e())})}),ht(n,e),{isDarkMode:n,toggleDarkMode:s,initDarkMode:t}}var Rt=`
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
`,Wt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ft=H.extend({name:"tooltip-directive",style:Rt,classes:Wt}),Nt=bt.extend({style:Ft});function Kt(n,t){return Ut(n)||Yt(n,t)||qt(n,t)||Vt()}function Vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(n,t){if(n){if(typeof n=="string")return rt(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?rt(n,t):void 0}}function rt(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,s=Array(t);e<t;e++)s[e]=n[e];return s}function Yt(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var s,o,i,d,r=[],l=!0,g=!1;try{if(i=(e=e.call(n)).next,t!==0)for(;!(l=(s=i.call(e)).done)&&(r.push(s.value),r.length!==t);l=!0);}catch(b){g=!0,o=b}finally{try{if(!l&&e.return!=null&&(d=e.return(),Object(d)!==d))return}finally{if(g)throw o}}return r}}function Ut(n){if(Array.isArray(n))return n}function lt(n,t,e){return(t=Qt(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Qt(n){var t=Jt(n,"string");return S(t)=="symbol"?t:t+""}function Jt(n,t){if(S(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,t);if(S(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function S(n){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(n)}var mt=Nt.extend("tooltip",{beforeMount:function(t,e){var s,o=this.getTarget(t);if(o.$_ptooltipModifiers=this.getModifiers(e),e.value){if(typeof e.value=="string")o.$_ptooltipValue=e.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=R("pv_id")+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(S(e.value)==="object"&&e.value){if(it(e.value.value)||e.value.value.trim()==="")return;o.$_ptooltipValue=e.value.value,o.$_ptooltipDisabled=!!e.value.disabled===e.value.disabled?e.value.disabled:!1,o.$_ptooltipEscape=!!e.value.escape===e.value.escape?e.value.escape:!0,o.$_ptooltipClass=e.value.class||"",o.$_ptooltipFitContent=!!e.value.fitContent===e.value.fitContent?e.value.fitContent:!0,o.$_ptooltipIdAttr=e.value.id||R("pv_id")+"_tooltip",o.$_ptooltipShowDelay=e.value.showDelay||0,o.$_ptooltipHideDelay=e.value.hideDelay||0,o.$_ptooltipAutoHide=!!e.value.autoHide===e.value.autoHide?e.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(s=e.instance.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.zIndex)===null||s===void 0?void 0:s.tooltip,this.bindEvents(o,e),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,e){var s=this.getTarget(t);if(s.$_ptooltipModifiers=this.getModifiers(e),this.unbindEvents(s),!!e.value){if(typeof e.value=="string")s.$_ptooltipValue=e.value,s.$_ptooltipDisabled=!1,s.$_ptooltipEscape=!0,s.$_ptooltipClass=null,s.$_ptooltipIdAttr=s.$_ptooltipIdAttr||R("pv_id")+"_tooltip",s.$_ptooltipShowDelay=0,s.$_ptooltipHideDelay=0,s.$_ptooltipAutoHide=!0,this.bindEvents(s,e);else if(S(e.value)==="object"&&e.value)if(it(e.value.value)||e.value.value.trim()===""){this.unbindEvents(s,e);return}else s.$_ptooltipValue=e.value.value,s.$_ptooltipDisabled=!!e.value.disabled===e.value.disabled?e.value.disabled:!1,s.$_ptooltipEscape=!!e.value.escape===e.value.escape?e.value.escape:!0,s.$_ptooltipClass=e.value.class||"",s.$_ptooltipFitContent=!!e.value.fitContent===e.value.fitContent?e.value.fitContent:!0,s.$_ptooltipIdAttr=e.value.id||s.$_ptooltipIdAttr||R("pv_id")+"_tooltip",s.$_ptooltipShowDelay=e.value.showDelay||0,s.$_ptooltipHideDelay=e.value.hideDelay||0,s.$_ptooltipAutoHide=!!e.value.autoHide===e.value.autoHide?e.value.autoHide:!0,this.bindEvents(s,e)}},unmounted:function(t,e){var s=this.getTarget(t);this.hide(t,0),this.remove(s),this.unbindEvents(s,e),s.$_ptooltipScrollHandler&&(s.$_ptooltipScrollHandler.destroy(),s.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,e){var s=this,o=t.$_ptooltipModifiers;o.focus?(t.$_ptooltipFocusEvent=function(i){return s.onFocus(i,e)},t.$_ptooltipBlurEvent=this.onBlur.bind(this),t.addEventListener("focus",t.$_ptooltipFocusEvent),t.addEventListener("blur",t.$_ptooltipBlurEvent)):(t.$_ptooltipMouseEnterEvent=function(i){return s.onMouseEnter(i,e)},t.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),t.$_ptooltipClickEvent=this.onClick.bind(this),t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.addEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.addEventListener("click",t.$_ptooltipClickEvent)),t.$_ptooltipKeydownEvent=this.onKeydown.bind(this),t.addEventListener("keydown",t.$_ptooltipKeydownEvent),t.$_pWindowResizeEvent=this.onWindowResize.bind(this,t)},unbindEvents:function(t){var e=t.$_ptooltipModifiers;e.focus?(t.removeEventListener("focus",t.$_ptooltipFocusEvent),t.$_ptooltipFocusEvent=null,t.removeEventListener("blur",t.$_ptooltipBlurEvent),t.$_ptooltipBlurEvent=null):(t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.$_ptooltipMouseEnterEvent=null,t.removeEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.$_ptooltipMouseLeaveEvent=null,t.removeEventListener("click",t.$_ptooltipClickEvent),t.$_ptooltipClickEvent=null),t.removeEventListener("keydown",t.$_ptooltipKeydownEvent),window.removeEventListener("resize",t.$_pWindowResizeEvent),t.$_ptooltipId&&this.remove(t)},bindScrollListener:function(t){var e=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new Bt(t,function(){e.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,e){var s=t.currentTarget,o=s.$_ptooltipShowDelay;this.show(s,e,o)},onMouseLeave:function(t){var e=t.currentTarget,s=e.$_ptooltipHideDelay,o=e.$_ptooltipAutoHide;if(o)this.hide(e,s);else{var i=I(t.target,"data-pc-name")==="tooltip"||I(t.target,"data-pc-section")==="arrow"||I(t.target,"data-pc-section")==="text"||I(t.relatedTarget,"data-pc-name")==="tooltip"||I(t.relatedTarget,"data-pc-section")==="arrow"||I(t.relatedTarget,"data-pc-section")==="text";!i&&this.hide(e,s)}},onFocus:function(t,e){var s=t.currentTarget,o=s.$_ptooltipShowDelay;this.show(s,e,o)},onBlur:function(t){var e=t.currentTarget,s=e.$_ptooltipHideDelay;this.hide(e,s)},onClick:function(t){var e=t.currentTarget,s=e.$_ptooltipHideDelay;this.hide(e,s)},onKeydown:function(t){var e=t.currentTarget,s=e.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,s)},onWindowResize:function(t){St()||this.hide(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},tooltipActions:function(t,e){if(!(t.$_ptooltipDisabled||!kt(t))){var s=this.create(t,e);this.align(t),!this.isUnstyled()&&Et(s,250);var o=this;window.addEventListener("resize",t.$_pWindowResizeEvent),s.addEventListener("mouseleave",function i(){o.hide(t),s.removeEventListener("mouseleave",i),t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),setTimeout(function(){return t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(t),at.set("tooltip",s,t.$_ptooltipZIndex)}},show:function(t,e,s){var o=this;s!==void 0?this.timer=setTimeout(function(){return o.tooltipActions(t,e)},s):this.tooltipActions(t,e)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},hide:function(t,e){var s=this;clearTimeout(this.timer),e!==void 0?setTimeout(function(){return s.tooltipRemoval(t)},e):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},getArrowElement:function(t){var e=this.getTooltipElement(t);return ot(e,'[data-pc-section="arrow"]')},create:function(t){var e=t.$_ptooltipModifiers,s=J("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:e})}),o=J("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:e})});t.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(t.$_ptooltipValue))):o.innerHTML=t.$_ptooltipValue;var i=J("div",lt(lt({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:e})),s,o);return document.body.appendChild(i),t.$_ptooltipId=i.id,this.$el=i,i},remove:function(t){if(t){var e=this.getTooltipElement(t);e&&e.parentElement&&(at.clear(e),document.body.removeChild(e)),t.$_ptooltipId=null}},align:function(t){var e=t.$_ptooltipModifiers;e.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):e.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):e.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var e=t.getBoundingClientRect(),s=e.left+$t(),o=e.top+_t();return{left:s,top:o}},alignRight:function(t){this.preAlign(t,"right");var e=this.getTooltipElement(t),s=this.getArrowElement(t),o=this.getHostOffset(t),i=o.left+L(t),d=o.top+(M(t)-M(e))/2;e.style.left=i+"px",e.style.top=d+"px",s.style.top="50%",s.style.right=null,s.style.bottom=null,s.style.left="0"},alignLeft:function(t){this.preAlign(t,"left");var e=this.getTooltipElement(t),s=this.getArrowElement(t),o=this.getHostOffset(t),i=o.left-L(e),d=o.top+(M(t)-M(e))/2;e.style.left=i+"px",e.style.top=d+"px",s.style.top="50%",s.style.right="0",s.style.bottom=null,s.style.left=null},alignTop:function(t){this.preAlign(t,"top");var e=this.getTooltipElement(t),s=this.getArrowElement(t),o=L(e),i=L(t),d=Q(),r=d.width,l=this.getHostOffset(t),g=l.left+(i-o)/2,b=l.top-M(e);g<0?g=0:g+o>r&&(g=Math.floor(l.left+i-o)),e.style.left=g+"px",e.style.top=b+"px";var $=l.left-this.getHostOffset(e).left+i/2;s.style.top=null,s.style.right=null,s.style.bottom="0",s.style.left=$+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var e=this.getTooltipElement(t),s=this.getArrowElement(t),o=L(e),i=L(t),d=Q(),r=d.width,l=this.getHostOffset(t),g=l.left+(i-o)/2,b=l.top+M(t);g<0?g=0:g+o>r&&(g=Math.floor(l.left+i-o)),e.style.left=g+"px",e.style.top=b+"px";var $=l.left-this.getHostOffset(e).left+i/2;s.style.top="0",s.style.right=null,s.style.bottom=null,s.style.left=$+"px"},preAlign:function(t,e){var s=this.getTooltipElement(t);s.style.left="-999px",s.style.top="-999px",xt(s,"p-tooltip-".concat(s.$_ptooltipPosition)),!this.isUnstyled()&&wt(s,"p-tooltip-".concat(e)),s.$_ptooltipPosition=e,s.setAttribute("data-p-position",e)},isOutOfBounds:function(t){var e=this.getTooltipElement(t),s=e.getBoundingClientRect(),o=s.top,i=s.left,d=L(e),r=M(e),l=Q();return i+d>l.width||i<0||o<0||o+r>l.height},getTarget:function(t){var e;return yt(t,"p-inputwrapper")&&(e=ot(t,"input"))!==null&&e!==void 0?e:t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&S(t.arg)==="object"?Object.entries(t.arg).reduce(function(e,s){var o=Kt(s,2),i=o[0],d=o[1];return(i==="event"||i==="position")&&(e[d]=!0),e},{}):{}}}});function Zt(){let n=null,t=0;const e=h("down"),s=()=>{window.addEventListener("scroll",()=>{const i=window.scrollY;e.value=i>t?"down":"up",t=i});const o={threshold:.1,rootMargin:"0px 0px -50px 0px"};n=new IntersectionObserver(i=>{i.forEach(d=>{d.isIntersecting?d.target.classList.add("animate-in"):e.value==="up"&&d.target.classList.remove("animate-in")})},o),document.querySelectorAll(".fade-up, .fade-in, .fade-left, .fade-right, .scale-in").forEach(i=>{n.observe(i)})};return N(()=>{s()}),ut(()=>{n&&n.disconnect(),window.removeEventListener("scroll",()=>{})}),{observeElements:s}}const Xt={class:"sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between"},Gt={class:"flex gap-3 items-center"},te={__name:"LandingNav",setup(n){X(),Zt();const t=Tt(()=>document.documentElement.classList.contains("app-dark")),e=()=>{const o=document.documentElement;o.classList.contains("app-dark")?(o.classList.remove("app-dark"),localStorage.setItem("app-dark-mode","false")):(o.classList.add("app-dark"),localStorage.setItem("app-dark-mode","true"))},s=o=>{var i;(i=document.getElementById(o))==null||i.scrollIntoView({behavior:"smooth"})};return N(()=>{const o=localStorage.getItem("app-dark-mode"),i=window.matchMedia("(prefers-color-scheme: dark)").matches;o!==null?o==="true"?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark"):i&&document.documentElement.classList.add("app-dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",d=>{localStorage.getItem("app-dark-mode")===null&&(d.matches?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark"))})}),(o,i)=>{const d=mt;return c(),u("div",Xt,[i[3]||(i[3]=a("div",{class:"flex items-center"},[a("i",{class:"pi pi-chart-line text-primary text-3xl mr-2"}),a("span",{class:"text-gray-900 dark:text-gray-100 font-bold text-2xl"},"Clear Cut Markets")],-1)),a("div",Gt,[p(v(y),{label:"Features",class:"p-button-text",onClick:i[0]||(i[0]=r=>s("features"))}),p(v(y),{label:"Pricing",class:"p-button-text",onClick:i[1]||(i[1]=r=>s("pricing"))}),P(p(v(y),{icon:t.value?"pi pi-sun":"pi pi-moon",class:"p-button-rounded p-button-text",onClick:e},null,8,["icon"]),[[d,t.value?"Light Mode":"Dark Mode",void 0,{bottom:!0}]]),p(v(y),{label:"Login",class:"p-button-outlined",onClick:i[2]||(i[2]=r=>o.$router.push("/auth/login"))})])])}}},ee=C(te,[["__scopeId","data-v-80eaa3c5"]]);var ne=`
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
`,se={root:function(t){var e=t.props;return["p-message p-component p-message-"+e.severity,{"p-message-outlined":e.variant==="outlined","p-message-simple":e.variant==="simple","p-message-sm":e.size==="small","p-message-lg":e.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},oe=H.extend({name:"message",style:ne,classes:se}),ae={name:"BaseMessage",extends:K,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:oe,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function B(n){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(n)}function dt(n,t,e){return(t=ie(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ie(n){var t=re(n,"string");return B(t)=="symbol"?t:t+""}function re(n,t){if(B(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,t);if(B(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var gt={name:"Message",extends:ae,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return V(dt(dt({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:Lt},components:{TimesIcon:Ct}};function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(n)}function ct(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),e.push.apply(e,s)}return e}function pt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ct(Object(e),!0).forEach(function(s){le(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ct(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}function le(n,t,e){return(t=de(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function de(n){var t=ce(n,"string");return O(t)=="symbol"?t:t+""}function ce(n,t){if(O(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,t);if(O(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var pe=["data-p"],ue=["data-p"],me=["data-p"],ge=["aria-label","data-p"],ve=["data-p"];function fe(n,t,e,s,o,i){var d=Mt("TimesIcon"),r=It("ripple");return c(),k(E,f({name:"p-message",appear:""},n.ptmi("transition")),{default:w(function(){return[P(a("div",f({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":i.dataP},n.ptm("root")),[n.$slots.container?_(n.$slots,"container",{key:0,closeCallback:i.close}):(c(),u("div",f({key:1,class:n.cx("content"),"data-p":i.dataP},n.ptm("content")),[_(n.$slots,"icon",{class:T(n.cx("icon"))},function(){return[(c(),k(F(n.icon?"span":null),f({class:[n.cx("icon"),n.icon],"data-p":i.dataP},n.ptm("icon")),null,16,["class","data-p"]))]}),n.$slots.default?(c(),u("div",f({key:0,class:n.cx("text"),"data-p":i.dataP},n.ptm("text")),[_(n.$slots,"default")],16,me)):x("",!0),n.closable?P((c(),u("button",f({key:1,class:n.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(l){return i.close(l)}),"data-p":i.dataP},pt(pt({},n.closeButtonProps),n.ptm("closeButton"))),[_(n.$slots,"closeicon",{},function(){return[n.closeIcon?(c(),u("i",f({key:0,class:[n.cx("closeIcon"),n.closeIcon],"data-p":i.dataP},n.ptm("closeIcon")),null,16,ve)):(c(),k(d,f({key:1,class:[n.cx("closeIcon"),n.closeIcon],"data-p":i.dataP},n.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,ge)),[[r]]):x("",!0)],16,ue))],16,pe),[[Pt,o.visible]])]}),_:3},16)}gt.render=fe;var he=`
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
`,be={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ye=H.extend({name:"chip",style:he,classes:be}),xe={name:"BaseChip",extends:K,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:ye,provide:function(){return{$pcChip:this,$parentInstance:this}}},nt={name:"Chip",extends:xe,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return V({removable:this.removable})}},components:{TimesCircleIcon:zt}},we=["aria-label","data-p"],$e=["src"];function _e(n,t,e,s,o,i){return o.visible?(c(),u("div",f({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root"),{"data-p":i.dataP}),[_(n.$slots,"default",{},function(){return[n.image?(c(),u("img",f({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,$e)):n.$slots.icon?(c(),k(F(n.$slots.icon),f({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(c(),u("span",f({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):x("",!0),n.label!==null?(c(),u("div",f({key:3,class:n.cx("label")},n.ptm("label")),m(n.label),17)):x("",!0)]}),n.removable?_(n.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(c(),k(F(n.removeIcon?"span":"TimesCircleIcon"),f({class:[n.cx("removeIcon"),n.removeIcon],onClick:i.close,onKeydown:i.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):x("",!0)],16,we)):x("",!0)}nt.render=_e;const ke={class:"min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"},Ee={class:"text-center"},Se={class:"mb-4 animate-fade-in-down animation-delay-0"},Te={class:"flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300"},Ce={class:"flex-1"},Le={key:0,class:"mt-3 animate-fade-in"},Me={class:"mt-6 animate-fade-in-up animation-delay-500"},Ie={class:"flex justify-center items-center gap-4 flex-wrap"},Pe={class:"text-center px-6"},ze={class:"text-4xl font-bold text-primary mb-1"},Ae={class:"text-center px-6"},Be={class:"text-4xl font-bold text-primary mb-1"},Oe={class:"text-center px-6"},De={class:"text-4xl font-bold text-primary mb-1"},je={class:"text-center px-6"},He={class:"text-4xl font-bold text-primary mb-1"},Re={__name:"LandingHero",props:{animatedWaitlist:{type:Number,default:0},animatedSaved:{type:Number,default:0},animatedModules:{type:Number,default:0},animatedSources:{type:Number,default:0}},setup(n){const t=h(""),e=h(!1),s=h(""),o=h("success"),i=h(!1),d=async()=>{if(!t.value||!t.value.includes("@")){i.value=!0,s.value="Please enter a valid email address",o.value="error",setTimeout(()=>{i.value=!1},500);return}e.value=!0,setTimeout(()=>{console.log("Email submitted:",t.value),s.value="Thanks for joining! We'll be in touch soon.",o.value="success",t.value="",e.value=!1,setTimeout(()=>{s.value=""},5e3)},1e3)};return(r,l)=>(c(),u("div",ke,[a("div",Ee,[a("div",Se,[p(v(nt),{label:"🚀 Launching Soon",class:"px-3 py-2"})]),l[8]||(l[8]=a("h1",{class:"text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down animation-delay-100"},[z(" Track What "),a("span",{class:"text-gradient"},"Matters Most")],-1)),l[9]||(l[9]=a("p",{class:"text-xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200"}," Professional investment monitoring for 95% less than Bloomberg Terminal. Focus on your top investments with AI-powered insights. ",-1)),a("div",Te,[a("div",Ce,[p(v(Dt),{iconPosition:"left",class:"w-full"},{default:w(()=>[p(v(jt),{class:"pi pi-envelope text-gray-500"}),p(v(Ot),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=g=>t.value=g),placeholder:"Enter your email",onKeyup:At(d,["enter"]),class:T(["w-full",{"shake-animation":i.value}])},null,8,["modelValue","class"])]),_:1})]),p(v(y),{label:"Join Waitlist",class:"p-button-primary p-button-raised",onClick:d,loading:e.value},null,8,["loading"])]),p(E,{name:"fade"},{default:w(()=>[s.value?(c(),u("div",Le,[p(v(gt),{severity:o.value,closable:!1},{default:w(()=>[z(m(s.value),1)]),_:1},8,["severity"])])):x("",!0)]),_:1}),a("div",Me,[a("div",Ie,[a("div",Pe,[a("h3",ze,m(n.animatedWaitlist)+"+",1),l[1]||(l[1]=a("p",{class:"text-gray-600 text-sm m-0"},"On Waitlist",-1))]),l[5]||(l[5]=a("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),a("div",Ae,[a("h3",Be,"$"+m(n.animatedSaved)+"k",1),l[2]||(l[2]=a("p",{class:"text-gray-600 text-sm m-0"},"Saved vs competitors",-1))]),l[6]||(l[6]=a("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),a("div",Oe,[a("h3",De,m(n.animatedModules),1),l[3]||(l[3]=a("p",{class:"text-gray-600 text-sm m-0"},"Possible Modules",-1))]),l[7]||(l[7]=a("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),a("div",je,[a("h3",He,m(n.animatedSources)+"+",1),l[4]||(l[4]=a("p",{class:"text-gray-600 text-sm m-0"},"Data Sources",-1))])])])])]))}},We=C(Re,[["__scopeId","data-v-390ea26d"]]);var Fe=`
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
`,Ne={root:function(t){var e=t.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ke=H.extend({name:"tag",style:Fe,classes:Ne}),Ve={name:"BaseTag",extends:K,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ke,provide:function(){return{$pcTag:this,$parentInstance:this}}};function D(n){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(n)}function qe(n,t,e){return(t=Ye(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Ye(n){var t=Ue(n,"string");return D(t)=="symbol"?t:t+""}function Ue(n,t){if(D(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,t);if(D(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var vt={name:"Tag",extends:Ve,inheritAttrs:!1,computed:{dataP:function(){return V(qe({rounded:this.rounded},this.severity,this.severity))}}},Qe=["data-p"];function Je(n,t,e,s,o,i){return c(),u("span",f({class:n.cx("root"),"data-p":i.dataP},n.ptmi("root")),[n.$slots.icon?(c(),k(F(n.$slots.icon),f({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(c(),u("span",f({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):x("",!0),n.value!=null||n.$slots.default?_(n.$slots,"default",{key:2},function(){return[a("span",f({class:n.cx("label")},n.ptm("label")),m(n.value),17)]}):x("",!0)],16,Qe)}vt.render=Je;const Ze={class:"px-4 py-8 md:px-6 lg:px-8"},Xe={class:"max-w-7xl mx-auto py-8"},Ge={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},tn=["onMouseenter"],en={class:"mb-4"},nn={class:"flex justify-between items-start"},sn={class:"text-2xl font-bold text-gray-900 m-0"},on={class:"text-sm text-gray-600 m-0"},an={class:"mb-4"},rn={class:"flex items-baseline mb-1"},ln={class:"text-4xl font-bold text-gray-900"},dn={class:"text-sm text-gray-500"},cn={class:"h-16 my-4 bg-gray-50 rounded-md p-2"},pn={viewBox:"0 0 100 40",preserveAspectRatio:"none",class:"w-full h-full"},un=["points","stroke"],mn=["d","fill"],gn={class:"grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 mb-6"},vn={class:"text-center"},fn={class:"block text-base font-semibold text-gray-900"},hn={class:"text-center"},bn={class:"block text-base font-semibold text-gray-900"},yn={class:"text-center"},xn={class:"block text-base font-semibold text-gray-900"},wn={class:"mb-4"},$n={class:"text-sm text-gray-600 leading-relaxed"},_n={class:"mt-3 bg-gray-50 p-3 rounded-lg"},kn={class:"flex justify-between items-center mb-2"},En={class:"text-xs font-bold"},Sn={class:"h-2 bg-gray-200 rounded-full overflow-hidden"},Tn={class:"flex justify-center gap-4 pt-2"},Cn={class:"text-center mt-8"},Ln={__name:"LandingModulesDemo",setup(n){const t=h(null),e=h([{symbol:"AAPL",name:"Apple Inc.",icon:"pi-apple",price:"195.89",change:2.5,changeAmount:"+$4.73",simpleChart:"0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5",volume:"52.3M",marketCap:"$3.04T",peRatio:"32.1",sentiment:78,insight:"Strong momentum with institutional buying detected. Q4 earnings beat expectations."},{symbol:"BTC",name:"Bitcoin",icon:"pi-bitcoin",price:"43,250",change:-1.2,changeAmount:"-$525.50",simpleChart:"0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30",volume:"$24.8B",marketCap:"$847B",peRatio:"N/A",sentiment:45,insight:"Key support at $42,000. Watch for breakout above $45,000 resistance."},{symbol:"TSLA",name:"Tesla Inc.",icon:"pi-car",price:"238.45",change:3.8,changeAmount:"+$8.73",simpleChart:"0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2",volume:"118.2M",marketCap:"$758B",peRatio:"71.2",sentiment:85,insight:"Q4 delivery beats driving bullish sentiment. China demand remains strong."}]),s=o=>o>=70?"#22c55e":o>=30?"#f59e0b":"#ef4444";return(o,i)=>{const d=mt;return c(),u("div",Ze,[i[10]||(i[10]=a("div",{class:"text-center mb-6"},[a("h2",{class:"text-4xl font-bold text-gray-900 mb-3 fade-up"},"Your Investment Modules"),a("p",{class:"text-xl text-gray-600 max-w-3xl mx-auto fade-up stagger-1"}," Each module is a complete investment tracking system. Choose what matters to you. ")],-1)),a("div",Xe,[a("div",Ge,[(c(!0),u(G,null,tt(e.value,(r,l)=>(c(),u("div",{key:r.symbol,class:T(["p-4","fade-up",`stagger-${l+2}`])},[a("div",{class:"module-card group h-full bg-white dark:bg-gray-800 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30",onMouseenter:g=>t.value=l,onMouseleave:i[0]||(i[0]=g=>t.value=null)},[a("div",en,[a("div",nn,[a("div",null,[a("h3",sn,m(r.symbol),1),a("p",on,m(r.name),1)]),p(v(vt),{severity:r.change>0?"success":"danger",class:"font-semibold"},{default:w(()=>[z(m(r.change>0?"+":"")+m(r.change)+"% ",1)]),_:2},1032,["severity"])])]),a("div",an,[a("div",rn,[i[1]||(i[1]=a("span",{class:"text-xl text-gray-600 mr-1"},"$",-1)),a("span",ln,m(r.price),1)]),a("div",dn,[a("span",null,m(r.changeAmount),1),i[2]||(i[2]=a("span",{class:"ml-2"},"Today",-1))])]),a("div",cn,[(c(),u("svg",pn,[i[3]||(i[3]=a("line",{x1:"0",y1:"20",x2:"100",y2:"20",stroke:"#f0f0f0","stroke-width":"1"},null,-1)),a("polyline",{points:r.simpleChart,fill:"none",stroke:r.change>0?"#22c55e":"#ef4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,un),a("path",{d:`M ${r.simpleChart} L 100,40 L 0,40 Z`,fill:r.change>0?"#22c55e20":"#ef444420"},null,8,mn)]))]),a("div",gn,[a("div",vn,[i[4]||(i[4]=a("span",{class:"block text-xs text-gray-600 mb-1"},"Volume",-1)),a("span",fn,m(r.volume),1)]),a("div",hn,[i[5]||(i[5]=a("span",{class:"block text-xs text-gray-600 mb-1"},"Market Cap",-1)),a("span",bn,m(r.marketCap),1)]),a("div",yn,[i[6]||(i[6]=a("span",{class:"block text-xs text-gray-600 mb-1"},"P/E Ratio",-1)),a("span",xn,m(r.peRatio),1)])]),a("div",wn,[i[8]||(i[8]=a("div",{class:"flex items-center gap-2 mb-3"},[a("i",{class:"pi pi-sparkles text-primary"}),a("span",{class:"font-semibold"},"AI Analysis")],-1)),a("p",$n,m(r.insight),1),a("div",_n,[a("div",kn,[i[7]||(i[7]=a("span",{class:"text-xs text-gray-500"},"Sentiment",-1)),a("span",En,m(r.sentiment)+"% Bullish",1)]),a("div",Sn,[a("div",{class:"h-full rounded-full transition-all duration-500",style:et({width:r.sentiment+"%",backgroundColor:s(r.sentiment)})},null,4)])])]),a("div",Tn,[P(p(v(y),{icon:"pi pi-bell",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[d,"Set Alerts"]]),P(p(v(y),{icon:"pi pi-chart-line",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[d,"View Details"]]),P(p(v(y),{icon:"pi pi-cog",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[d,"Configure"]])])],40,tn)],2))),128))]),a("div",Cn,[p(v(y),{label:"This could be your dashboard",class:"p-button-outlined p-button-lg",disabled:""}),i[9]||(i[9]=a("p",{class:"text-gray-600 mt-3"},"Join the waitlist to start tracking your investments",-1))])])])}}},Mn=C(Ln,[["__scopeId","data-v-4a4868b5"]]),In={id:"features",class:"px-4 py-8 md:px-6 lg:px-8 bg-gray-50"},Pn={class:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"},zn=["onMouseenter"],An={class:"mb-4"},Bn={class:"text-gray-900 text-xl mb-3 font-semibold"},On={class:"text-gray-600 leading-relaxed"},Dn={__name:"LandingFeatures",setup(n){const t=h(null),e=h([{icon:"pi-chart-line",title:"Module-Based Tracking",description:"Focus on 3-9 investments that matter most to your portfolio"},{icon:"pi-bolt",title:"AI-Powered Insights",description:"Get sentiment analysis and smart alerts on your investments"},{icon:"pi-shield",title:"Bank-Level Security",description:"Your data is encrypted and secure with enterprise-grade protection"},{icon:"pi-mobile",title:"Access Anywhere",description:"Monitor your investments from any device, anytime"},{icon:"pi-sync",title:"Real-Time Updates",description:"Live market data and instant notifications"},{icon:"pi-dollar",title:"95% Cost Savings",description:"Professional tools without the enterprise price tag"}]);return(s,o)=>(c(),u("div",In,[o[1]||(o[1]=a("h2",{class:"text-center text-gray-900 text-3xl font-bold mb-6 fade-up"},"Why Choose Clear Cut Markets?",-1)),a("div",Pn,[(c(!0),u(G,null,tt(e.value,(i,d)=>(c(),u("div",{key:d,class:T(["text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105","fade-up",`stagger-${d%3+1}`]),onMouseenter:r=>t.value=d,onMouseleave:o[0]||(o[0]=r=>t.value=null)},[a("div",An,[a("i",{class:T([`pi ${i.icon} text-5xl transition-colors duration-300`,t.value===d?"text-primary":"text-gray-400"])},null,2)]),a("h3",Bn,m(i.title),1),a("p",On,m(i.description),1)],42,zn))),128))])]))}},jn=C(Dn,[["__scopeId","data-v-253dd618"]]);var Hn=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,Rn={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},Wn={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},Fn=H.extend({name:"divider",style:Hn,classes:Wn,inlineStyles:Rn}),Nn={name:"BaseDivider",extends:K,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Fn,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function j(n){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(n)}function Z(n,t,e){return(t=Kn(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Kn(n){var t=Vn(n,"string");return j(t)=="symbol"?t:t+""}function Vn(n,t){if(j(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,t);if(j(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var W={name:"Divider",extends:Nn,inheritAttrs:!1,computed:{dataP:function(){return V(Z(Z(Z({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},qn=["aria-orientation","data-p"],Yn=["data-p"];function Un(n,t,e,s,o,i){return c(),u("div",f({class:n.cx("root"),style:n.sx("root"),role:"separator","aria-orientation":n.layout,"data-p":i.dataP},n.ptmi("root")),[n.$slots.default?(c(),u("div",f({key:0,class:n.cx("content"),"data-p":i.dataP},n.ptm("content")),[_(n.$slots,"default")],16,Yn)):x("",!0)],16,qn)}W.render=Un;const Qn={id:"pricing",class:"py-12 px-4 md:px-6 lg:px-8 bg-gray-50"},Jn={class:"flex justify-center mb-8"},Zn={class:"inline-flex items-center bg-white rounded-lg p-1 shadow-sm relative"},Xn={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"},Gn={class:"p-0 md:p-4"},ts={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},es={class:"text-center mb-4"},ns={class:"text-sm text-gray-500 mt-1"},ss={key:0,class:"text-sm text-green-600 font-semibold"},os={key:1,class:"text-sm text-transparent"},as={class:"mb-8 flex flex-col items-center gap-4"},is={class:"flex items-baseline"},rs={class:"text-5xl font-bold text-gray-900"},ls={class:"p-0 md:p-4"},ds={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},cs={class:"absolute -top-4 left-1/2 -translate-x-1/2"},ps={class:"text-center mb-4"},us={class:"text-sm text-gray-500 mt-1"},ms={class:"text-sm text-green-600 font-semibold"},gs={class:"mb-8 flex flex-col items-center gap-4"},vs={class:"flex items-baseline"},fs={class:"text-5xl font-bold text-gray-900"},hs={class:"p-0 md:p-4"},bs={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},ys={class:"text-center mb-4"},xs={class:"text-sm text-gray-500 mt-1"},ws={class:"text-sm text-green-600 font-semibold"},$s={class:"mb-8 flex flex-col items-center gap-4"},_s={class:"flex items-baseline"},ks={class:"text-5xl font-bold text-gray-900"},Es={class:"mt-12 text-center bg-white rounded-xl p-8 max-w-2xl mx-auto"},Ss={__name:"LandingPricing",setup(n){X();const t=h("monthly"),e=()=>{window.location.href="mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry"};return(s,o)=>(c(),u("div",Qn,[o[22]||(o[22]=a("div",{class:"text-center mb-12"},[a("h2",{class:"text-gray-900 font-bold mb-3 text-4xl fade-up"},"Simple Module-Based Pricing"),a("p",{class:"text-gray-600 text-xl max-w-2xl mx-auto fade-up stagger-1"}," Choose the plan that fits your portfolio. Save 95% compared to Industry standard tools. ")],-1)),a("div",Jn,[a("div",Zn,[a("div",{class:"absolute h-full bg-violet-600 rounded-md transition-all duration-300 ease-out",style:et({width:"50%",transform:t.value==="monthly"?"translateX(0)":"translateX(100%)"})},null,4),a("button",{onClick:o[0]||(o[0]=i=>t.value="monthly"),class:T(["relative z-10 px-4 py-2 rounded-md transition-all duration-300",t.value==="monthly"?"text-white":"text-gray-600"])}," Monthly ",2),a("button",{onClick:o[1]||(o[1]=i=>t.value="annual"),class:T(["relative z-10 px-4 py-2 rounded-md transition-all duration-300",t.value==="annual"?"text-white":"text-gray-600"])}," Annual ",2)])]),a("div",Xn,[a("div",Gn,[a("div",ts,[o[8]||(o[8]=a("div",{class:"text-gray-900 text-center mb-8"},[a("h3",{class:"text-3xl font-bold"},"Essential"),a("p",{class:"text-gray-600 mt-2"},"For focused investors")],-1)),a("div",es,[o[5]||(o[5]=a("span",{class:"text-2xl font-bold text-violet-600"},"3 Modules",-1)),a("p",ns,"€"+m(t.value==="annual"?"6.67":"8.33")+" per module",1),t.value==="annual"?(c(),u("p",ss,"Save €60/year")):(c(),u("p",os,"-"))]),a("div",as,[a("div",is,[a("span",rs,[o[6]||(o[6]=z(" €")),p(E,{name:"price-fade",mode:"out-in"},{default:w(()=>[(c(),u("span",{key:t.value},m(t.value==="annual"?"20":"25"),1))]),_:1})]),o[7]||(o[7]=a("span",{class:"text-gray-600 ml-2"},"per month",-1))]),p(v(y),{label:"Start 14-Day Trial",severity:"success",class:"p-button-rounded px-6 py-3 font-semibold w-full",onClick:o[2]||(o[2]=i=>s.$router.push("/auth/register"))})]),p(v(W),{class:"w-full bg-gray-200"}),o[9]||(o[9]=A('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-660366f1><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Track <strong data-v-660366f1>3 investments</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Real-time price alerts</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Basic AI insights</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Daily market summaries</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Mobile &amp; web access</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Email support</span></li><li class="flex items-start text-gray-400" data-v-660366f1><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-660366f1></i><span data-v-660366f1>Advanced AI insights</span></li><li class="flex items-start text-gray-400" data-v-660366f1><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-660366f1></i><span data-v-660366f1>Sentiment analysis</span></li><li class="flex items-start text-gray-400" data-v-660366f1><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-660366f1></i><span data-v-660366f1>15+ data sources</span></li></ul>',1))])]),a("div",ls,[a("div",ds,[a("div",cs,[p(v(nt),{label:"Most Popular",class:"bg-violet-600 text-white px-4 py-2"})]),o[13]||(o[13]=a("div",{class:"text-gray-900 text-center mb-8"},[a("h3",{class:"text-3xl font-bold"},"Professional"),a("p",{class:"text-gray-600 mt-2"},"For active investors")],-1)),a("div",ps,[o[10]||(o[10]=a("span",{class:"text-2xl font-bold text-violet-600"},"6 Modules",-1)),a("p",us,"€"+m(t.value==="annual"?"6.00":"7.50")+" per module",1),a("p",ms,"Save "+m(t.value==="annual"?"€108/year":"10%"),1)]),a("div",gs,[a("div",vs,[a("span",fs,[o[11]||(o[11]=z(" €")),p(E,{name:"price-fade",mode:"out-in"},{default:w(()=>[(c(),u("span",{key:t.value},m(t.value==="annual"?"36":"45"),1))]),_:1})]),o[12]||(o[12]=a("span",{class:"text-gray-600 ml-2"},"per month",-1))]),p(v(y),{label:"Start 14-Day Trial",severity:"success",class:"p-button-rounded px-6 py-3 font-semibold w-full",onClick:o[3]||(o[3]=i=>s.$router.push("/auth/register"))})]),p(v(W),{class:"w-full bg-gray-200"}),o[14]||(o[14]=A('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-660366f1><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Track <strong data-v-660366f1>6 investments</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Everything in Essential, plus:</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Advanced AI insights</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Priority support</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Sentiment analysis</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>15+ data sources</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Custom alerts &amp; thresholds</span></li><li class="flex items-start text-gray-400" data-v-660366f1><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-660366f1></i><span data-v-660366f1>API access</span></li><li class="flex items-start text-gray-400" data-v-660366f1><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-660366f1></i><span data-v-660366f1>Portfolio analytics</span></li></ul><div class="mt-auto p-4 bg-violet-50 rounded-lg" data-v-660366f1><p class="text-sm text-violet-700 text-center font-semibold" data-v-660366f1> Save €2,355/month vs competitors </p></div>',2))])]),a("div",hs,[a("div",bs,[o[18]||(o[18]=a("div",{class:"text-gray-900 text-center mb-8"},[a("h3",{class:"text-3xl font-bold"},"Advanced"),a("p",{class:"text-gray-600 mt-2"},"For portfolio managers")],-1)),a("div",ys,[o[15]||(o[15]=a("span",{class:"text-2xl font-bold text-violet-600"},"9 Modules",-1)),a("p",xs,"€"+m(t.value==="annual"?"5.78":"7.22")+" per module",1),a("p",ws,"Save "+m(t.value==="annual"?"€156/year":"13%"),1)]),a("div",$s,[a("div",_s,[a("span",ks,[o[16]||(o[16]=z(" €")),p(E,{name:"price-fade",mode:"out-in"},{default:w(()=>[(c(),u("span",{key:t.value},m(t.value==="annual"?"52":"65"),1))]),_:1})]),o[17]||(o[17]=a("span",{class:"text-gray-600 ml-2"},"per month",-1))]),p(v(y),{label:"Start 14-Day Trial",severity:"success",class:"p-button-rounded px-6 py-3 font-semibold w-full",onClick:o[4]||(o[4]=i=>s.$router.push("/auth/register"))})]),p(v(W),{class:"w-full bg-gray-200"}),o[19]||(o[19]=A('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-660366f1><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Track <strong data-v-660366f1>9 investments</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Everything in Professional, plus:</span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Dedicated support</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>API access (beta)</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Portfolio analytics</strong></span></li><li class="flex items-start" data-v-660366f1><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1><strong data-v-660366f1>Export data &amp; reports</strong></span></li></ul>',1))])])]),a("div",Es,[o[20]||(o[20]=a("h3",{class:"text-2xl font-bold text-gray-900 mb-4"},"Need More Than 9 Modules?",-1)),o[21]||(o[21]=a("p",{class:"text-gray-600 mb-6"}," We offer custom plans for institutional investors and teams who need to track larger portfolios. ",-1)),p(v(y),{label:"Contact Sales",class:"p-button-outlined p-button-lg",icon:"pi pi-arrow-right",iconPos:"right",onClick:e})]),o[23]||(o[23]=A('<div class="mt-16 text-center" data-v-660366f1><p class="text-gray-600 mb-4" data-v-660366f1> All plans include: Bank-level security, 99.9% uptime, and regular updates </p><div class="flex flex-wrap justify-center gap-6 text-sm" data-v-660366f1><div class="flex items-center gap-2" data-v-660366f1><i class="pi pi-shield text-green-500" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>SSL encryption</span></div><div class="flex items-center gap-2" data-v-660366f1><i class="pi pi-refresh text-green-500" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>14-day free trial</span></div><div class="flex items-center gap-2" data-v-660366f1><i class="pi pi-times text-green-500" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>Cancel anytime</span></div><div class="flex items-center gap-2" data-v-660366f1><i class="pi pi-credit-card text-green-500" data-v-660366f1></i><span class="text-gray-700" data-v-660366f1>No setup fees</span></div></div></div>',1))]))}},Ts=C(Ss,[["__scopeId","data-v-660366f1"]]),Cs={class:"px-4 py-16 md:px-6 lg:px-8 bg-white"},Ls={class:"max-w-4xl mx-auto"},Ms={class:"space-y-4"},Is=["onClick","aria-expanded"],Ps={class:"font-semibold text-gray-900"},zs={key:0,class:"px-6 py-4 border-t bg-gray-50"},As={class:"text-gray-700"},Bs={__name:"LandingFAQ",setup(n){const t=h(null),e=h([{question:"How is this different from Bloomberg Terminal?",answer:"Clear Cut Markets focuses on tracking 3-9 key investments with AI-powered insights, while Bloomberg Terminal is designed for institutional traders needing access to everything. We provide 80% of the value at 5% of the cost."},{question:"Can I change my plan anytime?",answer:"Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences."},{question:"What data sources do you use?",answer:"We aggregate data from 15+ reliable sources including major exchanges, financial APIs, news outlets, and social sentiment platforms to give you comprehensive insights."},{question:"Is there a free trial?",answer:"Yes, all plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period."},{question:"How does the module system work?",answer:"Each module represents one investment you want to track (stock, crypto, ETF, etc.). You get a complete dashboard with real-time data, AI insights, and alerts for each module."},{question:"What happens if I exceed my module limit?",answer:"You'll need to upgrade to a higher plan or remove existing modules to add new ones. We'll notify you when you're approaching your limit."}]),s=o=>{t.value=t.value===o?null:o};return(o,i)=>(c(),u("section",Cs,[a("div",Ls,[i[0]||(i[0]=a("h2",{class:"text-3xl font-bold text-center text-gray-900 mb-8"}," Frequently Asked Questions ",-1)),a("div",Ms,[(c(!0),u(G,null,tt(e.value,(d,r)=>(c(),u("div",{key:r,class:"border rounded-lg overflow-hidden"},[a("button",{onClick:l=>s(r),class:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors","aria-expanded":t.value===r},[a("span",Ps,m(d.question),1),a("i",{class:T(["pi",t.value===r?"pi-chevron-up":"pi-chevron-down","text-gray-500"])},null,2)],8,Is),p(E,{name:"accordion"},{default:w(()=>[t.value===r?(c(),u("div",zs,[a("p",As,m(d.answer),1)])):x("",!0)]),_:2},1024)]))),128))])])]))}},Os=C(Bs,[["__scopeId","data-v-68b6e44b"]]),Ds={class:"fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40"},js={class:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"},Hs={__name:"LandingStickyCTA",setup(n){return X(),(t,e)=>(c(),k(E,{name:"sticky-slide"},{default:w(()=>[a("div",Ds,[a("div",js,[e[1]||(e[1]=a("div",{class:"text-center md:text-left"},[a("p",{class:"font-semibold"},"Ready to start tracking smarter?"),a("p",{class:"text-sm opacity-90"},"Join 234+ investors • 14-day free trial")],-1)),p(v(y),{label:"Start Free Trial",class:"bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold",onClick:e[0]||(e[0]=s=>t.$router.push("/auth/register"))})])])]),_:1}))}},Rs=C(Hs,[["__scopeId","data-v-60a91161"]]),Ws={__name:"Landing",setup(n){const{initDarkMode:t}=Ht(),e=h(0),s=h(0),o=h(0),i=h(0),d=h(!1),r=(g,b,$,q)=>{const Y=($-b)/(q/16);let U=b;const ft=setInterval(()=>{U+=Y,U>=$?(g.value=$,clearInterval(ft)):g.value=Math.floor(U)},16)},l=()=>{const g=window.scrollY,b=window.innerHeight,$=document.documentElement.scrollHeight,q=g>b*2,st=g>$-b*1.5,Y=document.getElementById("pricing")&&g>document.getElementById("pricing").offsetTop;d.value=q&&Y||st};return N(()=>{t(),r(e,0,234,2e3),r(s,0,23,2e3),r(o,0,9,1500),r(i,0,15,1800),window.addEventListener("scroll",l),document.title="Clear Cut Markets - Professional Investment Tracking for 95% Less"}),ut(()=>{window.removeEventListener("scroll",l)}),(g,b)=>(c(),u("div",{class:"relative overflow-x-hidden sticky-bar-padding",style:et({paddingBottom:d.value?"96px":"0"})},[b[0]||(b[0]=A('<div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10" data-v-da0ce68e></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-da0ce68e><div class="absolute inset-0" data-v-da0ce68e><div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent" data-v-da0ce68e></div><div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent" data-v-da0ce68e></div><div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45" data-v-da0ce68e></div><div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45" data-v-da0ce68e></div></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-da0ce68e><div class="absolute inset-0" style="background-image:radial-gradient(circle, #667eea 1px, transparent 1px);background-size:50px 50px;opacity:0.3;" data-v-da0ce68e></div></div>',3)),p(ee),p(We,{animatedWaitlist:e.value,animatedSaved:s.value,animatedModules:o.value,animatedSources:i.value},null,8,["animatedWaitlist","animatedSaved","animatedModules","animatedSources"]),p(Mn),p(jn),p(Ts),p(Os),p(E,{name:"sticky-slide"},{default:w(()=>[d.value?(c(),k(Rs,{key:0})):x("",!0)]),_:1})],4))}},qs=C(Ws,[["__scopeId","data-v-da0ce68e"]]);export{qs as default};
