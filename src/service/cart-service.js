'use strict';
var _mm = require('util/mm.js');

var _cart={
   //获取购物车的数量
   getCartCount:function (resolve, reject) {
      _mm.request({
         url      : _mm.getServerUrl('/cart/get_cart_product_count.do'),
         success  : resolve,
         error    : reject
      });
   },
   //添加商品到购物车
   addToCart :function (productInfo, resolve, reject) {
      _mm.request({
         url      : _mm.getServerUrl('/cart/add.do'),
         data     : productInfo,
         success  : resolve,
         error    : reject
      });
   },
   // 获取购物车列表
   getCartList : function(resolve, reject){
      _mm.request({
         url     : _mm.getServerUrl('/cart/list.do'),
         success : resolve,
         error   : reject
      });
   },
   //选中购物车中的商品
   selectProduct : function (productId, resolve, reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/select.do'),
         data    : {
            productId : productId
         },
         success : resolve,
         error   : reject
      });
   },
   //取消选中购物车中的商品
   unselectProduct : function (productId, resolve, reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/un_select.do'),
         data    : {
            productId : productId
         },
         success : resolve,
         error   : reject
      });
   },
   //全选购物车中的商品
   selectAllProduct : function (resolve,reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/select_all.do'),
         success : resolve,
         error   : reject
      });
   },
   //取消全选购物车中的商品
   unselectAllProduct : function (resolve,reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/un_select_all.do'),
         success : resolve,
         error   : reject
      });
   },
   //更新购物车中商品的数量
   updateProduct : function (productInfo, resolve, reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/update.do'),
         data    : productInfo,
         success : resolve,
         error   : reject
      });
   },
   //删除购物车中对应的单个商品
   deleteProduct : function (productIds, resolve, reject) {
      _mm.request({
         url     : _mm.getServerUrl('/cart/delete_product.do'),
         data    : {
            productIds : productIds
         },
         success : resolve,
         error   : reject
      });
   }
};
module.exports=_cart;