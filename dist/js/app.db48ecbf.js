(function(){"use strict";var n={4587:function(n,a,e){var i=e(5150),s=e(1006),t=e(6727);const p={class:"container-fluid"},o={class:"navbar navbar-expand-md navbar-dark",style:{"background-color":"#3a3a3a"}},l=(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),r={class:"collapse navbar-collapse",id:"navbarCollapse"},g={class:"navbar-nav mr-auto"},u={class:"nav-item active"},c={class:"nav-item"},d={class:"nav-item"},E={class:"nav-item"},h={class:"action-bar"},f={class:"page-num"},b=(0,s._)("p",{class:"credit"},[(0,s.Uk)(" Photos from "),(0,s._)("a",{href:"https://www.batubhayangkara.com/",target:"_blank"},"RSHB"),(0,s.Uk)(". ")],-1);function M(n,a,e,i,M,v){const m=(0,s.up)("left-icon"),k=(0,s.up)("plus-icon"),w=(0,s.up)("minus-icon"),T=(0,s.up)("right-icon"),y=(0,s.up)("Flipbook");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",p,[(0,s._)("nav",o,[(0,s._)("a",{class:"navbar-brand",id:"test",onClick:a[0]||(a[0]=n=>v.changeImage(1)),href:"#"},"Dashboard "),l,(0,s._)("div",r,[(0,s._)("ul",g,[(0,s._)("li",u,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[1]||(a[1]=n=>v.changeImage(3))},"Tips-Tips")]),(0,s._)("li",c,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[2]||(a[2]=n=>v.changeImage(2))},"Jadwal")]),(0,s._)("li",d,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[3]||(a[3]=n=>v.changeImage(4))},"Kamar")]),(0,s._)("li",E,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[4]||(a[4]=n=>v.changeImage(5))},"Hyperbaric")])])])])]),(0,s._)("div",{id:"app",class:(0,t.C_)({"has-mouse":M.hasMouse}),onTouchstart:a[5]||(a[5]=n=>M.hasMouse=!1)},[(0,s.Wm)(y,{class:"flipbook",pages:M.pages,pagesHiRes:M.pagesHiRes,startPage:M.pageNum,ref:"flipbook",onFlipLeftStart:v.onFlipLeftStart,onFlipLeftEnd:v.onFlipLeftEnd,onFlipRightStart:v.onFlipRightStart,onFlipRightEnd:v.onFlipRightEnd,onZoomStart:v.onZoomStart,onZoomEnd:v.onZoomEnd},{default:(0,s.w5)((n=>[(0,s._)("div",h,[(0,s.Wm)(m,{class:(0,t.C_)(["btn-slide left",{disabled:!n.canFlipLeft}]),onClick:n.flipLeft},null,8,["class","onClick"]),(0,s.Wm)(k,{class:(0,t.C_)(["btn-slide plus",{disabled:!n.canZoomIn}]),onClick:n.zoomIn},null,8,["class","onClick"]),(0,s._)("span",f," Page "+(0,t.zw)(n.page)+" of "+(0,t.zw)(n.numPages),1),(0,s.Wm)(w,{class:(0,t.C_)(["btn-slide minus",{disabled:!n.canZoomOut}]),onClick:n.zoomOut},null,8,["class","onClick"]),(0,s.Wm)(T,{class:(0,t.C_)(["btn-slide right",{disabled:!n.canFlipRight}]),onClick:n.flipRight},null,8,["class","onClick"])])])),_:1},8,["pages","pagesHiRes","startPage","onFlipLeftStart","onFlipLeftEnd","onFlipRightStart","onFlipRightEnd","onZoomStart","onZoomEnd"]),b],34)],64)}var v=e(4093),m=e(3685),k=e(9980),w=e(1731),T=e(1883),y={components:{Flipbook:T.Z,LeftIcon:v.Z,RightIcon:m.Z,PlusIcon:k.Z,MinusIcon:w.Z},data(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart(n){console.log("flip-left-start",n)},onFlipLeftEnd(n){console.log("flip-left-end",n),window.location.hash="#"+n},onFlipRightStart(n){console.log("flip-right-start",n)},onFlipRightEnd(n){console.log("flip-right-end",n),window.location.hash="#"+n},onZoomStart(n){console.log("zoom-start",n)},onZoomEnd(n){console.log("zoom-end",n)},setPageFromHash(){const n=parseInt(window.location.hash.slice(1),10);isFinite(n)&&(this.pageNum=n)},changeImage(n){switch(n){case 1:this.pages=[null,"E-Menu/cover/cover-640.png","E-Menu/Unggulan/bayi-640.png","E-Menu/Unggulan/hyperbaric-640.png","E-Menu/Unggulan/pirata-640.png","E-Menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"E-Menu/cover/cover-1920.png","E-Menu/Unggulan/BayiGratis-1920.jpg","E-Menu/Unggulan/hyperbaric-1920.jpg","E-Menu/Unggulan/pirata-1920.jpg","E-Menu/Unggulan/narkoba-1920.jpg"];break;case 2:this.pages=[null,"E-Menu/Jadwal/cover jadwal-640.jpg","E-Menu/Jadwal/jadwal1-640.jpg","E-Menu/Jadwal/jadwal2-640.jpg"],this.pagesHiRes=[null,"E-Menu/Jadwal/cover jadwal-1920.jpg","E-Menu/Jadwal/jadwal1-1920.jpg","E-Menu/Jadwal/jadwal2-1920.jpg"];break;case 3:this.pages=[null,"E-Menu/Tips-tips/covertips-640.png","E-Menu/Tips-tips/dbd-640.png","E-Menu/Tips-tips/dbd2-640.png","E-Menu/Tips-tips/gerd-640.png","E-Menu/Tips-tips/gerd2-640.png","E-Menu/Tips-tips/imunisasi-640.png","E-Menu/Tips-tips/imunisasi2-640.png","E-Menu/Tips-tips/Stunting-640.png","E-Menu/Tips-tips/Stunting2-640.png","E-Menu/Tips-tips/gerd-640.png","E-Menu/Tips-tips/gerd2-640.png","E-Menu/Tips-tips/tipsginjal-640.png","E-Menu/Tips-tips/tipsginjal2-640.png","E-Menu/Tips-tips/makan-640.png","E-Menu/Tips-tips/makan2-640.png"],this.pagesHiRes=[null,"E-Menu/Tips-tips/covertips-1920.png","E-Menu/Tips-tips/dbd-1920.png","E-Menu/Tips-tips/dbd2-1920.png","E-Menu/Tips-tips/gerd-1920.png","E-Menu/Tips-tips/gerd2-1920.png","E-Menu/Tips-tips/imunisasi-1920.png","E-Menu/Tips-tips/imunisasi2-1920.png","E-Menu/Tips-tips/Stunting-1920.png","E-Menu/Tips-tips/Stunting2-1920.png","E-Menu/Tips-tips/gerd-1920.png","E-Menu/Tips-tips/gerd2-1920.png","E-Menu/Tips-tips/tipsginjal-1920.png","E-Menu/Tips-tips/tipsginjal2-1920.png","E-Menu/Tips-tips/makan-1920.png","E-Menu/Tips-tips/makan2-1920.png"];break;case 4:this.pages=[null,"E-Menu/cover/cover-640.png","E-Menu/Kamar/vvip-640.png","E-Menu/Kamar/vip-640.png","E-Menu/Kamar/kls1-640.png","E-Menu/Kamar/kls2-640.png","E-Menu/Kamar/kls3-640.png"],this.pagesHiRes=[null,"E-Menu/cover/cover-1920.png","E-Menu/Kamar/vvip-1920.png","E-Menu/Kamar/vip-1920.png","E-Menu/Kamar/kls1-1920.png","E-Menu/Kamar/kls2-1920.png","E-Menu/Kamar/kls3-1920.png"];break;case 5:this.pages=[null,"E-Menu/Hyperbaric/coverhiperbarik-640.png","E-Menu/Hyperbaric/penjelasan-640.png","E-Menu/Hyperbaric/prosedur-640.png","E-Menu/Hyperbaric/syarat-640.png","E-Menu/Hyperbaric/tarif-640.png"],this.pagesHiRes=[null,"E-Menu/Hyperbaric/coverhiperbarik-1920.png","E-Menu/Hyperbaric/penjelasan-1920.png","E-Menu/Hyperbaric/prosedur-1920.png","E-Menu/Hyperbaric/syarat-1920.png","E-Menu/Hyperbaric/tarif-1920.png"];break;default:break}}},mounted(){window.addEventListener("keydown",(n=>{const a=this.$refs.flipbook;a&&(37==n.keyCode&&a.canFlipLeft&&a.flipLeft(),39==n.keyCode&&a.canFlipRight&&a.flipRight())})),setTimeout((()=>{this.pages=[null,"E-Menu/cover/cover-640.png","E-Menu/Unggulan/bayi-640.png","E-Menu/Unggulan/hyperbaric-640.png","E-Menu/Unggulan/pirata-640.png","E-Menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"E-Menu/cover/cover-1920.png","E-Menu/Unggulan/bayi-1920.jpg","E-Menu/Unggulan/hyperbaric-1920.jpg","E-Menu/Unggulan/pirata-1920.jpg","E-Menu/Unggulan/narkoba-1920.jpg"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},j=e(7583);const _=(0,j.Z)(y,[["render",M]]);var F=_;e(5839);(0,i.ri)(F).mount("#app")}},a={};function e(i){var s=a[i];if(void 0!==s)return s.exports;var t=a[i]={exports:{}};return n[i](t,t.exports,e),t.exports}e.m=n,function(){var n=[];e.O=function(a,i,s,t){if(!i){var p=1/0;for(g=0;g<n.length;g++){i=n[g][0],s=n[g][1],t=n[g][2];for(var o=!0,l=0;l<i.length;l++)(!1&t||p>=t)&&Object.keys(e.O).every((function(n){return e.O[n](i[l])}))?i.splice(l--,1):(o=!1,t<p&&(p=t));if(o){n.splice(g--,1);var r=s();void 0!==r&&(a=r)}}return a}t=t||0;for(var g=n.length;g>0&&n[g-1][2]>t;g--)n[g]=n[g-1];n[g]=[i,s,t]}}(),function(){e.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(a,{a:a}),a}}(),function(){e.d=function(n,a){for(var i in a)e.o(a,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){var n={143:0};e.O.j=function(a){return 0===n[a]};var a=function(a,i){var s,t,p=i[0],o=i[1],l=i[2],r=0;if(p.some((function(a){return 0!==n[a]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(l)var g=l(e)}for(a&&a(i);r<p.length;r++)t=p[r],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(g)},i=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(4587)}));i=e.O(i)})();
//# sourceMappingURL=app.db48ecbf.js.map