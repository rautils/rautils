(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uCk6:function(e,n,i){"use strict";i.r(n),i.d(n,"NgxImageFallbackDemoModule",(function(){return u}));var a=i("An66"),t=i("kZht");let s=(()=>{class e{}return e.\u0275mod=t.Fb({type:e}),e.\u0275inj=t.Eb({factory:function(n){return new(n||e)},imports:[[a.b]]}),e})(),c=(()=>{class e{constructor(){this.alt="",this.crossorigin="",this.decoding="auto",this.height=null,this.importance="auto",this.intrinsicsize=null,this.ismap=!1,this.loading="eager",this.referrerpolicy="no-referrer-when-downgrade",this.sizes="",this.srcset="",this.width=null,this.usemap=null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Bb({type:e,selectors:[["ng-component"]],inputs:{alt:"alt",crossorigin:"crossorigin",decoding:"decoding",height:"height",importance:"importance",intrinsicsize:"intrinsicsize",ismap:"ismap",loading:"loading",referrerpolicy:"referrerpolicy",sizes:"sizes",src:"src",srcset:"srcset",width:"width",usemap:"usemap"},decls:0,vars:0,template:function(e,n){},encapsulation:2}),e})();function r(e,n){if(1&e){const e=t.Nb();t.Kb(0),t.Mb(1,"img",2),t.Tb("load",(function(n){return t.cc(e),t.Vb().onLoad(n)}))("error",(function(n){return t.cc(e),t.Vb().onError(n)})),t.Lb(),t.Jb()}if(2&e){const e=t.Vb();t.xb(1),t.zb("image-fallback-hide-img",e.hideLastImage),t.Yb("alt",e.alt)("sizes",e.sizes)("src",e.src,t.dc)("srcset",e.srcset,t.dc),t.yb("crossorigin",e.crossorigin)("decoding",e.decoding)("height",e.height)("importance",e.importance)("intrinsicsize",e.intrinsicsize)("ismap",e.ismap)("loading",e.loading)("referrerpolicy",e.referrerpolicy)("width",e.width)("usemap",e.usemap)}}function o(e,n){1&e&&t.Wb(0)}const l=["*"];let g=(()=>{class e extends c{constructor(e,n){super(),this.elementRef=e,this.renderer=n,this.classWhileLoading="image-fallback-loading",this.classOnError="image-fallback-failed",this.classOnSuccess="image-fallback-success",this.imageLoad=new t.n,this.imageError=new t.n,this.imageLoading=!0,this.imageFailed=!1,this.lastImageSuccess=!1}ngOnInit(){this.paint()}ngOnChanges(e){e.hasOwnProperty("src")&&(this.imageLoading=!0,this.imageFailed=!1,this.paint())}onLoad(e){this.imageLoad.emit(e),this.imageLoading=!1,this.imageFailed=!1,this.lastImageSuccess=!0,this.paint()}onError(e){this.imageError.emit(e),this.imageLoading=!1,this.imageFailed=!0,this.lastImageSuccess=!1,this.paint()}get hideLastImage(){return this.imageLoading&&!this.lastImageSuccess}get showImage(){return!this.imageFailed}paint(){this.renderer.removeClass(this.elementRef.nativeElement,this.classOnError),this.renderer.removeClass(this.elementRef.nativeElement,this.classOnSuccess),this.renderer.removeClass(this.elementRef.nativeElement,this.classWhileLoading),this.renderer.addClass(this.elementRef.nativeElement,this.imageLoading?this.classWhileLoading:this.imageFailed?this.classOnError:this.classOnSuccess)}}return e.\u0275fac=function(n){return new(n||e)(t.Hb(t.l),t.Hb(t.D))},e.\u0275cmp=t.Bb({type:e,selectors:[["ngx-image-fallback"]],inputs:{classWhileLoading:"classWhileLoading",classOnError:"classOnError",classOnSuccess:"classOnSuccess"},outputs:{imageLoad:"imageLoad",imageError:"imageError"},features:[t.vb,t.wb],ngContentSelectors:l,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["fallback",""],[3,"alt","sizes","src","srcset","load","error"]],template:function(e,n){if(1&e&&(t.Xb(),t.fc(0,r,2,16,"ng-container",0),t.fc(1,o,1,0,"ng-template",null,1,t.gc)),2&e){const e=t.bc(2);t.Yb("ngIf",n.showImage)("ngIfElse",e)}},directives:[a.i],styles:["ngx-image-fallback{display:block}img.image-fallback-hide-img{opacity:0}"],encapsulation:2,changeDetection:0}),e})();var h=i("1VvW");const m=[{path:"",component:(()=>{class e{constructor(){this.basicImage="https://avatars0.githubusercontent.com/u/15218519?s=60&u=2a0ce3180de9f435f176322a8fc1a1332efe9ff7&v=4",this.randomImage="https://picsum.photos/200?random=1",this.changinImage="https://picsum.photos/200?random=11",this.changingImageInterval=null}ngOnInit(){this.changingImageInterval=setInterval(()=>{if(Math.random()>.3){const e=Math.round(100*Math.random());this.changinImage=`https://picsum.photos/200?random=${100+e}`}else this.randomImage="wrong_url"},2e3)}ngOnDestroy(){clearInterval(this.changingImageInterval)}randomizeImage(){if(Math.random()>.3){const e=Math.round(100*Math.random());this.randomImage=`https://picsum.photos/200?random=${e}`}else this.randomImage="woopsies"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Bb({type:e,selectors:[["ngx-image-fallback-demo"]],decls:37,vars:11,consts:[[1,"image-list"],[1,"image-container",3,"src"],["classWhileLoading","custom-fallback-loading","classOnError","custom-fallback-failed","classOnSuccess","custom-fallback-success",1,"image-container",3,"src"],[1,"image-container","custom-fallback-loading",3,"src"],[3,"click"]],template:function(e,n){1&e&&(t.Mb(0,"h2"),t.hc(1,"Basic"),t.Lb(),t.Mb(2,"ul",0),t.Mb(3,"li"),t.Mb(4,"ngx-image-fallback",1),t.hc(5," You should never see this "),t.Lb(),t.Lb(),t.Mb(6,"li"),t.Mb(7,"ngx-image-fallback",1),t.hc(8," :( "),t.Lb(),t.Lb(),t.Mb(9,"li"),t.Mb(10,"ngx-image-fallback",1),t.Mb(11,"ngx-image-fallback",1),t.Mb(12,"ngx-image-fallback",1),t.Mb(13,"ngx-image-fallback",1),t.hc(14," Quadra-fail "),t.Lb(),t.Lb(),t.Lb(),t.Lb(),t.Lb(),t.Lb(),t.Mb(15,"h2"),t.hc(16,"Custom Styles"),t.Lb(),t.Mb(17,"ul",0),t.Mb(18,"li"),t.Ib(19,"ngx-image-fallback",2),t.Lb(),t.Mb(20,"li"),t.Mb(21,"ngx-image-fallback",1),t.hc(22," :( "),t.Lb(),t.Lb(),t.Mb(23,"li"),t.Ib(24,"ngx-image-fallback",3),t.Lb(),t.Lb(),t.Mb(25,"h2"),t.hc(26,"Listens to new images"),t.Lb(),t.Mb(27,"button",4),t.Tb("click",(function(){return n.randomizeImage()})),t.hc(28,"Randomize"),t.Lb(),t.Mb(29,"ul",0),t.Mb(30,"li"),t.Mb(31,"ngx-image-fallback",2),t.Mb(32,"button",4),t.Tb("click",(function(){return n.randomizeImage()})),t.hc(33,"click to try a new one"),t.Lb(),t.Lb(),t.Lb(),t.Mb(34,"li"),t.Mb(35,"ngx-image-fallback",2),t.hc(36," This changes every two seconds "),t.Lb(),t.Lb(),t.Lb()),2&e&&(t.xb(4),t.Yb("src",n.basicImage),t.xb(3),t.Yb("src","hueuheuheue"),t.xb(3),t.Yb("src","hueuheuheue"),t.xb(1),t.Yb("src","huahuahua"),t.xb(1),t.Yb("src","heuheuehu"),t.xb(1),t.Yb("src","houhouhou"),t.xb(6),t.Yb("src",n.basicImage),t.xb(2),t.Yb("src","hueuheuheue"),t.xb(3),t.Yb("src","hueuheuheue"),t.xb(7),t.Yb("src",n.randomImage),t.xb(4),t.Yb("src",n.changinImage))},directives:[g],styles:["[_nghost-%COMP%]{display:block;width:100%;padding:2rem;box-sizing:border-box}ul[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;margin:0;padding:0;max-width:100%;--item-padding:10px;position:relative;left:calc(-1*var(--item-padding));top:calc(-1*var(--item-padding))}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{width:100px;height:100px;margin:var(--item-padding)}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .image-container[_ngcontent-%COMP%]{max-width:100%;max-height:100%}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .image-container.custom-fallback-loading[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .image-container.image-fallback-loading[_ngcontent-%COMP%]{width:100%;height:100%}.image-container.custom-fallback-loading[_ngcontent-%COMP%]{box-shadow:0 0 10px #00f}.image-container.custom-fallback-failed[_ngcontent-%COMP%]{box-shadow:0 0 10px red}.image-container.custom-fallback-success[_ngcontent-%COMP%]{box-shadow:0 0 10px green}"]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=t.Fb({type:e}),e.\u0275inj=t.Eb({factory:function(n){return new(n||e)},imports:[[h.e.forChild(m)],h.e]}),e})(),u=(()=>{class e{}return e.\u0275mod=t.Fb({type:e}),e.\u0275inj=t.Eb({factory:function(n){return new(n||e)},imports:[[b,s]]}),e})()}}]);