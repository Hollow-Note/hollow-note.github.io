(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7388ab72",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("16621bfb",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n.r(e);var o={name:"hn-logo"},r=n(54),l=n(51),h=n.n(l),d=n(144),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("v-img",{attrs:{src:"/hn-logo.svg",alt:"Hollow Note Logo",width:"183","max-width":"183",contain:""}})}),[],!1,null,null,null);e.default=component.exports;h()(component,{VImg:d.a})},264:function(t,e,n){"use strict";var o={},r=n(54),l=n(51),h=n.n(l),d=n(385),c=n(390),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("hn-header"),t._v(" "),n("v-main",[n("Nuxt")],1),t._v(" "),n("hn-footer")],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{HnHeader:n(374).default,HnFooter:n(375).default}),h()(component,{VApp:d.a,VMain:c.a})},267:function(t,e,n){n(268),t.exports=n(269)},294:function(t,e,n){"use strict";n(221)},295:function(t,e,n){var o=n(15)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},300:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5c670272",content,!0,{sourceMap:!1})},301:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Roboto&display=swap);"]),o.push([t.i,'body{font-size:16px}body .v-application.theme--light{font-family:"Roboto",Helvetica,Verdana,sans-serif;font-weight:400;font-size:16px;line-height:1.5}a:focus{outline:none}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:"Libre Baskerville",serif}.h1,h1{margin-bottom:1rem;font-size:40px;font-weight:600;line-height:1}@media(min-width:576px){.h1,h1{font-size:48px}}@media(min-width:768px){.h1,h1{font-size:54px}}@media(min-width:992px){.h1,h1{font-size:60px}}@media(min-width:1200px){.h1,h1{font-size:68px}}.h2,h2{margin-bottom:1rem;font-size:34px;font-weight:600;line-height:1}@media(min-width:576px){.h2,h2{font-size:36px}}@media(min-width:768px){.h2,h2{font-size:38px}}@media(min-width:992px){.h2,h2{font-size:40px}}@media(min-width:1200px){.h2,h2{font-size:42px}}.h3,h3{margin-bottom:1rem;font-size:28px;line-height:1}@media(min-width:576px){.h3,h3{font-size:31px}}@media(min-width:768px){.h3,h3{font-size:33px}}@media(min-width:992px){.h3,h3{font-size:35px}}@media(min-width:1200px){.h3,h3{font-size:37px}}.h4,h4{margin-bottom:1rem;font-size:26px;line-height:1}@media(min-width:576px){.h4,h4{font-size:26px}}@media(min-width:768px){.h4,h4{font-size:26px}}@media(min-width:992px){.h4,h4{font-size:26px}}@media(min-width:1200px){.h4,h4{font-size:26px}}.h5,h5{font-size:23px}.emphasis{font-size:20px}.app-bar-title,.v-app-bar .row{align-items:center}.app-bar-title{display:flex;flex-direction:row}.app-bar-title .v-image{margin-right:2rem}.row{align-items:center;justify-content:center}',""]),t.exports=o},361:function(t,e,n){"use strict";n(245)},362:function(t,e,n){var o=n(15)(!1);o.push([t.i,".hn-footer[data-v-61d24bb2]{padding:2rem}.hn-footer-body[data-v-61d24bb2],.hn-footer-menu[data-v-61d24bb2]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.hn-footer-item[data-v-61d24bb2]{display:flex;flex-direction:column;margin-right:2rem}",""]),t.exports=o},367:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o}));var o=function(){return{storeLink:"https://www.etsy.com/hollow-note"}}},374:function(t,e,n){"use strict";n.r(e);var o={name:"hn-header",data:function(){return{drawer:!1,fixed:!1,items:[{icon:"mdi-store",title:"Etsy Shop",to:this.storeLink}],title:"Greeting Cards"}},computed:{storeLink:function(){return this.$store.state.storeLink}}},r=n(54),l=n(51),h=n.n(l),d=n(392),c=n(393),f=n(394),m=n(175),v=n(176),x=n(113),w=n(177),_=n(89),y=n(391),k=n(386),z=n(387),V=n(260),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hn-nav"},[n("v-navigation-drawer",{attrs:{fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{fixed:"",app:"",height:"90","elevate-on-scroll":""}},[n("v-container",[n("v-row",[n("div",{staticClass:"app-bar-title"},[n("hn-logo"),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{href:t.storeLink,target:"_blank"}},[t._v("\n          Etsy Shop\n        ")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{HnLogo:n(256).default}),h()(component,{VAppBar:d.a,VBtn:c.a,VContainer:f.a,VIcon:m.a,VList:v.a,VListItem:x.a,VListItemAction:w.a,VListItemContent:_.a,VListItemTitle:_.b,VNavigationDrawer:y.a,VRow:k.a,VSpacer:z.a,VToolbarTitle:V.a})},375:function(t,e,n){"use strict";n.r(e);var o={name:"hn-footer",data:function(){return{links:[{title:"Visit Our Shop",displayUrl:"etsy.com/hollow-note",url:""},{title:"Contact Us",displayUrl:"hello@hollow-note.com",url:"mailto:hello@hollow-note.com"},{title:"Follow Us",displayUrl:"instagram.com/hollow-note",url:"https://instagram.com/hollow-note"}]}},beforeMount:function(){this.links[0].url=this.$store.state.storeLink}},r=(n(361),n(54)),l=n(51),h=n.n(l),d=n(388),c=n(394),f=n(389),m=n(386),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"hn-footer",attrs:{absolute:!t.fixed,app:""}},[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"hn-footer-body"},[n("hn-logo"),t._v(" "),n("div",{staticClass:"hn-footer-menu"},t._l(t.links,(function(link,i){return n("div",{key:i,staticClass:"hn-footer-item"},[n("span",{staticClass:"link-title",domProps:{textContent:t._s(link.title)}}),t._v(" "),n("a",{staticClass:"link-url",attrs:{href:link.url,target:"_blank"},domProps:{textContent:t._s(link.displayUrl)}})])})),0)],1)])],1),t._v(" "),n("v-row",[n("v-col",[n("span",[t._v("© "+t._s((new Date).getFullYear())+" Hollow Note. All rights\n          reserved.")])])],1)],1)],1)}),[],!1,null,"61d24bb2",null);e.default=component.exports;h()(component,{HnLogo:n(256).default}),h()(component,{VCol:d.a,VContainer:c.a,VFooter:f.a,VRow:m.a})},82:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(294),n(54)),l=n(51),h=n.n(l),d=n(385),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;h()(component,{VApp:d.a})}},[[267,7,1,8]]]);