(this.webpackJsonptorus=this.webpackJsonptorus||[]).push([[0],[,,,,,function(n,e,t){n.exports=t(12)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),a=t(3),i=t.n(a),c=(t(10),t(11),t(0)),u=Math.sin,d=Math.cos,w=Math.PI;function f(n,e,t){var o=n*d(e),r=n*u(e);return new c.f(o,r,t)}var s=new c.e,l=new c.d(75,window.innerWidth/window.innerHeight,.01,1e3),h=new c.g;h.setSize(window.innerWidth,window.innerHeight),h.vr.enabled=!0;var m=3,p=4;function v(n,e){return p+m*d(2*w*e)}function y(n,e){return m*u(2*w*e)}function g(n,e,t){var o=v(0,e),r=function(n,e){return 2*w*(n%1)}(n),a=y(0,e);t.copy(f(o,r,a))}function b(n,e,t,o){return function(n,e,t){return new c.f(n,e,t)}(-v(0,e)*u(2*w*n)*t-m*u(2*w*e)*d(2*w*n)*o,v(0,e)*d(2*w*n)*t-m*u(2*w*e)*u(2*w*n)*o,o*m*d(2*w*e))}var M=new c.c(g,60,60),k=new c.b({wireframe:!0}),E=new c.a(M,k);function W(n,e,t,o){var r=new c.f;g(n,e,r);var a=new c.f,i=function(n,e){return f(-d(2*w*e),2*w*(n%1),-u(2*w*e)).normalize()}(n,e),s=b(n,e,t,o).normalize();a.addVectors(r,i.multiplyScalar(.1)),l.position.copy(a),l.up.copy(i);var h=new c.f;h.addVectors(a,s),l.lookAt(h)}s.add(E);var z=Math.random(),B=Math.random(),S=Math.random()/600,A=.003125;W(z,B,S,A),h.setAnimationLoop((function(){var n;S+=4*w*S*A*y(0,n=B)/v(0,n),A+=function(n,e,t,o){return-2*w*t*t*v(0,e)*y(0,e)/(m*m)}(0,B,S),W(z+=S,B+=A,S,A),h.render(s,l)}));var C=t(4),H=function(){return r.a.useEffect((function(){document.body.appendChild(h.domElement),document.body.appendChild(C.a.createButton(h,{referenceSpaceType:""}))}),[]),null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e80fbbc1.chunk.js.map