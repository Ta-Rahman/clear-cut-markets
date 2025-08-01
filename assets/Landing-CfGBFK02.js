import{r as y,o as le,a as _e,B as T,b as Ve,R as Ke,z as ge,v as S,C as D,h as J,O as Fe,W as de,k as Ne,$ as We,x as z,U as ne,T as Ue,c as qe,Y as Ze,Q as A,s as G,d as fe,e as Ye,t as $e,f as Xe,g as ce,i as Ce,j as Z,l as O,m as se,n as H,p as ue,q as C,u as p,w as k,y as h,A as w,D as b,E as g,F as j,G as M,H as $,I as R,J as o,K as E,L as l,M as P,N as Le,P as L,S as Q,V as i,X as Ee,Z as Ge,_ as Je,a0 as Y,a1 as V,a2 as Qe,a3 as Se,a4 as et,a5 as tt,a6 as X,a7 as pe,a8 as De,a9 as nt}from"./index-DduI9QZx.js";import{C as ot,s as ae,a as st}from"./index-DXH8pFz0.js";import{s as _}from"./index-D8eFv6JX.js";import{s as at,F as ze,a as it,b as rt,c as lt}from"./index-C4GNI-v4.js";function dt(){let t=null,e=0;const n=y("down"),s=()=>{window.addEventListener("scroll",()=>{const a=window.scrollY;n.value=a>e?"down":"up",e=a});const r={threshold:.1,rootMargin:"0px 0px -50px 0px"};t=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting?c.target.classList.add("animate-in"):n.value==="up"&&c.target.classList.remove("animate-in")})},r),document.querySelectorAll(".fade-up, .fade-in, .fade-left, .fade-right, .scale-in").forEach(a=>{t.observe(a)})};return le(()=>{s()}),_e(()=>{t&&t.disconnect(),window.removeEventListener("scroll",()=>{})}),{observeElements:s}}var ct=`
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
`,ut={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},pt=T.extend({name:"tooltip-directive",style:ct,classes:ut}),mt=Ve.extend({style:pt});function gt(t,e){return vt(t)||bt(t,e)||ht(t,e)||ft()}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(t,e){if(t){if(typeof t=="string")return he(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(t,e):void 0}}function he(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}function bt(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s,r,a,c,f=[],u=!0,d=!1;try{if(a=(n=n.call(t)).next,e!==0)for(;!(u=(s=a.call(n)).done)&&(f.push(s.value),f.length!==e);u=!0);}catch(m){d=!0,r=m}finally{try{if(!u&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(d)throw r}}return f}}function vt(t){if(Array.isArray(t))return t}function be(t,e,n){return(e=yt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yt(t){var e=xt(t,"string");return B(e)=="symbol"?e:e+""}function xt(t,e){if(B(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(B(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}var Me=mt.extend("tooltip",{beforeMount:function(e,n){var s,r=this.getTarget(e);if(r.$_ptooltipModifiers=this.getModifiers(n),n.value){if(typeof n.value=="string")r.$_ptooltipValue=n.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipFitContent=!0,r.$_ptooltipIdAttr=G("pv_id")+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0;else if(B(n.value)==="object"&&n.value){if(fe(n.value.value)||n.value.value.trim()==="")return;r.$_ptooltipValue=n.value.value,r.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,r.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,r.$_ptooltipClass=n.value.class||"",r.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,r.$_ptooltipIdAttr=n.value.id||G("pv_id")+"_tooltip",r.$_ptooltipShowDelay=n.value.showDelay||0,r.$_ptooltipHideDelay=n.value.hideDelay||0,r.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0}}else return;r.$_ptooltipZIndex=(s=n.instance.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.zIndex)===null||s===void 0?void 0:s.tooltip,this.bindEvents(r,n),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,n){var s=this.getTarget(e);if(s.$_ptooltipModifiers=this.getModifiers(n),this.unbindEvents(s),!!n.value){if(typeof n.value=="string")s.$_ptooltipValue=n.value,s.$_ptooltipDisabled=!1,s.$_ptooltipEscape=!0,s.$_ptooltipClass=null,s.$_ptooltipIdAttr=s.$_ptooltipIdAttr||G("pv_id")+"_tooltip",s.$_ptooltipShowDelay=0,s.$_ptooltipHideDelay=0,s.$_ptooltipAutoHide=!0,this.bindEvents(s,n);else if(B(n.value)==="object"&&n.value)if(fe(n.value.value)||n.value.value.trim()===""){this.unbindEvents(s,n);return}else s.$_ptooltipValue=n.value.value,s.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,s.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,s.$_ptooltipClass=n.value.class||"",s.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,s.$_ptooltipIdAttr=n.value.id||s.$_ptooltipIdAttr||G("pv_id")+"_tooltip",s.$_ptooltipShowDelay=n.value.showDelay||0,s.$_ptooltipHideDelay=n.value.hideDelay||0,s.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0,this.bindEvents(s,n)}},unmounted:function(e,n){var s=this.getTarget(e);this.hide(e,0),this.remove(s),this.unbindEvents(s,n),s.$_ptooltipScrollHandler&&(s.$_ptooltipScrollHandler.destroy(),s.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,n){var s=this,r=e.$_ptooltipModifiers;r.focus?(e.$_ptooltipFocusEvent=function(a){return s.onFocus(a,n)},e.$_ptooltipBlurEvent=this.onBlur.bind(this),e.addEventListener("focus",e.$_ptooltipFocusEvent),e.addEventListener("blur",e.$_ptooltipBlurEvent)):(e.$_ptooltipMouseEnterEvent=function(a){return s.onMouseEnter(a,n)},e.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),e.$_ptooltipClickEvent=this.onClick.bind(this),e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.addEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.addEventListener("click",e.$_ptooltipClickEvent)),e.$_ptooltipKeydownEvent=this.onKeydown.bind(this),e.addEventListener("keydown",e.$_ptooltipKeydownEvent),e.$_pWindowResizeEvent=this.onWindowResize.bind(this,e)},unbindEvents:function(e){var n=e.$_ptooltipModifiers;n.focus?(e.removeEventListener("focus",e.$_ptooltipFocusEvent),e.$_ptooltipFocusEvent=null,e.removeEventListener("blur",e.$_ptooltipBlurEvent),e.$_ptooltipBlurEvent=null):(e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.$_ptooltipMouseEnterEvent=null,e.removeEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.$_ptooltipMouseLeaveEvent=null,e.removeEventListener("click",e.$_ptooltipClickEvent),e.$_ptooltipClickEvent=null),e.removeEventListener("keydown",e.$_ptooltipKeydownEvent),window.removeEventListener("resize",e.$_pWindowResizeEvent),e.$_ptooltipId&&this.remove(e)},bindScrollListener:function(e){var n=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new ot(e,function(){n.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,n){var s=e.currentTarget,r=s.$_ptooltipShowDelay;this.show(s,n,r)},onMouseLeave:function(e){var n=e.currentTarget,s=n.$_ptooltipHideDelay,r=n.$_ptooltipAutoHide;if(r)this.hide(n,s);else{var a=A(e.target,"data-pc-name")==="tooltip"||A(e.target,"data-pc-section")==="arrow"||A(e.target,"data-pc-section")==="text"||A(e.relatedTarget,"data-pc-name")==="tooltip"||A(e.relatedTarget,"data-pc-section")==="arrow"||A(e.relatedTarget,"data-pc-section")==="text";!a&&this.hide(n,s)}},onFocus:function(e,n){var s=e.currentTarget,r=s.$_ptooltipShowDelay;this.show(s,n,r)},onBlur:function(e){var n=e.currentTarget,s=n.$_ptooltipHideDelay;this.hide(n,s)},onClick:function(e){var n=e.currentTarget,s=n.$_ptooltipHideDelay;this.hide(n,s)},onKeydown:function(e){var n=e.currentTarget,s=n.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,s)},onWindowResize:function(e){Ze()||this.hide(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},tooltipActions:function(e,n){if(!(e.$_ptooltipDisabled||!Ue(e))){var s=this.create(e,n);this.align(e),!this.isUnstyled()&&qe(s,250);var r=this;window.addEventListener("resize",e.$_pWindowResizeEvent),s.addEventListener("mouseleave",function a(){r.hide(e),s.removeEventListener("mouseleave",a),e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),setTimeout(function(){return e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(e),z.set("tooltip",s,e.$_ptooltipZIndex)}},show:function(e,n,s){var r=this;s!==void 0?this.timer=setTimeout(function(){return r.tooltipActions(e,n)},s):this.tooltipActions(e,n)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},hide:function(e,n){var s=this;clearTimeout(this.timer),n!==void 0?setTimeout(function(){return s.tooltipRemoval(e)},n):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},getArrowElement:function(e){var n=this.getTooltipElement(e);return ge(n,'[data-pc-section="arrow"]')},create:function(e){var n=e.$_ptooltipModifiers,s=ne("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:n})}),r=ne("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:n})});e.$_ptooltipEscape?(r.innerHTML="",r.appendChild(document.createTextNode(e.$_ptooltipValue))):r.innerHTML=e.$_ptooltipValue;var a=ne("div",be(be({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:n})),s,r);return document.body.appendChild(a),e.$_ptooltipId=a.id,this.$el=a,a},remove:function(e){if(e){var n=this.getTooltipElement(e);n&&n.parentElement&&(z.clear(n),document.body.removeChild(n)),e.$_ptooltipId=null}},align:function(e){var n=e.$_ptooltipModifiers;n.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):n.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):n.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var n=e.getBoundingClientRect(),s=n.left+Ne(),r=n.top+We();return{left:s,top:r}},alignRight:function(e){this.preAlign(e,"right");var n=this.getTooltipElement(e),s=this.getArrowElement(e),r=this.getHostOffset(e),a=r.left+S(e),c=r.top+(D(e)-D(n))/2;n.style.left=a+"px",n.style.top=c+"px",s.style.top="50%",s.style.right=null,s.style.bottom=null,s.style.left="0"},alignLeft:function(e){this.preAlign(e,"left");var n=this.getTooltipElement(e),s=this.getArrowElement(e),r=this.getHostOffset(e),a=r.left-S(n),c=r.top+(D(e)-D(n))/2;n.style.left=a+"px",n.style.top=c+"px",s.style.top="50%",s.style.right="0",s.style.bottom=null,s.style.left=null},alignTop:function(e){this.preAlign(e,"top");var n=this.getTooltipElement(e),s=this.getArrowElement(e),r=S(n),a=S(e),c=J(),f=c.width,u=this.getHostOffset(e),d=u.left+(a-r)/2,m=u.top-D(n);d<0?d=0:d+r>f&&(d=Math.floor(u.left+a-r)),n.style.left=d+"px",n.style.top=m+"px";var v=u.left-this.getHostOffset(n).left+a/2;s.style.top=null,s.style.right=null,s.style.bottom="0",s.style.left=v+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var n=this.getTooltipElement(e),s=this.getArrowElement(e),r=S(n),a=S(e),c=J(),f=c.width,u=this.getHostOffset(e),d=u.left+(a-r)/2,m=u.top+D(e);d<0?d=0:d+r>f&&(d=Math.floor(u.left+a-r)),n.style.left=d+"px",n.style.top=m+"px";var v=u.left-this.getHostOffset(n).left+a/2;s.style.top="0",s.style.right=null,s.style.bottom=null,s.style.left=v+"px"},preAlign:function(e,n){var s=this.getTooltipElement(e);s.style.left="-999px",s.style.top="-999px",Fe(s,"p-tooltip-".concat(s.$_ptooltipPosition)),!this.isUnstyled()&&de(s,"p-tooltip-".concat(n)),s.$_ptooltipPosition=n,s.setAttribute("data-p-position",n)},isOutOfBounds:function(e){var n=this.getTooltipElement(e),s=n.getBoundingClientRect(),r=s.top,a=s.left,c=S(n),f=D(n),u=J();return a+c>u.width||a<0||r<0||r+f>u.height},getTarget:function(e){var n;return Ke(e,"p-inputwrapper")&&(n=ge(e,"input"))!==null&&n!==void 0?n:e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&B(e.arg)==="object"?Object.entries(e.arg).reduce(function(n,s){var r=gt(s,2),a=r[0],c=r[1];return(a==="event"||a==="position")&&(n[c]=!0),n},{}):{}}}}),kt={name:"Dropdown",extends:at,mounted:function(){console.warn("Deprecated since v4. Use Select component instead.")}};function ie(){Xe({variableName:$e("scrollbar.width").name})}function re(){Ye({variableName:$e("scrollbar.width").name})}var wt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`,_t={mask:function(e){var n=e.position,s=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:s?"auto":"none"}},root:{pointerEvents:"auto"}},$t={mask:function(e){var n=e.instance,s=e.props,r=["left","right","top","bottom"],a=r.find(function(c){return c===s.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":s.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},a?"p-drawer-".concat(a):""]},root:function(e){var n=e.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ct=T.extend({name:"drawer",style:wt,classes:$t,inlineStyles:_t}),Lt={name:"BaseDrawer",extends:Z,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Ct,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function oe(t,e,n){return(e=Et(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Et(t){var e=St(t,"string");return K(e)=="symbol"?e:e+""}function St(t,e){if(K(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(K(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Be={name:"Drawer",extends:Lt,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&z.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&z.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&de(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&z.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.header&&e(this.headerContainer);n||(n=this.$slots.default&&e(this.container),n||(n=this.$slots.footer&&e(this.footerContainer),n||(n=this.closeButton))),n&&se(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ie()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&re()},onKeydown:function(e){e.code==="Escape"&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return O(oe(oe(oe({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:ze},components:{Button:_,Portal:Ce,TimesIcon:ce}},Dt=["data-p"],zt=["aria-modal","data-p"];function Mt(t,e,n,s,r,a){var c=H("Button"),f=H("Portal"),u=ue("focustrap");return p(),C(f,null,{default:k(function(){return[r.containerVisible?(p(),h("div",b({key:0,ref:a.maskRef,onMousedown:e[0]||(e[0]=function(){return a.onMaskClick&&a.onMaskClick.apply(a,arguments)}),class:t.cx("mask"),style:t.sx("mask",!0,{position:t.position,modal:t.modal}),"data-p":a.dataP},t.ptm("mask")),[g(j,b({name:"p-drawer",onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:k(function(){return[t.visible?M((p(),h("div",b({key:0,ref:a.containerRef,class:t.cx("root"),style:t.sx("root"),role:"complementary","aria-modal":t.modal,"data-p":a.dataP},t.ptmi("root")),[t.$slots.container?$(t.$slots,"container",{key:0,closeCallback:a.hide}):(p(),h(R,{key:1},[o("div",b({ref:a.headerContainerRef,class:t.cx("header")},t.ptm("header")),[$(t.$slots,"header",{class:E(t.cx("title"))},function(){return[t.header?(p(),h("div",b({key:0,class:t.cx("title")},t.ptm("title")),l(t.header),17)):w("",!0)]}),t.showCloseIcon?$(t.$slots,"closebutton",{key:0,closeCallback:a.hide},function(){return[g(c,b({ref:a.closeButtonRef,type:"button",class:t.cx("pcCloseButton"),"aria-label":a.closeAriaLabel,unstyled:t.unstyled,onClick:a.hide},t.closeButtonProps,{pt:t.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:k(function(d){return[$(t.$slots,"closeicon",{},function(){return[(p(),C(P(t.closeIcon?"span":"TimesIcon"),b({class:[t.closeIcon,d.class]},t.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):w("",!0)],16),o("div",b({ref:a.contentRef,class:t.cx("content")},t.ptm("content")),[$(t.$slots,"default")],16),t.$slots.footer?(p(),h("div",b({key:0,ref:a.footerContainerRef,class:t.cx("footer")},t.ptm("footer")),[$(t.$slots,"footer")],16)):w("",!0)],64))],16,zt)),[[u]]):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Dt)):w("",!0)]}),_:3})}Be.render=Mt;var Bt={name:"Sidebar",extends:Be,mounted:function(){console.warn("Deprecated since v4. Use Drawer component instead.")}};const It={class:"sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between"},Pt={class:"hidden md:flex gap-3 items-center"},Tt={class:"flex items-center gap-2"},At={key:0,class:"flex items-center gap-2"},Ot={class:"flex items-center"},jt={class:"md:hidden"},Rt={class:"flex flex-col gap-4 p-4"},Ht={class:"border-t pt-4"},Vt={__name:"LandingNav",setup(t){Le();const{t:e,locale:n}=L(),s=y(!1),r=y(!1),a=()=>{const d=!r.value;r.value=d,d?(document.documentElement.classList.add("app-dark"),localStorage.setItem("app-dark-mode","true")):(document.documentElement.classList.remove("app-dark"),localStorage.setItem("app-dark-mode","false"))},c=y([{name:"English",code:"en"},{name:"Deutsch",code:"de"}]),f=y(),u=d=>{var m;(m=document.getElementById(d))==null||m.scrollIntoView({behavior:"smooth"}),s.value=!1};return le(()=>{const d=localStorage.getItem("app-dark-mode");d!==null?r.value=d==="true":r.value=window.matchMedia("(prefers-color-scheme: dark)").matches,r.value&&document.documentElement.classList.add("app-dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",x=>{localStorage.getItem("app-dark-mode")===null&&(r.value=x.matches,x.matches?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark"))});const m=navigator.language.split("-")[0],v=c.value.find(x=>x.code===m)||c.value[0];f.value=v,n.value=v.code}),Q(f,d=>{d&&(n.value=d.code)}),(d,m)=>{const v=Me;return p(),h("div",It,[m[11]||(m[11]=o("div",{class:"flex items-center"},[o("i",{class:"pi pi-chart-line text-primary text-3xl mr-2"}),o("span",{class:"text-gray-900 dark:text-gray-100 font-bold text-2xl"},"Clear Cut Markets")],-1)),o("div",Pt,[g(i(_),{label:i(e)("nav.features"),class:"p-button-text",onClick:m[0]||(m[0]=x=>u("features"))},null,8,["label"]),g(i(_),{label:i(e)("nav.pricing"),class:"p-button-text",onClick:m[1]||(m[1]=x=>u("pricing"))},null,8,["label"]),g(i(_),{label:i(e)("nav.login"),class:"p-button-outlined",onClick:m[2]||(m[2]=x=>d.$router.push("/auth/login"))},null,8,["label"])]),o("div",Tt,[g(i(kt),{modelValue:f.value,"onUpdate:modelValue":m[3]||(m[3]=x=>f.value=x),options:c.value,optionLabel:"name",class:"p-button-text p-button-sm w-auto"},{value:k(x=>[x.value?(p(),h("div",At,[m[9]||(m[9]=o("i",{class:"pi pi-globe"},null,-1)),o("div",null,l(x.value.code.toUpperCase()),1)])):w("",!0)]),option:k(x=>[o("div",Ot,[o("div",null,l(x.option.name),1)])]),_:1},8,["modelValue","options"]),M(g(i(_),{icon:r.value?"pi pi-sun":"pi pi-moon",class:"p-button-rounded p-button-text",onClick:a},null,8,["icon"]),[[v,r.value?"Light Mode":"Dark Mode",void 0,{bottom:!0}]]),o("div",jt,[g(i(_),{icon:"pi pi-bars",class:"p-button-text",onClick:m[4]||(m[4]=x=>s.value=!0)})])]),g(i(Bt),{visible:s.value,"onUpdate:visible":m[8]||(m[8]=x=>s.value=x),position:"right"},{header:k(()=>m[10]||(m[10]=[o("h3",{class:"font-bold"},"Menu",-1)])),default:k(()=>[o("div",Rt,[g(i(_),{label:i(e)("nav.features"),class:"p-button-text",onClick:m[5]||(m[5]=x=>u("features"))},null,8,["label"]),g(i(_),{label:i(e)("nav.pricing"),class:"p-button-text",onClick:m[6]||(m[6]=x=>u("pricing"))},null,8,["label"]),o("div",Ht,[g(i(_),{label:i(e)("nav.login"),class:"p-button-outlined w-full",onClick:m[7]||(m[7]=x=>d.$router.push("/auth/login"))},null,8,["label"])])])]),_:1},8,["visible"])])}}};var Kt=`
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
`,Ft={root:function(e){var n=e.props;return["p-message p-component p-message-"+n.severity,{"p-message-outlined":n.variant==="outlined","p-message-simple":n.variant==="simple","p-message-sm":n.size==="small","p-message-lg":n.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Nt=T.extend({name:"message",style:Kt,classes:Ft}),Wt={name:"BaseMessage",extends:Z,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Nt,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function ve(t,e,n){return(e=Ut(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ut(t){var e=qt(t,"string");return F(e)=="symbol"?e:e+""}function qt(t,e){if(F(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(F(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ie={name:"Message",extends:Wt,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit("life-end")},this.life)},methods:{close:function(e){this.visible=!1,this.$emit("close",e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return O(ve(ve({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:Ee},components:{TimesIcon:ce}};function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function xe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(s){Zt(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Zt(t,e,n){return(e=Yt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yt(t){var e=Xt(t,"string");return N(e)=="symbol"?e:e+""}function Xt(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(N(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Gt=["data-p"],Jt=["data-p"],Qt=["data-p"],en=["aria-label","data-p"],tn=["data-p"];function nn(t,e,n,s,r,a){var c=H("TimesIcon"),f=ue("ripple");return p(),C(j,b({name:"p-message",appear:""},t.ptmi("transition")),{default:k(function(){return[M(o("div",b({class:t.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":a.dataP},t.ptm("root")),[t.$slots.container?$(t.$slots,"container",{key:0,closeCallback:a.close}):(p(),h("div",b({key:1,class:t.cx("content"),"data-p":a.dataP},t.ptm("content")),[$(t.$slots,"icon",{class:E(t.cx("icon"))},function(){return[(p(),C(P(t.icon?"span":null),b({class:[t.cx("icon"),t.icon],"data-p":a.dataP},t.ptm("icon")),null,16,["class","data-p"]))]}),t.$slots.default?(p(),h("div",b({key:0,class:t.cx("text"),"data-p":a.dataP},t.ptm("text")),[$(t.$slots,"default")],16,Qt)):w("",!0),t.closable?M((p(),h("button",b({key:1,class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:e[0]||(e[0]=function(u){return a.close(u)}),"data-p":a.dataP},xe(xe({},t.closeButtonProps),t.ptm("closeButton"))),[$(t.$slots,"closeicon",{},function(){return[t.closeIcon?(p(),h("i",b({key:0,class:[t.cx("closeIcon"),t.closeIcon],"data-p":a.dataP},t.ptm("closeIcon")),null,16,tn)):(p(),C(c,b({key:1,class:[t.cx("closeIcon"),t.closeIcon],"data-p":a.dataP},t.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,en)),[[f]]):w("",!0)],16,Jt))],16,Gt),[[Ge,r.visible]])]}),_:3},16)}Ie.render=nn;var on=`
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
`,sn={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},an=T.extend({name:"chip",style:on,classes:sn}),rn={name:"BaseChip",extends:Z,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:an,provide:function(){return{$pcChip:this,$parentInstance:this}}},me={name:"Chip",extends:rn,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},computed:{dataP:function(){return O({removable:this.removable})}},components:{TimesCircleIcon:Je}},ln=["aria-label","data-p"],dn=["src"];function cn(t,e,n,s,r,a){return r.visible?(p(),h("div",b({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root"),{"data-p":a.dataP}),[$(t.$slots,"default",{},function(){return[t.image?(p(),h("img",b({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,dn)):t.$slots.icon?(p(),C(P(t.$slots.icon),b({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(p(),h("span",b({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):w("",!0),t.label!==null?(p(),h("div",b({key:3,class:t.cx("label")},t.ptm("label")),l(t.label),17)):w("",!0)]}),t.removable?$(t.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(p(),C(P(t.removeIcon?"span":"TimesCircleIcon"),b({class:[t.cx("removeIcon"),t.removeIcon],onClick:a.close,onKeydown:a.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):w("",!0)],16,ln)):w("",!0)}me.render=cn;const un={id:"hero-section",class:"min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"},pn={class:"text-center"},mn={class:"mb-4 animate-fade-in-down animation-delay-0"},gn={class:"text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200"},fn={class:"flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300"},hn={class:"flex-1"},bn={key:0,class:"mt-3 animate-fade-in"},vn={class:"mt-6 animate-fade-in-up animation-delay-500"},yn={class:"flex justify-center items-center gap-4 flex-wrap"},xn={class:"text-center px-6"},kn={class:"text-4xl font-bold text-primary mb-1"},wn={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},_n={class:"text-center px-6"},$n={class:"text-4xl font-bold text-primary mb-1"},Cn={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},Ln={class:"text-center px-6"},En={class:"text-4xl font-bold text-primary mb-1"},Sn={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},Dn={class:"text-center px-6"},zn={class:"text-4xl font-bold text-primary mb-1"},Mn={class:"text-gray-600 dark:text-gray-400 text-sm m-0"},Bn={__name:"LandingHero",props:{animatedWaitlist:{type:Number,default:0},animatedSaved:{type:Number,default:0},animatedModules:{type:Number,default:0},animatedSources:{type:Number,default:0}},setup(t){const{t:e}=L(),n=y(""),s=y(!1),r=y(""),a=y("success"),c=y(!1),f=async()=>{if(!n.value||!n.value.includes("@")){c.value=!0,r.value="Please enter a valid email address",a.value="error",setTimeout(()=>{c.value=!1},500);return}s.value=!0,setTimeout(()=>{r.value="Thanks for joining! We'll be in touch soon.",a.value="success",n.value="",s.value=!1,setTimeout(()=>{r.value=""},5e3)},1e3)};return(u,d)=>(p(),h("div",un,[o("div",pn,[o("div",mn,[g(i(me),{label:"🚀 Launching Soon",class:"px-3 py-2"})]),d[4]||(d[4]=o("h1",{class:"text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in-down animation-delay-100"},[V(" Smarter Insights on "),o("span",{class:"text-gradient"},"What Matters Most")],-1)),o("p",gn,l(i(e)("hero.subtitle")),1),o("div",fn,[o("div",hn,[g(i(rt),{iconPosition:"left",class:"w-full"},{default:k(()=>[g(i(it),{class:"pi pi-envelope text-gray-500"}),g(i(ae),{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=m=>n.value=m),placeholder:i(e)("hero.form.placeholder"),onKeyup:Qe(f,["enter"]),class:E(["w-full",{"shake-animation":c.value}])},null,8,["modelValue","placeholder","class"])]),_:1})]),g(i(_),{label:i(e)("hero.form.button"),class:"p-button-primary p-button-raised",onClick:f,loading:s.value},null,8,["label","loading"])]),g(j,{name:"fade"},{default:k(()=>[r.value?(p(),h("div",bn,[g(i(Ie),{severity:a.value,closable:!1},{default:k(()=>[V(l(r.value),1)]),_:1},8,["severity"])])):w("",!0)]),_:1}),o("div",vn,[o("div",yn,[o("div",xn,[o("h3",kn,l(t.animatedWaitlist)+"+",1),o("p",wn,l(i(e)("hero.stats.waitlist")),1)]),d[1]||(d[1]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",_n,[o("h3",$n,"$"+l(t.animatedSaved)+"k",1),o("p",Cn,l(i(e)("hero.stats.saved")),1)]),d[2]||(d[2]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",Ln,[o("h3",En,l(t.animatedModules),1),o("p",Sn,l(i(e)("hero.stats.modules")),1)]),d[3]||(d[3]=o("div",{class:"w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"},null,-1)),o("div",Dn,[o("h3",zn,l(t.animatedSources)+"+",1),o("p",Mn,l(i(e)("hero.stats.sources")),1)])])])])]))}},In=Y(Bn,[["__scopeId","data-v-963ee27a"]]);var Pe={name:"WindowMaximizeIcon",extends:Se};function Pn(t,e,n,s,r,a){return p(),h("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}Pe.render=Pn;var Te={name:"WindowMinimizeIcon",extends:Se};function Tn(t,e,n,s,r,a){return p(),h("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}Te.render=Tn;var An=`
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
`,On={mask:function(e){var n=e.position,s=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:s?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},jn={mask:function(e){var n=e.props,s=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],r=s.find(function(a){return a===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},r?"p-dialog-".concat(r):""]},root:function(e){var n=e.props,s=e.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&s.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},Rn=T.extend({name:"dialog",style:An,classes:jn,inlineStyles:On}),Hn={name:"BaseDialog",extends:Z,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:Rn,provide:function(){return{$pcDialog:this,$parentInstance:this}}},ee={name:"Dialog",extends:Hn,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var e=this;return{dialogRef:X(function(){return e._instance})}},data:function(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&z.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&z.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&de(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),se(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&z.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(e){this.maskMouseDownTarget=e.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var e=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.footer&&e(this.footerContainer);n||(n=this.$slots.header&&e(this.headerContainer),n||(n=this.$slots.default&&e(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&se(n,{focusVisible:!0})},maximize:function(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?ie():re())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&ie()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&re()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},maximizableRef:function(e){this.maximizableButton=e?e.$el:void 0},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",tt(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var s in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(s,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[s],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(e){e.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&et(document.body,{"user-select":"none"}),this.$emit("dragstart",e))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var e=this;this.documentDragListener=function(n){if(e.dragging){var s=S(e.container),r=D(e.container),a=n.pageX-e.lastPageX,c=n.pageY-e.lastPageY,f=e.container.getBoundingClientRect(),u=f.left+a,d=f.top+c,m=J(),v=getComputedStyle(e.container),x=parseFloat(v.marginLeft),I=parseFloat(v.marginTop);e.container.style.position="fixed",e.keepInViewport?(u>=e.minX&&u+s<m.width&&(e.lastPageX=n.pageX,e.container.style.left=u-x+"px"),d>=e.minY&&d+r<m.height&&(e.lastPageY=n.pageY,e.container.style.top=d-I+"px")):(e.lastPageX=n.pageX,e.container.style.left=u-x+"px",e.lastPageY=n.pageY,e.container.style.top=d-I+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var e=this;this.documentDragEndListener=function(n){e.dragging&&(e.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!e.isUnstyled&&(document.body.style["user-select"]=""),e.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.$id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return O({maximized:this.maximized,modal:this.modal})}},directives:{ripple:Ee,focustrap:ze},components:{Button:_,Portal:Ce,WindowMinimizeIcon:Te,WindowMaximizeIcon:Pe,TimesIcon:ce}};function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(t)}function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function we(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(n),!0).forEach(function(s){Vn(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Vn(t,e,n){return(e=Kn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kn(t){var e=Fn(t,"string");return W(e)=="symbol"?e:e+""}function Fn(t,e){if(W(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(W(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Nn=["data-p"],Wn=["aria-labelledby","aria-modal","data-p"],Un=["id"],qn=["data-p"];function Zn(t,e,n,s,r,a){var c=H("Button"),f=H("Portal"),u=ue("focustrap");return p(),C(f,{appendTo:t.appendTo},{default:k(function(){return[r.containerVisible?(p(),h("div",b({key:0,ref:a.maskRef,class:t.cx("mask"),style:t.sx("mask",!0,{position:t.position,modal:t.modal}),onMousedown:e[1]||(e[1]=function(){return a.onMaskMouseDown&&a.onMaskMouseDown.apply(a,arguments)}),onMouseup:e[2]||(e[2]=function(){return a.onMaskMouseUp&&a.onMaskMouseUp.apply(a,arguments)}),"data-p":a.dataP},t.ptm("mask")),[g(j,b({name:"p-dialog",onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:k(function(){return[t.visible?M((p(),h("div",b({key:0,ref:a.containerRef,class:t.cx("root"),style:t.sx("root"),role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":t.modal,"data-p":a.dataP},t.ptmi("root")),[t.$slots.container?$(t.$slots,"container",{key:0,closeCallback:a.close,maximizeCallback:function(m){return a.maximize(m)}}):(p(),h(R,{key:1},[t.showHeader?(p(),h("div",b({key:0,ref:a.headerContainerRef,class:t.cx("header"),onMousedown:e[0]||(e[0]=function(){return a.initDrag&&a.initDrag.apply(a,arguments)})},t.ptm("header")),[$(t.$slots,"header",{class:E(t.cx("title"))},function(){return[t.header?(p(),h("span",b({key:0,id:a.ariaLabelledById,class:t.cx("title")},t.ptm("title")),l(t.header),17,Un)):w("",!0)]}),o("div",b({class:t.cx("headerActions")},t.ptm("headerActions")),[t.maximizable?$(t.$slots,"maximizebutton",{key:0,maximized:r.maximized,maximizeCallback:function(m){return a.maximize(m)}},function(){return[g(c,b({ref:a.maximizableRef,autofocus:r.focusableMax,class:t.cx("pcMaximizeButton"),onClick:a.maximize,tabindex:t.maximizable?"0":"-1",unstyled:t.unstyled},t.maximizeButtonProps,{pt:t.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:k(function(d){return[$(t.$slots,"maximizeicon",{maximized:r.maximized},function(){return[(p(),C(P(a.maximizeIconComponent),b({class:[d.class,r.maximized?t.minimizeIcon:t.maximizeIcon]},t.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])]}):w("",!0),t.closable?$(t.$slots,"closebutton",{key:1,closeCallback:a.close},function(){return[g(c,b({ref:a.closeButtonRef,autofocus:r.focusableClose,class:t.cx("pcCloseButton"),onClick:a.close,"aria-label":a.closeAriaLabel,unstyled:t.unstyled},t.closeButtonProps,{pt:t.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:k(function(d){return[$(t.$slots,"closeicon",{},function(){return[(p(),C(P(t.closeIcon?"span":"TimesIcon"),b({class:[t.closeIcon,d.class]},t.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])]}):w("",!0)],16)],16)):w("",!0),o("div",b({ref:a.contentRef,class:[t.cx("content"),t.contentClass],style:t.contentStyle,"data-p":a.dataP},we(we({},t.contentProps),t.ptm("content"))),[$(t.$slots,"default")],16,qn),t.footer||t.$slots.footer?(p(),h("div",b({key:1,ref:a.footerContainerRef,class:t.cx("footer")},t.ptm("footer")),[$(t.$slots,"footer",{},function(){return[V(l(t.footer),1)]})],16)):w("",!0)],64))],16,Wn)),[[u,{disabled:!t.modal}]]):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Nn)):w("",!0)]}),_:3},8,["appendTo"])}ee.render=Zn;const Yn={class:"flex items-center gap-3"},Xn={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Gn={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},Jn={class:"flex flex-col gap-6 p-4"},Qn={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},eo={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},to={class:"text-sm text-gray-600 dark:text-gray-400"},no={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},oo={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},so={class:"text-sm text-gray-600 dark:text-gray-400"},ao={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},io={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},ro={class:"text-sm text-gray-600 dark:text-gray-400"},lo={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},co={class:"p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"},uo={class:"text-sm text-gray-600 dark:text-gray-400"},po={class:"text-xl font-bold text-green-500"},Ae={__name:"StockPreviewModal",props:{visible:{type:Boolean,default:!1},stockData:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const{t:n}=L(),s=t,r=y(s.visible);Q(()=>s.visible,f=>{r.value=f});const a=X(()=>({labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Stock Price",data:s.stockData.chart,fill:!0,borderColor:"#6366F1",tension:.4,backgroundColor:"rgba(99, 102, 241, 0.2)"}]})),c=y({maintainAspectRatio:!1,aspectRatio:2,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}},y:{ticks:{color:"#6B7280"},grid:{color:"#E5E7EB10"}}}});return(f,u)=>(p(),C(i(ee),{visible:r.value,"onUpdate:visible":u[0]||(u[0]=d=>r.value=d),modal:"",header:t.stockData.symbol,style:{width:"45rem"},dismissableMask:!0,onHide:u[1]||(u[1]=d=>f.$emit("close"))},{header:k(()=>[o("div",Yn,[u[2]||(u[2]=o("i",{class:"pi pi-chart-line text-2xl text-primary"},null,-1)),o("div",null,[o("h2",Xn,l(t.stockData.name)+" ("+l(t.stockData.symbol)+")",1),o("p",Gn,l(i(n)("stockModal.subtitle")),1)])])]),default:k(()=>[o("div",Jn,[o("div",null,[g(i(lt),{type:"line",data:a.value,options:c.value},null,8,["data","options"])]),o("div",Qn,[o("div",eo,[o("p",to,l(i(n)("stockModal.price")),1),o("p",no,"$"+l(t.stockData.price),1)]),o("div",oo,[o("p",so,l(i(n)("stockModal.market_cap")),1),o("p",ao,"$"+l(t.stockData.marketCap),1)]),o("div",io,[o("p",ro,l(i(n)("stockModal.pe_ratio")),1),o("p",lo,l(t.stockData.peRatio),1)]),o("div",co,[o("p",uo,l(i(n)("stockModal.sentiment")),1),o("p",po,l(t.stockData.sentiment)+"% "+l(i(n)("stockModal.bullish")),1)])])])]),_:1},8,["visible","header"]))}},mo={class:"flex items-center gap-3"},go={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},fo={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},ho={class:"p-4"},bo={class:"mb-6"},vo={class:"text-sm text-gray-500 dark:text-gray-400"},yo={class:"text-xl font-bold text-gray-900 dark:text-gray-100"},xo={class:"text-xs text-gray-500 dark:text-gray-400"},ko={class:"space-y-4"},wo={class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},_o={class:"text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"},$o={class:"font-semibold text-gray-800 dark:text-gray-200 mb-2"},Co={class:"bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-lg p-3"},Lo={class:"font-bold"},Eo={class:"text-sm"},So={__name:"NewsPreviewModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:e}){const{t:n}=L(),s=t,r=y(s.visible);return Q(()=>s.visible,a=>{r.value=a}),(a,c)=>(p(),C(i(ee),{visible:r.value,"onUpdate:visible":c[0]||(c[0]=f=>r.value=f),modal:"",header:i(n)("newsModal.title"),style:{width:"40rem"},dismissableMask:!0,onHide:c[1]||(c[1]=f=>a.$emit("close"))},{header:k(()=>[o("div",mo,[c[2]||(c[2]=o("i",{class:"pi pi-globe text-2xl text-primary"},null,-1)),o("div",null,[o("h2",go,l(i(n)("newsModal.title")),1),o("p",fo,l(i(n)("newsModal.subtitle")),1)])])]),default:k(()=>[o("div",ho,[o("div",bo,[o("p",vo,l(i(n)("newsModal.source_article")),1),o("h3",yo,'"'+l(i(n)("usp.news_title"))+'"',1),o("p",xo,l(i(n)("newsModal.source_name")),1)]),o("div",ko,[o("div",null,[o("p",wo,l(i(n)("newsModal.summary")),1),o("p",_o,l(i(n)("newsModal.summary_text")),1)]),o("div",null,[o("p",$o,l(i(n)("newsModal.sentiment_analysis")),1),o("div",Co,[o("p",Lo,l(i(n)("newsModal.sentiment_title")),1),o("p",Eo,l(i(n)("newsModal.sentiment_text")),1)])])])])]),_:1},8,["visible","header"]))}},Do={class:"px-4 py-16 md:px-6 lg:px-8"},zo={class:"text-center mb-12"},Mo={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},Bo={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},Io={class:"max-w-5xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 fade-up stagger-2"},Po={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"},To={class:"flex flex-col items-center text-center"},Ao={class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},Oo={class:"text-lg font-bold text-gray-900 dark:text-gray-100"},jo={class:"text-sm text-gray-600 dark:text-gray-400 mt-2"},Ro={class:"flex flex-col items-center text-center"},Ho={class:"text-xl font-semibold text-gray-800 dark:text-gray-200"},Vo={class:"flex justify-center gap-4 mt-4 w-full h-full"},Ko={class:"flex items-center justify-center gap-2 mt-1"},Fo={class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},No={class:"flex items-center justify-center gap-2 mt-1"},Wo={class:"text-base font-semibold text-red-500/90 dark:text-red-400/90"},Uo={class:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"},qo={class:"bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 rounded-lg p-4 flex items-center gap-4"},Zo={class:"font-bold"},Yo={__name:"LandingUsp",setup(t){const{t:e}=L(),n=y(!1),s=y(!1),r=y({}),a={TSLA:{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",marketCap:"758B",peRatio:"71.2",sentiment:85,chart:[220,225,230,228,235,238]},NVDA:{symbol:"NVDA",name:"NVIDIA Corp.",price:"471.16",marketCap:"1.16T",peRatio:"61.5",sentiment:78,chart:[450,455,465,460,472,471]}},c=u=>{r.value=a[u],n.value=!0},f=()=>{s.value=!0};return(u,d)=>(p(),h("div",null,[o("div",Do,[o("div",zo,[o("h2",Mo,l(i(e)("usp.title")),1),o("p",Bo,l(i(e)("usp.subtitle")),1)]),o("div",Io,[o("div",Po,[o("div",To,[d[4]||(d[4]=o("i",{class:"pi pi-globe text-4xl text-blue-500 mb-4"},null,-1)),o("p",Ao,l(i(e)("usp.market_event")),1),o("div",{onClick:f,class:"mt-4 p-4 w-full h-full border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[o("p",Oo,'"'+l(i(e)("usp.news_title"))+'"',1),o("p",jo,l(i(e)("usp.news_source")),1)])]),o("div",Ro,[d[9]||(d[9]=o("i",{class:"pi pi-chart-pie text-4xl text-green-500 mb-4"},null,-1)),o("p",Ho,l(i(e)("usp.impact_title")),1),o("div",Vo,[o("div",{onClick:d[0]||(d[0]=m=>c("TSLA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[d[6]||(d[6]=o("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"TSLA",-1)),o("div",Ko,[o("span",Fo,l(i(e)("usp.potential_decline")),1),d[5]||(d[5]=o("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"},null,-1))])]),o("div",{onClick:d[1]||(d[1]=m=>c("NVDA")),class:"p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"},[d[8]||(d[8]=o("p",{class:"text-lg font-bold text-gray-900 dark:text-gray-100"},"NVDA",-1)),o("div",No,[o("span",Wo,l(i(e)("usp.potential_decline")),1),d[7]||(d[7]=o("i",{class:"pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"},null,-1))])])])])]),o("div",Uo,[o("div",qo,[d[10]||(d[10]=o("i",{class:"pi pi-sparkles text-2xl"},null,-1)),o("div",null,[o("p",Zo,l(i(e)("usp.alert_title")),1),o("p",null,[V(l(i(e)("usp.alert_text"))+" ",1),o("button",{onClick:f,class:"font-semibold underline hover:text-violet-200"},l(i(e)("usp.alert_link")),1)])])])])])]),g(Ae,{visible:n.value,"stock-data":r.value,onClose:d[2]||(d[2]=m=>n.value=!1)},null,8,["visible","stock-data"]),g(So,{visible:s.value,onClose:d[3]||(d[3]=m=>s.value=!1)},null,8,["visible"])]))}};var Xo=`
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
`,Go={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Jo=T.extend({name:"tag",style:Xo,classes:Go}),Qo={name:"BaseTag",extends:Z,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Jo,provide:function(){return{$pcTag:this,$parentInstance:this}}};function U(t){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(t)}function es(t,e,n){return(e=ts(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ts(t){var e=ns(t,"string");return U(e)=="symbol"?e:e+""}function ns(t,e){if(U(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(U(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Oe={name:"Tag",extends:Qo,inheritAttrs:!1,computed:{dataP:function(){return O(es({rounded:this.rounded},this.severity,this.severity))}}},os=["data-p"];function ss(t,e,n,s,r,a){return p(),h("span",b({class:t.cx("root"),"data-p":a.dataP},t.ptmi("root")),[t.$slots.icon?(p(),C(P(t.$slots.icon),b({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(p(),h("span",b({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):w("",!0),t.value!=null||t.$slots.default?$(t.$slots,"default",{key:2},function(){return[o("span",b({class:t.cx("label")},t.ptm("label")),l(t.value),17)]}):w("",!0)],16,os)}Oe.render=ss;const as={class:"px-4 py-8 md:px-6 lg:px-8"},is={class:"text-center mb-6"},rs={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},ls={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},ds={class:"text-sm text-gray-500 dark:text-gray-500 mt-2 fade-up stagger-2"},cs={class:"max-w-7xl mx-auto py-8"},us={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},ps={class:"module-card group h-full bg-white dark:bg-gray-800 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 flex flex-col"},ms={class:"mb-4"},gs={class:"flex justify-between items-start"},fs={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},hs={class:"text-sm text-gray-600 dark:text-gray-400 m-0"},bs={class:"mb-4"},vs={class:"flex items-baseline mb-1"},ys={class:"text-4xl font-bold text-gray-900 dark:text-gray-100"},xs={class:"text-sm text-gray-500 dark:text-gray-400"},ks={class:"ml-2"},ws={class:"h-16 my-4 bg-gray-50 dark:bg-gray-700/50 rounded-md p-2 flex-shrink-0"},_s={viewBox:"0 0 100 40",preserveAspectRatio:"none",class:"w-full h-full"},$s=["points","stroke"],Cs=["d","fill"],Ls={class:"grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6 flex-shrink-0"},Es={class:"text-center"},Ss={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},Ds={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},zs={class:"text-center"},Ms={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},Bs={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},Is={class:"text-center"},Ps={class:"block text-xs text-gray-600 dark:text-gray-400 mb-1"},Ts={class:"block text-base font-semibold text-gray-900 dark:text-gray-100"},As={class:"mb-4 flex flex-col flex-grow"},Os={class:"flex items-center gap-2 mb-3"},js={class:"font-semibold text-gray-900 dark:text-gray-100"},Rs={class:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed"},Hs={class:"mt-auto bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"},Vs={class:"flex justify-between items-center mb-2"},Ks={class:"text-xs text-gray-500 dark:text-gray-400"},Fs={class:"text-xs font-bold text-gray-900 dark:text-gray-100"},Ns={class:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"},Ws={class:"flex justify-center gap-4 pt-2"},Us={class:"text-center mt-8"},qs={class:"text-gray-600 dark:text-gray-400 mt-3"},Zs={__name:"LandingModulesDemo",setup(t){const{t:e}=L();y(null);const n=y(!1),s=y({}),r=y([{symbol:"AAPL",name:"Apple Inc.",price:"195.89",change:2.5,changeAmount:"+$4.73",simpleChart:"0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5",volume:"52.3M",marketCap:"3.04T",peRatio:"32.1",sentiment:78,insightKey:"aapl_insight",chart:[180,185,182,188,192,195]},{symbol:"BTC",name:"Bitcoin",price:"43,250",change:-1.2,changeAmount:"-$525.50",simpleChart:"0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30",volume:"$24.8B",marketCap:"847B",peRatio:"N/A",sentiment:45,insightKey:"btc_insight",chart:[42e3,42500,41800,43e3,43500,43250]},{symbol:"TSLA",name:"Tesla Inc.",price:"238.45",change:3.8,changeAmount:"+$8.73",simpleChart:"0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2",volume:"118.2M",marketCap:"758B",peRatio:"71.2",sentiment:85,insightKey:"tsla_insight",chart:[220,225,230,228,235,238]}]),a=X(()=>r.value.map(u=>({...u,insight:e(`modulesDemo.cards.${u.insightKey}`)}))),c=u=>u>=70?"#22c55e":u>=30?"#f59e0b":"#ef4444",f=u=>{s.value=u,n.value=!0};return(u,d)=>{const m=Me;return p(),h("div",null,[o("div",as,[o("div",is,[o("h2",rs,l(i(e)("modulesDemo.title")),1),o("p",ls,l(i(e)("modulesDemo.subtitle")),1),o("p",ds,l(i(e)("modulesDemo.placeholder_text")),1)]),o("div",cs,[o("div",us,[(p(!0),h(R,null,pe(a.value,(v,x)=>(p(),h("div",{key:v.symbol,class:E(["p-4","fade-up",`stagger-${x+2}`])},[o("div",ps,[o("div",ms,[o("div",gs,[o("div",null,[o("h3",fs,l(v.symbol),1),o("p",hs,l(v.name),1)]),g(i(Oe),{severity:v.change>0?"success":"danger",class:"font-semibold"},{default:k(()=>[V(l(v.change>0?"+":"")+l(v.change)+"% ",1)]),_:2},1032,["severity"])])]),o("div",bs,[o("div",vs,[d[1]||(d[1]=o("span",{class:"text-xl text-gray-600 dark:text-gray-500 mr-1"},"$",-1)),o("span",ys,l(v.price),1)]),o("div",xs,[o("span",null,l(v.changeAmount),1),o("span",ks,l(i(e)("modulesDemo.cards.today")),1)])]),o("div",ws,[(p(),h("svg",_s,[d[2]||(d[2]=o("line",{x1:"0",y1:"20",x2:"100",y2:"20",stroke:"#f0f0f0","stroke-width":"1"},null,-1)),o("polyline",{points:v.simpleChart,fill:"none",stroke:v.change>0?"#22c55e":"#ef4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,$s),o("path",{d:`M ${v.simpleChart} L 100,40 L 0,40 Z`,fill:v.change>0?"#22c55e20":"#ef444420"},null,8,Cs)]))]),o("div",Ls,[o("div",Es,[o("span",Ss,l(i(e)("modulesDemo.cards.volume")),1),o("span",Ds,l(v.volume),1)]),o("div",zs,[o("span",Ms,l(i(e)("modulesDemo.cards.market_cap")),1),o("span",Bs,l(v.marketCap),1)]),o("div",Is,[o("span",Ps,l(i(e)("modulesDemo.cards.pe_ratio")),1),o("span",Ts,l(v.peRatio),1)])]),o("div",As,[o("div",Os,[d[3]||(d[3]=o("i",{class:"pi pi-sparkles text-primary"},null,-1)),o("span",js,l(i(e)("modulesDemo.cards.ai_analysis")),1)]),o("p",Rs,l(v.insight),1),o("div",Hs,[o("div",Vs,[o("span",Ks,l(i(e)("modulesDemo.cards.sentiment")),1),o("span",Fs,l(v.sentiment)+"% "+l(i(e)("modulesDemo.cards.bullish")),1)]),o("div",Ns,[o("div",{class:"h-full rounded-full transition-all duration-500",style:De({width:v.sentiment+"%",backgroundColor:c(v.sentiment)})},null,4)])])]),o("div",Ws,[M(g(i(_),{icon:"pi pi-bell",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[m,i(e)("tooltips.alerts")]]),M(g(i(_),{onClick:I=>f(v),icon:"pi pi-chart-line",class:"p-button-text p-button-sm p-button-rounded"},null,8,["onClick"]),[[m,i(e)("tooltips.details")]]),M(g(i(_),{icon:"pi pi-cog",class:"p-button-text p-button-sm p-button-rounded"},null,512),[[m,i(e)("tooltips.settings")]])])])],2))),128))]),o("div",Us,[g(i(_),{label:i(e)("modulesDemo.dashboard_button"),class:"p-button-outlined p-button-lg",disabled:""},null,8,["label"]),o("p",qs,l(i(e)("modulesDemo.waitlist_prompt")),1)])])]),g(Ae,{visible:n.value,"stock-data":s.value,onClose:d[0]||(d[0]=v=>n.value=!1)},null,8,["visible","stock-data"])])}}},Ys=Y(Zs,[["__scopeId","data-v-a9feb2c3"]]),Xs={id:"features",class:"px-4 py-8 md:px-6 lg:px-8"},Gs={class:"text-center text-gray-900 dark:text-gray-100 text-3xl font-bold mb-6 fade-up"},Js={class:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"},Qs=["onMouseenter"],ea={class:"mb-4"},ta={class:"text-gray-900 dark:text-gray-100 text-xl mb-3 font-semibold"},na={class:"text-gray-600 dark:text-gray-400 leading-relaxed"},oa={__name:"LandingFeatures",setup(t){const{t:e}=L(),n=y(null),s=y([{icon:"pi-filter",key:"tracking"},{icon:"pi-sparkles",key:"insights"},{icon:"pi-sitemap",key:"alerts"},{icon:"pi-shield",key:"security"},{icon:"pi-mobile",key:"access"},{icon:"pi-dollar",key:"power"}]),r=X(()=>s.value.map(a=>({...a,title:e(`features.cards.${a.key}.title`),description:e(`features.cards.${a.key}.description`)})));return(a,c)=>(p(),h("div",Xs,[o("h2",Gs,l(i(e)("features.title")),1),o("div",Js,[(p(!0),h(R,null,pe(r.value,(f,u)=>(p(),h("div",{key:u,class:E(["text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700","fade-up",`stagger-${u%3+1}`]),onMouseenter:d=>n.value=u,onMouseleave:c[0]||(c[0]=d=>n.value=null)},[o("div",ea,[o("i",{class:E([`pi ${f.icon} text-5xl transition-colors duration-300`,n.value===u?"text-primary":"text-violet-400"])},null,2)]),o("h3",ta,l(f.title),1),o("p",na,l(f.description),1)],42,Qs))),128))])]))}},sa={class:"px-4 py-16 md:px-6 lg:px-8"},aa={class:"text-center mb-12"},ia={class:"text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up"},ra={class:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1"},la={class:"max-w-4xl mx-auto"},da={class:"p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 fade-up stagger-1"},ca={class:"space-y-8"},ua={class:"flex items-start gap-4"},pa={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},ma={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},ga={class:"flex items-start gap-4"},fa={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},ha={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},ba={class:"flex items-start gap-4"},va={class:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight"},ya={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},xa={__name:"LandingUseCases",setup(t){const{t:e}=L();return(n,s)=>(p(),h("div",sa,[o("div",aa,[o("h2",ia,l(i(e)("useCases.title")),1),o("p",ra,l(i(e)("useCases.subtitle")),1)]),o("div",la,[o("div",da,[o("ul",ca,[o("li",ua,[s[0]||(s[0]=o("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[o("i",{class:"pi pi-filter-fill text-2xl text-violet-600 dark:text-violet-400"})],-1)),o("div",null,[o("h3",pa,l(i(e)("useCases.focused_title")),1),o("p",ma,l(i(e)("useCases.focused_text")),1)])]),o("li",ga,[s[1]||(s[1]=o("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[o("i",{class:"pi pi-sitemap text-2xl text-violet-600 dark:text-violet-400"})],-1)),o("div",null,[o("h3",fa,l(i(e)("useCases.cross_asset_title")),1),o("p",ha,l(i(e)("useCases.cross_asset_text")),1)])]),o("li",ba,[s[2]||(s[2]=o("div",{class:"bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0"},[o("i",{class:"pi pi-clock text-2xl text-violet-600 dark:text-violet-400"})],-1)),o("div",null,[o("h3",va,l(i(e)("useCases.time_strapped_title")),1),o("p",ya,l(i(e)("useCases.time_strapped_text")),1)])])])])])]))}};var ka=`
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
`,wa={root:function(e){var n=e.instance,s=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":s.autoResize,"p-textarea-sm p-inputfield-sm":s.size==="small","p-textarea-lg p-inputfield-lg":s.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},_a=T.extend({name:"textarea",style:ka,classes:wa}),$a={name:"BaseTextarea",extends:st,props:{autoResize:Boolean},style:_a,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function q(t){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(t)}function Ca(t,e,n){return(e=La(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function La(t){var e=Ea(t,"string");return q(e)=="symbol"?e:e+""}function Ea(t,e){if(q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(q(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var je={name:"Textarea",extends:$a,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return b(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return O(Ca({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Sa=["value","name","disabled","aria-invalid","data-p"];function Da(t,e,n,s,r,a){return p(),h("textarea",b({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":a.dataP,onInput:e[0]||(e[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,Sa)}je.render=Da;const za={class:"flex items-center gap-3"},Ma={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 m-0"},Ba={class:"text-sm text-gray-500 dark:text-gray-400 m-0"},Ia={class:"p-4"},Pa={class:"flex flex-col gap-4"},Ta={for:"name",class:"font-semibold text-gray-700 dark:text-gray-300"},Aa={for:"email",class:"font-semibold text-gray-700 dark:text-gray-300"},Oa={for:"message",class:"font-semibold text-gray-700 dark:text-gray-300"},ja={__name:"ContactSalesModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:e}){const{t:n}=L(),s=t,r=y(s.visible);return Q(()=>s.visible,a=>{r.value=a}),(a,c)=>(p(),C(i(ee),{visible:r.value,"onUpdate:visible":c[2]||(c[2]=f=>r.value=f),modal:"",header:i(n)("contactModal.title"),style:{width:"35rem"},dismissableMask:!0,onHide:c[3]||(c[3]=f=>a.$emit("close"))},{header:k(()=>[o("div",za,[c[4]||(c[4]=o("i",{class:"pi pi-envelope text-2xl text-primary"},null,-1)),o("div",null,[o("h2",Ma,l(i(n)("contactModal.title")),1),o("p",Ba,l(i(n)("contactModal.subtitle")),1)])])]),footer:k(()=>[g(i(_),{label:i(n)("contactModal.cancel_button"),text:"",severity:"secondary",onClick:c[0]||(c[0]=f=>a.$emit("close"))},null,8,["label"]),g(i(_),{label:i(n)("contactModal.send_button"),severity:"success",icon:"pi pi-send",onClick:c[1]||(c[1]=f=>a.$emit("close"))},null,8,["label"])]),default:k(()=>[o("div",Ia,[o("div",Pa,[o("div",null,[o("label",Ta,l(i(n)("contactModal.name_label")),1),g(i(ae),{id:"name",class:"w-full mt-1",placeholder:i(n)("contactModal.name_placeholder")},null,8,["placeholder"])]),o("div",null,[o("label",Aa,l(i(n)("contactModal.email_label")),1),g(i(ae),{id:"email",class:"w-full mt-1",placeholder:i(n)("contactModal.email_placeholder",{address:i(n)("contactModal.email_example")})},null,8,["placeholder"])]),o("div",null,[o("label",Oa,l(i(n)("contactModal.message_label")),1),g(i(je),{id:"message",class:"w-full mt-1",placeholder:i(n)("contactModal.message_placeholder"),rows:"4"},null,8,["placeholder"])])])])]),_:1},8,["visible","header"]))}};function Re(){return{scrollToWaitlist:()=>{const e=document.getElementById("hero-section"),n=document.getElementById("waitlist-email-input");e&&e.scrollIntoView({behavior:"smooth",block:"center"}),n&&setTimeout(()=>{n.focus()},500)}}}const Ra={id:"pricing",class:"py-12 px-4 md:px-6 lg:px-8"},Ha={class:"text-center mb-12"},Va={class:"text-gray-900 dark:text-gray-100 font-bold mb-3 text-4xl fade-up"},Ka={class:"text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto fade-up stagger-1"},Fa={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"},Na={class:"p-0 md:p-4 fade-up stagger-1"},Wa={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},Ua={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},qa={class:"text-3xl font-bold"},Za={class:"text-gray-600 dark:text-gray-400 mt-2"},Ya={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},Xa={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},Ga={class:"mb-8 flex flex-col items-center gap-4"},Ja={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},Qa={class:"flex items-start"},ei={class:"text-gray-700 dark:text-gray-300"},ti={class:"flex items-start"},ni={class:"text-gray-700 dark:text-gray-300"},oi={class:"flex items-start"},si={class:"text-gray-700 dark:text-gray-300"},ai={class:"flex items-start"},ii={class:"text-gray-700 dark:text-gray-300"},ri={class:"flex items-start"},li={class:"text-gray-400 dark:text-gray-500"},di={class:"flex items-start"},ci={class:"text-gray-400 dark:text-gray-500"},ui={class:"flex items-start"},pi={class:"text-gray-400 dark:text-gray-500"},mi={class:"p-0 md:p-4 fade-up stagger-2"},gi={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-violet-500 duration-300 transition-all cursor-pointer h-full"},fi={class:"absolute -top-4 left-1/2 -translate-x-1/2"},hi={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},bi={class:"text-3xl font-bold"},vi={class:"text-gray-600 dark:text-gray-400 mt-2"},yi={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},xi={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},ki={class:"mb-8 flex flex-col items-center gap-4"},wi={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},_i={class:"flex items-start"},$i={class:"text-gray-700 dark:text-gray-300"},Ci={class:"flex items-start"},Li={class:"text-gray-700 dark:text-gray-300"},Ei={class:"flex items-start"},Si={class:"text-gray-700 dark:text-gray-300"},Di={class:"flex items-start"},zi={class:"text-gray-700 dark:text-gray-300"},Mi={class:"flex items-start"},Bi={class:"text-gray-700 dark:text-gray-300"},Ii={class:"flex items-start"},Pi={class:"text-gray-700 dark:text-gray-300"},Ti={class:"flex items-start"},Ai={class:"text-gray-400 dark:text-gray-500"},Oi={class:"p-0 md:p-4 fade-up stagger-3"},ji={class:"relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},Ri={class:"text-gray-900 dark:text-gray-100 text-center mb-4"},Hi={class:"text-3xl font-bold"},Vi={class:"text-gray-600 dark:text-gray-400 mt-2"},Ki={class:"text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8"},Fi={class:"text-2xl font-bold text-violet-600 dark:text-violet-400"},Ni={class:"mb-8 flex flex-col items-center gap-4"},Wi={class:"my-8 list-none p-0 flex flex-col gap-4 flex-grow"},Ui={class:"flex items-start"},qi={class:"text-gray-700 dark:text-gray-300"},Zi={class:"flex items-start"},Yi={class:"text-gray-700 dark:text-gray-300"},Xi={class:"flex items-start"},Gi={class:"text-gray-700 dark:text-gray-300"},Ji={class:"flex items-start"},Qi={class:"text-gray-700 dark:text-gray-300"},er={class:"flex items-start"},tr={class:"text-gray-700 dark:text-gray-300"},nr={class:"flex items-start"},or={class:"text-gray-700 dark:text-gray-300"},sr={class:"flex items-start"},ar={class:"text-gray-700 dark:text-gray-300"},ir={class:"mt-12 text-center bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto"},rr={class:"text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"},lr={class:"text-gray-600 dark:text-gray-400 mb-6"},dr={__name:"LandingPricing",setup(t){const{t:e}=L();Le();const n=y(!1),{scrollToWaitlist:s}=Re();return(r,a)=>(p(),h(R,null,[o("div",Ra,[o("div",Ha,[o("h2",Va,l(i(e)("pricing.title")),1),o("p",Ka,l(i(e)("pricing.subtitle")),1)]),o("div",Fa,[o("div",Na,[o("div",Wa,[o("div",Ua,[o("h3",qa,l(i(e)("pricing.essential_name")),1),o("p",Za,l(i(e)("pricing.essential_desc")),1)]),o("div",Ya,[o("span",Xa,"3 "+l(i(e)("pricing.modules_label")),1)]),o("div",Ga,[a[2]||(a[2]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$19"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(i(_),{label:i(e)("pricing.trial_button"),outlined:"",class:"w-full",onClick:i(s)},null,8,["label","onClick"])]),a[10]||(a[10]=o("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),o("ul",Ja,[o("li",Qa,[a[3]||(a[3]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",ei,l(i(e)("pricing.features.real_time")),1)]),o("li",ti,[a[4]||(a[4]=o("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),o("span",ni,l(i(e)("pricing.features.sentiment")),1)]),o("li",oi,[a[5]||(a[5]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",si,l(i(e)("pricing.features.standard_support")),1)]),o("li",ai,[a[6]||(a[6]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",ii,l(i(e)("pricing.features.works_on_all")),1)]),o("li",ri,[a[7]||(a[7]=o("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),o("span",li,l(i(e)("pricing.features.cross_investment")),1)]),o("li",di,[a[8]||(a[8]=o("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),o("span",ci,l(i(e)("pricing.features.custom_alerts")),1)]),o("li",ui,[a[9]||(a[9]=o("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),o("span",pi,l(i(e)("pricing.features.export")),1)])])])]),o("div",mi,[o("div",gi,[o("div",fi,[g(i(me),{label:i(e)("pricing.popular_badge"),class:"bg-violet-600 text-white px-4 py-2"},null,8,["label"])]),o("div",hi,[o("h3",bi,l(i(e)("pricing.advanced_name")),1),o("p",vi,l(i(e)("pricing.advanced_desc")),1)]),o("div",yi,[o("span",xi,"6 "+l(i(e)("pricing.modules_label")),1)]),o("div",ki,[a[11]||(a[11]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$29"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(i(_),{label:i(e)("pricing.trial_button"),severity:"success",class:"w-full",onClick:i(s)},null,8,["label","onClick"])]),a[19]||(a[19]=o("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),o("ul",wi,[o("li",_i,[a[12]||(a[12]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",$i,l(i(e)("pricing.features.real_time")),1)]),o("li",Ci,[a[13]||(a[13]=o("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),o("span",Li,l(i(e)("pricing.features.sentiment")),1)]),o("li",Ei,[a[14]||(a[14]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",Si,[o("strong",null,l(i(e)("pricing.features.priority_support")),1)])]),o("li",Di,[a[15]||(a[15]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",zi,l(i(e)("pricing.features.works_on_all")),1)]),o("li",Mi,[a[16]||(a[16]=o("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),o("span",Bi,[o("strong",null,l(i(e)("pricing.features.cross_investment")),1)])]),o("li",Ii,[a[17]||(a[17]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",Pi,l(i(e)("pricing.features.custom_alerts")),1)]),o("li",Ti,[a[18]||(a[18]=o("i",{class:"pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"},null,-1)),o("span",Ai,l(i(e)("pricing.features.export")),1)])])])]),o("div",Oi,[o("div",ji,[o("div",Ri,[o("h3",Hi,l(i(e)("pricing.professional_name")),1),o("p",Vi,l(i(e)("pricing.professional_desc")),1)]),o("div",Ki,[o("span",Fi,"9 "+l(i(e)("pricing.modules_label")),1)]),o("div",Ni,[a[20]||(a[20]=o("div",{class:"flex items-baseline"},[o("span",{class:"text-5xl font-bold text-gray-900 dark:text-gray-100"},"$34"),o("span",{class:"text-gray-600 dark:text-gray-400 ml-2"},"/ month")],-1)),g(i(_),{label:i(e)("pricing.trial_button"),outlined:"",class:"w-full",onClick:i(s)},null,8,["label","onClick"])]),a[28]||(a[28]=o("div",{class:"w-full h-px bg-gray-200 dark:bg-gray-700 my-4"},null,-1)),o("ul",Wi,[o("li",Ui,[a[21]||(a[21]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",qi,l(i(e)("pricing.features.real_time")),1)]),o("li",Zi,[a[22]||(a[22]=o("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),o("span",Yi,l(i(e)("pricing.features.sentiment")),1)]),o("li",Xi,[a[23]||(a[23]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",Gi,[o("strong",null,l(i(e)("pricing.features.dedicated_support")),1)])]),o("li",Ji,[a[24]||(a[24]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",Qi,l(i(e)("pricing.features.works_on_all")),1)]),o("li",er,[a[25]||(a[25]=o("i",{class:"pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"},null,-1)),o("span",tr,[o("strong",null,l(i(e)("pricing.features.cross_investment")),1)])]),o("li",nr,[a[26]||(a[26]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",or,l(i(e)("pricing.features.custom_alerts")),1)]),o("li",sr,[a[27]||(a[27]=o("i",{class:"pi pi-check-circle text-green-500 text-xl mr-3 mt-1"},null,-1)),o("span",ar,[o("strong",null,l(i(e)("pricing.features.export")),1)])])])])])]),o("div",ir,[o("h3",rr,l(i(e)("pricing.enterprise_title")),1),o("p",lr,l(i(e)("pricing.enterprise_text")),1),g(i(_),{label:i(e)("pricing.contact_button"),class:"p-button-outlined p-button-lg",icon:"pi pi-arrow-right",iconPos:"right",onClick:a[0]||(a[0]=c=>n.value=!0)},null,8,["label"])])]),g(ja,{visible:n.value,onClose:a[1]||(a[1]=c=>n.value=!1)},null,8,["visible"])],64))}},cr={class:"px-4 py-16 md:px-6 lg:px-8"},ur={class:"max-w-4xl mx-auto"},pr={class:"text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"},mr={class:"space-y-4"},gr=["onClick","aria-expanded"],fr={class:"font-semibold text-gray-900 dark:text-gray-100"},hr={key:0,class:"bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700"},br={class:"px-6 pb-4 pt-2 text-gray-700 dark:text-gray-300"},vr={__name:"LandingFAQ",setup(t){const{t:e}=L(),n=y(null),s=X(()=>[{question:e("faq.q1"),answer:e("faq.a1")},{question:e("faq.q2"),answer:e("faq.a2")},{question:e("faq.q3"),answer:e("faq.a3")},{question:e("faq.q4"),answer:e("faq.a4")},{question:e("faq.q5"),answer:e("faq.a5")},{question:e("faq.q6"),answer:e("faq.a6")}]),r=a=>{n.value=n.value===a?null:a};return(a,c)=>(p(),h("section",cr,[o("div",ur,[o("h2",pr,l(i(e)("faq.title")),1),o("div",mr,[(p(!0),h(R,null,pe(s.value,(f,u)=>(p(),h("div",{key:u,class:E(["border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden","fade-up",`stagger-${u+1}`])},[o("button",{onClick:d=>r(u),class:"w-full px-6 py-4 text-left flex items-center justify-between bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors","aria-expanded":n.value===u},[o("span",fr,l(f.question),1),o("i",{class:E(["pi",n.value===u?"pi-chevron-up":"pi-chevron-down","text-gray-500 dark:text-gray-400 transition-transform duration-300"])},null,2)],8,gr),g(j,{name:"accordion-fade"},{default:k(()=>[n.value===u?(p(),h("div",hr,[o("div",br,l(f.answer),1)])):w("",!0)]),_:2},1024)],2))),128))])])]))}},yr=Y(vr,[["__scopeId","data-v-680cc850"]]),xr={class:"px-4 py-8 md:px-6 lg:px-8 text-center"},kr={class:"max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8"},wr={class:"flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-4 mb-4"},_r={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},$r={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},Cr={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},Lr={href:"#",class:"text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"},Er={class:"text-sm text-gray-500 dark:text-gray-500"},Sr={class:"text-xs text-gray-400 dark:text-gray-600 mt-2"},Dr={__name:"LandingFooter",setup(t){const{t:e}=L();return(n,s)=>(p(),h("footer",xr,[o("div",kr,[o("div",wr,[o("a",_r,l(i(e)("footer.legal")),1),o("a",$r,l(i(e)("footer.privacy")),1),o("a",Cr,l(i(e)("footer.terms")),1),o("a",Lr,l(i(e)("footer.cancellation")),1)]),o("p",Er,l(i(e)("footer.copyright",{year:new Date().getFullYear()})),1),o("p",Sr,l(i(e)("footer.disclaimer")),1)])]))}},zr={class:"fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40"},Mr={class:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"},Br={class:"text-center md:text-left"},Ir={class:"font-semibold"},Pr={class:"text-sm opacity-90"},Tr={__name:"LandingStickyCTA",setup(t){const{t:e}=L(),{scrollToWaitlist:n}=Re();return(s,r)=>(p(),h("div",zr,[o("div",Mr,[o("div",Br,[o("p",Ir,l(i(e)("stickyCTA.title")),1),o("p",Pr,l(i(e)("stickyCTA.subtitle")),1)]),g(i(_),{label:i(e)("stickyCTA.button_beta"),class:"bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold",onClick:i(n)},null,8,["label","onClick"])])]))}},Ar=Y(Tr,[["__scopeId","data-v-f5c7e33a"]]),Or={__name:"Landing",setup(t){dt();const e=y(0),n=y(0),s=y(0),r=y(0),a=y(!1),c=(u,d,m,v)=>{const I=(m-d)/(v/16);let te=d;const He=setInterval(()=>{te+=I,te>=m?(u.value=m,clearInterval(He)):u.value=Math.floor(te)},16)},f=()=>{const u=window.scrollY,d=window.innerHeight,m=document.documentElement.scrollHeight,v=u>d*2,x=u>m-d*1.5,I=document.getElementById("pricing")&&u>document.getElementById("pricing").offsetTop;a.value=v&&I||x};return le(()=>{c(e,0,234,2e3),c(n,0,23,2e3),c(s,0,9,1500),c(r,0,15,1800),window.addEventListener("scroll",f),document.title="Clear Cut Markets - Smarter Insights on What Matters Most"}),_e(()=>{window.removeEventListener("scroll",f)}),(u,d)=>(p(),h("div",{class:"relative overflow-x-hidden sticky-bar-padding",style:De({paddingBottom:a.value?"96px":"0"})},[d[0]||(d[0]=nt('<div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10" data-v-58f9f638></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-58f9f638><div class="absolute inset-0" data-v-58f9f638><div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent" data-v-58f9f638></div><div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent" data-v-58f9f638></div><div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45" data-v-58f9f638></div><div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45" data-v-58f9f638></div></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-58f9f638><div class="absolute inset-0" style="background-image:radial-gradient(circle, #667eea 1px, transparent 1px);background-size:50px 50px;opacity:0.3;" data-v-58f9f638></div></div>',3)),g(Vt),g(In,{animatedWaitlist:e.value,animatedSaved:n.value,animatedModules:s.value,animatedSources:r.value},null,8,["animatedWaitlist","animatedSaved","animatedModules","animatedSources"]),g(Ys),g(Yo),g(oa),g(xa),g(dr),g(yr),g(Dr),g(j,{name:"sticky-slide"},{default:k(()=>[a.value?(p(),C(Ar,{key:0})):w("",!0)]),_:1})],4))}},Kr=Y(Or,[["__scopeId","data-v-58f9f638"]]);export{Kr as default};
