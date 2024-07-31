(function(){"use strict";var n={7332:function(n,e,a){a(1682),a(4105),a(1658),a(376);var i=a(5150),t=(a(9241),a(3786),a(1006)),p=a(6727),u={class:"container-fluid"},s={class:"navbar navbar-expand-md navbar-dark",style:{"background-color":"#3a3a3a"}},l=["aria-expanded"],o=(0,t._)("span",{class:"navbar-toggler-icon"},null,-1),r=[o],g={class:"navbar-nav custom-nav"},m={class:"nav-item"},c={class:"nav-item"},d={class:"nav-item"},f={class:"nav-item"},h={class:"nav-item"},b={class:"nav-item"},k={class:"action-bar"},v={class:"page-num"},y=(0,t._)("p",{class:"credit"},[(0,t.Uk)(" Photos from "),(0,t._)("a",{href:"https://www.batubhayangkara.com/",target:"_blank"},"RSHB"),(0,t.Uk)(". ")],-1);function w(n,e,a,i,o,w){var j=(0,t.up)("left-icon"),_=(0,t.up)("plus-icon"),F=(0,t.up)("minus-icon"),T=(0,t.up)("right-icon"),H=(0,t.up)("Flipbook");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",u,[(0,t._)("nav",s,[(0,t._)("a",{class:"navbar-brand",id:"test",onClick:e[0]||(e[0]=function(n){return w.changeImage(1)}),href:"#"},"Dashboard "),(0,t._)("button",{class:"navbar-toggler",type:"button",onClick:e[1]||(e[1]=function(){return w.toggleMenu&&w.toggleMenu.apply(w,arguments)}),"aria-expanded":o.isMenuOpen.toString(),"aria-controls":"navbarSupportedContent","aria-label":"Toggle navigation"},r,8,l),(0,t._)("div",{class:(0,p.C_)(["collapse","navbar-collapse",{show:o.isMenuOpen}])},[(0,t._)("ul",g,[(0,t._)("li",m,[(0,t._)("a",{class:"nav-link",href:"#",onClick:e[2]||(e[2]=function(n){return w.changeImage(3)})},"Tips-Tips")]),(0,t._)("li",c,[(0,t._)("a",{class:"nav-link",href:"#",onClick:e[3]||(e[3]=function(n){return w.changeImage(2)})},"Jadwal")]),(0,t._)("li",d,[(0,t._)("button",{class:"nav-link",href:"#",onClick:e[4]||(e[4]=function(n){return w.changeImage(4)})},"Kamar")]),(0,t._)("li",f,[(0,t._)("button",{class:"nav-link",href:"#",onClick:e[5]||(e[5]=function(n){return w.changeImage(5)})},"Hyperbaric")]),(0,t._)("li",h,[(0,t._)("button",{class:"nav-link",href:"#",onClick:e[6]||(e[6]=function(n){return w.changeImage(6)})},"Kertas Kinerja")]),(0,t._)("li",b,[(0,t._)("button",{class:"nav-link",href:"#",onClick:e[7]||(e[7]=function(n){return w.changeImage(7)})},"Bulletin")])])],2)])]),(0,t._)("div",{id:"app",class:(0,p.C_)({"has-mouse":o.hasMouse}),onTouchstart:e[8]||(e[8]=function(n){return o.hasMouse=!1})},[(0,t.Wm)(H,{class:"flipbook",pages:o.pages,pagesHiRes:o.pagesHiRes,startPage:o.pageNum,ref:"flipbook",onFlipLeftStart:w.onFlipLeftStart,onFlipLeftEnd:w.onFlipLeftEnd,onFlipRightStart:w.onFlipRightStart,onFlipRightEnd:w.onFlipRightEnd,onZoomStart:w.onZoomStart,onZoomEnd:w.onZoomEnd},{default:(0,t.w5)((function(n){return[(0,t._)("div",k,[(0,t.Wm)(j,{class:(0,p.C_)(["btn-slide left",{disabled:!n.canFlipLeft}]),onClick:n.flipLeft},null,8,["class","onClick"]),(0,t.Wm)(_,{class:(0,p.C_)(["btn-slide plus",{disabled:!n.canZoomIn}]),onClick:n.zoomIn},null,8,["class","onClick"]),(0,t._)("span",v," Page "+(0,p.zw)(n.page)+" of "+(0,p.zw)(n.numPages),1),(0,t.Wm)(F,{class:(0,p.C_)(["btn-slide minus",{disabled:!n.canZoomOut}]),onClick:n.zoomOut},null,8,["class","onClick"]),(0,t.Wm)(T,{class:(0,p.C_)(["btn-slide right",{disabled:!n.canFlipRight}]),onClick:n.flipRight},null,8,["class","onClick"])])]})),_:1},8,["pages","pagesHiRes","startPage","onFlipLeftStart","onFlipLeftEnd","onFlipRightStart","onFlipRightEnd","onZoomStart","onZoomEnd"]),y],34)],64)}a(4528);var j=a(4093),_=a(3685),F=a(9980),T=a(1731),H=a(1883),C={components:{Flipbook:H.Z,LeftIcon:j.Z,RightIcon:_.Z,PlusIcon:F.Z,MinusIcon:T.Z},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null,isMenuOpen:!1}},methods:{onFlipLeftStart:function(n){console.log("flip-left-start",n)},onFlipLeftEnd:function(n){console.log("flip-left-end",n),window.location.hash="#"+n},onFlipRightStart:function(n){console.log("flip-right-start",n)},onFlipRightEnd:function(n){console.log("flip-right-end",n),window.location.hash="#"+n},onZoomStart:function(n){console.log("zoom-start",n)},onZoomEnd:function(n){console.log("zoom-end",n)},setPageFromHash:function(){var n=parseInt(window.location.hash.slice(1),10);isFinite(n)&&(this.pageNum=n)},toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},changeImage:function(n){switch(n){case 1:this.pageNum=1,this.pages=[null,"menu/cover/hospi-640.png","menu/Unggulan/bayi-640.png","menu/Unggulan/hyperbaric2-640.png","menu/Unggulan/pirata-640.png","menu/Unggulan/narkoba-640.png"],this.pagesHiRes=[null,"menu/cover/hospi-1920.png","menu/Unggulan/bayi-1920.png","menu/Unggulan/hyperbaric2-1920.png","menu/Unggulan/pirata-1920.png","menu/Unggulan/narkoba-1920.png "];break;case 2:this.pageNum=1,this.pages=[null,"menu/Jadwal/coverjw-640.png","menu/Jadwal/jw1-640.png","menu/Jadwal/jw2-640.png"],this.pagesHiRes=[null,"menu/Jadwal/coverjw-1920.png","menu/Jadwal/jw1-1920.png","menu/Jadwal/jw2-1920.png"];break;case 3:this.pageNum=1,this.pages=[null,"menu/Tips-tips/covertips-640.png","menu/Tips-tips/dbd-640.png","menu/Tips-tips/dbd2-640.png","menu/Tips-tips/gerd-640.png","menu/Tips-tips/gerd2-640.png","menu/Tips-tips/imunisasi-640.png","menu/Tips-tips/imunisasi2-640.png","menu/Tips-tips/stunting-640.png","menu/Tips-tips/stunting-1920.png","menu/Tips-tips/makan-640.png","menu/Tips-tips/makan2-640.png"],this.pagesHiRes=[null,"menu/Tips-tips/covertips-1920.png","menu/Tips-tips/dbd-1920.png","menu/Tips-tips/dbd2-1920.png","menu/Tips-tips/gerd-1920.png","menu/Tips-tips/gerd2-1920.png","menu/Tips-tips/imunisasi-1920.png","menu/Tips-tips/imunisasi2-1920.png","menu/Tips-tips/stunting-640.png","menu/Tips-tips/stunting-1920.png","menu/Tips-tips/makan-1920.png","menu/Tips-tips/makan2-1920.png"];break;case 4:this.pageNum=1,this.pages=[null,"menu/Kamar/coverkamar-640.png","menu/Kamar/vvip-640.png","menu/Kamar/vip-640.png","menu/Kamar/kls1-640.png","menu/Kamar/kls2-640.png","menu/Kamar/kls3-640.png"],this.pagesHiRes=[null,"menu/Kamar/coverkamar-1920.png","menu/Kamar/vvip-1920.png","menu/Kamar/vip-1920.png","menu/Kamar/kls1-1920.png","menu/Kamar/kls2-1920.png","menu/Kamar/kls3-1920.png"];break;case 5:this.pageNum=1,this.pages=[null,"menu/Hyperbaric/coverhiperbarik-640.png","menu/Hyperbaric/penjelasan-640.png","menu/Hyperbaric/prosedur-640.png","menu/Hyperbaric/syarat-640.png","menu/Hyperbaric/tarif1-640.png"],this.pagesHiRes=[null,"menu/Hyperbaric/coverhiperbarik-1920.png","menu/Hyperbaric/penjelasan-1920.png","menu/Hyperbaric/prosedur-1920.png","menu/Hyperbaric/syarat-1920.png","menu/Hyperbaric/tarif1-1920.png"];break;case 6:this.pageNum=1,this.pages=[null,"menu/dipa/dipa-640.png","menu/dipa/1.jpg","menu/dipa/2.jpg","menu/dipa/3.jpg","menu/dipa/4.jpg","menu/dipa/5.jpg","menu/dipa/6.jpg","menu/dipa/7.jpg","menu/dipa/8.jpg","menu/dipa/9.jpg","menu/dipa/10.jpg"],this.pagesHiRes=[null,"menu/dipa/dipa-1920.png","menu/dipa/1.jpg","menu/dipa/2.jpg","menu/dipa/3.jpg","menu/dipa/4.jpg","menu/dipa/5.jpg","menu/dipa/6.jpg","menu/dipa/7.jpg","menu/dipa/8.jpg","menu/dipa/9.jpg","menu/dipa/10.jpg"];break;case 7:this.pageNum=1,this.pages=[null,"menu/Bulletin/cover buletin - 640.png","menu/Bulletin/Profil -640.png","menu/Bulletin/Profil2 -640.png","menu/Bulletin/pemilu - 640.png","menu/Bulletin/baktikes1-640.png","menu/Bulletin/baktikes2-640.png","menu/Bulletin/baktikes3-640.png","menu/Bulletin/baktikes4-640.png","menu/Bulletin/layanan hyperbaric - 640.png","menu/Bulletin/layanan pirata-640.png","menu/Bulletin/layanan perluasan - 640.png"],this.pagesHiRes=[null,"menu/Bulletin/cover buletin - 1920.png","menu/Bulletin/Profil -1920.png","menu/Bulletin/Profil2 -1920.png","menu/Bulletin/pemilu - 1920.png","menu/Bulletin/baktikes1-1920.png","menu/Bulletin/baktikes2-1920.png","menu/Bulletin/baktikes3-1920.png","menu/Bulletin/baktikes4-1920.png","menu/Bulletin/layanan hyperbaric - 1920.png","menu/Bulletin/layanan pirata-1920.png","menu/Bulletin/layanan perluasan - 1920.png"];break;default:break}}},mounted:function(){var n=this;window.addEventListener("keydown",(function(e){var a=n.$refs.flipbook;a&&(37==e.keyCode&&a.canFlipLeft&&a.flipLeft(),39==e.keyCode&&a.canFlipRight&&a.flipRight())})),setTimeout((function(){n.pages=[null,"menu/cover/hospi-640.png","menu/Unggulan/bayi-640.png","menu/Unggulan/hyperbaric2-640.png","menu/Unggulan/pirata-640.png","menu/Unggulan/narkoba-640.png"],n.pagesHiRes=[null,"menu/cover/hospi-1920.png","menu/Unggulan/bayi-1920.png","menu/Unggulan/hyperbaric2-1920.png","menu/Unggulan/pirata-1920.png","menu/Unggulan/narkoba-1920.png"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},R=a(7583);const B=(0,R.Z)(C,[["render",w]]);var O=B;a(5839);(0,i.ri)(O).mount("#app")}},e={};function a(i){var t=e[i];if(void 0!==t)return t.exports;var p=e[i]={exports:{}};return n[i](p,p.exports,a),p.exports}a.m=n,function(){var n=[];a.O=function(e,i,t,p){if(!i){var u=1/0;for(r=0;r<n.length;r++){i=n[r][0],t=n[r][1],p=n[r][2];for(var s=!0,l=0;l<i.length;l++)(!1&p||u>=p)&&Object.keys(a.O).every((function(n){return a.O[n](i[l])}))?i.splice(l--,1):(s=!1,p<u&&(u=p));if(s){n.splice(r--,1);var o=t();void 0!==o&&(e=o)}}return e}p=p||0;for(var r=n.length;r>0&&n[r-1][2]>p;r--)n[r]=n[r-1];n[r]=[i,t,p]}}(),function(){a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,{a:e}),e}}(),function(){a.d=function(n,e){for(var i in e)a.o(e,i)&&!a.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};a.O.j=function(e){return 0===n[e]};var e=function(e,i){var t,p,u=i[0],s=i[1],l=i[2],o=0;if(u.some((function(e){return 0!==n[e]}))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);if(l)var r=l(a)}for(e&&e(i);o<u.length;o++)p=u[o],a.o(n,p)&&n[p]&&n[p][0](),n[p]=0;return a.O(r)},i=self["webpackChunkFlipbook"]=self["webpackChunkFlipbook"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(7332)}));i=a.O(i)})();
//# sourceMappingURL=app-legacy.2544173c.js.map