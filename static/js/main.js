/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, $ */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  var app = document.getElementById('app');
  var tpl = document.querySelector('.tpl');
  
  $.ajax({
    url: '//www.kimonolabs.com/api/8x3ce3zc?apikey=9e9e30f3542ec789be4de05d5c9f16e9',
    crossDomain: true,
    dataType: 'jsonp',
    success: function (response) {
      response.results.collection1.forEach(function (el) {
        console.log('Image', el);
        var imageurl = el.imageurl.href;
        var thumburl = el.thumbnail.src || imageurl;
        var node = tpl.cloneNode(true);
        
        node.querySelectorAll('.button-bar').forEach(function (btn) { btn.setAttribute('href', imageurl); });
        node.style.backgroundImage = 'url("' + thumburl + '")';
        node.classList.remove('tpl');
        
        node.querySelector('.copy-to-clipboard').addEventListener('click', function (e) {
          e.preventDefault();
          var copyData = this.getAttribute('href');
          try {
            var copyEvent = new ClipboardEvent('copy', { dataType: 'text/plain', data: 'copyData' } );
            document.dispatchEvent(copyEvent);
            console.log('Wow you\'ve just made something impossible before... :o');
          } catch (e) {
            console.warn('Your browser does not support this feature...', e.message);
          }
        });
        
        app.appendChild(node);
      });
    },
    error: function (xhr, status) {
    }
  });
  
})();
  