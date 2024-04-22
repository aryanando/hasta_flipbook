(function(){"use strict";var n={7549:function(n,a,e){var i=e(5150),s=e(1006),p=e(6727);const t={class:"container-fluid"},o={class:"navbar navbar-expand-md navbar-dark",style:{"background-color":"#3a3a3a"}},r=(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarCollapse"},g={class:"navbar-nav mr-auto"},u={class:"nav-item active"},c={class:"nav-item"},m={class:"nav-item"},d={class:"nav-item"},E={class:"action-bar"},h={class:"page-num"},b=(0,s._)("p",{class:"credit"},[(0,s.Uk)(" Photos from "),(0,s._)("a",{href:"https://www.batubhayangkara.com/",target:"_blank"},"RSHB"),(0,s.Uk)(". ")],-1);function f(n,a,e,i,f,v){const k=(0,s.up)("left-icon"),w=(0,s.up)("plus-icon"),T=(0,s.up)("minus-icon"),y=(0,s.up)("right-icon"),F=(0,s.up)("Flipbook");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",t,[(0,s._)("nav",o,[(0,s._)("a",{class:"navbar-brand",id:"test",onClick:a[0]||(a[0]=n=>v.changeImage(1)),href:"#"},"Dashboard "),r,(0,s._)("div",l,[(0,s._)("ul",g,[(0,s._)("li",u,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[1]||(a[1]=n=>v.changeImage(3))},"Tips-Tips")]),(0,s._)("li",c,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[2]||(a[2]=n=>v.changeImage(2))},"Jadwal")]),(0,s._)("li",m,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[3]||(a[3]=n=>v.changeImage(4))},"Kamar")]),(0,s._)("li",d,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[4]||(a[4]=n=>v.changeImage(5))},"Hyperbaric")])])])])]),(0,s._)("div",{id:"app",class:(0,p.C_)({"has-mouse":f.hasMouse}),onTouchstart:a[5]||(a[5]=n=>f.hasMouse=!1)},[(0,s.Wm)(F,{class:"flipbook",pages:f.pages,pagesHiRes:f.pagesHiRes,startPage:f.pageNum,ref:"flipbook",onFlipLeftStart:v.onFlipLeftStart,onFlipLeftEnd:v.onFlipLeftEnd,onFlipRightStart:v.onFlipRightStart,onFlipRightEnd:v.onFlipRightEnd,onZoomStart:v.onZoomStart,onZoomEnd:v.onZoomEnd},{default:(0,s.w5)((n=>[(0,s._)("div",E,[(0,s.Wm)(k,{class:(0,p.C_)(["btn-slide left",{disabled:!n.canFlipLeft}]),onClick:n.flipLeft},null,8,["class","onClick"]),(0,s.Wm)(w,{class:(0,p.C_)(["btn-slide plus",{disabled:!n.canZoomIn}]),onClick:n.zoomIn},null,8,["class","onClick"]),(0,s._)("span",h," Page "+(0,p.zw)(n.page)+" of "+(0,p.zw)(n.numPages),1),(0,s.Wm)(T,{class:(0,p.C_)(["btn-slide minus",{disabled:!n.canZoomOut}]),onClick:n.zoomOut},null,8,["class","onClick"]),(0,s.Wm)(y,{class:(0,p.C_)(["btn-slide right",{disabled:!n.canFlipRight}]),onClick:n.flipRight},null,8,["class","onClick"])])])),_:1},8,["pages","pagesHiRes","startPage","onFlipLeftStart","onFlipLeftEnd","onFlipRightStart","onFlipRightEnd","onZoomStart","onZoomEnd"]),b],34)],64)}var v=e(4093),k=e(3685),w=e(9980),T=e(1731),y=e(1883),F={components:{Flipbook:y.Z,LeftIcon:v.Z,RightIcon:k.Z,PlusIcon:w.Z,MinusIcon:T.Z},data(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart(n){console.log("flip-left-start",n)},onFlipLeftEnd(n){console.log("flip-left-end",n),window.location.hash="#"+n},onFlipRightStart(n){console.log("flip-right-start",n)},onFlipRightEnd(n){console.log("flip-right-end",n),window.location.hash="#"+n},onZoomStart(n){console.log("zoom-start",n)},onZoomEnd(n){console.log("zoom-end",n)},setPageFromHash(){const n=parseInt(window.location.hash.slice(1),10);isFinite(n)&&(this.pageNum=n)},changeImage(n){switch(n){case 1:this.pages=[null,"E-menu/cover/cover-640.png","E-menu/Unggulan/bayi-640.png","E-menu/Unggulan/hyperbaric-640.png","E-menu/Unggulan/pirata-640.png","E-menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"E-menu/cover/cover-1920.png","E-menu/Unggulan/bayi-1920.jpg","E-menu/Unggulan/hyperbaric-1920.jpg","E-menu/Unggulan/pirata-1920.jpg","E-menu/Unggulan/narkoba-1920.jpg"];break;case 2:this.pages=[null,"E-menu/Jadwal/coverjw-640.png","E-menu/Jadwal/jw1-640.png","E-menu/Jadwal/jw1-640.png"],this.pagesHiRes=[null,"E-menu/Jadwal/coverjw-1920.png","E-menu/Jadwal/jw1-1920.png","E-menu/Jadwal/jw2-1920.png"];break;case 3:this.pages=[null,"E-menu/Tips-tips/covertips-640.png","E-menu/Tips-tips/dbd-640.png","E-menu/Tips-tips/dbd2-640.png","E-menu/Tips-tips/gerd-640.png","E-menu/Tips-tips/gerd2-640.png","E-menu/Tips-tips/imunisasi-640.png","E-menu/Tips-tips/imunisasi2-640.png","E-menu/Tips-tips/Stunting-640.png","E-menu/Tips-tips/Stunting2-640.png","E-menu/Tips-tips/gerd-640.png","E-menu/Tips-tips/gerd2-640.png","E-menu/Tips-tips/tipsginjal-640.png","E-menu/Tips-tips/tipsginjal2-640.png","E-menu/Tips-tips/makan-640.png","E-menu/Tips-tips/makan2-640.png"],this.pagesHiRes=[null,"E-menu/Tips-tips/covertips-1920.png","E-menu/Tips-tips/dbd-1920.png","E-menu/Tips-tips/dbd2-1920.png","E-menu/Tips-tips/gerd-1920.png","E-menu/Tips-tips/gerd2-1920.png","E-menu/Tips-tips/imunisasi-1920.png","E-menu/Tips-tips/imunisasi2-1920.png","E-menu/Tips-tips/Stunting-1920.png","E-menu/Tips-tips/Stunting2-1920.png","E-menu/Tips-tips/gerd-1920.png","E-menu/Tips-tips/gerd2-1920.png","E-menu/Tips-tips/tipsginjal-1920.png","E-menu/Tips-tips/tipsginjal2-1920.png","E-menu/Tips-tips/makan-1920.png","E-menu/Tips-tips/makan2-1920.png"];break;case 4:this.pages=[null,"E-menu/cover/cover-640.png","E-menu/Kamar/vvip-640.png","E-menu/Kamar/vip-640.png","E-menu/Kamar/kls1-640.png","E-menu/Kamar/kls2-640.png","E-menu/Kamar/kls3-640.png"],this.pagesHiRes=[null,"E-menu/cover/cover-1920.png","E-menu/Kamar/vvip-1920.png","E-menu/Kamar/vip-1920.png","E-menu/Kamar/kls1-1920.png","E-menu/Kamar/kls2-1920.png","E-menu/Kamar/kls3-1920.png"];break;case 5:this.pages=[null,"E-menu/Hyperbaric/coverhiperbarik-640.png","E-menu/Hyperbaric/penjelasan-640.png","E-menu/Hyperbaric/prosedur-640.png","E-menu/Hyperbaric/syarat-640.png","E-menu/Hyperbaric/tarif-640.png"],this.pagesHiRes=[null,"E-menu/Hyperbaric/coverhiperbarik-1920.png","E-menu/Hyperbaric/penjelasan-1920.png","E-menu/Hyperbaric/prosedur-1920.png","E-menu/Hyperbaric/syarat-1920.png","E-menu/Hyperbaric/tarif-1920.png"];break;default:break}}},mounted(){window.addEventListener("keydown",(n=>{const a=this.$refs.flipbook;a&&(37==n.keyCode&&a.canFlipLeft&&a.flipLeft(),39==n.keyCode&&a.canFlipRight&&a.flipRight())})),setTimeout((()=>{this.pages=[null,"E-menu/cover/cover-640.png","E-menu/Unggulan/bayi-640.png","E-menu/Unggulan/hyperbaric-640.png","E-menu/Unggulan/pirata-640.png","E-menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"E-menu/cover/cover-1920.png","E-menu/Unggulan/bayi-1920.jpg","E-menu/Unggulan/hyperbaric-1920.jpg","E-menu/Unggulan/pirata-1920.jpg","E-menu/Unggulan/narkoba-1920.jpg"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},_=e(7583);const j=(0,_.Z)(F,[["render",f]]);var H=j;e(5839);(0,i.ri)(H).mount("#app")}},a={};function e(i){var s=a[i];if(void 0!==s)return s.exports;var p=a[i]={exports:{}};return n[i](p,p.exports,e),p.exports}e.m=n,function(){var n=[];e.O=function(a,i,s,p){if(!i){var t=1/0;for(g=0;g<n.length;g++){i=n[g][0],s=n[g][1],p=n[g][2];for(var o=!0,r=0;r<i.length;r++)(!1&p||t>=p)&&Object.keys(e.O).every((function(n){return e.O[n](i[r])}))?i.splice(r--,1):(o=!1,p<t&&(t=p));if(o){n.splice(g--,1);var l=s();void 0!==l&&(a=l)}}return a}p=p||0;for(var g=n.length;g>0&&n[g-1][2]>p;g--)n[g]=n[g-1];n[g]=[i,s,p]}}(),function(){e.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(a,{a:a}),a}}(),function(){e.d=function(n,a){for(var i in a)e.o(a,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){var n={143:0};e.O.j=function(a){return 0===n[a]};var a=function(a,i){var s,p,t=i[0],o=i[1],r=i[2],l=0;if(t.some((function(a){return 0!==n[a]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(r)var g=r(e)}for(a&&a(i);l<t.length;l++)p=t[l],e.o(n,p)&&n[p]&&n[p][0](),n[p]=0;return e.O(g)},i=self["webpackChunkFlipbook"]=self["webpackChunkFlipbook"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(7549)}));i=e.O(i)})();
//# sourceMappingURL=app.dee8e21b.js.map