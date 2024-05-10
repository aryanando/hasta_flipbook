(function(){"use strict";var n={595:function(n,a,e){var i=e(5150),s=e(1006),t=e(6727);const p={class:"container-fluid"},o={class:"navbar navbar-expand-md navbar-dark",style:{"background-color":"#3a3a3a"}},r=["aria-expanded"],l=(0,s._)("span",{class:"navbar-toggler-icon"},null,-1),u=[l],g={class:"navbar-nav custom-nav"},c={class:"nav-item"},m={class:"nav-item"},h={class:"nav-item"},d={class:"nav-item"},f={class:"action-bar"},b={class:"page-num"},v=(0,s._)("p",{class:"credit"},[(0,s.Uk)(" Photos from "),(0,s._)("a",{href:"https://www.batubhayangkara.com/",target:"_blank"},"RSHB"),(0,s.Uk)(". ")],-1);function k(n,a,e,i,l,k){const w=(0,s.up)("left-icon"),y=(0,s.up)("plus-icon"),_=(0,s.up)("minus-icon"),F=(0,s.up)("right-icon"),T=(0,s.up)("Flipbook");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",p,[(0,s._)("nav",o,[(0,s._)("a",{class:"navbar-brand",id:"test",onClick:a[0]||(a[0]=n=>k.changeImage(1)),href:"#"},"Dashboard "),(0,s._)("button",{class:"navbar-toggler",type:"button",onClick:a[1]||(a[1]=(...n)=>k.toggleMenu&&k.toggleMenu(...n)),"aria-expanded":l.isMenuOpen.toString(),"aria-controls":"navbarSupportedContent","aria-label":"Toggle navigation"},u,8,r),(0,s._)("div",{class:(0,t.C_)(["collapse","navbar-collapse",{show:l.isMenuOpen}])},[(0,s._)("ul",g,[(0,s._)("li",c,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[2]||(a[2]=n=>k.changeImage(3))},"Tips-Tips")]),(0,s._)("li",m,[(0,s._)("a",{class:"nav-link",href:"#",onClick:a[3]||(a[3]=n=>k.changeImage(2))},"Jadwal")]),(0,s._)("li",h,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[4]||(a[4]=n=>k.changeImage(4))},"Kamar")]),(0,s._)("li",d,[(0,s._)("button",{class:"nav-link",href:"#",onClick:a[5]||(a[5]=n=>k.changeImage(5))},"Hyperbaric")])])],2)])]),(0,s._)("div",{id:"app",class:(0,t.C_)({"has-mouse":l.hasMouse}),onTouchstart:a[6]||(a[6]=n=>l.hasMouse=!1)},[(0,s.Wm)(T,{class:"flipbook",pages:l.pages,pagesHiRes:l.pagesHiRes,startPage:l.pageNum,ref:"flipbook",onFlipLeftStart:k.onFlipLeftStart,onFlipLeftEnd:k.onFlipLeftEnd,onFlipRightStart:k.onFlipRightStart,onFlipRightEnd:k.onFlipRightEnd,onZoomStart:k.onZoomStart,onZoomEnd:k.onZoomEnd},{default:(0,s.w5)((n=>[(0,s._)("div",f,[(0,s.Wm)(w,{class:(0,t.C_)(["btn-slide left",{disabled:!n.canFlipLeft}]),onClick:n.flipLeft},null,8,["class","onClick"]),(0,s.Wm)(y,{class:(0,t.C_)(["btn-slide plus",{disabled:!n.canZoomIn}]),onClick:n.zoomIn},null,8,["class","onClick"]),(0,s._)("span",b," Page "+(0,t.zw)(n.page)+" of "+(0,t.zw)(n.numPages),1),(0,s.Wm)(_,{class:(0,t.C_)(["btn-slide minus",{disabled:!n.canZoomOut}]),onClick:n.zoomOut},null,8,["class","onClick"]),(0,s.Wm)(F,{class:(0,t.C_)(["btn-slide right",{disabled:!n.canFlipRight}]),onClick:n.flipRight},null,8,["class","onClick"])])])),_:1},8,["pages","pagesHiRes","startPage","onFlipLeftStart","onFlipLeftEnd","onFlipRightStart","onFlipRightEnd","onZoomStart","onZoomEnd"]),v],34)],64)}var w=e(4093),y=e(3685),_=e(9980),F=e(1731),T=e(1883),H={components:{Flipbook:T.Z,LeftIcon:w.Z,RightIcon:y.Z,PlusIcon:_.Z,MinusIcon:F.Z},data(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null,isMenuOpen:!1}},methods:{onFlipLeftStart(n){console.log("flip-left-start",n)},onFlipLeftEnd(n){console.log("flip-left-end",n),window.location.hash="#"+n},onFlipRightStart(n){console.log("flip-right-start",n)},onFlipRightEnd(n){console.log("flip-right-end",n),window.location.hash="#"+n},onZoomStart(n){console.log("zoom-start",n)},onZoomEnd(n){console.log("zoom-end",n)},setPageFromHash(){const n=parseInt(window.location.hash.slice(1),10);isFinite(n)&&(this.pageNum=n)},toggleMenu(){this.isMenuOpen=!this.isMenuOpen},changeImage(n){switch(n){case 1:this.pageNum=1,this.pages=[null,"menu/cover/cover-640.png","menu/Unggulan/bayi-640.png","menu/Unggulan/hyperbaric-640.png","menu/Unggulan/pirata-640.png","menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"menu/cover/cover-1920.png","menu/Unggulan/bayi-1920.png","menu/Unggulan/hyperbaric-1920.png","menu/Unggulan/pirata-1920.png","menu/Unggulan/narkoba-1920.png "];break;case 2:this.pageNum=1,this.pages=[null,"menu/Jadwal/coverjw-640.png","menu/Jadwal/jw1-640.png","menu/Jadwal/jw1-640.png"],this.pagesHiRes=[null,"menu/Jadwal/coverjw-1920.png","menu/Jadwal/jw1-1920.png","menu/Jadwal/jw2-1920.png"];break;case 3:this.pageNum=1,this.pages=[null,"menu/Tips-tips/covertips-640.png","menu/Tips-tips/dbd-640.png","menu/Tips-tips/dbd2-640.png","menu/Tips-tips/gerd-640.png","menu/Tips-tips/gerd2-640.png","menu/Tips-tips/imunisasi-640.png","menu/Tips-tips/imunisasi2-640.png","menu/Tips-tips/stunting-640.png","menu/Tips-tips/stunting-1920.png","menu/Tips-tips/makan-640.png","menu/Tips-tips/makan2-640.png"],this.pagesHiRes=[null,"menu/Tips-tips/covertips-1920.png","menu/Tips-tips/dbd-1920.png","menu/Tips-tips/dbd2-1920.png","menu/Tips-tips/gerd-1920.png","menu/Tips-tips/gerd2-1920.png","menu/Tips-tips/imunisasi-1920.png","menu/Tips-tips/imunisasi2-1920.png","menu/Tips-tips/stunting-640.png","menu/Tips-tips/stunting-1920.png","menu/Tips-tips/makan-1920.png","menu/Tips-tips/makan2-1920.png"];break;case 4:this.pageNum=1,this.pages=[null,"menu/cover/hospital-tourism-640.png","menu/Kamar/vvip-640.png","menu/Kamar/vip-640.png","menu/Kamar/kls1-640.png","menu/Kamar/kls2-640.png","menu/Kamar/kls3-640.png"],this.pagesHiRes=[null,"menu/cover/hospital-tourism-1920.png","menu/Kamar/vvip-1920.png","menu/Kamar/vip-1920.png","menu/Kamar/kls1-1920.png","menu/Kamar/kls2-1920.png","menu/Kamar/kls3-1920.png"];break;case 5:this.pageNum=1,this.pages=[null,"menu/Hyperbaric/coverhiperbarik-640.png","menu/Hyperbaric/penjelasan-640.png","menu/Hyperbaric/prosedur-640.png","menu/Hyperbaric/syarat-640.png","menu/Hyperbaric/tarif-640.png"],this.pagesHiRes=[null,"menu/Hyperbaric/coverhiperbarik-1920.png","menu/Hyperbaric/penjelasan-1920.png","menu/Hyperbaric/prosedur-1920.png","menu/Hyperbaric/syarat-1920.png","menu/Hyperbaric/tarif-1920.png"];break;default:break}}},mounted(){window.addEventListener("keydown",(n=>{const a=this.$refs.flipbook;a&&(37==n.keyCode&&a.canFlipLeft&&a.flipLeft(),39==n.keyCode&&a.canFlipRight&&a.flipRight())})),setTimeout((()=>{this.pages=[null,"menu/cover/hospital-tourism-640.png","menu/Unggulan/bayi-640.png","menu/Unggulan/hyperbaric-640.png","menu/Unggulan/pirata-640.png","menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"menu/cover/hospital-tourism-1920.png","menu/Unggulan/bayi-1920.png","menu/Unggulan/hyperbaric-1920.png","menu/Unggulan/pirata-1920.png","menu/Unggulan/narkoba-1920.png"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},C=e(7583);const R=(0,C.Z)(H,[["render",k]]);var O=R;e(5839);(0,i.ri)(O).mount("#app")}},a={};function e(i){var s=a[i];if(void 0!==s)return s.exports;var t=a[i]={exports:{}};return n[i](t,t.exports,e),t.exports}e.m=n,function(){var n=[];e.O=function(a,i,s,t){if(!i){var p=1/0;for(u=0;u<n.length;u++){i=n[u][0],s=n[u][1],t=n[u][2];for(var o=!0,r=0;r<i.length;r++)(!1&t||p>=t)&&Object.keys(e.O).every((function(n){return e.O[n](i[r])}))?i.splice(r--,1):(o=!1,t<p&&(p=t));if(o){n.splice(u--,1);var l=s();void 0!==l&&(a=l)}}return a}t=t||0;for(var u=n.length;u>0&&n[u-1][2]>t;u--)n[u]=n[u-1];n[u]=[i,s,t]}}(),function(){e.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(a,{a:a}),a}}(),function(){e.d=function(n,a){for(var i in a)e.o(a,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){var n={143:0};e.O.j=function(a){return 0===n[a]};var a=function(a,i){var s,t,p=i[0],o=i[1],r=i[2],l=0;if(p.some((function(a){return 0!==n[a]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(r)var u=r(e)}for(a&&a(i);l<p.length;l++)t=p[l],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(u)},i=self["webpackChunkFlipbook"]=self["webpackChunkFlipbook"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(595)}));i=e.O(i)})();
//# sourceMappingURL=app.8fd0d1ed.js.map