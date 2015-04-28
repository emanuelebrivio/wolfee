/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, reqwest */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };
  
  
  reqwest({
      url: 'https://www.kimonolabs.com/api/8x3ce3zc?apikey=9e9e30f3542ec789be4de05d5c9f16e9'
    , type: 'json'
    , method: 'post'
    , contentType: 'application/json'
    , crossOrigin: true
    , error: function (err) { }
    , success: function (resp) {
        console.log(resp.content);
      }
  })
  
})();