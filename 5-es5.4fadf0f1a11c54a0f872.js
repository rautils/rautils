function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nEx1:function(e,t,n){"use strict";n.r(t),n.d(t,"NgxFakeEncapsulationDemoModule",(function(){return m}));var r,o,i,a,c,l,s=n("An66"),u=n("kZht"),f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=u.Fb({type:r}),r.\u0275inj=u.Eb({factory:function(e){return new(e||r)},imports:[[]]}),r),p=n("1VvW"),d=((i=function(){function e(t,n){_classCallCheck(this,e),this.element=t,this.renderer=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.update()}},{key:"update",value:function(){try{var e,t=_createForOfIteratorHelper(this.host.getAttributeNames().filter((function(e){return e.includes("_ngcontent")||e.includes("_nghost")})).map((function(e){return e.replace("_ngcontent-","").replace("_nghost-","")})));try{for(t.s();!(e=t.n()).done;){var n=e.value;this.renderer.setAttribute(this.element.nativeElement,"_ngcontent-".concat(n),"")}}catch(r){t.e(r)}finally{t.f()}}catch(o){}}},{key:"host",get:function(){for(var e=!1,t=this.element.nativeElement;!e;)e=1===(t=t.parentElement).getAttributeNames().filter((function(e){return e.includes("_nghost")})).length;return t}}]),e}()).\u0275fac=function(e){return new(e||i)(u.Hb(u.l),u.Hb(u.D))},i.\u0275dir=u.Cb({type:i,selectors:[["","ngxFakeEncapsulation",""]]}),i),b=((o=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u.Bb({type:o,selectors:[["encapsulation-container"]],decls:4,vars:0,consts:[[1,""],[1,"circle"],["ngxFakeEncapsulation","",1,"circle"]],template:function(e,t){1&e&&(u.Mb(0,"div",0),u.Mb(1,"div",0),u.Ib(2,"div",1),u.Ib(3,"div",2),u.Lb(),u.Lb())},directives:[d],styles:[".circle[_ngcontent-%COMP%]{width:5rem;height:5rem;border:1px solid red;border-radius:50%}"]}),o),h=[{path:"",component:(a=function e(){_classCallCheck(this,e)},a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=u.Bb({type:a,selectors:[["ngx-fake-encapsulation-demo"]],decls:3,vars:0,template:function(e,t){1&e&&(u.Mb(0,"h1"),u.hc(1,"Basics"),u.Lb(),u.Ib(2,"encapsulation-container"))},directives:[b],styles:["[_nghost-%COMP%]{display:block;width:100%;padding:2rem;box-sizing:border-box}.circle[_ngcontent-%COMP%]{background:red}"]}),a)}],y=((l=function e(){_classCallCheck(this,e)}).\u0275mod=u.Fb({type:l}),l.\u0275inj=u.Eb({factory:function(e){return new(e||l)},imports:[[p.e.forChild(h)],p.e]}),l),m=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Fb({type:c}),c.\u0275inj=u.Eb({factory:function(e){return new(e||c)},imports:[[s.b,y,f]]}),c)}}]);