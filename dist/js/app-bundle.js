(function () {
  'use strict';

  var t=function(n,r){return (t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n;}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);})(n,r)};function n$5(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=n;}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e);}var r$5=function(){return (r$5=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function o$c(t,n,r,e){return new(r||(r=Promise))((function(o,a){function c(t){try{i(e.next(t));}catch(t){a(t);}}function l(t){try{i(e.throw(t));}catch(t){a(t);}}function i(t){var n;t.done?o(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n);}))).then(c,l);}i((e=e.apply(t,n||[])).next());}))}function a$7(t,n){var r,e,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,e&&(o=2&a[0]?e.return:a[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,a[1])).done)return o;switch(e=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,e=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=n.call(t,c);}catch(t){a=[6,t],e=0;}finally{r=o=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}

  function o$b(n,t){void 0===t&&(t=!1);var e=window.crypto.getRandomValues(new Uint32Array(1))[0],o="_".concat(e);return Object.defineProperty(window,o,{value:function(e){return t&&Reflect.deleteProperty(window,o),null==n?void 0:n(e)},writable:!1,configurable:!0}),e}function r$4(r,c){return void 0===c&&(c={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,new Promise((function(n,t){var i=o$b((function(t){n(t),Reflect.deleteProperty(window,"_".concat(a));}),!0),a=o$b((function(n){t(n),Reflect.deleteProperty(window,"_".concat(i));}),!0);window.__TAURI_IPC__(r$5({cmd:r,callback:i,error:a},c));}))]}))}))}function c$6(n,t){void 0===t&&(t="asset");var e=encodeURIComponent(n);return navigator.userAgent.includes("Windows")?"https://".concat(t,".localhost/").concat(e):"".concat(t,"://").concat(e)}Object.freeze({__proto__:null,transformCallback:o$b,invoke:r$4,convertFileSrc:c$6});

  function o$a(o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(i){return [2,r$4("tauri",o)]}))}))}

  var o$9;function i$6(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"readTextFile",path:o,options:i}})]}))}))}function r$3(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){var t;return a$7(this,(function(e){switch(e.label){case 0:return [4,o$a({__tauriModule:"Fs",message:{cmd:"readFile",path:o,options:i}})];case 1:return t=e.sent(),[2,Uint8Array.from(t)]}}))}))}function s$a(o,i,r){return o$c(this,void 0,void 0,(function(){var t,s;return a$7(this,(function(e){return "object"==typeof r&&Object.freeze(r),"object"==typeof o&&Object.freeze(o),t={path:"",contents:""},s=r,"string"==typeof o?t.path=o:(t.path=o.path,t.contents=o.contents),"string"==typeof i?t.contents=null!=i?i:"":s=i,[2,o$a({__tauriModule:"Fs",message:{cmd:"writeFile",path:t.path,contents:Array.from((new TextEncoder).encode(t.contents)),options:s}})]}))}))}function a$6(o,i,r){return o$c(this,void 0,void 0,(function(){var t,s;return a$7(this,(function(e){return "object"==typeof r&&Object.freeze(r),"object"==typeof o&&Object.freeze(o),t={path:"",contents:[]},s=r,"string"==typeof o?t.path=o:(t.path=o.path,t.contents=o.contents),i&&"dir"in i?s=i:"string"==typeof o&&(t.contents=null!=i?i:[]),[2,o$a({__tauriModule:"Fs",message:{cmd:"writeFile",path:t.path,contents:Array.from(t.contents),options:s}})]}))}))}function u$9(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"readDir",path:o,options:i}})]}))}))}function c$5(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"createDir",path:o,options:i}})]}))}))}function d$2(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"removeDir",path:o,options:i}})]}))}))}function f$3(o,i,r){return void 0===r&&(r={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"copyFile",source:o,destination:i,options:r}})]}))}))}function p$2(o,i){return void 0===i&&(i={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"removeFile",path:o,options:i}})]}))}))}function l$2(o,i,r){return void 0===r&&(r={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Fs",message:{cmd:"renameFile",oldPath:o,newPath:i,options:r}})]}))}))}!function(t){t[t.Audio=1]="Audio",t[t.Cache=2]="Cache",t[t.Config=3]="Config",t[t.Data=4]="Data",t[t.LocalData=5]="LocalData",t[t.Desktop=6]="Desktop",t[t.Document=7]="Document",t[t.Download=8]="Download",t[t.Executable=9]="Executable",t[t.Font=10]="Font",t[t.Home=11]="Home",t[t.Picture=12]="Picture",t[t.Public=13]="Public",t[t.Runtime=14]="Runtime",t[t.Template=15]="Template",t[t.Video=16]="Video",t[t.Resource=17]="Resource",t[t.App=18]="App",t[t.Log=19]="Log",t[t.Temp=20]="Temp";}(o$9||(o$9={}));Object.freeze({__proto__:null,get BaseDirectory(){return o$9},get Dir(){return o$9},readTextFile:i$6,readBinaryFile:r$3,writeTextFile:s$a,writeFile:s$a,writeBinaryFile:a$6,readDir:u$9,createDir:c$5,removeDir:d$2,copyFile:f$3,removeFile:p$2,renameFile:l$2});

  var i$5;!function(t){t[t.JSON=1]="JSON",t[t.Text=2]="Text",t[t.Binary=3]="Binary";}(i$5||(i$5={}));var o$8=function(){function t(t,e){this.type=t,this.payload=e;}return t.form=function(e){var r={};for(var n in e){var i=e[n],o=void 0;o="string"==typeof i?i:i instanceof Uint8Array||Array.isArray(i)?Array.from(i):"string"==typeof i.file?{file:i.file,mime:i.mime,fileName:i.fileName}:{file:Array.from(i.file),mime:i.mime,fileName:i.fileName},r[n]=o;}return new t("Form",r)},t.json=function(e){return new t("Json",e)},t.text=function(e){return new t("Text",e)},t.bytes=function(e){return new t("Bytes",Array.from(e))},t}(),s$9=function(t){this.url=t.url,this.status=t.status,this.ok=this.status>=200&&this.status<300,this.headers=t.headers,this.rawHeaders=t.rawHeaders,this.data=t.data;},u$8=function(){function o(t){this.id=t;}return o.prototype.drop=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Http",message:{cmd:"dropClient",client:this.id}})]}))}))},o.prototype.request=function(r){return o$c(this,void 0,void 0,(function(){var t;return a$7(this,(function(e){return (t=!r.responseType||r.responseType===i$5.JSON)&&(r.responseType=i$5.Text),[2,o$a({__tauriModule:"Http",message:{cmd:"httpRequest",client:this.id,options:r}}).then((function(e){var r=new s$9(e);if(t){try{r.data=JSON.parse(r.data);}catch(t){if(r.ok&&""===r.data)r.data={};else if(r.ok)throw Error("Failed to parse response `".concat(r.data,"` as JSON: ").concat(t,";\n              try setting the `responseType` option to `ResponseType.Text` or `ResponseType.Binary` if the API does not return a JSON response."))}return r}return r}))]}))}))},o.prototype.get=function(n,i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.request(r$5({method:"GET",url:n},i))]}))}))},o.prototype.post=function(n,i,o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.request(r$5({method:"POST",url:n,body:i},o))]}))}))},o.prototype.put=function(n,i,o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.request(r$5({method:"PUT",url:n,body:i},o))]}))}))},o.prototype.patch=function(n,i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.request(r$5({method:"PATCH",url:n},i))]}))}))},o.prototype.delete=function(n,i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.request(r$5({method:"DELETE",url:n},i))]}))}))},o}();function a$5(r){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Http",message:{cmd:"createClient",options:r}}).then((function(t){return new u$8(t)}))]}))}))}var f$2=null;function c$4(n,i){var o;return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){switch(t.label){case 0:return null!==f$2?[3,2]:[4,a$5()];case 1:f$2=t.sent(),t.label=2;case 2:return [2,f$2.request(r$5({url:n,method:null!==(o=null==i?void 0:i.method)&&void 0!==o?o:"GET"},i))]}}))}))}Object.freeze({__proto__:null,getClient:a$5,fetch:c$4,Body:o$8,Client:u$8,Response:s$9,get ResponseType(){return i$5}});

  function n$4(){return navigator.appVersion.includes("Win")}

  function o$7(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.App}})]}))}))}function u$7(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Audio}})]}))}))}function a$4(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Cache}})]}))}))}function s$8(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Config}})]}))}))}function c$3(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Data}})]}))}))}function d$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Desktop}})]}))}))}function h$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Document}})]}))}))}function f$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Download}})]}))}))}function v$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Executable}})]}))}))}function m$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Font}})]}))}))}function l$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Home}})]}))}))}function _$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.LocalData}})]}))}))}function P(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Picture}})]}))}))}function p$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Public}})]}))}))}function g$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Resource}})]}))}))}function D(n){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:n,directory:o$9.Resource}})]}))}))}function M$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Runtime}})]}))}))}function y$2(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Template}})]}))}))}function b$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Video}})]}))}))}function j(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:o$9.Log}})]}))}))}var x$1=n$4()?"\\":"/",A=n$4()?";":":";function k(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"resolve",paths:i}})]}))}))}function z(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"normalize",path:i}})]}))}))}function R(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"join",paths:i}})]}))}))}function w$1(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"dirname",path:i}})]}))}))}function B(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"extname",path:i}})]}))}))}function C(i,n){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"basename",path:i,ext:n}})]}))}))}function L(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Path",message:{cmd:"isAbsolute",path:i}})]}))}))}Object.freeze({__proto__:null,appDir:o$7,audioDir:u$7,cacheDir:a$4,configDir:s$8,dataDir:c$3,desktopDir:d$1,documentDir:h$1,downloadDir:f$1,executableDir:v$1,fontDir:m$1,homeDir:l$1,localDataDir:_$1,pictureDir:P,publicDir:p$1,resourceDir:g$1,resolveResource:D,runtimeDir:M$1,templateDir:y$2,videoDir:b$1,logDir:j,get BaseDirectory(){return o$9},sep:x$1,delimiter:A,resolve:k,normalize:z,join:R,dirname:w$1,extname:B,basename:C,isAbsolute:L});

  function o$6(t,o,s,u){return void 0===s&&(s=[]),o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return "object"==typeof s&&Object.freeze(s),[2,o$a({__tauriModule:"Shell",message:{cmd:"execute",program:o,args:s,options:u,onEventFn:o$b(t)}})]}))}))}var s$7=function(){function t(){this.eventListeners=Object.create(null);}return t.prototype.addEventListener=function(t,n){t in this.eventListeners?this.eventListeners[t].push(n):this.eventListeners[t]=[n];},t.prototype._emit=function(t,n){if(t in this.eventListeners)for(var e=0,i=this.eventListeners[t];e<i.length;e++){(0, i[e])(n);}},t.prototype.on=function(t,n){return this.addEventListener(t,n),this},t}(),u$6=function(){function t(t){this.pid=t;}return t.prototype.write=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,o$a({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:"string"==typeof t?t:Array.from(t)}})]}))}))},t.prototype.kill=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})]}))}))},t}(),a$3=function(i){function r(t,n,e){void 0===n&&(n=[]);var r=i.call(this)||this;return r.stdout=new s$7,r.stderr=new s$7,r.program=t,r.args="string"==typeof n?[n]:n,r.options=null!=e?e:{},r}return n$5(r,i),r.sidecar=function(t,n,e){void 0===n&&(n=[]);var i=new r(t,n,e);return i.options.sidecar=!0,i},r.prototype.spawn=function(){return o$c(this,void 0,void 0,(function(){var t=this;return a$7(this,(function(n){return [2,o$6((function(n){switch(n.event){case"Error":t._emit("error",n.payload);break;case"Terminated":t._emit("close",n.payload);break;case"Stdout":t.stdout._emit("data",n.payload);break;case"Stderr":t.stderr._emit("data",n.payload);}}),this.program,this.args,this.options).then((function(t){return new u$6(t)}))]}))}))},r.prototype.execute=function(){return o$c(this,void 0,void 0,(function(){var t=this;return a$7(this,(function(n){return [2,new Promise((function(n,e){t.on("error",e);var i=[],r=[];t.stdout.on("data",(function(t){i.push(t);})),t.stderr.on("data",(function(t){r.push(t);})),t.on("close",(function(t){n({code:t.code,signal:t.signal,stdout:i.join("\n"),stderr:r.join("\n")});})),t.spawn().catch(e);}))]}))}))},r}(s$7);function c$2(t,r){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,o$a({__tauriModule:"Shell",message:{cmd:"open",path:t,with:r}})]}))}))}Object.freeze({__proto__:null,Command:a$3,Child:u$6,EventEmitter:s$7,open:c$2});

  function r$2(e,r){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Event",message:{cmd:"unlisten",event:e,eventId:r}})]}))}))}function u$5(e,r,u){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){switch(t.label){case 0:return [4,o$a({__tauriModule:"Event",message:{cmd:"emit",event:e,windowLabel:r,payload:"string"==typeof u?u:JSON.stringify(u)}})];case 1:return t.sent(),[2]}}))}))}function o$5(u,o,s){return o$c(this,void 0,void 0,(function(){var a=this;return a$7(this,(function(c){return [2,o$a({__tauriModule:"Event",message:{cmd:"listen",event:u,windowLabel:o,handler:o$b(s)}}).then((function(i){return function(){return o$c(a,void 0,void 0,(function(){return a$7(this,(function(t){return [2,r$2(u,i)]}))}))}}))]}))}))}function s$6(i,e,u){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$5(i,e,(function(t){u(t),r$2(i,t.id).catch((function(){}));}))]}))}))}

  var s$5,d=function(t,e){this.type="Logical",this.width=t,this.height=e;},l=function(){function t(t,e){this.type="Physical",this.width=t,this.height=e;}return t.prototype.toLogical=function(t){return new d(this.width/t,this.height/t)},t}(),c$1=function(t,e){this.type="Logical",this.x=t,this.y=e;},h=function(){function t(t,e){this.type="Physical",this.x=t,this.y=e;}return t.prototype.toLogical=function(t){return new c$1(this.x/t,this.y/t)},t}();function m(){return new v(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function p(){return window.__TAURI_METADATA__.__windows.map((function(t){return new v(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational";}(s$5||(s$5={}));var f,y$1=["tauri://created","tauri://error"],g=function(){function t(t){this.label=t,this.listeners=Object.create(null);}return t.prototype.listen=function(t,n){return o$c(this,void 0,void 0,(function(){var e=this;return a$7(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1);}))]:[2,o$5(t,this.label,n)]}))}))},t.prototype.once=function(t,n){return o$c(this,void 0,void 0,(function(){var e=this;return a$7(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1);}))]:[2,s$6(t,this.label,n)]}))}))},t.prototype.emit=function(t,n){return o$c(this,void 0,void 0,(function(){var e,o;return a$7(this,(function(i){if(y$1.includes(t)){for(e=0,o=this.listeners[t]||[];e<o.length;e++)(0, o[e])({event:t,id:-1,windowLabel:this.label,payload:n});return [2,Promise.resolve()]}return [2,u$5(t,this.label,n)]}))}))},t.prototype._handleTauriEvent=function(t,e){return !!y$1.includes(t)&&(t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e],!0)},t}(),_=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return n$5(r,n),r.prototype.scaleFactor=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},r.prototype.innerPosition=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new h(e,i)}))]}))}))},r.prototype.outerPosition=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new h(e,i)}))]}))}))},r.prototype.innerSize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new l(e,i)}))]}))}))},r.prototype.outerSize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new l(e,i)}))]}))}))},r.prototype.isFullscreen=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},r.prototype.isMaximized=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},r.prototype.isDecorated=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},r.prototype.isResizable=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},r.prototype.isVisible=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},r.prototype.theme=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]}))}))},r.prototype.center=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},r.prototype.requestUserAttention=function(t){return o$c(this,void 0,void 0,(function(){var e;return a$7(this,(function(i){return e=null,t&&(e=t===s$5.Critical?{type:"Critical"}:{type:"Informational"}),[2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:e}}}})]}))}))},r.prototype.setResizable=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},r.prototype.setTitle=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},r.prototype.maximize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},r.prototype.unmaximize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},r.prototype.toggleMaximize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},r.prototype.minimize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},r.prototype.unminimize=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},r.prototype.show=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},r.prototype.hide=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},r.prototype.close=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},r.prototype.setDecorations=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},r.prototype.setAlwaysOnTop=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},r.prototype.setSize=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},r.prototype.setMinSize=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},r.prototype.setMaxSize=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},r.prototype.setPosition=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},r.prototype.setFullscreen=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},r.prototype.setFocus=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},r.prototype.setIcon=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof t?t:Array.from(t)}}}}})]}))}))},r.prototype.setSkipTaskbar=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},r.prototype.setCursorGrab=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:t}}}})]}))}))},r.prototype.setCursorVisible=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:t}}}})]}))}))},r.prototype.setCursorIcon=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:t}}}})]}))}))},r.prototype.setCursorPosition=function(t){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},r.prototype.startDragging=function(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},r}(g),v=function(r){function a(t,a){void 0===a&&(a={});var u=r.call(this,t)||this;return (null==a?void 0:a.skip)||o$a({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:r$5({label:t},a)}}}).then((function(){return o$c(u,void 0,void 0,(function(){return a$7(this,(function(t){return [2,this.emit("tauri://created")]}))}))})).catch((function(t){return o$c(u,void 0,void 0,(function(){return a$7(this,(function(e){return [2,this.emit("tauri://error",t)]}))}))})),u}return n$5(a,r),a.getByLabel=function(t){return p().some((function(e){return e.label===t}))?new a(t,{skip:!0}):null},a}(_);function b(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))}function w(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))}function M(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}"__TAURI_METADATA__"in window?f=new v(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),f=new v("main",{skip:!0}));Object.freeze({__proto__:null,WebviewWindow:v,WebviewWindowHandle:g,WindowManager:_,getCurrent:m,getAll:p,get appWindow(){return f},LogicalSize:d,PhysicalSize:l,LogicalPosition:c$1,PhysicalPosition:h,get UserAttentionType(){return s$5},currentMonitor:b,primaryMonitor:w,availableMonitors:M});

  var o$4=n$4()?"\r\n":"\n";function s$4(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Os",message:{cmd:"platform"}})]}))}))}function e$3(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Os",message:{cmd:"version"}})]}))}))}function u$4(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Os",message:{cmd:"osType"}})]}))}))}function a$2(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Os",message:{cmd:"arch"}})]}))}))}function c(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Os",message:{cmd:"tempdir"}})]}))}))}Object.freeze({__proto__:null,EOL:o$4,platform:s$4,version:e$3,type:u$4,arch:a$2,tempdir:c});

  function i$4(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"App",message:{cmd:"getAppVersion"}})]}))}))}function n$3(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"App",message:{cmd:"getAppName"}})]}))}))}function o$3(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"App",message:{cmd:"getTauriVersion"}})]}))}))}Object.freeze({__proto__:null,getName:n$3,getVersion:i$4,getTauriVersion:o$3});

  function i$3(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Cli",message:{cmd:"cliMatches"}})]}))}))}Object.freeze({__proto__:null,getMatches:i$3});

  function i$2(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Clipboard",message:{cmd:"writeText",data:i}})]}))}))}function a$1(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"Clipboard",message:{cmd:"readText",data:null}})]}))}))}Object.freeze({__proto__:null,writeText:i$2,readText:a$1});

  function o$2(o){return void 0===o&&(o={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return "object"==typeof o&&Object.freeze(o),[2,o$a({__tauriModule:"Dialog",message:{cmd:"openDialog",options:o}})]}))}))}function n$2(o){return void 0===o&&(o={}),o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return "object"==typeof o&&Object.freeze(o),[2,o$a({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:o}})]}))}))}function r$1(o,n){return o$c(this,void 0,void 0,(function(){var t;return a$7(this,(function(e){return [2,o$a({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}function s$3(o,n){return o$c(this,void 0,void 0,(function(){var t;return a$7(this,(function(e){return [2,o$a({__tauriModule:"Dialog",message:{cmd:"askDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}function u$3(o,n){return o$c(this,void 0,void 0,(function(){var t;return a$7(this,(function(e){return [2,o$a({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:o,title:null==(t="string"==typeof n?{title:n}:n)?void 0:t.title,type:null==t?void 0:t.type}})]}))}))}Object.freeze({__proto__:null,open:o$2,save:n$2,message:r$1,ask:s$3,confirm:u$3});

  function e$2(o,r){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,o$5(o,null,r)]}))}))}function u$2(i,r){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,s$6(i,null,r)]}))}))}function s$2(i,o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(n){return [2,u$5(i,void 0,o)]}))}))}Object.freeze({__proto__:null,listen:e$2,once:u$2,emit:s$2});

  function u$1(u,o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:u,handler:o$b(o)}})]}))}))}function o$1(u,o){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:u,handler:o$b(o)}})]}))}))}function n$1(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:i}})]}))}))}function s$1(i){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:i}})]}))}))}function a(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(t){return [2,o$a({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})]}))}))}Object.freeze({__proto__:null,register:u$1,registerAll:o$1,isRegistered:n$1,unregister:s$1,unregisterAll:a});

  function n(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(i){return "default"!==window.Notification.permission?[2,Promise.resolve("granted"===window.Notification.permission)]:[2,o$a({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})]}))}))}function s(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(i){return [2,window.Notification.requestPermission()]}))}))}function e$1(i){"string"==typeof i?new window.Notification(i):new window.Notification(i.title,i);}Object.freeze({__proto__:null,sendNotification:e$1,requestPermission:s,isPermissionGranted:n});

  function i$1(i){return void 0===i&&(i=0),o$c(this,void 0,void 0,(function(){return a$7(this,(function(r){return [2,o$a({__tauriModule:"Process",message:{cmd:"exit",exitCode:i}})]}))}))}function o(){return o$c(this,void 0,void 0,(function(){return a$7(this,(function(r){return [2,o$a({__tauriModule:"Process",message:{cmd:"relaunch"}})]}))}))}Object.freeze({__proto__:null,exit:i$1,relaunch:o});

  function i(){return o$c(this,void 0,void 0,(function(){function t(){r&&r(),r=void 0;}var r;return a$7(this,(function(n){return [2,new Promise((function(n,i){e$2("tauri://update-status",(function(o){var a;(a=null==o?void 0:o.payload).error?(t(),i(a.error)):"DONE"===a.status&&(t(),n());})).then((function(t){r=t;})).catch((function(n){throw t(),n})),s$2("tauri://update-install").catch((function(n){throw t(),n}));}))]}))}))}function u(){return o$c(this,void 0,void 0,(function(){function t(){i&&i(),i=void 0;}var i;return a$7(this,(function(n){return [2,new Promise((function(n,u){u$2("tauri://update-available",(function(o){var a;a=null==o?void 0:o.payload,t(),n({manifest:a,shouldUpdate:!0});})).catch((function(n){throw t(),n})),e$2("tauri://update-status",(function(o){var a;(a=null==o?void 0:o.payload).error?(t(),u(a.error)):"UPTODATE"===a.status&&(t(),n({shouldUpdate:!1}));})).then((function(t){i=t;})).catch((function(n){throw t(),n})),s$2("tauri://update").catch((function(n){throw t(),n}));}))]}))}))}Object.freeze({__proto__:null,installUpdate:i,checkUpdate:u});

  function r(t){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var e=function(t){var e,o=Object.prototype,n=o.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"");}catch(t){u=function(t,r,e){return t[r]=e};}function s(t,r,e,o){var n=r&&r.prototype instanceof v?r:v,i=Object.create(n.prototype),a=new G(o||[]);return i._invoke=function(t,r,e){var o=l;return function(n,i){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===n)throw i;return T()}for(e.method=n,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===l)throw o=d,e.arg;e.dispatchException(e.arg);}else "return"===e.method&&e.abrupt("return",e.arg);o=y;var f=h(t,r,e);if("normal"===f.type){if(o=e.done?d:p,f.arg===m)continue;return {value:f.arg,done:e.done}}"throw"===f.type&&(o=d,e.method="throw",e.arg=f.arg);}}}(t,e,a),i}function h(t,r,e){try{return {type:"normal",arg:t.call(r,e)}}catch(t){return {type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",y="executing",d="completed",m={};function v(){}function g(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(N([])));j&&j!==o&&n.call(j,a)&&(w=j);var L=b.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}));}));}function _(t,e){function o(i,a,c,f){var u=h(t[i],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===r(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,f);}),(function(t){o("throw",t,c,f);})):e.resolve(l).then((function(t){s.value=t,c(s);}),(function(t){return o("throw",t,c,f)}))}f(u.arg);}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n);}))}return i=i?i.then(n,n):n()};}function S(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method");}return m}var n=h(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r);}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r;}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0);}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return {next:T}}function T(){return {value:e,done:!0}}return g.prototype=b,u(L,"constructor",b),u(b,"constructor",g),g.displayName=u(b,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return !!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return {__await:t}},E(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,o,n,i){void 0===i&&(i=Promise);var a=new _(s(r,e,o,n),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,f,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return "[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e);},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,n){return c.type="throw",c.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var f=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(f&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else {if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var n=o.arg;k(e);}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:N(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e;}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e);}}({exports:{}});var e=r$4;

  function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
  }

  const pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;

  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }

  function path() {
    return new Path;
  }

  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x, y) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x, y) {
      this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
      this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
      this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
      var x0 = this._x1,
          y0 = this._y1,
          x21 = x2 - x1,
          y21 = y2 - y1,
          x01 = x0 - x1,
          y01 = y0 - y1,
          l01_2 = x01 * x01 + y01 * y01;

      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);

      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
      }

      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon));

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
      }

      // Otherwise, draw an arc!
      else {
        var x20 = x2 - x0,
            y20 = y2 - y0,
            l21_2 = x21 * x21 + y21 * y21,
            l20_2 = x20 * x20 + y20 * y20,
            l21 = Math.sqrt(l21_2),
            l01 = Math.sqrt(l01_2),
            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
            t01 = l / l01,
            t21 = l / l21;

        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }

        this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;
      var dx = r * Math.cos(a0),
          dy = r * Math.sin(a0),
          x0 = x + dx,
          y0 = y + dy,
          cw = 1 ^ ccw,
          da = ccw ? a0 - a1 : a1 - a0;

      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);

      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
      }

      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }

      // Is this arc empty? We’re done.
      if (!r) return;

      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;

      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
      }

      // Is this arc non-empty? Draw an arc!
      else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
    },
    rect: function(x, y, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
    },
    toString: function() {
      return this._;
    }
  };

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
      reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
      reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
      reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
      reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
      reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHex8() {
    return this.rgb().formatHex8();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }

  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }

  function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }

  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }

  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }

  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));

  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }

  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var noop = {value: () => {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames$1(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function() {
      return array(select.apply(this, arguments));
    };
  }

  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection$1(subgroups, parents);
  }

  function matcher(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children$1() {
    return Array.from(this.children);
  }

  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children$1
        : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$2(x) {
    return function() {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map,
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$2(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)
  function arraylike(data) {
    return typeof data === "object" && "length" in data
      ? data // Array, TypedArray, NodeList, array-like
      : Array.from(data); // Map, Set, iterable, string, or anything else
  }

  function selection_exit() {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(context) {
    var selection = context.selection ? context.selection() : context;

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection$1(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection$1(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    return Array.from(this);
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS$1(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction$1(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS$1(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction$1(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove$1 : typeof value === "function"
              ? styleFunction$1
              : styleConstant$1)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction$1
            : textConstant$1)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  var root$1 = [null];

  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection$1([[document.documentElement]], root$1);
  }

  function selection_selection() {
    return this;
  }

  Selection$1.prototype = selection.prototype = {
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
        : new Selection$1([[selector]], root$1);
  }

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  function count(node) {
    var sum = 0,
        children = node.children,
        i = children && children.length;
    if (!i) sum = 1;
    else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }

  function node_count() {
    return this.eachAfter(count);
  }

  function node_each(callback, that) {
    let index = -1;
    for (const node of this) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_eachBefore(callback, that) {
    var node = this, nodes = [node], children, i, index = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index, this);
      if (children = node.children) {
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
      }
    }
    return this;
  }

  function node_eachAfter(callback, that) {
    var node = this, nodes = [node], next = [], children, i, n, index = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_find(callback, that) {
    let index = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  }

  function node_sum(value) {
    return this.eachAfter(function(node) {
      var sum = +value(node.data) || 0,
          children = node.children,
          i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  }

  function node_sort(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  function node_path(end) {
    var start = this,
        ancestor = leastCommonAncestor(start, end),
        nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  }

  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(),
        bNodes = b.ancestors(),
        c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }

  function node_ancestors() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  function node_descendants() {
    return Array.from(this);
  }

  function node_leaves() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  function node_links() {
    var root = this, links = [];
    root.each(function(node) {
      if (node !== root) { // Don’t include the root’s parent, if any.
        links.push({source: node.parent, target: node});
      }
    });
    return links;
  }

  function* node_iterator() {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        yield node;
        if (children = node.children) {
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
        }
      }
    } while (next.length);
  }

  function hierarchy(data, children) {
    if (data instanceof Map) {
      data = [undefined, data];
      if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
      children = objectChildren;
    }

    var root = new Node(data),
        node,
        nodes = [root],
        child,
        childs,
        i,
        n;

    while (node = nodes.pop()) {
      if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }

    return root.eachBefore(computeHeight);
  }

  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }

  function objectChildren(d) {
    return d.children;
  }

  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }

  function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
  }

  function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && (node.height < ++height));
  }

  function Node(data) {
    this.data = data;
    this.depth =
    this.height = 0;
    this.parent = null;
  }

  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    find: node_find,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy,
    [Symbol.iterator]: node_iterator
  };

  function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
  }

  // function radialSeparation(a, b) {
  //   return (a.parent === b.parent ? 1 : 2) / a.depth;
  // }

  // This function is used to traverse the left contour of a subtree (or
  // subforest). It returns the successor of v on this contour. This successor is
  // either given by the leftmost child of v or by the thread of v. The function
  // returns null if and only if v is on the highest level of its subtree.
  function nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
  }

  // This function works analogously to nextLeft.
  function nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
  }

  // Shifts the current subtree rooted at w+. This is done by increasing
  // prelim(w+) and mod(w+) by shift.
  function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }

  // All other shifts, applied to the smaller subtrees between w- and w+, are
  // performed by this function. To prepare the shifts, we have to adjust
  // change(w+), shift(w+), and change(w-).
  function executeShifts(v) {
    var shift = 0,
        change = 0,
        children = v.children,
        i = children.length,
        w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }

  // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
  // returns the specified (default) ancestor.
  function nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }

  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null; // default ancestor
    this.a = this; // ancestor
    this.z = 0; // prelim
    this.m = 0; // mod
    this.c = 0; // change
    this.s = 0; // shift
    this.t = null; // thread
    this.i = i; // number
  }

  TreeNode.prototype = Object.create(Node.prototype);

  function treeRoot(root) {
    var tree = new TreeNode(root, 0),
        node,
        nodes = [tree],
        child,
        children,
        i,
        n;

    while (node = nodes.pop()) {
      if (children = node._.children) {
        node.children = new Array(n = children.length);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
          child.parent = node;
        }
      }
    }

    (tree.parent = new TreeNode(null, 0)).children = [tree];
    return tree;
  }

  // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
  function tree() {
    var separation = defaultSeparation,
        dx = 1,
        dy = 1,
        nodeSize = null;

    function tree(root) {
      var t = treeRoot(root);

      // Compute the layout using Buchheim et al.’s algorithm.
      t.eachAfter(firstWalk), t.parent.m = -t.z;
      t.eachBefore(secondWalk);

      // If a fixed node size is specified, scale x and y.
      if (nodeSize) root.eachBefore(sizeNode);

      // If a fixed tree size is specified, scale x and y based on the extent.
      // Compute the left-most, right-most, and depth-most nodes for extents.
      else {
        var left = root,
            right = root,
            bottom = root;
        root.eachBefore(function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var s = left === right ? 1 : separation(left, right) / 2,
            tx = s - left.x,
            kx = dx / (right.x + s + tx),
            ky = dy / (bottom.depth || 1);
        root.eachBefore(function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }

      return root;
    }

    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
      var children = v.children,
          siblings = v.parent.children,
          w = v.i ? siblings[v.i - 1] : null;
      if (children) {
        executeShifts(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }

    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }

    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v,
            vop = v,
            vim = w,
            vom = vip.parent.children[0],
            sip = vip.m,
            sop = vop.m,
            sim = vim.m,
            som = vom.m,
            shift;
        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
          vom = nextLeft(vom);
          vop = nextRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !nextRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !nextLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }

    function sizeNode(node) {
      node.x *= dx;
      node.y = node.depth * dy;
    }

    tree.separation = function(x) {
      return arguments.length ? (separation = x, tree) : separation;
    };

    tree.size = function(x) {
      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
    };

    tree.nodeSize = function(x) {
      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
    };

    return tree;
  }

  var constant$1 = x => () => x;

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  var degrees = 180 / Math.PI;

  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var svgNode;

  /* eslint-disable no-undef */
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }

  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  function constant(x) {
    return function constant() {
      return x;
    };
  }

  var slice = Array.prototype.slice;

  function x(p) {
    return p[0];
  }

  function y(p) {
    return p[1];
  }

  class Bump {
    constructor(context, x) {
      this._context = context;
      this._x = x;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    }
    point(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: {
          this._point = 1;
          if (this._line) this._context.lineTo(x, y);
          else this._context.moveTo(x, y);
          break;
        }
        case 1: this._point = 2; // falls through
        default: {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
          else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
          break;
        }
      }
      this._x0 = x, this._y0 = y;
    }
  }

  function bumpX(context) {
    return new Bump(context, true);
  }

  function linkSource(d) {
    return d.source;
  }

  function linkTarget(d) {
    return d.target;
  }

  function link(curve) {
    let source = linkSource;
    let target = linkTarget;
    let x$1 = x;
    let y$1 = y;
    let context = null;
    let output = null;

    function link() {
      let buffer;
      const argv = slice.call(arguments);
      const s = source.apply(this, argv);
      const t = target.apply(this, argv);
      if (context == null) output = curve(buffer = path());
      output.lineStart();
      argv[0] = s, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
      argv[0] = t, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
      output.lineEnd();
      if (buffer) return output = null, buffer + "" || null;
    }

    link.source = function(_) {
      return arguments.length ? (source = _, link) : source;
    };

    link.target = function(_) {
      return arguments.length ? (target = _, link) : target;
    };

    link.x = function(_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), link) : x$1;
    };

    link.y = function(_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), link) : y$1;
    };

    link.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link) : context;
    };

    return link;
  }

  function linkHorizontal() {
    return link(bumpX);
  }

  var frame = 0, // is an animation frame pending?
      timeout$2 = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$2 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$2) timeout$2 = clearTimeout(timeout$2);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$2 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout$1(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }

  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout$1(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout$1(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS(fullname, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
        : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error;
      set(this, id).ease = v;
    };
  }

  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set;
    return function() {
      var schedule = sit(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection = selection.prototype.constructor;

  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

      schedule.on = on1;
    };
  }

  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove(name))
      : typeof value === "function" ? this
        .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
        .each(styleMaybeRemove(this._id, name))
      : this
        .styleTween(name, styleConstant(name, i, value), priority)
        .on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction(tweenValue(this, "text", value))
        : textConstant(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = {value: reject},
          end = {value: function() { if (--size === 0) resolve(); }};

      that.each(function() {
        var schedule = set(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }

        schedule.on = on1;
      });

      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection.prototype;

  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }

  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x) {
      return x * this.k + this.x;
    },
    applyY: function(y) {
      return y * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x) {
      return (x - this.x) / this.k;
    },
    invertY: function(y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };

  new Transform(1, 0, 0);

  Transform.prototype;

  var name = "0";
  var value = 126;
  var children = [
  	{
  		name: "1",
  		value: 132,
  		children: [
  			{
  				name: "1_1",
  				value: 142,
  				children: [
  					{
  						name: "1_1_1",
  						value: 126,
  						comment: "test comment 1_1_1"
  					},
  					{
  						name: "1_1_2",
  						value: 83,
  						comment: "test comment 1_1_2"
  					},
  					{
  						name: "1_1_3",
  						value: 0
  					},
  					{
  						name: "1_1_4",
  						value: 178
  					},
  					{
  						name: "1_1_5",
  						value: 180
  					},
  					{
  						name: "1_1_6",
  						value: 80
  					}
  				]
  			},
  			{
  				name: "1_2",
  				value: 132,
  				comment: "Long test comment: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores cumque autem architecto reiciendis hic ducimus tenetur at eos, officiis, natus officia porro omnis sint dicta blanditiis eveniet tempore quidem consequuntur?",
  				children: [
  					{
  						name: "1_2_1",
  						value: 120
  					},
  					{
  						name: "1_2_2",
  						value: 78
  					},
  					{
  						name: "1_2_3",
  						value: 250
  					},
  					{
  						name: "1_2_4",
  						value: 300
  					},
  					{
  						name: "1_2_5",
  						value: 0
  					},
  					{
  						name: "1_2_6",
  						value: 0
  					},
  					{
  						name: "1_2_7",
  						value: 0
  					},
  					{
  						name: "1_2_8",
  						value: 70
  					},
  					{
  						name: "1_2_9",
  						value: 50
  					},
  					{
  						name: "1_2_10",
  						value: 90
  					},
  					{
  						name: "1_2_11",
  						value: 120
  					},
  					{
  						name: "1_2_12",
  						value: 210
  					}
  				]
  			},
  			{
  				name: "1_3",
  				value: 220,
  				children: [
  					{
  						name: "1_3_1",
  						value: 120
  					},
  					{
  						name: "1_3_2",
  						value: 123
  					},
  					{
  						name: "1_3_3",
  						value: 120
  					},
  					{
  						name: "1_3_4",
  						value: 100
  					}
  				]
  			}
  		]
  	},
  	{
  		name: "2",
  		value: 0
  	},
  	{
  		name: "3",
  		value: 0
  	},
  	{
  		name: "4",
  		value: 120,
  		children: [
  			{
  				name: "4_1",
  				value: 120
  			},
  			{
  				name: "4_2",
  				value: 123
  			}
  		]
  	},
  	{
  		name: "5",
  		value: 120,
  		children: [
  			{
  				name: "5_1",
  				value: 120
  			},
  			{
  				name: "5_2",
  				value: 78
  			},
  			{
  				name: "5_3",
  				value: 250
  			},
  			{
  				name: "5_4",
  				value: 300
  			},
  			{
  				name: "5_5",
  				value: 0
  			},
  			{
  				name: "5_6",
  				value: 0
  			}
  		]
  	},
  	{
  		name: "6",
  		value: 0
  	},
  	{
  		name: "7",
  		value: 120,
  		children: [
  			{
  				name: "7_1",
  				value: 120,
  				children: [
  					{
  						name: "7_1_1",
  						value: 120,
  						children: [
  							{
  								name: "7_1_1_1",
  								value: 120,
  								children: [
  									{
  										name: "7_1_1_1_1",
  										value: 120
  									},
  									{
  										name: "7_1_1_1_2",
  										value: 78
  									},
  									{
  										name: "7_1_1_1_3",
  										value: 250
  									},
  									{
  										name: "7_1_1_1_4",
  										value: 300
  									},
  									{
  										name: "7_1_1_1_5",
  										value: 0,
  										children: [
  											{
  												name: "7_1_1_1_5_1",
  												value: 78,
  												children: [
  													{
  														name: "7_1_1_1_5_1_1",
  														value: 250
  													},
  													{
  														name: "7_1_1_1_5_1_2",
  														value: 300
  													},
  													{
  														name: "7_1_1_1_5_1_3",
  														value: 0
  													},
  													{
  														name: "7_1_1_1_5_1_4",
  														value: 250
  													},
  													{
  														name: "7_1_1_1_5_1_5",
  														value: 300
  													},
  													{
  														name: "7_1_1_1_5_1_6",
  														value: 0
  													},
  													{
  														name: "7_1_1_1_5_1_7",
  														value: 250
  													},
  													{
  														name: "7_1_1_1_5_1_8",
  														value: 300
  													},
  													{
  														name: "7_1_1_1_5_1_9",
  														value: 0
  													}
  												]
  											}
  										]
  									},
  									{
  										name: "7_1_1_1_6",
  										value: 0
  									},
  									{
  										name: "7_1_1_1_7",
  										value: 0
  									},
  									{
  										name: "7_1_1_1_8",
  										value: 70
  									},
  									{
  										name: "7_1_1_1_9",
  										value: 50
  									},
  									{
  										name: "7_1_1_1_10",
  										value: 90
  									},
  									{
  										name: "7_1_1_1_11",
  										value: 120
  									},
  									{
  										name: "7_1_1_1_12",
  										value: 210,
  										children: [
  											{
  												name: "7_1_1_1_12_1",
  												value: 78,
  												children: [
  													{
  														name: "7_1_1_1_12_1_1",
  														value: 78,
  														children: [
  															{
  																name: "7_1_1_1_12_1_1_1",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_12_1_1_2",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_12_1_1_3",
  																value: 0
  															},
  															{
  																name: "7_1_1_1_12_1_1_4",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_12_1_1_5",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_12_1_1_6",
  																value: 0
  															},
  															{
  																name: "7_1_1_1_12_1_1_7",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_12_1_1_8",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_12_1_1_9",
  																value: 0
  															}
  														]
  													}
  												]
  											}
  										]
  									},
  									{
  										name: "7_1_1_1_13",
  										value: 120
  									},
  									{
  										name: "7_1_1_1_14",
  										value: 78
  									},
  									{
  										name: "7_1_1_1_15",
  										value: 250
  									},
  									{
  										name: "7_1_1_1_16",
  										value: 300
  									},
  									{
  										name: "7_1_1_1_17",
  										value: 0
  									},
  									{
  										name: "7_1_1_1_18",
  										value: 0
  									},
  									{
  										name: "7_1_1_1_19",
  										value: 0
  									},
  									{
  										name: "7_1_1_1_20",
  										value: 70
  									},
  									{
  										name: "7_1_1_1_21",
  										value: 50
  									},
  									{
  										name: "7_1_1_1_21",
  										value: 90
  									},
  									{
  										name: "7_1_1_1_22",
  										value: 120
  									},
  									{
  										name: "7_1_1_1_23",
  										value: 210,
  										children: [
  											{
  												name: "7_1_1_1_23_1",
  												value: 78,
  												children: [
  													{
  														name: "7_1_1_1_23_1_1",
  														value: 78,
  														children: [
  															{
  																name: "7_1_1_1_23_1_1_1",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_23_1_1_2",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_23_1_1_3",
  																value: 0
  															},
  															{
  																name: "7_1_1_1_23_1_1_4",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_23_1_1_5",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_23_1_1_6",
  																value: 0
  															},
  															{
  																name: "7_1_1_1_23_1_1_7",
  																value: 250
  															},
  															{
  																name: "7_1_1_1_23_1_1_8",
  																value: 300
  															},
  															{
  																name: "7_1_1_1_23_1_1_9",
  																value: 0
  															}
  														]
  													}
  												]
  											}
  										]
  									}
  								]
  							},
  							{
  								name: "7_1_1_2",
  								value: 0
  							}
  						]
  					}
  				]
  			}
  		]
  	},
  	{
  		name: "8",
  		value: 0
  	}
  ];
  var testData = {
  	name: name,
  	value: value,
  	children: children
  };

  function viewboxEventInit() {
      const svgImage = document.getElementById("svgTree");
      const svgContainer = document.getElementById("tree");
      var viewBox = { x: 0, y: 0, w: svgImage.clientWidth, h: svgImage.clientHeight };
      svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
      const svgSize = { w: svgImage.clientWidth, h: svgImage.clientHeight };
      var isPanning = false;
      var startPoint = { x: 0, y: 0 };
      var endPoint = { x: 0, y: 0 };
      var scale = 1;
      //?
      svgContainer.onwheel = function (e) {
          e.preventDefault();
          var w = viewBox.w;
          var h = viewBox.h;
          var mx = e.offsetX; //mouse x  
          var my = e.offsetY;
          var dw = w * Math.sign(-e.deltaY) * 0.05;
          var dh = h * Math.sign(-e.deltaY) * 0.05;
          var dx = dw * mx / svgSize.w;
          var dy = dh * my / svgSize.h;
          viewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w - dw, h: viewBox.h - dh };
          scale = svgSize.w / viewBox.w;
          svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
      };
      svgContainer.onmousedown = function (e) {
          isPanning = true;
          startPoint = { x: e.x, y: e.y };
      };
      svgContainer.onmousemove = function (e) {
          if (isPanning) {
              endPoint = { x: e.x, y: e.y };
              var dx = (startPoint.x - endPoint.x) / scale;
              var dy = (startPoint.y - endPoint.y) / scale;
              var movedViewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };
              svgImage.setAttribute('viewBox', `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`);
          }
      };
      svgContainer.onmouseup = function (e) {
          if (isPanning) {
              endPoint = { x: e.x, y: e.y };
              var dx = (startPoint.x - endPoint.x) / scale;
              var dy = (startPoint.y - endPoint.y) / scale;
              viewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };
              svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
              isPanning = false;
          }
      };
      svgContainer.onmouseleave = function (e) {
          isPanning = false;
      };
  }

  let root;
  function toggle(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      }
      else {
          d.children = d._children;
          d._children = null;
      }
  }
  function toggleAll(d) {
      if (d.children) {
          d.children.forEach(toggleAll);
          toggle(d);
      }
  }
  function toggleAllPrev(array, rootPoint) {
      rootPoint._children.forEach((current) => {
          if (current._children)
              toggleAllPrev(array, current);
          if (array.findIndex((element) => current.data.name === element) > -1)
              toggle(current);
      });
  }
  function getToggledElements() {
      const isToggledArray = [];
      if (root.children) {
          root.descendants().forEach((current) => {
              if (!current.children && !current._children)
                  isToggledArray.push(current.data.name);
              else if (!current._children)
                  isToggledArray.push(current.data.name);
          });
      }
      return isToggledArray;
  }
  async function drawTree(toggled) {
      const margin = { top: 20, right: 120, bottom: 20, left: 120 };
      const width = window.outerWidth - margin.right - margin.left;
      const height = window.outerHeight - margin.top - margin.bottom;
      let i = 0;
      const treeLayout = tree()
          .nodeSize([70, 40]);
      const vis = select(".demo").append("svg:svg")
          .attr("id", "svgTree")
          .attr("width", width + margin.right + margin.left)
          .attr("height", height + margin.top + margin.bottom)
          .append("svg:g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      viewboxEventInit();
      var tooltip = select(".demo").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);
      root = treeLayout(hierarchy(testData));
      root.x = height / 2;
      root.y = 0;
      root.children?.forEach(toggleAll);
      toggle(root);
      if (toggled.length > 0) {
          toggleAllPrev(toggled, root);
          toggle(root);
      }
      update(root);
      function update(point) {
          const nodes = reverse(root.descendants());
          nodes.forEach(function (d) { d.y = d.depth * 180; });
          var node = vis.selectAll("g.node")
              .data(nodes, function (d) { return d.id || (d.id = ++i); });
          var nodeEnter = node.enter().append("svg:g")
              .attr("class", "node")
              .attr("transform", function (d) {
              //if node is root
              if (d.parent === null)
                  return "translate(" + d.y + "," + d.x + ")";
              //else 
              return "translate(" + point.y + "," + point.x + ")";
          })
              .on("click", function (event, d) {
              toggle(d);
              update(d);
          });
          nodeEnter.append("svg:circle")
              .attr("r", 6)
              .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
          nodeEnter.append("svg:text")
              .attr("x", function (d) { return d.children || d._children ? -10 : 10; })
              .attr("dy", "0.4em")
              .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
              .text(function (d) { return d.data.name; })
              .on("mouseover", function (event, d) {
              const tooltip_text = `<span class="bold">Node name:</span> ${d.data.name}<br>
                <span class="bold">Node ${d.data.value === 0 ? 'is infeasible!</span>' : 'has a value of</span> ' + d.data.value}
                ${d.data.comment ? '<br><br><span class="bold">Comment:</span><br>' + d.data.comment : ''}`;
              tooltip.transition()
                  .duration(200)
                  .style("opacity", .9);
              tooltip.html(tooltip_text)
                  .style("left", (event.pageX) + "px")
                  .style("top", (event.pageY - 50) + "px");
          })
              .on("mouseout", function (d) {
              tooltip.transition()
                  .duration(500)
                  .style("opacity", 0);
          });
          var nodeUpdate = nodeEnter.transition()
              .duration(500)
              .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
          nodeUpdate.select("circle")
              .attr("r", 6)
              .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
          nodeUpdate.select("text")
              .style("fill-opacity", 1);
          const nodeExit = node.exit().transition()
              .duration(500)
              .attr("transform", function (d) { return "translate(" + point.y + "," + point.x + ")"; })
              .remove();
          nodeExit.select("circle")
              .attr("r", 6);
          nodeExit.select("text")
              .style("fill-opacity", 6);
          const link = vis.selectAll("path.link")
              .data(root.links(), function (d) { return d.target.id; });
          const diagonal = linkHorizontal()
              .x(function (d) {
              return d[1];
          })
              .y(function (d) {
              return d[0];
          });
          link.enter().insert("svg:path", "g")
              .attr("class", "link")
              .attr("d", function (d) {
              const o = [point.x, point.y];
              return diagonal({ source: o, target: o });
          })
              .transition()
              .duration(500)
              .attr("d", function (d) {
              const src = [d.source.x, d.source.y];
              const tgt = [d.target.x, d.target.y];
              return diagonal({ source: src, target: tgt });
          });
          link.transition()
              .duration(500)
              .attr("d", function (d) {
              const src = [d.source.x, d.source.y];
              const tgt = [d.target.x, d.target.y];
              return diagonal({ source: src, target: tgt });
          });
          link.exit().transition()
              .duration(500)
              .attr("d", function (d) {
              //
              const o = [point.x, point.y];
              return diagonal({ source: o, target: o });
          })
              .remove();
          nodes.forEach(function (d) {
              d.x0 = d.x;
              d.y0 = d.y;
          });
      }
      return true;
  }

  const $ = document.querySelector.bind(document);
  let treeDrawn = false;
  document.addEventListener("DOMContentLoaded", async function () {
      const beginElement = $("demo-button");
      const demo = $("div.demo");
      demo.classList.add("hidden");
      beginElement.addEventListener("pointerup", async function () {
          const begin = await e("demo_start");
          if (begin) {
              demo.classList.remove("hidden");
              beginElement.classList.add("hidden");
              treeDrawn = await drawTree([]);
          }
      });
  });
  async function resize() {
      if (!treeDrawn)
          return;
      const demo = $("div.demo");
      demo.innerHTML = "";
      await drawTree(getToggledElements());
  }
  let timeout;
  window.onresize = function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
          resize();
      }, 250);
  };

})();
//# sourceMappingURL=app-bundle.js.map
