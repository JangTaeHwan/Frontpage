/* 
 * Blur.js
 * Copyright Jacob Kelley
 * MIT License
 */
// Stackblur, courtesy of Mario Klingemann: http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html
(function(l) {
    l.fn.blurjs = function(e) {
        function O() {
            this.a = this.b = this.g = this.r = 0;
            this.next = null
        }
        var y = document.createElement("canvas"), P = !1, H = l(this).selector.replace(/[^a-zA-Z0-9]/g, "");
        if (y.getContext) {
            var e = l.extend({source: "body",radius: 5,overlay: "",offset: {x: 0,y: 0},optClass: "",cache: !1,cacheKeyPrefix: "blurjs-",draggable: !1,debug: !1}, e), R = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 
                328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 
                305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], S = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 
                20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            return this.each(function() {
                var A = l(this), I = l(e.source), B = I.css("backgroundImage").replace(/"/g, "").replace(/url\(|\)$/ig, "");
ctx=y.getContext("2d");tempImg=new Image;tempImg.onload=function(){if(P)
j=tempImg.src;else{y.style.display="none";y.width=tempImg.width;y.height=tempImg.height;ctx.drawImage(tempImg,0,0);var j=y.width,q=y.height,k=e.radius;if(!(isNaN(k)||1>k)){var k=k|0,M=y.getContext("2d"),l;try{try{l=M.getImageData(0,0,j,q)}catch(L){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),l=M.getImageData(0,0,j,q)}catch(T){throw alert("Cannot access local image"),Error("unable to access local image data: "+ T);}}}catch(U){throw alert("Cannot access image"),Error("unable to access image data: "+ U);}
var c=l.data,u,z,a,d,f,J,g,h,i,v,w,x,m,n,o,r,s,t,C;u=k+ k+ 1;var K=j- 1,N=q- 1,p=k+ 1,D=p*(p+ 1)/ 2, E = new O, b = E;
for(a=1;a<u;a++)
if(b=b.next=new O,a==p)
var Q=b;b.next=E;b=a=null;J=f=0;var F=R[k],G=S[k];for(z=0;z<q;z++){m=n=o=g=h=i=0;v=p*(r=c[f]);w=p*(s=c[f+ 1]);x=p*(t=c[f+ 2]);g+=D*r;h+=D*s;i+=D*t;b=E;for(a=0;a<p;a++)
b.r=r,b.g=s,b.b=t,b=b.next;for(a=1;a<p;a++)
d=f+((K<a?K:a)<<2),g+=(b.r=r=c[d])*(C=p- a),h+=(b.g=s=c[d+ 1])*C,i+=(b.b=t=c[d+ 2])*C,m+=r,n+=s,o+=t,b=b.next;a=E;b=Q;for(u=0;u<j;u++)
c[f]=g*F>>G,c[f+ 1]=h*F>>G,c[f+ 2]=i*F>>G,g-=v,h-=w,i-=x,v-=a.r,w-=a.g,x-=a.b,d=J+((d=u+ k+ 1)<K?d:K)<<2,m+=a.r=c[d],n+=a.g=c[d+ 1],o+=a.b=c[d+ 2],g+=m,h+=n,i+=o,a=a.next,v+=r=b.r,w+=s=b.g,x+=t=b.b,m-=r,n-=s,o-=t,b=b.next,f+=4;J+=j}
for(u=0;u<j;u++){n=o=m=h=i=g=0;f=u<<2;v=p*(r=c[f]);w=p*(s=c[f+ 1]);x=p*(t=c[f+ 2]);g+=D*r;h+=D*s;i+=D*t;b=E;for(a=0;a<p;a++)
b.r=r,b.g=s,b.b=t,b=b.next;d=j;for(a=1;a<=k;a++)
f=d+ u<<2,g+=(b.r=r=c[f])*(C=p- a),h+=(b.g=s=c[f+ 1])*C,i+=(b.b=t=c[f+ 2])*C,m+=r,n+=s,o+=t,b=b.next,a<N&&(d+=j);f=u;a=E;b=Q;for(z=0;z<q;z++)
d=f<<2,c[d]=g*F>>G,c[d+ 1]=h*F>>G,c[d+ 2]=i*F>>G,g-=v,h-=w,i-=x,v-=a.r,w-=a.g,x-=a.b,d=u+((d=z+ p)<N?d:N)*j<<2,g+=m+=a.r=c[d],h+=n+=a.g=c[d+ 1],i+=o+=a.b=c[d+ 2],a=a.next,v+=r=b.r,w+=s=b.g,x+=t=b.b,m-=r,n-=s,o-=t,b=b.next,f+=j}
M.putImageData(l,0,0)}
if(!1!=e.overlay)
ctx.beginPath(),ctx.rect(0,0,tempImg.width,tempImg.width),ctx.fillStyle=e.overlay,ctx.fill();var j=y.toDataURL();if(e.cache)
try{e.debug&&console.log("Cache Set"),localStorage.setItem(e.cacheKeyPrefix+ H+"-"+ B+"-data-image",j)}catch(V){console.log(V)}}
q=I.css("backgroundAttachment");k="fixed"==q?"":"-"+(A.offset().left- I.offset().left- e.offset.x)+"px -"+(A.offset().top- I.offset().top-
e.offset.y)+"px";A.css({"background-image":'url("'+ j+'")',"background-repeat":I.css("backgroundRepeat"),"background-position":k,"background-attachment":q});!1!=e.optClass&&A.addClass(e.optClass);e.draggable&&(A.css({"background-attachment":"fixed","background-position":"0 0"}),A.draggable())};Storage.prototype.cacheChecksum=function(j){var q="",k;for(k in j)
var l=j[k],q="[object Object]"==l.toString()?q+(l.x.toString()+ l.y.toString()+",").replace(/[^a-zA-Z0-9]/g,""):q+(l+",").replace(/[^a-zA-Z0-9]/g,"");this.getItem(e.cacheKeyPrefix+ H+"-"+ B+"-options-cache")!=q&&(this.removeItem(e.cacheKeyPrefix+ H+"-"+ B+"-options-cache"),this.setItem(e.cacheKeyPrefix+ H+"-"+ B+"-options-cache",q),e.debug&&console.log("Settings Changed, Cache Emptied"))};var L=null;e.cache&&(localStorage.cacheChecksum(e),L=localStorage.getItem(e.cacheKeyPrefix+ H+"-"+ B+"-data-image"));null!=L?(e.debug&&console.log("Cache Used"),P=!0,tempImg.src=L):(e.debug&&console.log("Source Used"),tempImg.src=B)})}}})(jQuery);;(function($){$.fn.downCount=function(options,callback){var settings=$.extend({date:null,offset:null},options);if(!settings.date){$.error('Date is not defined.');}
if(!Date.parse(settings.date)){$.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');}
var container=this;var currentDate=function(){var date=new Date();var utc=date.getTime()+(date.getTimezoneOffset()*60000);var new_date=new Date(utc+(3600000*settings.offset))
return new_date;};function countdown(){var target_date=new Date(settings.date),current_date=currentDate();var difference=target_date- current_date;if(difference<0){clearInterval(interval);if(callback&&typeof callback==='function')callback();return;}
var _second=1000,_minute=_second*60,_hour=_minute*60,_day=_hour*24;var days=Math.floor(difference/_day),hours=Math.floor((difference%_day)/ _hour),
minutes=Math.floor((difference%_hour)/ _minute),
seconds=Math.floor((difference%_minute)/ _second);
days=(String(days).length>=2)?days:'0'+ days;hours=(String(hours).length>=2)?hours:'0'+ hours;minutes=(String(minutes).length>=2)?minutes:'0'+ minutes;seconds=(String(seconds).length>=2)?seconds:'0'+ seconds;var ref_days=(days===1)?'day':'days',ref_hours=(hours===1)?'hour':'hours',ref_minutes=(minutes===1)?'minute':'minutes',ref_seconds=(seconds===1)?'second':'seconds';container.find('.days').text(days);container.find('.hours').text(hours);container.find('.minutes').text(minutes);container.find('.seconds').text(seconds);container.find('.days_ref').text(ref_days);container.find('.hours_ref').text(ref_hours);container.find('.minutes_ref').text(ref_minutes);container.find('.seconds_ref').text(ref_seconds);};var interval=setInterval(countdown,1000);};})(jQuery);;(function($){var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler);},teardown:function(){$(this).off("resize",$special.handler);},handler:function(event,execAsap){var context=this,args=arguments,dispatch=function(){event.type="debouncedresize";$event.dispatch.apply(context,args);};if(resizeTimeout){clearTimeout(resizeTimeout);}
execAsap?dispatch():resizeTimeout=setTimeout(dispatch,$special.threshold);},threshold:150};})(jQuery);;jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+ c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b- 2)+ c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+ c;return-d/2*(--b*(b- 2)- 1)+ c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+ c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e- 1)*b*b+ 1)+ c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+ c;return d/2*((b-=2)*b*b+ 2)+ c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+ c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e- 1)*b*b*b- 1)+ c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+ c;return-d/2*((b-=2)*b*b*b- 2)+ c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+ c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e- 1)*b*b*b*b+ 1)+ c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+ c;return d/2*((b-=2)*b*b*b*b+ 2)+ c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+ d+ c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+ c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)- 1)+ c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e- 1))+ c},easeOutExpo:function(a,b,c,d,e){return b==e?c+ d:d*(-Math.pow(2,-10*b/e)+ 1)+ c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+ d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b- 1))+ c;return d/2*(-Math.pow(2,-10*--b)+ 2)+ c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)- 1)+ c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e- 1)*b)+ c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1- b*b)- 1)+ c;return d/2*(Math.sqrt(1-(b-=2)*b)+ 1)+ c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+ d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e- f)*2*Math.PI/g))+ c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+ d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e- f)*2*Math.PI/g)+ d+ c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+ d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e- f)*2*Math.PI/g)+ c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e- f)*2*Math.PI/g)*.5+ d+ c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+ 1)*b- f)+ c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e- 1)*b*((f+ 1)*b+ f)+ 1)+ c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+ 1)*b- f)+ c;return d/2*((b-=2)*b*(((f*=1.525)+ 1)*b+ f)+ 2)+ c},easeInBounce:function(a,b,c,d,e){return d- jQuery.easing.easeOutBounce(a,e- b,0,d,e)+ c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+ c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+ c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+ c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+ c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+ c;return jQuery.easing.easeOutBounce(a,b*2- e,0,d,e)*.5+ d*.5+ c}});(function($){$.easyPieChart=function(el,options){var addScaleLine,animateLine,drawLine,easeInOutQuad,rAF,renderBackground,renderScale,renderTrack,_this=this;this.el=el;this.$el=$(el);this.$el.data("easyPieChart",this);this.init=function(){var percent,scaleBy;_this.options=$.extend({},$.easyPieChart.defaultOptions,options);percent=parseInt(_this.$el.data('percent'),10);_this.percentage=0;_this.canvas=$("<canvas width='"+ _this.options.size+"' height='"+ _this.options.size+"'></canvas>").get(0);_this.$el.append(_this.canvas);if(typeof G_vmlCanvasManager!=="undefined"&&G_vmlCanvasManager!==null){G_vmlCanvasManager.initElement(_this.canvas);}
_this.ctx=_this.canvas.getContext('2d');if(window.devicePixelRatio>1){scaleBy=window.devicePixelRatio;$(_this.canvas).css({width:_this.options.size,height:_this.options.size});_this.canvas.width*=scaleBy;_this.canvas.height*=scaleBy;_this.ctx.scale(scaleBy,scaleBy);}
_this.ctx.translate(_this.options.size/2,_this.options.size/2);_this.$el.addClass('easyPieChart');_this.$el.css({width:_this.options.size,height:_this.options.size,lineHeight:""+ _this.options.size+"px"});_this.update(percent);return _this;};this.update=function(percent){percent=parseFloat(percent)||0;if(_this.options.animate===false){drawLine(percent);}else{animateLine(_this.percentage,percent);}
return _this;};renderScale=function(){var i,_i,_results;_this.ctx.fillStyle=_this.options.scaleColor;_this.ctx.lineWidth=1;_results=[];for(i=_i=0;_i<=24;i=++_i){_results.push(addScaleLine(i));}
return _results;};addScaleLine=function(i){var offset;offset=i%6===0?0:_this.options.size*0.017;_this.ctx.save();_this.ctx.rotate(i*Math.PI/12);_this.ctx.fillRect(_this.options.size/2- offset,0,-_this.options.size*0.05+ offset,1);_this.ctx.restore();};renderTrack=function(){var offset;offset=_this.options.size/2- _this.options.lineWidth/2;if(_this.options.scaleColor!==false){offset-=_this.options.size*0.08;}
_this.ctx.beginPath();_this.ctx.arc(0,0,offset,0,Math.PI*2,true);_this.ctx.closePath();_this.ctx.strokeStyle=_this.options.trackColor;_this.ctx.lineWidth=_this.options.lineWidth;_this.ctx.stroke();};renderBackground=function(){if(_this.options.scaleColor!==false){renderScale();}
if(_this.options.trackColor!==false){renderTrack();}};drawLine=function(percent){var offset;renderBackground();_this.ctx.strokeStyle=$.isFunction(_this.options.barColor)?_this.options.barColor(percent):_this.options.barColor;_this.ctx.lineCap=_this.options.lineCap;_this.ctx.lineWidth=_this.options.lineWidth;offset=_this.options.size/2- _this.options.lineWidth/2;if(_this.options.scaleColor!==false){offset-=_this.options.size*0.08;}
_this.ctx.save();_this.ctx.rotate(-Math.PI/2);_this.ctx.beginPath();_this.ctx.arc(0,0,offset,0,Math.PI*2*percent/100,false);_this.ctx.stroke();_this.ctx.restore();};rAF=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};})();animateLine=function(from,to){var anim,startTime;_this.options.onStart.call(_this);_this.percentage=to;startTime=Date.now();anim=function(){var currentValue,process;process=Date.now()- startTime;if(process<_this.options.animate){rAF(anim);}
_this.ctx.clearRect(-_this.options.size/2,-_this.options.size/2,_this.options.size,_this.options.size);renderBackground.call(_this);currentValue=[easeInOutQuad(process,from,to- from,_this.options.animate)];_this.options.onStep.call(_this,currentValue);drawLine.call(_this,currentValue);if(process>=_this.options.animate){return _this.options.onStop.call(_this);}};rAF(anim);};easeInOutQuad=function(t,b,c,d){var easeIn,easing;easeIn=function(t){return Math.pow(t,2);};easing=function(t){if(t<1){return easeIn(t);}else{return 2- easeIn((t/2)*-2+ 2);}};t/=d/2;return c/2*easing(t)+ b;};return this.init();};$.easyPieChart.defaultOptions={barColor:'#ef1e25',trackColor:'#f2f2f2',scaleColor:'#dfe0e0',lineCap:'round',size:110,lineWidth:3,animate:false,onStart:$.noop,onStop:$.noop,onStep:$.noop};$.fn.easyPieChart=function(options){return $.each(this,function(i,el){var $el;$el=$(el);if(!$el.data('easyPieChart')){return $el.data('easyPieChart',new $.easyPieChart(el,options));}});};return void 0;})(jQuery);;(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):"html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length- 1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+ 1,a,"next"))},prev:function(a){var d=b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index- 1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+ a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+ d.y,left:0.5*d.w+ d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}
p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+ c+" fancybox-tmp "+ d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+ b,x(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e- 1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+ g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)
if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case"inline":case"ajax":case"html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace(/\{href\}/g,g);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+ g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+ a+'" value="'+ b+'"></param>';h+=" "+ a+'="'+ b+'"'}),e+='<embed src="'+ g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+ h+"></embed></object>"}
u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+ y[3]),s=m(y[0]+ y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)- l.width());w=m(l.outerHeight(!0)- l.height());A=z+ y;u=s+ w;D=F(c)?(a.w- A)*m(c)/ 100 : c;
B=F(k)?(a.h- u)*m(k)/ 100 : k;
if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x","hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")- A:n);p=m(F(p)?m(p,"w")- A:p);v=m(F(v)?m(v,"h")- u:v);q=m(F(q)?m(q,"h")- u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w- A,p),q=Math.min(a.h- u,q));A=a.w- z;s=a.h- s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)
if(g.width(c).height(k),e.width(c+ y),a=e.width(),z=e.height(),h.aspectRatio)
for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k- 10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+ y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a- A))),k=Math.max(v,Math.min(k,k-(z- s)));r&&"auto"===t&&k<B&&c+ y+ r<A&&(c+=r);g.width(c).height(k);e.width(c+ y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z- l.outerHeight(!0),skinSpace:l.height()- k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+ c[1]+ c[3],g=b.wrap.height()+ c[0]+ c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h- g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w- f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length- 1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length- 1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h- g)*a.topRatio,c.left=n.x+(n.w- f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top- h*a.topRatio),left:x(c.left- k*a.leftRatio),width:x(f+ k),height:x(g+ h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a- d.start)/ (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" ===
f?c:c- g*e)),b.inner[f](m("width"===f?c:c- g*e- h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])- 200),c[g]="+=200px"):(e[g]=x(m(e[g])+ 200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+ c+'-wrap">'+ e+"</div>");switch(c){case"inside":c=b.skin;break;case"outside":c=b.wrap;break;case"over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}
d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+ l+'="'+ m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()- b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d- a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);(function($){"use strict";var F=$.fancybox,format=function(url,rez,params){params=params||'';if($.type(params)==="object"){params=$.param(params,true);}
$.each(rez,function(key,value){url=url.replace('$'+ key,value||'');});if(params.length){url+=(url.indexOf('?')>0?'&':'?')+ params;}
return url;};F.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'opaque',enablejsapi:1},type:'iframe',url:'//www.youtube.com/embed/$3'},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:'iframe',url:'//player.vimeo.com/video/$1'},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:'yes'},type:'swf',url:function(rez,params,obj){obj.swf.flashVars='playerVars='+ $.param(params,true);return'//www.metacafe.com/fplayer/'+ rez[1]+'/.swf';}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'swf',url:'//www.dailymotion.com/swf/video/$1'},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:'iframe',url:'//www.twitvid.com/embed.php?guid=$1'},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:'image',url:'//twitpic.com/show/full/$1/'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:'iframe',url:function(rez){return'//maps.google.'+ rez[1]+'/'+ rez[3]+''+ rez[4]+'&output='+(rez[4].indexOf('layer=c')>0?'svembed':'embed');}}},beforeLoad:function(opts,obj){var url=obj.href||'',type=false,what,item,rez,params;for(what in opts){if(opts.hasOwnProperty(what)){item=opts[what];rez=url.match(item.matcher);if(rez){type=item.type;params=$.extend(true,{},item.params,obj[what]||($.isPlainObject(opts[what])?opts[what].params:null));url=$.type(item.url)==="function"?item.url.call(this,rez,params,obj):format(item.url,rez,params);break;}}}
if(type){obj.href=url;obj.type=type;obj.autoHeight=false;}}};}(jQuery));;;(function($){$.flexslider=function(el,options){var slider=$(el);slider.vars=$.extend({},$.flexslider.defaults,options);var namespace=slider.vars.namespace,msGesture=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,touch=(("ontouchstart"in window)||msGesture||window.DocumentTouch&&document instanceof DocumentTouch)&&slider.vars.touch,eventType="click touchend MSPointerUp",watchedEvent="",watchedEventClearTimer,vertical=slider.vars.direction==="vertical",reverse=slider.vars.reverse,carousel=(slider.vars.itemWidth>0),fade=slider.vars.animation==="fade",asNav=slider.vars.asNavFor!=="",methods={},focused=true;$.data(el,"flexslider",slider);methods={init:function(){slider.animating=false;slider.currentSlide=parseInt((slider.vars.startAt?slider.vars.startAt:0),10);if(isNaN(slider.currentSlide))slider.currentSlide=0;slider.animatingTo=slider.currentSlide;slider.atEnd=(slider.currentSlide===0||slider.currentSlide===slider.last);slider.containerSelector=slider.vars.selector.substr(0,slider.vars.selector.search(' '));slider.slides=$(slider.vars.selector,slider);slider.container=$(slider.containerSelector,slider);slider.count=slider.slides.length;slider.syncExists=$(slider.vars.sync).length>0;if(slider.vars.animation==="slide")slider.vars.animation="swing";slider.prop=(vertical)?"top":"marginLeft";slider.args={};slider.manualPause=false;slider.stopped=false;slider.started=false;slider.startTimeout=null;slider.transitions=!slider.vars.video&&!fade&&slider.vars.useCSS&&(function(){var obj=document.createElement('div'),props=['perspectiveProperty','WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i in props){if(obj.style[props[i]]!==undefined){slider.pfx=props[i].replace('Perspective','').toLowerCase();slider.prop="-"+ slider.pfx+"-transform";return true;}}
return false;}());if(slider.vars.controlsContainer!=="")slider.controlsContainer=$(slider.vars.controlsContainer).length>0&&$(slider.vars.controlsContainer);if(slider.vars.manualControls!=="")slider.manualControls=$(slider.vars.manualControls).length>0&&$(slider.vars.manualControls);if(slider.vars.randomize){slider.slides.sort(function(){return(Math.round(Math.random())-0.5);});slider.container.empty().append(slider.slides);}
slider.doMath();slider.setup("init");if(slider.vars.controlNav)methods.controlNav.setup();if(slider.vars.directionNav)methods.directionNav.setup();if(slider.vars.keyboard&&($(slider.containerSelector).length===1||slider.vars.multipleKeyboard)){$(document).bind('keyup',function(event){var keycode=event.keyCode;if(!slider.animating&&(keycode===39||keycode===37)){var target=(keycode===39)?slider.getTarget('next'):(keycode===37)?slider.getTarget('prev'):false;slider.flexAnimate(target,slider.vars.pauseOnAction);}});}
if(slider.vars.mousewheel){slider.bind('mousewheel',function(event,delta,deltaX,deltaY){event.preventDefault();var target=(delta<0)?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);});}
if(slider.vars.pausePlay)methods.pausePlay.setup();if(slider.vars.slideshow&&slider.vars.pauseInvisible)methods.pauseInvisible.init();if(slider.vars.slideshow){if(slider.vars.pauseOnHover){slider.hover(function(){if(!slider.manualPlay&&!slider.manualPause)slider.pause();},function(){if(!slider.manualPause&&!slider.manualPlay&&!slider.stopped)slider.play();});}
if(!slider.vars.pauseInvisible||!methods.pauseInvisible.isHidden()){(slider.vars.initDelay>0)?slider.startTimeout=setTimeout(slider.play,slider.vars.initDelay):slider.play();}}
if(asNav)methods.asNav.setup();if(touch&&slider.vars.touch)methods.touch();if(!fade||(fade&&slider.vars.smoothHeight))$(window).bind("resize orientationchange focus",methods.resize);slider.find("img").attr("draggable","false");setTimeout(function(){slider.vars.start(slider);},200);},asNav:{setup:function(){slider.asNav=true;slider.animatingTo=Math.floor(slider.currentSlide/slider.move);slider.currentItem=slider.currentSlide;slider.slides.removeClass(namespace+"active-slide").eq(slider.currentItem).addClass(namespace+"active-slide");if(!msGesture){slider.slides.on(eventType,function(e){e.preventDefault();var $slide=$(this),target=$slide.index();var posFromLeft=$slide.offset().left- $(slider).scrollLeft();if(posFromLeft<=0&&$slide.hasClass(namespace+'active-slide')){slider.flexAnimate(slider.getTarget("prev"),true);}else if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass(namespace+"active-slide")){slider.direction=(slider.currentItem<target)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});}else{el._slider=slider;slider.slides.each(function(){var that=this;that._gesture=new MSGesture();that._gesture.target=that;that.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)
e.currentTarget._gesture.addPointer(e.pointerId);},false);that.addEventListener("MSGestureTap",function(e){e.preventDefault();var $slide=$(this),target=$slide.index();if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass('active')){slider.direction=(slider.currentItem<target)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});});}}},controlNav:{setup:function(){if(!slider.manualControls){methods.controlNav.setupPaging();}else{methods.controlNav.setupManual();}},setupPaging:function(){var type=(slider.vars.controlNav==="thumbnails")?'control-thumbs':'control-paging',j=1,item,slide;slider.controlNavScaffold=$('<ol class="'+ namespace+'control-nav '+ namespace+ type+'"></ol>');if(slider.pagingCount>1){for(var i=0;i<slider.pagingCount;i++){slide=slider.slides.eq(i);item=(slider.vars.controlNav==="thumbnails")?'<img src="'+ slider.slides.eq(i).attr("data-thumb")+'"/>':'<a><i class="mk-icon-circle-blank"></i></a>';if('thumbnails'===slider.vars.controlNav&&true===slider.vars.thumbCaptions){var captn=slide.attr('data-thumbcaption');if(''!=captn&&undefined!=captn)item+='<span class="'+ namespace+'caption">'+ captn+'</span>';}
slider.controlNavScaffold.append('<li>'+ item+'</li>');j++;}}
(slider.controlsContainer)?$(slider.controlsContainer).append(slider.controlNavScaffold):slider.append(slider.controlNavScaffold);methods.controlNav.set();methods.controlNav.active();slider.controlNavScaffold.delegate('a, img',eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){slider.direction=(target>slider.currentSlide)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},setupManual:function(){slider.controlNav=slider.manualControls;methods.controlNav.active();slider.controlNav.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){(target>slider.currentSlide)?slider.direction="next":slider.direction="prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},set:function(){var selector=(slider.vars.controlNav==="thumbnails")?'img':'a';slider.controlNav=$('.'+ namespace+'control-nav li '+ selector,(slider.controlsContainer)?slider.controlsContainer:slider);},active:function(){slider.controlNav.removeClass(namespace+"active").eq(slider.animatingTo).addClass(namespace+"active");},update:function(action,pos){if(slider.pagingCount>1&&action==="add"){slider.controlNavScaffold.append($('<li><a>'+ slider.count+'</a></li>'));}else if(slider.pagingCount===1){slider.controlNavScaffold.find('li').remove();}else{slider.controlNav.eq(pos).closest('li').remove();}
methods.controlNav.set();(slider.pagingCount>1&&slider.pagingCount!==slider.controlNav.length)?slider.update(pos,action):methods.controlNav.active();}},directionNav:{setup:function(){var directionNavScaffold=$('<ul class="'+ namespace+'direction-nav"><li><a class="'+ namespace+'prev" href="#">'+ slider.vars.directionNavArrowsLeft+ slider.vars.prevText+'</a></li><li><a class="'+ namespace+'next" href="#">'+ slider.vars.directionNavArrowsRight+ slider.vars.nextText+'</a></li></ul>');if(slider.controlsContainer){$(slider.controlsContainer).append(directionNavScaffold);slider.directionNav=$('.'+ namespace+'direction-nav li a',slider.controlsContainer);}else{slider.append(directionNavScaffold);slider.directionNav=$('.'+ namespace+'direction-nav li a',slider);}
methods.directionNav.update();slider.directionNav.bind(eventType,function(event){event.preventDefault();var target;if(watchedEvent===""||watchedEvent===event.type){target=($(this).hasClass(namespace+'next'))?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},update:function(){var disabledClass=namespace+'disabled';if(slider.pagingCount===1){slider.directionNav.addClass(disabledClass).attr('tabindex','-1');}else if(!slider.vars.animationLoop){if(slider.animatingTo===0){slider.directionNav.removeClass(disabledClass).filter('.'+ namespace+"prev").addClass(disabledClass).attr('tabindex','-1');}else if(slider.animatingTo===slider.last){slider.directionNav.removeClass(disabledClass).filter('.'+ namespace+"next").addClass(disabledClass).attr('tabindex','-1');}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}},pausePlay:{setup:function(){var pausePlayScaffold=$('<div class="'+ namespace+'pauseplay"><a></a></div>');if(slider.controlsContainer){slider.controlsContainer.append(pausePlayScaffold);slider.pausePlay=$('.'+ namespace+'pauseplay a',slider.controlsContainer);}else{slider.append(pausePlayScaffold);slider.pausePlay=$('.'+ namespace+'pauseplay a',slider);}
methods.pausePlay.update((slider.vars.slideshow)?namespace+'pause':namespace+'play');slider.pausePlay.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){if($(this).hasClass(namespace+'pause')){slider.manualPause=true;slider.manualPlay=false;slider.pause();}else{slider.manualPause=false;slider.manualPlay=true;slider.play();}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},update:function(state){(state==="play")?slider.pausePlay.removeClass(namespace+'pause').addClass(namespace+'play').html(slider.vars.playText):slider.pausePlay.removeClass(namespace+'play').addClass(namespace+'pause').html(slider.vars.pauseText);}},touch:function(){var startX,startY,offset,cwidth,dx,startT,scrolling=false,localX=0,localY=0,accDx=0;if(!msGesture){el.addEventListener('touchstart',onTouchStart,false);function onTouchStart(e){if(slider.animating){e.preventDefault();}else if((window.navigator.msPointerEnabled)||e.touches.length===1){slider.pause();cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());localX=e.touches[0].pageX;localY=e.touches[0].pageY;offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last- slider.currentSlide+ slider.cloneOffset)*cwidth:(slider.currentSlide+ slider.cloneOffset)*cwidth;startX=(vertical)?localY:localX;startY=(vertical)?localX:localY;el.addEventListener('touchmove',onTouchMove,false);el.addEventListener('touchend',onTouchEnd,false);}}
function onTouchMove(e){localX=e.touches[0].pageX;localY=e.touches[0].pageY;dx=(vertical)?startX- localY:startX- localX;scrolling=(vertical)?(Math.abs(dx)<Math.abs(localX- startY)):(Math.abs(dx)<Math.abs(localY- startY));var fxms=500;if(!scrolling||Number(new Date())- startT>fxms){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=dx/((slider.currentSlide===0&&dx<0||slider.currentSlide===slider.last&&dx>0)?(Math.abs(dx)/cwidth+2) : 1);
}
slider.setProps(offset+ dx,"setTouch");}}}
function onTouchEnd(e){el.removeEventListener('touchmove',onTouchMove,false);if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())- startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}
el.removeEventListener('touchend',onTouchEnd,false);startX=null;startY=null;dx=null;offset=null;}}else{el.style.msTouchAction="none";el._gesture=new MSGesture();el._gesture.target=el;el.addEventListener("MSPointerDown",onMSPointerDown,false);el._slider=slider;el.addEventListener("MSGestureChange",onMSGestureChange,false);el.addEventListener("MSGestureEnd",onMSGestureEnd,false);function onMSPointerDown(e){e.stopPropagation();if(slider.animating){e.preventDefault();}else{slider.pause();el._gesture.addPointer(e.pointerId);accDx=0;cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last- slider.currentSlide+ slider.cloneOffset)*cwidth:(slider.currentSlide+ slider.cloneOffset)*cwidth;}}
function onMSGestureChange(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}
var transX=-e.translationX,transY=-e.translationY;accDx=accDx+((vertical)?transY:transX);dx=accDx;scrolling=(vertical)?(Math.abs(accDx)<Math.abs(-transX)):(Math.abs(accDx)<Math.abs(-transY));if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){el._gesture.stop();});return;}
if(!scrolling||Number(new Date())- startT>500){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=accDx/((slider.currentSlide===0&&accDx<0||slider.currentSlide===slider.last&&accDx>0)?(Math.abs(accDx)/ cwidth + 2) : 1);
}
slider.setProps(offset+ dx,"setTouch");}}}
function onMSGestureEnd(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}
if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())- startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}
startX=null;startY=null;dx=null;offset=null;accDx=0;}}},resize:function(){if(!slider.animating&&slider.is(':visible')){if(!carousel)slider.doMath();if(fade){methods.smoothHeight();}else if(carousel){slider.slides.width(slider.computedW);slider.update(slider.pagingCount);slider.setProps();}
else if(vertical){slider.viewport.height(slider.h);slider.setProps(slider.h,"setTotal");}else{if(slider.vars.smoothHeight)methods.smoothHeight();slider.newSlides.width(slider.computedW);slider.setProps(slider.computedW,"setTotal");}}},smoothHeight:function(dur){if(!vertical||fade){var $obj=(fade)?slider:slider.viewport;(dur)?$obj.animate({"height":slider.slides.eq(slider.animatingTo).height()},dur):$obj.height(slider.slides.eq(slider.animatingTo).height());}},sync:function(action){var $obj=$(slider.vars.sync).data("flexslider"),target=slider.animatingTo;switch(action){case"animate":$obj.flexAnimate(target,slider.vars.pauseOnAction,false,true);break;case"play":if(!$obj.playing&&!$obj.asNav){$obj.play();}break;case"pause":$obj.pause();break;}},uniqueID:function($clone){$clone.find('[id]').each(function(){var $this=$(this);$this.attr('id',$this.attr('id')+'_clone');});return $clone;},pauseInvisible:{visProp:null,init:function(){var prefixes=['webkit','moz','ms','o'];if('hidden'in document)return'hidden';for(var i=0;i<prefixes.length;i++){if((prefixes[i]+'Hidden')in document)
methods.pauseInvisible.visProp=prefixes[i]+'Hidden';}
if(methods.pauseInvisible.visProp){var evtname=methods.pauseInvisible.visProp.replace(/[H|h]idden/,'')+'visibilitychange';document.addEventListener(evtname,function(){if(methods.pauseInvisible.isHidden()){if(slider.startTimeout)clearTimeout(slider.startTimeout);else slider.pause();}
else{if(slider.started)slider.play();else(slider.vars.initDelay>0)?setTimeout(slider.play,slider.vars.initDelay):slider.play();}});}},isHidden:function(){return document[methods.pauseInvisible.visProp]||false;}},setToClearWatchedEvent:function(){clearTimeout(watchedEventClearTimer);watchedEventClearTimer=setTimeout(function(){watchedEvent="";},3000);}};slider.flexAnimate=function(target,pause,override,withSync,fromNav){if(!slider.vars.animationLoop&&target!==slider.currentSlide){slider.direction=(target>slider.currentSlide)?"next":"prev";}
if(asNav&&slider.pagingCount===1)slider.direction=(slider.currentItem<target)?"next":"prev";if(!slider.animating&&(slider.canAdvance(target,fromNav)||override)&&slider.is(":visible")){if(asNav&&withSync){var master=$(slider.vars.asNavFor).data('flexslider');slider.atEnd=target===0||target===slider.count- 1;master.flexAnimate(target,true,false,true,fromNav);slider.direction=(slider.currentItem<target)?"next":"prev";master.direction=slider.direction;if(Math.ceil((target+ 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");target=Math.floor(target/slider.visible);}else{slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");return false;}}
slider.animating=true;slider.animatingTo=target;if(pause)slider.pause();slider.vars.before(slider);if(slider.syncExists&&!fromNav)methods.sync("animate");if(slider.vars.controlNav)methods.controlNav.active();if(!carousel)slider.slides.removeClass(namespace+'active-slide').eq(target).addClass(namespace+'active-slide');slider.atEnd=target===0||target===slider.last;if(slider.vars.directionNav)methods.directionNav.update();if(target===slider.last){slider.vars.end(slider);if(!slider.vars.animationLoop)slider.pause();}
if(!fade){var dimension=(vertical)?slider.slides.filter(':first').height():slider.computedW,margin,slideString,calcNext;if(carousel){margin=slider.vars.itemMargin;calcNext=((slider.itemW+ margin)*slider.move)*slider.animatingTo;slideString=(calcNext>slider.limit&&slider.visible!==1)?slider.limit:calcNext;}else if(slider.currentSlide===0&&target===slider.count- 1&&slider.vars.animationLoop&&slider.direction!=="next"){slideString=(reverse)?(slider.count+ slider.cloneOffset)*dimension:0;}else if(slider.currentSlide===slider.last&&target===0&&slider.vars.animationLoop&&slider.direction!=="prev"){slideString=(reverse)?0:(slider.count+ 1)*dimension;}else{slideString=(reverse)?((slider.count- 1)- target+ slider.cloneOffset)*dimension:(target+ slider.cloneOffset)*dimension;}
slider.setProps(slideString,"",slider.vars.animationSpeed);if(slider.transitions){if(!slider.vars.animationLoop||!slider.atEnd){slider.animating=false;slider.currentSlide=slider.animatingTo;}
slider.container.unbind("webkitTransitionEnd transitionend");slider.container.bind("webkitTransitionEnd transitionend",function(){slider.wrapup(dimension);});}else{slider.container.animate(slider.args,slider.vars.animationSpeed,slider.vars.easing,function(){slider.wrapup(dimension);});}}else{if(!touch){slider.slides.eq(slider.currentSlide).css({"zIndex":1}).animate({"opacity":0},slider.vars.animationSpeed,slider.vars.easing);slider.slides.eq(target).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing,slider.wrapup);}else{slider.slides.eq(slider.currentSlide).css({"opacity":0,"zIndex":1});slider.slides.eq(target).css({"opacity":1,"zIndex":2});slider.wrapup(dimension);}}
if(slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed);}};slider.wrapup=function(dimension){if(!fade&&!carousel){if(slider.currentSlide===0&&slider.animatingTo===slider.last&&slider.vars.animationLoop){slider.setProps(dimension,"jumpEnd");}else if(slider.currentSlide===slider.last&&slider.animatingTo===0&&slider.vars.animationLoop){slider.setProps(dimension,"jumpStart");}}
slider.animating=false;slider.currentSlide=slider.animatingTo;slider.vars.after(slider);};slider.animateSlides=function(){if(!slider.animating&&focused)slider.flexAnimate(slider.getTarget("next"));};slider.pause=function(){clearInterval(slider.animatedSlides);slider.animatedSlides=null;slider.playing=false;if(slider.vars.pausePlay)methods.pausePlay.update("play");if(slider.syncExists)methods.sync("pause");};slider.play=function(){if(slider.playing)clearInterval(slider.animatedSlides);slider.animatedSlides=slider.animatedSlides||setInterval(slider.animateSlides,slider.vars.slideshowSpeed);slider.started=slider.playing=true;if(slider.vars.pausePlay)methods.pausePlay.update("pause");if(slider.syncExists)methods.sync("play");};slider.stop=function(){slider.pause();slider.stopped=true;};slider.canAdvance=function(target,fromNav){var last=(asNav)?slider.pagingCount- 1:slider.last;return(fromNav)?true:(asNav&&slider.currentItem===slider.count- 1&&target===0&&slider.direction==="prev")?true:(asNav&&slider.currentItem===0&&target===slider.pagingCount- 1&&slider.direction!=="next")?false:(target===slider.currentSlide&&!asNav)?false:(slider.vars.animationLoop)?true:(slider.atEnd&&slider.currentSlide===0&&target===last&&slider.direction!=="next")?false:(slider.atEnd&&slider.currentSlide===last&&target===0&&slider.direction==="next")?false:true;};slider.getTarget=function(dir){slider.direction=dir;if(dir==="next"){return(slider.currentSlide===slider.last)?0:slider.currentSlide+ 1;}else{return(slider.currentSlide===0)?slider.last:slider.currentSlide- 1;}};slider.setProps=function(pos,special,dur){var target=(function(){var posCheck=(pos)?pos:((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.animatingTo,posCalc=(function(){if(carousel){return(special==="setTouch")?pos:(reverse&&slider.animatingTo===slider.last)?0:(reverse)?slider.limit-(((slider.itemW+ slider.vars.itemMargin)*slider.move)*slider.animatingTo):(slider.animatingTo===slider.last)?slider.limit:posCheck;}else{switch(special){case"setTotal":return(reverse)?((slider.count- 1)- slider.currentSlide+ slider.cloneOffset)*pos:(slider.currentSlide+ slider.cloneOffset)*pos;case"setTouch":return(reverse)?pos:pos;case"jumpEnd":return(reverse)?pos:slider.count*pos;case"jumpStart":return(reverse)?slider.count*pos:pos;default:return pos;}}}());return(posCalc*-1)+"px";}());if(slider.transitions){target=(vertical)?"translate3d(0,"+ target+",0)":"translate3d("+ target+",0,0)";dur=(dur!==undefined)?(dur/1000)+"s":"0s";slider.container.css("-"+ slider.pfx+"-transition-duration",dur);slider.container.css("transition-duration",dur);}
slider.args[slider.prop]=target;if(slider.transitions||dur===undefined)slider.container.css(slider.args);slider.container.css('transform',target);};slider.setup=function(type){if(!fade){var sliderOffset,arr;if(type==="init"){slider.viewport=$('<div class="'+ namespace+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(slider).append(slider.container);slider.cloneCount=0;slider.cloneOffset=0;if(reverse){arr=$.makeArray(slider.slides).reverse();slider.slides=$(arr);slider.container.empty().append(slider.slides);}}
if(slider.vars.animationLoop&&!carousel){slider.cloneCount=2;slider.cloneOffset=1;if(type!=="init")slider.container.find('.clone').remove();slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden','true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden','true'));methods.uniqueID(slider.slides.first().clone().addClass('clone')).appendTo(slider.container);methods.uniqueID(slider.slides.last().clone().addClass('clone')).prependTo(slider.container);}
slider.newSlides=$(slider.vars.selector,slider);sliderOffset=(reverse)?slider.count- 1- slider.currentSlide+ slider.cloneOffset:slider.currentSlide+ slider.cloneOffset;if(vertical&&!carousel){slider.container.height((slider.count+ slider.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){slider.newSlides.css({"display":"block"});slider.doMath();slider.viewport.height(slider.h);slider.setProps(sliderOffset*slider.h,"init");},(type==="init")?100:0);}else{slider.container.width((slider.count+ slider.cloneCount)*200+"%");slider.setProps(sliderOffset*slider.computedW,"init");setTimeout(function(){slider.doMath();slider.newSlides.css({"width":slider.computedW,"float":"left","display":"block"});if(slider.vars.smoothHeight)methods.smoothHeight();},(type==="init")?100:0);}}else{slider.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(type==="init"){if(!touch){slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing);}else{slider.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+ slider.vars.animationSpeed/1000+"s ease","zIndex":1}).eq(slider.currentSlide).css({"opacity":1,"zIndex":2});}}
if(slider.vars.smoothHeight)methods.smoothHeight();}
if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(slider.currentSlide).addClass(namespace+"active-slide");slider.vars.init(slider);};slider.doMath=function(){var slide=slider.slides.first(),slideMargin=slider.vars.itemMargin,minItems=slider.vars.minItems,maxItems=slider.vars.maxItems;slider.w=(slider.viewport===undefined)?slider.width():slider.viewport.width();slider.h=slide.height();slider.boxPadding=slide.outerWidth()- slide.width();if(carousel){slider.itemT=slider.vars.itemWidth+ slideMargin;slider.minW=(minItems)?minItems*slider.itemT:slider.w;slider.maxW=(maxItems)?(maxItems*slider.itemT)- slideMargin:slider.w;slider.itemW=(slider.minW>slider.w)?(slider.w-(slideMargin*(minItems- 1)))/minItems :
(slider.maxW<slider.w)?(slider.w-(slideMargin*(maxItems- 1)))/maxItems :
(slider.vars.itemWidth>slider.w)?slider.w:slider.vars.itemWidth;slider.visible=Math.floor(slider.w/(slider.itemW));slider.move=(slider.vars.move>0&&slider.vars.move<slider.visible)?slider.vars.move:slider.visible;slider.pagingCount=Math.ceil(((slider.count- slider.visible)/slider.move) + 1);
slider.last=slider.pagingCount- 1;slider.limit=(slider.pagingCount===1)?0:(slider.vars.itemWidth>slider.w)?(slider.itemW*(slider.count- 1))+(slideMargin*(slider.count- 1)):((slider.itemW+ slideMargin)*slider.count)- slider.w- slideMargin;}else{slider.itemW=slider.w;slider.pagingCount=slider.count;slider.last=slider.count- 1;}
slider.computedW=slider.itemW- slider.boxPadding;};slider.update=function(pos,action){slider.doMath();if(!carousel){if(pos<slider.currentSlide){slider.currentSlide+=1;}else if(pos<=slider.currentSlide&&pos!==0){slider.currentSlide-=1;}
slider.animatingTo=slider.currentSlide;}
if(slider.vars.controlNav&&!slider.manualControls){if((action==="add"&&!carousel)||slider.pagingCount>slider.controlNav.length){methods.controlNav.update("add");}else if((action==="remove"&&!carousel)||slider.pagingCount<slider.controlNav.length){if(carousel&&slider.currentSlide>slider.last){slider.currentSlide-=1;slider.animatingTo-=1;}
methods.controlNav.update("remove",slider.last);}}
if(slider.vars.directionNav)methods.directionNav.update();};slider.addSlide=function(obj,pos){var $obj=$(obj);slider.count+=1;slider.last=slider.count- 1;if(vertical&&reverse){(pos!==undefined)?slider.slides.eq(slider.count- pos).after($obj):slider.container.prepend($obj);}else{(pos!==undefined)?slider.slides.eq(pos).before($obj):slider.container.append($obj);}
slider.update(pos,"add");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.added(slider);};slider.removeSlide=function(obj){var pos=(isNaN(obj))?slider.slides.index($(obj)):obj;slider.count-=1;slider.last=slider.count- 1;if(isNaN(obj)){$(obj,slider.slides).remove();}else{(vertical&&reverse)?slider.slides.eq(slider.last).remove():slider.slides.eq(obj).remove();}
slider.doMath();slider.update(pos,"remove");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.removed(slider);};methods.init();};$(window).blur(function(e){focused=false;}).focus(function(e){focused=true;});$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:true,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",directionNavArrowsLeft:'<i class="mk-jupiter-icon-arrow-left"></i>',directionNavArrowsRight:'<i class="mk-jupiter-icon-arrow-right"></i>',keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};$.fn.flexslider=function(options){if(options===undefined)options={};if(typeof options==="object"){return this.each(function(){var $this=$(this),selector=(options.selector)?options.selector:".slides > li",$slides=$this.find(selector);if(($slides.length===1&&options.allowOneSlide===true)||$slides.length===0){$slides.fadeIn(400);if(options.start)options.start($this);}else if($this.data('flexslider')===undefined){new $.flexslider(this,options);}});}else{var $slider=$(this).data('flexslider');switch(options){case"play":$slider.play();break;case"pause":$slider.pause();break;case"stop":$slider.stop();break;case"next":$slider.flexAnimate($slider.getTarget("next"),true);break;case"prev":case"previous":$slider.flexAnimate($slider.getTarget("prev"),true);break;default:if(typeof options==="number")$slider.flexAnimate(options,true);}}};})(jQuery);;;(function($,window){var pluginName="header",defaults={headerNavigationContainer:'mk-header-nav-container',headerPaddingWrapper:'mk-header-padding-wrapper',innerHeaderClass:'mk-header-inner',headerToolbarClass:'mk-header-toolbar',classicStyleNavigationClass:'mk-header-nav-container',fixHeaderClass:'mk-fixed'};function Header(element,options){this.element=element;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init();}
Header.prototype={init:function(){var that=this;new ChopScroll(function(){if(that.shouldListenToScroll()){return;}
that.makeSuitableHeader();that.options.onScrollCallback();},10);},shouldListenToScroll:function(){return is_touch_device()||mk_header_sticky===false||$(window).width()<mk_responsive_nav_width;},isHeaderToolbarExists:function(){var headerToolbarClass='.'+ this.options.headerToolbarClass;return $.exists(headerToolbarClass);},isWpAdminbarExists:function(){return $.exists('#wpadminbar');},isClassicNavigation:function(){var element=this.element,classicStyleNavigationClass=this.options.classicStyleNavigationClass;return $(element).hasClass(classicStyleNavigationClass);},isHeaderNavigationFixed:function(){var headerNavigationContainer='.'+ this.options.headerNavigationContainer,fixHeaderClass=this.options.fixHeaderClass;return $(headerNavigationContainer).hasClass(fixHeaderClass);},isInnerHeaderFixed:function(){var innerHeaderClass='.'+ this.options.innerHeaderClass,fixHeaderClass=this.options.fixHeaderClass;return $(innerHeaderClass).hasClass(fixHeaderClass);},getHeaderToolbarHeight:function(){var headerToolbarClass='.'+ this.options.headerToolbarClass;return parseInt($(headerToolbarClass).height());},getWpAdminbarHeight:function(){return parseInt($("#wpadminbar").height());},getHeaderHeight:function(){var element=this.element;return parseInt($(element).data('height'));},getInnerHeaderHeight:function(){var innerHeaderClass='.'+ this.options.innerHeaderClass;return parseInt($(innerHeaderClass).height());},getStickyHeaderHeight:function(){var element=this.element;return parseInt($(element).data('sticky-height'));},calculateAdminbarHeight:function(){var wp_admin_height=0;if(this.isWpAdminbarExists()){wp_admin_height=this.getWpAdminbarHeight();if(!this.isHeaderToolbarExists()&&!this.isClassicNavigation()){wp_admin_height=0;}}
if(!this.isWpAdminbarExists()&&this.isHeaderToolbarExists()&&!this.isClassicNavigation()){wp_admin_height=this.getHeaderToolbarHeight();}
return wp_admin_height;},getScrollLimit:function(){var mk_limit_height=0;if(this.isClassicNavigation()){mk_limit_height=this.calculateAdminbarHeight()+(this.getHeaderHeight()*2);}else{mk_limit_height=this.calculateAdminbarHeight();}
return mk_limit_height;},getScrollPosition:function(){return $(window).scrollTop();},isFarEnough:function(currentScrollPosition,scrollLimit){return currentScrollPosition>scrollLimit;},makeSuitableHeader:function(){if(this.isClassicNavigation()){this.makeClassicHeader();}else{this.makeModernHeader();}},makeClassicHeader:function(){var mk_header_height=this.getInnerHeaderHeight(),wp_admin_height=this.calculateAdminbarHeight();this.stickHeader(mk_header_height,wp_admin_height);},calculateTopSpace:function(){var distance=0,padding=0;if(this.isWpAdminbarExists()){distance=this.getScrollLimit();if(!this.isHeaderToolbarExists()){distance=this.getWpAdminbarHeight();padding=this.getHeaderHeight();}else{padding=$('.mk-header-inner').height();}}else{if(!this.isHeaderToolbarExists()){padding=this.getHeaderHeight();}else{padding=$('.mk-header-inner').height();}}
return{distance:distance,padding:padding}},updateHeaderElements:function(){var header_els=$('.menu-hover-style-1 .main-navigation-ul > li > a,'+'.menu-hover-style-2 .main-navigation-ul > li > a,'+'.menu-hover-style-4 .main-navigation-ul > li > a,'+'.header-style-1 .menu-hover-style-3 .main-navigation-ul > li,'+'.mk-header-inner #mk-header-search,'+'#mk-header .mk-header-inner .mk-header-start-tour,'+'.header-style-1 .mk-header-inner,'+'.header-style-3 .mk-header-inner,'+'.header-style-3 .header-logo,'+'#mk-header.header-style-1 .mk-search-trigger i,'+'#mk-header.header-style-1 .mk-search-trigger,'+'.shopping-cart-header');var limitHeight=this.getHeaderHeight()- this.getStickyHeaderHeight(),mk_window_y=this.getScrollPosition(),newHeight=0;if($(window).width()>mk_responsive_nav_width){if(mk_window_y<limitHeight){newHeight=this.getHeaderHeight()- mk_window_y;}else{newHeight=this.getStickyHeaderHeight();}
header_els.css({height:newHeight+'px',lineHeight:newHeight+'px'});}},stickHeader:function(padding,distance){var headerPaddingWrapper='.'+ this.options.headerPaddingWrapper,innerHeaderClass='.'+ this.options.innerHeaderClass,headerToolbarClass='.'+ this.options.headerToolbarClass;var mk_window_y=this.getScrollPosition(),mk_limit_height=this.getScrollLimit();if(this.isFarEnough(mk_window_y,mk_limit_height)){if(!this.isInnerHeaderFixed()){$(headerPaddingWrapper).css("padding-top",padding+'px');$(innerHeaderClass).addClass(this.options.fixHeaderClass).css({"top":distance});}}else{if(this.isInnerHeaderFixed()){$(headerToolbarClass).show();$(innerHeaderClass).css({"top":0}).removeClass(this.options.fixHeaderClass);$(headerPaddingWrapper).css("padding-top","");}}},makeModernHeader:function(){var topSpace=this.calculateTopSpace();this.stickHeader(topSpace.padding,topSpace.distance);this.updateHeaderElements();}};$.fn[pluginName]=function(options){return this.each(function(){if(!$.data(this,"plugin_"+ pluginName)){$.data(this,"plugin_"+ pluginName,new Header(this,options));}});};})(jQuery,window);;(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);;(function(e,t,n){"use strict";t.infinitescroll=function(n,r,i){this.element=t(i);if(!this._create(n,r)){this.failed=true}};t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:n,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:false,maxPage:n};t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+ i.behavior]!==n){this["_binding_"+ i.behavior].call(this);return}
if(t!=="bind"&&t!=="unbind"){this._debug("Binding value  "+ t+" not valid");return false}
if(t==="unbind"){this.options.binder.unbind("smartscroll.infscr."+ r.options.infid)}else{this.options.binder[t]("smartscroll.infscr."+ r.options.infid,function(){r.scroll()})}
this._debug("Binding",t)},_create:function(i,s){var o=t.extend(true,{},t.infinitescroll.defaults,i);this.options=o;var u=t(e);var a=this;if(!a._validate(i)){return false}
var f=t(o.nextSelector).attr("href");if(!f){this._debug("Navigation selector not found");return false}
o.path=o.path||this._determinepath(f);o.contentSelector=o.contentSelector||this.element;o.loading.selector=o.loading.selector||o.contentSelector;o.loading.msg=o.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+ o.loading.img+'" /><div>'+ o.loading.msgText+"</div></div>");(new Image).src=o.loading.img;if(o.pixelsFromNavToBottom===n){o.pixelsFromNavToBottom=t(document).height()- t(o.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+ o.pixelsFromNavToBottom)}
var l=this;o.loading.start=o.loading.start||function(){t(o.navSelector).hide();o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,t.proxy(function(){this.beginAjax(o)},l))};o.loading.finished=o.loading.finished||function(){if(!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)};o.callback=function(e,r,i){if(!!o.behavior&&e["_callback_"+ o.behavior]!==n){e["_callback_"+ o.behavior].call(t(o.contentSelector)[0],r,i)}
if(s){s.call(t(o.contentSelector)[0],r,o,i)}
if(o.prefill){u.bind("resize.infinite-scroll",e._prefill)}};if(i.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}}
this._setup();if(o.prefill){this._prefill()}
return true},_prefill:function(){function s(){return r.options.contentSelector.height()<=i.height()}
var r=this;var i=t(e);this._prefill=function(){if(s()){r.scroll()}
i.bind("resize.infinite-scroll",function(){if(s()){i.unbind("resize.infinite-scroll");r.scroll()}})};this._prefill()},_debug:function(){if(true!==this.options.debug){return}
if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function(t){var r=this.options;if(!!r.behavior&&this["_determinepath_"+ r.behavior]!==n){return this["_determinepath_"+ r.behavior].call(this,t)}
if(!!r.pathParse){this._debug("pathParse manual");return r.pathParse(t,this.options.state.currPage+ 1)}else if(t.match(/^(.*?)\b2\b(.*?$)/)){t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/)){t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1);return t}
t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/)){t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1);return t}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");r.state.isInvalidPage=true}}
this._debug("determinePath",t);return t},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+ r.behavior]!==n){this["_error_"+ r.behavior].call(this,t);return}
if(t!=="destroy"&&t!=="end"){t="unknown"}
this._debug("Error",t);if(t==="end"||r.state.isBeyondMaxPage){this._showdonemsg()}
r.state.isDone=true;r.state.currPage=1;r.state.isPaused=false;r.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function(i,s,o){var u=this.options,a=this.options.callback,f=u.state.isDone?"done":!u.appendCallback?"no-append":"append",l;if(!!u.behavior&&this["_loadcallback_"+ u.behavior]!==n){this["_loadcallback_"+ u.behavior].call(this,i,s);return}
switch(f){case"done":this._showdonemsg();return false;case"no-append":if(u.dataType==="html"){s="<div>"+ s+"</div>";s=t(s).find(u.itemSelector)}
break;case"append":var c=i.children();if(c.length===0){return this._error("end")}
l=document.createDocumentFragment();while(i[0].firstChild){l.appendChild(i[0].firstChild)}
this._debug("contentSelector",t(u.contentSelector)[0]);t(u.contentSelector)[0].appendChild(l);s=c.get();break}
u.loading.finished.call(t(u.contentSelector)[0],u);if(u.animate){var h=t(e).scrollTop()+ t(u.loading.msg).height()+ u.extraScrollPx+"px";t("html,body").animate({scrollTop:h},800,function(){u.state.isDuringAjax=false})}
if(!u.animate){u.state.isDuringAjax=false}
a(this,s,o);if(u.prefill){this._prefill()}},_nearbottom:function(){var i=this.options,s=0+ t(document).height()- i.binder.scrollTop()- t(e).height();if(!!i.behavior&&this["_nearbottom_"+ i.behavior]!==n){return this["_nearbottom_"+ i.behavior].call(this)}
this._debug("math:",s,i.pixelsFromNavToBottom);return s- i.bufferPx<i.pixelsFromNavToBottom},_pausing:function(t){var r=this.options;if(!!r.behavior&&this["_pausing_"+ r.behavior]!==n){this["_pausing_"+ r.behavior].call(this,t);return}
if(t!=="pause"&&t!=="resume"&&t!==null){this._debug("Invalid argument. Toggling pause value instead")}
t=t&&(t==="pause"||t==="resume")?t:"toggle";switch(t){case"pause":r.state.isPaused=true;break;case"resume":r.state.isPaused=false;break;case"toggle":r.state.isPaused=!r.state.isPaused;break}
this._debug("Paused",r.state.isPaused);return false},_setup:function(){var t=this.options;if(!!t.behavior&&this["_setup_"+ t.behavior]!==n){this["_setup_"+ t.behavior].call(this);return}
this._binding("bind");return false},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+ r.behavior]!==n){this["_showdonemsg_"+ r.behavior].call(this);return}
r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)});r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n){if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0){this._debug("Your "+ r+" found no elements.");return false}}
return true},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++;if(r.maxPage!=n&&r.state.currPage>r.maxPage){r.state.isBeyondMaxPage=true;this.destroy();return}
o=t(r.contentSelector).is("table, tbody")?t("<tbody/>"):t("<div/>");u=typeof s==="function"?s(r.state.currPage):s.join(r.state.currPage);i._debug("heading into ajax",u);a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback";if(r.appendCallback&&r.dataType==="html"){a+="+callback"}
switch(a){case"html+callback":i._debug("Using HTML via .load() method");o.load(u+" "+ r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+ a.toUpperCase()+" via $.ajax() method");t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!=="undefined"?t.isResolved():n==="success"||n==="notmodified";if(f){i._loadcallback(o,t.responseText,u)}else{i._error("end")}}});break;case"json":i._debug("Using "+ a.toUpperCase()+" via $.ajax() method");t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!=="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback){if(r.template!==n){var a=r.template(e);o.append(a);if(f){i._loadcallback(o,a)}else{i._error("end")}}else{i._debug("template must be defined.");i._error("end")}}else{if(f){i._loadcallback(o,e,u)}else{i._error("end")}}},error:function(){i._debug("JSON ajax request failed.");i._error("end")}});break}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+ s.behavior]!==n){this["retrieve_"+ s.behavior].call(this,r);return}
if(s.state.isDestroyed){this._debug("Instance is destroyed");return false}
s.state.isDuringAjax=true;s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+ t.behavior]!==n){this["scroll_"+ t.behavior].call(this);return}
if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused){return}
if(!this._nearbottom()){return}
this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){if(t.isPlainObject(n)){this.options=t.extend(true,this.options,n)}}};t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e){return false}
if(!t.isFunction(e[n])||n.charAt(0)==="_"){return false}
e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");if(e){e.update(n)}else{e=new t.infinitescroll(n,r,this);if(!e.failed){t.data(this,"infinitescroll",e)}}});break}
return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,s=arguments;e.type="smartscroll";if(i){clearTimeout(i)}
i=setTimeout(function(){t(r).trigger("smartscroll",s)},n==="execAsap"?0:100)}};t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+ a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+ a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+ c.join("transform-3d),(")+"modernizr)",e=b("<style>"+ d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}
return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+ l;b("html").addClass(m)}
if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+ a[0]+"px, "+ a[1]+"px, 0) "},scale:function(a){return"scale3d("+ a+", "+ a+", 1) "}}:{translate:function(a){return"translate("+ a[0]+"px, "+ a[1]+"px) "},scale:function(a){return"scale("+ a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+ l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+ a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}
var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+ this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},
                _init: function (a) {
                        this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
                },
                option: function (a) {
                        if (b.isPlainObject(a)) {
                                this.options = b.extend(!0, this.options, a);
                                var c;
                                for (var d in a) c = "_update" + f(d), this[c] && this[c]()
                        }
                },
                _updateAnimationEngine: function () {
                        var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                                b;
                        switch (a) {
                        case "css":
                        case "none":
                                b = !1;
                                break;
                        case "jquery":
                                b = !0;
                                break;
                        default:
                                b = !e.csstransitions
                        }
                        this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
                },
                _updateTransformsEnabled: function () {
                        this._updateUsingTransforms()
                },
                _updateUsingTransforms: function () {
                        var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
                        a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
                },
                _filter: function (a) {
                        var b = this.options.filter === "" ? "*" : this.options.filter;
                        if (!b) return a;
                        var c = this.options.hiddenClass,
                                d = "." + c,
                                e = a.filter(d),
                                f = e;
                        if (b !== "*") {
                                f = e.filter(b);
                                var g = a.not(d).not(b).addClass(c);
                                this.styleQueue.push({
                                        $el: g,
                                        style: this.options.hiddenStyle
                                })
                        }
                        return this.styleQueue.push({
                                $el: f,
                                style: this.options.visibleStyle
                        }), f.removeClass(c), a.filter(b)
                },
                updateSortData: function (a, c) {
                        var d = this,
                                e = this.options.getSortData,
                                f, g;
                        a.each(function () {
                                f = b(this), g = {};
                                for (var a in e)!c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                                b.data(this, "isotope-sort-data", g)
                        })
                },
                _sort: function () {
                        var a = this.options.sortBy,
                                b = this._getSorter,
                                c = this.options.sortAscending ? 1 : -1,
                                d = function (d, e) {
                                        var f = b(d, a),
                                                g = b(e, a);
                                        return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
                                };
                        this.$filteredAtoms.sort(d)
                },
                _getSorter: function (a, c) {
                        return b.data(a, "isotope-sort-data")[c]
                },
                _translate: function (a, b) {
                        return {
                                translate: [a, b]
                        }
                },
                _positionAbs: function (a, b) {
                        return {
                                left: a,
                                top: b
                        }
                },
                _pushPosition: function (a, b, c) {
                        b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
                        var d = this.getPositionStyles(b, c);
                        this.styleQueue.push({
                                $el: a,
                                style: d
                        }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                                x: b,
                                y: c
                        })
                },
                layout: function (a, b) {
                        var c = this.options.layoutMode;
                        this["_" + c + "Layout"](a);
                        if (this.options.resizesContainer) {
                                var d = this["_" + c + "GetContainerSize"]();
                                this.styleQueue.push({
                                        $el: this.element,
                                        style: d
                                })
                        }
                        this._processStyleQueue(a, b), this.isLaidOut = !0
                },
                _processStyleQueue: function (a, c) {
                        var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                                f = this.options.animationOptions,
                                g = this.options.onLayout,
                                h, i, j, k;
                        i = function (a, b) {
                                b.$el[d](b.style, f)
                        };
                        if (this._isInserting && this.isUsingJQueryAnimation) i = function (a, b) {
                                h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
                        };
                        else if (c || g || f.complete) {
                                var l = !1,
                                        m = [c, g, f.complete],
                                        n = this;
                                j = !0, k = function () {
                                        if (l) return;
                                        var b;
                                        for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
                                        l = !0
                                };
                                if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
                                else if (e.csstransitions) {
                                        var o = 0,
                                                p = this.styleQueue[0],
                                                s = p && p.$el,
                                                t;
                                        while (!s || !s.length) {
                                                t = this.styleQueue[o++];
                                                if (!t) return;
                                                s = t.$el
                                        }
                                        var u = parseFloat(getComputedStyle(s[0])[r]);
                                        u > 0 && (i = function (a, b) {
                                                b.$el[d](b.style, f).one(q, k)
                                        }, j = !1)
                                }
                        }
                        b.each(this.styleQueue, i), j && k(), this.styleQueue = []
                },
                resize: function () {
                        this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
                },
                reLayout: function (a) {
                        this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
                },
                addItems: function (a, b) {
                        var c = this._getAtoms(a);
                        this.$allAtoms = this.$allAtoms.add(c), b && b(c)
                },
                insert: function (a, b) {
                        this.element.append(a);
                        var c = this;
                        this.addItems(a, function (a) {
                                var d = c._filter(a);
                                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
                        })
                },
                appended: function (a, b) {
                        var c = this;
                        this.addItems(a, function (a) {
                                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
                        })
                },
                _addHideAppended: function (a) {
                        this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                                $el: a,
                                style: this.options.hiddenStyle
                        })
                },
                _revealAppended: function (a, b) {
                        var c = this;
                        setTimeout(function () {
                                a.removeClass("no-transition"), c.styleQueue.push({
                                        $el: a,
                                        style: c.options.visibleStyle
                                }), c._isInserting = !1, c._processStyleQueue(a, b)
                        }, 10)
                },
                reloadItems: function () {
                        this.$allAtoms = this._getAtoms(this.element.children())
                },
                remove: function (a, b) {
                        this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
                        var c = this,
                                d = function () {
                                        a.remove(), b && b.call(c.element)
                                };
                        a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                                $el: a,
                                style: this.options.hiddenStyle
                        }), this._sort(), this.reLayout(d)) : d()
                },
                shuffle: function (a) {
                        this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
                },
                destroy: function () {
                        var a = this.usingTransforms,
                                b = this.options;
                        this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function () {
                                var b = this.style;
                                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
                        });
                        var c = this.element[0].style;
                        for (var d in this.originalStyle) c[d] = this.originalStyle[d];
                        this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
                },
                _getSegments: function (a) {
                        var b = this.options.layoutMode,
                                c = a ? "rowHeight" : "columnWidth",
                                d = a ? "height" : "width",
                                e = a ? "rows" : "cols",
                                g = this.element[d](),
                                h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
                        h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
                },
                _checkIfSegmentsChanged: function (a) {
                        var b = this.options.layoutMode,
                                c = a ? "rows" : "cols",
                                d = this[b][c];
                        return this._getSegments(a), this[b][c] !== d
                },
                _masonryReset: function () {
                        this.masonry = {}, this._getSegments();
                        var a = this.masonry.cols;
                        this.masonry.colYs = [];
                        while (a--) this.masonry.colYs.push(0)
                },
                _masonryLayout: function (a) {
                        var c = this,
                                d = c.masonry;
                        a.each(function () {
                                var a = b(this),
                                        e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                                e = Math.min(e, d.cols);
                                if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                                else {
                                        var f = d.cols + 1 - e,
                                                g = [],
                                                h, i;
                                        for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                                        c._masonryPlaceBrick(a, g)
                                }
                        })
                },
                _masonryPlaceBrick: function (a, b) {
                        var c = Math.min.apply(Math, b),
                                d = 0;
                        for (var e = 0, f = b.length; e < f; e++)
                        if (b[e] === c) {
                                d = e;
                                break
                        }
                        var g = this.masonry.columnWidth * d,
                                h = c;
                        this._pushPosition(a, g, h);
                        var i = c + a.outerHeight(!0),
                                j = this.masonry.cols + 1 - f;
                        for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
                },
                _masonryGetContainerSize: function () {
                        var a = Math.max.apply(Math, this.masonry.colYs);
                        return {
                                height: a
                        }
                },
                _masonryResizeChanged: function () {
                        return this._checkIfSegmentsChanged()
                },
                _fitRowsReset: function () {
                        this.fitRows = {
                                x: 0,
                                y: 0,
                                height: 0
                        }
                },
                _fitRowsLayout: function (a) {
                        var c = this,
                                d = this.element.width(),
                                e = this.fitRows;
                        a.each(function () {
                                var a = b(this),
                                        f = a.outerWidth(!0),
                                        g = a.outerHeight(!0);
                                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
                        })
                },
                _fitRowsGetContainerSize: function () {
                        return {
                                height: this.fitRows.height
                        }
                },
                _fitRowsResizeChanged: function () {
                        return !0
                },
                _cellsByRowReset: function () {
                        this.cellsByRow = {
                                index: 0
                        }, this._getSegments(), this._getSegments(!0)
                },
                _cellsByRowLayout: function (a) {
                        var c = this,
                                d = this.cellsByRow;
                        a.each(function () {
                                var a = b(this),
                                        e = d.index % d.cols,
                                        f = Math.floor(d.index / d.cols),
                                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                                c._pushPosition(a, g, h), d.index++
                        })
                },
                _cellsByRowGetContainerSize: function () {
                        return {
                                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                        }
                },
                _cellsByRowResizeChanged: function () {
                        return this._checkIfSegmentsChanged()
                },
                _straightDownReset: function () {
                        this.straightDown = {
                                y: 0
                        }
                },
                _straightDownLayout: function (a) {
                        var c = this;
                        a.each(function (a) {
                                var d = b(this);
                                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
                        })
                },
                _straightDownGetContainerSize: function () {
                        return {
                                height: this.straightDown.y
                        }
                },
                _straightDownResizeChanged: function () {
                        return !0
                },
                _masonryHorizontalReset: function () {
                        this.masonryHorizontal = {}, this._getSegments(!0);
                        var a = this.masonryHorizontal.rows;
                        this.masonryHorizontal.rowXs = [];
                        while (a--) this.masonryHorizontal.rowXs.push(0)
                },
                _masonryHorizontalLayout: function (a) {
                        var c = this,
                                d = c.masonryHorizontal;
                        a.each(function () {
                                var a = b(this),
                                        e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                                e = Math.min(e, d.rows);
                                if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                                else {
                                        var f = d.rows + 1 - e,
                                                g = [],
                                                h, i;
                                        for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                                        c._masonryHorizontalPlaceBrick(a, g)
                                }
                        })
                },
                _masonryHorizontalPlaceBrick: function (a, b) {
                        var c = Math.min.apply(Math, b),
                                d = 0;
                        for (var e = 0, f = b.length; e < f; e++)
                        if (b[e] === c) {
                                d = e;
                                break
                        }
                        var g = c,
                                h = this.masonryHorizontal.rowHeight * d;
                        this._pushPosition(a, g, h);
                        var i = c + a.outerWidth(!0),
                                j = this.masonryHorizontal.rows + 1 - f;
                        for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
                },
                _masonryHorizontalGetContainerSize: function () {
                        var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                        return {
                                width: a
                        }
                },
                _masonryHorizontalResizeChanged: function () {
                        return this._checkIfSegmentsChanged(!0)
                },
                _fitColumnsReset: function () {
                        this.fitColumns = {
                                x: 0,
                                y: 0,
                                width: 0
                        }
                },
                _fitColumnsLayout: function (a) {
                        var c = this,
                                d = this.element.height(),
                                e = this.fitColumns;
                        a.each(function () {
                                var a = b(this),
                                        f = a.outerWidth(!0),
                                        g = a.outerHeight(!0);
                                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
                        })
                },
                _fitColumnsGetContainerSize: function () {
                        return {
                                width: this.fitColumns.width
                        }
                },
                _fitColumnsResizeChanged: function () {
                        return !0
                },
                _cellsByColumnReset: function () {
                        this.cellsByColumn = {
                                index: 0
                        }, this._getSegments(), this._getSegments(!0)
                },
                _cellsByColumnLayout: function (a) {
                        var c = this,
                                d = this.cellsByColumn;
                        a.each(function () {
                                var a = b(this),
                                        e = Math.floor(d.index / d.rows),
                                        f = d.index % d.rows,
                                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                                c._pushPosition(a, g, h), d.index++
                        })
                },
                _cellsByColumnGetContainerSize: function () {
                        return {
                                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                        }
                },
                _cellsByColumnResizeChanged: function () {
                        return this._checkIfSegmentsChanged(!0)
                },
                _straightAcrossReset: function () {
                        this.straightAcross = {
                                x: 0
                        }
                },
                _straightAcrossLayout: function (a) {
                        var c = this;
                        a.each(function (a) {
                                var d = b(this);
                                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
                        })
                },
                _straightAcrossGetContainerSize: function () {
                        return {
                                width: this.straightAcross.x
                        }
                },
                _straightAcrossResizeChanged: function () {
                        return !0
                }
        }, b.fn.imagesLoaded = function (a) {
                function h() {
                        a.call(c, d)
                }

                function i(a) {
                        var c = a.target;
                        c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
                }
                var c = this,
                        d = c.find("img").add(c.filter("img")),
                        e = d.length,
                        f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                        g = [];
                return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
                        var a = this.src;
                        this.src = f, this.src = a
                }), c
        };
        var x = function (b) {
                        a.console && a.console.error(b)
                };
        b.fn.isotope = function (a, c) {
                if (typeof a == "string") {
                        var d = Array.prototype.slice.call(arguments, 1);
                        this.each(function () {
                                var c = b.data(this, "isotope");
                                if (!c) {
                                        x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                                        return
                                }
                                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                                        x("no such method '" + a + "' for isotope instance");
                                        return
                                }
                                c[a].apply(c, d)
                        })
                } else this.each(function () {
                        var d = b.data(this, "isotope");
                        d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
                });
                return this
        }
})(window, jQuery);

window.ChopScroll = function(handler, timeout, name) {
    this.timeout = timeout;
    this.handler = handler;
    this.name = name || 'unnamed';
    this.isExecuteTime = true;
    this.interval = '';
    var _this = this;
    init();

    function init() {
        //reset the execute determiner
        jQuery(window).scroll(function() {
            _this.isExecuteTime = true;
        });
        //execute the handler based on the timeout user passed
        _this.interval = setInterval(function() {
            if (_this.isExecuteTime) {
                try {
                    handler();
                } catch (err) {
                    console.log(err);
                }
                //turn off the exec time until user scroll again
                _this.isExecuteTime = false;
            }
        }, _this.timeout);
    }
}

