/* Service Worker */
!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){var e=this;function r(t){this.name="NetworkError",this.code=19,this.message=t}return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var e=new URL(t.url).protocol;if("http:"!==e&&"https:"!==e)throw new r("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new r("Incorrect response status");return Promise.all(n.map(function(r,n){return e.put(t[n],r)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();

if('serviceWorker' in navigator) {
  navigator.serviceWorker
	   .register('/sw.js')
	   .then(function(registration) { console.log("Service Worker Registered"); });
}