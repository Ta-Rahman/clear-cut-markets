import{B as D,s as de,R as ce,a as E,f as L,r as pe,b as me,c as k,o as l,w as P,d as G,e as t,m,g as w,h as g,i as x,n as z,j as O,v as ge,T as te,k as ue,t as p,_ as ve,l as v,p as be,q as h,u as d,x as c,y as R,F as Q,z as Z,A as fe,C as xe}from"./index-Dbrdqeje.js";import{s as f}from"./index-gOa6bqkm.js";import{s as ye}from"./index-BAKctIxR.js";import{s as he,a as we}from"./index-CoIFawPf.js";var ke=`
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
`,$e={root:function(s){var n=s.props;return["p-message p-component p-message-"+n.severity,{"p-message-outlined":n.variant==="outlined","p-message-simple":n.variant==="simple","p-message-sm":n.size==="small","p-message-lg":n.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Se=D.extend({name:"message",style:ke,classes:$e}),Pe={name:"BaseMessage",extends:E,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Se,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},C(e)}function H(e,s,n){return(s=ze(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function ze(e){var s=Ce(e,"string");return C(s)=="symbol"?s:s+""}function Ce(e,s){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,s);if(C(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var se={name:"Message",extends:Pe,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.life&&setTimeout(function(){s.visible=!1,s.$emit("life-end")},this.life)},methods:{close:function(s){this.visible=!1,this.$emit("close",s)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return L(H(H({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:ce},components:{TimesIcon:de}};function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},I(e)}function X(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,i)}return n}function ee(e){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?X(Object(n),!0).forEach(function(i){Ie(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Ie(e,s,n){return(s=je(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function je(e){var s=Te(e,"string");return I(s)=="symbol"?s:s+""}function Te(e,s){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,s);if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var Me=["data-p"],Ae=["data-p"],Be=["data-p"],_e=["aria-label","data-p"],Oe=["data-p"];function De(e,s,n,i,u,r){var $=pe("TimesIcon"),S=me("ripple");return l(),k(te,m({name:"p-message",appear:""},e.ptmi("transition")),{default:P(function(){return[G(t("div",m({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":r.dataP},e.ptm("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:r.close}):(l(),g("div",m({key:1,class:e.cx("content"),"data-p":r.dataP},e.ptm("content")),[w(e.$slots,"icon",{class:z(e.cx("icon"))},function(){return[(l(),k(O(e.icon?"span":null),m({class:[e.cx("icon"),e.icon],"data-p":r.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(l(),g("div",m({key:0,class:e.cx("text"),"data-p":r.dataP},e.ptm("text")),[w(e.$slots,"default")],16,Be)):x("",!0),e.closable?G((l(),g("button",m({key:1,class:e.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:s[0]||(s[0]=function(M){return r.close(M)}),"data-p":r.dataP},ee(ee({},e.closeButtonProps),e.ptm("closeButton"))),[w(e.$slots,"closeicon",{},function(){return[e.closeIcon?(l(),g("i",m({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,Oe)):(l(),k($,m({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,_e)),[[S]]):x("",!0)],16,Ae))],16,Me),[[ge,u.visible]])]}),_:3},16)}se.render=De;var Ee=`
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
`,Le={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ke=D.extend({name:"chip",style:Ee,classes:Le}),Ne={name:"BaseChip",extends:E,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Ke,provide:function(){return{$pcChip:this,$parentInstance:this}}},F={name:"Chip",extends:Ne,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(s){(s.key==="Enter"||s.key==="Backspace")&&this.close(s)},close:function(s){this.visible=!1,this.$emit("remove",s)}},computed:{dataP:function(){return L({removable:this.removable})}},components:{TimesCircleIcon:ue}},Re=["aria-label","data-p"],Ve=["src"];function Fe(e,s,n,i,u,r){return u.visible?(l(),g("div",m({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":r.dataP}),[w(e.$slots,"default",{},function(){return[e.image?(l(),g("img",m({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Ve)):e.$slots.icon?(l(),k(O(e.$slots.icon),m({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(l(),g("span",m({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):x("",!0),e.label!==null?(l(),g("div",m({key:3,class:e.cx("label")},e.ptm("label")),p(e.label),17)):x("",!0)]}),e.removable?w(e.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(l(),k(O(e.removeIcon?"span":"TimesCircleIcon"),m({class:[e.cx("removeIcon"),e.removeIcon],onClick:r.close,onKeydown:r.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):x("",!0)],16,Re)):x("",!0)}F.render=Fe;var We=`
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
`,qe={root:function(s){var n=s.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Je=D.extend({name:"tag",style:We,classes:qe}),Ue={name:"BaseTag",extends:E,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Je,provide:function(){return{$pcTag:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},j(e)}function Ye(e,s,n){return(s=Ge(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function Ge(e){var s=Qe(e,"string");return j(s)=="symbol"?s:s+""}function Qe(e,s){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,s);if(j(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var ae={name:"Tag",extends:Ue,inheritAttrs:!1,computed:{dataP:function(){return L(Ye({rounded:this.rounded},this.severity,this.severity))}}},Ze=["data-p"];function He(e,s,n,i,u,r){return l(),g("span",m({class:e.cx("root"),"data-p":r.dataP},e.ptmi("root")),[e.$slots.icon?(l(),k(O(e.$slots.icon),m({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(l(),g("span",m({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):x("",!0),e.value!=null||e.$slots.default?w(e.$slots,"default",{key:2},function(){return[t("span",m({class:e.cx("label")},e.ptm("label")),p(e.value),17)]}):x("",!0)],16,Ze)}ae.render=He;var Xe=`
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
`,et={root:function(s){var n=s.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},tt={root:function(s){var n=s.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},st=D.extend({name:"divider",style:Xe,classes:tt,inlineStyles:et}),at={name:"BaseDivider",extends:E,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:st,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},T(e)}function V(e,s,n){return(s=nt(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function nt(e){var s=ot(e,"string");return T(s)=="symbol"?s:s+""}function ot(e,s){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,s);if(T(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var _={name:"Divider",extends:at,inheritAttrs:!1,computed:{dataP:function(){return L(V(V(V({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},it=["aria-orientation","data-p"],rt=["data-p"];function lt(e,s,n,i,u,r){return l(),g("div",m({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout,"data-p":r.dataP},e.ptmi("root")),[e.$slots.default?(l(),g("div",m({key:0,class:e.cx("content"),"data-p":r.dataP},e.ptm("content")),[w(e.$slots,"default")],16,rt)):x("",!0)],16,it)}_.render=lt;const dt={class:"relative overflow-x-hidden"},ct={class:"sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between"},pt={class:"flex gap-3"},mt={class:"min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"},gt={class:"text-center"},ut={class:"mb-4 animate-fade-in-down animation-delay-0"},vt={class:"flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300"},bt={class:"flex-1"},ft={key:0,class:"mt-3 animate-fade-in"},xt={class:"mt-6 animate-fade-in-up animation-delay-500"},yt={class:"flex justify-center items-center gap-4 flex-wrap"},ht={class:"text-center px-6"},wt={class:"text-4xl font-bold text-primary mb-1"},kt={class:"text-center px-6"},$t={class:"text-4xl font-bold text-primary mb-1"},St={class:"text-center px-6"},Pt={class:"text-4xl font-bold text-primary mb-1"},zt={class:"text-center px-6"},Ct={class:"text-4xl font-bold text-primary mb-1"},It={class:"px-4 py-8 md:px-6 lg:px-8"},jt={class:"max-w-7xl mx-auto py-8"},Tt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Mt=["onMouseenter"],At={class:"mb-4"},Bt={class:"flex justify-between items-start"},_t={class:"text-2xl font-bold text-gray-900 m-0"},Ot={class:"text-sm text-gray-600 m-0"},Dt={class:"mb-4"},Et={class:"flex items-baseline mb-1"},Lt={class:"text-4xl font-bold text-gray-900"},Kt={class:"text-sm text-gray-500"},Nt={class:"h-16 my-4 bg-gray-50 rounded-md p-2"},Rt={viewBox:"0 0 100 40",preserveAspectRatio:"none",class:"w-full h-full"},Vt=["points","stroke"],Ft=["d","fill"],Wt={class:"grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 mb-6"},qt={class:"text-center"},Jt={class:"block text-base font-semibold text-gray-900"},Ut={class:"text-center"},Yt={class:"block text-base font-semibold text-gray-900"},Gt={class:"text-center"},Qt={class:"block text-base font-semibold text-gray-900"},Zt={class:"mb-4"},Ht={class:"text-sm text-gray-600 leading-relaxed"},Xt={class:"mt-3 bg-gray-50 p-3 rounded-lg"},es={class:"flex justify-between items-center mb-2"},ts={class:"text-xs font-bold"},ss={class:"h-2 bg-gray-200 rounded-full overflow-hidden"},as={class:"flex justify-center gap-4 pt-2"},ns={class:"text-center mt-8"},os={id:"features",class:"px-4 py-8 md:px-6 lg:px-8 bg-gray-50"},is={class:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"},rs=["onMouseenter"],ls={class:"mb-4"},ds={class:"text-gray-900 text-xl mb-3 font-semibold"},cs={class:"text-gray-600 leading-relaxed"},ps={id:"pricing",class:"py-12 px-4 md:px-6 lg:px-8 bg-gray-50"},ms={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"},gs={class:"p-0 md:p-4"},us={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},vs={class:"mb-8 flex flex-col items-center gap-4"},bs={class:"p-0 md:p-4"},fs={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-violet-500 shadow-xl duration-300 transition-all cursor-pointer h-full"},xs={class:"absolute -top-4 left-1/2 -translate-x-1/2"},ys={class:"mb-8 flex flex-col items-center gap-4"},hs={class:"p-0 md:p-4"},ws={class:"relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full"},ks={class:"mb-8 flex flex-col items-center gap-4"},$s={class:"mt-12 text-center bg-white rounded-xl p-8 max-w-2xl mx-auto"},Ss={__name:"Landing",setup(e){const s=()=>{window.location.href="mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry"},n=v(""),i=v(!1),u=v(""),r=v("success"),$=v(!1),S=v(null),M=v(null),K=v(0),W=v(0),q=v(0),J=v(0),ne=v([{symbol:"AAPL",name:"Apple Inc.",icon:"pi-apple",price:"195.89",change:2.5,changeAmount:"+$4.73",simpleChart:"0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5",volume:"52.3M",marketCap:"$3.04T",peRatio:"32.1",sentiment:78,insight:"Strong momentum with institutional buying detected."},{symbol:"BTC",name:"Bitcoin",icon:"pi-bitcoin",price:"43,250",change:-1.2,changeAmount:"-$525.50",simpleChart:"0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30",volume:"$24.8B",marketCap:"$847B",peRatio:"N/A",sentiment:45,insight:"Key support at $42,000. Watch for breakout."},{symbol:"TSLA",name:"Tesla Inc.",icon:"pi-car",price:"238.45",change:3.8,changeAmount:"+$8.73",simpleChart:"0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2",volume:"118.2M",marketCap:"$758B",peRatio:"71.2",sentiment:85,insight:"Q4 delivery beats driving bullish sentiment."}]),oe=b=>b>=70?"#22c55e":b>=30?"#f59e0b":"#ef4444",ie=v([{icon:"pi-chart-line",title:"Module-Based Tracking",description:"Focus on 1-6 investments that matter most to your portfolio"},{icon:"pi-bolt",title:"AI-Powered Insights",description:"Get sentiment analysis and smart alerts on your investments"},{icon:"pi-shield",title:"Bank-Level Security",description:"Your data is encrypted and secure with enterprise-grade protection"},{icon:"pi-mobile",title:"Access Anywhere",description:"Monitor your investments from any device, anytime"},{icon:"pi-sync",title:"Real-Time Updates",description:"Live market data and instant notifications"},{icon:"pi-dollar",title:"95% Cost Savings",description:"Professional tools without the enterprise price tag"}]),A=(b,a,o,y)=>{const re=(o-a)/(y/16);let N=a;const le=setInterval(()=>{N+=re,N>=o?(b.value=o,clearInterval(le)):b.value=Math.floor(N)},16)},U=b=>{var a;(a=document.getElementById(b))==null||a.scrollIntoView({behavior:"smooth"})},Y=async()=>{if(!n.value||!n.value.includes("@")){$.value=!0,u.value="Please enter a valid email address",r.value="error",setTimeout(()=>{$.value=!1},500);return}i.value=!0,setTimeout(()=>{console.log("Email submitted:",n.value),u.value="Thanks for joining! We'll be in touch soon.",r.value="success",n.value="",i.value=!1,K.value+=1,setTimeout(()=>{u.value=""},5e3)},1e3)};return be(()=>{A(K,0,234,2e3),A(W,0,23,2e3),A(q,0,6,1500),A(J,0,15,1800)}),(b,a)=>(l(),g("div",dt,[a[43]||(a[43]=h('<div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10" data-v-2a231882></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-2a231882><div class="absolute inset-0" data-v-2a231882><div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent" data-v-2a231882></div><div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent" data-v-2a231882></div><div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45" data-v-2a231882></div><div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45" data-v-2a231882></div></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-2a231882><div class="absolute inset-0" style="background-image:radial-gradient(circle, #667eea 1px, transparent 1px);background-size:50px 50px;opacity:0.3;" data-v-2a231882></div></div>',3)),t("div",ct,[a[9]||(a[9]=t("div",{class:"flex items-center"},[t("i",{class:"pi pi-chart-line text-primary text-3xl mr-2"}),t("span",{class:"text-gray-900 font-bold text-2xl"},"Clear Cut Markets")],-1)),t("div",pt,[d(c(f),{label:"Features",class:"p-button-text",onClick:a[0]||(a[0]=o=>U("features"))}),d(c(f),{label:"Pricing",class:"p-button-text",onClick:a[1]||(a[1]=o=>U("pricing"))}),d(c(f),{label:"Login",class:"p-button-outlined",onClick:a[2]||(a[2]=o=>b.$router.push("/auth/login"))})])]),t("div",mt,[t("div",gt,[t("div",ut,[d(c(F),{label:"🚀 Launching Soon",class:"px-3 py-2"})]),a[17]||(a[17]=t("h1",{class:"text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down animation-delay-100"},[R(" Track What "),t("span",{class:"text-gradient"},"Matters Most")],-1)),a[18]||(a[18]=t("p",{class:"text-xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200"}," Professional investment monitoring for 95% less than Bloomberg Terminal. Focus on your top 1-6 investments with AI-powered insights. ",-1)),t("div",vt,[t("div",bt,[d(c(he),{iconPosition:"left",class:"w-full"},{default:P(()=>[d(c(we),{class:"pi pi-envelope text-gray-500"}),d(c(ye),{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=o=>n.value=o),placeholder:"Enter your email",onKeyup:fe(Y,["enter"]),class:z(["w-full",{"shake-animation":$.value}])},null,8,["modelValue","class"])]),_:1})]),d(c(f),{label:"Join Waitlist",class:"p-button-primary p-button-raised",onClick:Y,loading:i.value},null,8,["loading"])]),d(te,{name:"fade"},{default:P(()=>[u.value?(l(),g("div",ft,[d(c(se),{severity:r.value,closable:!1},{default:P(()=>[R(p(u.value),1)]),_:1},8,["severity"])])):x("",!0)]),_:1}),t("div",xt,[t("div",yt,[t("div",ht,[t("h3",wt,p(K.value)+"+",1),a[10]||(a[10]=t("p",{class:"text-gray-600 text-sm m-0"},"On Waitlist",-1))]),a[14]||(a[14]=t("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),t("div",kt,[t("h3",$t,"$"+p(W.value)+"k",1),a[11]||(a[11]=t("p",{class:"text-gray-600 text-sm m-0"},"Saved vs Bloomberg",-1))]),a[15]||(a[15]=t("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),t("div",St,[t("h3",Pt,p(q.value),1),a[12]||(a[12]=t("p",{class:"text-gray-600 text-sm m-0"},"Possible Modules",-1))]),a[16]||(a[16]=t("div",{class:"w-px h-10 bg-gray-300 self-center hidden sm:block"},null,-1)),t("div",zt,[t("h3",Ct,p(J.value)+"+",1),a[13]||(a[13]=t("p",{class:"text-gray-600 text-sm m-0"},"Data Sources",-1))])])])])]),t("div",It,[a[28]||(a[28]=t("div",{class:"text-center mb-6"},[t("h2",{class:"text-4xl font-bold text-gray-900 mb-3"},"Your Investment Modules"),t("p",{class:"text-xl text-gray-600 max-w-3xl mx-auto"}," Each module is a complete investment tracking system. Choose what matters to you. ")],-1)),t("div",jt,[t("div",Tt,[(l(!0),g(Q,null,Z(ne.value,(o,y)=>(l(),g("div",{key:o.symbol,class:z(["p-4",`animate-fade-in-up animation-delay-${y*200}`])},[t("div",{class:"module-card group h-full bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30",onMouseenter:B=>M.value=y,onMouseleave:a[4]||(a[4]=B=>M.value=null)},[t("div",At,[t("div",Bt,[t("div",null,[t("h3",_t,p(o.symbol),1),t("p",Ot,p(o.name),1)]),d(c(ae),{severity:o.change>0?"success":"danger",class:"font-semibold"},{default:P(()=>[R(p(o.change>0?"+":"")+p(o.change)+"% ",1)]),_:2},1032,["severity"])])]),t("div",Dt,[t("div",Et,[a[19]||(a[19]=t("span",{class:"text-xl text-gray-600 mr-1"},"$",-1)),t("span",Lt,p(o.price),1)]),t("div",Kt,[t("span",null,p(o.changeAmount),1),a[20]||(a[20]=t("span",{class:"ml-2"},"Today",-1))])]),t("div",Nt,[(l(),g("svg",Rt,[a[21]||(a[21]=t("line",{x1:"0",y1:"20",x2:"100",y2:"20",stroke:"#f0f0f0","stroke-width":"1"},null,-1)),t("polyline",{points:o.simpleChart,fill:"none",stroke:o.change>0?"#22c55e":"#ef4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,Vt),t("path",{d:`M ${o.simpleChart} L 100,40 L 0,40 Z`,fill:o.change>0?"#22c55e20":"#ef444420"},null,8,Ft)]))]),t("div",Wt,[t("div",qt,[a[22]||(a[22]=t("span",{class:"block text-xs text-gray-600 mb-1"},"Volume",-1)),t("span",Jt,p(o.volume),1)]),t("div",Ut,[a[23]||(a[23]=t("span",{class:"block text-xs text-gray-600 mb-1"},"Market Cap",-1)),t("span",Yt,p(o.marketCap),1)]),t("div",Gt,[a[24]||(a[24]=t("span",{class:"block text-xs text-gray-600 mb-1"},"P/E Ratio",-1)),t("span",Qt,p(o.peRatio),1)])]),t("div",Zt,[a[26]||(a[26]=t("div",{class:"flex items-center gap-2 mb-3"},[t("i",{class:"pi pi-sparkles text-primary"}),t("span",{class:"font-semibold"},"AI Analysis")],-1)),t("p",Ht,p(o.insight),1),t("div",Xt,[t("div",es,[a[25]||(a[25]=t("span",{class:"text-xs text-gray-500"},"Sentiment",-1)),t("span",ts,p(o.sentiment)+"% Bullish",1)]),t("div",ss,[t("div",{class:"h-full rounded-full transition-all duration-500",style:xe({width:o.sentiment+"%",backgroundColor:oe(o.sentiment)})},null,4)])])]),t("div",as,[d(c(f),{icon:"pi pi-bell",class:"p-button-text p-button-sm p-button-rounded"}),d(c(f),{icon:"pi pi-chart-line",class:"p-button-text p-button-sm p-button-rounded"}),d(c(f),{icon:"pi pi-cog",class:"p-button-text p-button-sm p-button-rounded"})])],40,Mt)],2))),128))]),t("div",ns,[d(c(f),{label:"This could be your dashboard",class:"p-button-outlined p-button-lg",disabled:""}),a[27]||(a[27]=t("p",{class:"text-gray-600 mt-3"},"Join the waitlist to start tracking your investments",-1))])])]),t("div",os,[a[29]||(a[29]=t("h2",{class:"text-center text-gray-900 text-3xl font-bold mb-6"},"Why Choose Clear Cut Markets?",-1)),t("div",is,[(l(!0),g(Q,null,Z(ie.value,(o,y)=>(l(),g("div",{key:y,class:z(["text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105",`animate-fade-in-up animation-delay-${y*100}`]),onMouseenter:B=>S.value=y,onMouseleave:a[5]||(a[5]=B=>S.value=null)},[t("div",ls,[t("i",{class:z([`pi ${o.icon} text-5xl transition-colors duration-300`,S.value===y?"text-primary":"text-gray-400"])},null,2)]),t("h3",ds,p(o.title),1),t("p",cs,p(o.description),1)],42,rs))),128))])]),t("div",ps,[a[41]||(a[41]=t("div",{class:"text-center mb-12"},[t("h2",{class:"text-gray-900 font-bold mb-3 text-4xl"},"Simple Module-Based Pricing"),t("p",{class:"text-gray-600 text-xl max-w-2xl mx-auto"}," Choose the plan that fits your portfolio. Save 95% compared to Bloomberg Terminal. ")],-1)),t("div",ms,[t("div",gs,[t("div",us,[a[31]||(a[31]=h('<div class="text-gray-900 text-center mb-8" data-v-2a231882><h3 class="text-3xl font-bold" data-v-2a231882>Essential</h3><p class="text-gray-600 mt-2" data-v-2a231882>For focused investors</p></div><div class="text-center mb-4" data-v-2a231882><span class="text-2xl font-bold text-violet-600" data-v-2a231882>3 Modules</span><p class="text-sm text-gray-500 mt-1" data-v-2a231882>€8.33 per module</p><p class="text-sm text-transparent" data-v-2a231882>-</p></div>',2)),t("div",vs,[a[30]||(a[30]=t("div",{class:"flex items-baseline"},[t("span",{class:"text-5xl font-bold text-gray-900"},"€25"),t("span",{class:"text-gray-600 ml-2"},"per month")],-1)),d(c(f),{label:"Start 14-Day Trial",class:"p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full",onClick:a[6]||(a[6]=o=>b.$router.push("/auth/register"))})]),d(c(_),{class:"w-full bg-gray-200"}),a[32]||(a[32]=h('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-2a231882><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Track <strong data-v-2a231882>3 investments</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Real-time price alerts</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Basic AI insights</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Daily market summaries</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Mobile &amp; web access</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Email support</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Advanced AI insights</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Sentiment analysis</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>15+ data sources</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>API access</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Portfolio analytics</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Export data &amp; reports</span></li></ul>',1))])]),t("div",bs,[t("div",fs,[t("div",xs,[d(c(F),{label:"Most Popular",class:"bg-violet-600 text-white px-4 py-2"})]),a[34]||(a[34]=h('<div class="text-gray-900 text-center mb-8" data-v-2a231882><h3 class="text-3xl font-bold" data-v-2a231882>Professional</h3><p class="text-gray-600 mt-2" data-v-2a231882>For active investors</p></div><div class="text-center mb-4" data-v-2a231882><span class="text-2xl font-bold text-violet-600" data-v-2a231882>6 Modules</span><p class="text-sm text-gray-500 mt-1" data-v-2a231882>€7.50 per module</p><p class="text-sm text-green-600 font-semibold" data-v-2a231882>Save 10%</p></div>',2)),t("div",ys,[a[33]||(a[33]=t("div",{class:"flex items-baseline"},[t("span",{class:"text-5xl font-bold text-gray-900"},"€45"),t("span",{class:"text-gray-600 ml-2"},"per month")],-1)),d(c(f),{label:"Start 14-Day Trial",class:"p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full",onClick:a[7]||(a[7]=o=>b.$router.push("/auth/register"))})]),d(c(_),{class:"w-full bg-gray-200"}),a[35]||(a[35]=h('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-2a231882><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Track <strong data-v-2a231882>6 investments</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Real-time price alerts</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Advanced AI insights</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Daily market summaries</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Mobile &amp; web access</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Priority support</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Sentiment analysis</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>15+ data sources</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Custom alerts &amp; thresholds</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>API access</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Portfolio analytics</span></li><li class="flex items-start text-gray-400" data-v-2a231882><i class="pi pi-times-circle text-xl mr-3 mt-1" data-v-2a231882></i><span data-v-2a231882>Export data &amp; reports</span></li></ul><div class="mt-auto p-4 bg-violet-50 rounded-lg" data-v-2a231882><p class="text-sm text-violet-700 text-center font-semibold" data-v-2a231882> Save €2,355/month vs Bloomberg </p></div>',2))])]),t("div",hs,[t("div",ws,[a[37]||(a[37]=h('<div class="text-gray-900 text-center mb-8" data-v-2a231882><h3 class="text-3xl font-bold" data-v-2a231882>Advanced</h3><p class="text-gray-600 mt-2" data-v-2a231882>For portfolio managers</p></div><div class="text-center mb-4" data-v-2a231882><span class="text-2xl font-bold text-violet-600" data-v-2a231882>9 Modules</span><p class="text-sm text-gray-500 mt-1" data-v-2a231882>€7.22 per module</p><p class="text-sm text-green-600 font-semibold" data-v-2a231882>Save 13%</p></div>',2)),t("div",ks,[a[36]||(a[36]=t("div",{class:"flex items-baseline"},[t("span",{class:"text-5xl font-bold text-gray-900"},"€65"),t("span",{class:"text-gray-600 ml-2"},"per month")],-1)),d(c(f),{label:"Start 14-Day Trial",class:"p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full",onClick:a[8]||(a[8]=o=>b.$router.push("/auth/register"))})]),d(c(_),{class:"w-full bg-gray-200"}),a[38]||(a[38]=h('<ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow" data-v-2a231882><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Track <strong data-v-2a231882>9 investments</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Real-time price alerts</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Advanced AI insights</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Daily market summaries</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Mobile &amp; web access</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Dedicated support</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Sentiment analysis</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>15+ data sources</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Custom alerts &amp; thresholds</span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>API access (beta)</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Portfolio analytics</strong></span></li><li class="flex items-start" data-v-2a231882><i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882><strong data-v-2a231882>Export data &amp; reports</strong></span></li></ul>',1))])])]),t("div",$s,[a[39]||(a[39]=t("h3",{class:"text-2xl font-bold text-gray-900 mb-4"},"Need More Than 9 Modules?",-1)),a[40]||(a[40]=t("p",{class:"text-gray-600 mb-6"}," We offer custom plans for institutional investors and teams who need to track larger portfolios. ",-1)),d(c(f),{label:"Contact Sales",class:"p-button-outlined p-button-lg",icon:"pi pi-arrow-right",iconPos:"right",onClick:s})]),a[42]||(a[42]=h('<div class="mt-16 text-center" data-v-2a231882><p class="text-gray-600 mb-4" data-v-2a231882> All plans include: Bank-level security, 99.9% uptime, and regular updates </p><div class="flex flex-wrap justify-center gap-6 text-sm" data-v-2a231882><div class="flex items-center gap-2" data-v-2a231882><i class="pi pi-shield text-green-500" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>SSL encryption</span></div><div class="flex items-center gap-2" data-v-2a231882><i class="pi pi-refresh text-green-500" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>14-day free trial</span></div><div class="flex items-center gap-2" data-v-2a231882><i class="pi pi-times text-green-500" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>Cancel anytime</span></div><div class="flex items-center gap-2" data-v-2a231882><i class="pi pi-credit-card text-green-500" data-v-2a231882></i><span class="text-gray-700" data-v-2a231882>No setup fees</span></div></div></div>',1))])]))}},js=ve(Ss,[["__scopeId","data-v-2a231882"]]);export{js as default};
