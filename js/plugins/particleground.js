$(document).ready(function(){$("#particles").particleground()}),function(t){function e(e,n){function s(){if(Y){$canvas=t('<canvas class="pg-canvas"></canvas>'),X.prepend($canvas),u=$canvas[0],m=u.getContext("2d"),o();for(var i=Math.round(u.width*u.height/n.density),e=0;i>e;e++){var a=new l;a.setStackPos(e),O.push(a)}t(window).on("resize",function(){h()}),t(document).on("mousemove",function(t){S=t.pageX,M=t.pageY}),F&&!k&&window.addEventListener("deviceorientation",function(){P=Math.min(Math.max(-event.beta,-30),30),b=Math.min(Math.max(-event.gamma,-30),30)},!0),r(),x("onInit")}}function o(){u.width=X.width(),u.height=X.height(),m.fillStyle=n.dotColor,m.strokeStyle=n.lineColor,m.lineWidth=n.lineWidth}function r(){if(Y){y=t(window).width(),g=t(window).height(),m.clearRect(0,0,u.width,u.height);for(var i=0;i<O.length;i++)O[i].updatePosition(),O[i].draw();A||(w=requestAnimationFrame(r))}}function h(){for(o(),i=O.length-1;i>=0;i--)(O[i].position.x>X.width()||O[i].position.y>X.height())&&O.splice(i,1);var t=Math.round(u.width*u.height/n.density);if(t>O.length)for(;t>O.length;){var e=new l;O.push(e)}else t<O.length&&O.splice(t);for(i=O.length-1;i>=0;i--)O[i].setStackPos(i)}function p(){A=!0}function d(){A=!1,r()}function l(){switch(this.stackPos=!0,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*u.width),y:Math.ceil(Math.random()*u.height)},this.speed={},n.directionX){case"left":this.speed.x=+(-n.maxSpeedX+Math.random()*n.maxSpeedX-n.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*n.maxSpeedX+n.minSpeedX).toFixed(2);break;default:this.speed.x=+(-n.maxSpeedX/2+Math.random()*n.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?n.minSpeedX:-n.minSpeedX}switch(n.directionY){case"up":this.speed.y=+(-n.maxSpeedY+Math.random()*n.maxSpeedY-n.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*n.maxSpeedY+n.minSpeedY).toFixed(2);break;default:this.speed.y=+(-n.maxSpeedY/2+Math.random()*n.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?n.minSpeedY:-n.minSpeedY}}function f(t,i){return i?void(n[t]=i):n[t]}function c(){X.find(".pg-canvas").remove(),x("onDestroy"),X.removeData("plugin_"+a)}function x(t){void 0!==n[t]&&n[t].call(v)}var u,m,w,y,g,v=e,X=t(e),Y=!!document.createElement("canvas").getContext,O=[],S=0,M=0,k=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),F=!!window.DeviceOrientationEvent,b=0,P=0,A=!1;return n=t.extend({},t.fn[a].defaults,n),l.prototype.draw=function(){m.beginPath(),m.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,n.particleRadius/2,0,2*Math.PI,!0),m.closePath(),m.fill(),m.beginPath();for(var t=O.length-1;t>this.stackPos;t--){var i=O[t],e=this.position.x-i.position.x,a=this.position.y-i.position.y,s=Math.sqrt(e*e+a*a).toFixed(2);s<n.proximity&&(m.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),n.curvedLines?m.quadraticCurveTo(Math.max(i.position.x,i.position.x),Math.min(i.position.y,i.position.y),i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY):m.lineTo(i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY))}m.stroke(),m.closePath()},l.prototype.updatePosition=function(){if(n.parallax){if(F&&!k){var t=-30,i=(y-0)/(30-t);pointerX=(b-t)*i+0;var e=(g-0)/(30-t);pointerY=(P-t)*e+0}else pointerX=S,pointerY=M;this.parallaxTargX=(pointerX-y/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(pointerY-g/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(n.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=X.width()-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>X.width()&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>X.width()||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(n.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=X.height()-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>X.height()&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>X.height()||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},l.prototype.setStackPos=function(t){this.stackPos=t},s(),{option:f,destroy:c,start:d,pause:p}}var a="particleground";t.fn[a]=function(i){if("string"==typeof arguments[0]){var n,s=arguments[0],o=Array.prototype.slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+a)&&"function"==typeof t.data(this,"plugin_"+a)[s]&&(n=t.data(this,"plugin_"+a)[s].apply(this,o))}),void 0!==n?n:this}return"object"!=typeof i&&i?void 0:this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new e(this,i))})},t.fn[a].defaults={minSpeedX:.2,maxSpeedX:.8,minSpeedY:.2,maxSpeedY:.8,directionX:"center",directionY:"center",density:1e4,dotColor:"rgba(255,255,255,.1)",lineColor:"rgba(255,255,255,.5)",particleRadius:8,lineWidth:.1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}}}(jQuery),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),a=Math.max(0,16-(e-t)),n=window.setTimeout(function(){i(e+a)},a);return t=e+a,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();