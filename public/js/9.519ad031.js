(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"082f":function(t,a,e){"use strict";e("b8dc")},"52aa":function(t,a,e){},"974a":function(t,a,e){"use strict";e("52aa")},b8dc:function(t,a,e){},c44b:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pb-xl relative",class:{"flex flex-center":!t.ready},staticStyle:{background:"white"}},[t.ready&&t.product?[e("div",{staticClass:"q-pa-md header-top"},[e("div",{staticClass:"flex justify-between"},[e("q-btn",{staticStyle:{cursor:"pointer",opacity:".9"},attrs:{flat:"",dense:"",icon:"keyboard_backspace","icon-size":"27px"},on:{click:t.backButton}}),e("shopping-cart")],1)]),e("div",{staticClass:"col relative overflow-x-hidden"},[e("q-carousel",{ref:"carousel",staticClass:"img-carousel",staticStyle:{"max-height":"574px"},style:t.cStyle,attrs:{animated:"",swipeable:"",fullscreen:t.fullscreen,navigation:"",infinite:"",height:t.height},on:{"update:fullscreen":function(a){t.fullscreen=a}},scopedSlots:t._u([{key:"control",fn:function(){return[e("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,40]}},[e("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(a){t.fullscreen=!t.fullscreen}}})],1)]},proxy:!0}],null,!1,1945090610),model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},t._l(t.product.assets,(function(t,a){return e("q-carousel-slide",{key:a,attrs:{name:a+1,"img-src":t.src,ratio:"1"}})})),1),e("q-card",{staticClass:"product-detail relative box-shadow"},[e("q-card-section",{staticClass:"q-pt-xs"},[t.product?e("h1",{staticClass:"text-h6 text-weight-semibold q-mb-md"},[t._v(t._s(t.product.title))]):t._e(),e("div",{staticClass:"row items-center justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex items-center text-secondary"},[e("span",{staticClass:"text-md"},[t._v("Rp")]),e("span",{staticClass:"text-lg text-weight-medium"},[t._v("\n                "+t._s(t.$money(parseInt(t.totalPrice)))+" \n                ")])]),t.product.pricing.is_discount?e("div",{staticClass:"flex items-center text-strike text-xs q-ml-xs"},[e("span",{staticClass:"text-sm"},[t._v("Rp")]),e("span",{staticClass:"text-md"},[t._v(t._s(t.$money(t.product.pricing.default_price*t.quantity))+" ")])]):t._e(),e("div")]),e("div",{staticClass:"row q-gutter-md text-h6 items-center"},[e("q-btn",{staticStyle:{cursor:"pointer"},attrs:{flat:"",round:"",icon:"remove_circle_outline",size:"24"},on:{click:t.decrementQty}}),e("div",[t._v(t._s(t.quantity))]),e("q-btn",{staticStyle:{cursor:"pointer"},attrs:{flat:"",round:"",icon:"add_circle_outline",size:"24"},on:{click:t.incrementQty}})],1)]),e("div",{staticClass:"row items-center q-gutter-x-sm"},[e("q-rating",{attrs:{readonly:"",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half",size:"1.3rem"},model:{value:t.productRating,callback:function(a){t.productRating=a},expression:"productRating"}}),e("div",{staticClass:"text-weight-medium text-sm"},[t._v(" "+t._s(t.product.reviews_count>0?t.product.reviews_count+" ulasan":""))])],1)])],1),t.product.varians.length?e("div",{staticClass:"box-shadow bg-white q-pa-md q-mt-md"},[e("div",[e("div",{staticClass:"text-md"},[t._v("Pilih Varian "),e("span",{staticClass:"text-sm text-weight-normal text-grey-7"})]),e("div",{staticClass:"q-mt-sm"},[e("div",{staticClass:"q-mb-xs"},[t._v(t._s(t.product.varians[0].label))]),e("div",{staticClass:"q-gutter-sm"},t._l(t.product.varians,(function(a){return e("q-btn",{key:a.id,staticClass:"product-varian--btn",attrs:{outline:"",label:a.value,color:t.varianSelected&&t.varianSelected.id==a.id?"accent":"grey-9"},on:{click:function(e){return t.selectProductVarian(a)}}},[t.varianSelected&&t.varianSelected.id==a.id?e("badge-tick"):t._e()],1)})),1)]),t.varianSelected&&t.varianSelected.has_subvarian?e("div",{staticClass:"q-mt-md"},[e("div",{staticClass:"q-mb-xs"},[t._v(t._s(t.varianSelected.subvarian[0].label))]),e("div",{staticClass:"q-gutter-sm"},t._l(t.varianSelected.subvarian,(function(a){return e("q-btn",{key:a.id,staticClass:"relative product-variation product-varian--btn",attrs:{outline:"",label:a.value,disable:a.stock<1&&!a.is_preorder,color:t.subvarianSelected&&t.subvarianSelected.id==a.id?"accent":"grey-9"},on:{click:function(e){return t.selectProductSubvarian(a)}}},[t.subvarianSelected&&t.subvarianSelected.id==a.id?e("badge-tick"):t._e()],1)})),1)]):t._e()])]):t._e(),e("q-card",{staticClass:"box-shadow q-mt-md"},[e("q-tabs",{attrs:{"active-color":"accent",align:"left"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"Description",label:"Deskripsi Produk"}}),e("q-tab",{attrs:{name:"Review",label:"Ulasan Produk"}})],1),e("q-separator"),e("q-tab-panels",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"Description"}},[e("div",{staticClass:"q-mt-md",staticStyle:{"min-height":"150px"},attrs:{id:"description"}},[e("div",[e("h3",{staticClass:"text-md q-mb-sm"},[t._v("Deskripsi Produk")]),e("div",{domProps:{innerHTML:t._s(t.product.description)}})]),e("div",{staticClass:"q-mt-lg",attrs:{id:"product-images"}},[e("div",{staticClass:"product-image--container"},t._l(t.product.images,(function(a){return e("div",{key:a.id,staticClass:"product-image"},[e("div",{staticClass:"product-image--content"},[e("img",{staticClass:"product-image--img",attrs:{src:a.src,alt:a.caption}}),e("div",{staticClass:"product-image--caption"},[t._v(t._s(a.caption))])])])})),0)])])]),e("q-tab-panel",{attrs:{name:"Review"}},[e("div",{staticClass:"q-mt-lg",attrs:{id:"ulasan"}},[e("div",{staticClass:"flex column justify-center items-center"},[t.productRating>0?e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-3xl text-weight-bold"},[t._v(t._s(t.product.rating))]),e("q-rating",{attrs:{readonly:"",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half",size:"30px"},model:{value:t.productRating,callback:function(a){t.productRating=a},expression:"productRating"}})],1):t._e(),e("div",{staticClass:"text-weight-medium text-md q-my-sm"},[t._v("\n              "+t._s(t.product.reviews_count>0?"Total "+t.product.reviews_count+" ulasan":"Belum ada ulasan")+"\n              ")]),e("q-btn",{staticClass:"q-my-xs",attrs:{outline:"",color:"accent",label:"Berikan ulasan"},on:{click:t.handleReviewModal}})],1),e("div",{staticClass:"q-pt-md"},[e("div",{staticClass:"q-gutter-y-md"},t._l(t.productReviews,(function(a,i){return e("div",{key:i},[e("q-list",[e("q-item",{staticClass:"q-px-xs"},[e("q-item-section",[e("q-item-label",{staticClass:"text-md"},[t._v(t._s(a.name))]),e("q-rating",{attrs:{readonly:"",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half",size:"1.1rem"},model:{value:a.rating,callback:function(e){t.$set(a,"rating",e)},expression:"review.rating"}})],1),e("q-item-section",{attrs:{side:""}},[e("div",{staticClass:"text-xs"},[t._v(t._s(a.created_format))])])],1)],1),e("div",{staticClass:"q-pa-sm bg-grey-1 text-grey-7 text-sm"},[t._v(" "+t._s(a.comment)+" ")])],1)})),0)]),e("div",{staticClass:"q-my-md row justify-center"},[t.productReviews.length<t.product.reviews_count?e("q-btn",{attrs:{flat:"",color:"primary",loading:t.loadMoreLoading,label:"loadmore.."},on:{click:t.loadReview},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)}):t._e()],1)])])],1)],1)],1),e("q-footer",{staticClass:"q-gutter-x-sm flex q-pa-md bg-white"},[e("q-btn",{staticClass:"col",attrs:{unelevated:"",rounded:"",outline:"",icon:"chat",label:"Chat",color:"primary"},on:{click:t.chat}}),e("q-btn",{staticClass:"col",attrs:{unelevated:"",rounded:"",icon:"shopping_basket",label:"Beli",color:"primary"},on:{click:t.addNewItem}})],1)]:t._e(),e("q-inner-loading",{attrs:{showing:!t.ready}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),e("q-dialog",{model:{value:t.reviewModal,callback:function(a){t.reviewModal=a},expression:"reviewModal"}},[e("div",{staticClass:"q-card",staticStyle:{width:"100%","max-width":"360px"}},[e("q-card-section",[e("q-form",{on:{submit:function(a){return a.preventDefault(),t.submitReview(a)}}},[e("div",[e("div",{staticClass:"text-subtitle2 q-mb-sm"},[t._v("Berikan Ulasan Anda")]),e("q-rating",{attrs:{color:"amber",icon:"star_border","icon-selected":"star","icon-half":"star_half",size:"sm"},model:{value:t.form.rating,callback:function(a){t.$set(t.form,"rating",a)},expression:"form.rating"}}),e("div",{staticClass:"q-my-md q-gutter-y-xs"},[e("q-input",{attrs:{dense:"",label:"Nama Anda",rules:[function(t){return t&&""!=t||"Wajib disisi"}]},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}}),e("q-input",{attrs:{dense:"",label:"Ulasan Anda",type:"textarea",rows:"3",rules:[function(t){return t&&""!=t||"Wajib disisi"}]},model:{value:t.form.comment,callback:function(a){t.$set(t.form,"comment",a)},expression:"form.comment"}})],1),e("div",{staticClass:"q-gutter-y-sm q-my-md items-center text-grey"},[e("div",{staticClass:"text-grey text-xs"},[t._v("Jawab tantangan berikut, hanya untuk memastikan anda bukan robot")]),e("div",{staticClass:"row q-gutter-x-sm items-center"},[e("div",{staticClass:"text-weight-bold bg-dark text-white q-px-sm q-py-xs rounded"},[t._v(t._s(t.number2)+" + "+t._s(t.number1)+" ")]),e("div",{staticClass:"text-weight-bold"},[t._v(" = ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.jawaban,expression:"jawaban"}],staticClass:"rounded text-grey-9",staticStyle:{width:"60px",padding:"3px 6px",border:"1px solid grey"},attrs:{type:"text"},domProps:{value:t.jawaban},on:{input:function(a){a.target.composing||(t.jawaban=a.target.value)}}})])]),e("div",{staticClass:"row justify-end q-gutter-x-sm"},[e("q-btn",{attrs:{unelevated:"",type:"button",label:"Batal",color:"secondary"},on:{click:function(a){a.preventDefault(),t.reviewModal=!1}}}),e("q-btn",{attrs:{unelevated:"",disabled:t.chalengeTesting,type:"submit",loading:t.loading,label:"Kirim Ulasan",color:"primary"}})],1)],1)])],1)],1)]),e("q-dialog",{model:{value:t.chatModal,callback:function(a){t.chatModal=a},expression:"chatModal"}},[e("q-card",{staticClass:"text-grey-9",staticStyle:{"max-width":"450px",width:"100%"}},[e("div",{staticClass:"text-weight-bold q-py-sm q-px-md bg-primary text-white"},[t._v("Kirim pesan / tanya ke penjual")]),e("q-card-section",{staticClass:"transition-height"},[this.product?e("div",{staticClass:"q-mb-sm text-subtitle2"},[t._v("# "+t._s(t.product.title))]):t._e(),e("q-input",{attrs:{outlined:"",autogrow:"",autofocus:"",placeholder:"contoh: Halo Admin, Apakah ini masih ada?"},model:{value:t.chatText,callback:function(a){t.chatText=a},expression:"chatText"}}),e("div",{staticClass:"q-pt-sm"},t._l(t.defaultChat,(function(a){return e("div",{key:a,staticClass:"q-pa-xs cursor-pointer",on:{click:function(e){return t.changeChatText(a)}}},[e("span",[t._v(t._s(a))])])})),0)],1),e("q-card-actions",{staticClass:"justify-end"},[e("q-btn",{attrs:{flat:"",label:"Batal"},on:{click:t.closeChatModal}}),e("q-btn",{attrs:{disabled:!t.chatText,flat:"",color:"primary",label:"Kirim"},on:{click:t.submitChat}})],1)],1)],1),e("q-dialog",{attrs:{position:"bottom","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.cartModal,callback:function(a){t.cartModal=a},expression:"cartModal"}},[t.product?e("q-card",{staticClass:"max-width bg-white q-pb-md",attrs:{flat:""}},[e("q-linear-progress",{attrs:{size:"10px",value:100}}),e("q-card-section",[e("q-list",[e("q-item",[e("q-item-section",{attrs:{avatar:""}},[e("q-img",{staticClass:"rounded-borders",attrs:{src:t.product.assets[0].src,width:"60px"}})],1),e("q-item-section",{attrs:{top:""}},[e("div",{staticClass:"text-md text-weight-meduim q-mb-sm"},[t._v("Produk berhasil ditambahkan.")]),e("q-item-label",{attrs:{caption:""}},[t._v("Anda bisa lanjut kehalaman checkout atau berbelanja kembali")])],1)],1)],1),e("div",{staticClass:"flex justify-end q-gutter-x-sm q-pt-sm"},[e("q-btn",{attrs:{flat:"","no-caps":"",label:"Berbelanja Lagi",color:"primary"},on:{click:function(a){t.cartModal=!1}}}),e("q-btn",{attrs:{unelevated:"","no-caps":"",to:{name:"Cart"},label:"Lanjut Checkout",color:"primary"}})],1)],1)],1):t._e()],1),e("q-dialog",{model:{value:t.alreadyItemModal,callback:function(a){t.alreadyItemModal=a},expression:"alreadyItemModal"}},[e("q-card",{staticStyle:{width:"100%","max-width":"350px"}},[e("q-card-section",[e("div",{staticClass:"q-mb-sm text-weight-medium text-md"},[t._v("Produk yang sama ada di keranjang")]),e("div",[t._v('Tetap ingin menambahkan? jika "YA" item akan di perbarui kuantitasnya.')])]),e("q-card-actions",{staticClass:"justify-end q-gutter-x-sm"},[e("q-btn",{attrs:{flat:"","no-caps":"",label:"Batalkan",color:"primary"},on:{click:function(a){t.alreadyItemModal=!1}}}),e("q-btn",{attrs:{unelevated:"","no-caps":"",label:"YA Tambahkan",color:"primary"},on:{click:t.updateNewItem}})],1)],1)],1),e("q-dialog",{attrs:{position:"bottom","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.formVariantModal,callback:function(a){t.formVariantModal=a},expression:"formVariantModal"}},[t.product&&t.product.varians.length?e("q-card",{staticClass:"max-width",attrs:{flat:""}},[e("q-card-section",[e("div",{staticClass:"text-weight-medium text-lg q-mb-sm text-secondary"},[t._v(t._s(t.moneyIDR(parseInt(t.totalPrice))))]),e("div",[e("div",{staticClass:"text-md"},[t._v("Pilih Varian "),e("span",{staticClass:"text-sm text-weight-normal text-grey-7"})]),e("div",{staticClass:"q-mt-sm"},[e("div",{staticClass:"q-mb-xs"},[t._v(t._s(t.product.varians[0].label))]),e("div",{staticClass:"q-gutter-sm"},t._l(t.product.varians,(function(a){return e("q-btn",{key:a.id,staticClass:"product-varian--btn",attrs:{outline:"",label:a.value,color:t.varianSelected&&t.varianSelected.id==a.id?"accent":"grey-9"},on:{click:function(e){return t.selectProductVarian(a)}}},[t.varianSelected&&t.varianSelected.id==a.id?e("badge-tick"):t._e()],1)})),1)]),t.varianSelected&&t.varianSelected.has_subvarian?e("div",{staticClass:"q-mt-md"},[e("div",{staticClass:"q-mb-xs"},[t._v(t._s(t.varianSelected.subvarian[0].label))]),e("div",{staticClass:"q-gutter-sm"},t._l(t.varianSelected.subvarian,(function(a){return e("q-btn",{key:a.id,staticClass:"relative product-variation product-varian--btn",attrs:{outline:"",label:a.value,disable:a.stock<1&&!a.is_preorder,color:t.subvarianSelected&&t.subvarianSelected.id==a.id?"accent":"grey-9"},on:{click:function(e){t.subvarianSelected=a}}},[t.subvarianSelected&&t.subvarianSelected.id==a.id?e("badge-tick"):t._e()],1)})),1)]):t._e()])]),e("q-card-section",[e("q-btn",{staticClass:"full-width",attrs:{unelevated:"",rounded:"",icon:"shopping_basket",label:"Beli Sekarang",color:"green"},on:{click:t.addNewItem}})],1)],1):t._e()],1)],2)},s=[],r=e("448a"),n=e.n(r),c=e("ded3"),o=e.n(c),l=(e("7db0"),e("13d5"),e("159b"),e("d3b7"),e("e6cf"),e("99af"),e("ac1f"),e("5319"),e("b0c0"),e("2ca0"),e("a4d3"),e("e01a"),e("2f62")),d=e("c6c8"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product-variation__tick"},[e("svg",{staticClass:"svg-icon icon-tick-bold",attrs:{"enable-background":"new 0 0 12 12",viewBox:"0 0 12 12",x:"0",y:"0"}},[e("g",[e("path",{attrs:{d:"m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"}})])])])},h=[],m={props:{color:{type:String,default:"accent"}},computed:{classColor:function(){return"".concat("text-"+this.color)}}},v=m,p=(e("974a"),e("2877")),b=e("b498"),f=e("eebe"),g=e.n(f),q=Object(p["a"])(v,u,h,!1,null,"0cc96068",null),k=q.exports;g()(q,"components",{QColor:b["a"]});var y={name:"ProductShow",components:{ShoppingCart:d["a"],BadgeTick:k},data:function(){return{tab:"Description",defaultChat:["Apakah ini masih ada?","Apakah bisa grosir?"],chatText:"",chatModal:!1,reviewModal:!1,number1:0,number2:0,jawaban:"",loading:!1,slide:1,quantity:1,discount:0,fullscreen:!1,shop:this.$store.state.shop,ready:!1,loadMoreLoading:!1,form:{product_id:null,name:"",comment:"",rating:0},cartModal:!1,alreadyItemModal:!1,varianSelected:null,subvarianSelected:null,formVariantModal:!1,product:null,productReviews:[]}},computed:{session_id:function(){return this.$store.state.session_id},chalengeTesting:function(){return this.number1+this.number2!=this.jawaban},productRating:function(){return parseFloat(this.product.rating)},carts:function(){return this.$store.state.cart.carts},favorites:function(){return this.$store.state.product.favorites},isLike:function(){var t=this;return this.favorites.length>0&&!!this.favorites.find((function(a){return a==t.$route.params.id}))},cStyle:function(){return!this.fullscreen&&this.$q.screen.width<560&&this.$q.screen.width>200?"height:"+this.$q.screen.width+"px":""},height:function(){return this.$q.screen.width+"px"},productStock:function(){return this.product.varians.length?this.subvarianSelected?this.subvarianSelected.stock:0:this.product.stock},currentStock:function(){var t=this,a=this.carts.find((function(a){return a.sku==t.currentProductSku}));return this.isHasVarian?this.varianSelected?this.varianSelected.has_subvarian?this.subvarianSelected?void 0!=a?this.subvarianSelected.stock-a.quantity:this.subvarianSelected.stock:void 0!=a?this.productStock-a.quantity:this.productStock:void 0!=a?this.varianSelected.stock-a.quantity:this.varianSelected.stock:this.subvarianSelected?void 0!=a?this.subvarianSelected.stock-a.quantity:this.productStock:void 0!=a?this.productStock-a.quantity:this.productStock:void 0!=a?this.productStock-a.quantity:this.productStock},isHasVarian:function(){return this.product.varians.length>0},currentProductSku:function(){if(this.varianSelected){if(!this.varianSelected.has_subvarian)return this.varianSelected.sku;if(this.subvarianSelected)return this.subvarianSelected.sku}return this.product.sku?this.product.sku:this.product.id},realPrice:function(){if(this.varianSelected){if(!this.varianSelected.has_subvarian)return this.product.pricing.current_price+this.varianSelected.price;if(this.subvarianSelected)return this.product.pricing.current_price+this.subvarianSelected.price}return this.product.pricing.current_price},totalPrice:function(){return this.varianSelected?this.varianSelected.has_subvarian?this.subvarianSelected?(this.product.pricing.current_price+this.subvarianSelected.price)*this.quantity:(this.product.pricing.current_price+this.varianSelected.subvarian[0].price)*this.quantity:(this.product.pricing.current_price+this.varianSelected.price)*this.quantity:this.product.pricing.current_price*this.quantity},cartTextButton:function(){return this.currentStock>=1?"Beli":"Habis"},cartTextColor:function(){return this.currentStock>=1?"primary":"grey-7"}},methods:o()(o()(o()({},Object(l["d"])("product",["ADD_REMOVE_TO_FAVORITE"])),Object(l["b"])("product",["getProductBySlug","loadProductReview","addProductReview"])),{},{selectProductVarian:function(t){this.varianSelected=t,this.subvarianSelected=null,this.quantity=1},selectProductSubvarian:function(t){this.subvarianSelected=t,this.quantity=1},backButton:function(){window.history.length>2?window.history.back():this.$router.push({name:"ProductIndex"})},getIcon:function(t){var a=parseInt(t);return a<=2?"sentiment_very_dissatisfied":3==a?"sentiment_neutral":4==a?"sentiment_satisfied_alt":"sentiment_very_satisfied"},varItemGetColor:function(t){return!this.varianSelected||this.varianSelected.id!=t},varValueGetColor:function(t){return!this.subvarianSelected||this.subvarianSelected.id!=t},handleVariantItemSelectted:function(t){this.varianSelected=t,this.subvarianSelected=null,this.quantity=1,this.setViewProductPattern()},handleSelectedItemValue:function(t){this.subvarianSelected=t,this.quantity=1,this.setViewProductPattern()},discountPriceFormat:function(){return this.subtotal()*this.discount/100},subQty:function(){return this.carts.length>1?this.carts.reduce((function(t,a){return t.quantity+a.quantity})):this.carts[0].quantity},subtotal:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(a){t.push(a.quantity*a.price)})),t.reduce((function(t,a){return t+a}))}return this.carts[0].quantity*this.carts[0].price},total:function(){return this.discount||0!==this.discount?this.subtotal()-this.discountPriceFormat():this.subtotal()},stockStyle:function(){return this.currentStock>0&&this.currentStock<=5?"text-amber":this.currentStock<=0?"text-red":"text-green"},addToCart:function(){this.formVariantModal=!1;var t={session_id:this.session_id,product_id:this.product.id,product_stock:this.currentStock,sku:this.currentProductSku,name:this.product.title,price:this.realPrice,quantity:this.quantity,note:this.getVarianTextNote(),product_url:this.getRoutePath(),image_url:this.product.assets[0].src,weight:this.product.weight};this.session_id||this.makeSessionId(),this.$store.dispatch("cart/addToCart",t),this.quantity=1},showNotifyHasSelectVarian:function(){this.formVariantModal?this.$q.notify({type:"info",message:"Silahkan pilih produk varian terlebih dahulu"}):this.formVariantModal=!0},addNewItem:function(){var t=this;if(this.isHasVarian){if(!this.varianSelected)return void this.showNotifyHasSelectVarian();if(this.varianSelected.has_subvarian&&!this.subvarianSelected)return void this.showNotifyHasSelectVarian()}this.checkCart().then((function(a){t.addToCart(),t.cartModal=!0})).catch((function(a){t.alreadyItemModal=!0}))},updateNewItem:function(){this.alreadyItemModal=!1,this.addToCart(),this.cartModal=!0},checkCart:function(){var t=this;return new Promise((function(a,e){var i;i=t.carts.find((function(a){return a.sku==t.currentProductSku})),void 0!=i?e():a()}))},getVarianTextNote:function(){var t="";return this.varianSelected&&(this.varianSelected.has_subvarian&&this.subvarianSelected?t+="".concat(this.varianSelected.label," ").concat(this.varianSelected.value,", ").concat(this.subvarianSelected.label," ").concat(this.subvarianSelected.value):t+="".concat(this.varianSelected.label," ").concat(this.varianSelected.value)),t},getRoutePath:function(){var t=this.$router.resolve({name:"ProductShow",params:{slug:this.product.slug}});return location.origin+t.href},btnFavorite:function(){this.ADD_REMOVE_TO_FAVORITE(this.product.id)},setPrice:function(){this.priceTotal=this.price*this.quantity},checkVarianIsReady:function(){if(this.isHasVarian){if(!this.varianSelected)return!1;if(this.varianSelected.has_subvarian&&!this.subvarianSelected)return!1}return!0},incrementQty:function(){this.checkVarianIsReady()?this.quantity<this.currentStock?this.quantity+=1:this.$q.dialog({title:"Warning!",message:"Stok tidak cukup, stok tersisa "+this.currentStock+" item."}):this.$q.dialog({title:"Pilih Varian!",message:"Silahkan pilih varian untuk melanjutkan."})},decrementQty:function(){this.checkVarianIsReady?this.quantity>1&&(this.quantity-=1):this.$q.dialog({title:"Pilih Varian!",message:"Silahkan pilih varian untuk melanjutkan."})},getTeaser:function(t){if(t){var a=t.replace(/(<([^>]+)>)/gi,"");return a.substr(0,80)}return""},handleReviewModal:function(){this.getRandomNumber(),this.reviewModal=!0},submitReview:function(){var t=this;if(this.number1+this.number2!=this.jawaban)return this.$q.notify({type:"negative",message:"Jawaban Salah, silahkan jawab dengan benar."}),void this.getRandomNumber();this.jawaban="",this.getRandomNumber(),this.form.product_id=this.product.id,this.form.name&&this.form.comment&&this.form.rating?(this.loading=!0,this.reviewModal=!1,this.addProductReview(this.form).then((function(){t.getProduct()})),this.resetForm(),this.loading=!1):this.$q.notify({type:"warning",message:"Semua field harus di isi"})},resetForm:function(){this.form.name="",this.form.comment=""},getReview:function(){var t=this;this.loadMoreLoading=!0,this.loadProductReview({product_id:this.product.id}).then((function(a){200==a.status&&(t.loadMoreLoading=!1,t.productReviews=a.data.results)})).catch((function(a){t.loadMoreLoading=!1}))},loadReview:function(){var t=this;this.loadMoreLoading=!0,this.loadProductReview({product_id:this.product.id,skip:this.productReviews.length}).then((function(a){200==a.status&&(t.loadMoreLoading=!1,t.productReviews=[].concat(n()(t.productReviews),n()(a.data.results)))})).catch((function(a){t.loadMoreLoading=!1}))},getProduct:function(){var t=this;this.getProductBySlug(this.$route.params.slug).then((function(a){200==a.status&&(t.product=a.data.data,t.ready=!0,t.isHasVarian&&t.product.varians[0].has_subvarian&&(t.varianSelected=t.product.varians[0]),t.getReview())})).catch((function(){}))},getRandomNumber:function(){var t=[1,2,3,4,5,6,7,8,9];this.number1=Math.floor(Math.random()*t.length),this.number2=Math.floor(Math.random()*t.length)},formatPhoneNumber:function(t){var a=t.replace(/\D/g,"");return a.startsWith("0")&&(a="62"+a.substr(1)),a},chat:function(){this.chatModal=!0},closeChatModal:function(){this.chatText="",this.chatModal=!1},changeChatText:function(t){this.chatText=t},submitChat:function(){var t=this,a=this.shop.phone;if(a){var e="https://api.whatsapp.com/send?phone="+this.formatPhoneNumber(a)+"&text="+encodeURI(this.chatText+"\nProduk: "+this.product.title+"\n")+location.href;window.open(e,"_blank"),setTimeout((function(){t.closeChatModal()}),2e3)}else this.$q.dialog({title:"Maaf, Sedang masalah!",message:"Silahkan coba kembali beberapa saat lagi, jika masih berlanjut silahkan hubungi kami."})}}),created:function(){this.product&&this.product.slug==this.$route.params.slug?this.ready=!0:this.getProduct(),this.getRandomNumber()},meta:function(){var t,a,e,i,s;return{title:null===(t=this.product)||void 0===t?void 0:t.title,meta:{description:{name:"description",content:this.getTeaser(null===(a=this.product)||void 0===a?void 0:a.description)},ogDescription:{property:"og:description",content:this.getTeaser(null===(e=this.product)||void 0===e?void 0:e.description)},ogTitle:{property:"og:title",content:null===(i=this.product)||void 0===i?void 0:i.title},ogImage:{property:"og:image",content:null===(s=this.product)||void 0===s?void 0:s.assets[0].src}}}}},x=y,_=(e("082f"),e("9989")),S=e("9c40"),w=e("880c"),C=e("62cd"),M=e("32a7"),P=e("f09f"),R=e("a370"),T=e("daf4"),V=e("429b"),I=e("7460"),j=e("eb85"),Q=e("adad"),$=e("823b"),N=e("1c1c"),B=e("66e5"),L=e("4074"),A=e("0170"),D=e("e669"),F=e("7ff0"),H=e("74f7"),z=e("24e8"),O=e("0378"),E=e("27f9"),U=e("4b7e"),J=e("6b1d"),W=e("068f"),K=Object(p["a"])(x,i,s,!1,null,null,null);a["default"]=K.exports;g()(K,"components",{QPage:_["a"],QBtn:S["a"],QCarousel:w["a"],QCarouselSlide:C["a"],QCarouselControl:M["a"],QCard:P["a"],QCardSection:R["a"],QRating:T["a"],QTabs:V["a"],QTab:I["a"],QSeparator:j["a"],QTabPanels:Q["a"],QTabPanel:$["a"],QList:N["a"],QItem:B["a"],QItemSection:L["a"],QItemLabel:A["a"],QSpinnerFacebook:D["a"],QFooter:F["a"],QInnerLoading:H["a"],QDialog:z["a"],QForm:O["a"],QInput:E["a"],QCardActions:U["a"],QLinearProgress:J["a"],QImg:W["a"]})}}]);