(function(e){function t(t){for(var s,o,a=t[0],u=t[1],c=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(s=!1)}s&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},i={app:0},n=[];function o(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"73c46966"}[e]+".js"}function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,s){r=i[e]=[t,s]}));t.push(r[2]=s);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=o(e);var c=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=i[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,r[1](c)}i[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/bookie/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4b7e":function(e,t,r){e.exports=r.p+"img/info.28e4004d.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.userMsg.txt?r("user-msg",{attrs:{type:e.userMsg.type,msgStr:e.userMsg.txt}}):e._e(),r("app-header"),r("router-view"),r("app-footer")],1)},n=[],o=(r("96cf"),r("1da1")),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app-header",class:e.onTop?"on-top":""},[r("section",{staticClass:"main-layout flex j-between a-center"},[r("router-link",{attrs:{to:"/"}},[r("div",{staticClass:"logo-container flex a-center pointer"},[r("div",{staticClass:"logo"}),r("p",[e._v("Bookie")])])]),r("nav",[r("ul",{staticClass:"clean-list"},[r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])],1)])},u=[],c=(r("b0c0"),{data:function(){return{onTop:!1}},created:function(){window.addEventListener("scroll",this.onScroll),this.onScroll()},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){this.onTop=window.scrollY<=50&&"Home"===this.$route.name}},watch:{$route:function(){this.onScroll()}}}),l=c,p=r("2877"),d=Object(p["a"])(l,a,u,!1,null,null,null),m=d.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app-footer"},[r("section",{staticClass:"main-layout"})])}],h={},f=Object(p["a"])(h,g,b,!1,null,null,null),v=f.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"user-msg flex a-center",class:e.type},[r("img",{attrs:{src:e.imgSrc}}),r("p",[e._v(e._s(e.msgStr))]),r("button",{on:{click:e.hideUserMsg}},[e._v("X")])])},y=[],A={props:{type:String,msgStr:String},computed:{imgSrc:function(){return r("bc27")("./".concat(this.type,".svg"))}},methods:{hideUserMsg:function(){this.$store.dispatch({type:"setUserMsg",userMsg:{type:null,txt:""}})}}},w=A,C=Object(p["a"])(w,k,y,!1,null,null,null),x=C.exports,S={components:{AppHeader:m,AppFooter:v,userMsg:x},computed:{userMsg:function(){return this.$store.getters.userMsg}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch({type:"loadBooks"});case 2:case"end":return t.stop()}}),t)})))()}},_=S,R=Object(p["a"])(_,i,n,!1,null,null,null),P=R.exports,B=(r("d3b7"),r("8c4f")),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home"},[r("div",{staticClass:"hero"}),r("article",{staticClass:"main-layout"},[r("book-app")],1)])},j=[],D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"book-app"},[s("div",{staticClass:"top-container flex j-between a-center"},[s("book-filter",{attrs:{initialStr:e.initialFilterStr},on:{filtered:e.onFilter}}),s("book-sorter"),s("div",{staticClass:"flex a-center"},[s("img",{staticClass:"pointer",attrs:{src:r("83c6"),alt:""},on:{click:function(t){e.displayStyle="grid"}}}),s("div",{staticClass:"seperator"}),s("img",{staticClass:"pointer",attrs:{src:r("84b7"),alt:""},on:{click:function(t){e.displayStyle="list"}}})])],1),s("book-list",{attrs:{books:e.booksToShow,displayStyle:e.displayStyle}})],1)},q=[],M=(r("ac1f"),r("841c"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"book-filter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.txt,expression:"filterBy.txt"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:e.filterBy.txt},on:{input:[function(t){t.target.composing||e.$set(e.filterBy,"txt",t.target.value)},e.filtered]}})])}),U=[],E=r("5530"),T={props:["initialStr"],data:function(){return{filterBy:{txt:this.initialStr||""}}},methods:{filtered:function(){this.$emit("filtered",Object(E["a"])({},this.filterBy))}}},I=T,L=Object(p["a"])(I,M,U,!1,null,null,null),$=L.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"book-sorter flex a-center"},[r("label",{staticClass:"pointer",on:{click:function(t){return e.onChangeParams("name")}}},[e._v("A-z")]),"name"===e.sortParams.by?r("i",{staticClass:"arrow",class:e.sortParams.directionReversed?"up":"down"}):e._e(),r("div",{staticClass:"seperator"}),r("label",{staticClass:"pointer",on:{click:function(t){return e.onChangeParams("price")}}},[e._v("Price")]),"price"===e.sortParams.by?r("i",{staticClass:"arrow",class:e.sortParams.directionReversed?"up":"down"}):e._e(),r("div",{staticClass:"seperator"}),r("label",{staticClass:"pointer",on:{click:function(t){return e.onChangeParams("date")}}},[e._v("Date")]),"date"===e.sortParams.by?r("i",{staticClass:"arrow",class:e.sortParams.directionReversed?"up":"down"}):e._e()])},H=[],Y={data:function(){return{books:this.$store.getters.allBooks,sortParams:{by:"",directionReversed:!1}}},methods:{onChangeParams:function(e){switch(e){case"name":"name"===this.sortParams.by?this.sortParams.directionReversed=!this.sortParams.directionReversed:this.sortParams.by="name";break;case"price":"price"===this.sortParams.by?this.sortParams.directionReversed=!this.sortParams.directionReversed:this.sortParams.by="price";break;case"date":"date"===this.sortParams.by?this.sortParams.directionReversed=!this.sortParams.directionReversed:this.sortParams.by="date";break}this.onSortBooks()},onSortBooks:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch({type:"sortBooks",sortParams:e.sortParams});case 2:case"end":return t.stop()}}),t)})))()}}},J=Y,F=Object(p["a"])(J,N,H,!1,null,null,null),Q=F.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"book-list",class:e.displayClass},e._l(e.books,(function(t){return r("book-preview",{key:t._id,attrs:{book:t,displayStyle:e.displayStyle}})})),1)},Z=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("article",{staticClass:"book-preview flex",class:e.displayClass},[r("router-link",{staticClass:"img-container",attrs:{to:"/book/"+e.book._id}},[r("img",{attrs:{src:e.book.thumbnail}}),e.book.listPrice.isOnSale?r("div",[r("label",{staticClass:"pointer"},[e._v("SALE")])]):e._e()]),r("div",{staticClass:"flex col full-width"},[r("div",{staticClass:"title-container flex a-center"},[r("strong",{staticClass:"title"},[e._v(e._s(e.book.title))]),r("div",{staticClass:"seperator horizontal"}),r("span",{staticClass:"muted"},[e._v(e._s(e.book.publishedDate))])]),e._l(e.book.authors,(function(t){return r("ul",{key:t,staticClass:"authors",attrs:{author:t}},[r("li",[e._v(e._s(t))])])})),"list"===e.displayStyle?r("p",{staticClass:"description grow"},[e._v(e._s(e.book.description))]):e._e(),"grid"===e.displayStyle?r("long-txt",{staticClass:"description grow",attrs:{txt:e.book.description}}):e._e(),r("small",{staticClass:"book-length muted"},[e._v(e._s(e.readLength))]),r("div",{staticClass:"flex j-between a-center"},[r("label",{staticClass:"price",class:[e.book.listPrice.amount>150?"red":"",e.book.listPrice.amount<20?"green":""]},[e._v(e._s(e.currency)+" "+e._s(e.book.listPrice.amount))]),r("aside",[e._v(e._s(e.age))])])],2)],1),"list"===e.displayStyle?r("div",{staticClass:"border-bottom"}):e._e()])},X=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"d-inline"},[e._v(e._s(e.longTxt))]),r("i",{staticClass:"arrow d-inblock muted pointer",class:e.isLongTxtShown?"":"down",on:{click:function(t){e.isLongTxtShown=!e.isLongTxtShown}}})])},K=[],W={props:["txt"],data:function(){return{isLongTxtShown:!1}},computed:{longTxt:function(){var e="";return e=this.isLongTxtShown?this.txt:this.txt.substring(0,50)+"...",e}}},ee=W,te=Object(p["a"])(ee,z,K,!1,null,null,null),re=te.exports,se=(r("d81d"),r("7db0"),r("c740"),r("4160"),r("a434"),r("159b"),r("2909")),ie=(r("99af"),r("25f0"),{saveToStorage:ne,loadFromStorage:oe,getRandomInt:ue,getRandomId:ae});function ne(e,t){localStorage.setItem(e,JSON.stringify(t)||null)}function oe(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}function ae(){var e=Date.now().toString(16),t=ue(1e3,9999).toString(16),r=ue(1e3,9999).toString(16);return"".concat(r,"-").concat(e,"-").concat(t).toUpperCase()}function ue(e,t){var r=e>=t?e+1:t+1,s=e<=t?e:t;return Math.floor(Math.random()*(r-s))+s}var ce="_id",le={query:pe,get:de,remove:ge,post:he,put:ve,insert:ye};function pe(e){var t=ie.loadFromStorage(e)||[];return Promise.resolve(t)}function de(e,t){return me.apply(this,arguments)}function me(){return me=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:return s=e.sent,e.abrupt("return",s.find((function(e){return e[ce]===r})));case 4:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}function ge(e,t){return be.apply(this,arguments)}function be(){return be=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:if(s=e.sent,i=s.findIndex((function(e){return e[ce]===r})),-1!==i){e.next=6;break}throw new Error("something went wrong");case 6:return s.splice(i,1),ie.saveToStorage(t,s),e.abrupt("return",Promise.resolve());case 9:case"end":return e.stop()}}),e)}))),be.apply(this,arguments)}function he(e,t){return fe.apply(this,arguments)}function fe(){return fe=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:return s=e.sent,r[ce]=ie.getRandomId(),s.push(r),ie.saveToStorage(t,s),e.abrupt("return",Promise.resolve(r));case 7:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}function ve(e,t){return ke.apply(this,arguments)}function ke(){return ke=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:if(s=e.sent,i=s.findIndex((function(e){return e[ce]===r[ce]})),-1!==i){e.next=6;break}throw new Error("something went wrong");case 6:return s[i]=r,ie.saveToStorage(t,s),e.abrupt("return",Promise.resolve(r));case 9:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}function ye(e,t){return Ae.apply(this,arguments)}function Ae(){return Ae=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:return s=e.sent,r.forEach((function(e){return e[ce]=ie.getRandomId()})),s.push.apply(s,Object(se["a"])(r)),ie.saveToStorage(t,s),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)}))),Ae.apply(this,arguments)}var we="books",Ce={query:xe,get:_e,remove:Re,save:Pe,getEmptyBook:De,getCurrency:Be,getReadLength:Oe,defineAge:je};function xe(){return Se.apply(this,arguments)}function Se(){return Se=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le.query(we);case 2:if(t=e.sent,t&&t.length){e.next=7;break}return t=qe().map((function(e){return e.reviews=[],e})),e.next=7,le.insert(we,t);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),Se.apply(this,arguments)}function _e(e){return le.get(we,e)}function Re(e){return le.delete(we,e)}function Pe(e){return e._id?le.put(we,e):le.post(we,e)}function Be(e){switch(e.toUpperCase(),e){case"ILS":return"₪";case"EUR":return"€";case"USD":return"$";default:return}}function Oe(e){return e>500?"Long Reading":e>200?"Decent Reading":"Light Reading"}function je(e){var t=(new Date).getFullYear();return t-e>10?"Veteran Book":t-e<1?"New!":void 0}function De(){return{id:"",title:"",subtitle:"",authors:["",""],publishedDate:0,description:"",pageCount:0,categories:["",""],thumbnail:" ",language:"",listPrice:{amount:0,currencyCode:"",isOnSale:!0}}}function qe(){return[{id:"OXeMG8wNskc",title:"metus hendrerit",subtitle:"mi est eros convallis auctor arcu dapibus himenaeos",authors:["Barbara Cartland"],publishedDate:1999,description:"placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",pageCount:713,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/20.jpg",language:"en",listPrice:{amount:109,currencyCode:"EUR",isOnSale:!1}},{id:"JYOJa2NpSCq",title:"morbi",subtitle:"lorem euismod dictumst inceptos mi",authors:["Barbara Cartland"],publishedDate:1978,description:"aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",pageCount:129,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/14.jpg",language:"sp",listPrice:{amount:44,currencyCode:"EUR",isOnSale:!0}},{id:"1y0Oqts35DQ",title:"at viverra venenatis",subtitle:"gravida libero facilisis rhoncus urna etiam",authors:["Dr. Seuss"],publishedDate:1999,description:"lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",pageCount:972,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/2.jpg",language:"he",listPrice:{amount:108,currencyCode:"ILS",isOnSale:!1}},{id:"kSnfIJyikTP",title:"dictum",subtitle:"augue eu consectetur class curabitur conubia ligula in ullamcorper",authors:["Danielle Steel"],publishedDate:1978,description:"interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",pageCount:303,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/16.jpg",language:"en",listPrice:{amount:30,currencyCode:"EUR",isOnSale:!0}},{id:"f4iuVmbuKCC",title:"sem himenaeos aptent",subtitle:"interdum per habitasse luctus purus est",authors:["Dr. Seuss"],publishedDate:2011,description:"et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",pageCount:337,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/12.jpg",language:"sp",listPrice:{amount:19,currencyCode:"USD",isOnSale:!1}},{id:"U2rfZO6oBZf",title:"mi ante posuere",subtitle:"sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",authors:["Leo Tolstoy"],publishedDate:1978,description:"senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",pageCount:748,categories:["Computers","Hack","Witcher"],thumbnail:"http://coding-academy.org/books-photos/1.jpg",language:"en",listPrice:{amount:91,currencyCode:"USD",isOnSale:!0}},{id:"xI0wrXaaAcq",title:"non",subtitle:"leo tortor per dapibus mattis ut conubia porttitor ligula viverra",authors:["Leo Tolstoy"],publishedDate:2011,description:"nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",pageCount:65,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/14.jpg",language:"he",listPrice:{amount:90,currencyCode:"USD",isOnSale:!1}},{id:"9laHCEdSpFy",title:"tristique",subtitle:"consectetur a eu tincidunt condimentum amet nisi",authors:["Dr. Seuss"],publishedDate:1999,description:"magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",pageCount:299,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/11.jpg",language:"he",listPrice:{amount:176,currencyCode:"EUR",isOnSale:!1}},{id:"nGhVwZvGCGp",title:"urna ornare gravida",subtitle:"sem vestibulum semper convallis pharetra tempor himenaeos ut",authors:["Jin Yong"],publishedDate:2011,description:"porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",pageCount:803,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/10.jpg",language:"sp",listPrice:{amount:116,currencyCode:"USD",isOnSale:!0}},{id:"Q8Q9Lsd03BD",title:"consequat neque volutpat",subtitle:"vel quis taciti fermentum feugiat ullamcorper curae praesent",authors:["Dr. Seuss"],publishedDate:1978,description:"curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",pageCount:891,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/5.jpg",language:"en",listPrice:{amount:145,currencyCode:"EUR",isOnSale:!1}},{id:"bd7a76kARao",title:"risus",subtitle:"pretium bibendum pharetra curabitur quisque dictumst",authors:["Danielle Steel"],publishedDate:2018,description:"auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",pageCount:86,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/16.jpg",language:"sp",listPrice:{amount:157,currencyCode:"ILS",isOnSale:!0}},{id:"qKyG0vqeO3e",title:"interdum etiam vulputate",subtitle:"velit sapien eget tincidunt nunc tortor",authors:["Danielle Steel"],publishedDate:2018,description:"aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",pageCount:882,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/17.jpg",language:"sp",listPrice:{amount:57,currencyCode:"USD",isOnSale:!0}},{id:"2RvT48ZNInj",title:"sagittis justo",subtitle:"etiam primis proin praesent placerat nisi fermentum nisi",authors:["Agatha Christie"],publishedDate:2011,description:"nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",pageCount:598,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/8.jpg",language:"en",listPrice:{amount:167,currencyCode:"ILS",isOnSale:!1}},{id:"5z2s9pDXAYj",title:"quam ullamcorper himenaeos",subtitle:"ut placerat eu dapibus sapien sodales laoreet",authors:["Danielle Steel"],publishedDate:1999,description:"etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",pageCount:608,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/3.jpg",language:"he",listPrice:{amount:150,currencyCode:"USD",isOnSale:!0}},{id:"zBZu5cDEWha",title:"quis",subtitle:"suscipit turpis etiam turpis libero lobortis",authors:["Jin Yong"],publishedDate:2011,description:"etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",pageCount:583,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/6.jpg",language:"en",listPrice:{amount:58,currencyCode:"ILS",isOnSale:!0}},{id:"aOI7tQuPZ2f",title:"aliquam aliquet dapibus",subtitle:"neque eu purus euismod placerat adipiscing odio egestas consequat",authors:["Leo Tolstoy"],publishedDate:2011,description:"dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",pageCount:497,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/7.jpg",language:"en",listPrice:{amount:78,currencyCode:"USD",isOnSale:!1}},{id:"WBooB82Uvwu",title:"class",subtitle:"elit enim ultricies amet imperdiet a molestie class elementum venenatis",authors:["Danielle Steel"],publishedDate:1999,description:"rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",pageCount:804,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/10.jpg",language:"en",listPrice:{amount:118,currencyCode:"ILS",isOnSale:!1}},{id:"xm1z5bbZjlS",title:"vitae",subtitle:"class habitant at commodo semper ligula a bibendum",authors:["Leo Tolstoy"],publishedDate:1999,description:"himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",pageCount:231,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/12.jpg",language:"he",listPrice:{amount:60,currencyCode:"EUR",isOnSale:!1}},{id:"u3j6QIKLlJb",title:"rhoncus vivamus",subtitle:"nullam class risus amet senectus scelerisque etiam curabitur",authors:["Agatha Christie"],publishedDate:1978,description:"torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",pageCount:652,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/20.jpg",language:"he",listPrice:{amount:110,currencyCode:"USD",isOnSale:!0}},{id:"vxYYYdVlEH3",title:"donec mi ullamcorper",subtitle:"varius malesuada augue molestie sollicitudin faucibus mi eu tempus",authors:["William Shakespeare"],publishedDate:2011,description:"aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",pageCount:904,categories:["Computers","Hack"],thumbnail:"http://coding-academy.org/books-photos/2.jpg",language:"sp",listPrice:{amount:186,currencyCode:"ILS",isOnSale:!0}}]}var Me,Ue,Ee={props:{book:Object,displayStyle:String},components:{LongTxt:re},computed:{displayClass:function(){return"list"===this.displayStyle?"disp-list":"disp-grid col"},currency:function(){return Ce.getCurrency(this.book.listPrice.currencyCode)},age:function(){return Ce.defineAge(this.book.publishedDate)},readLength:function(){return Ce.getReadLength(this.book.pageCount)}},setup:function(){return{bookService:Ce}}},Te=Ee,Ie=Object(p["a"])(Te,V,X,!1,null,null,null),Le=Ie.exports,$e={props:["books","displayStyle"],components:{BookPreview:Le},computed:{displayClass:function(){return"list"===this.displayStyle?"disp-list":"disp-grid grid j-center"}}},Ne=$e,He=Object(p["a"])(Ne,G,Z,!1,null,null,null),Ye=He.exports,Je={components:{BookList:Ye,BookFilter:$,BookSorter:Q},data:function(){return{displayStyle:"list"}},methods:{onFilter:function(e){this.$store.commit({type:"setFilter",filterBy:e})}},computed:{booksToShow:function(){return this.$store.getters.booksToShow},initialFilterStr:function(){return this.$route.query.search||""}}},Fe=Je,Qe=Object(p["a"])(Fe,D,q,!1,null,null,null),Ge=Qe.exports,Ze={components:{BookApp:Ge}},Ve=Ze,Xe=Object(p["a"])(Ve,O,j,!1,null,null,null),ze=Xe.exports,Ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.book?r("section",{staticClass:"book-details main-layout m-page"},[r("label",{staticClass:"title d-block"},[e._v(e._s(e.book.title))]),r("div",{staticClass:"flex"},[r("img",{attrs:{src:e.book.thumbnail}}),r("div",{staticClass:"info-container flex col"},[r("h3",[e._v("About This Book")]),r("small",[e._v("Authors:")]),e._l(e.book.authors,(function(t){return r("ul",{key:t,staticClass:"authors",attrs:{author:t}},[r("li",[e._v(e._s(t))])])})),r("small",{staticClass:"muted"},[e._v("Published: "+e._s(e.book.publishedDate))]),r("p",{staticClass:"description"},[e._v(e._s(e.book.description))]),r("div",{staticClass:"categories-container grow"},e._l(e.book.categories,(function(t){return r("ul",{key:t,staticClass:"categories clean-list clr1 pointer",attrs:{category:t}},[r("li",{on:{click:function(r){return e.$router.push({path:"/",query:{search:t}})}}},[e._v("#"+e._s(t))])])})),0),r("div",{staticClass:"price-container flex j-between"},[r("strong",[e._v(" "+e._s(e.currency)+" "+e._s(e.book.listPrice.amount)+" ")]),r("small",{staticClass:"muted"},[e._v(e._s(e.readLength))]),r("label",{style:{visibility:e.age?"visible":"hidden"}},[e._v("- "+e._s(e.age))])]),r("button",{staticClass:"my-btn btn-back",on:{click:function(t){return e.$router.push("/")}}},[e._v("Back")])],2)]),r("div",{staticClass:"review-top-container flex a-center"},[r("h3",[e._v("Reviews")]),r("button",{staticClass:"btn-add-review",on:{click:function(t){return e.$refs.reviewAddModal.showModal()}}},[e._v("+")]),r("review-add-modal",{ref:"reviewAddModal",on:{onPostReview:e.postReview}})],1),r("review-list",{attrs:{reviews:e.book.reviews}}),e.book.reviews&&e.book.reviews.length?e._e():r("p",{staticClass:"no-reviews-yet muted"},[e._v("No reviews yet...")])],1):e._e()},We=[],et=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"review-list"},e._l(e.reviews,(function(e){return r("review-preview",{key:e._id,attrs:{review:e}})})),1)},tt=[],rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("article",{staticClass:"review-preview"},[r("small",{staticClass:"muted"},[e._v(e._s(new Date(e.review.createdAt).toLocaleDateString("it-IT")))]),r("star-rating",{attrs:{"read-only":"",increment:.5,"star-size":18,rating:e.review.rating,"text-class":"rating-txt"}}),r("p",[e._v(e._s(e.review.txt))])],1),r("div",{staticClass:"border-bottom"})])},st=[],it=r("5b3d"),nt=r.n(it),ot={components:{StarRating:nt.a},props:["review"]},at=ot,ut=Object(p["a"])(at,rt,st,!1,null,null,null),ct=ut.exports,lt={props:["reviews"],components:{ReviewPreview:ct}},pt=lt,dt=Object(p["a"])(pt,et,tt,!1,null,null,null),mt=dt.exports,gt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",{attrs:{name:"review-add-modal"}},[r("div",{staticClass:"review-add-modal flex col j-between"},[r("div",{staticClass:"flex j-between a-center"},[r("h3",[e._v("Share your opinion")]),r("star-rating",{attrs:{"star-size":22,increment:.5,"show-rating":!1,rating:5},on:{"rating-selected":e.onSelectRating}})],1),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.txt,expression:"review.txt"}],domProps:{value:e.review.txt},on:{input:function(t){t.target.composing||e.$set(e.review,"txt",t.target.value)}}}),e._v(" "),r("div",{staticClass:"btn-group flex"},[r("button",{staticClass:"btn-back",on:{click:e.hideModal}},[e._v("Back")]),r("button",{staticClass:"my-btn btn-post",on:{click:e.onPostReview}},[e._v("Post")])])])])},bt=[],ht={components:{StarRating:nt.a},data:function(){return{review:{rating:5,txt:""}}},methods:{showModal:function(){this.$modal.show("review-add-modal")},hideModal:function(){this.$modal.hide("review-add-modal")},onSelectRating:function(e){this.review.rating=e},onPostReview:function(){this.$emit("onPostReview",this.review),delete this.review,this.hideModal()}}},ft=ht,vt=Object(p["a"])(ft,gt,bt,!1,null,null,null),kt=vt.exports,yt={components:{ReviewList:mt,ReviewAddModal:kt},computed:{book:function(){return this.$store.getters.selectedBook},currency:function(){return Ce.getCurrency(this.book.listPrice.currencyCode)},age:function(){return Ce.defineAge(this.book.publishedDate)},readLength:function(){return Ce.getReadLength(this.book.pageCount)}},methods:{getBook:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch({type:"getBookById",bookId:e.$route.params.id});case 2:case"end":return t.stop()}}),t)})))()},postReview:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=JSON.parse(JSON.stringify(t.book)),e._id=ie.getRandomId(),e.createdAt=Date.now(),e.by=t.$store.getters.loggedInUser._id,s.reviews.unshift(e),r.next=7,t.$store.commit({type:"postReview",reviewToPost:e});case 7:return r.prev=7,r.next=10,t.$store.dispatch({type:"saveBook",book:s});case 10:t.$store.dispatch({type:"setUserMsg",userMsg:{type:"success",txt:"Review Posted"}}),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](7),t.$store.dispatch({type:"setUserMsg",userMsg:{type:"failure",txt:"Please try again"}});case 16:case"end":return r.stop()}}),r,null,[[7,13]])})))()}},created:function(){this.getBook()}},At=yt,wt=Object(p["a"])(At,Ke,We,!1,null,null,null),Ct=wt.exports,xt={},St=Object(p["a"])(xt,Me,Ue,!1,null,null,null),_t=St.exports;s["a"].use(B["a"]);var Rt=[{path:"/",name:"Home",component:ze},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"a1d1"))}},{path:"/book/edit/:id?",component:_t},{path:"/book/:id",component:Ct}],Pt=new B["a"]({routes:Rt}),Bt=Pt,Ot=r("2f62"),jt=(r("4de4"),r("a9e3"),r("4d63"),{strict:!0,state:{books:null,filterBy:null,selectedBook:null},getters:{booksToShow:function(e){var t=e.books;if(!e.filterBy)return t;var r=new RegExp(e.filterBy.txt,"i"),s=t.filter((function(e){return r.test(e.title)||r.test(e.categories)}));return s},selectedBook:function(e){return e.selectedBook},allBooks:function(e){return e.books}},mutations:{setBooks:function(e,t){e.books=t.books},setFilter:function(e,t){var r=t.filterBy;e.filterBy=r},removeBook:function(e,t){var r=t.bookId,s=e.books.findIndex((function(e){return e._id===r}));e.books.splice(s,1)},saveBook:function(e,t){var r=t.book;console.log(e,r);var s=e.books.findIndex((function(e){return e._id===r._id}));-1===s?e.books.push(r):e.books.splice(s,1,r)},setSelectedBook:function(e,t){var r=t.book;e.selectedBook=r},sortBooks:function(e,t){var r=t.sortParams;switch(r.by){case"name":return r.directionReversed?e.books.sort((function(e,t){return e.title<t.title?1:-1})):e.books.sort((function(e,t){return e.title<t.title?-1:1}));case"price":return r.directionReversed?e.books.sort((function(e,t){return Number(t.listPrice.amount)-Number(e.listPrice.amount)})):e.books.sort((function(e,t){return Number(e.listPrice.amount)-Number(t.listPrice.amount)}));case"date":return r.directionReversed?e.books.sort((function(e,t){return Number(e.publishedDate)-Number(t.publishedDate)})):e.books.sort((function(e,t){return Number(t.publishedDate)-Number(e.publishedDate)}))}},postReview:function(e,t){var r=t.reviewToPost;e.selectedBook.reviews.unshift(r)}},actions:{loadBooks:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ce.query();case 2:r=t.sent,e.commit({type:"setBooks",books:r});case 4:case"end":return t.stop()}}),t)})))()},removeBook:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.bookId,r.prev=1,r.next=4,Ce.remove(s);case 4:e.commit({type:"removeBook",bookId:s}),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](1),e.dispatch({type:"setMsg",msgStr:"something went wrong"}),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()},sortBooks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=e.commit,i=t.sortParams,s({type:"sortBooks",sortParams:i});case 3:case"end":return r.stop()}}),r)})))()},saveBook:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.commit,i=t.book,r.next=4,Ce.save(i);case 4:n=r.sent,s({type:"saveBook",book:n});case 6:case"end":return r.stop()}}),r)})))()},getBookById:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.bookId,r.next=3,Ce.get(s);case 3:i=r.sent,e.commit({type:"setSelectedBook",book:i});case 5:case"end":return r.stop()}}),r)})))()}}});s["a"].use(Ot["a"]);var Dt=new Ot["a"].Store({strict:!0,modules:{bookModule:jt},state:{loggedInUser:{_id:"u101",email:"bobby@gmail.com",userName:"bob-the-builder101",firstName:"Bobby",lastName:"Brown",address:"Dimona"},userMsg:{type:null,txt:""}},getters:{loggedInUser:function(e){return e.loggedInUser},userMsg:function(e){return e.userMsg}},mutations:{setLoggedInUser:function(e,t){var r=t.user;e.loggedInUser=r},setUserMsg:function(e,t){var r=t.userMsg;e.userMsg.type=r.type,e.userMsg.txt=r.txt}},actions:{setUserMsg:function(e,t){var r=e.commit,s=t.userMsg;r({type:"setUserMsg",userMsg:s}),setTimeout((function(){r({type:"setUserMsg",userMsg:{type:null,txt:""}})}),8e3)}}}),qt=r("1881"),Mt=r.n(qt);r("b7e3");s["a"].config.productionTip=!1,s["a"].use(Mt.a),new s["a"]({router:Bt,store:Dt,render:function(e){return e(P)}}).$mount("#app")},"83c6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAASElEQVRIx+3SMQoAIAxD0Y+nU+9/gvYgunSVDh0UyYMsmUoJyIsm4JFR6I8cWBEr9AC0Gy8acYkBvdB/TCtKaUUprSilFX1mA7Y9TABZ6O7yAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTE0VDE4OjUxOjU1KzAwOjAwf9ZXowAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0xNFQxODo1MTo1NSswMDowMA6L7x8AAAAASUVORK5CYII="},"84b7":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAU0lEQVRIx2NgGAUDDRiR2EwMDAxRUPZSBgaG/9S2LAZq6H8GBoZoqNh/MjGKq+kWRIzQIPrPwMCwnBZBNDTBaCoiKYhGUxFWMJqKSAqi0VQ0TAEATixBAjQ/LhAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMTRUMTg6NTI6MTUrMDA6MDAQq+JaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTE0VDE4OjUyOjE1KzAwOjAwYfZa5gAAAABJRU5ErkJggg=="},"8eba":function(e,t,r){e.exports=r.p+"img/success.bc11ce4d.svg"},"96a1":function(e,t,r){e.exports=r.p+"img/failure.49cbfff0.svg"},b3ce:function(e,t,r){e.exports=r.p+"img/warning.6785d770.svg"},b7e3:function(e,t,r){},bc27:function(e,t,r){var s={"./failure.svg":"96a1","./info.svg":"4b7e","./success.svg":"8eba","./warning.svg":"b3ce"};function i(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="bc27"}});
//# sourceMappingURL=app.203bed6c.js.map