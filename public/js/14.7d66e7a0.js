(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{f6b42:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("router-view")],1)],1)},s=[],r=n("ded3"),i=n.n(r),u=n("2f62"),a={name:"AdminLayout",computed:i()({},Object(u["e"])({isCheckLogin:function(e){return e.user.isCheckLogin},shop:function(e){return e.shop},user:function(e){return e.user}})),created:function(){this.$store.dispatch("getAdminConfig"),this.shop||this.$store.dispatch("getShop"),this.user||this.$store.dispatch("user/getUser")}},c=a,h=n("2877"),p=n("4d5a"),f=n("09e3"),d=n("7ff0"),l=n("eebe"),g=n.n(l),w=Object(h["a"])(c,o,s,!1,null,null,null);t["default"]=w.exports;g()(w,"components",{QLayout:p["a"],QPageContainer:f["a"],QFooter:d["a"]})}}]);