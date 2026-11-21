var Yh=Object.defineProperty;var Kh=(n,e,t)=>e in n?Yh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var le=(n,e,t)=>Kh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="170",Zh=0,kc=1,Jh=2,pd=1,Qh=2,Jn=3,ri=0,Kt=1,pn=2,ni=0,Ps=1,Zi=2,zc=3,Bc=4,ef=5,Bi=100,tf=101,nf=102,sf=103,af=104,rf=200,of=201,lf=202,cf=203,Wo=204,qo=205,uf=206,df=207,hf=208,ff=209,pf=210,mf=211,gf=212,vf=213,xf=214,Xo=0,jo=1,Yo=2,Is=3,Ko=4,Zo=5,Jo=6,Qo=7,md=0,_f=1,yf=2,wi=0,gd=1,vd=2,xd=3,Zl=4,bf=5,_d=6,yd=7,bd=300,Ns=301,Us=302,el=303,tl=304,Or=306,nl=1e3,Vi=1001,il=1002,Ln=1003,Mf=1004,Ga=1005,Bn=1006,no=1007,$i=1008,oi=1009,Md=1010,Sd=1011,ya=1012,Jl=1013,Ji=1014,Qn=1015,ii=1016,Ql=1017,ec=1018,Fs=1020,wd=35902,Ed=1021,Td=1022,Cn=1023,Ad=1024,Cd=1025,Rs=1026,Os=1027,Pd=1028,tc=1029,Rd=1030,nc=1031,ic=1033,xr=33776,_r=33777,yr=33778,br=33779,sl=35840,al=35841,rl=35842,ol=35843,ll=36196,cl=37492,ul=37496,dl=37808,hl=37809,fl=37810,pl=37811,ml=37812,gl=37813,vl=37814,xl=37815,_l=37816,yl=37817,bl=37818,Ml=37819,Sl=37820,wl=37821,Mr=36492,El=36494,Tl=36495,Ld=36283,Al=36284,Cl=36285,Pl=36286,Sf=3200,wf=3201,Dd=0,Ef=1,bi="",Qt="srgb",$s="srgb-linear",kr="linear",ut="srgb",rs=7680,Gc=519,Tf=512,Af=513,Cf=514,Id=515,Pf=516,Rf=517,Lf=518,Df=519,Hc=35044,Vc="300 es",ei=2e3,Tr=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const ha=Math.PI/180,ba=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function sc(n,e){return(n%e+e)%e}function If(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nf(n,e,t){return n!==e?(t-n)/(e-n):0}function fa(n,e,t){return(1-t)*n+t*e}function Uf(n,e,t,i){return fa(n,e,1-Math.exp(-t*i))}function Ff(n,e=1){return e-Math.abs(sc(n,e*2)-e)}function Of(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bf(n,e){return n+Math.random()*(e-n)}function Gf(n){return n*(.5-Math.random())}function Hf(n){n!==void 0&&($c=n);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(n){return n*ha}function $f(n){return n*ba}function Wf(n){return(n&n-1)===0&&n!==0}function qf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jf(n,e,t,i,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+i)/2),u=r((e+i)/2),d=a((e-i)/2),f=r((e-i)/2),h=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*u,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*h,o*l);break;case"YXY":n.set(c*h,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*h,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ht={DEG2RAD:ha,RAD2DEG:ba,generateUUID:ns,clamp:Ut,euclideanModulo:sc,mapLinear:If,inverseLerp:Nf,lerp:fa,damp:Uf,pingpong:Ff,smoothstep:Of,smootherstep:kf,randInt:zf,randFloat:Bf,randFloatSpread:Gf,seededRandom:Hf,degToRad:Vf,radToDeg:$f,isPowerOfTwo:Wf,ceilPowerOfTwo:qf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:jf,normalize:Zt,denormalize:Ss};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,a,r,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l)}set(e,t,i,s,a,r,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],x=s[7],P=s[2],b=s[5],T=s[8];return a[0]=r*v+o*y+c*P,a[3]=r*p+o*_+c*b,a[6]=r*m+o*x+c*T,a[1]=l*v+u*y+d*P,a[4]=l*p+u*_+d*b,a[7]=l*m+u*x+d*T,a[2]=f*v+h*y+g*P,a[5]=f*p+h*_+g*b,a[8]=f*m+h*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-i*a*u+i*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*r-o*l,f=o*c-u*a,h=l*a-r*c,g=t*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(o*i-s*r)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*a-o*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(r*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Ze;function Nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){const n=Ar("canvas");return n.style.display="block",n}const Wc={};function oa(n){n in Wc||(Wc[n]=!0,console.warn(n))}function Kf(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Zf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(n.r=Ls(n.r),n.g=Ls(n.g),n.b=Ls(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bi?kr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qc=[.64,.33,.3,.6,.15,.06],Xc=[.2126,.7152,.0722],jc=[.3127,.329],Yc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[$s]:{primaries:qc,whitePoint:jc,transfer:kr,toXYZ:Yc,fromXYZ:Kc,luminanceCoefficients:Xc,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:qc,whitePoint:jc,transfer:ut,toXYZ:Yc,fromXYZ:Kc,luminanceCoefficients:Xc,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let os;class Qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Ar("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=si(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(so(s[r].image)):a.push(so(s[r]))}else a=so(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class en extends Ws{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=Vi,s=Vi,a=Bn,r=$i,o=Cn,c=oi,l=en.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ns(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=bd;en.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(h+1)/2,P=(m+1)/2,b=(u+f)/4,T=(d+v)/4,D=(g+p)/4;return _>x&&_>P?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=b/i,a=T/i):x>P?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=b/s,a=D/s):P<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),i=T/a,s=D/a),this.set(i,s,a,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fd extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=a[r+0],h=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let p=1-o;const m=c*f+l*h+u*g+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),b=Math.atan2(P,m*y);p=Math.sin(p*b)/P,o=Math.sin(o*b)/P}const x=o*y;if(c=c*p+f*x,l=l*p+h*x,u=u*p+g*x,d=d*p+v*x,p===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=a[r],f=a[r+1],h=a[r+2],g=a[r+3];return e[t]=o*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-o*h,e[t+2]=l*g+u*h+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(a/2),f=c(i/2),h=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(a-l)*h,this._z=(r-s)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+r)/h,this._z=(a+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(a-l)/h,this._x=(s+r)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(r-s)/h,this._x=(a+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-s*o,this._w=r*u-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+i*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*r+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*i),u=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+c*l+r*d-o*u,this.y=i+c*u+o*l-a*d,this.z=s+c*d+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new R,Zc=new Oa;class qs{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Sn):Sn.fromBufferAttribute(a,r),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Va.subVectors(this.max,Qs),ls.subVectors(e.a,Qs),cs.subVectors(e.b,Qs),us.subVectors(e.c,Qs),hi.subVectors(cs,ls),fi.subVectors(us,cs),Ri.subVectors(ls,us);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!ro(t,ls,cs,us,Va)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,ls,cs,us,Va))?!1:($a.crossVectors(hi,fi),t=[$a.x,$a.y,$a.z],ro(t,ls,cs,us,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,Ha=new qs,ls=new R,cs=new R,us=new R,hi=new R,fi=new R,Ri=new R,Qs=new R,Va=new R,$a=new R,Li=new R;function ro(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Li.fromArray(n,a);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const sp=new qs,ea=new R,oo=new R;class zr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sp.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(oo)),this.expandByPoint(ea.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new R,lo=new R,Wa=new R,pi=new R,co=new R,qa=new R,uo=new R;class ac{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lo.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(lo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Wa),o=pi.dot(this.direction),c=-pi.dot(Wa),l=pi.lengthSq(),u=Math.abs(1-r*r);let d,f,h,g;if(u>0)if(d=r*c-o,f=r*o-c,g=a*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+r*f+2*o)+f*(r*d+f+2*c)+l}else f=a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),h=f*(f+2*c)+l):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),h=-d*d+f*(f+2*c)+l);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lo).addScaledVector(Wa,f),h}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,s,a){co.subVectors(t,e),qa.subVectors(i,e),uo.crossVectors(co,qa);let r=this.direction.dot(uo),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;pi.subVectors(this.origin,e);const c=o*this.direction.dot(qa.crossVectors(pi,qa));if(c<0)return null;const l=o*this.direction.dot(co.cross(pi));if(l<0||c+l>r)return null;const u=-o*pi.dot(uo);return u<0?null:this.at(u/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,s,a,r,o,c,l,u,d,f,h,g,v,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l,u,d,f,h,g,v,p)}set(e,t,i,s,a,r,o,c,l,u,d,f,h,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),a=1/ds.setFromMatrixColumn(e,1).length(),r=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=r*u,h=r*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*o,t[4]=g*o-h,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=h*o-g,t[6]=v+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*o,t[4]=-r*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=r*u,t[9]=v-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,h=r*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,h=r*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=r*c,h=r*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=r*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,rp)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),mi.crossVectors(i,dn),mi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),mi.crossVectors(i,dn)),mi.normalize(),Xa.crossVectors(dn,mi),s[0]=mi.x,s[4]=Xa.x,s[8]=dn.x,s[1]=mi.y,s[5]=Xa.y,s[9]=dn.y,s[2]=mi.z,s[6]=Xa.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],p=i[10],m=i[14],y=i[3],_=i[7],x=i[11],P=i[15],b=s[0],T=s[4],D=s[8],S=s[12],M=s[1],C=s[5],U=s[9],I=s[13],K=s[2],ie=s[6],ee=s[10],ue=s[14],Z=s[3],we=s[7],B=s[11],V=s[15];return a[0]=r*b+o*M+c*K+l*Z,a[4]=r*T+o*C+c*ie+l*we,a[8]=r*D+o*U+c*ee+l*B,a[12]=r*S+o*I+c*ue+l*V,a[1]=u*b+d*M+f*K+h*Z,a[5]=u*T+d*C+f*ie+h*we,a[9]=u*D+d*U+f*ee+h*B,a[13]=u*S+d*I+f*ue+h*V,a[2]=g*b+v*M+p*K+m*Z,a[6]=g*T+v*C+p*ie+m*we,a[10]=g*D+v*U+p*ee+m*B,a[14]=g*S+v*I+p*ue+m*V,a[3]=y*b+_*M+x*K+P*Z,a[7]=y*T+_*C+x*ie+P*we,a[11]=y*D+_*U+x*ee+P*B,a[15]=y*S+_*I+x*ue+P*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+a*c*d-s*l*d-a*o*f+i*l*f+s*o*h-i*c*h)+v*(+t*c*h-t*l*f+a*r*f-s*r*h+s*l*u-a*c*u)+p*(+t*l*d-t*o*h-a*r*d+i*r*h+a*o*u-i*l*u)+m*(-s*o*u-t*c*d+t*o*f+s*r*d-i*r*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],p=e[14],m=e[15],y=d*p*l-v*f*l+v*c*h-o*p*h-d*c*m+o*f*m,_=g*f*l-u*p*l-g*c*h+r*p*h+u*c*m-r*f*m,x=u*v*l-g*d*l+g*o*h-r*v*h-u*o*m+r*d*m,P=g*d*c-u*v*c-g*o*f+r*v*f+u*o*p-r*d*p,b=t*y+i*_+s*x+a*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=y*T,e[1]=(v*f*a-d*p*a-v*s*h+i*p*h+d*s*m-i*f*m)*T,e[2]=(o*p*a-v*c*a+v*s*l-i*p*l-o*s*m+i*c*m)*T,e[3]=(d*c*a-o*f*a-d*s*l+i*f*l+o*s*h-i*c*h)*T,e[4]=_*T,e[5]=(u*p*a-g*f*a+g*s*h-t*p*h-u*s*m+t*f*m)*T,e[6]=(g*c*a-r*p*a-g*s*l+t*p*l+r*s*m-t*c*m)*T,e[7]=(r*f*a-u*c*a+u*s*l-t*f*l-r*s*h+t*c*h)*T,e[8]=x*T,e[9]=(g*d*a-u*v*a-g*i*h+t*v*h+u*i*m-t*d*m)*T,e[10]=(r*v*a-g*o*a+g*i*l-t*v*l-r*i*m+t*o*m)*T,e[11]=(u*o*a-r*d*a-u*i*l+t*d*l+r*i*h-t*o*h)*T,e[12]=P*T,e[13]=(u*v*s-g*d*s+g*i*f-t*v*f-u*i*p+t*d*p)*T,e[14]=(g*o*s-r*v*s-g*i*c+t*v*c+r*i*p-t*o*p)*T,e[15]=(r*d*s-u*o*s+u*i*c-t*d*c-r*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,d=o+o,f=a*l,h=a*u,g=a*d,v=r*u,p=r*d,m=o*d,y=c*l,_=c*u,x=c*d,P=i.x,b=i.y,T=i.z;return s[0]=(1-(v+m))*P,s[1]=(h+x)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(h-x)*b,s[5]=(1-(f+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+_)*T,s[9]=(p-y)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=ds.set(s[0],s[1],s[2]).length();const r=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const l=1/a,u=1/r,d=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),i.x=a,i.y=r,i.z=o,this}makePerspective(e,t,i,s,a,r,o=ei){const c=this.elements,l=2*a/(t-e),u=2*a/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let h,g;if(o===ei)h=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Tr)h=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=ei){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(r-a),f=(t+e)*l,h=(i+s)*u;let g,v;if(o===ei)g=(r+a)*d,v=-2*d;else if(o===Tr)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new R,wn=new ft,ap=new R(0,0,0),rp=new R(1,1,1),mi=new R,Xa=new R,dn=new R,Jc=new ft,Qc=new Oa;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const eu=new R,hs=new Oa,jn=new ft,ja=new R,ta=new R,lp=new R,cp=new Oa,tu=new R(1,0,0),nu=new R(0,1,0),iu=new R(0,0,1),su={type:"added"},up={type:"removed"},fs={type:"childadded",child:null},ho={type:"childremoved",child:null};class Gt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new R,t=new In,i=new Oa,s=new R(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ze}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ta,ja,this.up):jn.lookAt(ja,ta,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(jn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),f=r(e.skeletons),h=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new R(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new R,Yn=new R,fo=new R,Kn=new R,ps=new R,ms=new R,au=new R,po=new R,mo=new R,go=new R,vo=new ht,xo=new ht,_o=new ht;class An{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){En.subVectors(s,t),Yn.subVectors(i,t),fo.subVectors(e,t);const r=En.dot(En),o=En.dot(Yn),c=En.dot(fo),l=Yn.dot(Yn),u=Yn.dot(fo),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,h=(l*c-o*u)*f,g=(r*u-o*c)*f;return a.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,a,r,o,c){return this.getBarycoord(e,t,i,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Kn.x),c.addScaledVector(r,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,i,s,a,r){return vo.setScalar(0),xo.setScalar(0),_o.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,i),_o.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(vo,a.x),r.addScaledVector(xo,a.y),r.addScaledVector(_o,a.z),r}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),Yn.subVectors(e,t),En.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let r,o;ps.subVectors(s,i),ms.subVectors(a,i),po.subVectors(e,i);const c=ps.dot(po),l=ms.dot(po);if(c<=0&&l<=0)return t.copy(i);mo.subVectors(e,s);const u=ps.dot(mo),d=ms.dot(mo);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(ps,r);go.subVectors(e,a);const h=ps.dot(go),g=ms.dot(go);if(g>=0&&h<=g)return t.copy(a);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(ms,o);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return au.subVectors(a,s),o=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(au,o);const m=1/(p+v+f);return r=v*m,o=f*m,t.copy(i).addScaledVector(ps,r).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=sc(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=yo(r,a,e+1/3),this.g=yo(r,a,e),this.b=yo(r,a,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return nt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ut(Wt.r*255,0,255))*65536+Math.round(Ut(Wt.g*255,0,255))*256+Math.round(Ut(Wt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,a=Wt.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case i:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-i)/d+2;break;case a:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Qt){nt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Ya);const i=fa(gi.h,Ya.h,t),s=fa(gi.s,Ya.s,t),a=fa(gi.l,Ya.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ke;ke.NAMES=Od;let dp=0;class Xs extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ns(),this.name="",this.blending=Ps,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=qo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends Xs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new R,Ka=new he;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),a=Zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class kd extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zd extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hp=0;const vn=new ft,bo=new Gt,gs=new R,hn=new qs,na=new qs,zt=new R;class Nt extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?zd:kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];na.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(hn.min,na.min),hn.expandByPoint(zt),zt.addVectors(hn.max,na.max),hn.expandByPoint(zt)):(hn.expandByPoint(na.min),hn.expandByPoint(na.max))}hn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)zt.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)zt.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(e,l),zt.add(gs)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new R,c[D]=new R;const l=new R,u=new R,d=new R,f=new he,h=new he,g=new he,v=new R,p=new R;function m(D,S,M){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,D),h.fromBufferAttribute(a,S),g.fromBufferAttribute(a,M),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(C),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),o[D].add(v),o[S].add(v),o[M].add(v),c[D].add(p),c[S].add(p),c[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,S=y.length;D<S;++D){const M=y[D],C=M.start,U=M.count;for(let I=C,K=C+U;I<K;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new R,x=new R,P=new R,b=new R;function T(D){P.fromBufferAttribute(s,D),b.copy(P);const S=o[D];_.copy(S),_.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(b,S);const C=x.dot(c[D])<0?-1:1;r.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,S=y.length;D<S;++D){const M=y[D],C=M.start,U=M.count;for(let I=C,K=C+U;I<K;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new R,a=new R,r=new R,o=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?h=c[v]*o.data.stride+o.offset:h=c[v]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new ft,Di=new ac,Za=new zr,ou=new R,Ja=new R,Qa=new R,er=new R,Mo=new R,tr=new R,lu=new R,nr=new R;class Xe extends Gt{constructor(e=new Nt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){tr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(Mo.fromBufferAttribute(d,e),r?tr.addScaledVector(Mo,u):tr.addScaledVector(Mo.sub(t),u))}t.add(tr)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(a),Di.copy(e.ray).recast(e.near),!(Za.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Za,ou)===null||Di.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(ru.copy(a).invert(),Di.copy(e.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=r[p.materialIndex],y=Math.max(p.start,h.start),_=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,P=_;x<P;x+=3){const b=o.getX(x),T=o.getX(x+1),D=o.getX(x+2);s=ir(this,m,e,i,l,u,d,b,T,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const y=o.getX(p),_=o.getX(p+1),x=o.getX(p+2);s=ir(this,r,e,i,l,u,d,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=r[p.materialIndex],y=Math.max(p.start,h.start),_=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,P=_;x<P;x+=3){const b=x,T=x+1,D=x+2;s=ir(this,m,e,i,l,u,d,b,T,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,x=p+2;s=ir(this,r,e,i,l,u,d,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function fp(n,e,t,i,s,a,r,o){let c;if(e.side===Kt?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,e.side===ri,o),c===null)return null;nr.copy(o),nr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(nr);return l<t.near||l>t.far?null:{distance:l,point:nr.clone(),object:n}}function ir(n,e,t,i,s,a,r,o,c,l){n.getVertexPosition(o,Ja),n.getVertexPosition(c,Qa),n.getVertexPosition(l,er);const u=fp(n,e,t,i,Ja,Qa,er,lu);if(u){const d=new R;An.getBarycoord(lu,Ja,Qa,er,d),s&&(u.uv=An.getInterpolatedAttribute(s,o,c,l,d,new he)),a&&(u.uv1=An.getInterpolatedAttribute(a,o,c,l,d,new he)),r&&(u.normal=An.getInterpolatedAttribute(r,o,c,l,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};An.getNormal(Ja,Qa,er,f.normal),u.face=f,u.barycoord=d}return u}class xn extends Nt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function g(v,p,m,y,_,x,P,b,T,D,S){const M=x/T,C=P/D,U=x/2,I=P/2,K=b/2,ie=T+1,ee=D+1;let ue=0,Z=0;const we=new R;for(let B=0;B<ee;B++){const V=B*C-I;for(let fe=0;fe<ie;fe++){const be=fe*M-U;we[v]=be*y,we[p]=V*_,we[m]=K,l.push(we.x,we.y,we.z),we[v]=0,we[p]=0,we[m]=b>0?1:-1,u.push(we.x,we.y,we.z),d.push(fe/T),d.push(1-B/D),ue+=1}}for(let B=0;B<D;B++)for(let V=0;V<T;V++){const fe=f+V+ie*B,be=f+V+ie*(B+1),j=f+(V+1)+ie*(B+1),te=f+(V+1)+ie*B;c.push(fe,be,te),c.push(be,j,te),Z+=6}o.addGroup(h,Z,S),h+=Z,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const s in i)e[s]=i[s]}return e}function pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Ma={clone:ks,merge:Jt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Xs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new R,cu=new he,uu=new he;class jt extends Gd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class vp extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(vs,xs,e,t);s.layers=this.layers,this.add(s);const a=new jt(vs,xs,e,t);a.layers=this.layers,this.add(a);const r=new jt(vs,xs,e,t);r.layers=this.layers,this.add(r);const o=new jt(vs,xs,e,t);o.layers=this.layers,this.add(o);const c=new jt(vs,xs,e,t);c.layers=this.layers,this.add(c);const l=new jt(vs,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hd extends en{constructor(e,t,i,s,a,r,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),a=new St({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:ni});a.uniforms.tEquirect.value=t;const r=new Xe(s,a),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Bn),new vp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}}const So=new R,_p=new R,yp=new Ze;class Oi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=So.subVectors(i,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(So),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yp.getNormalMatrix(e),s=this.coplanarPoint(So).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new zr,sr=new R;class oc{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,a=new Oi,r=new Oi){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],x=s[15];if(i[0].setComponents(c-a,f-l,p-h,x-m).normalize(),i[1].setComponents(c+a,f+l,p+h,x+m).normalize(),i[2].setComponents(c+r,f+u,p+g,x+y).normalize(),i[3].setComponents(c-r,f-u,p-g,x-y).normalize(),i[4].setComponents(c-o,f-d,p-v,x-_).normalize(),t===ei)i[5].setComponents(c+o,f+d,p+v,x+_).normalize();else if(t===Tr)i[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sr.x=s.normal.x>0?e.max.x:e.min.x,sr.y=s.normal.y>0?e.max.y:e.min.y,sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let n=null,e=!1,t=null,i=null;function s(a,r){t(a,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function bp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class Ai extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,h=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const y=m*f-r;for(let _=0;_<l;_++){const x=_*d-a;g.push(x,-y,0),v.push(0,0,1),p.push(_/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const _=y+l*m,x=y+l*(m+1),P=y+1+l*(m+1),b=y+1+l*m;h.push(_,x,b),h.push(x,P,b)}this.setIndex(h),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:wp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Rp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Bp,color_fragment:Gp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:$p,common:Wp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:jp,displacementmap_vertex:Yp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:am,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:hm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:_m,lights_physical_pars_fragment:ym,lights_fragment_begin:bm,lights_fragment_maps:Mm,lights_fragment_end:Sm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Rm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:km,normal_fragment_begin:zm,normal_fragment_maps:Bm,normal_pars_fragment:Gm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:jm,opaque_fragment:Ym,packing:Km,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:a0,shadowmask_pars_fragment:r0,skinbase_vertex:o0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:h0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:v0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:y0,background_vert:b0,background_frag:M0,backgroundCube_vert:S0,backgroundCube_frag:w0,cube_vert:E0,cube_frag:T0,depth_vert:A0,depth_frag:C0,distanceRGBA_vert:P0,distanceRGBA_frag:R0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:I0,linedashed_frag:N0,meshbasic_vert:U0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:k0,meshmatcap_vert:z0,meshmatcap_frag:B0,meshnormal_vert:G0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:$0,meshphysical_vert:W0,meshphysical_frag:q0,meshtoon_vert:X0,meshtoon_frag:j0,points_vert:Y0,points_frag:K0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:eg},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Jt([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ar={r:0,b:0,g:0},Ni=new In,tg=new ft;function ng(n,e,t,i,s,a,r){const o=new ke(0);let c=a===!0?0:1,l,u,d=null,f=0,h=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?m(o,c):x&&x.isColor&&(m(x,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Or)?(u===void 0&&(u=new Xe(new xn(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:ks(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Ni)),u.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,(d!==x||f!==x.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xe(new Ai(2,2),new St({name:"BackgroundMaterial",uniforms:ks(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(ar,Bd(n)),i.buffers.color.setClear(ar.r,ar.g,ar.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:v,addToRenderList:p}}function ig(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(M,C,U,I,K){let ie=!1;const ee=d(I,U,C);a!==ee&&(a=ee,l(a.object)),ie=h(M,I,U,K),ie&&g(M,I,U,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(ie||r)&&(r=!1,x(M,C,U,I),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,C,U){const I=U.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let ie=K[C.id];ie===void 0&&(ie={},K[C.id]=ie);let ee=ie[I];return ee===void 0&&(ee=f(c()),ie[I]=ee),ee}function f(M){const C=[],U=[],I=[];for(let K=0;K<t;K++)C[K]=0,U[K]=0,I[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:I,object:M,attributes:{},index:null}}function h(M,C,U,I){const K=a.attributes,ie=C.attributes;let ee=0;const ue=U.getAttributes();for(const Z in ue)if(ue[Z].location>=0){const B=K[Z];let V=ie[Z];if(V===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),B===void 0||B.attribute!==V||V&&B.data!==V.data)return!0;ee++}return a.attributesNum!==ee||a.index!==I}function g(M,C,U,I){const K={},ie=C.attributes;let ee=0;const ue=U.getAttributes();for(const Z in ue)if(ue[Z].location>=0){let B=ie[Z];B===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(B=M.instanceColor));const V={};V.attribute=B,B&&B.data&&(V.data=B.data),K[Z]=V,ee++}a.attributes=K,a.attributesNum=ee,a.index=I}function v(){const M=a.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function p(M){m(M,0)}function m(M,C){const U=a.newAttributes,I=a.enabledAttributes,K=a.attributeDivisors;U[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),K[M]!==C&&(n.vertexAttribDivisor(M,C),K[M]=C)}function y(){const M=a.newAttributes,C=a.enabledAttributes;for(let U=0,I=C.length;U<I;U++)C[U]!==M[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function _(M,C,U,I,K,ie,ee){ee===!0?n.vertexAttribIPointer(M,C,U,K,ie):n.vertexAttribPointer(M,C,U,I,K,ie)}function x(M,C,U,I){v();const K=I.attributes,ie=U.getAttributes(),ee=C.defaultAttributeValues;for(const ue in ie){const Z=ie[ue];if(Z.location>=0){let we=K[ue];if(we===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),we!==void 0){const B=we.normalized,V=we.itemSize,fe=e.get(we);if(fe===void 0)continue;const be=fe.buffer,j=fe.type,te=fe.bytesPerElement,ve=j===n.INT||j===n.UNSIGNED_INT||we.gpuType===Jl;if(we.isInterleavedBufferAttribute){const pe=we.data,Pe=pe.stride,He=we.offset;if(pe.isInstancedInterleavedBuffer){for(let je=0;je<Z.locationSize;je++)m(Z.location+je,pe.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<Z.locationSize;je++)p(Z.location+je);n.bindBuffer(n.ARRAY_BUFFER,be);for(let je=0;je<Z.locationSize;je++)_(Z.location+je,V/Z.locationSize,j,B,Pe*te,(He+V/Z.locationSize*je)*te,ve)}else{if(we.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)m(Z.location+pe,we.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let pe=0;pe<Z.locationSize;pe++)p(Z.location+pe);n.bindBuffer(n.ARRAY_BUFFER,be);for(let pe=0;pe<Z.locationSize;pe++)_(Z.location+pe,V/Z.locationSize,j,B,V*te,V/Z.locationSize*pe*te,ve)}}else if(ee!==void 0){const B=ee[ue];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(Z.location,B);break;case 3:n.vertexAttrib3fv(Z.location,B);break;case 4:n.vertexAttrib4fv(Z.location,B);break;default:n.vertexAttrib1fv(Z.location,B)}}}}y()}function P(){D();for(const M in i){const C=i[M];for(const U in C){const I=C[U];for(const K in I)u(I[K].object),delete I[K];delete C[U]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const U in C){const I=C[U];for(const K in I)u(I[K].object),delete I[K];delete C[U]}delete i[M.id]}function T(M){for(const C in i){const U=i[C];if(U[M.id]===void 0)continue;const I=U[M.id];for(const K in I)u(I[K].object),delete I[K];delete U[M.id]}}function D(){S(),r=!0,a!==s&&(a=s,l(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function sg(n,e,t){let i;function s(l){i=l}function a(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function r(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)r(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ag(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==oi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qn&&!D)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function rg(n){const e=this;let t=null,i=0,s=!1,a=!1;const r=new Oi,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!p)a?u(null):l();else{const y=a?0:i,_=y*4;let x=m.clippingState||null;c.value=x,x=u(g,f,_,h);for(let P=0;P!==_;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=h+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=h;_!==v;++_,x+=4)r.copy(d[_]).applyMatrix4(y,o),r.normal.toArray(p,x),p[x+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function og(n){let e=new WeakMap;function t(r,o){return o===el?r.mapping=Ns:o===tl&&(r.mapping=Us),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===el||o===tl)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new xp(c.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class lc extends Gd{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,du=[.125,.215,.35,.446,.526,.582],Gi=20,wo=new lc,hu=new ke;let Eo=null,To=0,Ao=0,Co=!1;const ki=(1+Math.sqrt(5))/2,_s=1/ki,fu=[new R(-ki,_s,0),new R(ki,_s,0),new R(-_s,0,ki),new R(_s,0,ki),new R(0,ki,-_s),new R(0,ki,_s),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,To,Ao),this._renderer.xr.enabled=Co,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ii,format:Cn,colorSpace:$s,depthBuffer:!1},s=mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(a)),this._blurMaterial=cg(a,e,t)}return s}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,i,s){const o=new jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hu),u.toneMapping=wi,u.autoClear=!1;const h=new Pn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Xe(new xn,h);let v=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,v=!0):(h.color.copy(hu),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const _=this._cubeSize;rr(s,y*_,m>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ns||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;rr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=fu[(s-a-1)%fu.length];this._blur(e,a-1,a,r,o)}t.autoClear=i}_blur(e,t,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xe(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Gi-1),v=a/g,p=isFinite(a)?1+Math.floor(u*v):Gi;p>Gi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);const m=[];let y=0;for(let T=0;T<Gi;++T){const D=T/v,S=Math.exp(-D*D/2);m.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const x=this._sizeLods[s],P=3*x*(s>_-Es?s-_+Es:0),b=4*(this._cubeSize-x);rr(t,P,b,3*x,2*x),c.setRenderTarget(t),c.render(d,wo)}}function lg(n){const e=[],t=[],i=[];let s=n;const a=n-Es+1+du.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>n-Es?c=du[r-n+Es-1]:r===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*h),_=new Float32Array(p*g*h),x=new Float32Array(m*g*h);for(let b=0;b<h;b++){const T=b%3*2/3-1,D=b>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];y.set(S,v*g*b),_.set(f,p*g*b);const M=[b,b,b,b,b,b];x.set(M,m*g*b)}const P=new Nt;P.setAttribute("position",new tn(y,v)),P.setAttribute("uv",new tn(_,p)),P.setAttribute("faceIndex",new tn(x,m)),e.push(P),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mu(n,e,t){const i=new Dn(n,e,t);return i.texture.mapping=Or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cg(n,e,t){const i=new Float32Array(Gi),s=new R(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function gu(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function vu(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===el||c===tl,u=c===Ns||c===Us;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new pu(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new pu(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function dg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hg(n,e,t,i){const s={},a=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",r),delete s[f.id];const h=a.get(f);h&&(e.remove(h),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const v=h[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const y=h.array;v=h.version;for(let _=0,x=y.length;_<x;_+=3){const P=y[_+0],b=y[_+1],T=y[_+2];f.push(P,b,b,T,T,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const P=_+0,b=_+1,T=_+2;f.push(P,b,b,T,T,P)}}else return;const p=new(Nd(f)?zd:kd)(f,1);p.version=v;const m=a.get(d);m&&e.remove(m),a.set(d,p)}function u(d){const f=a.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function fg(n,e,t){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function c(f,h){n.drawElements(i,h,a,f*r),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,a,f*r,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function d(f,h,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/r,h[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,a,f,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y]*v[y];t.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mg(n,e,t){const i=new WeakMap,s=new ht;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let P=o.attributes.position.count*x,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*b*4*d),D=new Fd(T,P,b,d);D.type=Qn,D.needsUpdate=!0;const S=x*4;for(let C=0;C<d;C++){const U=m[C],I=y[C],K=_[C],ie=P*b*4*C;for(let ee=0;ee<U.count;ee++){const ue=ee*S;g===!0&&(s.fromBufferAttribute(U,ee),T[ie+ue+0]=s.x,T[ie+ue+1]=s.y,T[ie+ue+2]=s.z,T[ie+ue+3]=0),v===!0&&(s.fromBufferAttribute(I,ee),T[ie+ue+4]=s.x,T[ie+ue+5]=s.y,T[ie+ue+6]=s.z,T[ie+ue+7]=0),p===!0&&(s.fromBufferAttribute(K,ee),T[ie+ue+8]=s.x,T[ie+ue+9]=s.y,T[ie+ue+10]=s.z,T[ie+ue+11]=K.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new he(P,b)},i.set(o,f),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function gg(n,e,t,i){let s=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class $d extends en{constructor(e,t,i,s,a,r,o,c,l,u=Rs){if(u!==Rs&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=Ji),i===void 0&&u===Os&&(i=Fs),super(null,s,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wd=new en,xu=new $d(1,1),qd=new Fd,Xd=new ip,jd=new Hd,_u=[],yu=[],bu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=_u[s];if(a===void 0&&(a=new Float32Array(s),_u[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Br(n,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Su.set(i),n.uniformMatrix2fv(this.addr,!1,Su),Ot(t,i)}}function Mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Mu.set(i),n.uniformMatrix3fv(this.addr,!1,Mu),Ot(t,i)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Ot(t,i)}}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function Dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=Id,a=xu):a=Wd,t.setTexture2D(e||a,s)}function Ig(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xd,s)}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jd,s)}function Ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qd,s)}function Fg(n){switch(n){case 5126:return vg;case 35664:return xg;case 35665:return _g;case 35666:return yg;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Pg;case 36295:return Rg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(n,e){n.uniform1fv(this.addr,e)}function kg(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function zg(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Bg(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Gg(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hg(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vg(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function Wg(n,e){n.uniform2iv(this.addr,e)}function qg(n,e){n.uniform3iv(this.addr,e)}function Xg(n,e){n.uniform4iv(this.addr,e)}function jg(n,e){n.uniform1uiv(this.addr,e)}function Yg(n,e){n.uniform2uiv(this.addr,e)}function Kg(n,e){n.uniform3uiv(this.addr,e)}function Zg(n,e){n.uniform4uiv(this.addr,e)}function Jg(n,e,t){const i=this.cache,s=e.length,a=Br(t,s);Ft(i,a)||(n.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Wd,a[r])}function Qg(n,e,t){const i=this.cache,s=e.length,a=Br(t,s);Ft(i,a)||(n.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Xd,a[r])}function ev(n,e,t){const i=this.cache,s=e.length,a=Br(t,s);Ft(i,a)||(n.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||jd,a[r])}function tv(n,e,t){const i=this.cache,s=e.length,a=Br(t,s);Ft(i,a)||(n.uniform1iv(this.addr,a),Ot(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||qd,a[r])}function nv(n){switch(n){case 5126:return Og;case 35664:return kg;case 35665:return zg;case 35666:return Bg;case 35674:return Gg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return $g;case 35667:case 35671:return Wg;case 35668:case 35672:return qg;case 35669:case 35673:return Xg;case 5125:return jg;case 36294:return Yg;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fg(t.type)}}class sv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}}class av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],i)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function rv(n,e,t){const i=n.name,s=i.length;for(Po.lastIndex=0;;){const a=Po.exec(i),r=Po.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){wu(t,l===void 0?new iv(o,n,e):new sv(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new av(o),wu(t,d)),t=d}}}class Sr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);rv(a,r,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ov=37297;let lv=0;function cv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Tu=new Ze;function uv(n){nt._getMatrix(Tu,nt.workingColorSpace,n);const e=`mat3( ${Tu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case kr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+cv(n.getShaderSource(e),r)}else return s}function dv(n,e){const t=uv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hv(n,e){let t;switch(e){case gd:t="Linear";break;case vd:t="Reinhard";break;case xd:t="Cineon";break;case Zl:t="ACESFilmic";break;case _d:t="AgX";break;case yd:t="Neutral";break;case bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const or=new R;function fv(){nt.getLuminanceCoefficients(or);const n=or.x.toFixed(4),e=or.y.toFixed(4),t=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function mv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function la(n){return n!==""}function Cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(vv,_v)}const xv=new Map;function _v(n,e){let t=Je[e];if(t===void 0){const i=xv.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(n){return n.replace(yv,bv)}function bv(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Lu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Ev(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function Tv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Av(n,e,t,i){const s=n.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=Mv(t),l=Sv(t),u=wv(t),d=Ev(t),f=Tv(t),h=pv(t),g=mv(a),v=s.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`)):(p=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),m=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Je.tonemapping_pars_fragment:"",t.toneMapping!==wi?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,dv("linearToOutputTexel",t.outputColorSpace),fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),r=Rl(r),r=Cu(r,t),r=Pu(r,t),o=Rl(o),o=Cu(o,t),o=Pu(o,t),r=Ru(r),o=Ru(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+r,x=y+m+o,P=Eu(s,s.VERTEX_SHADER,_),b=Eu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(P).trim(),K=s.getShaderInfoLog(b).trim();let ie=!0,ee=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,b);else{const ue=Au(s,P,"vertex"),Z=Au(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ue+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||K==="")&&(ee=!1);ee&&(C.diagnostics={runnable:ie,programLog:U,vertexShader:{log:I,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(P),s.deleteShader(b),D=new Sr(s,v),S=gv(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,ov)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=b,this}let Cv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rv(e),t.set(e,i)),i}}class Rv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Lv(n,e,t,i,s,a,r){const o=new rc,c=new Pv,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,C,U,I){const K=U.fog,ie=I.geometry,ee=S.isMeshStandardMaterial?U.environment:null,ue=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),Z=ue&&ue.mapping===Or?ue.image.height:null,we=g[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const B=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,V=B!==void 0?B.length:0;let fe=0;ie.morphAttributes.position!==void 0&&(fe=1),ie.morphAttributes.normal!==void 0&&(fe=2),ie.morphAttributes.color!==void 0&&(fe=3);let be,j,te,ve;if(we){const ct=zn[we];be=ct.vertexShader,j=ct.fragmentShader}else be=S.vertexShader,j=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),ve=c.getFragmentShaderID(S);const pe=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,je=I.isBatchedMesh===!0,Ce=!!S.map,Ve=!!S.matcap,bt=!!ue,N=!!S.aoMap,Pt=!!S.lightMap,Ye=!!S.bumpMap,Qe=!!S.normalMap,Be=!!S.displacementMap,lt=!!S.emissiveMap,Oe=!!S.metalnessMap,A=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,ae=S.dispersion>0,de=S.iridescence>0,se=S.sheen>0,z=S.transmission>0,X=w&&!!S.anisotropyMap,Q=G&&!!S.clearcoatMap,Le=G&&!!S.clearcoatNormalMap,Y=G&&!!S.clearcoatRoughnessMap,xe=de&&!!S.iridescenceMap,me=de&&!!S.iridescenceThicknessMap,Te=se&&!!S.sheenColorMap,Me=se&&!!S.sheenRoughnessMap,De=!!S.specularMap,Re=!!S.specularColorMap,qe=!!S.specularIntensityMap,F=z&&!!S.transmissionMap,ge=z&&!!S.thicknessMap,H=!!S.gradientMap,ne=!!S.alphaMap,ye=S.alphaTest>0,Se=!!S.alphaHash,$e=!!S.extensions;let Mt=wi;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const kt={shaderID:we,shaderType:S.type,shaderName:S.name,vertexShader:be,fragmentShader:j,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:je,batchingColor:je&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:$s,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:Ve,envMap:bt,envMapMode:bt&&ue.mapping,envMapCubeUVHeight:Z,aoMap:N,lightMap:Pt,bumpMap:Ye,normalMap:Qe,displacementMap:f&&Be,emissiveMap:lt,normalMapObjectSpace:Qe&&S.normalMapType===Ef,normalMapTangentSpace:Qe&&S.normalMapType===Dd,metalnessMap:Oe,roughnessMap:A,anisotropy:w,anisotropyMap:X,clearcoat:G,clearcoatMap:Q,clearcoatNormalMap:Le,clearcoatRoughnessMap:Y,dispersion:ae,iridescence:de,iridescenceMap:xe,iridescenceThicknessMap:me,sheen:se,sheenColorMap:Te,sheenRoughnessMap:Me,specularMap:De,specularColorMap:Re,specularIntensityMap:qe,transmission:z,transmissionMap:F,thicknessMap:ge,gradientMap:H,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:Se,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:Pt&&v(S.lightMap.channel),bumpMapUv:Ye&&v(S.bumpMap.channel),normalMapUv:Qe&&v(S.normalMap.channel),displacementMapUv:Be&&v(S.displacementMap.channel),emissiveMapUv:lt&&v(S.emissiveMap.channel),metalnessMapUv:Oe&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:X&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:De&&v(S.specularMap.channel),specularColorMapUv:Re&&v(S.specularColorMap.channel),specularIntensityMapUv:qe&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:ge&&v(S.thicknessMap.channel),alphaMapUv:ne&&v(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Qe||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!ie.attributes.uv&&(Ce||ne),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:lt&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let C;if(M){const U=zn[M];C=Ma.clone(U.uniforms)}else C=S.uniforms;return C}function P(S,M){let C;for(let U=0,I=u.length;U<I;U++){const K=u[U];if(K.cacheKey===M){C=K,++C.usedTimes;break}}return C===void 0&&(C=new Av(n,M,S,a),u.push(C)),C}function b(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:D}}function Dv(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Iu(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,h,g,v,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function o(d,f,h,g,v,p){const m=r(d,f,h,g,v,p);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function c(d,f,h,g,v,p){const m=r(d,f,h,g,v,p);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||Iv),i.length>1&&i.sort(f||Du),s.length>1&&s.sort(f||Du)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:o,unshift:c,finish:u,sort:l}}function Nv(){let n=new WeakMap;function e(i,s){const a=n.get(i);let r;return a===void 0?(r=new Iu,n.set(i,[r])):s>=a.length?(r=new Iu,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Uv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ke};break;case"SpotLight":t={position:new R,direction:new R,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ov=0;function kv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zv(n){const e=new Uv,t=Fv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,a=new ft,r=new ft;function o(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,v=0,p=0,m=0,y=0,_=0,x=0,P=0,b=0,T=0;l.sort(kv);for(let S=0,M=l.length;S<M;S++){const C=l[S],U=C.color,I=C.intensity,K=C.distance,ie=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*I,d+=U.g*I,f+=U.b*I;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(C.sh.coefficients[ee],I);T++}else if(C.isDirectionalLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ue=C.shadow,Z=t.get(C);Z.shadowIntensity=ue.intensity,Z.shadowBias=ue.bias,Z.shadowNormalBias=ue.normalBias,Z.shadowRadius=ue.radius,Z.shadowMapSize=ue.mapSize,i.directionalShadow[h]=Z,i.directionalShadowMap[h]=ie,i.directionalShadowMatrix[h]=C.shadow.matrix,y++}i.directional[h]=ee,h++}else if(C.isSpotLight){const ee=e.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(U).multiplyScalar(I),ee.distance=K,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,i.spot[v]=ee;const ue=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,ue.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[v]=ue.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=ue.intensity,Z.shadowBias=ue.bias,Z.shadowNormalBias=ue.normalBias,Z.shadowRadius=ue.radius,Z.shadowMapSize=ue.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=ie,x++}v++}else if(C.isRectAreaLight){const ee=e.get(C);ee.color.copy(U).multiplyScalar(I),ee.halfWidth.set(C.width*.5,0,0),ee.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=ee,p++}else if(C.isPointLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){const ue=C.shadow,Z=t.get(C);Z.shadowIntensity=ue.intensity,Z.shadowBias=ue.bias,Z.shadowNormalBias=ue.normalBias,Z.shadowRadius=ue.radius,Z.shadowMapSize=ue.mapSize,Z.shadowCameraNear=ue.camera.near,Z.shadowCameraFar=ue.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=ee,g++}else if(C.isHemisphereLight){const ee=e.get(C);ee.skyColor.copy(C.color).multiplyScalar(I),ee.groundColor.copy(C.groundColor).multiplyScalar(I),i.hemi[m]=ee,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,D.directionalLength=h,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=T,i.version=Ov++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const _=l[m];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(_.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),r.identity(),a.copy(_.matrixWorld),a.premultiply(p),r.extractRotation(a),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:i}}function Nu(n){const e=new zv(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function r(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Bv(n){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Nu(n),e.set(s,[o])):a>=r.length?(o=new Nu(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Gv extends Xs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hv extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wv(n,e,t){let i=new oc;const s=new he,a=new he,r=new ht,o=new Gv({depthPacking:wf}),c=new Hv,l={},u=t.maxTextureSize,d={[ri]:Kt,[Kt]:ri,[pn]:pn},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Vv,fragmentShader:$v}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let m=this.type;this.render=function(b,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ni),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=m!==Jn&&this.type===Jn,K=m===Jn&&this.type!==Jn;for(let ie=0,ee=b.length;ie<ee;ie++){const ue=b[ie],Z=ue.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const we=Z.getFrameExtents();if(s.multiply(we),a.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/we.x),s.x=a.x*we.x,Z.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/we.y),s.y=a.y*we.y,Z.mapSize.y=a.y)),Z.map===null||I===!0||K===!0){const V=this.type!==Jn?{minFilter:Ln,magFilter:Ln}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Dn(s.x,s.y,V),Z.map.texture.name=ue.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const B=Z.getViewportCount();for(let V=0;V<B;V++){const fe=Z.getViewport(V);r.set(a.x*fe.x,a.y*fe.y,a.x*fe.z,a.y*fe.w),U.viewport(r),Z.updateMatrices(ue,V),i=Z.getFrustum(),x(T,D,Z.camera,ue,this.type)}Z.isPointLightShadow!==!0&&this.type===Jn&&y(Z,D),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(S,M,C)};function y(b,T){const D=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,D,f,v,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,D,h,v,null)}function _(b,T,D,S){let M=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,I=T.uuid;let K=l[U];K===void 0&&(K={},l[U]=K);let ie=K[I];ie===void 0&&(ie=M.clone(),K[I]=ie,T.addEventListener("dispose",P)),M=ie}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Jn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=D}return M}function x(b,T,D,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Jn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const I=e.update(b),K=b.material;if(Array.isArray(K)){const ie=I.groups;for(let ee=0,ue=ie.length;ee<ue;ee++){const Z=ie[ee],we=K[Z.materialIndex];if(we&&we.visible){const B=_(b,we,S,M);b.onBeforeShadow(n,b,T,D,I,B,Z),n.renderBufferDirect(D,null,I,B,b,Z),b.onAfterShadow(n,b,T,D,I,B,Z)}}}else if(K.visible){const ie=_(b,K,S,M);b.onBeforeShadow(n,b,T,D,I,ie,null),n.renderBufferDirect(D,null,I,ie,b,null),b.onAfterShadow(n,b,T,D,I,ie,null)}}const U=b.children;for(let I=0,K=U.length;I<K;I++)x(U[I],T,D,S,M)}function P(b){b.target.removeEventListener("dispose",P);for(const D in l){const S=l[D],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const qv={[Xo]:jo,[Yo]:Jo,[Ko]:Qo,[Is]:Zo,[jo]:Xo,[Jo]:Yo,[Qo]:Ko,[Zo]:Is};function Xv(n,e){function t(){let F=!1;const ge=new ht;let H=null;const ne=new ht(0,0,0,0);return{setMask:function(ye){H!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),H=ye)},setLocked:function(ye){F=ye},setClear:function(ye,Se,$e,Mt,kt){kt===!0&&(ye*=Mt,Se*=Mt,$e*=Mt),ge.set(ye,Se,$e,Mt),ne.equals(ge)===!1&&(n.clearColor(ye,Se,$e,Mt),ne.copy(ge))},reset:function(){F=!1,H=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,H=null,ne=null,ye=null;return{setReversed:function(Se){if(ge!==Se){const $e=e.get("EXT_clip_control");ge?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Mt=ye;ye=null,this.setClear(Mt)}ge=Se},getReversed:function(){return ge},setTest:function(Se){Se?pe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Se){H!==Se&&!F&&(n.depthMask(Se),H=Se)},setFunc:function(Se){if(ge&&(Se=qv[Se]),ne!==Se){switch(Se){case Xo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case Ko:n.depthFunc(n.EQUAL);break;case Zo:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Se}},setLocked:function(Se){F=Se},setClear:function(Se){ye!==Se&&(ge&&(Se=1-Se),n.clearDepth(Se),ye=Se)},reset:function(){F=!1,H=null,ne=null,ye=null,ge=!1}}}function s(){let F=!1,ge=null,H=null,ne=null,ye=null,Se=null,$e=null,Mt=null,kt=null;return{setTest:function(ct){F||(ct?pe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ct){ge!==ct&&!F&&(n.stencilMask(ct),ge=ct)},setFunc:function(ct,bn,$n){(H!==ct||ne!==bn||ye!==$n)&&(n.stencilFunc(ct,bn,$n),H=ct,ne=bn,ye=$n)},setOp:function(ct,bn,$n){(Se!==ct||$e!==bn||Mt!==$n)&&(n.stencilOp(ct,bn,$n),Se=ct,$e=bn,Mt=$n)},setLocked:function(ct){F=ct},setClear:function(ct){kt!==ct&&(n.clearStencil(ct),kt=ct)},reset:function(){F=!1,ge=null,H=null,ne=null,ye=null,Se=null,$e=null,Mt=null,kt=null}}}const a=new t,r=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,p=null,m=null,y=null,_=null,x=null,P=null,b=null,T=new ke(0,0,0),D=0,S=!1,M=null,C=null,U=null,I=null,K=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ue=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ee=ue>=1):Z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ee=ue>=2);let we=null,B={};const V=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),be=new ht().fromArray(V),j=new ht().fromArray(fe);function te(F,ge,H,ne){const ye=new Uint8Array(4),Se=n.createTexture();n.bindTexture(F,Se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<H;$e++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ge+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Se}const ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),r.setFunc(Is),Ye(!1),Qe(kc),pe(n.CULL_FACE),N(ni);function pe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Pe(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function He(F,ge){return d[F]!==ge?(n.bindFramebuffer(F,ge),d[F]=ge,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function je(F,ge){let H=h,ne=!1;if(F){H=f.get(ge),H===void 0&&(H=[],f.set(ge,H));const ye=F.textures;if(H.length!==ye.length||H[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,$e=ye.length;Se<$e;Se++)H[Se]=n.COLOR_ATTACHMENT0+Se;H.length=ye.length,ne=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,ne=!0);ne&&n.drawBuffers(H)}function Ce(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Ve={[Bi]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[nf]:n.FUNC_REVERSE_SUBTRACT};Ve[sf]=n.MIN,Ve[af]=n.MAX;const bt={[rf]:n.ZERO,[of]:n.ONE,[lf]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[pf]:n.SRC_ALPHA_SATURATE,[hf]:n.DST_COLOR,[uf]:n.DST_ALPHA,[cf]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[mf]:n.CONSTANT_COLOR,[gf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[xf]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,ge,H,ne,ye,Se,$e,Mt,kt,ct){if(F===ni){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),F!==ef){if(F!==p||ct!==S){if((m!==Bi||x!==Bi)&&(n.blendEquation(n.FUNC_ADD),m=Bi,x=Bi),ct)switch(F){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,_=null,P=null,b=null,T.set(0,0,0),D=0,p=F,S=ct}return}ye=ye||ge,Se=Se||H,$e=$e||ne,(ge!==m||ye!==x)&&(n.blendEquationSeparate(Ve[ge],Ve[ye]),m=ge,x=ye),(H!==y||ne!==_||Se!==P||$e!==b)&&(n.blendFuncSeparate(bt[H],bt[ne],bt[Se],bt[$e]),y=H,_=ne,P=Se,b=$e),(Mt.equals(T)===!1||kt!==D)&&(n.blendColor(Mt.r,Mt.g,Mt.b,kt),T.copy(Mt),D=kt),p=F,S=!1}function Pt(F,ge){F.side===pn?Pe(n.CULL_FACE):pe(n.CULL_FACE);let H=F.side===Kt;ge&&(H=!H),Ye(H),F.blending===Ps&&F.transparent===!1?N(ni):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function Qe(F){F!==Zh?(pe(n.CULL_FACE),F!==C&&(F===kc?n.cullFace(n.BACK):F===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),C=F}function Be(F){F!==U&&(ee&&n.lineWidth(F),U=F)}function lt(F,ge,H){F?(pe(n.POLYGON_OFFSET_FILL),(I!==ge||K!==H)&&(n.polygonOffset(ge,H),I=ge,K=H)):Pe(n.POLYGON_OFFSET_FILL)}function Oe(F){F?pe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function A(F){F===void 0&&(F=n.TEXTURE0+ie-1),we!==F&&(n.activeTexture(F),we=F)}function w(F,ge,H){H===void 0&&(we===null?H=n.TEXTURE0+ie-1:H=we);let ne=B[H];ne===void 0&&(ne={type:void 0,texture:void 0},B[H]=ne),(ne.type!==F||ne.texture!==ge)&&(we!==H&&(n.activeTexture(H),we=H),n.bindTexture(F,ge||ve[F]),ne.type=F,ne.texture=ge)}function G(){const F=B[we];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){be.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),be.copy(F))}function Me(F){j.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function De(F,ge){let H=l.get(ge);H===void 0&&(H=new WeakMap,l.set(ge,H));let ne=H.get(F);ne===void 0&&(ne=n.getUniformBlockIndex(ge,F.name),H.set(F,ne))}function Re(F,ge){const ne=l.get(ge).get(F);c.get(ge)!==ne&&(n.uniformBlockBinding(ge,ne,F.__bindingPointIndex),c.set(ge,ne))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},we=null,B={},d={},f=new WeakMap,h=[],g=null,v=!1,p=null,m=null,y=null,_=null,x=null,P=null,b=null,T=new ke(0,0,0),D=0,S=!1,M=null,C=null,U=null,I=null,K=null,be.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:pe,disable:Pe,bindFramebuffer:He,drawBuffers:je,useProgram:Ce,setBlending:N,setMaterial:Pt,setFlipSided:Ye,setCullFace:Qe,setLineWidth:Be,setPolygonOffset:lt,setScissorTest:Oe,activeTexture:A,bindTexture:w,unbindTexture:G,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:xe,texImage3D:me,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:Le,texStorage3D:Y,texSubImage2D:se,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:Te,viewport:Me,reset:qe}}function Uu(n,e,t,i){const s=jv(i);switch(t){case Ed:return n*e;case Ad:return n*e;case Cd:return n*e*2;case Pd:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case Rd:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case Td:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case xr:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yr:case br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case ol:return Math.max(n,16)*Math.max(e,8)/4;case sl:case rl:return Math.max(n,8)*Math.max(e,8)/2;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mr:case El:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ld:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(n){switch(n){case oi:case Md:return{byteLength:1,components:1};case ya:case Sd:case ii:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Ji:case Jl:case Qn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yv(n,e,t,i,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return h?new OffscreenCanvas(A,w):Ar("canvas")}function v(A,w,G){let ae=1;const de=Oe(A);if((de.width>G||de.height>G)&&(ae=G/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(ae*de.width),z=Math.floor(ae*de.height);d===void 0&&(d=g(se,z));const X=w?g(se,z):d;return X.width=se,X.height=z,X.getContext("2d").drawImage(A,0,0,se,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+se+"x"+z+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,w,G,ae,de=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=w;if(w===n.RED&&(G===n.FLOAT&&(se=n.R32F),G===n.HALF_FLOAT&&(se=n.R16F),G===n.UNSIGNED_BYTE&&(se=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.R8UI),G===n.UNSIGNED_SHORT&&(se=n.R16UI),G===n.UNSIGNED_INT&&(se=n.R32UI),G===n.BYTE&&(se=n.R8I),G===n.SHORT&&(se=n.R16I),G===n.INT&&(se=n.R32I)),w===n.RG&&(G===n.FLOAT&&(se=n.RG32F),G===n.HALF_FLOAT&&(se=n.RG16F),G===n.UNSIGNED_BYTE&&(se=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RG8UI),G===n.UNSIGNED_SHORT&&(se=n.RG16UI),G===n.UNSIGNED_INT&&(se=n.RG32UI),G===n.BYTE&&(se=n.RG8I),G===n.SHORT&&(se=n.RG16I),G===n.INT&&(se=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RGB8UI),G===n.UNSIGNED_SHORT&&(se=n.RGB16UI),G===n.UNSIGNED_INT&&(se=n.RGB32UI),G===n.BYTE&&(se=n.RGB8I),G===n.SHORT&&(se=n.RGB16I),G===n.INT&&(se=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),G===n.UNSIGNED_INT&&(se=n.RGBA32UI),G===n.BYTE&&(se=n.RGBA8I),G===n.SHORT&&(se=n.RGBA16I),G===n.INT&&(se=n.RGBA32I)),w===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),w===n.RGBA){const z=de?kr:nt.getTransfer(ae);G===n.FLOAT&&(se=n.RGBA32F),G===n.HALF_FLOAT&&(se=n.RGBA16F),G===n.UNSIGNED_BYTE&&(se=z===ut?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(A,w){let G;return A?w===null||w===Ji||w===Fs?G=n.DEPTH24_STENCIL8:w===Qn?G=n.DEPTH32F_STENCIL8:w===ya&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ji||w===Fs?G=n.DEPTH_COMPONENT24:w===Qn?G=n.DEPTH_COMPONENT32F:w===ya&&(G=n.DEPTH_COMPONENT16),G}function P(A,w){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){const w=A.target;w.removeEventListener("dispose",b),D(w),w.isVideoTexture&&u.delete(w)}function T(A){const w=A.target;w.removeEventListener("dispose",T),M(w)}function D(A){const w=i.get(A);if(w.__webglInit===void 0)return;const G=A.source,ae=f.get(G);if(ae){const de=ae[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&S(A),Object.keys(ae).length===0&&f.delete(G)}i.remove(A)}function S(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const G=A.source,ae=f.get(G);delete ae[w.__cacheKey],r.memory.textures--}function M(A){const w=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let de=0;de<w.__webglFramebuffer[ae].length;de++)n.deleteFramebuffer(w.__webglFramebuffer[ae][de]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=A.textures;for(let ae=0,de=G.length;ae<de;ae++){const se=i.get(G[ae]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),r.memory.textures--),i.remove(G[ae])}i.remove(A)}let C=0;function U(){C=0}function I(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function K(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function ie(A,w){const G=i.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,w);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function ee(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function ue(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function Z(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){te(G,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}const we={[nl]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},B={[Ln]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[Ga]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},V={[Tf]:n.NEVER,[Df]:n.ALWAYS,[Af]:n.LESS,[Id]:n.LEQUAL,[Cf]:n.EQUAL,[Lf]:n.GEQUAL,[Pf]:n.GREATER,[Rf]:n.NOTEQUAL};function fe(A,w){if(w.type===Qn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===no||w.magFilter===Ga||w.magFilter===$i||w.minFilter===Bn||w.minFilter===no||w.minFilter===Ga||w.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,we[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,we[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,we[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,B[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,B[w.minFilter]),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==Ga&&w.minFilter!==$i||w.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function be(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));const ae=w.source;let de=f.get(ae);de===void 0&&(de={},f.set(ae,de));const se=K(w);if(se!==A.__cacheKey){de[se]===void 0&&(de[se]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),de[se].usedTimes++;const z=de[A.__cacheKey];z!==void 0&&(de[A.__cacheKey].usedTimes--,z.usedTimes===0&&S(w)),A.__cacheKey=se,A.__webglTexture=de[se].texture}return G}function j(A,w,G){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const de=be(A,w),se=w.source;t.bindTexture(ae,A.__webglTexture,n.TEXTURE0+G);const z=i.get(se);if(se.version!==z.__version||de===!0){t.activeTexture(n.TEXTURE0+G);const X=nt.getPrimaries(nt.workingColorSpace),Q=w.colorSpace===bi?null:nt.getPrimaries(w.colorSpace),Le=w.colorSpace===bi||X===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Y=v(w.image,!1,s.maxTextureSize);Y=lt(w,Y);const xe=a.convert(w.format,w.colorSpace),me=a.convert(w.type);let Te=_(w.internalFormat,xe,me,w.colorSpace,w.isVideoTexture);fe(ae,w);let Me;const De=w.mipmaps,Re=w.isVideoTexture!==!0,qe=z.__version===void 0||de===!0,F=se.dataReady,ge=P(w,Y);if(w.isDepthTexture)Te=x(w.format===Os,w.type),qe&&(Re?t.texStorage2D(n.TEXTURE_2D,1,Te,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,Te,Y.width,Y.height,0,xe,me,null));else if(w.isDataTexture)if(De.length>0){Re&&qe&&t.texStorage2D(n.TEXTURE_2D,ge,Te,De[0].width,De[0].height);for(let H=0,ne=De.length;H<ne;H++)Me=De[H],Re?F&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,me,Me.data):t.texImage2D(n.TEXTURE_2D,H,Te,Me.width,Me.height,0,xe,me,Me.data);w.generateMipmaps=!1}else Re?(qe&&t.texStorage2D(n.TEXTURE_2D,ge,Te,Y.width,Y.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,xe,me,Y.data)):t.texImage2D(n.TEXTURE_2D,0,Te,Y.width,Y.height,0,xe,me,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Re&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Te,De[0].width,De[0].height,Y.depth);for(let H=0,ne=De.length;H<ne;H++)if(Me=De[H],w.format!==Cn)if(xe!==null)if(Re){if(F)if(w.layerUpdates.size>0){const ye=Uu(Me.width,Me.height,w.format,w.type);for(const Se of w.layerUpdates){const $e=Me.data.subarray(Se*ye/Me.data.BYTES_PER_ELEMENT,(Se+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,Se,Me.width,Me.height,1,xe,$e)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,Y.depth,xe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Te,Me.width,Me.height,Y.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,Y.depth,xe,me,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Te,Me.width,Me.height,Y.depth,0,xe,me,Me.data)}else{Re&&qe&&t.texStorage2D(n.TEXTURE_2D,ge,Te,De[0].width,De[0].height);for(let H=0,ne=De.length;H<ne;H++)Me=De[H],w.format!==Cn?xe!==null?Re?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?F&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Me.width,Me.height,xe,me,Me.data):t.texImage2D(n.TEXTURE_2D,H,Te,Me.width,Me.height,0,xe,me,Me.data)}else if(w.isDataArrayTexture)if(Re){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Te,Y.width,Y.height,Y.depth),F)if(w.layerUpdates.size>0){const H=Uu(Y.width,Y.height,w.format,w.type);for(const ne of w.layerUpdates){const ye=Y.data.subarray(ne*H/Y.data.BYTES_PER_ELEMENT,(ne+1)*H/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,Y.width,Y.height,1,xe,me,ye)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,xe,me,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,Y.width,Y.height,Y.depth,0,xe,me,Y.data);else if(w.isData3DTexture)Re?(qe&&t.texStorage3D(n.TEXTURE_3D,ge,Te,Y.width,Y.height,Y.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,xe,me,Y.data)):t.texImage3D(n.TEXTURE_3D,0,Te,Y.width,Y.height,Y.depth,0,xe,me,Y.data);else if(w.isFramebufferTexture){if(qe)if(Re)t.texStorage2D(n.TEXTURE_2D,ge,Te,Y.width,Y.height);else{let H=Y.width,ne=Y.height;for(let ye=0;ye<ge;ye++)t.texImage2D(n.TEXTURE_2D,ye,Te,H,ne,0,xe,me,null),H>>=1,ne>>=1}}else if(De.length>0){if(Re&&qe){const H=Oe(De[0]);t.texStorage2D(n.TEXTURE_2D,ge,Te,H.width,H.height)}for(let H=0,ne=De.length;H<ne;H++)Me=De[H],Re?F&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,xe,me,Me):t.texImage2D(n.TEXTURE_2D,H,Te,xe,me,Me);w.generateMipmaps=!1}else if(Re){if(qe){const H=Oe(Y);t.texStorage2D(n.TEXTURE_2D,ge,Te,H.width,H.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,me,Y)}else t.texImage2D(n.TEXTURE_2D,0,Te,xe,me,Y);p(w)&&m(ae),z.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function te(A,w,G){if(w.image.length!==6)return;const ae=be(A,w),de=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const se=i.get(de);if(de.version!==se.__version||ae===!0){t.activeTexture(n.TEXTURE0+G);const z=nt.getPrimaries(nt.workingColorSpace),X=w.colorSpace===bi?null:nt.getPrimaries(w.colorSpace),Q=w.colorSpace===bi||z===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Y=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!Le&&!Y?xe[ne]=v(w.image[ne],!0,s.maxCubemapSize):xe[ne]=Y?w.image[ne].image:w.image[ne],xe[ne]=lt(w,xe[ne]);const me=xe[0],Te=a.convert(w.format,w.colorSpace),Me=a.convert(w.type),De=_(w.internalFormat,Te,Me,w.colorSpace),Re=w.isVideoTexture!==!0,qe=se.__version===void 0||ae===!0,F=de.dataReady;let ge=P(w,me);fe(n.TEXTURE_CUBE_MAP,w);let H;if(Le){Re&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,De,me.width,me.height);for(let ne=0;ne<6;ne++){H=xe[ne].mipmaps;for(let ye=0;ye<H.length;ye++){const Se=H[ye];w.format!==Cn?Te!==null?Re?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Se.width,Se.height,Te,Me,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,De,Se.width,Se.height,0,Te,Me,Se.data)}}}else{if(H=w.mipmaps,Re&&qe){H.length>0&&ge++;const ne=Oe(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Y){Re?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Te,Me,xe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,xe[ne].width,xe[ne].height,0,Te,Me,xe[ne].data);for(let ye=0;ye<H.length;ye++){const $e=H[ye].image[ne].image;Re?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,$e.width,$e.height,Te,Me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,De,$e.width,$e.height,0,Te,Me,$e.data)}}else{Re?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,Me,xe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Te,Me,xe[ne]);for(let ye=0;ye<H.length;ye++){const Se=H[ye];Re?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Te,Me,Se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,De,Te,Me,Se.image[ne])}}}p(w)&&m(n.TEXTURE_CUBE_MAP),se.__version=de.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ve(A,w,G,ae,de,se){const z=a.convert(G.format,G.colorSpace),X=a.convert(G.type),Q=_(G.internalFormat,z,X,G.colorSpace),Le=i.get(w),Y=i.get(G);if(Y.__renderTarget=w,!Le.__hasExternalTextures){const xe=Math.max(1,w.width>>se),me=Math.max(1,w.height>>se);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,se,Q,xe,me,w.depth,0,z,X,null):t.texImage2D(de,se,Q,xe,me,0,z,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Qe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,de,Y.__webglTexture,0,Ye(w)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,de,Y.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(A,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer){const ae=w.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,se=x(w.stencilBuffer,de),z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=Ye(w);Qe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,se,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,X,se,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,A)}else{const ae=w.textures;for(let de=0;de<ae.length;de++){const se=ae[de],z=a.convert(se.format,se.colorSpace),X=a.convert(se.type),Q=_(se.internalFormat,z,X,se.colorSpace),Le=Ye(w);G&&Qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Q,w.width,w.height):Qe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(w.depthTexture);ae.__renderTarget=w,(!ae.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ie(w.depthTexture,0);const de=ae.__webglTexture,se=Ye(w);if(w.depthTexture.format===Rs)Qe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(w.depthTexture.format===Os)Qe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function He(A){const w=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){const ae=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=ae}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),pe(w.__webglDepthbuffer[ae],A,!1);else{const de=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),pe(w.__webglDepthbuffer,A,!1);else{const ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(A,w,G){const ae=i.get(A);w!==void 0&&ve(ae.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&He(A)}function Ce(A){const w=A.texture,G=i.get(A),ae=i.get(w);A.addEventListener("dispose",T);const de=A.textures,se=A.isWebGLCubeRenderTarget===!0,z=de.length>1;if(z||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,r.memory.textures++),se){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let Q=0;Q<w.mipmaps.length;Q++)G.__webglFramebuffer[X][Q]=n.createFramebuffer()}else G.__webglFramebuffer[X]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<w.mipmaps.length;X++)G.__webglFramebuffer[X]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(z)for(let X=0,Q=de.length;X<Q;X++){const Le=i.get(de[X]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&Qe(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<de.length;X++){const Q=de[X];G.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[X]);const Le=a.convert(Q.format,Q.colorSpace),Y=a.convert(Q.type),xe=_(Q.internalFormat,Le,Y,Q.colorSpace,A.isXRRenderTarget===!0),me=Ye(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,G.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),fe(n.TEXTURE_CUBE_MAP,w);for(let X=0;X<6;X++)if(w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)ve(G.__webglFramebuffer[X][Q],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q);else ve(G.__webglFramebuffer[X],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){for(let X=0,Q=de.length;X<Q;X++){const Le=de[X],Y=i.get(Le);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture),fe(n.TEXTURE_2D,Le),ve(G.__webglFramebuffer,A,Le,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,0),p(Le)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,ae.__webglTexture),fe(X,w),w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)ve(G.__webglFramebuffer[Q],A,w,n.COLOR_ATTACHMENT0,X,Q);else ve(G.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,X,0);p(w)&&m(X),t.unbindTexture()}A.depthBuffer&&He(A)}function Ve(A){const w=A.textures;for(let G=0,ae=w.length;G<ae;G++){const de=w[G];if(p(de)){const se=y(A),z=i.get(de).__webglTexture;t.bindTexture(se,z),m(se),t.unbindTexture()}}}const bt=[],N=[];function Pt(A){if(A.samples>0){if(Qe(A)===!1){const w=A.textures,G=A.width,ae=A.height;let de=n.COLOR_BUFFER_BIT;const se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=i.get(A),X=w.length>1;if(X)for(let Q=0;Q<w.length;Q++)t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let Q=0;Q<w.length;Q++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const Le=i.get(w[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,G,ae,0,0,G,ae,de,n.NEAREST),c===!0&&(bt.length=0,N.length=0,bt.push(n.COLOR_ATTACHMENT0+Q),A.depthBuffer&&A.resolveDepthBuffer===!1&&(bt.push(se),N.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let Q=0;Q<w.length;Q++){t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const Le=i.get(w[Q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ye(A){return Math.min(s.maxSamples,A.samples)}function Qe(A){const w=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(A){const w=r.render.frame;u.get(A)!==w&&(u.set(A,w),A.update())}function lt(A,w){const G=A.colorSpace,ae=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==$s&&G!==bi&&(nt.getTransfer(G)===ut?(ae!==Cn||de!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=Z,this.rebindTextures=je,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Qe}function Kv(n,e){function t(i,s=bi){let a;const r=nt.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return n.BYTE;if(i===Sd)return n.SHORT;if(i===ya)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===Ed)return n.ALPHA;if(i===Td)return n.RGB;if(i===Cn)return n.RGBA;if(i===Ad)return n.LUMINANCE;if(i===Cd)return n.LUMINANCE_ALPHA;if(i===Rs)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===Pd)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Rd)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===xr||i===_r||i===yr||i===br)if(r===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===al||i===rl||i===ol)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===ul)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ll||i===cl)return r===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ul)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===hl||i===fl||i===pl||i===ml||i===gl||i===vl||i===xl||i===_l||i===yl||i===bl||i===Ml||i===Sl||i===wl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===dl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return r===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mr||i===El||i===Tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Mr)return r===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ld||i===Al||i===Cl||i===Pl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Zv extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class it extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new en,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new St({vertexShader:Qv,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends Ws{constructor(e,t){super();const i=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const v=new tx,p=t.getContextAttributes();let m=null,y=null;const _=[],x=[],P=new he;let b=null;const T=new jt;T.viewport=new ht;const D=new jt;D.viewport=new ht;const S=[T,D],M=new Zv;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=_[j];return te===void 0&&(te=new Ro,_[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=_[j];return te===void 0&&(te=new Ro,_[j]=te),te.getGripSpace()},this.getHand=function(j){let te=_[j];return te===void 0&&(te=new Ro,_[j]=te),te.getHandSpace()};function I(j){const te=x.indexOf(j.inputSource);if(te===-1)return;const ve=_[te];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||r),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ie);for(let j=0;j<_.length;j++){const te=x[j];te!==null&&(x[j]=null,_[j].disconnect(te))}C=null,U=null,v.reset(),e.setRenderTarget(m),h=null,f=null,d=null,s=null,y=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ie),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Dn(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ve=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Os:Rs,ve=p.stencil?Fs:Ji);const Pe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Dn(f.textureWidth,f.textureHeight,{format:Cn,type:oi,depthTexture:new $d(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(j){for(let te=0;te<j.removed.length;te++){const ve=j.removed[te],pe=x.indexOf(ve);pe>=0&&(x[pe]=null,_[pe].disconnect(ve))}for(let te=0;te<j.added.length;te++){const ve=j.added[te];let pe=x.indexOf(ve);if(pe===-1){for(let He=0;He<_.length;He++)if(He>=x.length){x.push(ve),pe=He;break}else if(x[He]===null){x[He]=ve,pe=He;break}if(pe===-1)break}const Pe=_[pe];Pe&&Pe.connect(ve)}}const ee=new R,ue=new R;function Z(j,te,ve){ee.setFromMatrixPosition(te.matrixWorld),ue.setFromMatrixPosition(ve.matrixWorld);const pe=ee.distanceTo(ue),Pe=te.projectionMatrix.elements,He=ve.projectionMatrix.elements,je=Pe[14]/(Pe[10]-1),Ce=Pe[14]/(Pe[10]+1),Ve=(Pe[9]+1)/Pe[5],bt=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],Pt=(He[8]+1)/He[0],Ye=je*N,Qe=je*Pt,Be=pe/(-N+Pt),lt=Be*-N;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(Be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Oe=je+Be,A=Ce+Be,w=Ye-lt,G=Qe+(pe-lt),ae=Ve*Ce/A*Oe,de=bt*Ce/A*Oe;j.projectionMatrix.makePerspective(w,G,ae,de,Oe,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let te=j.near,ve=j.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),M.near=D.near=T.near=te,M.far=D.far=T.far=ve,(C!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,U=M.far),T.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,M.layers.mask=T.layers.mask|D.layers.mask;const pe=j.parent,Pe=M.cameras;we(M,pe);for(let He=0;He<Pe.length;He++)we(Pe[He],pe);Pe.length===2?Z(M,T,D):M.projectionMatrix.copy(T.projectionMatrix),B(j,M,pe)};function B(j,te,ve){ve===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ba*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let V=null;function fe(j,te){if(u=te.getViewerPose(l||r),g=te,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let pe=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let He=0;He<ve.length;He++){const je=ve[He];let Ce=null;if(h!==null)Ce=h.getViewport(je);else{const bt=d.getViewSubImage(f,je);Ce=bt.viewport,He===0&&(e.setRenderTargetTextures(y,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(y))}let Ve=S[He];Ve===void 0&&(Ve=new jt,Ve.layers.enable(He),Ve.viewport=new ht,S[He]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),He===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Ve)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const He=d.getDepthInformation(ve[0]);He&&He.isValid&&He.texture&&v.init(e,He,s.renderState)}}for(let ve=0;ve<_.length;ve++){const pe=x[ve],Pe=_[ve];pe!==null&&Pe!==void 0&&Pe.update(pe,te,l||r)}V&&V(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const be=new Vd;be.setAnimationLoop(fe),this.setAnimationLoop=function(j){V=j},this.dispose=function(){}}}const Ui=new In,ix=new ft;function sx(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),v(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,x=y.envMapRotation;_&&(p.envMap.value=_,Ui.copy(x),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),p.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Ui)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ax(n,e,t,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function l(y,_){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",p));const P=_.program;i.updateUBOMapping(y,P);const b=e.render.frame;a[y.id]!==b&&(f(y),a[y.id]=b)}function u(y){const _=d();y.__bindingPointIndex=_;const x=n.createBuffer(),P=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=s[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,T=x.length;b<T;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=D.length;S<M;S++){const C=D[S];if(h(C,b,S,P)===!0){const U=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let ie=0;ie<I.length;ie++){const ee=I[ie],ue=v(ee);typeof ee=="number"||typeof ee=="boolean"?(C.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,U+K,C.__data)):ee.isMatrix3?(C.__data[0]=ee.elements[0],C.__data[1]=ee.elements[1],C.__data[2]=ee.elements[2],C.__data[3]=0,C.__data[4]=ee.elements[3],C.__data[5]=ee.elements[4],C.__data[6]=ee.elements[5],C.__data[7]=0,C.__data[8]=ee.elements[6],C.__data[9]=ee.elements[7],C.__data[10]=ee.elements[8],C.__data[11]=0):(ee.toArray(C.__data,K),K+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,_,x,P){const b=y.value,T=_+"_"+x;if(P[T]===void 0)return typeof b=="number"||typeof b=="boolean"?P[T]=b:P[T]=b.clone(),!0;{const D=P[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return P[T]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(y){const _=y.uniforms;let x=0;const P=16;for(let T=0,D=_.length;T<D;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,C=S.length;M<C;M++){const U=S[M],I=Array.isArray(U.value)?U.value:[U.value];for(let K=0,ie=I.length;K<ie;K++){const ee=I[K],ue=v(ee),Z=x%P,we=Z%ue.boundary,B=Z+we;x+=we,B!==0&&P-B<ue.storage&&(x+=P-B),U.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=ue.storage}}}const b=x%P;return b>0&&(x+=P-b),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:c,update:l,dispose:m}}class rx{constructor(e={}){const{canvas:t=Yf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let P=!1,b=0,T=0,D=null,S=-1,M=null;const C=new ht,U=new ht;let I=null;const K=new ke(0);let ie=0,ee=t.width,ue=t.height,Z=1,we=null,B=null;const V=new ht(0,0,ee,ue),fe=new ht(0,0,ee,ue);let be=!1;const j=new oc;let te=!1,ve=!1;const pe=new ft,Pe=new ft,He=new R,je=new ht,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function bt(){return D===null?Z:1}let N=i;function Pt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){const O="webgl2";if(N=Pt(O,E),N===null)throw Pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ye,Qe,Be,lt,Oe,A,w,G,ae,de,se,z,X,Q,Le,Y,xe,me,Te,Me,De,Re,qe,F;function ge(){Ye=new dg(N),Ye.init(),Re=new Kv(N,Ye),Qe=new ag(N,Ye,e,Re),Be=new Xv(N,Ye),Qe.reverseDepthBuffer&&f&&Be.buffers.depth.setReversed(!0),lt=new pg(N),Oe=new Dv,A=new Yv(N,Ye,Be,Oe,Qe,Re,lt),w=new og(x),G=new ug(x),ae=new bp(N),qe=new ig(N,ae),de=new hg(N,ae,lt,qe),se=new gg(N,de,ae,lt),Te=new mg(N,Qe,A),Y=new rg(Oe),z=new Lv(x,w,G,Ye,Qe,qe,Y),X=new sx(x,Oe),Q=new Nv,Le=new Bv(Ye),me=new ng(x,w,G,Be,se,h,c),xe=new Wv(x,se,Qe),F=new ax(N,lt,Qe,Be),Me=new sg(N,Ye,lt),De=new fg(N,Ye,lt),lt.programs=z.programs,x.capabilities=Qe,x.extensions=Ye,x.properties=Oe,x.renderLists=Q,x.shadowMap=xe,x.state=Be,x.info=lt}ge();const H=new nx(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(ee,ue,!1))},this.getSize=function(E){return E.set(ee,ue)},this.setSize=function(E,O,W=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,ue=O,t.width=Math.floor(E*Z),t.height=Math.floor(O*Z),W===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ee*Z,ue*Z).floor()},this.setDrawingBufferSize=function(E,O,W){ee=E,ue=O,Z=W,t.width=Math.floor(E*W),t.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,O,W,q){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,O,W,q),Be.viewport(C.copy(V).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,O,W,q){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,O,W,q),Be.scissor(U.copy(fe).multiplyScalar(Z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(E){Be.setScissorTest(be=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E=!0,O=!0,W=!0){let q=0;if(E){let k=!1;if(D!==null){const _e=D.texture.format;k=_e===ic||_e===nc||_e===tc}if(k){const _e=D.texture.type,Ae=_e===oi||_e===Ji||_e===ya||_e===Fs||_e===Ql||_e===ec,Ne=me.getClearColor(),Ue=me.getClearAlpha(),We=Ne.r,Ke=Ne.g,Fe=Ne.b;Ae?(g[0]=We,g[1]=Ke,g[2]=Fe,g[3]=Ue,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=We,v[1]=Ke,v[2]=Fe,v[3]=Ue,N.clearBufferiv(N.COLOR,0,v))}else q|=N.COLOR_BUFFER_BIT}O&&(q|=N.DEPTH_BUFFER_BIT),W&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Q.dispose(),Le.dispose(),Oe.dispose(),w.dispose(),G.dispose(),se.dispose(),qe.dispose(),F.dispose(),z.dispose(),H.dispose(),H.removeEventListener("sessionstart",Rc),H.removeEventListener("sessionend",Lc),Pi.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=lt.autoReset,O=xe.enabled,W=xe.autoUpdate,q=xe.needsUpdate,k=xe.type;ge(),lt.autoReset=E,xe.enabled=O,xe.autoUpdate=W,xe.needsUpdate=q,xe.type=k}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const O=E.target;O.removeEventListener("dispose",$e),Mt(O)}function Mt(E){kt(E),Oe.remove(E)}function kt(E){const O=Oe.get(E).programs;O!==void 0&&(O.forEach(function(W){z.releaseProgram(W)}),E.isShaderMaterial&&z.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,q,k,_e){O===null&&(O=Ce);const Ae=k.isMesh&&k.matrixWorld.determinant()<0,Ne=qh(E,O,W,q,k);Be.setMaterial(q,Ae);let Ue=W.index,We=1;if(q.wireframe===!0){if(Ue=de.getWireframeAttribute(W),Ue===void 0)return;We=2}const Ke=W.drawRange,Fe=W.attributes.position;let st=Ke.start*We,mt=(Ke.start+Ke.count)*We;_e!==null&&(st=Math.max(st,_e.start*We),mt=Math.min(mt,(_e.start+_e.count)*We)),Ue!==null?(st=Math.max(st,0),mt=Math.min(mt,Ue.count)):Fe!=null&&(st=Math.max(st,0),mt=Math.min(mt,Fe.count));const vt=mt-st;if(vt<0||vt===1/0)return;qe.setup(k,q,Ne,W,Ue);let an,at=Me;if(Ue!==null&&(an=ae.get(Ue),at=De,at.setIndex(an)),k.isMesh)q.wireframe===!0?(Be.setLineWidth(q.wireframeLinewidth*bt()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(k.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Be.setLineWidth(ze*bt()),k.isLineSegments?at.setMode(N.LINES):k.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else k.isPoints?at.setMode(N.POINTS):k.isSprite&&at.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)at.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,Wn=k._multiDrawCounts,rt=k._multiDrawCount,Mn=Ue?ae.get(Ue).bytesPerElement:1,as=Oe.get(q).currentProgram.getUniforms();for(let un=0;un<rt;un++)as.setValue(N,"_gl_DrawID",un),at.render(ze[un]/Mn,Wn[un])}else if(k.isInstancedMesh)at.renderInstances(st,vt,k.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Wn=Math.min(W.instanceCount,ze);at.renderInstances(st,vt,Wn)}else at.render(st,vt)};function ct(E,O,W){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Ba(E,O,W),E.side=ri,E.needsUpdate=!0,Ba(E,O,W),E.side=pn):Ba(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),m=Le.get(W),m.init(O),_.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const q=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _e=k.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Ne=_e[Ae];ct(Ne,W,k),q.add(Ne)}else ct(_e,W,k),q.add(_e)}),_.pop(),m=null,q},this.compileAsync=function(E,O,W=null){const q=this.compile(E,O,W);return new Promise(k=>{function _e(){if(q.forEach(function(Ae){Oe.get(Ae).currentProgram.isReady()&&q.delete(Ae)}),q.size===0){k(E);return}setTimeout(_e,10)}Ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let bn=null;function $n(E){bn&&bn(E)}function Rc(){Pi.stop()}function Lc(){Pi.start()}const Pi=new Vd;Pi.setAnimationLoop($n),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){bn=E,H.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},H.addEventListener("sessionstart",Rc),H.addEventListener("sessionend",Lc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(O),O=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,D),m=Le.get(E,_.length),m.init(O),_.push(m),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(Pe),ve=this.localClippingEnabled,te=Y.init(this.clippingPlanes,ve),p=Q.get(E,y.length),p.init(),y.push(p),H.enabled===!0&&H.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&to(_e,O,-1/0,x.sortObjects)}to(E,O,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(we,B),Ve=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ve&&me.addToRenderList(p,E),this.info.render.frame++,te===!0&&Y.beginShadows();const W=m.state.shadowsArray;xe.render(W,E,O),te===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,k=p.transmissive;if(m.setupLights(),O.isArrayCamera){const _e=O.cameras;if(k.length>0)for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const Ue=_e[Ae];Ic(q,k,E,Ue)}Ve&&me.render(E);for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const Ue=_e[Ae];Dc(p,E,Ue,Ue.viewport)}}else k.length>0&&Ic(q,k,E,O),Ve&&me.render(E),Dc(p,E,O);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,O),qe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],te===!0&&Y.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function to(E,O,W,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){q&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const Ae=se.update(E),Ne=E.material;Ne.visible&&p.push(E,Ae,Ne,W,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const Ae=se.update(E),Ne=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),je.copy(Ae.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ne)){const Ue=Ae.groups;for(let We=0,Ke=Ue.length;We<Ke;We++){const Fe=Ue[We],st=Ne[Fe.materialIndex];st&&st.visible&&p.push(E,Ae,st,W,je.z,Fe)}}else Ne.visible&&p.push(E,Ae,Ne,W,je.z,null)}}const _e=E.children;for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++)to(_e[Ae],O,W,q)}function Dc(E,O,W,q){const k=E.opaque,_e=E.transmissive,Ae=E.transparent;m.setupLightsView(W),te===!0&&Y.setGlobalState(x.clippingPlanes,W),q&&Be.viewport(C.copy(q)),k.length>0&&za(k,O,W),_e.length>0&&za(_e,O,W),Ae.length>0&&za(Ae,O,W),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Ic(E,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Dn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?ii:oi,minFilter:$i,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=m.state.transmissionRenderTarget[q.id],Ae=q.viewport||C;_e.setSize(Ae.z,Ae.w);const Ne=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(K),ie=x.getClearAlpha(),ie<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&me.render(W);const Ue=x.toneMapping;x.toneMapping=wi;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),te===!0&&Y.setGlobalState(x.clippingPlanes,q),za(E,W,q),A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Fe=0,st=O.length;Fe<st;Fe++){const mt=O[Fe],vt=mt.object,an=mt.geometry,at=mt.material,ze=mt.group;if(at.side===pn&&vt.layers.test(q.layers)){const Wn=at.side;at.side=Kt,at.needsUpdate=!0,Nc(vt,W,q,an,at,ze),at.side=Wn,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e))}x.setRenderTarget(Ne),x.setClearColor(K,ie),We!==void 0&&(q.viewport=We),x.toneMapping=Ue}function za(E,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let k=0,_e=E.length;k<_e;k++){const Ae=E[k],Ne=Ae.object,Ue=Ae.geometry,We=q===null?Ae.material:q,Ke=Ae.group;Ne.layers.test(W.layers)&&Nc(Ne,O,W,Ue,We,Ke)}}function Nc(E,O,W,q,k,_e){E.onBeforeRender(x,O,W,q,k,_e),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,O,W,q,E,_e),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,x.renderBufferDirect(W,O,q,k,E,_e),k.side=ri,k.needsUpdate=!0,x.renderBufferDirect(W,O,q,k,E,_e),k.side=pn):x.renderBufferDirect(W,O,q,k,E,_e),E.onAfterRender(x,O,W,q,k,_e)}function Ba(E,O,W){O.isScene!==!0&&(O=Ce);const q=Oe.get(E),k=m.state.lights,_e=m.state.shadowsArray,Ae=k.state.version,Ne=z.getParameters(E,k.state,_e,O,W),Ue=z.getProgramCacheKey(Ne);let We=q.programs;q.environment=E.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",$e),We=new Map,q.programs=We);let Ke=We.get(Ue);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===Ae)return Fc(E,Ne),Ke}else Ne.uniforms=z.getUniforms(E),E.onBeforeCompile(Ne,x),Ke=z.acquireProgram(Ne,Ue),We.set(Ue,Ke),q.uniforms=Ne.uniforms;const Fe=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Y.uniform),Fc(E,Ne),q.needsLights=jh(E),q.lightsStateVersion=Ae,q.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function Uc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Sr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Fc(E,O){const W=Oe.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function qh(E,O,W,q,k){O.isScene!==!0&&(O=Ce),A.resetTextureUnits();const _e=O.fog,Ae=q.isMeshStandardMaterial?O.environment:null,Ne=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$s,Ue=(q.isMeshStandardMaterial?G:w).get(q.envMap||Ae),We=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let vt=wi;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=x.toneMapping);const an=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=an!==void 0?an.length:0,ze=Oe.get(q),Wn=m.state.lights;if(te===!0&&(ve===!0||E!==M)){const gn=E===M&&q.id===S;Y.setState(q,E,gn)}let rt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Wn.state.version||ze.outputColorSpace!==Ne||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==Ue||q.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Y.numPlanes||ze.numIntersection!==Y.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Ke||ze.morphTargets!==Fe||ze.morphNormals!==st||ze.morphColors!==mt||ze.toneMapping!==vt||ze.morphTargetsCount!==at)&&(rt=!0):(rt=!0,ze.__version=q.version);let Mn=ze.currentProgram;rt===!0&&(Mn=Ba(q,O,k));let as=!1,un=!1,Zs=!1;const xt=Mn.getUniforms(),On=ze.uniforms;if(Be.useProgram(Mn.program)&&(as=!0,un=!0,Zs=!0),q.id!==S&&(S=q.id,un=!0),as||M!==E){Be.buffers.depth.getReversed()?(pe.copy(E.projectionMatrix),Zf(pe),Jf(pe),xt.setValue(N,"projectionMatrix",pe)):xt.setValue(N,"projectionMatrix",E.projectionMatrix),xt.setValue(N,"viewMatrix",E.matrixWorldInverse);const ui=xt.map.cameraPosition;ui!==void 0&&ui.setValue(N,He.setFromMatrixPosition(E.matrixWorld)),Qe.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,un=!0,Zs=!0)}if(k.isSkinnedMesh){xt.setOptional(N,k,"bindMatrix"),xt.setOptional(N,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(N,"boneTexture",gn.boneTexture,A))}k.isBatchedMesh&&(xt.setOptional(N,k,"batchingTexture"),xt.setValue(N,"batchingTexture",k._matricesTexture,A),xt.setOptional(N,k,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",k._indirectTexture,A),xt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",k._colorsTexture,A));const Js=W.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Te.update(k,W,Mn),(un||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,xt.setValue(N,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=Ue,On.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),un&&(xt.setValue(N,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Xh(On,Zs),_e&&q.fog===!0&&X.refreshFogUniforms(On,_e),X.refreshMaterialUniforms(On,q,Z,ue,m.state.transmissionRenderTarget[E.id]),Sr.upload(N,Uc(ze),On,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Sr.upload(N,Uc(ze),On,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xt.setValue(N,"center",k.center),xt.setValue(N,"modelViewMatrix",k.modelViewMatrix),xt.setValue(N,"normalMatrix",k.normalMatrix),xt.setValue(N,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const gn=q.uniformsGroups;for(let ui=0,di=gn.length;ui<di;ui++){const Oc=gn[ui];F.update(Oc,Mn),F.bind(Oc,Mn)}}return Mn}function Xh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function jh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,O,W){Oe.get(E.texture).__webglTexture=O,Oe.get(E.depthTexture).__webglTexture=W;const q=Oe.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const W=Oe.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){D=E,b=O,T=W;let q=!0,k=null,_e=!1,Ae=!1;if(E){const Ue=Oe.get(E);if(Ue.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Ue.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ue.__hasExternalTextures)A.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&Oe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const Ke=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[O])?k=Ke[O][W]:k=Ke[O],_e=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?k=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[W]:k=Ke,C.copy(E.viewport),U.copy(E.scissor),I=E.scissorTest}else C.copy(V).multiplyScalar(Z).floor(),U.copy(fe).multiplyScalar(Z).floor(),I=be;if(Be.bindFramebuffer(N.FRAMEBUFFER,k)&&q&&Be.drawBuffers(E,k),Be.viewport(C),Be.scissor(U),Be.setScissorTest(I),_e){const Ue=Oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,W)}else if(Ae){const Ue=Oe.get(E.texture),We=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,We)}S=-1},this.readRenderTargetPixels=function(E,O,W,q,k,_e,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){Be.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const Ue=E.texture,We=Ue.format,Ke=Ue.type;if(!Qe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-q&&W>=0&&W<=E.height-k&&N.readPixels(O,W,q,k,Re.convert(We),Re.convert(Ke),_e)}finally{const Ue=D!==null?Oe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,q,k,_e,Ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){const Ue=E.texture,We=Ue.format,Ke=Ue.type;if(!Qe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-q&&W>=0&&W<=E.height-k){Be.bindFramebuffer(N.FRAMEBUFFER,Ne);const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(O,W,q,k,Re.convert(We),Re.convert(Ke),0);const st=D!==null?Oe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(N.FRAMEBUFFER,st);const mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Kf(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.deleteBuffer(Fe),N.deleteSync(mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,W=0){E.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-W),k=Math.floor(E.image.width*q),_e=Math.floor(E.image.height*q),Ae=O!==null?O.x:0,Ne=O!==null?O.y:0;A.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Ae,Ne,k,_e),Be.unbindTexture()},this.copyTextureToTexture=function(E,O,W=null,q=null,k=0){E.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],O=arguments[2],k=arguments[3]||0,W=null);let _e,Ae,Ne,Ue,We,Ke,Fe,st,mt;const vt=E.isCompressedTexture?E.mipmaps[k]:E.image;W!==null?(_e=W.max.x-W.min.x,Ae=W.max.y-W.min.y,Ne=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,We=W.min.y,Ke=W.isBox3?W.min.z:0):(_e=vt.width,Ae=vt.height,Ne=vt.depth||1,Ue=0,We=0,Ke=0),q!==null?(Fe=q.x,st=q.y,mt=q.z):(Fe=0,st=0,mt=0);const an=Re.convert(O.format),at=Re.convert(O.type);let ze;O.isData3DTexture?(A.setTexture3D(O,0),ze=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),ze=N.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),ze=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Wn=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Mn=N.getParameter(N.UNPACK_SKIP_PIXELS),as=N.getParameter(N.UNPACK_SKIP_ROWS),un=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);const Zs=E.isDataArrayTexture||E.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const On=Oe.get(E),Js=Oe.get(O),gn=Oe.get(On.__renderTarget),ui=Oe.get(Js.__renderTarget);Be.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Ne;di++)Zs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,k,Ke+di),E.isDepthTexture?(xt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.get(O).__webglTexture,k,mt+di),N.blitFramebuffer(Ue,We,_e,Ae,Fe,st,_e,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):xt?N.copyTexSubImage3D(ze,k,Fe,st,mt+di,Ue,We,_e,Ae):N.copyTexSubImage2D(ze,k,Fe,st,mt+di,Ue,We,_e,Ae);Be.bindFramebuffer(N.READ_FRAMEBUFFER,null),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(ze,k,Fe,st,mt,_e,Ae,Ne,an,at,vt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(ze,k,Fe,st,mt,_e,Ae,Ne,an,vt.data):N.texSubImage3D(ze,k,Fe,st,mt,_e,Ae,Ne,an,at,vt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Fe,st,_e,Ae,an,at,vt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Fe,st,vt.width,vt.height,an,vt.data):N.texSubImage2D(N.TEXTURE_2D,k,Fe,st,_e,Ae,an,at,vt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,as),N.pixelStorei(N.UNPACK_SKIP_IMAGES,un),k===0&&O.generateMipmaps&&N.generateMipmap(ze),Be.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W=null,q=null,k=0){return E.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,E=arguments[2],O=arguments[3],k=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,W,q,k)},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Be.unbindTexture()},this.resetState=function(){b=0,T=0,D=null,Be.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class uc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yd extends Xs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new ft,Ll=new ac,lr=new zr,cr=new R;class Kd extends Gt{constructor(e=new Nt,t=new Yd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(s),lr.radius+=a,e.ray.intersectsSphere(lr)===!1)return;Fu.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Fu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let g=f,v=h;g<v;g++){const p=l.getX(g);cr.fromBufferAttribute(d,p),Ou(cr,p,c,s,e,t,this)}}else{const f=Math.max(0,r.start),h=Math.min(d.count,r.start+r.count);for(let g=f,v=h;g<v;g++)cr.fromBufferAttribute(d,g),Ou(cr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ou(n,e,t,i,s,a,r){const o=Ll.distanceSqToPoint(n);if(o<t){const c=new R;Ll.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Cr extends en{constructor(e,t,i,s,a,r,o,c,l){super(e,t,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let r;t?r=t:r=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);const u=i[s],f=i[s+1]-u,h=(r-u)/f;return(s+h)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new he:new R);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,s=[],a=[],r=[],o=new R,c=new ft;for(let h=0;h<=e;h++){const g=h/e;s[h]=this.getTangentAt(g,new R)}a[0]=new R,r[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let h=1;h<=e;h++){if(a[h]=a[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ut(s[h-1].dot(s[h]),-1,1));a[h].applyMatrix4(c.makeRotationAxis(o,g))}r[h].crossVectors(s[h],a[h])}if(t===!0){let h=Math.acos(Ut(a[0].dot(a[e]),-1,1));h/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(h=-h);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fc extends Hn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new he){const i=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ox extends fc{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function pc(){let n=0,e=0,t=0,i=0;function s(a,r,o,c){n=a,e=o,t=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,d){let f=(r-a)/l-(o-a)/(l+u)+(o-r)/u,h=(o-r)/u-(c-r)/(u+d)+(c-o)/d;f*=u,h*=u,s(r,o,f,h)},calc:function(a){const r=a*a,o=r*a;return n+e*a+t*r+i*o}}}const ur=new R,Lo=new pc,Do=new pc,Io=new pc;class Gr extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){const i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%a]:(ur.subVectors(s[0],s[1]).add(s[0]),l=ur);const d=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(ur.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Lo.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,p),Do.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,p),Io.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Do.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Io.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Lo.calc(c),Do.calc(c),Io.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ku(n,e,t,i,s){const a=(i-e)*.5,r=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+r)*c+(-3*t+3*i-2*a-r)*o+a*n+t}function lx(n,e){const t=1-n;return t*t*e}function cx(n,e){return 2*(1-n)*n*e}function ux(n,e){return n*n*e}function pa(n,e,t,i){return lx(n,e)+cx(n,t)+ux(n,i)}function dx(n,e){const t=1-n;return t*t*t*e}function hx(n,e){const t=1-n;return 3*t*t*n*e}function fx(n,e){return 3*(1-n)*n*n*e}function px(n,e){return n*n*n*e}function ma(n,e,t,i,s){return dx(n,e)+hx(n,t)+fx(n,i)+px(n,s)}class Zd extends Hn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ma(e,s.x,a.x,r.x,o.x),ma(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mx extends Hn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){const i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ma(e,s.x,a.x,r.x,o.x),ma(e,s.y,a.y,r.y,o.y),ma(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jd extends Hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gx extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Hn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(pa(e,s.x,a.x,r.x),pa(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vx extends Hn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(pa(e,s.x,a.x,r.x),pa(e,s.y,a.y,r.y),pa(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(ku(o,c.x,l.x,u.x,d.x),ku(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var zu=Object.freeze({__proto__:null,ArcCurve:ox,CatmullRomCurve3:Gr,CubicBezierCurve:Zd,CubicBezierCurve3:mx,EllipseCurve:fc,LineCurve:Jd,LineCurve3:gx,QuadraticBezierCurve:Qd,QuadraticBezierCurve3:vx,SplineCurve:mc});class xx extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const r=s[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new zu[s.type]().fromJSON(s))}return this}}class Dl extends xx{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jd(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const a=new Qd(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){const o=new Zd(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,a,r,o,c),this}absellipse(e,t,i,s,a,r,o,c){const l=new fc(e,t,i,s,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hr extends Nt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],u=1/t,d=new R,f=new he,h=new R,g=new R,v=new R;let p=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-p,h.z=m*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-p,h.z=m*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(g)}for(let y=0;y<=t;y++){const _=i+y*u*s,x=Math.sin(_),P=Math.cos(_);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*x,d.y=e[b].y,d.z=e[b].x*P,r.push(d.x,d.y,d.z),f.x=y/t,f.y=b/(e.length-1),o.push(f.x,f.y);const T=c[3*b+0]*x,D=c[3*b+1],S=c[3*b+0]*P;l.push(T,D,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,P=x,b=x+e.length,T=x+e.length+1,D=x+1;a.push(P,b,D),a.push(T,D,b)}this.setIndex(a),this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.points,e.segments,e.phiStart,e.phiLength)}}class gc extends Hr{constructor(e=1,t=1,i=4,s=8){const a=new Dl;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new gc(e.radius,e.length,e.capSegments,e.radialSegments)}}class zs extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new R,u=new he;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=i+d/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[f]/e+1)/2,u.y=(r[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends Nt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],d=[],f=[],h=[];let g=0;const v=[],p=i/2;let m=0;y(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(h,2));function y(){const x=new R,P=new R;let b=0;const T=(t-e)/i;for(let D=0;D<=a;D++){const S=[],M=D/a,C=M*(t-e)+e;for(let U=0;U<=s;U++){const I=U/s,K=I*c+o,ie=Math.sin(K),ee=Math.cos(K);P.x=C*ie,P.y=-M*i+p,P.z=C*ee,d.push(P.x,P.y,P.z),x.set(ie,T,ee).normalize(),f.push(x.x,x.y,x.z),h.push(I,1-M),S.push(g++)}v.push(S)}for(let D=0;D<s;D++)for(let S=0;S<a;S++){const M=v[S][D],C=v[S+1][D],U=v[S+1][D+1],I=v[S][D+1];(e>0||S!==0)&&(u.push(M,C,I),b+=3),(t>0||S!==a-1)&&(u.push(C,U,I),b+=3)}l.addGroup(m,b,0),m+=b}function _(x){const P=g,b=new he,T=new R;let D=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*M,0),f.push(0,M,0),h.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const K=U/s*c+o,ie=Math.cos(K),ee=Math.sin(K);T.x=S*ee,T.y=p*M,T.z=S*ie,d.push(T.x,T.y,T.z),f.push(0,M,0),b.x=ie*.5+.5,b.y=ee*.5*M+.5,h.push(b.x,b.y),g++}for(let U=0;U<s;U++){const I=P+U,K=C+U;x===!0?u.push(K,K+1,I):u.push(K+1,K,I),D+=3}l.addGroup(m,D,x===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends pt{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Vr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends Nt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const a=[],r=[];o(s),l(i),u(),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(a.slice(),3)),this.setAttribute("uv",new tt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new R,x=new R,P=new R;for(let b=0;b<t.length;b+=3)h(t[b+0],_),h(t[b+1],x),h(t[b+2],P),c(_,x,P,y)}function c(y,_,x,P){const b=P+1,T=[];for(let D=0;D<=b;D++){T[D]=[];const S=y.clone().lerp(x,D/b),M=_.clone().lerp(x,D/b),C=b-D;for(let U=0;U<=C;U++)U===0&&D===b?T[D][U]=S:T[D][U]=S.clone().lerp(M,U/C)}for(let D=0;D<b;D++)for(let S=0;S<2*(b-D)-1;S++){const M=Math.floor(S/2);S%2===0?(f(T[D][M+1]),f(T[D+1][M]),f(T[D][M])):(f(T[D][M+1]),f(T[D+1][M+1]),f(T[D+1][M]))}}function l(y){const _=new R;for(let x=0;x<a.length;x+=3)_.x=a[x+0],_.y=a[x+1],_.z=a[x+2],_.normalize().multiplyScalar(y),a[x+0]=_.x,a[x+1]=_.y,a[x+2]=_.z}function u(){const y=new R;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];const x=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;r.push(x,1-P)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const _=r[y+0],x=r[y+2],P=r[y+4],b=Math.max(_,x,P),T=Math.min(_,x,P);b>.9&&T<.1&&(_<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),P<.2&&(r[y+4]+=1))}}function f(y){a.push(y.x,y.y,y.z)}function h(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const y=new R,_=new R,x=new R,P=new R,b=new he,T=new he,D=new he;for(let S=0,M=0;S<a.length;S+=9,M+=6){y.set(a[S+0],a[S+1],a[S+2]),_.set(a[S+3],a[S+4],a[S+5]),x.set(a[S+6],a[S+7],a[S+8]),b.set(r[M+0],r[M+1]),T.set(r[M+2],r[M+3]),D.set(r[M+4],r[M+5]),P.copy(y).add(_).add(x).divideScalar(3);const C=p(P);v(b,M+0,y,C),v(T,M+2,_,C),v(D,M+4,x,C)}}function v(y,_,x,P){P<0&&y.x===1&&(r[_]=y.x-1),x.x===0&&x.z===0&&(r[_]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.vertices,e.indices,e.radius,e.details)}}class xc extends Dl{constructor(e){super(e),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Dl().fromJSON(s))}return this}}const _x={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let a=eh(n,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,u,d,f,h;if(i&&(a=wx(n,e,a,t)),n.length>80*t){o=l=n[0],c=u=n[1];for(let g=t;g<s;g+=t)d=n[g],f=n[g+1],d<o&&(o=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);h=Math.max(l-o,u-c),h=h!==0?32767/h:0}return Sa(a,r,t,o,c,h,0),r}};function eh(n,e,t,i,s){let a,r;if(s===Ux(n,e,t,i)>0)for(a=e;a<t;a+=i)r=Bu(a,n[a],n[a+1],r);else for(a=t-i;a>=e;a-=i)r=Bu(a,n[a],n[a+1],r);return r&&$r(r,r.next)&&(Ea(r),r=r.next),r}function Qi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($r(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Ea(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sa(n,e,t,i,s,a,r){if(!n)return;!r&&a&&Px(n,i,s,a);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,a?bx(n,i,s,a):yx(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Ea(n),n=l.next,o=l.next;continue}if(n=l,n===o){r?r===1?(n=Mx(Qi(n),e,t),Sa(n,e,t,i,s,a,2)):r===2&&Sx(n,e,t,i,s,a):Sa(Qi(n),e,t,i,s,a,1);break}}}function yx(n){const e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;const s=e.x,a=t.x,r=i.x,o=e.y,c=t.y,l=i.y,u=s<a?s<r?s:r:a<r?a:r,d=o<c?o<l?o:l:c<l?c:l,f=s>a?s>r?s:r:a>r?a:r,h=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&Ts(s,o,a,c,r,l,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bx(n,e,t,i){const s=n.prev,a=n,r=n.next;if(Tt(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,u=s.y,d=a.y,f=r.y,h=o<c?o<l?o:l:c<l?c:l,g=u<d?u<f?u:f:d<f?d:f,v=o>c?o>l?o:l:c>l?c:l,p=u>d?u>f?u:f:d>f?d:f,m=Il(h,g,e,t,i),y=Il(v,p,e,t,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=m&&x&&x.z<=y;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==r&&Ts(o,u,c,d,l,f,_.x,_.y)&&Tt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=h&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ts(o,u,c,d,l,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==r&&Ts(o,u,c,d,l,f,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=h&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ts(o,u,c,d,l,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Mx(n,e,t){let i=n;do{const s=i.prev,a=i.next.next;!$r(s,a)&&th(s,i,i.next,a)&&wa(s,a)&&wa(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Ea(i),Ea(i.next),i=n=a),i=i.next}while(i!==n);return Qi(i)}function Sx(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Dx(r,o)){let c=nh(r,o);r=Qi(r,r.next),c=Qi(c,c.next),Sa(r,e,t,i,s,a,0),Sa(c,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function wx(n,e,t,i){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*i,c=a<r-1?e[a+1]*i:n.length,l=eh(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Lx(l));for(s.sort(Ex),a=0;a<s.length;a++)t=Tx(s[a],t);return t}function Ex(n,e){return n.x-e.x}function Tx(n,e){const t=Ax(n,e);if(!t)return e;const i=nh(t,n);return Qi(i,i.next),Qi(t,t.next)}function Ax(n,e){let t=e,i=-1/0,s;const a=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=a&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,d;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&Ts(r<l?a:i,r,c,l,r<l?i:a,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(a-t.x),wa(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Cx(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function Cx(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function Px(n,e,t,i){let s=n;do s.z===0&&(s.z=Il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rx(s)}function Rx(n){let e,t,i,s,a,r,o,c,l=1;do{for(t=n,n=null,a=null,r=0;t;){for(r++,i=t,o=0,e=0;e<l&&(o++,i=i.nextZ,!!i);e++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;t=i}a.nextZ=null,l*=2}while(r>1);return n}function Il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ts(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function Dx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ix(n,e)&&(wa(n,e)&&wa(e,n)&&Nx(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||$r(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $r(n,e){return n.x===e.x&&n.y===e.y}function th(n,e,t,i){const s=hr(Tt(n,e,t)),a=hr(Tt(n,e,i)),r=hr(Tt(t,i,n)),o=hr(Tt(t,i,e));return!!(s!==a&&r!==o||s===0&&dr(n,t,e)||a===0&&dr(n,i,e)||r===0&&dr(t,n,i)||o===0&&dr(t,e,i))}function dr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function hr(n){return n>0?1:n<0?-1:0}function Ix(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&th(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wa(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function Nx(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function nh(n,e){const t=new Nl(n.i,n.x,n.y),i=new Nl(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Bu(n,e,t,i){const s=new Nl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ea(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}class ga{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return ga.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];Gu(e),Hu(i,e);let r=e.length;t.forEach(Gu);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Hu(i,t[c]);const o=_x.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Gu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Hu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Bs extends vc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bs(e.radius,e.detail)}}class _c extends Nt{constructor(e=.5,t=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,h=new R,g=new he;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){const m=a+p/i*r;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){const p=v*(i+1);for(let m=0;m<i;m++){const y=m+p,_=y,x=y+i+1,P=y+i+2,b=y+1;o.push(_,x,b),o.push(x,P,b)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wr extends Nt{constructor(e=new xc([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],a=[],r=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(r,2));function l(u){const d=s.length/3,f=u.extractPoints(t);let h=f.shape;const g=f.holes;ga.isClockWise(h)===!1&&(h=h.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];ga.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=ga.triangulateShape(h,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];h=h.concat(y)}for(let p=0,m=h.length;p<m;p++){const y=h[p];s.push(y.x,y.y,0),a.push(0,0,1),r.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],_=y[0]+d,x=y[1]+d,P=y[2]+d;i.push(_,x,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Fx(t,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const r=t[e.shapes[s]];i.push(r)}return new Wr(i,e.curveSegments)}}function Fx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Et extends Nt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const u=[],d=new R,f=new R,h=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const y=[],_=m/i;let x=0;m===0&&r===0?x=.5/t:m===i&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const b=P/t;d.x=-e*Math.cos(s+b*a)*Math.sin(r+_*o),d.y=e*Math.cos(r+_*o),d.z=e*Math.sin(s+b*a)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(b+x,1-_),y.push(l++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const _=u[m][y+1],x=u[m][y],P=u[m+1][y],b=u[m+1][y+1];(m!==0||r>0)&&h.push(_,x,b),(m!==i-1||c<Math.PI)&&h.push(x,P,b)}this.setIndex(h),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rn extends Nt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const r=[],o=[],c=[],l=[],u=new R,d=new R,f=new R;for(let h=0;h<=i;h++)for(let g=0;g<=s;g++){const v=g/s*a,p=h/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=s;g++){const v=(s+1)*h+g-1,p=(s+1)*(h-1)+g-1,m=(s+1)*(h-1)+g,y=(s+1)*h+g;r.push(v,p,y),r.push(p,m,y)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ox extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Xt extends Xs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ul extends Xt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ih extends yc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const No=new ft,Vu=new R,$u=new R;class sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wu=new ft,ia=new R,Uo=new R;class kx extends sh{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(ia),Uo.copy(i.position),Uo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uo),i.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),Wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}}class Ta extends yc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zx extends sh{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new zx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qu(){return performance.now()}const Xu=new ft;class Bx{constructor(e,t,i=0,s=1/0){this.ray=new ac(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,t=!0,i=[]){return Fl(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)Fl(e[s],this,i,t);return i.sort(ju),i}}function ju(n,e){return n.distance-e.distance}function Fl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const a=n.children;for(let r=0,o=a.length;r<o;r++)Fl(a[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);const oh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gx=new lc(-1,1,1,-1,0,1);class Hx extends Nt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const Vx=new Hx;class bc{constructor(e){this._mesh=new Xe(Vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $x extends Ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ma.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yu extends Ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Wx extends Ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $x(oh),this.copyPass.material.blending=ni,this.clock=new rh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Yu!==void 0&&(r instanceof Yu?i=!0:r instanceof Wx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xx extends Ys{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const jx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends Ys{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(a,r,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Dn(a,r,{type:ii});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new Dn(a,r,{type:ii});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),r=Math.round(r/2)}const o=jx;this.highPassUniforms=Ma.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new he(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=oh;this.copyUniforms=Ma.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new Pn,this.fsQuad=new bc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new he(1,0);Gs.BlurDirectionY=new he(0,1);const Yx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Kx extends Ys{constructor(){super();const e=Yx;this.uniforms=Ma.clone(e.uniforms),this.material=new Ox({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_d?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const fn={uKeyDirV:{value:new R(.4,.8,.5).normalize()},uKeyColor:{value:new ke(1,.95,.92)},uSky:{value:new ke("#7c78ff")},uGround:{value:new ke("#241c44")},uRim:{value:new ke("#5fe6ff")},uTime:{value:0},uDim:{value:1}},lh=new R(.45,.85,.55).normalize();function ch(n){lh.copy(n).normalize()}function uh(n,e){fn.uKeyDirV.value.copy(lh).transformDirection(n.matrixWorldInverse),fn.uTime.value=e}const is=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){float f=0.0;float a=0.5;for(int i=0;i<4;i++){f+=a*snoise(p);p*=2.03;a*=0.5;}return f;}
vec3 hash3(vec3 p){p=vec3(dot(p,vec3(127.1,311.7,74.7)),dot(p,vec3(269.5,183.3,246.1)),dot(p,vec3(113.5,271.9,124.6)));return fract(sin(p)*43758.5453123);}
// Voronoi: x=F1, y=F2, z=id
vec3 voronoi(vec3 x){
  vec3 p=floor(x);vec3 f=fract(x);float f1=8.0;float f2=8.0;float id=0.0;
  for(int k=-1;k<=1;k++)for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){
    vec3 b=vec3(float(i),float(j),float(k));vec3 h=hash3(p+b);vec3 r=b-f+h;float d=dot(r,r);
    if(d<f1){f2=f1;f1=d;id=h.x;}else if(d<f2){f2=d;}
  }
  return vec3(sqrt(f1),sqrt(f2),id);
}
`,dh=`
uniform vec3 uKeyDirV; uniform vec3 uKeyColor; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uRim;
uniform float uTime; uniform float uDim;
`,Zx=`
attribute vec3 aRest;
uniform float uShell;
varying vec3 vN; varying vec3 vRest; varying vec3 vViewPos; varying vec3 vWorldN;
void main(){
  vec3 p = position + normal * uShell;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vViewPos = mv.xyz;
  vN = normalize(normalMatrix * normal);
  vWorldN = normalize(mat3(modelMatrix) * normal);
  vRest = aRest;
  gl_Position = projectionMatrix * mv;
}
`,Jx=`
${dh}
uniform vec3 uColor1; uniform vec3 uColor2; uniform vec3 uGlow;
uniform int uMat; uniform int uPattern; uniform float uSeed; uniform float uOpacity;
uniform float uShell; uniform float uShellMax; uniform float uHurt; uniform float uGlowBoost; uniform float uSad;
uniform float uPatScale;
varying vec3 vN; varying vec3 vRest; varying vec3 vViewPos; varying vec3 vWorldN;
${is}

vec3 hueShift(vec3 c, float a){
  const vec3 k = vec3(0.57735);
  float ca = cos(a);
  return c * ca + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - ca);
}

void main(){
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(-vViewPos);
  vec3 P = vRest * uPatScale + vec3(uSeed);
  float ndv = max(dot(n, v), 0.0);
  float fres = pow(1.0 - ndv, 3.0);

  // ----- Patrón -----
  float pat = 0.0;
  float glowMask = 0.0;
  if (uPattern == 1) { // manchas
    vec3 vo = voronoi(P * 2.6);
    pat = 1.0 - smoothstep(0.22, 0.30, vo.x + 0.08 * snoise(P * 6.0));
    pat *= step(0.25, vo.z);
  } else if (uPattern == 2) { // rayas
    float s = sin(P.z * 9.0 + snoise(P * 1.6) * 2.2);
    pat = smoothstep(0.25, 0.45, s);
  } else if (uPattern == 3) { // degradado dorso-vientre
    pat = smoothstep(-0.25, 0.6, vWorldN.y * 0.6 + snoise(P * 1.2) * 0.25 + 0.15);
  } else if (uPattern == 4) { // iridiscente
    pat = 0.5 + 0.5 * sin(ndv * 6.0 + snoise(P * 1.5) * 2.0 + uTime * 0.3);
  } else if (uPattern == 5) { // ocelos
    vec3 vo = voronoi(P * 2.0);
    float d = vo.x;
    pat = smoothstep(0.32, 0.26, d) - smoothstep(0.18, 0.12, d);
    glowMask = smoothstep(0.12, 0.05, d) * step(0.35, vo.z);
    pat *= step(0.35, vo.z);
  }
  vec3 base = mix(uColor1, uColor2, pat);
  if (uPattern == 4) base = mix(base, hueShift(base, fres * 2.5 + 0.6), 0.55);
  base = mix(base, uGlow, glowMask * 0.85);
  // Vientre más claro para lectura de volumen.
  base = mix(base, base * 1.25 + 0.05, smoothstep(0.2, -0.8, vWorldN.y) * 0.35);

  // ----- Material -----
  float wrap = 0.45; float specK = 0.35; float shin = 28.0; float rimK = 0.55;
  vec3 emissive = vec3(0.0); float alpha = uOpacity;
  vec3 nn = n;
  if (uMat == 1) { // escamas
    vec3 vo = voronoi(P * 9.0);
    float edge = smoothstep(0.0, 0.12, vo.y - vo.x);
    base *= 0.72 + 0.28 * edge;
    base *= 0.92 + 0.16 * vo.z;
    specK = 0.5 * edge; shin = 48.0;
  } else if (uMat == 2) { // quitina
    float band = fract(P.z * 3.2 + snoise(P * 0.8) * 0.3);
    float seam = smoothstep(0.0, 0.08, band) * smoothstep(1.0, 0.9, band);
    base *= 0.6 + 0.4 * seam;
    base = mix(base, hueShift(base, 0.8), fres * 0.6);
    specK = 0.9; shin = 90.0; wrap = 0.2;
  } else if (uMat == 3) { // pelaje
    float fib = snoise(P * 38.0) * 0.5 + 0.5;
    float clump = snoise(P * 7.0) * 0.5 + 0.5;
    base *= 0.72 + 0.3 * mix(fib, clump, 0.5);
    if (uShellMax > 0.0) {
      float h = uShell / uShellMax;
      if (fib * 0.75 + clump * 0.35 < h * 1.05) discard;
      base *= 0.65 + 0.45 * h;
    }
    specK = 0.05; wrap = 0.7; rimK = 0.9;
  } else if (uMat == 4) { // membrana translúcida
    float vein = 1.0 - abs(snoise(P * 4.0));
    vein = smoothstep(0.85, 0.98, vein);
    base = mix(base, uColor2 * 1.2, vein * 0.6);
    emissive += uGlow * vein * 0.25;
    alpha = uOpacity * mix(0.55, 0.95, fres);
    wrap = 0.8; specK = 0.6; shin = 60.0; rimK = 1.1;
  } else if (uMat == 5) { // gelatinoso
    vec3 vo = voronoi(P * 5.0 + vec3(0.0, uTime * 0.05, 0.0));
    float bub = smoothstep(0.16, 0.08, vo.x) * step(0.6, vo.z);
    base = mix(base, base * 1.6 + 0.1, bub);
    alpha = uOpacity * mix(0.62, 0.96, fres);
    specK = 1.1; shin = 140.0; wrap = 0.9; rimK = 1.2;
    emissive += base * 0.12;
  } else if (uMat == 6) { // bioluminiscente
    float lines = 1.0 - abs(snoise(P * 3.0 + vec3(0.0, 0.0, uTime * 0.08)));
    lines = smoothstep(0.88, 0.99, lines);
    float pulse = 0.65 + 0.35 * sin(uTime * 2.0 + P.z * 2.0);
    base *= 0.6;
    emissive += uGlow * (lines * 1.6 + pat * 0.5 + glowMask) * pulse;
    specK = 0.5; shin = 50.0;
  } else if (uMat == 7) { // metálico orgánico
    float ham = snoise(P * 12.0) * 0.5 + 0.5;
    vec3 r = reflect(-v, n);
    float env = r.y * 0.5 + 0.5;
    vec3 envC = mix(uGround * 1.4, uSky * 1.3, env) + vec3(smoothstep(0.62, 0.7, env) * 0.6);
    base = mix(base * 0.55, envC * (base + 0.25), 0.55) * (0.9 + 0.2 * ham);
    specK = 1.3; shin = 70.0; wrap = 0.15; rimK = 0.8;
  } else { // piel lisa
    float pores = snoise(P * 20.0) * 0.03;
    base *= 1.0 + pores;
    specK = 0.4; shin = 30.0;
  }

  // ----- Iluminación estilizada -----
  vec3 L = normalize(uKeyDirV);
  float ndl = dot(nn, L);
  float diff = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
  diff = smoothstep(0.0, 1.0, diff);
  vec3 hemi = mix(uGround, uSky, vWorldN.y * 0.5 + 0.5);
  vec3 h = normalize(L + v);
  float spec = pow(max(dot(nn, h), 0.0), shin) * specK;
  // Dispersión subsuperficial falsa: luz que atraviesa los bordes.
  float sss = pow(clamp(dot(v, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0) * fres;
  vec3 col = base * (diff * uKeyColor * 0.95 + hemi * 0.5);
  col += base * sss * 0.6;
  col += spec * mix(vec3(1.0), uKeyColor, 0.5);
  col += uRim * fres * rimK * 0.55;
  col += emissive * uGlowBoost;
  col *= uDim;
  float g = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(g) * 0.9, uSad * 0.45);
  col = mix(col, vec3(1.0, 0.95, 0.95), uHurt);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function sa(n){const e=n.mat===4||n.mat===5||(n.opacity??1)<1;return new St({uniforms:{...fn,uColor1:{value:n.color1.clone()},uColor2:{value:n.color2.clone()},uGlow:{value:n.glow.clone()},uMat:{value:n.mat},uPattern:{value:n.pattern},uSeed:{value:n.seed%1e3*.37},uOpacity:{value:n.opacity??1},uShell:{value:0},uShellMax:{value:0},uHurt:{value:0},uGlowBoost:{value:1},uSad:{value:0},uPatScale:{value:n.patScale??1}},vertexShader:Zx,fragmentShader:Jx,transparent:e,depthWrite:!e||n.mat===5,side:ri})}function Qx(n,e,t){const i=n.clone();for(const s of Object.keys(n.uniforms))i.uniforms[s]=n.uniforms[s];return i.uniforms.uShell={value:e},i.uniforms.uShellMax={value:t},i}const e_=`
varying vec3 vLocal; varying vec3 vN; varying vec3 vViewPos;
void main(){
  vLocal = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vViewPos = mv.xyz;
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}
`,t_=`
${dh}
uniform vec3 uIris; uniform vec3 uIris2; uniform int uType; uniform float uLook; uniform float uHurt; uniform float uSleep;
varying vec3 vLocal; varying vec3 vN; varying vec3 vViewPos;
${is}
void main(){
  vec3 n = normalize(vN);
  vec3 v = normalize(-vViewPos);
  float z = vLocal.z;
  float ang = acos(clamp(z, -1.0, 1.0)) / 1.5708; // 0 centro .. 1 borde lateral
  vec2 dir = normalize(vLocal.xy + 1e-5);
  float a = atan(vLocal.y, vLocal.x);
  vec3 sclera = vec3(0.96, 0.95, 1.0);
  vec3 col = sclera;
  float irisR = 0.62;
  vec3 emiss = vec3(0.0);
  if (uType == 2) { // compuesto
    vec3 vo = voronoi(vLocal * 9.0);
    float edge = smoothstep(0.0, 0.08, vo.y - vo.x);
    col = mix(uIris * 0.25, uIris * (0.6 + 0.6 * vo.z), edge);
    emiss = uIris2 * 0.25 * edge;
  } else if (uType == 4) { // luminoso
    float r = ang / irisR;
    col = mix(uIris2 * 1.6 + 0.2, uIris * 1.1, smoothstep(0.0, 1.0, r));
    col = mix(col, sclera * 0.4 + uIris * 0.5, smoothstep(0.95, 1.05, r));
    emiss = col * 0.9 * (1.0 - smoothstep(0.6, 1.1, r));
  } else {
    float r = ang / irisR;
    float fib = snoise(vec3(a * 6.0, r * 4.0, 1.7)) * 0.15;
    vec3 iris = mix(uIris2, uIris, smoothstep(0.1, 0.95, r + fib));
    iris *= 0.75 + 0.35 * (1.0 - r);
    if (uType == 5) {
      float sp = sin(a * 3.0 + r * 14.0 - uTime * 2.5);
      iris = mix(iris, uIris2 * 1.4, smoothstep(0.2, 0.8, sp) * 0.7);
    }
    float limbal = smoothstep(0.86, 1.0, r);
    iris = mix(iris, iris * 0.25, limbal);
    col = r < 1.0 ? iris : sclera * (1.0 - 0.25 * smoothstep(1.0, 1.6, r));
    // Pupila
    float pupil;
    if (uType == 1) {
      pupil = 1.0 - smoothstep(0.08, 0.12, abs(vLocal.x) / max(0.2, 1.0 - abs(vLocal.y) * 1.3)) ;
      pupil *= step(ang, irisR * 0.92);
    } else if (uType == 5) {
      pupil = 1.0 - smoothstep(0.16, 0.2, r);
    } else {
      pupil = 1.0 - smoothstep(0.38, 0.43, r);
    }
    col = mix(col, vec3(0.02, 0.01, 0.05), pupil);
  }
  vec3 L = normalize(uKeyDirV);
  float diff = clamp(dot(n, L) * 0.5 + 0.6, 0.0, 1.0);
  col *= diff;
  // Brillos pintados: dan vida a la mirada.
  float hl = pow(max(dot(n, normalize(vec3(-0.35, 0.45, 1.0))), 0.0), 90.0);
  float hl2 = pow(max(dot(n, normalize(vec3(0.3, -0.25, 1.0))), 0.0), 300.0);
  col += vec3(1.0) * (hl * 1.2 + hl2 * 0.6);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  col += uRim * fres * 0.25;
  col += emiss;
  col *= uDim;
  col = mix(col, vec3(1.0, 0.9, 0.9), uHurt);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function n_(n,e,t){return new St({uniforms:{...fn,uIris:{value:n.clone()},uIris2:{value:e.clone()},uType:{value:t},uLook:{value:0},uHurt:{value:0},uSleep:{value:0}},vertexShader:e_,fragmentShader:t_})}function qi(n,e=1.6,t=1){return new St({uniforms:{...fn,uColor:{value:n.clone()},uInt:{value:e},uOpacity:{value:t},uGlowBoost:{value:1}},vertexShader:`
      varying vec3 vN; varying vec3 vViewPos;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vViewPos = mv.xyz; vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*mv; }`,fragmentShader:`
      uniform vec3 uColor; uniform float uInt; uniform float uOpacity; uniform float uTime; uniform float uGlowBoost; uniform float uDim;
      varying vec3 vN; varying vec3 vViewPos;
      void main(){
        vec3 n = normalize(vN); vec3 v = normalize(-vViewPos);
        float ndv = max(dot(n,v),0.0);
        float pulse = 0.85 + 0.15 * sin(uTime * 2.4);
        vec3 c = mix(uColor, vec3(1.0), pow(ndv, 4.0) * 0.6) * uInt * pulse * uGlowBoost;
        gl_FragColor = vec4(c * mix(0.6, 1.0, uDim), uOpacity * mix(0.55, 1.0, ndv));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:t<1,depthWrite:t>=1})}function xi(n,e,t){return new ke().setHSL((n%1+1)%1,Ht.clamp(e,0,1),Ht.clamp(t,0,1))}class i_{constructor(e,t){le(this,"renderer");le(this,"composer",null);le(this,"bloom",null);le(this,"renderPass",null);le(this,"view",null);le(this,"quality");le(this,"clock",new rh);le(this,"time",0);le(this,"hooks",new Set);le(this,"canvas");le(this,"fps",60);this.canvas=e,this.quality=t,this.renderer=new rx({canvas:e,antialias:t==="alta",powerPreference:"high-performance",alpha:!1}),this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=Zl,this.renderer.toneMappingExposure=1.05,this.setQuality(t),window.addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.setAnimationLoop(()=>this.frame())}setQuality(e){this.quality=e;const t=Math.min(window.devicePixelRatio||1,e==="alta"?2:1.25);if(this.renderer.setPixelRatio(t),e==="alta"){const i=this.renderer.getSize(new he);this.composer=new qx(this.renderer),this.composer.setPixelRatio(t),this.renderPass=new Xx(new hc,new jt),this.composer.addPass(this.renderPass),this.bloom=new Gs(new he(i.x/2,i.y/2),.5,.5,.86),this.composer.addPass(this.bloom),this.composer.addPass(new Kx)}else this.composer?.dispose(),this.composer=null,this.bloom=null;this.resize()}setResolution(e){this.renderer.setPixelRatio(Math.max(.6,e)),this.resize()}setView(e){this.view=e,this.resize()}onFrame(e){return this.hooks.add(e),()=>this.hooks.delete(e)}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.composer?.setSize(e,t),this.view&&(this.view.camera.aspect=e/t,this.view.camera.fov=e<t?46:36,this.view.camera.updateProjectionMatrix(),this.view.resize?.(e,t))}frame(){const e=Math.min(.1,this.clock.getDelta());this.time+=e,this.fps=this.fps*.95+1/Math.max(e,.001)*.05,this.hooks.forEach(i=>i(e));const t=this.view;t&&(t.update(e,this.time),t.camera.updateMatrixWorld(),uh(t.camera,this.time),this.composer&&this.renderPass?(this.renderPass.scene=t.scene,this.renderPass.camera=t.camera,this.composer.render(e)):this.renderer.render(t.scene,t.camera))}pick(e,t,i){if(!this.view)return null;const s=this.canvas.getBoundingClientRect(),a=new he((e-s.left)/s.width*2-1,-((t-s.top)/s.height)*2+1),r=new Bx;return r.setFromCamera(a,this.view.camera),r.intersectObjects(i,!0)[0]??null}project(e){const t=e.clone().project(this.view.camera),i=this.canvas.getBoundingClientRect();return{x:i.left+(t.x+1)/2*i.width,y:i.top+(1-t.y)/2*i.height}}get elapsed(){return this.time}}const Nn=[{key:"body",max:5,label:"Cuerpo"},{key:"head",max:5,label:"Cabeza"},{key:"eyes",max:5,label:"Ojos"},{key:"eyeCount",max:5,label:"Cantidad de ojos"},{key:"mouth",max:5,label:"Boca"},{key:"limbs",max:5,label:"Extremidades"},{key:"legPairs",max:3,label:"Pares de patas"},{key:"wings",max:5,label:"Alas / Aletas"},{key:"tail",max:5,label:"Cola"},{key:"horns",max:5,label:"Cuernos / Antenas"},{key:"spines",max:5,label:"Espinas / Placas"},{key:"material",max:7,label:"Material"},{key:"pattern",max:5,label:"Patrón"},{key:"hue1",max:255,label:"Tono principal"},{key:"hue2",max:255,label:"Tono secundario"},{key:"hueGlow",max:255,label:"Tono de brillo"},{key:"sat",max:255,label:"Saturación"},{key:"light",max:255,label:"Luminosidad"},{key:"size",max:255,label:"Tamaño"},{key:"length",max:255,label:"Largo"},{key:"girth",max:255,label:"Grosor"},{key:"headSize",max:255,label:"Tamaño de cabeza"},{key:"limbLength",max:255,label:"Largo de extremidades"},{key:"neck",max:255,label:"Cuello"},{key:"temper",max:5,label:"Temperamento"}],s_=24,hh=Object.fromEntries(Nn.map(n=>[n.key,n.max])),rn={body:["Bípedo","Cuadrúpedo","Serpentino","Medusa","Caparazón","Artrópodo"],head:["Redondeada","Hocico largo","Pico","Anfibia","Acorazada","Alargada"],eyes:["Redondos","Rasgados","Compuestos","En tallos","Luminosos","Espiral"],mouth:["Sonrisa","Colmillos","Pico","Mandíbulas","Ventosa","Trompa"],limbs:["Patas ágiles","Patas robustas","Tentáculos","Articuladas","Garras","Aletas"],wings:["Ninguna","Membrana","Insecto","Abanico","Aletas","Orejas-ala"],tail:["Ninguna","Látigo","Reptil","Bulbo luminoso","Plumero","Aguijón"],horns:["Ninguno","Antenas","Cuernos curvos","Astas","Cuerno nasal","Cresta"],spines:["Ninguna","Púas","Placas","Cristales","Vela dorsal","Protuberancias"],material:["Piel lisa","Escamas","Quitina","Pelaje","Membrana translúcida","Gelatinoso","Bioluminiscente","Metálico orgánico"],pattern:["Liso","Manchas","Rayas","Degradado","Iridiscente","Ocelos"],temper:["Juguetón","Tímido","Gruñón","Curioso","Sereno","Valiente"]},wr=["Nacimiento","Crecimiento","Madurez"];class Gn{constructor(e){le(this,"s");this.s=e>>>0||2654435769}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(this.next()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}}function Hs(){return Math.random()*4294967296>>>0}function a_(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const At=(n,e,t)=>n<e?e:n>t?t:n,ai=[{id:0,name:"Juguetón",emoji:"🎈",desc:"Inquieto y alegre: da saltitos y adora las caricias, pero se aburre rápido. +6% Velocidad.",stats:{vel:1.06},petMul:1.4,boredMul:1.25,anim:{wander:1.8,look:1.3,bounce:1,squint:0,tilt:.1,pace:1.15},lines:["¡salta de alegría!","quiere jugar más","da vueltas de felicidad"]},{id:1,name:"Tímido",emoji:"🫣",desc:"Desvía la mirada y le cuesta confiar, pero su vínculo crece más con cada caricia. +8% Adaptación.",stats:{ada:1.08},petMul:.8,boredMul:.9,anim:{wander:.6,look:-.6,bounce:0,squint:.15,tilt:.05,pace:.9},lines:["se esconde un poquito… pero le gustó","te mira de reojo","se sonroja"]},{id:2,name:"Gruñón",emoji:"😤",desc:"Frunce el ceño y finge que no le gustan los mimos. Golpea más fuerte. +8% Fuerza.",stats:{fue:1.08,int:.97},petMul:.75,boredMul:.8,anim:{wander:.8,look:.7,bounce:0,squint:.35,tilt:0,pace:.85},lines:["gruñe… pero no se aparta","hace como que no le importa","resopla, satisfecho/a"]},{id:3,name:"Curioso",emoji:"🔍",desc:"Todo le llama la atención: mira a su alrededor e inclina la cabeza. +6% Inteligencia.",stats:{int:1.06},petMul:1.1,boredMul:1.1,anim:{wander:1.3,look:1.8,bounce:0,squint:0,tilt:.28,pace:1},lines:["te observa con interés","inclina la cabeza","olfatea tu mano"]},{id:4,name:"Sereno",emoji:"🍃",desc:"Tranquilo y paciente: se mueve despacio y casi nunca se aburre. +6% Resistencia.",stats:{res:1.06},petMul:1,boredMul:.65,anim:{wander:.5,look:.6,bounce:0,squint:.12,tilt:.04,pace:.7},lines:["cierra los ojos, en paz","respira hondo","se relaja por completo"]},{id:5,name:"Valiente",emoji:"🦁",desc:"Pecho afuera y mirada firme. Le encantan los combates. +4% Fuerza y Resistencia.",stats:{fue:1.04,res:1.04},petMul:1,boredMul:1,anim:{wander:1,look:.9,bounce:.3,squint:.05,tilt:0,pace:1.05},lines:["se pone orgulloso/a","hace una pose heroica","asiente con decisión"]}],Xi=n=>ai[(n.temper??0)%ai.length];function Mc(n){let e=7;for(const t of["body","head","eyes","mouth","hue1","hue2","size","neck"])e=e*31+(Number(n[t])||0)>>>0;return e%ai.length}function es(n){const e={};for(const i of Nn)i.key!=="temper"&&(e[i.key]=n.int(0,i.max));for(const i of["size","length","girth","headSize","limbLength","neck"])e[i]=Math.round(n.range(60,200));e.sat=Math.round(n.range(120,245)),e.light=Math.round(n.range(90,190));const t=n.next();return e.eyeCount=t<.6?1:t<.72?0:n.int(2,5),e.body===1&&n.chance(.6)&&(e.legPairs=1),e.body===0&&(e.legPairs=n.chance(.7)?0:1),n.chance(.35)&&(e.wings=0),n.chance(.2)&&(e.horns=0),e.temper=Mc(e),e}function r_(){return{body:1,head:0,eyes:0,eyeCount:1,mouth:0,limbs:0,legPairs:1,wings:5,tail:1,horns:1,spines:1,material:0,pattern:1,hue1:22,hue2:200,hueGlow:140,sat:200,light:150,size:128,length:128,girth:128,headSize:140,limbLength:120,neck:120,temper:0}}function Fo(n){return{...n}}function o_(n){const e={};for(const t of Nn){const i=Number(n[t.key]);e[t.key]=Number.isFinite(i)&&n[t.key]!==void 0?At(Math.round(i),0,t.max):0}return(n.temper===void 0||n.temper===null)&&(e.temper=Mc(e)),e}function l_(n){return Nn.map(e=>At(Math.round(n[e.key]),0,e.max))}function c_(n){const e={};return Nn.forEach((t,i)=>e[t.key]=At(n[i]??0,0,t.max)),n.length<Nn.length&&(e.temper=Mc(e)),e}const ys=(n,e)=>n[e]/hh[e],Vs=n=>n.eyeCount+1,As=n=>n.legPairs+1;function u_(n,e){let t=0;for(const i of Nn)t+=Math.abs(n[i.key]-e[i.key])/(i.max||1);return t/Nn.length}const $=(n=0,e=0,t=0)=>new R(n,e,t);function qt(n,e,t={}){const i=t.radial??14,s=t.segments??Math.max(8,n.length*6),a=t.sx??1,r=t.sy??1,o=t.capStart??!0,c=t.capEnd??!0,l=new Gr(n,!1,"centripetal"),u=[],d=[];for(let S=0;S<=s;S++){const M=S/s;u.push(l.getPointAt(M)),d.push(l.getTangentAt(M).normalize())}const f=[],h=[];let g=Math.abs(d[0].y)>.9?$(0,0,1):$(0,1,0),v=$().crossVectors(g,d[0]).normalize();v.lengthSq()<1e-6&&(v=$(1,0,0));for(let S=0;S<=s;S++){if(S>0){const M=$().crossVectors(d[S-1],d[S]),C=M.length();if(C>1e-6){M.divideScalar(C);const U=Math.acos(Ht.clamp(d[S-1].dot(d[S]),-1,1));v.applyAxisAngle(M,U)}}f.push(v.clone()),h.push($().crossVectors(d[S],v).normalize())}const p=[],m=5,y=e(0),_=e(1);if(o)for(let S=m;S>=1;S--){const M=S/m*(Math.PI/2);p.push({c:u[0].clone().addScaledVector(d[0],-y*Math.sin(M)*.9),r:y*Math.cos(M),i:0})}for(let S=0;S<=s;S++)p.push({c:u[S],r:e(S/s),i:S});if(c)for(let S=1;S<=m;S++){const M=S/m*(Math.PI/2);p.push({c:u[s].clone().addScaledVector(d[s],_*Math.sin(M)*.9),r:_*Math.cos(M),i:s})}const x=[],P=[];for(let S=0;S<p.length;S++){const M=p[S],C=f[M.i],U=h[M.i];for(let I=0;I<=i;I++){const K=I/i*Math.PI*2,ie=Math.cos(K)*M.r*a,ee=Math.sin(K)*M.r*r;x.push(M.c.x+C.x*ee+U.x*ie,M.c.y+C.y*ee+U.y*ie,M.c.z+C.z*ee+U.z*ie),P.push(I/i,S/(p.length-1))}}const b=[],T=i+1;for(let S=0;S<p.length-1;S++)for(let M=0;M<i;M++){const C=S*T+M,U=C+T;b.push(C,U,C+1,U,U+1,C+1)}const D=new Nt;return D.setAttribute("position",new tt(x,3)),D.setAttribute("uv",new tt(P,2)),D.setIndex(b),D.computeVertexNormals(),D}function on(n,e,t,i=24,s=16){const a=new Et(1,i,s);return a.scale(n,e,t),a}function mn(n,e,t,i=5){const s=[];for(let a=0;a<=i;a++){const r=a/i;s.push($(t.x*r*r*n,r*n,t.z*r*r*n).add($(0,t.y*r*r*n,0)))}return qt(s,a=>e*Math.pow(1-a,.9)+.004,{radial:10,segments:12,capEnd:!1})}function Wi(n,e=.15,t="x"){const i=new xc(n),s=new Wr(i,12),a=s.attributes.position;for(let r=0;r<a.count;r++){const o=a.getX(r),c=a.getY(r),l=t==="x"?o:c;a.setZ(r,e*l*l)}return s.computeVertexNormals(),s}function Ds(n,e=6){return new mc(n.map(([i,s])=>new he(i,s))).getPoints(n.length*e)}function d_(n){n.updateMatrixWorld(!0);const e=new ft().copy(n.matrixWorld).invert(),t=new ft,i=new R;n.traverse(s=>{const a=s;if(!a.isMesh||!a.geometry)return;let r=a.geometry;r.userData.baked&&(a.geometry=r=r.clone()),r.userData.baked=!0;const o=r.attributes.position,c=new Float32Array(o.count*3);t.multiplyMatrices(e,a.matrixWorld);for(let l=0;l<o.count;l++)i.fromBufferAttribute(o,l).applyMatrix4(t),c[l*3]=i.x,c[l*3+1]=i.y,c[l*3+2]=i.z;r.setAttribute("aRest",new tn(c,3))})}const h_=[{size:.62,head:1.45,limb:.62,acc:.38,tail:.6,neck:.45,wing:.5,len:.78},{size:.82,head:1.15,limb:.86,acc:.75,tail:.85,neck:.8,wing:.8,len:.92},{size:1,head:1,limb:1,acc:1,tail:1,neck:1,wing:1,len:1}];function f_(n,e){const t=h_[e.stage],i=e.quality==="baja"?10:14,s=new it;s.name="creature";const a=new it;s.add(a);const r=n.hue1/256,o=n.hue2/256,c=n.hueGlow/256,l=.3+n.sat/255*.7,u=n.light/255,d=xi(r,l*.9,.22+u*.46),f=xi(o,l,.28+u*.42),h=xi(c,.95,.62),g=n.material===7?xi(o,.25,.75):xi(r+.07,.35,.8),v=n.hue1*7+n.hue2*13+n.body*31,p=sa({color1:d,color2:f,glow:h,mat:n.material,pattern:n.pattern,seed:v}),m=sa({color1:g,color2:g.clone().multiplyScalar(.7),glow:h,mat:2,pattern:3,seed:v}),y=sa({color1:f,color2:h,glow:h,mat:4,pattern:n.pattern===5||n.pattern===1?5:4,seed:v,opacity:.9});y.side=pn;const _=sa({color1:xi(r+.95,.5,.08),color2:xi(.95,.6,.3),glow:h,mat:0,pattern:0,seed:v}),x=sa({color1:f,color2:d.clone().multiplyScalar(.8),glow:h,mat:n.material===6||n.material===7?n.material:1,pattern:5,seed:v+3}),P=qi(h,1.7),b=qi(h.clone().lerp(new ke(1,1,1),.2),1.1,.82),T=xi(c+.08,.9,.8),D=n_(h.clone().multiplyScalar(.9),T,n.eyes),S=[p,m,y,_,x,P,b,D],M=[],C=(z,X,Q,Le=!1)=>{const Y=new Xe(z,X);return Q.add(Y),Le&&M.push(Y),Y},U=(.95+ys(n,"length")*.85)*t.len,I=(.27+ys(n,"girth")*.24)*(e.stage===0?1.08:1),K=(.32+ys(n,"limbLength")*.55)*t.limb*(n.limbs===5?.6:1),ie=(.25+ys(n,"headSize")*.15)*t.head,ee=(.06+ys(n,"neck")*.5)*t.neck,ue=[],Z=[],we=[],B=[];let V=null,fe=null,be=null,j=!1,te=$(),ve=$(0,.8,.6).normalize(),pe=$(),Pe=$(0,.1,-1).normalize(),He=a,je=a;const Ce={pos:$(),parent:a};let Ve=[],bt=a,N=K+I*.35;const Pt=As(n),Ye=(z,X,Q,Le,Y,xe,me,Te=!1,Me=1,De=1)=>{const Re=[];let qe=z;const F=X.length-1;for(let H=0;H<F;H++){const ne=new it;ne.position.copy(H===0?X[0]:X[H].clone().sub(X[H-1])),qe.add(ne);const ye=$(),Se=X[H+1].clone().sub(X[H]),$e=ye.clone().lerp(Se,.5),Mt=qt([ye,$e,Se],kt=>Q((H+kt)/F),{radial:i,segments:6,capStart:!0,capEnd:H===F-1,sx:Me,sy:De});C(Mt,Le,ne,Te),Re.push(ne),qe=ne}const ge={joints:Re,amp:xe,speed:me,phase:Math.random()*6,axis:Y,base:Re.map(H=>H.rotation.clone())};return ue.push(ge),ge};if(n.body===0){N=K*.95+I*.3;const z=$(0,N-I*.05,-U*.42),X=$(0,N+U*.12,-U*.05),Q=$(0,N+U*.36,U*.2),Le=qt([z,X,Q],Y=>I*(.9+.3*Math.sin(Math.PI*Math.min(1,Y*1.1)))*(Y>.85?1-(Y-.85)*1.5:1),{radial:i,sx:.95});C(Le,p,a,!0),te=$(0,N+U*.36+I*.2,U*.2),ve=$(0,.85,.5).normalize(),pe=z.clone().add($(0,0,-I*.2)),Pe=$(0,-.15,-1).normalize(),B.push({pos:$(I*.72,N-I*.15,-U*.25),side:1,arm:!1,splay:!1,parent:a});for(let Y=1;Y<Pt;Y++){const xe=.62+Y*.1,me=new Gr([z,X,Q]).getPointAt(Math.min(.95,xe));B.push({pos:$(I*.85,me.y-I*.2,me.z+I*.2),side:1,arm:!0,splay:!1,parent:a})}Ce.pos=$(I*.5,N+U*.3,U*.05),Ve=[$(0,N+I*.85,-U*.38),$(0,N+U*.12+I*1.05,-U*.08),$(0,N+U*.34+I*.9,U*.12)]}else if(n.body===1||n.body===4){const z=n.body===4,X=z?U*.78:U,Q=z?I*1.25:I;N=z?K*.62+Q*.45:K*.95+Q*.35;const Le=$(0,N,-X*.5),Y=$(0,N+Q*.08,0),xe=$(0,N+Q*.18,X*.5),me=qt([Le,Y,xe],Te=>Q*(.8+.3*Math.sin(Math.PI*Te))*(Te>.88?1-(Te-.88)*2:1),{radial:i,sx:z?1.1:.9,sy:z?.75:1.05});C(me,p,a,!0),te=$(0,N+Q*(z?.15:.55),X*.48),ve=z?$(0,.35,1).normalize():$(0,.75,.65).normalize(),pe=$(0,N+Q*.05,-X*.5),Pe=$(0,z?-.1:.2,-1).normalize();for(let Te=0;Te<Pt;Te++){const Me=Pt===1?0:Ht.lerp(X*.32,-X*.32,Te/(Pt-1));B.push({pos:$(Q*(z?.85:.68),N-Q*.35,Me),side:1,arm:!1,splay:!1,parent:a})}if(Pt===1&&(B[B.length-1].pos.z=0),Ce.pos=$(Q*.45,N+Q*.85,X*.18),z){const Te=new Et(1,i+10,14,0,Math.PI*2,0,Math.PI*.55);Te.scale(Q*1.35,Q*1.15,X*.78),C(Te,x,a).position.set(0,N-Q*.15,-X*.02);const De=new Rn(1,.06,8,40);De.rotateX(Math.PI/2),De.scale(Q*1.3,1,X*.75),C(De,m,a).position.set(0,N+Q*.03,-X*.02),Ve=[$(0,N+Q*1,-X*.35),$(0,N+Q*1.12,0),$(0,N+Q*.98,X*.32)],Ce.pos=$(Q*.9,N+Q*.7,X*.1)}else Ve=[$(0,N+Q*1,-X*.42),$(0,N+Q*1.18,0),$(0,N+Q*1.2,X*.36)]}else if(n.body===2){N=I*.75;const z=6,X=[];for(let Y=0;Y<=z;Y++){const xe=Y/z;X.push($(Math.sin(xe*Math.PI*1.6)*I*.9,I*.75+(Y===0?I*.35:0),U*.55-xe*U*1.6))}const Q=Ye(a,X,Y=>I*(1-Y*.7)*(Y<.08?.9:1),p,"y",.22,2.2,!0,1,.9);fe=Q,te=X[0].clone().add($(0,I*.3,I*.1)),ve=$(0,1,.35).normalize(),je=Q.joints[Q.joints.length-1],pe=X[z].clone().sub(X[z-1]),Pe=X[z].clone().sub(X[z-1]).normalize();const Le=Math.max(0,Pt-1);for(let Y=0;Y<Le;Y++){const xe=Q.joints[Math.min(Q.joints.length-1,1+Y*2)];B.push({pos:$(I*.7,-I*.1,0),side:1,arm:!1,splay:!0,parent:xe})}Ce.pos=$(I*.6,I*.5,0),Ce.parent=Q.joints[1],bt=Q.joints[0],Ve=[$(0,I*.9,-U*.02),$(0,I*.8,-U*.15),$(0,I*.75,-U*.25)]}else if(n.body===3){j=!0,N=K*1.3+.75;const z=I*1.5+.15,X=[],Q=14;for(let De=0;De<=Q;De++){const Re=De/Q*Math.PI*.56;X.push(new he(Math.sin(Re)*z*(1+(De===Q?.08:0)),Math.cos(Re)*z*.9))}X.push(new he(z*.85,-z*.18)),X.push(new he(z*.5,-z*.05)),X.push(new he(.001,-z*.1));const Le=new Hr(X,i*2+4),Y=Le.attributes.position;for(let De=0;De<Y.count;De++){const Re=Y.getX(De),qe=Y.getY(De),F=Y.getZ(De),ge=Math.atan2(F,Re),H=Ht.smoothstep(z*.3,-z*.15,qe),ne=1+Math.sin(ge*8)*.07*H;Y.setXYZ(De,Re*ne,qe-Math.abs(Math.sin(ge*8))*.05*H,F*ne)}Le.computeVertexNormals();const xe=new it;xe.position.set(0,N,0),a.add(xe),C(Le,p,xe,!0);const me=C(on(z*.45,z*.35,z*.45,16,12),qi(h,.9,.55),xe);me.position.y=z*.25,S.push(me.material),be=xe,te=$(0,N+z*.15,z*.7),ve=$(0,.2,1).normalize(),He=a,pe=$(0,N-z*.1,-z*.6),Pe=$(0,-.6,-.8).normalize();const Te=Pt*2+4,Me=n.limbs===1?1.5:n.limbs===3?.7:1;for(let De=0;De<Te;De++){const Re=De/Te*Math.PI*2+.3,qe=$(Math.cos(Re)*z*.6,N-z*.12,Math.sin(Re)*z*.6),F=(N-.1)*(.8+De*37%10/50),ge=[];for(let ye=0;ye<=6;ye++){const Se=ye/6,$e=Math.sin(Se*Math.PI*1.5+De)*.12*z*Se;ge.push(qe.clone().add($(Math.cos(Re)*(Se*.3*z+$e),-Se*F,Math.sin(Re)*(Se*.3*z+$e))))}const H=n.limbs===5?y:p,ne=Ye(a,ge,ye=>I*.13*Me*(1-ye*.8),H,"x",.18,1.6,!1,n.limbs===5?2.2:1,n.limbs===5?.4:1);ne.phase=De*.8}Ce.pos=$(z*.9,N+z*.1,0),Ve=[$(0,N+z*.85,-z*.35),$(0,N+z*.93,0),$(0,N+z*.85,z*.35)]}else{N=K*.75+I*.35;const z=$(0,N+I*.25,-U*.55),X=$(0,N+I*.1,-U*.1),Q=$(0,N+I*.05,U*.35),Le=qt([z,$(0,N+I*.3,-U*.32),X],me=>I*(.7+.55*Math.sin(Math.PI*me)),{radial:i,sx:1.05});C(Le,p,a,!0);const Y=qt([X,$(0,N+I*.12,U*.1),Q],me=>I*(.65+.2*Math.sin(Math.PI*me)),{radial:i});C(Y,p,a,!0),te=$(0,N+I*.2,U*.38),ve=$(0,.4,1).normalize(),pe=z.clone(),Pe=$(0,.3,-1).normalize();const xe=Math.min(4,Pt+2);for(let me=0;me<xe;me++){const Te=Ht.lerp(U*.3,-U*.15,xe===1?.5:me/(xe-1));B.push({pos:$(I*.6,N,Te),side:1,arm:!1,splay:!0,parent:a})}Ce.pos=$(I*.4,N+I*.7,U*0),Ve=[$(0,N+I*1.15,-U*.45),$(0,N+I*1.2,-U*.3),$(0,N+I*.85,U*.15)]}let Qe=0;for(const z of B){for(const X of[1,-1]){const Q=new it;Q.position.set(z.pos.x*X,z.pos.y,z.pos.z),z.parent.add(Q);const Le=new it;Le.scale.x=X,Q.add(Le);const Y=z.arm?K*.62:z.splay?K*1.25:z.parent===a?z.pos.y:K,xe=n.limbs===1?1.45:n.limbs===3?.55:n.limbs===2?1.1:1,me=Math.max(.03,I*.3*xe)*(z.arm?.7:z.splay?.55:1);let Te,Me;if(z.splay){const Re=z.parent===a?z.pos.y:I*.85;Te=$(Y*.45,Y*.3,0),Me=$(Y*.35,-(Re+Y*.3),0)}else if(z.arm)Te=$(.02,-Y*.5,Y*.15),Me=$(0,-Y*.35,Y*.3);else{const Re=n.limbs===0||n.limbs===4?-.12:.1;Te=$(.02,-Y*.5,Y*Re),Me=$(0,-(Y-Y*.5),-Y*Re+.02)}const De=n.limbs===3?n.material===2?p:m:p;if(n.limbs===2){const Re=[$(),Te.clone(),Te.clone().add(Me),Te.clone().add(Me).add($(.1,.02,.12))],qe=Ye(Le,Re,ge=>me*(1-ge*.75),p,"z",.15,2);qe.phase=Qe;const F=qe.joints[1]??Q;Z.push({hip:Q,knee:F,phase:Qe*Math.PI*.5+(X>0?0:Math.PI),side:X,arm:z.arm,splay:z.splay})}else{const Re=qt([$(),Te.clone().multiplyScalar(.5).add($(0,0,.01)),Te],H=>me*(1-H*.3),{radial:i,segments:8});C(Re,De,Le,!0);const qe=new it;qe.position.copy(Te),Le.add(qe);const F=qt([$(),Me.clone().multiplyScalar(.5),Me],H=>me*(.72-H*.25),{radial:i,segments:8});C(F,De,qe,!0);const ge=new it;if(ge.position.copy(Me),qe.add(ge),n.limbs===1)C(on(me*1.15,me*.55,me*1.3,14,8),p,ge).position.set(0,me*.1,me*.25);else if(n.limbs===4||n.limbs===0){if(C(on(me*.85,me*.5,me*1.2,12,8),p,ge).position.set(0,me*.15,me*.35),n.limbs===4||!z.arm)for(let ne=-1;ne<=1;ne++){const ye=C(mn(me*(n.limbs===4?1.3:.7),me*.28,$(0,-.4,.3)),m,ge);ye.position.set(ne*me*.45,me*.15,me*.9),ye.rotation.x=Math.PI/2.4}}else if(n.limbs===5)C(on(me*1.4,me*.25,me*2.2,14,8),y,ge).position.set(0,me*.1,me*.9);else if(n.limbs===3){const H=C(mn(me*2,me*.7,$(0,0,.2)),m,ge);H.rotation.x=Math.PI}Z.push({hip:Q,knee:qe,phase:Qe*Math.PI*.5+(X>0?0:Math.PI),side:X,arm:z.arm,splay:z.splay})}}Qe++}const Be=new it;Be.position.copy(te),He.add(Be);const lt=ve.clone().multiplyScalar(n.body===3?.02:ee+.05);if(ee>.1&&n.body!==3){const z=lt.clone().multiplyScalar(.5).add($(0,0,-ee*.08)),X=qt([$(0,-I*.2,-I*.2),z,lt],Q=>Ht.lerp(I*.62,ie*.5,Q),{radial:i});C(X,p,Be,!0)}const Oe=new it;Oe.position.copy(lt),Be.add(Oe);const A=p_(n,Oe,ie,{bodyMat:p,accentMat:m,darkMat:_,memMat:y,mesh:C,radial:i}),w=g_(n,Oe,ie,A,{bodyMat:p,eyeMat:D,glowM:P,mesh:C,radial:i,makeChain:Ye});if(v_(n,A.mouth,ie,{darkMat:_,accentMat:m,bodyMat:p,mesh:C,makeChain:Ye}),x_(n,A.top,ie,t.acc,{accentMat:m,glowM:P,memMat:y,mesh:C,makeChain:Ye,bodyMat:p}),n.tail>0){const z=new it;z.position.copy(pe),z.quaternion.setFromUnitVectors($(0,0,-1),Pe),je.add(z),V=__(n,z,I,U,t.tail,{bodyMat:p,accentMat:m,glowM:P,memMat:y,mesh:C,makeChain:Ye})}if(n.wings>0&&n.wings!==5)for(const z of[1,-1]){const X=new it;X.position.set(Ce.pos.x*z,Ce.pos.y,Ce.pos.z),Ce.parent.add(X);const Q=new it;Q.scale.x=z,X.add(Q),y_(n,Q,I,t.wing,{bodyMat:p,memMat:y,glowM:P,mesh:C});const Le=new In(0,0,0);n.wings===4?Le.set(0,z*.3,z*-.5):Le.set(0,z*-.25,z*.45),X.rotation.copy(Le),we.push({group:X,side:z,kind:n.wings,base:Le})}n.spines>0&&Ve.length&&b_(n,bt,Ve,I,t.acc,{bodyMat:p,accentMat:m,glowM:P,crystalM:b,memMat:y,mesh:C});const G=(.82+ys(n,"size")*.5)*t.size;if(s.scale.setScalar(G),d_(s),n.material===3&&e.quality!=="baja")for(const Q of M)for(let Le=1;Le<=6;Le++){const Y=new Xe(Q.geometry,Qx(p,Le/6*.035,.035));Q.add(Y),S.push(Y.material)}s.traverse(z=>{const X=z;X.isMesh&&(X.castShadow=!1,X.frustumCulled=!1)}),s.updateMatrixWorld(!0);const ae=new qs().setFromObject(s),de=ae.getSize($());return{root:s,pivot:a,head:Oe,neck:Be,eyes:w,legs:Z,chains:ue,tail:V,body:fe,wings:we,bell:be,mats:S,bodyMat:p,eyeMat:D,glowMats:[P,b],height:ae.max.y,radius:Math.max(de.x,de.z)*.5,floating:j,hipH:N*G,headBase:Oe.rotation.clone(),mouth:A.mouth,stage:e.stage,dispose:()=>{s.traverse(z=>{const X=z;X.isMesh&&X.geometry.dispose()}),S.forEach(z=>z.dispose())}}}function p_(n,e,t,i){const{mesh:s,bodyMat:a,accentMat:r,darkMat:o,memMat:c}=i;let l=$(t,t*.92,t),u=$(0,0,0);const d=new it,f=new it;switch(e.add(d),e.add(f),n.head){case 0:{s(on(l.x,l.y,l.z,28,20),a,e,!0),s(on(t*.58,t*.45,t*.52,20,14),a,e,!0).position.set(0,-t*.3,t*.62),d.position.set(0,-t*.45,t*.95),f.position.set(0,t*.8,-t*.05);break}case 1:{l=$(t*.92,t*.82,t*.92),s(on(l.x,l.y,l.z,28,20),a,e,!0);const h=qt([$(0,-t*.1,t*.3),$(0,-t*.22,t*1),$(0,-t*.3,t*1.65)],g=>t*(.58-g*.22),{radial:i.radial,sx:1.08,sy:.78});s(h,a,e,!0);for(const g of[1,-1])s(on(t*.06,t*.05,t*.04,8,6),o,e).position.set(g*t*.16,-t*.12,t*1.88);d.position.set(0,-t*.52,t*1.45),f.position.set(0,t*.72,-t*.1);break}case 2:{s(on(l.x,l.y,l.z,28,20),a,e,!0);const h=s(mn(t*1.1,t*.42,$(0,0,.45)),r,e);h.rotation.x=Math.PI/2,h.position.set(0,-t*.1,t*.7),d.position.set(0,-t*.4,t*.9),f.position.set(0,t*.8,-t*.1);break}case 3:{l=$(t*1.35,t*.72,t*1),s(on(l.x,l.y,l.z,28,18),a,e,!0);for(const h of[1,-1])for(let g=0;g<3;g++){const v=qt([$(),$(h*t*.35,t*.2+g*t*.05,-t*.15),$(h*t*.6,t*.45-g*t*.25,-t*.35)],m=>t*.09*(1-m*.6),{radial:8,segments:8});s(v,c,e).position.set(h*t*1.05,t*.15-g*t*.18,-t*.2)}d.position.set(0,-t*.32,t*.98),f.position.set(0,t*.62,-t*.1);break}case 4:{s(on(l.x,l.y,l.z,28,20),a,e,!0),s(on(t*.62,t*.5,t*.6,20,14),a,e,!0).position.set(0,-t*.28,t*.6);const g=s(on(t*1.45,t*1.15,t*.16,28,14),r,e);g.position.set(0,t*.45,-t*.55),g.rotation.x=-.55;const v=qt([$(-t*.75,t*.35,t*.55),$(0,t*.55,t*.78),$(t*.75,t*.35,t*.55)],()=>t*.13,{radial:10});s(v,r,e),d.position.set(0,-t*.5,t*.95),f.position.set(0,t*.75,t*.2);break}default:s(qt([$(0,-t*.1,t*.55),$(0,t*.25,-t*.3),$(0,t*.75,-t*1.25)],h=>t*(.95-h*.45),{radial:i.radial}),a,e,!0),l=$(t*.95,t*.9,t*.85),u=$(0,t*.05,t*.1),d.position.set(0,-t*.55,t*.95),f.position.set(0,t*1,-t*.75)}if(n.wings===5)for(const h of[1,-1]){const g=new it;g.position.set(h*l.x*.75,t*.45,-t*.15),e.add(g);const v=Ds([[0,0],[t*.6,t*.35],[t*1.5,t*.6],[t*2.1,t*.3],[t*1.6,-t*.25],[t*.6,-t*.25],[0,0]],5),p=Wi(v,.12),m=s(p,c,g);m.scale.x=h,g.rotation.set(-.2,h*.35,h*.55),g.userData.ear=h}return{mouth:d,top:f,craniumC:u,craniumR:l}}const m_=[[[0,.25]],[[-.5,.2],[.5,.2]],[[-.5,.1],[.5,.1],[0,.6]],[[-.55,.05],[.55,.05],[-.28,.52],[.28,.52]],[[-.6,0],[.6,0],[-.35,.45],[.35,.45],[0,.78]],[[-.62,-.05],[.62,-.05],[-.42,.4],[.42,.4],[-.15,.74],[.15,.74]]];function g_(n,e,t,i,s){const a=Vs(n),r=[],o=t*(a<=2?.34:.34/Math.sqrt(a/2.2))*(n.eyes===2?1.15:1);if(n.eyes===3){for(let l=0;l<a;l++){const u=a===1?0:Ht.lerp(-.55,.55,l/(a-1)),d=$(u*i.craniumR.x,i.craniumR.y*.75,i.craniumR.z*.1).add(i.craniumC),f=t*(1+l%2*.25),h=[d,d.clone().add($(u*t*.4,f*.5,t*.1)),d.clone().add($(u*t*.7,f,t*.2))],g=s.makeChain(e,h,_=>t*.09*(1-_*.3),s.bodyMat,"z",.12,1.4);g.phase=l*1.3;const v=g.joints[g.joints.length-1],p=new it;p.position.copy(h[2].clone().sub(h[1])),v.add(p);const m=s.mesh(new Et(o*.85,24,18),s.eyeMat,p);m.rotation.y=0;const y=s.mesh(new Et(o*.95,20,14,0,Math.PI*2,0,Math.PI*.5),s.bodyMat,p);y.rotation.x=-Math.PI*.62,r.push(p)}return r}const c=m_[a-1];for(const[l,u]of c){const d=$(l*.95,u*.85+.05,1).normalize(),f=$(d.x*i.craniumR.x,d.y*i.craniumR.y,d.z*i.craniumR.z).multiplyScalar(.9).add(i.craniumC),h=new it;h.position.copy(f);const g=d.clone().lerp($(0,0,1),.45).normalize();h.quaternion.setFromUnitVectors($(0,0,1),g),e.add(h);const v=s.mesh(new Et(o*1.14,20,14),s.bodyMat,h);v.position.z=-o*.28,v.scale.set(1,1,.7);const p=s.mesh(new Et(o,28,20),s.eyeMat,h);p.position.z=o*.05,r.push(h)}return r}function v_(n,e,t,i){const{mesh:s}=i,a=()=>{const r=[];for(let o=0;o<=6;o++){const c=o/6-.5;r.push($(c*t*.8,Math.pow(Math.abs(c)*2,2)*t*.1,-Math.abs(c)*t*.25))}s(qt(r,()=>t*.035,{radial:6,segments:18}),i.darkMat,e)};switch(n.mouth){case 0:a();break;case 1:{a();for(const r of[1,-1]){const o=s(mn(t*.28,t*.07,$(0,0,.15)),i.accentMat,e);o.rotation.x=Math.PI,o.position.set(r*t*.2,t*.03,-t*.03)}break}case 2:{const r=s(mn(t*.55,t*.25,$(0,0,-.3)),i.accentMat,e);r.rotation.x=Math.PI/2+.3,r.position.set(0,-t*.02,-t*.15);break}case 3:{for(const r of[1,-1]){const o=s(mn(t*.6,t*.1,$(-r*.55,0,0)),i.accentMat,e);o.rotation.set(Math.PI/2,0,0),o.position.set(r*t*.32,0,-t*.05),o.scale.x=1}a();break}case 4:{const r=s(new Rn(t*.22,t*.07,10,24),i.bodyMat,e);r.position.z=t*.02;const o=s(new zs(t*.2,20),i.darkMat,e);o.position.z=t*.01;for(let c=0;c<8;c++){const l=c/8*Math.PI*2,u=s(mn(t*.09,t*.03,$()),i.accentMat,e);u.position.set(Math.cos(l)*t*.17,Math.sin(l)*t*.17,t*.03),u.rotation.z=l+Math.PI/2}break}default:{const r=[$(0,0,0),$(0,-t*.2,t*.5),$(0,-t*.7,t*.7),$(0,-t*1,t*.45)];i.makeChain(e,r,o=>t*.16*(1-o*.6),i.bodyMat,"x",.15,1.8)}}}function x_(n,e,t,i,s){const{mesh:a}=s,r=Math.max(.35,i);switch(n.horns){case 1:{for(const o of[1,-1]){const c=t*1.5*r,l=[$(o*t*.3,0,0),$(o*t*.45,c*.45,t*.05),$(o*t*.75,c*.8,-t*.05),$(o*t*.85,c,t*.15)],u=s.makeChain(e,l,h=>t*.06*(1-h*.5),s.bodyMat,"z",.18,1.5);u.phase=o;const d=u.joints[u.joints.length-1];a(new Et(t*.16,14,10),s.glowM,d).position.copy(l[3].clone().sub(l[2]))}break}case 2:{for(const o of[1,-1]){const c=a(mn(t*1.3*r,t*.2,$(o*.3,0,-.9)),s.accentMat,e);c.position.set(o*t*.45,-t*.1,0),c.rotation.z=-o*.35}break}case 3:{for(const o of[1,-1]){const c=new it;c.position.set(o*t*.4,-t*.05,0),c.rotation.z=-o*.5,e.add(c);const l=t*1.6*r;a(mn(l,t*.11,$(o*.2,0,-.35)),s.accentMat,c);for(let u=0;u<2;u++){const d=a(mn(l*.5,t*.07,$(0,0,.4)),s.accentMat,c);d.position.set(o*l*.06*(u+1),l*(.38+u*.25),-l*.06*(u+1)),d.rotation.set(.5,0,-o*.6)}}break}case 4:{const o=a(mn(t*.95*r,t*.3,$(0,0,.5)),s.accentMat,e);o.position.set(0,-t*.2,t*.85),o.rotation.x=.45;break}case 5:{const o=Ds([[0,0],[t*.3,t*.9*r],[t*.7,t*1.2*r],[t*1.2,t*.9*r],[t*1.6,t*.2],[t*1.5,0]],5),c=Wi(o,0),l=a(c,s.memMat,e);l.rotation.y=Math.PI/2,l.position.set(0,-t*.15,t*.4);break}}}function __(n,e,t,i,s,a){const{mesh:r}=a,o=(.55+i*.45)*s*(n.tail===1?1.5:1),c=t*(n.tail===2?.7:n.tail===1?.33:.45),l=5,u=[];for(let g=0;g<=l;g++){const v=g/l;let p=Math.sin(v*Math.PI*.9)*o*.12-v*v*o*.1,m=-v*o;if(n.tail===5){const y=v*Math.PI*.95;p=Math.sin(y)*o*.55,m=-Math.sin(y*.75)*o*.5}u.push($(0,p,m))}const d=a.makeChain(e,u,g=>c*(1-g*.85)+.015,a.bodyMat,"y",n.tail===5?.06:.22,2.2,!0),f=d.joints[d.joints.length-1],h=u[l].clone().sub(u[l-1]);if(n.tail===3)r(new Et(t*.3*Math.max(.6,s),18,14),a.glowM,f).position.copy(h);else if(n.tail===4)for(let g=0;g<5;g++){const v=Ds([[0,0],[t*.25,t*.4],[0,t*1.5],[-t*.25,t*.4],[0,0]],5),p=r(Wi(v,.05,"y"),a.memMat,f);p.position.copy(h),p.rotation.set(-Math.PI/2+.4,0,(g-2)*.45)}else if(n.tail===5){const g=r(mn(t*.6*s,t*.18,$(0,0,.6)),a.accentMat,f);g.position.copy(h),g.rotation.x=2.3}return d}function y_(n,e,t,i,s){const{mesh:a}=s,r=(.75+t*1.6)*i;if(n.wings===1){const o=$(0,0,0),c=$(r*.38,r*.05,-r*.05);a(qt([o,c.clone().multiplyScalar(.5),c],h=>t*.12*(1-h*.4),{radial:8}),s.bodyMat,e);const l=[$(r,r*.08,-r*.1),$(r*.9,r*.03,-r*.45),$(r*.6,0,-r*.75)];for(const h of l)a(qt([c,c.clone().lerp(h,.5),h],g=>t*.06*(1-g*.8),{radial:6,segments:8}),s.bodyMat,e);const u=[new he(0,0),new he(c.x,-c.z),new he(l[0].x,-l[0].z),new he(l[0].x*.85,-l[0].z+r*.25),new he(l[1].x,-l[1].z),new he(l[1].x*.75,-l[1].z+r*.2),new he(l[2].x,-l[2].z),new he(r*.15,r*.5),new he(0,r*.12)],d=Wi(u,.08),f=a(d,s.memMat,e);f.rotation.x=-Math.PI/2}else if(n.wings===2)for(let o=0;o<2;o++){const c=r*(o===0?1:.75),l=Ds([[0,0],[c*.35,c*.18],[c*.85,c*.2],[c,0],[c*.8,-c*.2],[c*.3,-c*.15],[0,0]],6),u=a(Wi(l,.04),s.memMat,e);u.rotation.set(Math.PI/2,0,o===0?.25:-.35),u.position.z=-o*t*.35}else if(n.wings===3){for(let c=0;c<6;c++){const l=r*(.55+Math.sin(c/5*Math.PI)*.45),u=Ds([[0,0],[l*.3,l*.12],[l,l*.06],[l*.95,-l*.08],[l*.3,-l*.08],[0,0]],5);a(Wi(u,.05),s.memMat,e).rotation.set(Math.PI/2,0,(c-2)*.28-.1)}a(new Et(t*.1,10,8),s.glowM,e).position.set(r*.75,.02,-r*.1)}else if(n.wings===4){const o=r*.5,c=Ds([[0,0],[o*.4,o*.3],[o,o*.35],[o*.8,-o*.1],[o*.2,-o*.25],[0,0]],5);a(Wi(c,.1),s.memMat,e).rotation.set(Math.PI/2,0,-.2)}}function b_(n,e,t,i,s,a){const{mesh:r}=a,o=new Gr(t),c=n.spines===4?0:6,l=Math.max(.35,s);for(let u=0;u<c;u++){const d=(u+.5)/c,f=o.getPointAt(d),h=Math.sin(d*Math.PI)*.6+.4;if(n.spines===1)r(mn(i*.55*h*l,i*.11,$(0,0,-.4)),a.accentMat,e).position.copy(f).add($(0,-i*.06,0));else if(n.spines===2){const g=r(on(i*.05,i*.42*h*l,i*.32*h*l,10,10),(a.bodyMat===a.accentMat,a.accentMat),e);g.position.copy(f).add($((u%2?1:-1)*i*.1,i*.12*h,0)),g.rotation.set(-.3,0,(u%2?1:-1)*.18)}else if(n.spines===3){const g=i*.6*h*l,v=new Vr(i*.12,g,5);v.translate(0,g/2,0);const p=r(v,a.crystalM,e);p.position.copy(f).add($((u%2?1:-1)*i*.08,-i*.08,0)),p.rotation.set(-.35,u,(u%2?1:-1)*.25)}else n.spines===5&&r(new Et(i*.14*h,12,10),u%2?a.glowM:a.accentMat,e).position.copy(f).add($((u%2?1:-1)*i*.18,-i*.05,0))}if(n.spines===4){const u=[];for(let v=0;v<=7;v++){const p=v/7,m=o.getPointAt(p);u.push([m.z,m.y-.02])}for(let v=7;v>=0;v--){const p=v/7,m=o.getPointAt(p);u.push([m.z,m.y+Math.sin(p*Math.PI)*i*1.3*l+Math.sin(p*18)*i*.08])}const f=new xc(u.map(([v,p])=>new he(v,p))),h=new Wr(f,8),g=r(h,a.memMat,e);g.rotation.y=-Math.PI/2}}class M_{constructor(e){le(this,"rig");le(this,"state","idle");le(this,"t",Math.random()*10);le(this,"blinkT",2);le(this,"blink",0);le(this,"action",null);le(this,"hurt",0);le(this,"glow",0);le(this,"lookTarget",null);le(this,"lookCur",new he);le(this,"wander",{t:3,yaw:0,targetYaw:0});le(this,"baseYaw",0);le(this,"allowWander",!1);le(this,"speedMul",1);le(this,"faintT",0);le(this,"sadK",0);le(this,"temper",ai[0].anim);le(this,"temperId",0);le(this,"hopT",4);this.rig=e}setState(e){e!==this.state&&(this.state=e,e==="faint"&&(this.faintT=0))}play(e,t=1){const i={attack:.55,hit:.45,jump:.6,spin:.9,nod:.8}[e];this.action={kind:e,t:0,dur:i,dir:t},e==="hit"&&(this.hurt=1)}setTemper(e){this.temperId=e,this.temper=ai[e%ai.length].anim}pulseGlow(e=1.5){this.glow=e}update(e){const t=this.rig,i=this.temper;e*=this.speedMul*i.pace,this.t+=e;const s=this.t,a=this.state,r=a==="sleep"||a==="incubate",o=a==="sad"||a==="sick",c=a==="happy"?1.6:o?.55:r?.35:1;this.sadK+=((o?1:0)-this.sadK)*Math.min(1,e*2);const l=Math.sin(s*(r?1.4:2.4))*(r?.035:.022);t.pivot.scale.set(1-l*.4,1+l,1-l*.3);let u=0,d=0,f=0;if(t.floating&&(u+=Math.sin(s*1.3)*.08+.05),a==="sleep"&&(u-=t.hipH*.35,d=.05),a==="happy"&&(u+=Math.abs(Math.sin(s*5))*.08),a==="idle"&&(d-=.04*i.bounce),i.bounce>0&&this.allowWander&&(a==="idle"||a==="happy")&&!this.action&&(this.hopT-=e,this.hopT<=0&&(this.hopT=(5+Math.random()*6)/i.bounce,this.play(Math.random()<.25?"spin":"jump"))),a==="faint"){this.faintT=Math.min(1,this.faintT+e*1.8);const b=Ht.smoothstep(this.faintT,0,1);f=b*1.35,u-=b*t.hipH*.4}let h=0,g=0;if(this.action){const b=this.action;b.t+=e;const T=Math.min(1,b.t/b.dur);b.kind==="attack"?(h=Math.sin(T*Math.PI)*.6*(T<.4?T/.4:1),d-=Math.sin(T*Math.PI)*.15):b.kind==="hit"?(h=-Math.sin(T*Math.PI)*.28,f+=Math.sin(T*Math.PI*3)*.08*(1-T)):b.kind==="jump"?(u+=Math.sin(T*Math.PI)*.45,d-=Math.sin(T*Math.PI*2)*.08):b.kind==="spin"?(g=T*Math.PI*2,u+=Math.sin(T*Math.PI)*.25):b.kind,T>=1&&(this.action=null)}t.pivot.position.set(0,u,h),t.pivot.rotation.set(d,g,f);let v=a==="walk";if(this.allowWander&&(a==="idle"||a==="happy")){const b=this.wander;b.t-=e,b.t<=0&&(b.t=(3+Math.random()*5)/i.wander,b.targetYaw=(Math.random()-.5)*Math.min(2.4,1.6*(.6+.4*i.wander)));const T=b.targetYaw-b.yaw;Math.abs(T)>.03&&(b.yaw+=Math.sign(T)*Math.min(Math.abs(T),e*.9),v=!0),t.root.rotation.y=this.baseYaw+b.yaw}const p=s*(v?7:0);for(const b of t.legs){if(b.arm){b.hip.rotation.x=-.3+Math.sin(s*2+b.phase)*.08*c+(this.action?.kind==="attack"?-.8:0),b.knee.rotation.x=-.4;continue}if(v){const T=Math.sin(p+b.phase);b.splay?(b.hip.rotation.y=T*.35,b.hip.rotation.z=Math.max(0,Math.cos(p+b.phase))*.25*-b.side):(b.hip.rotation.x=T*.45,b.knee.rotation.x=Math.max(0,-Math.cos(p+b.phase))*.6)}else{const T=a==="sleep"?1:0;b.splay?(b.hip.rotation.y*=.9,b.hip.rotation.z=Ht.lerp(b.hip.rotation.z,T*.4*-b.side,.1)):(b.hip.rotation.x=Ht.lerp(b.hip.rotation.x,T*-.9,.1),b.knee.rotation.x=Ht.lerp(b.knee.rotation.x,T*1.6,.1))}}for(const b of t.chains){const T=b.amp*c*(b===t.tail&&a==="happy"?1.8:1),D=b.speed*(a==="happy"&&b===t.tail?2.2:1)*(r?.4:1);b.joints.forEach((S,M)=>{const C=Math.sin(s*D+b.phase-M*.7)*T*(.5+M*.25),U=b.base[M];S.rotation.set(U.x,U.y,U.z),b.axis==="x"?S.rotation.x+=C:b.axis==="y"?S.rotation.y+=C:S.rotation.z+=C,b===t.tail&&o&&(S.rotation.x+=.12)})}for(const b of t.wings){const T=b.kind===2?22:b.kind===4?3:3.2,D=b.kind===2?.25:b.kind===4?.12:.22,S=a==="happy"||this.action?.kind==="jump"||this.action?.kind==="attack",M=Math.sin(s*T*(S?1.6:1))*D*(S?2:1)*(r?.2:1);b.group.rotation.set(b.base.x,b.base.y,b.base.z+M*b.side-(r?.35*b.side:0))}if(t.bell){const b=Math.sin(s*2.2)*.06;t.bell.scale.set(1+b,1-b*.8,1+b)}const m=new he;if(this.lookTarget&&!r&&a!=="faint"){const b=t.head.parent.worldToLocal(this.lookTarget.clone()),T=t.head.position,D=b.x-T.x,S=b.y-T.y,M=b.z-T.z;m.set(Ht.clamp(Math.atan2(D,M),-.7,.7),Ht.clamp(-Math.atan2(S,Math.hypot(D,M)),-.4,.35))}i.look<0&&(m.x=-m.x*.6+Math.sign(Math.sin(s*.2))*.25),m.x+=Math.sin(s*.37)*.25*c*Math.abs(i.look),m.y+=Math.sin(s*.53)*.08*Math.abs(i.look),this.lookCur.lerp(m,Math.min(1,e*3));let y=this.lookCur.y;a==="sleep"&&(y=.45),o&&(y+=.3),a==="eat"&&(y=.35+Math.abs(Math.sin(s*9))*.35),this.action?.kind==="nod"&&(y+=Math.abs(Math.sin(this.action.t*12))*.35),a==="happy"&&(y+=Math.sin(s*5)*.08);const _=r?0:Math.sin(s*.7)*i.tilt;t.head.rotation.set(t.headBase.x+y,t.headBase.y+this.lookCur.x,t.headBase.z+_+(a==="happy"?Math.sin(s*2.5)*.18:0)),t.neck&&t.neck.rotation.set(y*.25+(this.action?.kind==="attack"?-.3:0),this.lookCur.x*.3,0),this.blinkT-=e,this.blinkT<=0&&(this.blink=1,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-e*7);let x=1-Math.sin(this.blink*Math.PI)*.92;r||a==="faint"?x=.08:a==="happy"?x=Math.min(x,.55+Math.sin(s*5)*.05):o?x=Math.min(x,.6):x=Math.min(x,1-i.squint);for(const b of t.eyes)b.scale.set(1,Math.max(.06,x),1);this.hurt=Math.max(0,this.hurt-e*3.5),this.glow=Math.max(0,this.glow-e*1.2);const P=1+this.glow+(a==="cast"?.8+Math.sin(s*10)*.3:0);for(const b of t.mats){const T=b.uniforms;T.uHurt&&(T.uHurt.value=this.hurt*.75),T.uGlowBoost&&(T.uGlowBoost.value=P),T.uSad&&(T.uSad.value=this.sadK*(a==="sick"?1:.5))}}}let fr=null;function S_(){if(fr)return fr;const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,10,0.75)"),t.addColorStop(.5,"rgba(0,0,20,0.35)"),t.addColorStop(1,"rgba(0,0,20,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),fr=new Cr(n),fr}class Pr{constructor(e,t){le(this,"anchor",new it);le(this,"rig",null);le(this,"anim",null);le(this,"shadow");le(this,"key","");le(this,"quality");this.quality=t,e.add(this.anchor),this.shadow=new Xe(new Ai(1,1),new Pn({map:S_(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.012,this.shadow.renderOrder=1,this.anchor.add(this.shadow)}set(e,t,i=!1){const s=JSON.stringify(e)+t+this.quality;if(!i&&s===this.key&&this.rig)return;this.key=s;const a=this.anim;this.rig&&(this.anchor.remove(this.rig.root),this.rig.dispose()),this.rig=f_(e,{stage:t,quality:this.quality}),this.anchor.add(this.rig.root);const r=new M_(this.rig);a&&(r.state=a.state,r.lookTarget=a.lookTarget,r.allowWander=a.allowWander,r.baseYaw=a.baseYaw),r.setTemper(e.temper??0),this.anim=r;const o=Math.max(.6,this.rig.radius*1.9);this.shadow.scale.set(o,o*.85,1)}clear(){this.rig&&(this.anchor.remove(this.rig.root),this.rig.dispose()),this.rig=null,this.anim=null,this.key=""}update(e){if(this.anim?.update(e),this.rig){const t=this.rig.floating?.75:1;this.shadow.material.opacity=t}}headWorld(){const e=new R;return this.rig?this.rig.head.getWorldPosition(e):this.anchor.getWorldPosition(e),e}get height(){return this.rig?this.rig.height:1}get meshes(){return this.rig?[this.rig.root]:[]}dispose(){this.clear(),this.shadow.geometry.dispose(),this.anchor.parent?.remove(this.anchor)}}let pr=null;function fh(){if(pr)return pr;const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),pr=new Cr(n),pr}class ph{constructor(e,t,i,s,a=.05){le(this,"points");le(this,"base");const r=new Nt,o=new Float32Array(e*3);for(let l=0;l<e;l++)o[l*3]=i.x+(Math.random()-.5)*t.x,o[l*3+1]=i.y+Math.random()*t.y,o[l*3+2]=i.z+(Math.random()-.5)*t.z;this.base=o.slice(),r.setAttribute("position",new tn(o,3));const c=new Yd({size:a,map:fh(),color:s,transparent:!0,opacity:.8,depthWrite:!1,blending:Zi,sizeAttenuation:!0});this.points=new Kd(r,c),this.points.frustumCulled=!1}update(e){const t=this.points.geometry.attributes.position,i=t.array;for(let s=0;s<t.count;s++)i[s*3]=this.base[s*3]+Math.sin(e*.3+s)*.15,i[s*3+1]=this.base[s*3+1]+Math.sin(e*.2+s*1.7)*.25,i[s*3+2]=this.base[s*3+2]+Math.cos(e*.25+s*.7)*.15;t.needsUpdate=!0}}class mh{constructor(){le(this,"points");le(this,"parts",[]);le(this,"max",400);const e=new Nt;e.setAttribute("position",new tn(new Float32Array(this.max*3),3)),e.setAttribute("color",new tn(new Float32Array(this.max*3),3)),e.setAttribute("size",new tn(new Float32Array(this.max),1));const t=new St({uniforms:{uTex:{value:fh()},uScale:{value:window.innerHeight*.5}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC;
        uniform float uScale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * 2.0, t.a); }`,transparent:!0,depthWrite:!1,blending:Zi});this.points=new Kd(e,t),this.points.frustumCulled=!1}emit(e,t,i=30,s=1.5,a={}){const r=new ke(t);for(let o=0;o<i;o++){this.parts.length>=this.max&&this.parts.shift();const c=new R(Math.random()-.5,Math.random()*(a.up??.5)+.2,Math.random()-.5).normalize(),l=a.spread??.3;this.parts.push({pos:e.clone().add(new R((Math.random()-.5)*l,(Math.random()-.5)*l,(Math.random()-.5)*l)),vel:c.multiplyScalar(s*(.4+Math.random()*.8)),life:0,max:(a.life??1)*(.6+Math.random()*.6),color:r.clone().offsetHSL((Math.random()-.5)*.06,0,(Math.random()-.5)*.15),size:(a.size??.09)*(.6+Math.random()*.8)})}this._g=a.gravity??-1.2}update(e){const t=this._g??-1.2,i=this.points.geometry,s=i.attributes.position.array,a=i.attributes.color.array,r=i.attributes.size.array;this.parts=this.parts.filter(o=>(o.life+=e)<o.max);for(let o=0;o<this.max;o++){const c=this.parts[o];if(!c){r[o]=0;continue}c.vel.y+=t*e,c.vel.multiplyScalar(1-e*1.2),c.pos.addScaledVector(c.vel,e),s[o*3]=c.pos.x,s[o*3+1]=c.pos.y,s[o*3+2]=c.pos.z;const l=1-c.life/c.max;a[o*3]=c.color.r*l,a[o*3+1]=c.color.g*l,a[o*3+2]=c.color.b*l,r[o]=c.size*(.4+l*.6)}i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0,this.points.material.uniforms.uScale.value=window.innerHeight*.5}}function w_(n,e){const t=new it,i=new Xt({color:"#c9cde0",metalness:.6,roughness:.3}),s=new Xt({color:"#2a2846",metalness:.5,roughness:.4}),a=new Ul({color:"#d8f7ff",transparent:!0,opacity:.2,roughness:.05,depthWrite:!1}),r=(c,l=1.4)=>qi(new ke(c),l),o=(c,l,u=0,d=0,f=0)=>{const h=new Xe(c,l);return h.position.set(u,d,f),t.add(h),h};switch(n){case"planta":{o(new pt(.3,.24,.5,24),new Xt({color:"#e8e6f2",roughness:.35}),0,.25,0);const c=new Xt({color:"#2fbf86",roughness:.45,emissive:"#0f5a3e",emissiveIntensity:.8}),l=[];for(let d=0;d<11;d++){const f=d/11*Math.PI*2,h=o(new Et(.1,10,8),c,Math.cos(f)*.14,.85+d%3*.1,Math.sin(f)*.14);h.scale.set(.7,3.6,1.3),h.rotation.set(Math.sin(f)*.7,0,-Math.cos(f)*.7),l.push(h)}const u=[0,1,2].map(d=>o(new Et(.07,12,10),r("#7cf7d4",2),Math.cos(d*2.1)*.2,1.3+d*.06,Math.sin(d*2.1)*.2));e.push(d=>{l.forEach((f,h)=>f.rotation.z+=Math.sin(d*1.3+h)*.0015),u.forEach((f,h)=>f.scale.setScalar(1+Math.sin(d*2+h)*.15))});break}case"acuario":{o(new xn(1,.45,.55),s,0,.22,0);const c=o(new xn(.95,.75,.5),a,0,.83,0);c.renderOrder=4;const l=o(new xn(.9,.6,.45),new Pn({color:"#2a7fb0",transparent:!0,opacity:.25,depthWrite:!1}),0,.78,0);l.renderOrder=3;const u=[0,1,2].map(d=>o(new Et(.08,14,10,0,Math.PI*2,0,Math.PI/2),r(["#ff7ad9","#7cf7d4","#a77bff"][d],1.8),-.25+d*.25,.8,0));e.push(d=>u.forEach((f,h)=>{f.position.y=.75+Math.sin(d*.9+h*2)*.12,f.scale.set(1+Math.sin(d*3+h)*.15,1-Math.sin(d*3+h)*.15,1+Math.sin(d*3+h)*.15)}));break}case"lampara":{o(new pt(.22,.28,.12,20),i,0,.06,0),o(new pt(.025,.025,.9,8),i,0,.55,0);const c=o(new Bs(.26,1),r("#ffb37a",1.6),0,1.15,0),l=new Ta("#ffb37a",2.2,4,1.8);l.position.set(0,1.2,.2),t.add(l),e.push(u=>{const d=1+Math.sin(u*1.7)*.08;c.scale.setScalar(d),l.intensity=2+Math.sin(u*1.7)*.4});break}case"estante":{o(new xn(1.1,1.5,.35),s,0,.75,0);for(let c=0;c<3;c++){o(new xn(1.04,.03,.34),i,0,.32+c*.45,.02);for(let l=0;l<4;l++){const u=["#a77bff","#45d4dd","#ff7ad9","#ffd166"][(l+c)%4];(l+c)%3===0?o(new pt(.06,.06,.2,10),r(u,1.3),-.35+l*.23,.45+c*.45,.06):o(new xn(.08,.3,.22),new Xt({color:u,roughness:.6}),-.38+l*.24,.5+c*.45,.04)}}break}case"fuente":{o(new pt(.6,.7,.3,32),i,0,.15,0),o(new pt(.52,.52,.05,32),new Pn({color:"#6fd3ff",transparent:!0,opacity:.55}),0,.3,0),o(new pt(.07,.1,.7,12),i,0,.6,0);const c=o(new Et(.16,20,14),r("#6fd3ff",1.8),0,1.05,0),l=Array.from({length:6},(u,d)=>o(new Et(.04,8,6),r("#d6f4ff",1.2),Math.cos(d)*.3,.35,Math.sin(d)*.3));e.push(u=>{c.position.y=1.05+Math.sin(u*1.4)*.05,l.forEach((d,f)=>{const h=(u*.35+f/6)%1;d.position.y=.35+h*1,d.scale.setScalar(1-h*.7)})});break}case"poster":{const c=document.createElement("canvas");c.width=256,c.height=320;const l=c.getContext("2d");l.strokeStyle="#ffd166",l.lineWidth=6,l.shadowColor="#ffd166",l.shadowBlur=18,l.strokeRect(14,14,228,292),l.beginPath(),l.moveTo(80,70),l.lineTo(176,70),l.lineTo(168,150),l.quadraticCurveTo(128,200,88,150),l.closePath(),l.stroke(),l.beginPath(),l.moveTo(128,185),l.lineTo(128,225),l.moveTo(96,232),l.lineTo(160,232),l.stroke(),l.font="bold 34px sans-serif",l.fillStyle="#ffe9b0",l.textAlign="center",l.fillText("LIGAS",128,280);const u=new Cr(c);u.colorSpace=Qt;const d=o(new Ai(.8,1),new Pn({map:u,transparent:!0,opacity:.85,depthWrite:!1,blending:Zi,side:pn}),0,1.6,0);o(new pt(.3,.35,.15,24),s,0,.08,0),o(new pt(.22,.22,.02,24),r("#ffd166",1.2),0,.17,0),e.push(f=>{d.rotation.y=Math.sin(f*.5)*.4,d.material.opacity=.7+Math.sin(f*6)*.05+(Math.random()<.02?-.4:0)});break}case"movil":{o(new pt(.01,.01,.8,6),i,0,.4,0);const c=o(new Rn(.42,.015,8,48),i,0,0,0);c.rotation.x=Math.PI/2;const l=["#7cf7d4","#ff7ad9","#ffd166","#a77bff"].map((u,d)=>o(new Et(.08,14,10),r(u,1.6),Math.cos(d*1.57)*.42,-.2,Math.sin(d*1.57)*.42));e.push(u=>l.forEach((d,f)=>{const h=u*.6+f*1.57;d.position.set(Math.cos(h)*.42,-.2+Math.sin(u*2+f)*.06,Math.sin(h)*.42)}));break}case"capsula":{o(new pt(.015,.015,.6,6),i,0,.35,0),o(new pt(.2,.2,.08,20),s,0,.04,0);const c=o(new gc(.17,.35,8,16),a,0,-.32,0);c.renderOrder=4;const l=o(new Bs(.09,1),r("#c6a8ff",2.2),0,-.32,0);o(new pt(.2,.2,.08,20),s,0,-.7,0),e.push(u=>{l.rotation.set(u*.8,u*1.1,0),l.scale.setScalar(1+Math.sin(u*3)*.2),t.position.y=1.95+Math.sin(u*.8)*.05});break}case"alfombra":{const c=document.createElement("canvas");c.width=c.height=512;const l=c.getContext("2d"),u=l.createRadialGradient(256,256,150,256,256,256);u.addColorStop(0,"rgba(69,212,221,0)"),u.addColorStop(.6,"rgba(69,212,221,0.25)"),u.addColorStop(.95,"rgba(120,90,255,0.35)"),u.addColorStop(1,"rgba(120,90,255,0)"),l.fillStyle=u,l.fillRect(0,0,512,512),l.fillStyle="#e8fbff";for(let h=0;h<160;h++){const g=Math.random()*Math.PI*2,v=170+Math.random()*80;l.globalAlpha=.4+Math.random()*.6,l.fillRect(256+Math.cos(g)*v,256+Math.sin(g)*v,2,2)}l.globalAlpha=.5,l.strokeStyle="#9ff6ff",l.lineWidth=1.5;for(let h=0;h<6;h++)l.beginPath(),l.arc(256,256,180+h*12,h,h+1.6),l.stroke();const d=new Cr(c);d.colorSpace=Qt;const f=o(new Ai(6,6),new Pn({map:d,transparent:!0,depthWrite:!1,blending:Zi}),0,.004,0);f.rotation.x=-Math.PI/2,e.push(h=>f.rotation.z=h*.03);break}case"hongos":{const c=new Xt({color:"#e9e4d0",roughness:.6}),l=[];for(let u=0;u<9;u++){const d=Math.PI+.25+u/8*(Math.PI-.5)+Math.sin(u*7)*.08,f=2+Math.sin(u*3.3)*.2,h=.6+u*37%10/14,g=.18*h;o(new pt(.03*h,.04*h,g,8),c,Math.cos(d)*f,g/2,Math.sin(d)*f);const v=o(new Et(.1*h,14,8,0,Math.PI*2,0,Math.PI/2),r(u%3?"#b6ff6a":"#7cf7d4",1.4),Math.cos(d)*f,g,Math.sin(d)*f);l.push(v)}e.push(u=>l.forEach((d,f)=>d.scale.setScalar(1+Math.sin(u*1.5+f)*.06)));break}default:return null}return t}const E_=`
uniform float uTime; uniform float uDim; uniform vec3 uFloorC; uniform vec3 uNeonA; uniform vec3 uNeonB;
varying vec3 vW;
${is}
void main(){
  float r = length(vW.xz);
  vec3 c = mix(uFloorC, uFloorC * 0.3, smoothstep(1.5, 9.0, r));
  // Juntas de baldosas
  vec2 g = abs(fract(vW.xz * 0.5) - 0.5);
  float line = smoothstep(0.49, 0.5, max(g.x, g.y));
  c += uNeonB * 0.8 * line * 0.08 * smoothstep(9.0, 2.0, r);
  // Reflejo de la plataforma
  c += uNeonB * smoothstep(3.0, 1.5, r) * 0.08;
  // Anillos guía animados
  float ring = smoothstep(0.04, 0.0, abs(r - 2.35 - sin(uTime*0.6)*0.05));
  c += mix(uNeonB, vec3(1.0), 0.15) * ring * 0.25;
  c *= mix(0.5, 1.0, uDim);
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,T_=`
uniform float uTime; uniform float uDim; uniform vec3 uWallC; uniform vec3 uNeonA; uniform vec3 uNeonB;
varying vec3 vW; varying vec2 vUv;
${is}
void main(){
  float a = atan(vW.x, -vW.z);
  float y = vW.y;
  vec3 c = mix(uWallC * 0.55, uWallC, smoothstep(-0.5, 4.0, y));
  // Paneles
  float px = fract(a * 4.0);
  float panel = smoothstep(0.0, 0.02, px) * smoothstep(1.0, 0.98, px);
  c *= 0.85 + 0.15 * panel;
  // Tiras de luz neón
  float strip = smoothstep(0.03, 0.0, abs(px - 0.5)) * smoothstep(0.2, 0.6, y) * smoothstep(4.5, 3.6, y);
  vec3 neon = mix(uNeonA, uNeonB, 0.5 + 0.5 * sin(a * 3.0));
  c += neon * strip * (0.8 + 0.2 * sin(uTime * 1.3 + a * 5.0));
  // Franja inferior luminosa
  c += uNeonB * smoothstep(0.06, 0.0, abs(y - 0.12)) * 0.8;
  // Ventana circular con paisaje alienígena
  vec2 wc = vec2(a - 0.0, y - 3.0);
  float wr = length(wc * vec2(3.2, 1.0));
  if (wr < 1.25) {
    vec2 uv = wc * vec2(3.2, 1.0) / 1.25;
    vec3 sky = mix(vec3(0.95,0.55,0.75), vec3(0.25,0.2,0.6), smoothstep(-0.3, 0.9, uv.y));
    float moon = smoothstep(0.17, 0.15, length(uv - vec2(0.35, 0.45)));
    sky = mix(sky, vec3(1.0,0.92,0.95), moon);
    sky += vec3(1.0) * step(0.997, fract(sin(dot(floor(uv*80.0), vec2(12.9898,78.233)))*43758.5453)) * smoothstep(0.0, 0.6, uv.y);
    float m1 = -0.15 + 0.25 * fbm(vec3(uv.x * 2.0, 0.0, 1.0));
    float m2 = -0.4 + 0.2 * fbm(vec3(uv.x * 3.5, 4.0, 2.0));
    sky = mix(sky, vec3(0.35,0.22,0.55), step(uv.y, m1));
    sky = mix(sky, vec3(0.18,0.12,0.35), step(uv.y, m2));
    float rim = smoothstep(1.13, 1.2, wr);
    c = mix(sky * 0.85, vec3(0.35,0.36,0.5), rim);
    c += vec3(0.3,0.8,0.9) * smoothstep(1.25, 1.2, wr) * smoothstep(1.17, 1.22, wr) * 0.5;
  }
  c *= mix(0.45, 1.0, uDim);
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,A_=`
uniform float uTime; uniform float uPower;
varying vec3 vW; varying vec3 vN; varying vec3 vV;
${is}
void main(){
  vec3 n = normalize(vN); vec3 v = normalize(vV);
  float fres = pow(1.0 - abs(dot(n, v)), 2.0);
  vec3 vo = voronoi(vec3(vW.x * 4.0, vW.y * 3.0 - uTime * 0.6, vW.z * 4.0));
  float bub = smoothstep(0.12, 0.05, vo.x) * step(0.7, vo.z);
  vec3 c = mix(vec3(0.1,0.65,0.8), vec3(0.4,1.0,1.0), fres) * (0.6 + 0.4 * uPower);
  c += bub * vec3(0.8,1.0,1.0) * 0.8;
  c += vec3(0.2,0.9,1.0) * (0.5 + 0.5 * sin(vW.y * 6.0 - uTime * 2.0)) * 0.08;
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  gl_FragColor = vec4(c * (0.8 + uPower * 0.8), 0.42 + fres * 0.35);
  #include <colorspace_fragment>
}`,Oo=`
varying vec3 vW; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vV = cameraPosition - w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;class C_{constructor(e){le(this,"scene",new hc);le(this,"camera",new jt(40,1,.05,80));le(this,"main");le(this,"partner");le(this,"bursts",new mh);le(this,"motes");le(this,"floorMat");le(this,"wallMat");le(this,"liquidMat");le(this,"tankGroup",new it);le(this,"tankSlot",new it);le(this,"platform",new it);le(this,"ringMat");le(this,"lights",[]);le(this,"goo",[]);le(this,"gooGroup",new it);le(this,"camMode","home");le(this,"yaw",0);le(this,"camPos",new R(0,2,6));le(this,"camLook",new R(0,.8,0));le(this,"dim",1);le(this,"dimCur",1);le(this,"embryo",!1);le(this,"tankPower",.4);le(this,"camOffsetY",0);le(this,"presentYaw",.55);le(this,"themeU",{floor:{value:new R(.1,.09,.2)},wall:{value:new R(.13,.1,.26)},a:{value:new R(.42,.3,.95)},b:{value:new R(.27,.85,.95)}});le(this,"violetLight");le(this,"decorGroup",new it);le(this,"decorAnim",[]);le(this,"decorKey","");const t=this.scene;t.background=new ke("#0b0a1a"),t.fog=new dc("#0b0a1a",9,22);const i=new ih("#8a85ff","#1a1430",.9),s=new ah("#fff3ea",1.8);s.position.set(3,6,4);const a=new Ta("#45d4dd",6,7,1.6);a.position.set(2.6,1.6,-1.2);const r=new Ta("#8a5cff",5,9,1.6);r.position.set(-3,2.5,-1),this.violetLight=r,this.lights.push(i,s,a,r),t.add(i,s,a,r),ch(new R(3,6,4)),this.floorMat=new St({uniforms:{uTime:fn.uTime,uDim:fn.uDim,uFloorC:this.themeU.floor,uNeonA:this.themeU.a,uNeonB:this.themeU.b},vertexShader:Oo,fragmentShader:E_});const o=new Xe(new zs(14,64),this.floorMat);o.rotation.x=-Math.PI/2,t.add(o),this.wallMat=new St({uniforms:{uTime:fn.uTime,uDim:fn.uDim,uWallC:this.themeU.wall,uNeonA:this.themeU.a,uNeonB:this.themeU.b},vertexShader:Oo,fragmentShader:T_,side:Kt});const c=new Xe(new pt(7.5,7.5,6,64,1,!0,Math.PI*.32,Math.PI*1.36),this.wallMat);c.position.set(0,3,.5),t.add(c);const l=new Xe(new _c(1.2,3.2,64),new Pn({color:"#5fd6e6",side:pn,transparent:!0,opacity:.06}));l.rotation.x=Math.PI/2,l.position.y=5.2,t.add(l);const u=new Xt({color:"#c9cde0",metalness:.6,roughness:.28}),d=new Xt({color:"#2a2846",metalness:.5,roughness:.4}),f=new Xe(new pt(1.75,1.9,.22,64),u);f.position.y=-.11;const h=new Xe(new pt(1.55,1.55,.02,64),d);h.position.y=0,this.ringMat=new Xt({color:"#45d4dd",emissive:"#45d4dd",emissiveIntensity:1.2});const g=new Xe(new Rn(1.62,.025,8,96),this.ringMat);g.rotation.x=Math.PI/2,g.position.y=.01;const v=new Xe(new Rn(1.84,.018,8,96),this.ringMat);v.rotation.x=Math.PI/2,v.position.y=-.12,this.platform.add(f,h,g,v),this.platform.position.y=0,t.add(this.platform),this.buildTank(u,d),this.buildDecor(u),this.main=new Pr(this.platform,e),this.partner=new Pr(t,e),this.partner.anchor.position.set(-2.4,0,.8),this.partner.anchor.visible=!1,this.motes=new ph(e==="alta"?140:60,new R(12,5,8),new R(0,0,-1),new ke("#8ef6ff"),.05),t.add(this.motes.points),t.add(this.bursts.points),t.add(this.gooGroup),this.platform.add(this.gooGroup),t.add(this.decorGroup)}setTheme(e){const t=(i,s,a=1)=>{const r=parseInt(i.slice(1),16);s.set((r>>16&255)/255*a,(r>>8&255)/255*a,(r&255)/255*a)};t(e.floor,this.themeU.floor.value,.9),t(e.wall,this.themeU.wall.value),t(e.neonA,this.themeU.a.value),t(e.neonB,this.themeU.b.value),this.violetLight.color.set(e.neonA)}setDecor(e){const t=JSON.stringify(e);if(t===this.decorKey)return;this.decorKey=t;for(const s of[...this.decorGroup.children])this.decorGroup.remove(s),s.traverse(a=>{const r=a;r.geometry&&r.geometry.dispose()});this.decorAnim=[];const i={izq:[-1.35,0,-1.85],der:[1.4,0,-2.1],fondo:[0,0,-3.3],techo:[-.95,1.95,-1.3],suelo:[0,0,0]};for(const[s,a]of Object.entries(e)){const r=w_(a,this.decorAnim);if(!r)continue;const o=i[s]??[0,0,0];r.position.set(o[0],o[1],o[2]),s==="izq"&&(r.rotation.y=.45),s==="der"&&(r.rotation.y=-.45),(s==="izq"||s==="der")&&r.scale.setScalar(.8),this.decorGroup.add(r)}}buildTank(e,t){const i=this.tankGroup;i.position.set(2.9,0,-1.6);const s=new Xe(new pt(.85,.95,.4,40),t);s.position.y=.2;const a=new Xe(new pt(.9,.82,.35,40),t);a.position.y=2.75;const r=new Xt({color:"#45d4dd",emissive:"#45d4dd",emissiveIntensity:2}),o=new Xe(new Rn(.86,.03,8,48),r);o.rotation.x=Math.PI/2,o.position.y=.42;const c=o.clone();c.position.y=2.56,this.liquidMat=new St({uniforms:{uTime:fn.uTime,uPower:{value:.4}},vertexShader:Oo,fragmentShader:A_,transparent:!0,depthWrite:!1,side:pn});const l=new Xe(new pt(.75,.75,2.1,40,1,!0),this.liquidMat);l.position.y=1.5,l.renderOrder=3;const u=new Xe(new pt(.8,.8,2.2,40,1,!0),new Ul({color:"#bff6ff",metalness:0,roughness:.05,transparent:!0,opacity:.18,depthWrite:!1}));u.position.y=1.5,u.renderOrder=4;const d=new Xe(new Rn(.6,.06,10,30,Math.PI),e);d.position.set(0,3,0),d.rotation.y=Math.PI/2,i.add(s,a,o,c,l,u,d),this.tankSlot.position.set(0,.95,0),i.add(this.tankSlot);const f=new Xe(new xn(.5,.8,.12),t);f.position.set(-.95,.6,.35),f.rotation.y=.5;const h=new Xe(new Ai(.38,.5),new Pn({color:"#45d4dd",transparent:!0,opacity:.85}));h.position.set(-.92,.65,.42),h.rotation.y=.5,i.add(f,h),this.scene.add(i)}buildDecor(e){const t=new Xt({color:"#3fae7a",roughness:.5,emissive:"#0c3a2a",emissiveIntensity:.6}),i=new Xt({color:"#e8e6f2",roughness:.35,metalness:.1}),s=(r,o,c)=>{const l=new it,u=new Xe(new pt(.28,.22,.45,24),i);u.position.y=.22,l.add(u);for(let f=0;f<9;f++){const h=new Xe(new Et(.1,10,8),t);h.scale.set(.6,3.2,1.2);const g=f/9*Math.PI*2;h.position.set(Math.cos(g)*.12,.75+f%3*.08,Math.sin(g)*.12),h.rotation.set(Math.sin(g)*.6,0,-Math.cos(g)*.6),l.add(h)}const d=new Xe(new Et(.06,10,8),qi(new ke("#ff7ad9"),1.8));d.position.y=1.15,l.add(d),l.position.set(r,0,o),l.scale.setScalar(c),this.scene.add(l)};s(-3.4,-2.2,1.2),s(-4.2,-.6,.9),s(4.3,.6,.8);const a=new Ul({color:"#d8f7ff",transparent:!0,opacity:.22,roughness:.05,depthWrite:!1});for(const[r,o,c]of[[-2.4,-3.2,"#a77bff"],[-1.6,-3.6,"#45d4dd"],[1.4,-3.8,"#ff7ad9"]]){const l=new it,u=new Xe(new pt(.32,.36,.7,20),e);u.position.y=.35;const d=new Xe(new pt(.25,.25,.5,20),a);d.position.y=.95;const f=new Xe(new Bs(.11,1),qi(new ke(c),1.3));f.position.y=.92,l.add(u,d,f),l.position.set(r,0,o),this.scene.add(l)}}setGoo(e){for(;this.goo.length<e;){const t=new Xe(new Et(.13,16,10,0,Math.PI*2,0,Math.PI/2),new Xt({color:"#9be36b",emissive:"#4a8a20",emissiveIntensity:.6,roughness:.15,transparent:!0,opacity:.9})),i=Math.random()*Math.PI*2,s=.8+Math.random()*.55;t.position.set(Math.cos(i)*s,0,Math.sin(i)*s),t.scale.set(1+Math.random()*.5,.6,1+Math.random()*.3),t.userData.goo=!0,this.gooGroup.add(t),this.goo.push(t)}for(;this.goo.length>e;){const t=this.goo.pop();this.gooGroup.remove(t),t.geometry.dispose()}}gooMeshes(){return this.goo}removeGooMesh(e){const t=this.goo.indexOf(e);if(t>=0){const i=new R;e.getWorldPosition(i),this.bursts.emit(i,"#bff58a",18,1.4),this.goo.splice(t,1),this.gooGroup.remove(e)}}setCam(e){this.camMode=e}drag(e){this.yaw+=e*.008}setEmbryo(e){this.embryo=e;const t=this.main.anchor;e?(this.tankSlot.add(t),t.position.set(0,0,0),t.scale.setScalar(.8),this.main.shadow.visible=!1):(this.platform.add(t),t.position.set(0,0,0),t.scale.setScalar(1),this.main.shadow.visible=!0)}update(e,t){this.main.update(e),this.partner.anchor.visible&&this.partner.update(e),this.bursts.update(e),this.motes.update(t),this.dimCur+=(this.dim-this.dimCur)*Math.min(1,e*2),fn.uDim.value=this.dimCur,this.lights.forEach((l,u)=>l.intensity=[.9,1.8,6,5][u]*(.35+.65*this.dimCur)),this.ringMat.emissiveIntensity=1+Math.sin(t*1.5)*.25,this.liquidMat.uniforms.uPower.value+=(this.tankPower-this.liquidMat.uniforms.uPower.value)*Math.min(1,e*3),this.embryo&&(this.main.anchor.position.y=Math.sin(t*1.2)*.06,this.main.anchor.rotation.y+=e*.25),this.main.rig&&this.main.anim&&!this.main.anim.allowWander&&!this.embryo&&(this.main.rig.root.rotation.y=this.presentYaw);for(const l of this.decorAnim)l(t);for(const l of this.goo)l.scale.y=.6+Math.sin(t*3+l.position.x*5)*.06;const i=Math.max(.6,this.main.height),s=Math.max(.5,this.main.rig?.radius??.8);let a,r;const o=(l,u,d,f)=>{const h=Ht.degToRad(this.camera.fov)/2,g=Math.atan(Math.tan(h)*this.camera.aspect),v=Math.max(i/l/2/Math.tan(h),s*2/u/2/Math.tan(g),2.2),p=2*v*Math.tan(h),m=new R(0,i*.5-d*p,0),y=new R(Math.sin(this.yaw)*Math.cos(f),Math.sin(f),Math.cos(this.yaw)*Math.cos(f));return{pos:m.clone().addScaledVector(y,v),look:m}};switch(this.camMode){case"editor":({pos:a,look:r}=o(.42,.75,.1,.16));break;case"close":({pos:a,look:r}=o(.4,.78,.13,.18));break;case"tank":{a=new R(.9,1.75,4.9),r=new R(2.9,1.5,-1.6);break}case"wide":{const l=this.camera.aspect,u=l<1?9.5/Math.max(.45,l)*.55:7.5;a=new R(-1.1,2.6,u),r=new R(-1.1,l<1?-.2:.8,0);break}default:({pos:a,look:r}=o(.46,.82,.03,.22))}a.y+=this.camOffsetY,r.y+=this.camOffsetY;const c=Math.min(1,e*3.5);this.camPos.lerp(a,c),this.camLook.lerp(r,c),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}}const P_=`
uniform float uTime;
varying vec3 vW;
${is}
void main(){
  float r = length(vW.xz);
  float n = fbm(vW * 0.6);
  vec3 c = mix(vec3(0.16,0.09,0.24), vec3(0.28,0.16,0.36), n * 0.5 + 0.5);
  float rock = snoise(vW * 2.2) * 0.5 + 0.5;
  c *= 0.8 + 0.3 * rock;
  // Grietas luminosas
  float crack = 1.0 - abs(snoise(vW * 0.45 + vec3(3.0)));
  crack = smoothstep(0.93, 0.995, crack);
  vec3 glowC = mix(vec3(0.9,0.3,0.95), vec3(0.3,0.9,1.0), smoothstep(-6.0, 6.0, vW.x));
  c += glowC * crack * (0.9 + 0.3 * sin(uTime * 1.7 + vW.x));
  c = mix(c, vec3(0.05,0.03,0.12), smoothstep(6.0, 18.0, r));
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,R_=`
uniform float uTime;
varying vec3 vW;
${is}
void main(){
  vec3 d = normalize(vW);
  vec3 c = mix(vec3(0.05,0.03,0.12), vec3(0.22,0.12,0.38), smoothstep(-0.1, 0.5, d.y));
  c += vec3(0.55,0.25,0.7) * pow(max(0.0, 1.0 - abs(d.y - 0.12) * 4.0), 3.0) * 0.4;
  float neb = fbm(d * 3.0 + vec3(0.0, 0.0, uTime * 0.01));
  c += vec3(0.35,0.3,0.8) * smoothstep(0.1, 0.7, neb) * 0.25 * smoothstep(0.0, 0.4, d.y);
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,Ku="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }";class L_{constructor(e){le(this,"scene",new hc);le(this,"camera",new jt(40,1,.05,120));le(this,"a");le(this,"b");le(this,"bursts",new mh);le(this,"motes");le(this,"shake",0);le(this,"camPos",new R(0,3,9));le(this,"camLook",new R(0,1,0));le(this,"focus",null);le(this,"viewY",.1);le(this,"fracV",.36);le(this,"intro",0);le(this,"padMats",[]);const t=this.scene;t.fog=new uc("#12091f",.045),t.background=new ke("#0d0718");const i=new Xe(new Et(60,32,16),new St({uniforms:{uTime:fn.uTime},vertexShader:Ku,fragmentShader:R_,side:Kt,fog:!1,depthWrite:!1}));t.add(i);const s=new ih("#a68cff","#2a1438",1),a=new ah("#ffe9f4",1.4);a.position.set(-2,7,5);const r=new Ta("#ff5fd2",10,14,1.5);r.position.set(-5,2,-3);const o=new Ta("#45e0ff",10,14,1.5);o.position.set(5,2,-2),t.add(s,a,r,o),ch(new R(-2,7,5));const c=new Xe(new zs(30,64),new St({uniforms:{uTime:fn.uTime},vertexShader:Ku,fragmentShader:P_}));c.rotation.x=-Math.PI/2,t.add(c);const l=new Xt({color:"#3a2552",roughness:.9,flatShading:!0}),u=(g,v)=>g+Math.random()*(v-g),d=(g,v,p,m=1)=>{const y=new Bs(1,1),_=y.attributes.position;for(let P=0;P<_.count;P++){const b=.75+Math.random()*.45;_.setXYZ(P,_.getX(P)*b,_.getY(P)*b,_.getZ(P)*b)}y.computeVertexNormals();const x=new Xe(y,l);x.position.set(g,p*m*.4,v),x.scale.set(p,p*m,p),x.rotation.set(u(0,3),u(0,3),u(0,3)),t.add(x)};for(let g=0;g<16;g++){const v=g/16*Math.PI*2+u(-.1,.1),p=u(9,14);Math.sin(v)>.55||d(Math.cos(v)*p,Math.sin(v)*p,u(1.5,3.2),u(1,2.2))}const f=new Xe(new Rn(6.5,1.1,10,28,Math.PI),l);f.position.set(0,0,-9),f.scale.set(1,1.1,.8),t.add(f);const h=["#ff5fd2","#45e0ff","#a77bff","#7cf7d4"];for(let g=0;g<22;g++){const v=u(0,Math.PI*2),p=u(4.5,10);if(Math.sin(v)>.6&&p<7)continue;const m=new it,y=new ke(h[g%h.length]),_=qi(y,u(.9,1.5),.92);for(let x=0;x<3;x++){const P=u(.4,1.4),b=new Vr(u(.1,.22),P,5);b.translate(0,P/2,0);const T=new Xe(b,_);T.rotation.set(u(-.5,.5),u(0,3),u(-.5,.5)),m.add(T)}m.position.set(Math.cos(v)*p,0,Math.sin(v)*p),t.add(m)}for(const g of[-1.9,1.9]){const v=new Xt({color:g<0?"#45d4dd":"#ff5f8a",emissive:g<0?"#45d4dd":"#ff5f8a",emissiveIntensity:1.6});this.padMats.push(v);const p=new Xe(new Rn(1.05,.03,8,64),v);p.rotation.x=Math.PI/2,p.position.set(g,.02,0);const m=new Xe(new zs(1.05,48),new Pn({color:g<0?"#1a4a5a":"#5a1a3a",transparent:!0,opacity:.35,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(g,.015,0),t.add(p,m)}this.a=new Pr(t,e),this.b=new Pr(t,e),this.a.anchor.position.set(-1.9,0,0),this.b.anchor.position.set(1.9,0,0),this.motes=new ph(e==="alta"?160:70,new R(18,6,12),new R(0,0,-2),new ke("#ff9ff0"),.07),t.add(this.motes.points,this.bursts.points)}faceOff(){this.a.rig&&(this.a.rig.root.rotation.y=Math.PI/2-.45),this.b.rig&&(this.b.rig.root.rotation.y=-Math.PI/2+.45);const e=this.a.rig?.radius??1,t=this.b.rig?.radius??1,i=Math.max(1.6,(e+t)*.85);this.a.anchor.position.x=-i*.5-.6,this.b.anchor.position.x=i*.5+.6}doShake(e=.25){this.shake=Math.max(this.shake,e)}update(e,t){this.a.update(e),this.b.update(e),this.bursts.update(e),this.motes.update(t),this.padMats.forEach((p,m)=>p.emissiveIntensity=1.4+Math.sin(t*2+m*2)*.4),this.a.anim&&(this.a.anim.lookTarget=this.b.headWorld()),this.b.anim&&(this.b.anim.lookTarget=this.a.headWorld());const i=Math.max(this.a.height,this.b.height,.8),s=this.a.anchor.position.x-(this.a.rig?.radius??.8),a=this.b.rig?this.b.anchor.position.x+this.b.rig.radius:this.a.anchor.position.x+1.6,r=a-s,o=(s+a)/2,c=Ht.degToRad(this.camera.fov)/2,l=Math.atan(Math.tan(c)*this.camera.aspect),u=Math.max(i/this.fracV/2/Math.tan(c),r/.92/2/Math.tan(l),3),d=2*u*Math.tan(c);let f=new R(o,i*.5-this.viewY*d,0);const h=.2;let g=f.clone().add(new R(0,Math.sin(h)*u,Math.cos(h)*u));if(this.intro>0){this.intro=Math.max(0,this.intro-e*.5);const p=this.intro;g=g.clone().add(new R(Math.sin(p*2)*4,p*2,p*3))}if(this.focus!==null){const p=this.focus===0?this.a.anchor.position.x:this.b.anchor.position.x;g.x+=p*.25,f.x+=p*.35}const v=Math.min(1,e*3);this.camPos.lerp(g,v),this.camLook.lerp(f,v),this.camera.position.copy(this.camPos),this.shake>0&&(this.camera.position.add(new R((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake,0)),this.shake=Math.max(0,this.shake-e*1.5)),this.camera.lookAt(this.camLook)}}const gh="anima.save.v1";function Sc(){const n=Date.now();return{version:1,createdAt:n,lastTick:n,creatures:[],activeId:null,credits:120,mutagens:1,inventory:{algas:4,proteina:2,golosina:2,cristal:1,medicina:1},league:{unlocked:0,defeated:[]},genePool:[],settings:{sound:!0,music:!0,quality:D_()},tutorial:{},stats:{battles:0,wins:0,bred:0,trained:0,mutations:0,expeditions:0,pets:0,feeds:0,cleans:0,teamWins:0,onlineWins:0,cards:0},codex:{parts:{},species:[],mutations:[],essences:[],tempers:[]},achievements:{},daily:{day:"",missions:[],streak:0,lastLogin:"",loginClaimed:!1},decor:{owned:[],placed:{},theme:"neon"},team:[],online:{playerId:"",secret:"",rating:1e3,wins:0,losses:0,lastUpload:0,nick:""}}}function D_(){if(typeof navigator>"u")return"alta";const n=navigator.deviceMemory,e=navigator.hardwareConcurrency||4;return n!==void 0&&n<4||e<=4?"baja":"alta"}function vh(n){const e=Sc(),t={...e,...n};return t.settings={...e.settings,...n.settings||{}},t.stats={...e.stats,...n.stats||{}},t.league={...e.league,...n.league||{}},t.inventory={...n.inventory||e.inventory},t.codex={...e.codex,...n.codex||{}},t.achievements={...n.achievements||{}},t.daily={...e.daily,...n.daily||{}},t.decor={...e.decor,...n.decor||{}},t.team=Array.isArray(n.team)?n.team:[],t.online={...e.online,...n.online||{}},t.creatures=(n.creatures||[]).map(i=>({...i,genome:o_(i.genome||{}),mutations:i.mutations||[],loadout:i.loadout||[]})),t}let L=I_();function I_(){try{const n=typeof localStorage<"u"?localStorage.getItem(gh):null;if(n)return vh(JSON.parse(n))}catch(n){console.warn("No se pudo leer la partida",n)}return Sc()}let ko;function Dt(){if(!(typeof localStorage>"u"))try{localStorage.setItem(gh,JSON.stringify(L))}catch(n){console.warn("No se pudo guardar",n)}}function It(){ko!==void 0||typeof window>"u"||(ko=window.setTimeout(()=>{ko=void 0,Dt()},400))}function N_(n){L=vh(n),Dt()}function xh(){L=Sc(),Dt()}function nn(){return L.creatures.find(n=>n.id===L.activeId)||null}function U_(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)}function F_(){return btoa(unescape(encodeURIComponent(JSON.stringify(L))))}function O_(n){try{const e=JSON.parse(decodeURIComponent(escape(atob(n.trim()))));return!e||!Array.isArray(e.creatures)?!1:(N_(e),!0)}catch{return!1}}const Aa={racion:{id:"racion",name:"Ración básica",desc:"Pasta nutritiva del laboratorio. Siempre disponible.",price:0,kind:"comida",hambre:14,animo:-2,color:"#b8a98a"},algas:{id:"algas",name:"Néctar de algas",desc:"Dulce y ligero. Sube el ánimo.",price:10,kind:"comida",hambre:25,animo:5,xp:2,color:"#59d8a4"},proteina:{id:"proteina",name:"Proteína cultivada",desc:"Muy nutritiva. Da experiencia extra.",price:18,kind:"comida",hambre:42,energia:5,xp:6,color:"#ff9f6b"},cristal:{id:"cristal",name:"Cristal energético",desc:"Recarga energía de inmediato.",price:24,kind:"comida",hambre:8,energia:38,xp:2,color:"#6fd3ff"},golosina:{id:"golosina",name:"Golosina estelar",desc:"Un capricho. ¡Le encanta!",price:14,kind:"comida",hambre:8,animo:28,xp:2,color:"#ff7ad9"},medicina:{id:"medicina",name:"Suero curativo",desc:"Cura enfermedades y recupera salud.",price:40,kind:"medicina",salud:45,color:"#f1b766"},mutageno:{id:"mutageno",name:"Mutágeno",desc:"Permite inducir una mutación en el editor de evolución.",price:130,kind:"especial",color:"#a77bff"},tinte:{id:"tinte",name:"Tinte genético",desc:"Permite cambiar colores y patrón de tu ANIMA.",price:60,kind:"especial",color:"#45d4dd"}},k_=["algas","proteina","cristal","golosina","medicina","mutageno","tinte"],Un=["fue","vel","res","int","ada"],ji={fue:"Fuerza",vel:"Velocidad",res:"Resistencia",int:"Inteligencia",ada:"Adaptación"},yt=[{id:0,name:"Bioluz",color:"#7cf7d4",desc:"Luz viva que disipa la sombra."},{id:1,name:"Sombra",color:"#8a6cff",desc:"Oscuridad que confunde la mente."},{id:2,name:"Psique",color:"#ff7ad9",desc:"Mente que domina la energía."},{id:3,name:"Voltaje",color:"#ffd166",desc:"Energía que quiebra el cristal."},{id:4,name:"Cristal",color:"#6fd3ff",desc:"Estructura que purifica toxinas."},{id:5,name:"Toxina",color:"#a6e35a",desc:"Veneno que marchita la luz."}];function yn(n,e){return(n+1)%6===e?1.5:(e+1)%6===n?.7:1}function z_(n){const e=[0,0,0,0,0,0],[t,i,s,a,r,o]=[0,1,2,3,4,5],c=[[[o,2]],[[r,2]],[[r,1],[a,1]],[[i,2]],[[s,1],[o,1]],[[t,1],[o,1]],[[t,3]],[[a,3]]];for(const[u,d]of c[n.material])e[u]+=d;const l=Vs(n);return l>=4&&(e[s]+=l>=6?2:1),n.eyes===4&&(e[t]+=1),n.eyes===5&&(e[s]+=2),n.eyes===2&&(e[a]+=1),n.horns===1&&(e[a]+=1),n.horns===3&&(e[i]+=1),n.spines===3&&(e[r]+=2),n.tail===3&&(e[t]+=1),n.tail===5&&(e[o]+=2),n.mouth===5&&(e[o]+=1),n.mouth===4&&(e[i]+=1),n.body===3&&(e[s]+=1,e[t]+=1),n.body===2&&(e[i]+=1),n.body===4&&(e[r]+=1),n.wings===1&&(e[i]+=1),n.wings===2&&(e[s]+=1),n.light<90&&(e[i]+=1),n.light>200&&(e[t]+=1),e}function dt(n){const e=z_(n),t=Math.max(...e),i=e.map((s,a)=>s===t?a:-1).filter(s=>s>=0);return i[Math.floor(n.hueGlow/256*i.length)]}const B_=[{fue:3,vel:3},{fue:3,res:3},{vel:3,ada:3},{int:4,ada:2},{res:6,vel:-2},{fue:2,res:2,vel:2}],G_=[{ada:2,int:1},{fue:2,vel:1},{vel:1,fue:1},{ada:3},{res:3},{int:3}],H_=[{ada:1},{fue:1,vel:1},{vel:2},{int:1,ada:1},{int:2},{int:3}],V_=[{ada:1,int:1},{fue:3},{fue:1,vel:1},{fue:2,res:1},{ada:2},{int:1,ada:1}],$_=[{vel:4},{fue:2,res:2},{ada:3,int:1},{vel:2,ada:1},{fue:4},{ada:2,vel:1}],W_=[{},{vel:3},{vel:3,int:1},{ada:2,vel:1},{ada:2},{int:2,ada:1}],q_=[{},{vel:2},{fue:2,res:1},{int:2},{ada:2},{fue:2}],X_=[{},{int:2},{fue:3},{res:2,ada:1},{fue:4,vel:-1},{ada:1,fue:1}],j_=[{},{res:2},{res:4,vel:-1},{int:1,res:2},{ada:3},{res:3}],Y_=[{ada:2},{res:3},{res:3,fue:1},{ada:2,res:1},{int:2,vel:1},{ada:4,res:-1},{int:3},{res:3,fue:1}];function _h(n){const e={fue:10,vel:10,res:10,int:10,ada:10},t=r=>{for(const o in r)e[o]+=r[o]};t(B_[n.body]),t(G_[n.head]),t(H_[n.eyes]),t(V_[n.mouth]),t($_[n.limbs]),t(W_[n.wings]),t(q_[n.tail]),t(X_[n.horns]),t(j_[n.spines]),t(Y_[n.material]),e.int+=Vs(n)-2;const i=As(n);e.res+=i-1,i===2&&(e.vel+=1);const s=n.size/255-.5;e.fue+=Math.round(s*8),e.res+=Math.round(s*6),e.vel-=Math.round(s*6),e.vel+=Math.round((n.limbLength/255-.5)*6),e.int+=Math.round((n.headSize/255-.5)*4),e.res+=Math.round((n.girth/255-.5)*6),e.vel-=Math.round((n.girth/255-.5)*4);const a=Xi(n).stats;for(const r of Object.keys(e))e[r]=Math.max(4,Math.round(e[r]*(a[r]??1)));return e}function Fn(n){const e=["Velo","Kri","Nyx","Aru","Zel","Mor","Ilu","Tess","Vra","Oru","Syl","Quen"],t=["dra","mi","ther","lo","vix","nae","rok","phi","sa","lum","tor","zi"],i=["don","ria","pex","lis","mon","thra","nox","vel","ra","quis","tan","or"],s=(n.body*7+n.head*3+n.material)%e.length,a=(n.limbs*5+n.tail*2+n.eyes+n.wings)%t.length,r=(n.horns*3+n.spines*5+n.mouth+n.pattern)%i.length;return e[s]+t[a]+i[r]}const zo={veneno:{name:"Veneno",good:!1,color:"#a6e35a"},sangrado:{name:"Herida",good:!1,color:"#ff6b81"},aturdido:{name:"Aturdido",good:!1,color:"#ffd166"},cegado:{name:"Cegado",good:!1,color:"#c9c9ff"},enredado:{name:"Atrapado",good:!1,color:"#ff9f6b"},escudo:{name:"Escudo",good:!0,color:"#6fd3ff"},regen:{name:"Regeneración",good:!0,color:"#7cf7d4"},atqUp:{name:"Ataque +",good:!0,color:"#ff9f43"},atqDown:{name:"Ataque −",good:!1,color:"#b07a50"},defUp:{name:"Defensa +",good:!0,color:"#54a0ff"},defDown:{name:"Defensa −",good:!1,color:"#7a6a9a"},evasion:{name:"Evasión",good:!0,color:"#e0e0ff"},furia:{name:"Furia",good:!0,color:"#ff4757"},lesion:{name:"Lesión",good:!1,color:"#ff6b6b"},concentrado:{name:"Concentrado",good:!0,color:"#f1b766"}},Ge=n=>n,Lt=Object.fromEntries([Ge({id:"placaje",name:"Placaje",desc:"Golpe básico con el cuerpo.",kind:"fis",power:38,cost:0,acc:.95,part:"Base"}),Ge({id:"concentrar",name:"Concentrar",desc:"Recupera 3 de energía y asegura un crítico.",kind:"sup",power:0,cost:0,acc:1,part:"Base",effects:[{type:"energy",target:"self",value:3},{type:"concentrado",target:"self",turns:2}]}),Ge({id:"carrera",name:"Carrera veloz",desc:"Ataca primero y gana evasión.",kind:"fis",power:40,cost:2,acc:1,part:"Patas ágiles",priority:1,effects:[{type:"evasion",target:"self",turns:1}]}),Ge({id:"pisoton",name:"Pisotón",desc:"Golpe pesado que puede aturdir.",kind:"fis",power:62,cost:3,acc:.9,part:"Patas robustas",effects:[{type:"aturdido",target:"foe",chance:.25,turns:1}]}),Ge({id:"atrapar",name:"Atrapar",desc:"Enreda al rival: pierde velocidad y puede perder turno.",kind:"fis",power:30,cost:2,acc:.9,part:"Tentáculos",effects:[{type:"enredado",target:"foe",turns:2}]}),Ge({id:"drenar",name:"Drenar",desc:"Absorbe vitalidad del rival.",kind:"esc",power:45,cost:3,acc:.95,part:"Tentáculos",drain:.5}),Ge({id:"danza",name:"Danza articulada",desc:"Gran evasión y sube el ataque.",kind:"sup",power:0,cost:2,acc:1,part:"Patas articuladas",effects:[{type:"evasion",target:"self",turns:2},{type:"atqUp",target:"self",turns:3}]}),Ge({id:"desgarro",name:"Desgarro",desc:"Zarpazo que deja una herida sangrante.",kind:"fis",power:55,cost:3,acc:.95,part:"Garras",effects:[{type:"sangrado",target:"foe",chance:.6,turns:3}]}),Ge({id:"oleada",name:"Oleada",desc:"Golpe fluido que te regenera.",kind:"esc",power:45,cost:3,acc:.95,part:"Aletas",effects:[{type:"regen",target:"self",turns:3}]}),Ge({id:"rafaga",name:"Ráfaga",desc:"Viento cortante cargado de esencia.",kind:"esc",power:50,cost:3,acc:.95,part:"Alas de membrana"}),Ge({id:"vuelo",name:"Alzar vuelo",desc:"Esquiva casi seguro el próximo ataque.",kind:"sup",power:0,cost:2,acc:1,part:"Alas de membrana",priority:1,effects:[{type:"evasion",target:"self",turns:1,value:.8}]}),Ge({id:"polvo",name:"Polvo iridiscente",desc:"Ciega al rival.",kind:"sup",power:0,cost:2,acc:.9,part:"Alas de insecto",effects:[{type:"cegado",target:"foe",turns:2}]}),Ge({id:"abanico",name:"Abanico cortante",desc:"Dos golpes rápidos.",kind:"fis",power:28,cost:3,acc:.95,part:"Alas abanico",hits:2}),Ge({id:"eco",name:"Eco",desc:"Onda sonora que nunca falla.",kind:"esc",power:45,cost:2,acc:1,part:"Orejas-ala",neverMiss:!0}),Ge({id:"latigo",name:"Latigazo",desc:"Golpe rápido que baja la defensa.",kind:"fis",power:42,cost:2,acc:1,part:"Cola látigo",effects:[{type:"defDown",target:"foe",chance:.5,turns:3}]}),Ge({id:"coletazo",name:"Coletazo",desc:"Golpe contundente.",kind:"fis",power:66,cost:3,acc:.9,part:"Cola reptil"}),Ge({id:"destello",name:"Destello",desc:"Luz del bulbo que ciega.",kind:"esc",power:32,cost:2,acc:1,part:"Bulbo luminoso",effects:[{type:"cegado",target:"foe",chance:.7,turns:2}]}),Ge({id:"hipnosis",name:"Plumero hipnótico",desc:"Baja el ataque del rival.",kind:"sup",power:0,cost:2,acc:.95,part:"Cola plumero",effects:[{type:"atqDown",target:"foe",turns:3},{type:"aturdido",target:"foe",chance:.2,turns:1}]}),Ge({id:"aguijon",name:"Aguijonazo",desc:"Inyecta un veneno potente.",kind:"fis",power:35,cost:2,acc:.95,part:"Aguijón",effects:[{type:"veneno",target:"foe",chance:.9,turns:4}]}),Ge({id:"pulso",name:"Pulso antenal",desc:"Descarga de esencia guiada por antenas.",kind:"esc",power:52,cost:3,acc:1,part:"Antenas"}),Ge({id:"embestida",name:"Embestida cornuda",desc:"Gran daño con algo de retroceso.",kind:"fis",power:74,cost:4,acc:.9,part:"Cuernos curvos",recoil:.12}),Ge({id:"escudoAstas",name:"Escudo de astas",desc:"Bloquea gran parte del próximo daño.",kind:"sup",power:0,cost:2,acc:1,part:"Astas",effects:[{type:"escudo",target:"self",turns:2}]}),Ge({id:"carga",name:"Carga frontal",desc:"Golpe devastador pero impreciso.",kind:"fis",power:88,cost:5,acc:.78,part:"Cuerno nasal"}),Ge({id:"grito",name:"Grito de cresta",desc:"Sube tu ataque y baja el del rival.",kind:"sup",power:0,cost:2,acc:1,part:"Cresta",effects:[{type:"atqUp",target:"self",turns:3},{type:"atqDown",target:"foe",turns:2}]}),Ge({id:"erizar",name:"Erizar púas",desc:"Defensa alta: quien te golpee se lastima.",kind:"sup",power:0,cost:2,acc:1,part:"Púas",effects:[{type:"defUp",target:"self",turns:3}]}),Ge({id:"coraza",name:"Coraza de placas",desc:"Sube mucho la defensa.",kind:"sup",power:0,cost:2,acc:1,part:"Placas",effects:[{type:"defUp",target:"self",turns:4},{type:"escudo",target:"self",turns:1}]}),Ge({id:"lanza",name:"Lanza de cristal",desc:"Proyectil de esencia con alto crítico.",kind:"esc",power:60,cost:3,acc:.95,part:"Cristales",crit:.25}),Ge({id:"velaSolar",name:"Vela solar",desc:"Regeneración prolongada.",kind:"sup",power:0,cost:2,acc:1,part:"Vela dorsal",effects:[{type:"regen",target:"self",turns:4},{type:"energy",target:"self",value:1}]}),Ge({id:"bultos",name:"Golpe nudoso",desc:"Golpe que sube tu defensa.",kind:"fis",power:45,cost:2,acc:.95,part:"Protuberancias",effects:[{type:"defUp",target:"self",turns:2}]}),Ge({id:"mordisco",name:"Mordisco",desc:"Colmillos con alta probabilidad de crítico.",kind:"fis",power:58,cost:3,acc:.95,part:"Colmillos",crit:.22}),Ge({id:"picotazo",name:"Picotazo",desc:"Golpe preciso y rápido.",kind:"fis",power:45,cost:2,acc:1,part:"Pico",crit:.2,priority:1}),Ge({id:"triturar",name:"Triturar",desc:"Baja la defensa del rival.",kind:"fis",power:54,cost:3,acc:.95,part:"Mandíbulas",effects:[{type:"defDown",target:"foe",chance:.7,turns:3}]}),Ge({id:"succion",name:"Succión",desc:"Roba vida y energía.",kind:"fis",power:40,cost:2,acc:.95,part:"Ventosa",drain:.6,effects:[{type:"energy",target:"self",value:1}]}),Ge({id:"inyeccion",name:"Inyección",desc:"Envenena con la trompa.",kind:"esc",power:30,cost:2,acc:1,part:"Trompa",effects:[{type:"veneno",target:"foe",turns:4}]}),Ge({id:"sonrisa",name:"Mueca amistosa",desc:"Desconcierta al rival y te calma.",kind:"sup",power:0,cost:1,acc:1,part:"Sonrisa",effects:[{type:"atqDown",target:"foe",turns:2},{type:"heal",target:"self",value:.08}]}),Ge({id:"mirada",name:"Mirada psíquica",desc:"Varios ojos concentran la mente.",kind:"esc",power:56,cost:3,acc:1,part:"Ojos múltiples"}),Ge({id:"vigia",name:"Vigilancia",desc:"Concentración total: crítico seguro.",kind:"sup",power:0,cost:1,acc:1,part:"Ojos en tallos",effects:[{type:"concentrado",target:"self",turns:2},{type:"cleanse",target:"self"}]}),Ge({id:"rayo",name:"Rayo ocular",desc:"Haz de esencia muy potente.",kind:"esc",power:68,cost:4,acc:.92,part:"Ojos luminosos"}),Ge({id:"espiral",name:"Espiral hipnótica",desc:"Puede aturdir al rival.",kind:"esc",power:35,cost:3,acc:.95,part:"Ojos espiral",effects:[{type:"aturdido",target:"foe",chance:.45,turns:1}]}),Ge({id:"secrecion",name:"Secreción",desc:"La piel libera toxinas.",kind:"esc",power:25,cost:2,acc:1,part:"Piel lisa",effects:[{type:"veneno",target:"foe",turns:3}]}),Ge({id:"muda",name:"Muda",desc:"Cambia las escamas: limpia estados y cura.",kind:"sup",power:0,cost:3,acc:1,part:"Escamas",effects:[{type:"cleanse",target:"self"},{type:"heal",target:"self",value:.2}]}),Ge({id:"quitina",name:"Exoesqueleto",desc:"Defensa alta y escudo.",kind:"sup",power:0,cost:2,acc:1,part:"Quitina",effects:[{type:"defUp",target:"self",turns:3},{type:"escudo",target:"self",turns:1}]}),Ge({id:"pelaje",name:"Pelaje erizado",desc:"Intimida: baja el ataque rival.",kind:"sup",power:0,cost:1,acc:1,part:"Pelaje",effects:[{type:"atqDown",target:"foe",turns:3}]}),Ge({id:"translucidez",name:"Translucidez",desc:"Casi invisible por un turno.",kind:"sup",power:0,cost:2,acc:1,part:"Membrana",priority:1,effects:[{type:"evasion",target:"self",turns:2}]}),Ge({id:"regenerar",name:"Regenerar",desc:"El gel se recompone: cura mucho.",kind:"sup",power:0,cost:4,acc:1,part:"Gelatinoso",effects:[{type:"heal",target:"self",value:.35}]}),Ge({id:"fulgor",name:"Fulgor",desc:"Estallido bioluminiscente que ciega.",kind:"esc",power:48,cost:3,acc:1,part:"Bioluminiscente",effects:[{type:"cegado",target:"foe",chance:.4,turns:2}]}),Ge({id:"blindaje",name:"Blindaje",desc:"Escudo metálico duradero.",kind:"sup",power:0,cost:3,acc:1,part:"Metálico",effects:[{type:"escudo",target:"self",turns:3}]}),Ge({id:"nova",name:"Nova bioluminiscente",desc:"Explosión de luz viva.",kind:"esc",power:90,cost:6,acc:.95,part:"Esencia Bioluz",signature:!0,effects:[{type:"heal",target:"self",value:.1}]}),Ge({id:"umbra",name:"Abrazo umbrío",desc:"La sombra devora al rival.",kind:"esc",power:85,cost:6,acc:.95,part:"Esencia Sombra",signature:!0,drain:.3}),Ge({id:"onda",name:"Onda mental",desc:"Golpe mental que aturde.",kind:"esc",power:80,cost:6,acc:.95,part:"Esencia Psique",signature:!0,effects:[{type:"aturdido",target:"foe",chance:.35,turns:1}]}),Ge({id:"descarga",name:"Gran descarga",desc:"Relámpago orgánico.",kind:"esc",power:95,cost:6,acc:.88,part:"Esencia Voltaje",signature:!0,effects:[{type:"aturdido",target:"foe",chance:.2,turns:1}]}),Ge({id:"prisma",name:"Prisma",desc:"Cristales que golpean y protegen.",kind:"esc",power:78,cost:6,acc:1,part:"Esencia Cristal",signature:!0,effects:[{type:"escudo",target:"self",turns:1}]}),Ge({id:"nube",name:"Nube tóxica",desc:"Veneno masivo y persistente.",kind:"esc",power:60,cost:5,acc:1,part:"Esencia Toxina",signature:!0,effects:[{type:"veneno",target:"foe",turns:5,value:2}]})].map(n=>[n.id,n])),K_=["nova","umbra","onda","descarga","prisma","nube"];function yh(n){const e=["placaje","concentrar"];e.push(["carrera","pisoton","atrapar","danza","desgarro","oleada"][n.limbs]),n.limbs===2&&e.push("drenar");const t=[null,"rafaga","polvo","abanico","oleada","eco"][n.wings];t&&e.push(t),n.wings===1&&e.push("vuelo");const i=[null,"latigo","coletazo","destello","hipnosis","aguijon"][n.tail];i&&e.push(i);const s=[null,"pulso","embestida","escudoAstas","carga","grito"][n.horns];s&&e.push(s);const a=[null,"erizar","coraza","lanza","velaSolar","bultos"][n.spines];a&&e.push(a),e.push(["sonrisa","mordisco","picotazo","triturar","succion","inyeccion"][n.mouth]),Vs(n)>=3&&e.push("mirada");const r=[null,null,null,"vigia","rayo","espiral"][n.eyes];return r&&e.push(r),e.push(["secrecion","muda","quitina","pelaje","translucidez","regenerar","fulgor","blindaje"][n.material]),[...new Set(e)]}function Rr(n){const e=n.map(a=>Lt[a]).filter(Boolean),t=e.filter(a=>a.power>0&&a.id!=="placaje").sort((a,r)=>r.power-a.power),i=e.filter(a=>a.power===0&&a.id!=="concentrar"),s=[];t.slice(0,2).forEach(a=>s.push(a.id)),i[0]&&s.push(i[0].id);for(const a of[...t.slice(2),...i.slice(1)])s.length<3&&!s.includes(a.id)&&s.push(a.id);s.includes("placaje")||s.push("placaje");for(const a of["concentrar",...n])s.length<4&&!s.includes(a)&&s.push(a);return s.slice(0,4)}const _t=n=>n,bs=n=>Math.max(0,Math.min(255,n)),li=[_t({id:"alasMembrana",name:"Alas de membrana",desc:"Brotan alas finas como de murciélago. Desbloquea Ráfaga y Alzar vuelo.",rarity:"rara",bonus:{vel:2},can:n=>n.wings!==1,apply:n=>{n.wings=1}}),_t({id:"alasInsecto",name:"Alas iridiscentes",desc:"Dos pares de alas translúcidas. Desbloquea Polvo iridiscente.",rarity:"rara",bonus:{vel:2,int:1},can:n=>n.wings!==2,apply:n=>{n.wings=2}}),_t({id:"ojosExtra",name:"Ojos adicionales",desc:"Se abren dos ojos nuevos. Más Inteligencia y Mirada psíquica.",rarity:"común",bonus:{int:3},can:n=>n.eyeCount<5,apply:n=>{n.eyeCount=Math.min(5,n.eyeCount+2)}}),_t({id:"ojosLuz",name:"Ojos luminosos",desc:"Los ojos acumulan esencia. Desbloquea Rayo ocular.",rarity:"rara",bonus:{int:2},can:n=>n.eyes!==4,apply:n=>{n.eyes=4}}),_t({id:"placas",name:"Placas óseas",desc:"Placas dorsales duras. Desbloquea Coraza de placas.",rarity:"común",bonus:{res:3},can:n=>n.spines!==2,apply:n=>{n.spines=2}}),_t({id:"cristales",name:"Cristalización",desc:"Cristales crecen en el lomo. Desbloquea Lanza de cristal.",rarity:"rara",bonus:{int:1,res:2},can:n=>n.spines!==3,apply:n=>{n.spines=3}}),_t({id:"vela",name:"Vela dorsal",desc:"Una vela que absorbe energía. Desbloquea Vela solar.",rarity:"común",bonus:{ada:3},can:n=>n.spines!==4,apply:n=>{n.spines=4}}),_t({id:"cuernos",name:"Cuernos curvos",desc:"Cuernos de ataque. Desbloquea Embestida cornuda.",rarity:"común",bonus:{fue:3},can:n=>n.horns!==2,apply:n=>{n.horns=2}}),_t({id:"astas",name:"Astas ramificadas",desc:"Astas majestuosas. Desbloquea Escudo de astas.",rarity:"rara",bonus:{res:2,ada:1},can:n=>n.horns!==3,apply:n=>{n.horns=3}}),_t({id:"antenas",name:"Antenas sensoriales",desc:"Antenas con bulbos de esencia. Desbloquea Pulso antenal.",rarity:"común",bonus:{int:2},can:n=>n.horns!==1,apply:n=>{n.horns=1}}),_t({id:"aguijon",name:"Aguijón",desc:"La cola termina en un aguijón venenoso.",rarity:"rara",bonus:{fue:2},can:n=>n.tail!==5,apply:n=>{n.tail=5}}),_t({id:"bulbo",name:"Bulbo luminoso",desc:"La cola acumula luz. Desbloquea Destello.",rarity:"común",bonus:{int:2},can:n=>n.tail!==3,apply:n=>{n.tail=3}}),_t({id:"garras",name:"Garras",desc:"Extremidades con garras afiladas. Desbloquea Desgarro.",rarity:"común",bonus:{fue:2},can:n=>n.limbs!==4&&n.body!==3,apply:n=>{n.limbs=4}}),_t({id:"tentaculos",name:"Tentáculos",desc:"Las extremidades se vuelven tentáculos. Desbloquea Atrapar y Drenar.",rarity:"rara",bonus:{ada:2},can:n=>n.limbs!==2,apply:n=>{n.limbs=2}}),_t({id:"patasExtra",name:"Par de patas extra",desc:"Un nuevo par de extremidades: más estabilidad.",rarity:"rara",bonus:{res:2,vel:1},can:n=>n.legPairs<3&&n.body!==3&&n.body!==2,apply:n=>{n.legPairs++}}),_t({id:"glandulas",name:"Glándulas luminosas",desc:"El tejido se vuelve bioluminiscente. Desbloquea Fulgor.",rarity:"rara",bonus:{int:2},can:n=>n.material!==6,apply:n=>{n.material=6}}),_t({id:"metal",name:"Metalización",desc:"Piel de aleación orgánica. Desbloquea Blindaje.",rarity:"rara",bonus:{res:2,fue:1},can:n=>n.material!==7,apply:n=>{n.material=7}}),_t({id:"gel",name:"Tejido gelatinoso",desc:"Cuerpo elástico capaz de regenerarse.",rarity:"rara",bonus:{ada:3},can:n=>n.material!==5,apply:n=>{n.material=5}}),_t({id:"musculo",name:"Hipertrofia",desc:"Crece en tamaño y fuerza.",rarity:"común",bonus:{fue:5},can:()=>!0,apply:n=>{n.size=bs(n.size+30),n.girth=bs(n.girth+15)}}),_t({id:"agil",name:"Fibras rápidas",desc:"Extremidades largas y veloces.",rarity:"común",bonus:{vel:5},can:()=>!0,apply:n=>{n.limbLength=bs(n.limbLength+35),n.girth=bs(n.girth-15)}}),_t({id:"cerebro",name:"Neurogénesis",desc:"Cabeza más grande y mente más aguda.",rarity:"común",bonus:{int:5},can:()=>!0,apply:n=>{n.headSize=bs(n.headSize+30)}}),_t({id:"coraza",name:"Tejido denso",desc:"Cuerpo más grueso y resistente.",rarity:"común",bonus:{res:5},can:()=>!0,apply:n=>{n.girth=bs(n.girth+30)}}),_t({id:"adaptativo",name:"Genes adaptativos",desc:"Resiste estados alterados y se recupera mejor.",rarity:"común",bonus:{ada:6},can:()=>!0,apply:()=>{}}),_t({id:"cromatico",name:"Cambio cromático",desc:"Nuevos colores iridiscentes en la piel.",rarity:"común",bonus:{ada:1,int:1},can:()=>!0,apply:n=>{n.hue1=(n.hue1+70)%256,n.hue2=(n.hue2+110)%256,n.pattern=4}}),_t({id:"firma",name:"Esencia ascendida",desc:"Domina el poder máximo de su esencia: movimiento firma.",rarity:"épica",bonus:{int:2,fue:2},can:(n,e,t)=>e>=1&&!t.includes("firma"),apply:()=>{},ability:n=>K_[dt(n)]})],wc=Object.fromEntries(li.map(n=>[n.id,n]));function Z_(n,e,t,i,s=null){const a=li.filter(l=>l.can(n,e,t)),r=a.map(l=>{let u=l.rarity==="común"?5:l.rarity==="rara"?3:e>=2?6:2;if(s!==null){const d={...n};l.apply(d),dt(d)===s&&(u*=2.5)}return u}),o=[],c=new Set;for(;o.length<3&&c.size<a.length;){let l=0;a.forEach((d,f)=>{c.has(d.id)||(l+=r[f])});let u=i.next()*l;for(let d=0;d<a.length;d++)if(!c.has(a[d].id)&&(u-=r[d],u<=0)){c.add(a[d].id),o.push(a[d]);break}}return o}function J_(n){const e={fue:0,vel:0,res:0,int:0,ada:0};for(const t of n){const i=wc[t];if(i)for(const s in i.bonus)e[s]+=i.bonus[s]}return e}const Zu=30,Ca=[1,4,9],Q_=[.72,.87,1],bh=45;function Er(n){return 30+n*22}function e1(n,e,t=1,i){const s={id:U_(),name:n,genome:{...e},stage:0,level:1,xp:0,trained:{fue:0,vel:0,res:0,int:0,ada:0},needs:{hambre:80,energia:90,animo:85,higiene:100,salud:100},bond:20,care:80,sick:!1,sleeping:!1,goo:0,gooTimer:25,mutations:[],loadout:[],wins:0,losses:0,bornAt:Date.now(),generation:t,parents:i,lastPet:0};return s.loadout=Rr(Pa(s)),s}function qr(n){const e=_h(n.genome),t=J_(n.mutations),i=1+(n.level-1)*.075,s={};for(const a of Un)s[a]=Math.max(3,Math.round((e[a]*i+n.trained[a]+t[a])*Q_[n.stage]));return s}function Mh(n){let e=1;return n.needs.hambre<20&&(e-=.1),n.needs.energia<15&&(e-=.1),n.needs.animo<20&&(e-=.05),n.sick&&(e-=.15),n.bond>70&&(e+=.05),e}function Pa(n){const e=yh(n.genome);for(const t of n.mutations){const i=wc[t];i?.ability&&e.push(i.ability(n.genome))}return[...new Set(e)]}function Ra(n,e){return Math.round(50+n.res*3.2+e*5)}function ss(n,e){const t=.75+n.care/100*.5;n.xp+=Math.round(e*t);let i=0;for(;n.level<Zu&&n.xp>=Er(n.level);)n.xp-=Er(n.level),n.level++,i++;return n.level>=Zu&&(n.xp=Math.min(n.xp,Er(n.level))),{levels:i,canEvolve:La(n)}}function La(n){return n.stage<2&&n.level>=Ca[n.stage+1]}function Ju(n){return La(n)?n.care<bh?"Necesita mejores cuidados para que sus genes se expresen.":n.sick?"Está enfermo/a: cúralo/a antes de evolucionar.":n.sleeping?"Está durmiendo.":null:`Necesita nivel ${Ca[Math.min(2,n.stage+1)]}.`}const Lr=[{id:"neon",name:"Laboratorio neón",desc:"El clásico: limpio, violeta y turquesa.",price:0,essence:null,neonA:"#6b4cf2",neonB:"#45d9f2",floor:"#1a1733",wall:"#211a42"},{id:"jardin",name:"Jardín de bioluz",desc:"Verdes vivos y luz suave. Favorece mutaciones de Bioluz.",price:160,essence:0,neonA:"#3fe0a8",neonB:"#c8ff7a",floor:"#10261f",wall:"#14302a"},{id:"abismo",name:"Abismo umbrío",desc:"Penumbra violeta. Favorece mutaciones de Sombra.",price:160,essence:1,neonA:"#7a4cff",neonB:"#2b1d6e",floor:"#0e0b1f",wall:"#150f2c"},{id:"nebula",name:"Nebulosa psíquica",desc:"Rosas y lilas hipnóticos. Favorece mutaciones de Psique.",price:160,essence:2,neonA:"#ff6ad5",neonB:"#a77bff",floor:"#24132d",wall:"#2c1438"},{id:"tormenta",name:"Cámara de tormenta",desc:"Destellos dorados. Favorece mutaciones de Voltaje.",price:160,essence:3,neonA:"#ffd166",neonB:"#ff8a3d",floor:"#221a12",wall:"#2a1f14"},{id:"cristal",name:"Gruta de cristal",desc:"Azules helados. Favorece mutaciones de Cristal.",price:160,essence:4,neonA:"#6fd3ff",neonB:"#d6f4ff",floor:"#0f1c2b",wall:"#132438"},{id:"pantano",name:"Ciénaga tóxica",desc:"Verde ácido. Favorece mutaciones de Toxina.",price:160,essence:5,neonA:"#a6e35a",neonB:"#4fbf3a",floor:"#141f0f",wall:"#1a2814"}],Qu={izq:"Rincón izquierdo",der:"Rincón derecho",fondo:"Pared del fondo",techo:"Techo",suelo:"Suelo"},ca=[{id:"planta",name:"Planta luminosa",desc:"El ánimo baja un 12% más lento.",price:90,slot:"izq",bonus:{key:"animo",value:.12},color:"#3fe0a8"},{id:"acuario",name:"Acuario de medusas",desc:"Las caricias dan un 20% más de ánimo.",price:140,slot:"izq",bonus:{key:"caricias",value:.2},color:"#ff7ad9"},{id:"lampara",name:"Lámpara de sal",desc:"Recupera energía un 15% más rápido al dormir.",price:110,slot:"der",bonus:{key:"sueno",value:.15},color:"#ffb37a"},{id:"estante",name:"Biblioteca genética",desc:"+12% de experiencia al entrenar.",price:150,slot:"der",bonus:{key:"xpEntreno",value:.12},color:"#a77bff"},{id:"fuente",name:"Fuente de burbujas",desc:"La higiene baja un 15% más lento.",price:100,slot:"fondo",bonus:{key:"higiene",value:.15},color:"#6fd3ff"},{id:"poster",name:"Holograma de la liga",desc:"+8% de biocréditos en combates.",price:130,slot:"fondo",bonus:{key:"creditos",value:.08},color:"#ffd166"},{id:"movil",name:"Móvil orbital",desc:"Un juguete flotante: +10% de ánimo con caricias.",price:70,slot:"techo",bonus:{key:"caricias",value:.1},color:"#7cf7d4"},{id:"capsula",name:"Cápsula de mutación",desc:"+4% de probabilidad de mutación en los cruces.",price:180,slot:"techo",bonus:{key:"mutacion",value:.04},color:"#c6a8ff"},{id:"alfombra",name:"Alfombra holográfica",desc:"Mapa estelar: +10% de botín en expediciones.",price:120,slot:"suelo",bonus:{key:"expedicion",value:.1},color:"#45d4dd"},{id:"hongos",name:"Jardín de hongos",desc:"Puro ambiente: hongos que brillan en la oscuridad.",price:60,slot:"suelo",color:"#b6ff6a"}],t1=Object.fromEntries(ca.map(n=>[n.id,n]));function Xr(){return Lr.find(n=>n.id===L.decor.theme)??Lr[0]}function Ei(n){let e=0;for(const t of Object.values(L.decor.placed)){const i=t1[t];i?.bonus?.key===n&&(e+=i.bonus.value)}return e}const n1={hambre:-15,energia:-9,animo:-12,higiene:-8},i1={hambre:-5,energia:34,animo:-1,higiene:-3},s1=12,mr={hambre:"Nutrición",energia:"Energía",animo:"Ánimo",higiene:"Higiene",salud:"Salud"};function a1(n,e){const t=[];if(n.expedition)return t;let i=Math.min(e,s1*60);for(;i>0;){const s=Math.min(5,i);i-=s,r1(n,s/60,t)}return t}function r1(n,e,t){const i=n.sleeping?i1:n1,s=n.needs;s.hambre+=i.hambre*e,s.energia+=i.energia*e*(n.sleeping?1+Ei("sueno"):1),s.animo+=i.animo*e*(n.sleeping?1:Xi(n.genome).boredMul)*(1-Ei("animo")),s.higiene+=(i.higiene*(1-Ei("higiene"))-n.goo*2.5)*e,n.sick&&(s.animo-=6*e),n.sleeping||(n.gooTimer-=e*60,n.gooTimer<=0&&(n.goo<4&&s.hambre>25&&n.goo++,n.gooTimer=35+Math.random()*25));const a=["hambre","energia","animo","higiene"].filter(o=>s[o]<12).length;a>0?s.salud-=7*a*e:Ol(n)>55&&!n.sick&&(s.salud+=8*e),n.sick&&(s.salud-=2*e);for(const o of Object.keys(s))s[o]=At(s[o],0,100);!n.sick&&(s.salud<35||s.higiene<8&&Math.random()<.08*e*12)&&(n.sick=!0,t.push(`${n.name} se ha enfermado.`)),n.sleeping&&s.energia>=100&&(n.sleeping=!1,t.push(`${n.name} se despertó con energía.`));const r=Ol(n)-(n.sick?20:0);n.care=At(n.care+(r-n.care)*Math.min(1,e*.35),0,100),s.animo<25&&(n.bond=At(n.bond-1.5*e,0,100))}function Ol(n){const e=n.needs;return(e.hambre+e.energia+e.animo+e.higiene+e.salud)/5}function Sh(n){if(n.sleeping)return"dormido";if(n.sick)return"enfermo";if(n.needs.hambre<22)return"hambriento";if(n.needs.energia<20)return"cansado";const e=Ol(n);return e>72&&n.needs.animo>60?"feliz":e>45?"bien":"triste"}const wh={feliz:"Feliz",bien:"Tranquilo/a",triste:"Desanimado/a",enfermo:"Enfermo/a",dormido:"Durmiendo",hambriento:"Hambriento/a",cansado:"Cansado/a"},_n=(n,e,t)=>n.needs[e]=At(n.needs[e]+t,0,100);function ed(n,e){const t=Aa[e];if(!t)return{ok:!1,msg:"Ese alimento no existe."};if(n.sleeping)return{ok:!1,msg:`${n.name} está durmiendo.`};if(t.kind==="comida"&&n.needs.hambre>94&&!t.energia)return{ok:!1,msg:`${n.name} no tiene hambre.`};t.hambre&&_n(n,"hambre",t.hambre),t.energia&&_n(n,"energia",t.energia),t.animo&&_n(n,"animo",t.animo),t.salud&&_n(n,"salud",t.salud),t.kind==="medicina"&&(n.sick=!1),n.bond=At(n.bond+1,0,100);const i=ss(n,t.xp??1);return{ok:!0,msg:t.kind==="medicina"?`${n.name} se siente mucho mejor.`:`${n.name} disfruta: ${t.name}.`,level:i}}function o1(n){if(n.needs.higiene>92&&n.goo===0)return{ok:!1,msg:"Ya está impecable."};const e=n.goo;n.goo=0,_n(n,"higiene",60),_n(n,"animo",4);const t=ss(n,3+e);return{ok:!0,msg:e?`Limpiaste ${e} residuo${e>1?"s":""} del hábitat.`:`${n.name} quedó reluciente.`,level:t}}function l1(n){return n.goo<=0?{ok:!1,msg:""}:(n.goo--,_n(n,"higiene",10),{ok:!0,msg:"Residuo eliminado.",level:ss(n,1)})}function c1(n,e=Date.now()){if(n.sleeping)return{ok:!1,msg:"Shh… está durmiendo."};if(e-n.lastPet<6e3)return _n(n,"animo",1),{ok:!0,msg:""};n.lastPet=e;const t=Xi(n.genome);_n(n,"animo",Math.round(10*t.petMul*(1+Ei("caricias")))),n.bond=At(n.bond+(t.id===1?3:2),0,100);const i=ss(n,2),s=t.lines[Math.floor(Math.random()*t.lines.length)];return{ok:!0,msg:`${n.name} ${s}.`,level:i}}function u1(n){return!n.sleeping&&n.needs.energia>85?{ok:!1,msg:`${n.name} no tiene sueño.`}:(n.sleeping=!n.sleeping,{ok:!0,msg:n.sleeping?`${n.name} se duerme…`:`${n.name} se despierta.`})}function Eh(n,e,t,i=0){_n(n,"energia",-e),_n(n,"hambre",-t),_n(n,"higiene",-i)}function ws(n,e){return n.expedition?`${n.name} está de expedición.`:n.sleeping?`${n.name} está durmiendo.`:n.sick?`${n.name} está enfermo/a. Usa un suero curativo.`:n.needs.energia<e?`${n.name} está sin energía. Déjalo/a dormir o dale un cristal energético.`:n.needs.hambre<10?`${n.name} tiene demasiada hambre.`:null}const aa=new Map,ti={on(n,e){return aa.has(n)||aa.set(n,new Set),aa.get(n).add(e),()=>aa.get(n).delete(e)},emit(n,e){aa.get(n)?.forEach(t=>t(e))}},td={dna:'<path d="M7 3c0 6 10 6 10 12s-10 6-10 6"/><path d="M17 3c0 6-10 6-10 12s10 6 10 6"/><path d="M8.5 6.5h7M7.5 10h9M7.5 14h9M8.5 17.5h7"/>',food:'<path d="M12 21c-4.5 0-7-3-7-7 0-3 2-6 7-6s7 3 7 6c0 4-2.5 7-7 7z"/><path d="M12 8c0-2 1-4 3-5"/><path d="M9 13.5c.5-1 1.5-1.5 2.5-1.5"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heal:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/>',train:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',swords:'<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6M16 16l4 4M19 21l2-2"/><path d="M9.5 6.5 14 2h3v3l-4.5 4.5"/><path d="m5 14 4 4M7 17l-3 3M3 19l2 2"/>',evolve:'<path d="M4 18c3-1 4-4 4-7"/><path d="M12 18c1-4 1-8 0-12"/><path d="M20 18c-3-1-4-4-4-7"/><circle cx="12" cy="4.5" r="1.5"/><path d="M3 21h18"/>',grid:'<rect x="4" y="4" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"/>',coin:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 2c0 2.6-5 1.6-5 4.3 0 1.1 1 1.8 2.5 1.8s2.5-.8 2.5-1.8"/>',flask:'<path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7.5 15h9"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',back:'<path d="M15 5l-7 7 7 7"/>',close:'<path d="M6 6l12 12M18 6 6 18"/>',check:'<path d="M5 12.5 10 17 19 7"/>',heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z"/>',share:'<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1"/>',egg:'<path d="M12 21c-4 0-6.5-2.8-6.5-7C5.5 9 8.5 3 12 3s6.5 6 6.5 11c0 4.2-2.5 7-6.5 7z"/><path d="M9 13l2 1.5 2-2 2 1.5"/>',archive:'<rect x="3.5" y="4" width="17" height="5" rx="1.5"/><path d="M5 9v9.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V9"/><path d="M10 13h4"/>',shop:'<path d="M4 9h16l-1.3 10.2A2 2 0 0 1 16.7 21H7.3a2 2 0 0 1-2-1.8z"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2"/>',star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',shield:'<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z"/>',bolt:'<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/>',play:'<path d="M7 4.5v15l12.5-7.5z"/>',random:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.5" cy="8.5" r="1.2"/><circle cx="15.5" cy="15.5" r="1.2"/><circle cx="15.5" cy="8.5" r="1.2"/><circle cx="8.5" cy="15.5" r="1.2"/><circle cx="12" cy="12" r="1.2"/>',sparkle:'<path d="M12 3c.6 4.5 1.9 6.3 6 7-4.1.7-5.4 2.5-6 7-.6-4.5-1.9-6.3-6-7 4.1-.7 5.4-2.5 6-7z"/><path d="M19 15c.3 2 .9 2.7 2.5 3-1.6.3-2.2 1-2.5 3-.3-2-.9-2.7-2.5-3 1.6-.3 2.2-1 2.5-3z"/>',body:'<ellipse cx="12" cy="13" rx="8" ry="5.5"/><path d="M7 18v2.5M17 18v2.5"/>',head:'<circle cx="11" cy="11" r="7"/><circle cx="9" cy="10" r="1.3"/><circle cx="13.5" cy="10" r="1.3"/><path d="M18 11.5c1.5.5 2.5 1.5 3 3"/>',eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',mouth:'<path d="M4 10c2 5 14 5 16 0"/><path d="M8 12.5v2M16 12.5v2"/>',limb:'<path d="M9 3c0 4 1 6 1 9s-2 5-2 9M15 3c0 4-1 6-1 9s2 5 2 9"/>',wing:'<path d="M3 15c3-8 9-11 18-11-1 6-4 11-10 13"/><path d="M7 12.5c2 .5 4 .5 6-1M10 16c2 0 4-1 5.5-3"/>',tail:'<path d="M4 6c3 0 5 2 5 5s2 5 5 5 4-2 4-4"/><circle cx="18.5" cy="10.5" r="2"/>',horn:'<path d="M7 20c0-7 2-12 7-16-1 5 0 9 3 16"/>',spine:'<path d="M3 18 6 9l3 9 3-12 3 12 3-9 3 9"/>',palette:'<path d="M12 21a9 9 0 1 1 9-9c0 2.5-2 3.5-3.5 3.5H15a2 2 0 0 0-1.5 3.3A1.4 1.4 0 0 1 12 21z"/><circle cx="7.5" cy="11" r="1.3"/><circle cx="10.5" cy="7" r="1.3"/><circle cx="15.5" cy="7.5" r="1.3"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',code:'<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5V4.5a1.5 1.5 0 0 1 3 0V11m0-4a1.5 1.5 0 0 1 3 0v6a7 7 0 0 1-7 7c-2.5 0-4-1-5.5-3L3.6 14a1.6 1.6 0 0 1 2.4-2l2 2"/>',idea:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2V16h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',chat:'<path d="M4 18.5V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8z"/><path d="M8.5 9h7M8.5 12.5h4.5"/>',github:'<path d="M9 19c-4.5 1.4-4.5-2.2-6.3-2.7M15 21.5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v4"/>',camera:'<path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8l1.5-2h5L16 6h1.5A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="12" cy="12.5" r="3.5"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/>',sofa:'<path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M6 19v2M18 19v2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',team:'<circle cx="8" cy="9" r="3"/><circle cx="16.5" cy="9.5" r="2.5"/><path d="M2.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5"/><path d="M14 14.5c2.8-.6 6 .8 7 4"/>',trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>'};function re(n,e=""){return`<svg class="i ${e}" viewBox="0 0 24 24" aria-hidden="true">${td[n]??td.info}</svg>`}let wt=null,Si=null,Yi=null,Ec=!0,Tc=!0,Bo=null,kl=null;function ua(){if(wt){wt.state==="suspended"&&wt.resume();return}const n=window.AudioContext||window.webkitAudioContext;n&&(wt=new n,Si=wt.createGain(),Si.gain.value=.55,Si.connect(wt.destination),Yi=wt.createGain(),Yi.gain.value=Tc?.22:0,Yi.connect(Si),kl&&zl(kl))}function Dr(n,e){Ec=n,Tc=e,Yi&&wt&&Yi.gain.setTargetAtTime(e?.22:0,wt.currentTime,.3)}function ot(n,e,t="sine",i=.3,s=0,a=0,r){if(!wt||!Si||!Ec)return;const o=wt.currentTime+a,c=wt.createOscillator(),l=wt.createGain();c.type=t,c.frequency.setValueAtTime(n,o),s&&c.frequency.exponentialRampToValueAtTime(Math.max(30,n*s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.015),l.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l),l.connect(Si),c.start(o),c.stop(o+e+.05)}function _i(n,e=.2,t=1200,i=0,s=1){if(!wt||!Si||!Ec)return;const a=wt.currentTime+i,r=Math.floor(wt.sampleRate*n),o=wt.createBuffer(1,r,wt.sampleRate),c=o.getChannelData(0);for(let f=0;f<r;f++)c[f]=(Math.random()*2-1)*(1-f/r);const l=wt.createBufferSource();l.buffer=o;const u=wt.createBiquadFilter();u.type="bandpass",u.frequency.value=t,u.Q.value=s;const d=wt.createGain();d.gain.setValueAtTime(e,a),d.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(u),u.connect(d),d.connect(Si),l.start(a)}const J={tap:()=>ot(880,.06,"sine",.12,1.2),select:()=>{ot(660,.07,"triangle",.14),ot(990,.09,"triangle",.1,1,.05)},back:()=>ot(520,.08,"triangle",.12,.7),error:()=>{ot(220,.15,"square",.06,.8),ot(180,.2,"square",.05,.8,.08)},coin:()=>{ot(1320,.08,"square",.06),ot(1760,.14,"square",.05,1,.07)},eat:()=>{for(let n=0;n<3;n++)_i(.07,.25,700+n*150,n*.13,2)},clean:()=>{_i(.6,.12,3500,0,.6),ot(1400,.3,"sine",.05,1.6,.1)},pop:()=>{ot(500,.08,"sine",.2,2.2)},sleep:()=>{ot(440,.5,"sine",.08,.6),ot(330,.7,"sine",.07,.6,.3)},heal:()=>{[660,880,1100,1320].forEach((n,e)=>ot(n,.25,"sine",.08,1,e*.06))},hit:()=>{_i(.18,.35,500,0,1.2),ot(140,.18,"sawtooth",.12,.5)},crit:()=>{_i(.25,.45,900,0,1),ot(220,.3,"sawtooth",.14,.4),ot(1200,.15,"square",.05,.5,.02)},miss:()=>_i(.25,.12,2500,0,3),buff:()=>{ot(520,.2,"triangle",.09,1.6),ot(780,.25,"triangle",.07,1.5,.08)},debuff:()=>{ot(500,.25,"triangle",.09,.6)},essence:()=>{ot(300,.4,"sawtooth",.06,3),_i(.4,.15,1800,.05,4)},faint:()=>{ot(400,.9,"triangle",.12,.3)},win:()=>{[523,659,784,1046].forEach((n,e)=>ot(n,.3,"triangle",.12,1,e*.12)),ot(1318,.6,"triangle",.1,1,.5)},lose:()=>{[392,349,311,262].forEach((n,e)=>ot(n,.35,"triangle",.1,1,e*.16))},levelUp:()=>{[523,659,784,1046,1318].forEach((n,e)=>ot(n,.18,"square",.05,1,e*.07))},evolve:()=>{ot(110,2.5,"sawtooth",.06,8),[0,.4,.8,1.2,1.6].forEach((n,e)=>ot(400+e*200,.5,"sine",.06,1.5,n)),_i(2.5,.08,2e3,0,.5)},hatch:()=>{_i(.3,.3,1500,0,2),[784,988,1175,1568].forEach((n,e)=>ot(n,.3,"triangle",.1,1,.2+e*.09))},bubble:()=>ot(300+Math.random()*400,.12,"sine",.06,2.5),voice:(n,e="neutral")=>{const t=900-n*500+Math.random()*60;(e==="feliz"?[1,1.3,1.6]:e==="triste"?[1,.85,.7]:[1,1.15,.95]).forEach((s,a)=>ot(t*s,.11,"triangle",.08,1.05,a*.08))}};let nd=null;function zl(n){if(kl=n,!wt||!Yi||nd===n&&Bo)return;nd=n,Bo?.stop();const e=wt,t=Yi,i=[],s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=n==="lab"?900:700,s.connect(t);const a=e.createOscillator(),r=e.createGain();a.frequency.value=.07,r.gain.value=300,a.connect(r),r.connect(s.frequency),a.start(),i.push(a);const o=n==="lab"?[130.8,196,261.6,329.6]:[110,164.8,220,261.6];for(const d of o)for(const f of[-4,4]){const h=e.createOscillator();h.type="sawtooth",h.frequency.value=d,h.detune.value=f;const g=e.createGain();g.gain.value=.035,h.connect(g),g.connect(s),h.start(),i.push(h)}const c=n==="lab"?[523,587,659,784,880,1046]:[440,494,523,659,698,880];let l=!0;const u=()=>{if(l){if(Tc){const d=c[Math.floor(Math.random()*c.length)],f=e.currentTime,h=e.createOscillator(),g=e.createGain();h.type="sine",h.frequency.value=d,g.gain.setValueAtTime(1e-4,f),g.gain.exponentialRampToValueAtTime(.12,f+.02),g.gain.exponentialRampToValueAtTime(1e-4,f+2.2);const v=e.createDelay();v.delayTime.value=.38;const p=e.createGain();p.gain.value=.35,h.connect(g),g.connect(t),g.connect(v),v.connect(p),p.connect(v),v.connect(t),h.start(f),h.stop(f+2.5)}setTimeout(u,1400+Math.random()*2600)}};setTimeout(u,800),Bo={stop:()=>{l=!1,i.forEach(d=>{try{d.stop()}catch{}}),s.disconnect()}}}const ln=()=>document.getElementById("ui"),ka=()=>document.getElementById("overlay");function oe(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function gt(n){const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstElementChild}function et(n,e=document){return e.querySelector(n)}function Ct(n,e){n.addEventListener("click",t=>{const i=t.target.closest("[data-a]");if(!i||!n.contains(i))return;const s=e[i.dataset.a];s&&(t.stopPropagation(),s(i,t))})}function Ie(n,e="",t=2600){if(!n)return;const i=document.getElementById("toasts"),s=gt(`<div class="toast ${e}">${n}</div>`);for(i.appendChild(s);i.children.length>3;)i.firstElementChild.remove();setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),350)},t)}function Vt(n,e,t=[{label:"Aceptar",cls:"primary",value:"ok"}],i={}){return new Promise(s=>{const a=gt(`<div class="modal-wrap"><div class="modal glass">
      ${n?`<h2>${n}</h2>`:""}<div class="mb">${e}</div>
      <div class="col" style="margin-top:12px">${t.map(o=>`<button class="btn ${o.cls??""} block" data-v="${o.value}">${o.label}</button>`).join("")}</div>
    </div></div>`),r=o=>{a.remove(),s(o)};a.addEventListener("click",o=>{const c=o.target.closest("[data-v]");c?(J.tap(),r(c.dataset.v)):o.target===a&&i.dismiss!==!1&&r("cancel")}),ka().appendChild(a),i.onMount?.(a)})}function cn(n,e){const t=gt(`<div class="sheet-wrap"><div class="sheet glass">${n}</div></div>`),i=()=>{t.remove()};return t.addEventListener("click",s=>{(s.target===t||s.target.closest("[data-close]"))&&(J.back(),i())}),ka().appendChild(t),{root:t,close:i}}function sn(n,e=""){return`<div class="head"><div><h2>${n}</h2>${e?`<div class="muted small">${e}</div>`:""}</div>
    <button class="icon-btn" data-close>${re("close")}</button></div>`}function zi(n,e,t,i="#fff",s=""){const a=document.getElementById("floaters"),r=gt(`<div class="dmg-float ${s}" style="left:${n}px;top:${e}px;color:${i}">${t}</div>`);a.appendChild(r),setTimeout(()=>r.remove(),1200)}function d1(n,e,t=3,i=["💜","💙","✨"]){const s=document.getElementById("floaters");for(let a=0;a<t;a++){const r=gt(`<div class="heart-float" style="left:${n+(Math.random()-.5)*60}px;top:${e+(Math.random()-.5)*30}px;animation-delay:${a*.12}s">${i[a%i.length]}</div>`);s.appendChild(r),setTimeout(()=>r.remove(),1600)}}function h1(n,e,t=38){const i=t/2-3,s=2*Math.PI*i,a=s*(1-Math.max(0,Math.min(1,n)));return`<svg class="r" width="${t}" height="${t}"><circle cx="${t/2}" cy="${t/2}" r="${i}" stroke="rgba(255,255,255,0.1)" stroke-width="4" fill="none"/>
    <circle cx="${t/2}" cy="${t/2}" r="${i}" stroke="${e}" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="${s}" stroke-dashoffset="${a}" style="transition:stroke-dashoffset .5s"/></svg>`}function Bl(n="#fff"){const e=gt(`<div class="flash" style="background:${n}"></div>`);document.body.appendChild(e),setTimeout(()=>e.remove(),1500)}function f1(){ka().innerHTML=""}function Bt(n){return new Promise(e=>setTimeout(e,n))}async function Da(n){try{return await navigator.clipboard.writeText(n),!0}catch{const e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select();const t=document.execCommand("copy");return e.remove(),t}}const Ir=[{id:"jardin",name:"Jardín bioluminiscente",essence:0,minLevel:1,tier:0,color:"#7cf7d4",items:["algas","golosina"],desc:"Praderas que brillan de noche. Ideal para criaturas jóvenes.",events:["persiguió luciérnagas gigantes hasta el amanecer","encontró un claro de flores que cantaban","se bañó en un estanque de luz líquida","siguió un rastro de esporas brillantes","durmió bajo un árbol que respiraba"]},{id:"cueva",name:"Cueva de cristal",essence:4,minLevel:3,tier:1,color:"#6fd3ff",items:["cristal","algas"],desc:"Galerías heladas llenas de ecos y minerales energéticos.",events:["escuchó su propio eco cien veces","resbaló por un tobogán de hielo","encontró geodas que zumbaban","se reflejó en mil cristales a la vez","esquivó una lluvia de estalactitas"]},{id:"pantano",name:"Ciénaga tóxica",essence:5,minLevel:6,tier:2,color:"#a6e35a",items:["proteina","medicina"],desc:"Burbujas ácidas, niebla densa y criaturas escurridizas.",events:["cruzó un puente de raíces sobre el lodo burbujeante","esquivó una planta carnívora","atrapó un pez con tres colas","se perdió en la niebla y encontró el camino oliendo","descubrió un nido de huevos fosforescentes"]},{id:"tormenta",name:"Meseta de tormentas",essence:3,minLevel:10,tier:3,color:"#ffd166",items:["cristal","proteina"],desc:"Rayos constantes y rocas magnetizadas. Solo para valientes.",events:["sintió cómo se le erizaba todo el cuerpo con un rayo cercano","surfeó una ráfaga de viento","encontró una roca que flotaba","se refugió en una cueva durante la tormenta","cargó energía en un campo magnético"]},{id:"abismo",name:"Abismo de sombras",essence:1,minLevel:14,tier:4,color:"#8a6cff",items:["medicina","golosina"],desc:"Una grieta sin fondo donde la luz se pierde.",events:["bajó tanto que dejó de ver sus propias patas","escuchó susurros que no entendía","encontró ojos brillando en la oscuridad (eran amistosos)","descubrió un río subterráneo","siguió a una sombra que parecía la suya"]},{id:"nebula",name:"Nebulosa psíquica",essence:2,minLevel:18,tier:5,color:"#ff7ad9",items:["golosina","cristal"],desc:"Un lugar entre sueños. El tiempo se dobla y las ideas flotan.",events:["soñó despierto/a con otros mundos","movió una piedra solo con mirarla","flotó entre nubes de colores","conversó (más o menos) con una medusa estelar","olvidó dónde estaba y no le importó"]}],gr=[{mins:15,label:"15 min"},{mins:60,label:"1 h"},{mins:240,label:"4 h"},{mins:480,label:"8 h"}],Ki={energia:25,hambre:25};function Cs(n){return Ir.find(e=>e.id===n)??Ir[0]}function p1(n){return n.expedition?`${n.name} ya está de expedición.`:n.sleeping?`${n.name} está durmiendo.`:n.sick?`${n.name} está enfermo/a.`:n.needs.energia<Ki.energia?`${n.name} necesita al menos ${Ki.energia} de energía.`:n.needs.hambre<Ki.hambre?`${n.name} tiene demasiada hambre para viajar.`:null}function m1(n,e,t,i=Date.now()){n.expedition={zone:e.id,start:i,end:i+t*6e4,seed:Math.random()*2**31>>>0}}function Ia(n,e=Date.now()){return!!n.expedition&&e>=n.expedition.end}function Th(n,e=Date.now()){if(!n.expedition)return"";const t=Math.max(0,n.expedition.end-e),i=Math.ceil(t/6e4);return i>=60?`${Math.floor(i/60)} h ${i%60?`${i%60} min`:""}`.trim():`${i} min`}function g1(n,e){let t=es(n);for(let i=0;i<40&&dt(t)!==e;i++)t=es(n);return t}function v1(n,e=Date.now()){const t=n.expedition;if(!t)return null;const i=Cs(t.zone),s=Math.max(1,(t.end-t.start)/6e4),a=e>=t.end;if(n.expedition=null,!a)return{zone:i,story:[`${n.name} volvió antes de tiempo, sin encontrar nada.`],reward:{},xp:0,wild:null,hurt:!1};const r=new Gn(t.seed),o=Math.pow(s/15,.75),c=1+Ei("expedicion"),l=yn(dt(n.genome),i.essence),u={},d=Math.max(1,Math.floor(o*.8));for(let x=0;x<d;x++)if(r.chance(.55)){const P=r.pick(i.items);u[P]=(u[P]??0)+1}const f={credits:Math.round((8+i.tier*5)*o*c*(l>1?1.25:1)),mutagens:r.chance(Math.min(.45,.025*o*c))?1:0,items:u},h=Math.round((10+i.tier*6)*o),g=[],v=r.shuffle([...i.events]),p=s>=240?3:s>=60?2:1;for(let x=0;x<p;x++)g.push(`${n.name} ${v[x]}.`);let m=null;if(r.chance(Math.min(.95,.2*o))){const x=g1(r,i.essence);m={name:Fn(x),genome:x,source:"salvaje",level:At(n.level+r.int(-1,2),1,30)},g.push(`¡Se hizo amigo/a de un ${m.name} salvaje y trajo una muestra de su ADN!`)}const y=l<1&&r.chance(.35);y&&g.push(`La ${yt[i.essence].name.toLowerCase()} del lugar le pasó factura: volvió algo magullado/a.`);const _=n.needs;return _.energia=At(_.energia-Ki.energia,0,100),_.hambre=At(_.hambre-Ki.hambre,0,100),_.higiene=At(_.higiene-20,0,100),_.animo=At(_.animo+12,0,100),y&&(_.salud=At(_.salud-18,0,100)),m&&!L.genePool.some(x=>JSON.stringify(x.genome)===JSON.stringify(m.genome))&&(L.genePool.unshift(m),L.genePool=L.genePool.slice(0,24)),{zone:i,story:g,reward:f,xp:h,wild:m,hurt:y}}const Ci=[{name:"Liga Probeta",desc:"Primeros pasos en el laboratorio.",levels:[1,3],color:"#45d4dd"},{name:"Liga Espora",desc:"Criaturas en pleno crecimiento.",levels:[4,7],color:"#a6e35a"},{name:"Liga Simbiosis",desc:"Genes que empiezan a especializarse.",levels:[8,12],color:"#f1b766"},{name:"Liga Quimera",desc:"Mutaciones salvajes y estrategias duras.",levels:[13,19],color:"#e06f9c"},{name:"Liga Génesis",desc:"La élite de la biología experimental.",levels:[20,28],color:"#a77bff"}],x1=[["Ayudante Brio","Becario"],["Lía Fermenta","Botánica"],["Teo Cápsula","Técnico"],["Nara Pólen","Exploradora"],["Dr. Osmo","Director de Probeta"],["Kai Micelio","Micólogo"],["Ivy Córtex","Neuróloga"],["Rui Plasma","Físico"],["Sol Ámbar","Paleontóloga"],["Dra. Vesta Spor","Directora de Espora"],["Milo Vector","Genetista"],["Uma Coral","Bióloga marina"],["Fen Ozono","Climatólogo"],["Zoe Enzima","Bioquímica"],["Prof. Ilan Simbio","Director de Simbiosis"],["Rex Mutágeno","Rebelde"],["Ada Prisma","Cristalógrafa"],["Nox Umbral","Investigador nocturno"],["Vera Tox","Toxicóloga"],["La Quimera Gris","Leyenda"],["Orión Helix","Arquitecto genético"],["Lyra Nébula","Astrobióloga"],["Ciro Fractal","Matemático"],["Selene Abismo","Abisóloga"],["Dra. Ánima Prime","Fundadora del Génesis"]];function _1(n){const e={fue:0,vel:0,res:0,int:0,ada:0},t=n.pick(Un);for(const i of Un)e[i]=n.range(.5,1.5)+(i===t?1.2:0);return e}function va(n){const e=[],[t,i]=Ci[n].levels,s=[];for(let a=0;a<5;a++){const r=new Gn(7919*(n+1)+a*104729),o=a===4;let c=es(r);for(let _=0;_<12&&s.includes(dt(c));_++)c=es(r);s.push(dt(c));const l=o?i+(n===0?1:2):Math.round(t+(i-t)*a/3),u=l>=9?2:l>=4?1:0,d=_1(r),f=l*(1.8+n*.35)*(o?1.6:1)*(n===0&&a<2?.3:1),h=Un.reduce((_,x)=>_+d[x],0),g={};for(const _ of Un)g[_]=Math.round(d[_]/h*f);const v=[],p=u+(o?1:0);for(let _=0;_<p;_++){const x=li.filter(b=>b.can(c,u,v)),P=r.pick(x);P.apply(c),v.push(P.id)}const[m,y]=x1[n*5+a];e.push({id:`L${n}R${a}`,league:n,trainer:m,title:y,name:Fn(c),genome:c,level:l,stage:u,trained:g,mutations:v,boss:o,skill:Math.max(.1,Math.min(.95,.35+n*.13+(o?.15:0)-(n===0?(3-Math.min(a,3))*.08:0))),reward:Math.round((25+l*9)*(o?2:1))})}return e}const y1=["Alfa","Beta","Gamma"];function Gl(n){const e=va(n).filter(t=>!t.boss);return[0,1,2].map(t=>{const i=[t,(t+1)%4,(t+2)%4].map(a=>{const r=e[a],o=Math.min(30,r.level+1+t),c={...r.trained};for(const l of Un)c[l]=Math.round(c[l]*(1+t*.08));return{...r,level:o,trained:c,genome:{...r.genome}}}),s=e[t];return{id:`L${n}T${t}`,league:n,name:`Escuadrón ${y1[t]}`,trainer:s.trainer,members:i,reward:Math.round(i.reduce((a,r)=>a+r.reward,0)*.75),skill:Math.min(.95,s.skill+.05+t*.05)}})}function b1(n){const e=qr(n);return{stats:e,hp:Ra(e,n.level)}}function M1(n){return Rr(Pa(n))}function Ah(n=Date.now()){const e=new Date(n);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function S1(n){const[e,t,i]=n.split("-").map(Number);return Ah(new Date(e,t-1,i-1,12).getTime())}function Na(n){L.credits+=n.credits??0,L.mutagens+=n.mutagens??0;for(const[e,t]of Object.entries(n.items??{}))L.inventory[e]=(L.inventory[e]??0)+t}function Tn(n){if(!n)return"";const e=[];n.credits&&e.push(`+${n.credits} biocréditos`),n.mutagens&&e.push(`+${n.mutagens} mutágeno${n.mutagens>1?"s":""}`);const t={algas:"néctar",proteina:"proteína",cristal:"cristal",golosina:"golosina",medicina:"suero",tinte:"tinte"};for(const[i,s]of Object.entries(n.items??{}))e.push(`+${s} ${t[i]??i}`);return e.join(" · ")}const jr=n=>ti.emit("reward",n),Ch=[{id:"feed",kind:"feed",goal:[3,5],text:n=>`Alimenta a tus criaturas ${n} veces`,reward:{credits:25}},{id:"pet",kind:"pet",goal:[4,6],text:n=>`Dale ${n} caricias a tu ANIMA`,reward:{credits:20,items:{golosina:1}}},{id:"clean",kind:"clean",goal:[2,3],text:n=>`Limpia el hábitat ${n} veces`,reward:{credits:25}},{id:"train",kind:"train",goal:[2,3],text:n=>`Completa ${n} entrenamientos`,reward:{credits:40}},{id:"win",kind:"win",goal:[2,3],text:n=>`Gana ${n} combates`,reward:{credits:50}},{id:"adv",kind:"advWin",goal:[1,1],text:()=>"Gana un combate con ventaja de esencia",reward:{credits:35,items:{cristal:1}}},{id:"exp",kind:"expedition",goal:[1,2],text:n=>`Completa ${n} expedición${n>1?"es":""}`,reward:{credits:45}},{id:"card",kind:"card",goal:[1,1],text:()=>"Crea una carta de tu ANIMA",reward:{credits:30}},{id:"team",kind:"teamWin",goal:[1,1],text:()=>"Gana un combate en equipo",reward:{credits:60},available:()=>L.creatures.length>=2},{id:"buy",kind:"buy",goal:[1,2],text:n=>`Compra ${n} artículo${n>1?"s":""} en la tienda`,reward:{credits:15,items:{algas:2}}}],Hl={credits:40,items:{golosina:1,cristal:1}};function w1(n){const e=new Gn(a_("mis"+n)),t=e.shuffle(Ch.filter(r=>!r.available||r.available())),i=t.find(r=>["feed","pet","clean"].includes(r.id)),s=t.find(r=>["train","win","adv"].includes(r.id)),a=t.find(r=>r!==i&&r!==s);return[i,s,a].map(r=>({id:r.id,progress:0,goal:e.int(r.goal[0],r.goal[1]),claimed:!1}))}function Nr(n){return Ch.find(e=>e.id===n)}function Ur(n){const e=(n-1)%7+1;return e===7?{credits:60,mutagens:1}:{credits:15+e*5,items:e===4?{proteina:1}:void 0}}function Ks(n=Date.now()){const e=Ah(n),t=L.daily;return t.day===e&&t.missions.length?!1:(t.streak=t.lastLogin===S1(e)?t.streak+1:1,t.lastLogin=e,t.day=e,t.loginClaimed=!1,t.missions=w1(e),It(),!0)}function Ph(){if(Ks(),L.daily.loginClaimed)return null;const n=Ur(L.daily.streak);return L.daily.loginClaimed=!0,Na(n),It(),n}function E1(n){const e=L.daily.missions[n];if(!e||e.claimed||e.progress<e.goal)return null;e.claimed=!0;const t=Nr(e.id).reward;return Na(t),L.daily.missions.every(i=>i.claimed)&&(Na(Hl),jr({kind:"daily",title:"¡Misiones del día completas!",reward:Hl})),It(),t}function Vl(){return L.daily.missions.filter(n=>!n.claimed&&n.progress>=n.goal).length+(L.daily.loginClaimed?0:1)}const T1={feed:"feeds",clean:"cleans",pet:"pets",expedition:"expeditions",card:"cards",teamWin:"teamWins",onlineWin:"onlineWins"};function Yt(n,e=1){Ks();const t=T1[n];t&&(L.stats[t]+=e);for(const i of L.daily.missions){if(i.claimed||Nr(i.id).kind!==n)continue;const s=i.progress;i.progress=Math.min(i.goal,i.progress+e),s<i.goal&&i.progress>=i.goal&&jr({kind:"mission",title:`Misión lista: ${Nr(i.id).text(i.goal)}`})}Ac(),It()}const Yr=["body","head","eyes","eyeCount","mouth","limbs","wings","tail","horns","spines","material","pattern","temper"],A1={body:"Cuerpos",head:"Cabezas",eyes:"Ojos",eyeCount:"Cantidad de ojos",mouth:"Bocas",limbs:"Extremidades",wings:"Alas y aletas",tail:"Colas",horns:"Cuernos y antenas",spines:"Espinas y placas",material:"Materiales",pattern:"Patrones",temper:"Temperamentos"};function Rh(n){return n==="eyeCount"?["1 ojo","2 ojos","3 ojos","4 ojos","5 ojos","6 ojos"]:[...rn[n]]}const Fr=Yr.reduce((n,e)=>n+Rh(e).length,0);function xa(){return Yr.reduce((n,e)=>n+(L.codex.parts[e]?.length??0),0)}function ts(n,e=!0){var r;const t=L.codex;let i=0;for(const o of Yr){const c=n[o],l=(r=t.parts)[o]??(r[o]=[]);l.includes(c)||(l.push(c),i++)}const s=Fn(n);t.species.includes(s)||t.species.push(s);const a=dt(n);return t.essences.includes(a)||t.essences.push(a),t.tempers.includes(n.temper)||t.tempers.push(n.temper),i&&e&&jr({kind:"codex",title:`Códice: ${i} pieza${i>1?"s":""} nueva${i>1?"s":""} (${xa()}/${Fr})`}),Ac(),It(),i}function Lh(n){L.codex.mutations.includes(n)||L.codex.mutations.push(n),Ac()}function C1(){for(const n of L.creatures)ts(n.genome,!1),n.mutations.forEach(Lh);for(const n of L.genePool)ts(n.genome,!1)}const vr=n=>L.creatures.reduce((e,t)=>Math.max(e,n(t)),0),P1=n=>L.league.defeated.includes(`L${n}R4`),$l=[{id:"hatch1",name:"Primer latido",desc:"Incuba tu primera criatura.",reward:{credits:30},progress:()=>[L.creatures.length>0?1:0,1]},{id:"pets50",name:"Mano amiga",desc:"Da 50 caricias.",reward:{credits:40,items:{golosina:2}},progress:()=>[L.stats.pets,50]},{id:"feeds50",name:"Chef del laboratorio",desc:"Alimenta 50 veces.",reward:{credits:40},progress:()=>[L.stats.feeds,50]},{id:"bond100",name:"Alma gemela",desc:"Alcanza vínculo 100 con una criatura.",reward:{credits:80,mutagens:1},progress:()=>[Math.round(vr(n=>n.bond)),100]},{id:"train20",name:"Disciplina",desc:"Completa 20 entrenamientos.",reward:{credits:60},progress:()=>[L.stats.trained,20]},{id:"win10",name:"Contendiente",desc:"Gana 10 combates.",reward:{credits:60},progress:()=>[L.stats.wins,10]},{id:"win50",name:"Veterano/a de la arena",desc:"Gana 50 combates.",reward:{credits:150,mutagens:1},progress:()=>[L.stats.wins,50]},...Ci.slice(1).map((n,e)=>({id:`league${e+1}`,name:`Acceso: ${n.name}`,desc:`Desbloquea la ${n.name}.`,reward:{credits:60+e*30},progress:()=>[L.league.unlocked>=e+1?1:0,1]})),{id:"champion",name:"Campeón/a del Génesis",desc:"Vence a la Dra. Ánima Prime.",reward:{credits:400,mutagens:3},progress:()=>[P1(Ci.length-1)?1:0,1]},{id:"mature",name:"Plena madurez",desc:"Lleva una criatura a la etapa de Madurez.",reward:{credits:80,mutagens:1},progress:()=>[vr(n=>n.stage)>=2?1:0,1]},{id:"lvl15",name:"Nivel 15",desc:"Sube una criatura al nivel 15.",reward:{credits:100},progress:()=>[Math.min(15,vr(n=>n.level)),15]},{id:"lvl30",name:"Nivel máximo",desc:"Sube una criatura al nivel 30.",reward:{credits:250,mutagens:2},progress:()=>[Math.min(30,vr(n=>n.level)),30]},{id:"breed1",name:"Nueva generación",desc:"Cruza dos ADN por primera vez.",reward:{credits:50},progress:()=>[L.stats.bred,1]},{id:"breed5",name:"Genetista",desc:"Realiza 5 cruces.",reward:{credits:120,mutagens:1},progress:()=>[L.stats.bred,5]},{id:"mut10",name:"Mutante",desc:"Descubre 10 mutaciones distintas.",reward:{credits:100},progress:()=>[L.codex.mutations.length,10]},{id:"mutAll",name:"Catálogo de mutaciones",desc:`Descubre las ${li.length} mutaciones.`,reward:{credits:300,mutagens:3},progress:()=>[L.codex.mutations.length,li.length]},{id:"codex30",name:"Curiosidad científica",desc:"Descubre 30 piezas del códice.",reward:{credits:60},progress:()=>[xa(),30]},{id:"codex55",name:"Enciclopedia viva",desc:"Descubre 55 piezas del códice.",reward:{credits:150,mutagens:1},progress:()=>[xa(),55]},{id:"codexAll",name:"Códice completo",desc:`Descubre las ${Fr} piezas.`,reward:{credits:400,mutagens:3},progress:()=>[xa(),Fr]},{id:"species10",name:"Taxónomo/a",desc:"Registra 10 especies distintas.",reward:{credits:80},progress:()=>[L.codex.species.length,10]},{id:"essAll",name:"Las seis esencias",desc:"Registra criaturas de las 6 esencias.",reward:{credits:120,mutagens:1},progress:()=>[L.codex.essences.length,6]},{id:"tempAll",name:"Psicólogo/a animal",desc:"Conoce los 6 temperamentos.",reward:{credits:100},progress:()=>[L.codex.tempers.length,6]},{id:"exp5",name:"Explorador/a",desc:"Completa 5 expediciones.",reward:{credits:70},progress:()=>[L.stats.expeditions,5]},{id:"exp25",name:"Cartógrafo/a",desc:"Completa 25 expediciones.",reward:{credits:200,mutagens:1},progress:()=>[L.stats.expeditions,25]},{id:"team1",name:"Trabajo en equipo",desc:"Gana un combate en equipo.",reward:{credits:80},progress:()=>[L.stats.teamWins,1]},{id:"team10",name:"Escuadrón genético",desc:"Gana 10 combates en equipo.",reward:{credits:200,mutagens:1},progress:()=>[L.stats.teamWins,10]},{id:"online1",name:"Rival de verdad",desc:"Gana un combate en la arena online.",reward:{credits:80},progress:()=>[L.stats.onlineWins,1]},{id:"decor5",name:"Hogar, dulce laboratorio",desc:"Consigue 5 decoraciones.",reward:{credits:80},progress:()=>[L.decor.owned.length,5]},{id:"card1",name:"Fotógrafo/a",desc:"Crea una carta de tu ANIMA.",reward:{credits:30},progress:()=>[L.stats.cards,1]},{id:"streak7",name:"Constancia",desc:"Visita el laboratorio 7 días seguidos.",reward:{credits:100,mutagens:1},progress:()=>[Math.min(7,L.daily.streak),7]}];let Go=!1;function Ac(){if(!Go){Go=!0;try{for(const n of $l){if(L.achievements[n.id])continue;const[e,t]=n.progress();e>=t&&(L.achievements[n.id]=Date.now(),Na(n.reward),jr({kind:"achievement",title:n.name,reward:n.reward}))}}finally{Go=!1}}}const Dh={};function Vn(n,e){Dh[n]=e}class R1{constructor(){le(this,"engine");le(this,"lab");le(this,"_arena",null);le(this,"current",null);le(this,"currentName","");le(this,"tickAcc",0);le(this,"pendingAway",null);le(this,"refreshHome",null);le(this,"notifiedExp",new Set);le(this,"perf",{t:0,low:0,stage:0})}init(e){this.engine=new i_(e,L.settings.quality),this.lab=new C_(L.settings.quality),this.engine.setView(this.lab),this.engine.onFrame(t=>this.frame(t)),this.applyDecor(),!L.codex.species.length&&L.creatures.length&&C1(),Ks(),this.catchUp(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?this.catchUp():(L.lastTick=Date.now(),Dt())}),window.addEventListener("pagehide",()=>Dt())}get arena(){return this._arena||(this._arena=new L_(L.settings.quality)),this._arena}catchUp(){const e=Date.now(),t=(e-L.lastTick)/6e4;L.lastTick=e;const i=[];if(t>.05){for(const s of L.creatures)i.push(...a1(s,t));It(),ti.emit("tick")}for(const s of L.creatures)s.expedition&&Ia(s,e)&&!this.notifiedExp.has(s.id+s.expedition.end)&&(this.notifiedExp.add(s.id+s.expedition.end),i.push(`🧭 ${s.name} volvió de su expedición. ¡Recoge su botín!`));return t>20&&L.creatures.length&&(this.pendingAway={mins:t,msgs:i},ti.emit("away")),i}frame(e){this.current?.update?.(e),this.adaptPerformance(e),this.tickAcc+=e,this.tickAcc>=10&&(this.tickAcc=0,this.catchUp().forEach(i=>ti.emit("notice",i)))}go(e,t){this.current?.leave(),ln().innerHTML="",f1(),document.getElementById("floaters").innerHTML="",this.currentName=e;const i=Dh[e];if(!i)throw new Error("Pantalla desconocida: "+e);this.current=i(t)}applyDecor(){this.lab.setTheme(Xr()),this.lab.setDecor(L.decor.placed)}adaptPerformance(e){const t=this.perf;document.visibilityState!=="visible"||t.stage>=3||(t.t+=e,!(t.t<4)&&(e>1/28&&e<.095?t.low+=e:t.low=Math.max(0,t.low-e*.5),t.low>3&&(t.low=0,t.t=2,t.stage++,t.stage===1&&this.engine.quality==="alta"?(this.engine.setQuality("baja"),L.settings.quality="baja",It(),ti.emit("notice","Ajusté los gráficos para que el juego vaya más fluido.")):this.engine.setResolution(t.stage===2?1:.8))))}useLab(){this.engine.setView(this.lab),zl("lab")}useArena(){this.engine.setView(this.arena),zl("arena")}showActive(){const e=nn();if(!e||e.expedition){this.lab.main.clear(),this.lab.setGoo(0);return}this.lab.main.set(e.genome,e.stage),this.lab.setGoo(e.goo)}setQuality(e){L.settings.quality=e,Dt(),location.reload()}}const ce=new R1,Cc="1.2.0",L1="cristobalx-beep/anima",Ho=[{id:"idea",label:"Idea",emoji:"💡"},{id:"error",label:"Error",emoji:"🐞"},{id:"diseno",label:"Diseño",emoji:"🎨"},{id:"balance",label:"Dificultad",emoji:"⚖️"},{id:"otro",label:"Otro",emoji:"💬"}],D1={title:"Inicio",editor:"Editor genético",incubate:"Incubación",home:"Laboratorio",training:"Entrenamiento",arena:"Arena",battle:"Combate",evolve:"Evolución",breed:"Cruce genético",archive:"Bioarchivo"},Ih="anima.feedback.draft";function I1(){const n={kind:"idea",text:"",name:"",tech:!0};try{return{...n,...JSON.parse(localStorage.getItem(Ih)||"{}")}}catch{return n}}function ra(n){try{localStorage.setItem(Ih,JSON.stringify(n))}catch{}}function N1(){const n=navigator.userAgent,e=/Android/.test(n)?"Android":/iPhone|iPad|iPod/.test(n)?"iPhone/iPad":/Windows/.test(n)?"Windows":/Mac/.test(n)?"Mac":/Linux/.test(n)?"Linux":"otro",t=/Edg\//.test(n)?"Edge":/SamsungBrowser/.test(n)?"Samsung Internet":/CriOS|Chrome\//.test(n)?"Chrome":/FxiOS|Firefox\//.test(n)?"Firefox":/Safari\//.test(n)?"Safari":"navegador",i=window.matchMedia?.("(display-mode: standalone)").matches?" · instalada":"";return`${e} · ${t}${i}`}function id(n){const e=nn(),t=[`Versión ${Cc}`,`Pantalla: ${D1[n]??n}`,`Dispositivo: ${N1()} · ${window.innerWidth}×${window.innerHeight} · ${Math.round(ce.engine.fps)} FPS · gráficos ${L.settings.quality}`];return e&&t.push(`Criatura: Nv. ${e.level} · etapa ${e.stage+1} · ${L.creatures.length} en el Bioarchivo · ${Ci[L.league.unlocked]?.name??"-"}`),t}function Kr(){const n=ce.currentName,e=I1(),t=cn(`${sn("Sugerir una mejora","Ideas, errores o cosas que te gustaría ver")}
    <div class="tabs fb-kinds">${Ho.map(l=>`<button class="tab ${l.id===e.kind?"on":""}" data-a="kind" data-id="${l.id}">${l.emoji} ${l.label}</button>`).join("")}</div>
    <textarea class="field fb-text" id="fbText" maxlength="1500" placeholder="Cuéntanos qué mejorarías… Si es un error, ¿qué hiciste justo antes?">${oe(e.text)}</textarea>
    <input class="field" id="fbName" maxlength="40" placeholder="Tu nombre (opcional)" value="${oe(e.name)}" style="margin-top:8px">
    <div class="toggle"><span>Adjuntar datos técnicos<br><span class="small muted">Versión, pantalla, tipo de celular y nivel. Ayuda a encontrar errores.</span></span><button class="switch ${e.tech?"on":""}" data-a="tech"></button></div>
    <div class="col" style="margin-top:12px">
      <button class="btn primary block" data-a="wa">${re("chat")} Enviar por WhatsApp</button>
      <div class="row">
        <button class="btn block small" data-a="gh">${re("github")} GitHub</button>
        <button class="btn ghost block small" data-a="copy">${re("copy")} Copiar</button>
      </div>
    </div>
    <p class="small muted center" style="margin:10px 0 0">WhatsApp abre tus chats: elige a quien te pasó el juego. GitHub deja la sugerencia en una lista pública (necesita cuenta).</p>`),i=t.root.querySelector("#fbText"),s=t.root.querySelector("#fbName");i.addEventListener("input",()=>{e.text=i.value,ra(e)}),s.addEventListener("input",()=>{e.name=s.value,ra(e)});const a=()=>Ho.find(l=>l.id===e.kind)??Ho[0],r=()=>e.text.trim().length>=3?!0:(J.error(),Ie("Escribe tu sugerencia primero.","bad"),i.focus(),!1),o=l=>{J.select(),Ie(l,"good",3200),e.text="",ra(e),t.close()},c=(l=!0)=>{const u=a(),d=l?"*":"",f=l?"_":"",h=[`${u.emoji} ${d}ANIMA · ${u.label}${d}`,"",e.text.trim()];return e.name.trim()&&h.push("",`— ${e.name.trim()}`),e.tech&&h.push("",...id(n).map(g=>`${f}${g}${f}`)),h.join(`
`)};Ct(t.root,{kind:l=>{e.kind=l.dataset.id,ra(e),t.root.querySelectorAll(".fb-kinds .tab").forEach(u=>u.classList.toggle("on",u.dataset.id===e.kind)),J.tap()},tech:l=>{e.tech=!e.tech,ra(e),l.classList.toggle("on",e.tech),J.tap()},wa:()=>{r()&&(window.open(`https://wa.me/?text=${encodeURIComponent(c())}`,"_blank","noopener"),o("¡Gracias! Elige el chat en WhatsApp y envíalo."))},gh:()=>{if(!r())return;const l=a(),u=e.text.trim(),d=u.split(`
`)[0],f=`${l.emoji} ${l.label}: ${d.length>70?d.slice(0,67)+"…":d}`,h=[u,e.name.trim()?`
— ${e.name.trim()}`:"",e.tech?`
---
${id(n).map(g=>`- ${g}`).join(`
`)}`:""].join(`
`);window.open(`https://github.com/${L1}/issues/new?title=${encodeURIComponent(f)}&body=${encodeURIComponent(h)}`,"_blank","noopener"),o('¡Gracias! Revisa la página de GitHub y pulsa "Create".')},copy:async()=>{r()&&(await Da(c(!1))?o("Sugerencia copiada. Pégala donde quieras."):Ie("No se pudo copiar.","bad"))}})}Vn("title",()=>{ce.useLab();const n=L.creatures.length>0,e=es(new Gn(Hs()));n?ce.showActive():ce.lab.main.set(e,2),ce.lab.setCam("home"),ce.lab.setGoo(0),ce.lab.dim=1,ce.lab.main.anim&&(ce.lab.main.anim.allowWander=!1,ce.lab.main.anim.setState("idle"));let t=0,i=6;const s=gt(`<div class="title-screen">
    <div class="logo">
      <svg class="dna" viewBox="0 0 120 34" fill="none" stroke="#7ff3ff" stroke-width="2.2" stroke-linecap="round">
        <path d="M4 17c14-16 28-16 42 0s28 16 42 0 20-12 28-6"/><path d="M4 17c14 16 28 16 42 0s28-16 42 0 20 12 28 6" stroke="#b89cff"/>
        <path d="M18 8v18M32 6v22M60 9v16M74 7v20M88 10v14" stroke-width="1.4" opacity=".7"/>
      </svg>
      <h1>ANIMA</h1>
      <div class="tag">CREA · CRÍA · EVOLUCIONA · COMPITE</div>
    </div>
    <div class="title-actions">
      ${n?`<button class="btn primary block" data-a="continue">${re("play")} Continuar</button>`:""}
      <button class="btn ${n?"":"primary"} block" data-a="new">${re("dna")} ${n?"Nueva criatura":"Comenzar"}</button>
      <div class="row">
        <button class="btn ghost block small" data-a="import">${re("archive")} Importar partida</button>
        <button class="btn ghost block small" data-a="feedback">${re("idea")} Sugerir mejora</button>
      </div>
      <div class="version">Laboratorio genético v${Cc} · Guardado automático en este dispositivo</div>
    </div>
  </div>`);return ln().appendChild(s),Ct(s,{continue:()=>{ua(),J.select(),ce.go("home")},new:async()=>{if(ua(),J.select(),n&&L.creatures.length>=6){Ie("Tu Bioarchivo está lleno (6 criaturas).","bad");return}if(n){const a=await Vt("Nueva criatura","<p>Diseñarás una nueva criatura que se sumará a tu Bioarchivo. Tus criaturas actuales se conservan.</p>",[{label:"Ir al editor genético",cls:"primary",value:"ok"},{label:"Borrar todo y empezar de cero",cls:"pink",value:"reset"},{label:"Cancelar",cls:"ghost",value:"cancel"}]);if(a==="cancel")return;if(a==="reset"){if(await Vt("¿Seguro?","<p>Se borrará toda tu partida (criaturas, créditos y progreso). No se puede deshacer.</p>",[{label:"Sí, borrar todo",cls:"pink",value:"yes"},{label:"Cancelar",cls:"ghost",value:"no"}])!=="yes")return;xh()}}ce.go("editor",{mode:"create"})},feedback:()=>{ua(),J.tap(),Kr()},import:async()=>{ua();let a="";await Vt("Importar partida",'<p class="small muted">Pega aquí el texto de respaldo exportado desde Ajustes.</p><textarea class="field" id="imp" placeholder="Pega tu respaldo…"></textarea>',[{label:"Importar",cls:"primary",value:"ok"},{label:"Cancelar",cls:"ghost",value:"cancel"}],{onMount:o=>o.querySelector("#imp").addEventListener("input",c=>a=c.target.value)})==="ok"&&(O_(a)?(Ie("Partida importada.","good"),ce.go("title")):Ie("El respaldo no es válido.","bad"))}}),{update(a){t+=a*.25,ce.lab.yaw=Math.sin(t)*.6,n||(i-=a,i<=0&&(i=6,ce.lab.main.set(es(new Gn(Hs())),2),ce.lab.bursts.emit(new R(0,1,0),"#7ff3ff",40,2)))},leave(){ce.lab.yaw=0}}});const Wl=["body","head","eyes","eyeCount","mouth","limbs","legPairs","wings","tail","horns","spines","material","pattern","temper"],Nh=["hue1","hue2","hueGlow"],U1=[6,3,4,7,1,0];function F1(n,e,t){let i=e-n;return i>128&&(i-=256),i<-128&&(i+=256),(Math.round(n+i*t)+256)%256}function O1(n,e,t,i=.08,s=null){const a={},r=[];let o=0;for(const c of Nn){const l=c.key;if(Wl.includes(l)){const u=t.chance(.5);u&&o++,a[l]=u?n[l]:e[l]}else if(Nh.includes(l))a[l]=F1(n[l],e[l],t.range(.15,.85));else{const u=t.range(.2,.8);a[l]=At(Math.round(n[l]+(e[l]-n[l])*u+t.range(-12,12)),0,c.max)}t.chance(i)&&(a[l]=Uh(l,a[l],c.max,t),l==="material"&&s!==null&&t.chance(.5)&&(a.material=U1[s]??a.material),r.push(l))}return{child:a,mutated:r,fromA:Math.round(o/Wl.length*100)}}function Uh(n,e,t,i){if(Wl.includes(n)){let s=i.int(0,t);return s===e&&(s=(e+1)%(t+1)),s}return Nh.includes(n)?(e+i.int(30,226))%256:At(Math.round(e+i.range(-60,60)),0,t)}function k1(n,e,t=2){const i={...n},s=[],a=e.shuffle(Nn.map(r=>r));for(let r=0;r<t;r++){const o=a[r];i[o.key]=Uh(o.key,i[o.key],o.max,e),s.push(o.key)}return{genome:i,changed:s}}function Zr(n,e){const t=document.getElementById("gl");let i=!1,s=0,a=0,r=0,o=0;const c=d=>{i=!0,s=a=d.clientX,r=d.clientY,o=0},l=d=>{if(!i)return;const f=d.clientX-s;s=d.clientX,o+=Math.abs(f),n(f)},u=d=>{i&&o<8&&Math.hypot(d.clientX-a,d.clientY-r)<10&&e?.(d.clientX,d.clientY),i=!1};return t.addEventListener("pointerdown",c),window.addEventListener("pointermove",l),window.addEventListener("pointerup",u),()=>{t.removeEventListener("pointerdown",c),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",u)}}function z1(n,e=40){const t=yt[dt(n.genome)];return`<div class="ess-badge" style="background:${t.color};color:${t.color};width:${e}px;height:${e}px"><span style="color:#0b0a1a">${t.name.slice(0,2).toUpperCase()}</span></div>`}function ci(n){return wr[n]}function Ti(n,e,t="mid"){return new Promise(i=>{if(L.tutorial[n])return i();const r=gt(`<div class="tut glass" style="top:${t==="top"?"calc(150px + var(--safe-top))":t==="bottom"?"auto":"40%"};bottom:${t==="bottom"?"calc(190px + var(--safe-bottom))":"auto"}"><div class="bot">IA</div><div class="grow"><p>${e}</p><button class="btn small primary">Entendido</button></div></div>`);r.querySelector("button").addEventListener("click",()=>{L.tutorial[n]=!0,It(),r.remove(),i()}),ka().appendChild(r)})}const sd=[{id:"body",label:"Cuerpo",icon:"body",gene:"body"},{id:"head",label:"Cabeza",icon:"head",gene:"head"},{id:"eyes",label:"Ojos",icon:"eye",gene:"eyes"},{id:"mouth",label:"Boca",icon:"mouth",gene:"mouth"},{id:"limbs",label:"Extremidades",icon:"limb",gene:"limbs"},{id:"wings",label:"Alas / Aletas",icon:"wing",gene:"wings"},{id:"tail",label:"Cola",icon:"tail",gene:"tail"},{id:"horns",label:"Cuernos",icon:"horn",gene:"horns"},{id:"spines",label:"Espinas",icon:"spine",gene:"spines"},{id:"material",label:"Material",icon:"sparkle",gene:"material"},{id:"temper",label:"Temperamento",icon:"heart",gene:"temper"},{id:"color",label:"Color",icon:"palette"},{id:"shape",label:"Proporciones",icon:"sliders"}],Vo="linear-gradient(90deg,#ff4d4d,#ffb84d,#f5ff4d,#4dff88,#4dfff3,#4d7bff,#b84dff,#ff4dcf,#ff4d4d)";Vn("editor",n=>{const e=n?.mode??"create";ce.useLab();const t=ce.lab;t.setCam("editor"),t.setGoo(0),t.dim=1;const i=nn();let s=e==="recolor"&&i?Fo(i.genome):r_(),a=e==="recolor"&&i?i.stage:2;const r=e==="recolor"?sd.filter(p=>p.id==="color"):sd;let o=r[0].id,c=!1;const l=gt(`<div>
    <div class="editor-top">
      <button class="icon-btn" data-a="back">${re("back")}</button>
      <div class="ttl glass"><b>${e==="recolor"?"TINTE GENÉTICO":"EDITOR GENÉTICO"}</b><div class="small muted" id="species"></div></div>
      ${e==="create"?`<button class="icon-btn" data-a="stage" title="Ver etapa">${re("egg")}</button>`:""}
    </div>
    <div class="stats-mini glass" id="stats"></div>
    <div class="editor-panel glass">
      <div class="tabs" id="tabs"></div>
      <div id="content" style="overflow-y:auto;max-height:26vh"></div>
      <div class="editor-actions">
        ${e==="create"?`<button class="btn" data-a="random">${re("random")} Aleatorio</button>
        <button class="btn pink" data-a="mutate">${re("sparkle")} Mutar</button>`:""}
        <button class="btn primary" data-a="done">${re("check")} ${e==="create"?"Crear":"Aplicar"}</button>
      </div>
    </div>
  </div>`);ln().appendChild(l);const u=Zr(p=>t.drag(p)),d=()=>{c||(c=!0,requestAnimationFrame(()=>{c=!1,t.main.set(s,a),t.main.anim&&(t.main.anim.allowWander=!1,t.main.anim.lookTarget=t.camera.position),v()}))},f=()=>{et("#tabs",l).innerHTML=r.map(p=>`<button class="tab ${p.id===o?"on":""}" data-a="tab" data-t="${p.id}">${re(p.icon)}${p.label}</button>`).join(""),et("#tabs .tab.on",l)?.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})},h=(p,m,y=0,_=hh[p],x="",P=s[p])=>`<label class="slider"><span>${m}</span><input type="range" min="${y}" max="${_}" value="${P}" data-g="${p}" ${x?`style="--track:${x}"`:""}></label>`,g=()=>{const p=et("#content",l),m=r.find(y=>y.id===o);if(m.gene){const y=rn[m.gene];let _="";m.id==="eyes"&&(_=`<div class="sliders" style="margin-top:8px">${h("eyeCount",`Cantidad: ${Vs(s)}`,0,5)}</div>`),m.id==="limbs"&&s.body!==3&&(_=`<div class="sliders" style="margin-top:8px">${h("legPairs",`Pares: ${As(s)}`,0,3)}</div>`),m.id==="temper"&&(_=`<p class="small muted" style="margin:8px 2px 0">${ai[s.temper].emoji} ${ai[s.temper].desc}</p>`),m.id==="limbs"&&s.body===3&&(_=`<div class="sliders" style="margin-top:8px">${h("legPairs",`Tentáculos: ${As(s)*2+2}`,0,3)}</div>`),p.innerHTML=`<div class="opts">${y.map((x,P)=>`<button class="opt ${s[m.gene]===P?"on":""}" data-a="opt" data-i="${P}">${x}</button>`).join("")}</div>${_}`}else m.id==="color"?p.innerHTML=`<div class="sliders">
        ${h("hue1","Tono principal",0,255,Vo)}
        ${h("hue2","Tono secundario",0,255,Vo)}
        ${h("hueGlow","Brillo / ojos",0,255,Vo)}
        ${h("sat","Saturación",0,255,"linear-gradient(90deg,#777,#ff4dcf)")}
        ${h("light","Luminosidad",0,255,"linear-gradient(90deg,#111,#fff)")}
      </div>
      <div class="muted small" style="margin:8px 0 4px">Patrón</div>
      <div class="opts">${rn.pattern.map((y,_)=>`<button class="opt ${s.pattern===_?"on":""}" data-a="pat" data-i="${_}">${y}</button>`).join("")}</div>`:p.innerHTML=`<div class="sliders">
        ${h("size","Tamaño")}${h("length","Largo del cuerpo")}${h("girth","Grosor")}
        ${h("headSize","Cabeza")}${h("limbLength","Extremidades")}${h("neck","Cuello")}
      </div>`;p.querySelectorAll("input[type=range]").forEach(y=>{y.addEventListener("input",_=>{const x=_.target;s[x.dataset.g]=Number(x.value);const P=x.parentElement.querySelector("span");x.dataset.g==="eyeCount"&&(P.textContent=`Cantidad: ${Vs(s)}`),x.dataset.g==="legPairs"&&(P.textContent=s.body===3?`Tentáculos: ${As(s)*2+2}`:`Pares: ${As(s)}`),d()})})},v=()=>{const p=_h(s),m=yt[dt(s)],y=yh(s).filter(_=>_!=="placaje"&&_!=="concentrar");et("#species",l).textContent=`Especie: ${Fn(s)}`,et("#stats",l).innerHTML=`
      <div class="row" style="justify-content:space-between"><span class="ess-chip" style="color:${m.color}"><i style="background:${m.color}"></i>${m.name}</span></div>
      ${Un.map(_=>`<div class="stat-line"><span>${ji[_]}</span><div class="bar"><i style="width:${Math.min(100,p[_]/32*100)}%"></i></div><b>${p[_]}</b></div>`).join("")}
      <div class="muted" style="margin-top:4px;font-size:10.5px;line-height:1.35"><b style="color:#dfe1ff">Habilidades potenciales:</b> ${y.map(_=>oe(Lt[_].name)).join(", ")}</div>`};return f(),g(),d(),Ct(l,{back:async()=>{if(J.back(),e==="create"&&L.creatures.length===0){ce.go("title");return}ce.go(e==="create"?"title":"home")},tab:p=>{J.tap(),o=p.dataset.t,f(),g()},opt:p=>{J.select();const m=r.find(y=>y.id===o);s[m.gene]=Number(p.dataset.i),g(),d(),t.bursts.emit(t.main.headWorld(),"#7ff3ff",16,1.2)},pat:p=>{J.select(),s.pattern=Number(p.dataset.i),g(),d()},random:()=>{J.select(),s=es(new Gn(Hs())),g(),d(),t.bursts.emit(t.main.headWorld(),"#b89cff",40,2)},mutate:()=>{J.essence();const p=k1(s,new Gn(Hs()),2);s=p.genome,g(),d(),t.bursts.emit(t.main.headWorld(),"#ff7ad9",50,2.2),Ie(`Mutación: ${p.changed.length} genes alterados`,"",1500)},stage:()=>{J.tap(),a=a===2?0:a+1,Ie(["Vista: cría (Nacimiento)","Vista: Crecimiento","Vista: adulto (Madurez)"][a],"",1400),d()},done:async()=>{if(J.select(),e==="recolor"){if(!i)return;i.genome=Fo(s),L.inventory.tinte=Math.max(0,(L.inventory.tinte??0)-1),Dt(),Ie("Nuevos colores aplicados.","good"),ce.go("home");return}let p="";const m=Fn(s).slice(0,6);await Vt("Nombra a tu ANIMA",`<p class="small muted">Será su nombre para siempre (bueno, casi).</p>
        <input class="field" id="nm" maxlength="14" placeholder="${oe(m)}" autocomplete="off">`,[{label:"Iniciar incubación",cls:"primary",value:"ok"},{label:"Seguir editando",cls:"ghost",value:"cancel"}],{onMount:_=>{const x=_.querySelector("#nm");setTimeout(()=>x.focus(),100),x.addEventListener("input",()=>p=x.value)}})==="ok"&&(p=(p.trim()||m).slice(0,14),ce.go("incubate",{genome:Fo(s),name:p}))}}),{leave(){u(),t.yaw=0}}});Vn("incubate",n=>{ce.useLab();const e=ce.lab;e.setGoo(0),e.main.set(n.genome,0,!0),e.setEmbryo(!0),e.setCam("tank"),e.tankPower=.5,e.main.anim&&e.main.anim.setState("incubate");let t=0,i=!1,s=0;const a=gt(`<div>
    <div class="glass" style="position:absolute;left:50%;transform:translateX(-50%);top:calc(16px + var(--safe-top));padding:12px 16px;width:min(92vw,420px);text-align:center">
      <div class="title-font" style="font-weight:800;letter-spacing:.12em">INCUBACIÓN</div>
      <div class="small muted" style="margin:2px 0 8px">${oe(n.name)} se está formando. Toca el tanque para estabilizar los genes.</div>
      <div class="xpbar" style="height:10px"><i id="pb" style="width:0%"></i></div>
      <div class="small" id="phase" style="margin-top:6px;color:#9ff6ff">Replicando ADN…</div>
    </div>
  </div>`);ln().appendChild(a);const r=a.querySelector("#pb"),o=a.querySelector("#phase"),c=["Replicando ADN…","Expresando genes…","Formando tejidos…","Activando sistema nervioso…","¡Despertando!"],l=Zr(()=>{},()=>{if(i)return;t=Math.min(1,t+.07),e.tankPower=1.4,J.bubble();const d=e.tankGroup.position.clone().add({x:0,y:1.2,z:.3});e.bursts.emit(d,"#9ff6ff",14,1.2,{up:1.5,gravity:.6})}),u=async()=>{i=!0,J.hatch(),Bl("#bff9ff"),await Bt(250),e.setEmbryo(!1),e.setCam("home"),e.tankPower=.4;const d=e1(n.name,n.genome,n.generation??1,n.parents);L.creatures.push(d),L.activeId=d.id,ts(d.genome),Yt("hatch"),Dt(),ce.showActive(),e.main.anim&&(e.main.anim.setState("happy"),e.main.anim.play("jump")),e.bursts.emit(e.main.headWorld(),"#ffe6a8",80,2.6),await Bt(900),await Vt(`¡Ha nacido ${oe(n.name)}!`,"<p>Tu ANIMA está en etapa de <b>Nacimiento</b>. Cuídalo/a, entrénalo/a y llévalo/a a la arena para que crezca y exprese todo su potencial genético.</p>",[{label:"Ir al hábitat",cls:"primary",value:"ok"}],{dismiss:!1}),ce.go("home")};return{update(d){if(!i){if(t=Math.min(1,t+d/11),e.tankPower+=(.6-e.tankPower)*Math.min(1,d*1.5),r.style.width=`${t*100}%`,o.textContent=c[Math.min(c.length-1,Math.floor(t*c.length))],s-=d,s<=0){s=.4+Math.random()*.5;const f=e.tankGroup.position.clone();f.y+=.6,e.bursts.emit(f,"#7ff3ff",4,.6,{up:2,gravity:.8,spread:.8,life:2})}t>=1&&u()}},leave(){l(),e.embryo&&e.setEmbryo(!1)}}});const ql="ANIMA-",Fh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function B1(n){let e="";for(let t=0;t<n.length;t+=3){const i=n[t]<<16|(n[t+1]??0)<<8|(n[t+2]??0),s=t+1>=n.length?2:t+2>=n.length?3:4;for(let a=0;a<s;a++)e+=Fh[i>>18-6*a&63]}return e}function G1(n){const e=[];for(let t=0;t<n.length;t+=4){const i=n.slice(t,t+4);let s=0;for(let r=0;r<4;r++){const o=r<i.length?Fh.indexOf(i[r]):0;if(o<0)throw new Error("carácter inválido");s=s<<6|o}const a=i.length===2?1:i.length===3?2:3;for(let r=0;r<a;r++)e.push(s>>16-8*r&255)}return e}function Oh(n){let e=17;for(const t of n)e=e*31+t&255;return e}function Ua(n){const e=[2];e.push(...l_(n.genome)),e.push(n.stage,Math.min(255,n.level));for(const s of Un)e.push(Math.max(0,Math.min(255,Math.round(n.trained[s]))));const t=n.mutations.map(s=>li.findIndex(a=>a.id===s)).filter(s=>s>=0).slice(0,30);e.push(t.length,...t);const i=Array.from(new TextEncoder().encode(n.name.slice(0,16))).slice(0,40);return e.push(i.length,...i),e.push(Oh(e)),ql+B1(e)}function kh(n){try{let e=n.trim().replace(/\s+/g,"");const t=e.indexOf(ql);t>=0&&(e=e.slice(t+ql.length));const i=G1(e);if(i.pop()!==Oh(i)||i[0]!==1&&i[0]!==2)return null;const a=i[0]===1?s_:Nn.length;let r=1;const o=c_(i.slice(r,r+a));r+=a;const c=Math.min(2,i[r++]),l=Math.max(1,Math.min(30,i[r++])),u={};for(const v of Un)u[v]=Math.min(80,i[r++]);const d=i[r++],f=i.slice(r,r+d).map(v=>li[v]?.id).filter(Boolean);r+=d;const h=i[r++];return{name:new TextDecoder().decode(new Uint8Array(i.slice(r,r+h)))||"Anónimo",genome:o,stage:c,level:l,trained:u,mutations:f}}catch{return null}}const kn=1080,Zn=1500,Mi=900,zh="https://cristobalx-beep.github.io/anima/";function H1(){const n=ce.engine,e=ce.lab,t=n.renderer,i=e.main.rig,s=document.createElement("canvas");if(s.width=s.height=Mi,!i)return s;const a=new jt(30,1,.05,80),r=e.main.height,o=i.radius,l=Math.max(r*1.15,o*2.1)/2/Math.tan(Ht.degToRad(15))+o*.4,d=i.root.rotation.y-.5,f=new R(0,r*.48,0);a.position.set(f.x+Math.sin(d)*l*.96,f.y+l*.24,f.z+Math.cos(d)*l*.96),a.lookAt(f),a.updateMatrixWorld();const h=e.gooGroup.visible;e.gooGroup.visible=!1;const g=t.getPixelRatio();return t.setPixelRatio(1),t.setSize(Mi,Mi,!1),uh(a,n.elapsed),t.render(e.scene,a),s.getContext("2d").drawImage(t.domElement,0,0,Mi,Mi),t.setPixelRatio(g),n.resize(),e.gooGroup.visible=h,s}function Fi(n,e,t,i,s,a){n.beginPath(),n.moveTo(e+a,t),n.arcTo(e+i,t,e+i,t+s,a),n.arcTo(e+i,t+s,e,t+s,a),n.arcTo(e,t+s,e,t,a),n.arcTo(e,t,e+i,t,a),n.closePath()}async function V1(n){try{await Promise.all([document.fonts.load('900 80px "Exo 2"'),document.fonts.load("800 30px Nunito")])}catch{}const e=H1(),t=yt[dt(n.genome)],i=Xi(n.genome),s=qr(n),a=document.createElement("canvas");a.width=kn,a.height=Zn;const r=a.getContext("2d"),o=r.createLinearGradient(0,0,0,Zn);o.addColorStop(0,"#1d1b3a"),o.addColorStop(1,"#0b0a1a"),r.fillStyle=o,r.fillRect(0,0,kn,Zn);const c=r.createRadialGradient(kn/2,560,50,kn/2,560,720);c.addColorStop(0,t.color+"55"),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,kn,Zn);const l=r.createLinearGradient(0,0,kn,Zn);l.addColorStop(0,"#45d4dd"),l.addColorStop(.5,t.color),l.addColorStop(1,"#e06f9c"),r.lineWidth=10,r.strokeStyle=l,r.shadowColor=t.color,r.shadowBlur=30,Fi(r,24,24,kn-48,Zn-48,48),r.stroke(),r.shadowBlur=0,r.fillStyle="#7ff3ff",r.font='900 40px "Exo 2", sans-serif',r.textAlign="left",r.fillText("ANIMA",70,100),r.textAlign="right",r.fillStyle="#c9c6ff",r.font="800 30px Nunito, sans-serif",r.fillText(`Nv. ${n.level} · ${ci(n.stage)} · Gen. ${n.generation}`,kn-70,98);const u=kn-140,d=810,f=Mi*(d/u);r.save(),Fi(r,70,130,u,d,36),r.clip(),r.drawImage(e,0,(Mi-f)*.55,Mi,f,70,130,u,d);const h=r.createLinearGradient(0,130+d-220,0,130+d);h.addColorStop(0,"rgba(11,10,26,0)"),h.addColorStop(1,"rgba(11,10,26,0.88)"),r.fillStyle=h,r.fillRect(70,130,u,d),r.restore(),r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.18)",Fi(r,70,130,u,d,36),r.stroke();const g=130+d;r.textAlign="left",r.fillStyle="#ffffff",r.shadowColor="rgba(0,0,0,0.6)",r.shadowBlur=16,r.font='900 92px "Exo 2", sans-serif',r.fillText(n.name,100,g-70),r.shadowBlur=0,r.font="800 32px Nunito, sans-serif",r.fillStyle="#dcdcff",r.fillText(Fn(n.genome),104,g-26);let v=70;const p=(P,b)=>{r.font="800 30px Nunito, sans-serif";const T=r.measureText(P).width+44;r.fillStyle="rgba(255,255,255,0.07)",Fi(r,v,g+26,T,52,26),r.fill(),r.fillStyle=b,r.fillText(P,v+22,g+63),v+=T+14};p(`● ${t.name}`,t.color),p(`${i.emoji} ${i.name}`,"#ffffff"),p(`PV ${Ra(s,n.level)}`,"#7be3a0");const m=g+118;Un.forEach((P,b)=>{const T=b%2,D=Math.floor(b/2),S=70+T*480,M=m+D*56;r.font="800 27px Nunito, sans-serif",r.fillStyle="#b9b7e6",r.fillText(ji[P],S,M+20),r.fillStyle="rgba(255,255,255,0.08)",Fi(r,S+175,M+2,230,22,11),r.fill();const C=r.createLinearGradient(S+175,0,S+405,0);C.addColorStop(0,"#6c4bc6"),C.addColorStop(1,"#45d4dd"),r.fillStyle=C,Fi(r,S+175,M+2,Math.max(22,Math.min(1,s[P]/80)*230),22,11),r.fill(),r.fillStyle="#fff",r.textAlign="right",r.fillText(String(s[P]),S+455,M+22),r.textAlign="left"}),r.font="800 26px Nunito, sans-serif",r.fillStyle="#f1b766";const y=n.loadout.map(P=>Lt[P]?.name).filter(Boolean).join("  ·  ");r.fillText(y.length>62?y.slice(0,60)+"…":y,70,m+178);const _=Ua({name:n.name,genome:n.genome,stage:n.stage,level:n.level,trained:n.trained,mutations:n.mutations});r.fillStyle="rgba(0,0,0,0.35)",Fi(r,60,Zn-168,kn-120,108,22),r.fill(),r.font="700 21px ui-monospace, Menlo, Consolas, monospace",r.fillStyle="#9ff6ff";const x=74;for(let P=0;P<2;P++)r.fillText(_.slice(P*x,(P+1)*x)+(P===1&&_.length>x*2?"…":""),82,Zn-130+P*30);return r.font="800 22px Nunito, sans-serif",r.fillStyle="#a7a6d4",r.fillText("¿Te atreves? Pega mi código en ANIMA → Código ANIMA · "+zh.replace("https://",""),82,Zn-72),a}async function Bh(n){if(!n)return;if(n.expedition){Ie(`${n.name} está de expedición. Espera a que vuelva para la foto.`,"bad");return}ce.showActive();const e=cn(`${sn("Carta de ANIMA","Compártela por WhatsApp o en tus historias")}
    <div class="card-prev"><div class="spinner"></div></div>
    <div class="row" style="margin-top:10px">
      <button class="btn primary block" data-a="share">${re("share")} Compartir</button>
      <button class="btn block" data-a="save">${re("archive")} Guardar</button>
    </div>
    <button class="btn ghost block small" style="margin-top:8px" data-a="code">${re("copy")} Copiar solo el código</button>`);await new Promise(o=>requestAnimationFrame(()=>o(null)));const t=await V1(n),i=t.toDataURL("image/png");e.root.querySelector(".card-prev").innerHTML=`<img src="${i}" alt="Carta de ${oe(n.name)}">`,Yt("card");const s=`anima-${n.name.toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,"-")}.png`,a=await new Promise(o=>t.toBlob(o,"image/png")),r=()=>{const o=document.createElement("a");o.href=i,o.download=s,document.body.appendChild(o),o.click(),o.remove()};Ct(e.root,{share:async()=>{J.select();const o=Ua({name:n.name,genome:n.genome,stage:n.stage,level:n.level,trained:n.trained,mutations:n.mutations}),c=`¡Mira a mi ANIMA ${n.name}! Juega en ${zh} y pega mi código para enfrentarte a mí:
${o}`;if(a){const l=new File([a],s,{type:"image/png"});if(navigator.canShare?.({files:[l]}))try{await navigator.share({files:[l],text:c,title:"Mi ANIMA"});return}catch(u){if(u?.name==="AbortError")return}}r(),await Da(c)&&Ie("Imagen guardada y texto con el código copiado.","good",3200)},save:()=>{J.select(),r(),Ie("Carta guardada.","good")},code:async()=>{const o=Ua({name:n.name,genome:n.genome,stage:n.stage,level:n.level,trained:n.trained,mutations:n.mutations});await Da(o)?Ie("Código copiado.","good"):Ie("No se pudo copiar.","bad")}})}const Fa=()=>{const n=document.getElementById("cr"),e=document.getElementById("mu");n&&(n.textContent=String(L.credits)),e&&(e.textContent=String(L.mutagens)),ce.refreshHome?.()};function Pc(){Ks();const n=cn(""),e=()=>{const t=L.daily,i=(t.streak-1)%7+1,s=t.missions.every(a=>a.claimed);n.root.querySelector(".sheet").innerHTML=`${sn("Misiones del día",`Racha: <b style="color:var(--gold)">${t.streak} día${t.streak===1?"":"s"}</b> · se renuevan a medianoche`)}
      <div class="streak">${Array.from({length:7},(a,r)=>{const o=r+1;return`<div class="sd ${o<i||o===i&&t.loginClaimed?"got":""} ${o===i?"today":""}"><span>Día ${o}</span><b>${o===7?"🧪":o===4?"🥩":"✦"}</b><i>${Tn(Ur(o)).split(" · ")[0].replace(" biocréditos","")}</i></div>`}).join("")}</div>
      ${t.loginClaimed?"":`<button class="btn gold block" data-a="login" style="margin:8px 0 4px">${re("star")} Recoger regalo del día ${i} · ${Tn(Ur(t.streak))}</button>`}
      <div class="list" style="margin-top:10px">${t.missions.map((a,r)=>{const o=Nr(a.id),c=Math.min(100,a.progress/a.goal*100),l=a.progress>=a.goal&&!a.claimed;return`<div class="item mission ${a.claimed?"claimed":""}">
          <div class="grow"><div class="nm">${oe(o.text(a.goal))}</div>
          <div class="mbar"><i style="width:${c}%"></i></div>
          <div class="ds">${a.progress}/${a.goal} · ${Tn(o.reward)}</div></div>
          ${a.claimed?`<span class="muted">${re("check")}</span>`:`<button class="btn small ${l?"gold":"disabled"}" data-a="claim" data-i="${r}">${l?"Recoger":"En curso"}</button>`}
        </div>`}).join("")}</div>
      <p class="small muted center" style="margin-top:10px">${s?"¡Completaste todo por hoy! Vuelve mañana para mantener tu racha.":`Completa las 3 para un bono extra: ${Tn(Hl)}.`}</p>`};e(),Ct(n.root,{login:()=>{const t=Ph();t&&(J.coin(),Ie(`🎁 ${Tn(t)}`,"gold",3e3),Fa(),e())},claim:t=>{const i=E1(Number(t.dataset.i));i&&(J.coin(),Ie(`✅ ${Tn(i)}`,"gold",2600),Fa(),e())}})}async function $1(){if(Ks(),L.daily.loginClaimed||!L.creatures.length)return;const n=L.daily,e=Ur(n.streak),t=await Vt(`¡Día ${n.streak} de racha!`,`<p class="center">Gracias por volver al laboratorio. Tu regalo de hoy:</p>
    <div class="reward-row"><span class="pill" style="color:var(--gold)">${Tn(e)}</span></div>
    <p class="small muted center">Hoy tienes 3 misiones nuevas. Visita el laboratorio cada día: el día 7 regala un mutágeno.</p>`,[{label:"Recoger",cls:"gold",value:"ok"},{label:"Ver misiones",cls:"ghost",value:"mis"}],{dismiss:!1}),i=Ph();i&&(J.coin(),Ie(`🎁 ${Tn(i)}`,"gold",2600)),L.tutorial.dailySeen=!0,It(),Fa(),t==="mis"&&Pc()}function W1(n="piezas"){const e=cn(""),t=()=>{const i=Object.keys(L.achievements).length;let s="";n==="piezas"?s=`<div class="small muted" style="margin-bottom:8px">Piezas descubiertas: <b style="color:var(--cyan)">${xa()}/${Fr}</b> · Especies: <b>${L.codex.species.length}</b> · Esencias: ${yt.map(a=>`<span style="color:${L.codex.essences.includes(a.id)?a.color:"#555"}">●</span>`).join("")}</div>
        <div class="small muted" style="margin-bottom:10px">Se registran al incubar, evolucionar, cruzar, vencer rivales, recibir códigos de amigos y en expediciones.</div>
        ${Yr.map(a=>{const r=Rh(a),o=L.codex.parts[a]??[];return`<div class="codex-row"><div class="ct">${A1[a]} <span class="muted">${o.length}/${r.length}</span></div>
            <div class="codex-chips">${r.map((c,l)=>{const u=o.includes(l),d=a==="temper"&&u?`${ai[l].emoji} ${c}`:c;return`<span class="cx ${u?"on":""}">${u?oe(d):"???"}</span>`}).join("")}</div></div>`}).join("")}`:n==="mut"?s=`<div class="small muted" style="margin-bottom:8px">Mutaciones descubiertas: <b style="color:#c6a8ff">${L.codex.mutations.length}/${li.length}</b></div>
        <div class="list">${li.map(a=>{const r=L.codex.mutations.includes(a.id);return`<div class="item ${r?"":"empty"}"><div class="grow"><div class="nm">${r?oe(a.name):"??? "} <span class="muted small">· ${a.rarity}</span></div><div class="ds">${r?oe(a.desc):"Aún no la has visto expresarse."}</div></div></div>`}).join("")}</div>`:s=`<div class="small muted" style="margin-bottom:8px">Logros: <b style="color:var(--gold)">${i}/${$l.length}</b></div>
        <div class="list">${$l.map(a=>{const r=!!L.achievements[a.id],[o,c]=a.progress(),l=Math.min(100,o/c*100);return`<div class="item ach ${r?"got":""}"><div class="medal">${re(r?"trophy":"star")}</div>
            <div class="grow"><div class="nm">${oe(a.name)}</div><div class="ds">${oe(a.desc)} · ${Tn(a.reward)}</div>
            ${r?"":`<div class="mbar"><i style="width:${l}%"></i></div><div class="ds">${Math.min(o,c)}/${c}</div>`}</div></div>`}).join("")}</div>`,e.root.querySelector(".sheet").innerHTML=`${sn("Códice genético","Todo lo que has descubierto")}
      <div class="tabs" style="margin-bottom:10px">
        <button class="tab ${n==="piezas"?"on":""}" data-a="tab" data-t="piezas">${re("dna")}Piezas</button>
        <button class="tab ${n==="mut"?"on":""}" data-a="tab" data-t="mut">${re("sparkle")}Mutaciones</button>
        <button class="tab ${n==="logros"?"on":""}" data-a="tab" data-t="logros">${re("trophy")}Logros</button>
      </div>${s}`};t(),Ct(e.root,{tab:i=>{n=i.dataset.t,J.tap(),t()}})}function q1(){let n="objetos";const e=cn(""),t=()=>{ce.applyDecor(),It()},i=()=>{const s=L.decor;let a="";if(n==="objetos")a=Object.keys(Qu).map(o=>`<div class="ct" style="margin:10px 0 6px;font-weight:800">${Qu[o]}</div>
        <div class="list">${ca.filter(c=>c.slot===o).map(c=>{const l=s.owned.includes(c.id),u=s.placed[o]===c.id,d=l?u?`<button class="btn small" data-a="remove" data-id="${c.id}">Quitar</button>`:`<button class="btn small primary" data-a="place" data-id="${c.id}">Colocar</button>`:`<button class="btn small gold ${L.credits<c.price?"disabled":""}" data-a="buy" data-id="${c.id}">${re("coin")}${c.price}</button>`;return`<div class="item" ${u?'style="border-color:var(--cyan)"':""}><div class="orb" style="background:${c.color};color:${c.color}"></div>
            <div class="grow"><div class="nm">${oe(c.name)} ${u?'<span class="ess-chip" style="color:var(--cyan)">COLOCADO</span>':""}</div><div class="ds">${oe(c.desc)}</div></div>${d}</div>`}).join("")}</div>`).join("");else{const r=Xr();a=`<p class="small muted" style="margin:0 0 8px">El hábitat cambia la luz del laboratorio y hace más probables las mutaciones (al evolucionar y en los cruces) de su esencia.</p>
        <div class="list">${Lr.map(o=>{const c=o.price===0||s.owned.includes("theme:"+o.id),l=r.id===o.id,u=l?'<span class="ess-chip" style="color:var(--cyan)">ACTIVO</span>':c?`<button class="btn small primary" data-a="theme" data-id="${o.id}">Usar</button>`:`<button class="btn small gold ${L.credits<o.price?"disabled":""}" data-a="buyTheme" data-id="${o.id}">${re("coin")}${o.price}</button>`;return`<div class="item" ${l?'style="border-color:var(--cyan)"':""}><div class="orb" style="background:linear-gradient(135deg,${o.neonA},${o.neonB});color:${o.neonA}"></div>
            <div class="grow"><div class="nm">${oe(o.name)}${o.essence!==null?` <span class="small" style="color:${yt[o.essence].color}">· ${yt[o.essence].name}</span>`:""}</div><div class="ds">${oe(o.desc)}</div></div>${u}</div>`}).join("")}</div>`}e.root.querySelector(".sheet").innerHTML=`${sn("Decorar el laboratorio",`Tienes <b style="color:var(--gold)">${L.credits}</b> biocréditos`)}
      <div class="tabs" style="margin-bottom:6px">
        <button class="tab ${n==="objetos"?"on":""}" data-a="tab" data-t="objetos">${re("sparkle")}Objetos</button>
        <button class="tab ${n==="habitat"?"on":""}" data-a="tab" data-t="habitat">${re("palette")}Hábitat</button>
      </div>${a}`};i(),Ct(e.root,{tab:s=>{n=s.dataset.t,J.tap(),i()},buy:s=>{const a=ca.find(r=>r.id===s.dataset.id);if(L.credits<a.price){J.error(),Ie("No tienes suficientes biocréditos.","bad");return}L.credits-=a.price,L.decor.owned.push(a.id),L.decor.placed[a.slot]=a.id,J.coin(),Yt("decor"),Ie(`${a.name} colocado en el laboratorio.`,"good"),t(),Fa(),i()},place:s=>{const a=ca.find(r=>r.id===s.dataset.id);L.decor.placed[a.slot]=a.id,J.select(),t(),i()},remove:s=>{const a=ca.find(r=>r.id===s.dataset.id);delete L.decor.placed[a.slot],J.back(),t(),i()},buyTheme:s=>{const a=Lr.find(r=>r.id===s.dataset.id);if(L.credits<a.price){J.error(),Ie("No tienes suficientes biocréditos.","bad");return}L.credits-=a.price,L.decor.owned.push("theme:"+a.id),L.decor.theme=a.id,J.coin(),Ie(`Hábitat: ${a.name}`,"good"),t(),Fa(),i()},theme:s=>{L.decor.theme=s.dataset.id,J.select(),t(),i()}})}async function Xl(n){const e=Ia(n),t=v1(n);if(!t)return;Na(t.reward);const i=ss(n,t.xp);e&&Yt("expedition"),t.wild&&ts(t.wild.genome),Dt(),ce.showActive(),ce.refreshHome?.(),e?J.win():J.back(),await Vt(e?`${oe(n.name)} volvió de ${oe(t.zone.name)}`:"Expedición cancelada",`
    <div class="story">${t.story.map(s=>`<p>${oe(s)}</p>`).join("")}</div>
    ${e?`<div class="reward-row"><span class="pill" style="color:#c6a8ff">+${t.xp} XP</span><span class="pill" style="color:var(--gold)">${Tn(t.reward)||"Sin botín"}</span></div>`:""}
    ${t.wild?'<p class="small muted center">El ADN salvaje quedó en tu banco genético: úsalo en el Cruce genético.</p>':""}`,[{label:"Genial",cls:"primary",value:"ok"}]),Jr(n,i)}function Gh(){const n=()=>L.creatures.filter(o=>!o.expedition);let e=(n().find(o=>o.id===L.activeId)??n()[0])?.id??null,t=Ir[0].id,i=1;const s=cn("");let a=0;const r=()=>{const o=L.creatures.filter(g=>g.expedition),c=L.creatures.find(g=>g.id===e&&!g.expedition)??null,l=Cs(t),u=gr[i].mins,d=Math.pow(u/15,.75),f=Math.round((8+l.tier*5)*d),h=c?yn(dt(c.genome),l.essence):1;s.root.querySelector(".sheet").innerHTML=`${sn("Expediciones","Envía criaturas a explorar mientras no juegas")}
      ${o.length?`<div class="ct" style="font-weight:800;margin:4px 0 6px">En curso</div><div class="list">${o.map(g=>{const v=Cs(g.expedition.zone),p=Ia(g),m=Math.min(100,(Date.now()-g.expedition.start)/(g.expedition.end-g.expedition.start)*100);return`<div class="item"><div class="orb" style="background:${v.color};color:${v.color}"></div>
          <div class="grow"><div class="nm">${oe(g.name)} · <span class="muted small">${oe(v.name)}</span></div>
          <div class="mbar"><i style="width:${m}%"></i></div><div class="ds">${p?"¡Volvió! Recoge su botín.":`Vuelve en ${Th(g)}`}</div></div>
          ${p?`<button class="btn small gold" data-a="collect" data-id="${g.id}">Recoger</button>`:`<button class="btn small ghost" data-a="recall" data-id="${g.id}">Llamar</button>`}</div>`}).join("")}</div>`:""}
      <div class="ct" style="font-weight:800;margin:12px 0 6px">Nueva expedición</div>
      ${n().length?`
      <div class="tabs" style="margin-bottom:8px">${n().map(g=>`<button class="tab ${g.id===e?"on":""}" data-a="pick" data-id="${g.id}">${oe(g.name)} · Nv.${g.level}</button>`).join("")}</div>
      <div class="list">${Ir.map(g=>{const v=!c||c.level<g.minLevel,p=yt[g.essence],m=c?yn(dt(c.genome),g.essence):1;return`<button class="card ${v?"locked":""}" data-a="zone" data-id="${g.id}" ${g.id===t?'style="border-color:var(--cyan);box-shadow:var(--glow)"':""}>
          <div class="av" style="background:${g.color}">${re("compass")}</div>
          <div class="grow"><div class="t">${oe(g.name)} <span class="small" style="color:${p.color}">· ${p.name}</span></div>
          <div class="s">${oe(g.desc)}</div>
          <div class="s">${v?`🔒 Nivel ${g.minLevel}`:m>1?'<span style="color:var(--green)">Afinidad: +25% botín</span>':m<1?'<span style="color:var(--red)">Esencia hostil: puede volver lastimado/a</span>':"Zona neutral"}</div></div></button>`}).join("")}</div>
      <div class="tabs" style="margin:10px 0 4px">${gr.map((g,v)=>`<button class="tab ${v===i?"on":""}" data-a="dur" data-i="${v}">${g.label}</button>`).join("")}</div>
      <p class="small muted" style="margin:4px 0 8px">Botín estimado: ~${Math.round(f*(h>1?1.25:1))} biocréditos, objetos de la zona y quizá ADN salvaje o un mutágeno. Gasta ${Ki.energia} de energía y ${Ki.hambre} de nutrición. Sus necesidades no bajan mientras explora.</p>
      <button class="btn primary block" data-a="go">${re("compass")} Enviar${c?` a ${oe(c.name)}`:""}</button>`:'<p class="small muted">Todas tus criaturas están explorando.</p>'}`};r(),a=window.setInterval(()=>{if(!document.body.contains(s.root))return window.clearInterval(a);r()},15e3),Ct(s.root,{pick:o=>{e=o.dataset.id,J.tap(),r()},zone:o=>{const c=Cs(o.dataset.id),l=L.creatures.find(u=>u.id===e);if(!l||l.level<c.minLevel){J.error(),Ie(`Necesita nivel ${c.minLevel}.`,"bad");return}t=c.id,J.tap(),r()},dur:o=>{i=Number(o.dataset.i),J.tap(),r()},go:()=>{const o=L.creatures.find(u=>u.id===e);if(!o)return;const c=Cs(t);if(o.level<c.minLevel){J.error(),Ie(`Necesita nivel ${c.minLevel}.`,"bad");return}const l=p1(o);if(l){J.error(),Ie(l,"bad");return}m1(o,c,gr[i].mins),Dt(),J.select(),Ie(`🧭 ${o.name} partió hacia ${c.name}. Vuelve en ${gr[i].label}.`,"good",3200),ce.showActive(),ce.refreshHome?.(),e=n()[0]?.id??null,r()},collect:async o=>{const c=L.creatures.find(l=>l.id===o.dataset.id);c&&(s.close(),await Xl(c))},recall:async o=>{const c=L.creatures.find(u=>u.id===o.dataset.id);!c||await Vt("¿Llamarlo/a de vuelta?",`<p>${oe(c.name)} volverá ahora, pero sin botín.</p>`,[{label:"Llamar de vuelta",cls:"pink",value:"yes"},{label:"Dejarlo/a explorar",cls:"ghost",value:"no"}])!=="yes"||(s.close(),await Xl(c))}})}function Jr(n,e){e.levels>0&&(J.levelUp(),Ie(`¡${oe(n.name)} subió al nivel ${n.level}!`,"gold",3200),ce.lab.main.anim?.pulseGlow(2),e.canEvolve&&setTimeout(()=>Ie("🧬 ¡Sus genes están listos para evolucionar!","gold",3800),900))}function Hh(n,e=""){const t=n.kind==="fis"?"Físico":n.kind==="esc"?"Esencia":"Apoyo";return`<div class="grow"><div class="nm">${oe(n.name)} <span class="muted small">· ${t}${n.power?` · Poder ${n.power}`:""} · ${n.cost} energía</span></div>
    <div class="ds">${oe(n.desc)} <i style="opacity:.7">(${oe(n.part)})</i></div></div>${e}`}function X1(n){const e=["racion","algas","proteina","cristal","golosina"],t=cn(`${sn("Alimentar","Cada alimento tiene efectos distintos")}
    <div class="item-grid">${e.map(i=>{const s=Aa[i],a=i==="racion"?"∞":String(L.inventory[i]??0);return`<button class="item ${i!=="racion"&&!(L.inventory[i]>0)?"empty":""}" data-a="pick" data-id="${i}"><div class="orb" style="background:${s.color};color:${s.color}"></div>
          <div class="grow"><div class="nm">${s.name}</div><div class="ds">${s.desc}</div></div><div class="qty">${a}</div></button>`}).join("")}</div>
    <button class="btn ghost block small" style="margin-top:10px" data-a="shop">${re("shop")} Comprar más en la tienda</button>`);Ct(t.root,{pick:i=>{const s=i.dataset.id;if(s!=="racion"&&!(L.inventory[s]>0)){J.error(),Ie("No te queda. Cómpralo en la tienda.","bad");return}t.close(),n(s)},shop:()=>{t.close(),da("shop")}})}function da(n){if(n==="ficha")return ad();if(n==="shop")return rd();if(n==="settings")return od();const e=cn(`${sn("Laboratorio","Gestiona tus criaturas y tu investigación")}
    <div class="menu-grid">
      <button class="act" data-a="ficha">${re("book")}Ficha</button>
      <button class="act" data-a="loadout">${re("bolt")}Habilidades</button>
      <button class="act" data-a="archive">${re("archive")}Bioarchivo</button>
      <button class="act" data-a="missions">${re("list")}Misiones${Vl()?`<span class="badge">${Vl()}</span>`:""}</button>
      <button class="act" data-a="explore">${re("compass")}Expediciones</button>
      <button class="act" data-a="codex">${re("trophy")}Códice y logros</button>
      <button class="act" data-a="breed">${re("dna")}Cruce genético</button>
      <button class="act" data-a="decor">${re("sofa")}Decorar</button>
      <button class="act" data-a="card">${re("camera")}Carta</button>
      <button class="act" data-a="shop">${re("shop")}Tienda</button>
      <button class="act" data-a="code">${re("share")}Código ANIMA</button>
      <button class="act" data-a="tint">${re("palette")}Tinte<span class="badge">${L.inventory.tinte??0}</span></button>
      <button class="act" data-a="settings">${re("gear")}Ajustes</button>
      <button class="act" data-a="feedback">${re("idea")}Sugerir</button>
      <button class="act" data-a="title">${re("back")}Menú</button>
    </div>`);Ct(e.root,{ficha:()=>{e.close(),ad()},loadout:()=>{e.close(),Vh()},archive:()=>{e.close(),ce.go("archive")},breed:()=>{e.close(),ce.go("breed")},shop:()=>{e.close(),rd()},code:()=>{e.close(),j1()},tint:()=>{if(!(L.inventory.tinte>0)){J.error(),Ie("Necesitas un Tinte genético (tienda).","bad");return}e.close(),ce.go("editor",{mode:"recolor"})},settings:()=>{e.close(),od()},feedback:()=>{e.close(),Kr()},missions:()=>{e.close(),Pc()},explore:()=>{e.close(),Gh()},codex:()=>{e.close(),W1()},decor:()=>{e.close(),q1()},card:()=>{e.close(),Bh(nn())},title:()=>{e.close(),ce.go("title")}})}function ad(n=nn()){if(!n)return;const e=qr(n),t=yt[dt(n.genome)],i=Mh(n),s=n.loadout.map(c=>Lt[c]).filter(Boolean),a=Math.max(0,Math.floor((Date.now()-n.bornAt)/864e5)),r=n.genome,o=cn(`${sn(oe(n.name),`${Fn(r)} · Generación ${n.generation} · ${a} día${a===1?"":"s"} de vida`)}
    <div class="row" style="flex-wrap:wrap;gap:6px;margin-bottom:10px">
      <span class="ess-chip" style="color:${t.color}"><i style="background:${t.color}"></i>${t.name}</span>
      <span class="ess-chip">${ci(n.stage)}${n.stage<2?` → Nv. ${Ca[n.stage+1]}`:""}</span>
      <span class="ess-chip">Nivel ${n.level}</span>
      <span class="ess-chip">PV ${Ra(e,n.level)}</span>
      <span class="ess-chip">Vínculo ${Math.round(n.bond)}</span>
      <span class="ess-chip">Cuidado ${Math.round(n.care)}%</span>
      <span class="ess-chip">${n.wins}V · ${n.losses}D</span>
      <span class="ess-chip">${Xi(r).emoji} ${Xi(r).name}</span>
    </div>
    <p class="small muted" style="margin:0 0 10px">${oe(Xi(r).desc)}</p>
    <div class="col" style="gap:6px">${Un.map(c=>`<div class="stat-line" style="grid-template-columns:96px 1fr 34px"><span>${ji[c]}</span><div class="bar"><i style="width:${Math.min(100,e[c]/80*100)}%"></i></div><b>${e[c]}</b></div>`).join("")}</div>
    ${i!==1?`<p class="small" style="color:${i<1?"var(--red)":"var(--green)"}">Condición física: ${i<1?"−":"+"}${Math.round(Math.abs(1-i)*100)}% en combate ${i<1?"(cuida sus necesidades)":"(vínculo fuerte)"}</p>`:""}
    <h2 style="font-size:15px;margin:14px 0 6px">Anatomía</h2>
    <div class="small muted" style="line-height:1.5">${rn.body[r.body]} · Cabeza ${rn.head[r.head].toLowerCase()} · ${r.eyeCount+1} ojo(s) ${rn.eyes[r.eyes].toLowerCase()} · Boca: ${rn.mouth[r.mouth].toLowerCase()} · ${rn.limbs[r.limbs]} · Alas: ${rn.wings[r.wings].toLowerCase()} · Cola: ${rn.tail[r.tail].toLowerCase()} · Cuernos: ${rn.horns[r.horns].toLowerCase()} · Espinas: ${rn.spines[r.spines].toLowerCase()} · ${rn.material[r.material]} · Patrón ${rn.pattern[r.pattern].toLowerCase()}</div>
    <h2 style="font-size:15px;margin:14px 0 6px">Habilidades equipadas</h2>
    <div class="list">${s.map(c=>`<div class="item">${Hh(c)}</div>`).join("")}</div>
    <h2 style="font-size:15px;margin:14px 0 6px">Mutaciones</h2>
    <div class="small muted">${n.mutations.length?n.mutations.map(c=>oe(wc[c]?.name??c)).join(" · "):"Ninguna todavía. Evoluciona para mutar."}</div>
    <div class="row" style="margin-top:14px"><button class="btn block" data-a="loadout">${re("bolt")} Habilidades</button><button class="btn primary block" data-a="card">${re("camera")} Carta</button></div>`);Ct(o.root,{loadout:()=>{o.close(),Vh()},card:()=>{o.close(),Bh(n)}})}function Vh(){const n=nn();if(!n)return;const e=Pa(n);let t=[...n.loadout].filter(a=>e.includes(a));const i=()=>{s.root.querySelector(".sheet").innerHTML=`${sn("Habilidades",`Equipa 4 · Disponibles por su anatomía: ${e.length}`)}
      <div class="list">${e.map(a=>{const r=Lt[a],o=t.includes(a);return`<button class="item" data-a="tog" data-id="${a}" style="${o?"border-color:var(--cyan);background:rgba(69,212,221,.12)":""}">${Hh(r,`<div style="color:${o?"var(--cyan)":"var(--muted)"}">${re(o?"check":"info")}</div>`)}</button>`}).join("")}</div>
      <button class="btn primary block" style="margin-top:10px" data-a="save">${re("check")} Guardar (${t.length}/4)</button>`},s=cn("");i(),Ct(s.root,{tog:a=>{const r=a.dataset.id;if(t.includes(r))t=t.filter(o=>o!==r);else if(t.length<4)t.push(r);else{J.error(),Ie("Máximo 4 habilidades. Quita una primero.","bad");return}J.tap(),i()},save:()=>{if(t.length===0){Ie("Equipa al menos una habilidad.","bad");return}n.loadout=t,It(),J.select(),Ie("Habilidades guardadas.","good"),s.close()}})}function rd(){const n=()=>{e.root.querySelector(".sheet").innerHTML=`${sn("Tienda del laboratorio",`Tienes <b style="color:var(--gold)">${L.credits}</b> biocréditos · <b style="color:#c6a8ff">${L.mutagens}</b> mutágenos`)}
      <div class="list">${k_.map(t=>{const i=Aa[t],s=t==="mutageno"?L.mutagens:L.inventory[t]??0;return`<div class="item"><div class="orb" style="background:${i.color};color:${i.color}"></div>
          <div class="grow"><div class="nm">${i.name} <span class="muted small">(tienes ${s})</span></div><div class="ds">${i.desc}</div></div>
          <button class="btn small gold ${L.credits<i.price?"disabled":""}" data-a="buy" data-id="${t}">${re("coin")}${i.price}</button></div>`}).join("")}</div>
      <p class="small muted center" style="margin-top:10px">Gana biocréditos ganando combates y entrenando.</p>`},e=cn("");n(),Ct(e.root,{buy:t=>{const i=Aa[t.dataset.id];L.credits<i.price||(L.credits-=i.price,i.id==="mutageno"?L.mutagens++:L.inventory[i.id]=(L.inventory[i.id]??0)+1,It(),J.coin(),Yt("buy"),Ie(`Compraste: ${i.name}`,"good",1400),n(),document.getElementById("cr")&&(document.getElementById("cr").textContent=String(L.credits)),document.getElementById("mu")&&(document.getElementById("mu").textContent=String(L.mutagens)))}})}function j1(){const n=nn();if(!n)return;const e=Ua({name:n.name,genome:n.genome,stage:n.stage,level:n.level,trained:n.trained,mutations:n.mutations});let t="";const i=cn(`${sn("Código ANIMA","Comparte tu criatura con amigos")}
    <p class="small muted" style="margin-top:0">Envía este código por WhatsApp. Tus amigos podrán enfrentarse a ${oe(n.name)} o usar su ADN para un cruce genético.</p>
    <div class="code-box">${e}</div>
    <div class="row" style="margin-top:8px"><button class="btn block" data-a="copy">${re("copy")} Copiar</button>${typeof navigator.share=="function"?`<button class="btn primary block" data-a="share">${re("share")} Compartir</button>`:""}</div>
    <h2 style="font-size:15px;margin:16px 0 6px">Recibir criatura de un amigo</h2>
    <textarea class="field" id="fc" placeholder="Pega aquí un código ANIMA-…"></textarea>
    <button class="btn primary block" style="margin-top:8px" data-a="read">${re("dna")} Leer código</button>`);i.root.querySelector("#fc").addEventListener("input",s=>t=s.target.value),Ct(i.root,{copy:async()=>{await Da(e)?Ie("Código copiado.","good"):Ie("No se pudo copiar.","bad")},share:async()=>{try{await navigator.share({title:"Mi ANIMA",text:`¡Enfréntate a mi ANIMA ${n.name} (Nv. ${n.level})! Pega este código en el juego:
${e}`})}catch{}},read:async()=>{const s=kh(t);if(!s){J.error(),Ie("Código inválido o incompleto.","bad");return}const a=yt[dt(s.genome)],r=await Vt(oe(s.name),`<p>${Fn(s.genome)} · Nivel ${s.level} · ${ci(s.stage)} · <span style="color:${a.color}">${a.name}</span></p>
        <p class="small muted">${s.mutations.length} mutaciones. ¿Qué quieres hacer?</p>`,[{label:"Duelo amistoso",cls:"primary",value:"duel"},{label:"Guardar su ADN para cruces",cls:"",value:"save"},{label:"Cancelar",cls:"ghost",value:"cancel"}]);(r==="save"||r==="duel")&&(L.genePool.some(o=>JSON.stringify(o.genome)===JSON.stringify(s.genome))||(L.genePool.unshift({name:s.name,genome:s.genome,source:"amigo",level:s.level}),ts(s.genome),L.genePool=L.genePool.slice(0,24),It()),r==="save"&&Ie("ADN guardado en tu banco genético.","good")),r==="duel"&&(i.close(),ce.go("battle",{friend:s}))}})}function od(){const n=L.settings,e=()=>{t.root.querySelector(".sheet").innerHTML=`${sn("Ajustes")}
      <div class="toggle"><span>Efectos de sonido</span><button class="switch ${n.sound?"on":""}" data-a="sound"></button></div>
      <div class="toggle"><span>Música ambiental</span><button class="switch ${n.music?"on":""}" data-a="music"></button></div>
      <div class="toggle"><span>Gráficos de alta calidad<br><span class="small muted">Brillo, pelaje y suavizado. Desactiva en celulares lentos.</span></span><button class="switch ${n.quality==="alta"?"on":""}" data-a="quality"></button></div>
      <div class="col" style="margin-top:14px">
        <button class="btn block" data-a="feedback">${re("idea")} Sugerir una mejora</button>
        <button class="btn block" data-a="export">${re("copy")} Copiar respaldo de la partida</button>
        <button class="btn pink block" data-a="reset">${re("close")} Borrar partida</button>
      </div>
      <p class="small muted center" style="margin-top:12px">ANIMA guarda todo en este dispositivo. Usa el respaldo para pasar tu partida a otro celular.<br>Versión ${Cc} · FPS: ${Math.round(ce.engine.fps)}</p>`},t=cn("");e(),Ct(t.root,{sound:()=>{n.sound=!n.sound,Dr(n.sound,n.music),It(),e(),J.tap()},music:()=>{n.music=!n.music,Dr(n.sound,n.music),It(),e(),J.tap()},quality:()=>{ce.setQuality(n.quality==="alta"?"baja":"alta")},feedback:()=>{t.close(),Kr()},export:async()=>{await Da(F_())?Ie("Respaldo copiado. Guárdalo en un lugar seguro.","good"):Ie("No se pudo copiar.","bad")},reset:async()=>{await Vt("¿Borrar toda la partida?","<p>Se perderán todas tus criaturas y progreso. No se puede deshacer.</p>",[{label:"Sí, borrar",cls:"pink",value:"yes"},{label:"Cancelar",cls:"ghost",value:"no"}])==="yes"&&(xh(),Dt(),t.close(),ce.go("title"))}})}const Y1={hambre:"food",energia:"bolt",animo:"heart",higiene:"drop",salud:"heal"},ld={hambre:"#f1b766",energia:"#45d4dd",animo:"#e06f9c",higiene:"#7cc7ff",salud:"#7be3a0"};Vn("home",()=>{if(!nn())return ce.go("title"),{leave(){}};ce.useLab(),Dr(L.settings.sound,L.settings.music);const e=ce.lab;e.setCam("home"),ce.showActive(),e.main.anim&&(e.main.anim.allowWander=!0,e.main.anim.baseYaw=.5,e.main.anim.lookTarget=e.camera.position);const t=gt(`<div>
    <div class="topbar">
      <div class="idcard glass" data-a="ficha">
        <div id="badge"></div>
        <div class="grow">
          <div class="name" id="nm"></div>
          <div class="sub" id="sub"></div>
          <div class="xpbar"><i id="xp"></i></div>
        </div>
      </div>
      <div class="wallet glass" data-a="shop">
        <div class="pill" style="color:var(--gold)">${re("coin")}<span id="cr"></span></div>
        <div class="pill" style="color:#c6a8ff">${re("flask")}<span id="mu"></span></div>
      </div>
      <div class="top-btns">
        <button class="icon-btn" data-a="settings" aria-label="Ajustes">${re("gear")}</button>
        <button class="icon-btn idea" data-a="feedback" aria-label="Sugerir una mejora">${re("idea")}</button>
      </div>
    </div>
    <div class="needs glass" id="needs"></div>
    <div class="mood-bubble glass" id="mood"></div>
    <div class="side-rail">
      <button class="icon-btn" data-a="missions" aria-label="Misiones">${re("list")}<span class="badge hidden" id="misB"></span></button>
      <button class="icon-btn" data-a="explore" aria-label="Expediciones">${re("compass")}<span class="badge hidden" id="expB"></span></button>
    </div>
    <div class="away-card glass hidden" id="away"></div>
    <div class="hint-tap" id="hint">Toca a tu ANIMA para acariciarlo/a · Arrastra para girar</div>
    <div class="dock glass">
      <div class="dock-row">
        <button class="act" data-a="feed">${re("food")}Alimentar</button>
        <button class="act" data-a="clean">${re("drop")}Limpiar<span class="badge hidden" id="gooB"></span></button>
        <button class="act" data-a="sleep" id="sleepB">${re("moon")}Dormir</button>
        <button class="act" data-a="heal" id="healB">${re("heal")}Curar<span class="badge" id="medB"></span></button>
      </div>
      <div class="dock-row">
        <button class="act main" data-a="train">${re("train")}Entrenar</button>
        <button class="act main" data-a="arena">${re("swords")}Arena</button>
        <button class="act main" data-a="evolve" id="evoB">${re("evolve")}Evolución</button>
        <button class="act main" data-a="more">${re("grid")}Laboratorio</button>
      </div>
    </div>
  </div>`);ln().appendChild(t);const i=()=>nn(),s=()=>{const v=i();if(!v)return;Ks();const p=Vl(),m=et("#misB",t);m.textContent=String(p),m.classList.toggle("hidden",p===0);const y=L.creatures.filter(I=>Ia(I)).length,_=et("#expB",t);_.textContent=y?String(y):"",_.classList.toggle("hidden",y===0);const x=et("#away",t);if(x.classList.toggle("hidden",!v.expedition),t.classList.toggle("is-away",!!v.expedition),v.expedition){const I=Cs(v.expedition.zone),K=Ia(v);x.innerHTML=`<div class="az" style="color:${I.color}">${re("compass")}</div>
        <div class="nm">${oe(v.name)} está explorando</div><div class="muted small">${oe(I.name)} · ${K?"¡ya volvió!":`vuelve en ${Th(v)}`}</div>
        <div class="row" style="margin-top:10px">${K?`<button class="btn gold block" data-a="collectAway">${re("star")} Recoger botín</button>`:`<button class="btn block" data-a="explore">${re("compass")} Ver expedición</button>`}
        ${L.creatures.length>1?`<button class="btn ghost block" data-a="archive">${re("archive")} Cambiar</button>`:""}</div>`}const P=yt[dt(v.genome)];et("#badge",t).innerHTML=z1(v),et("#nm",t).textContent=v.name,et("#sub",t).textContent=`Nv. ${v.level} · ${ci(v.stage)} · ${P.name}`,et("#xp",t).style.width=`${Math.min(100,v.xp/Er(v.level)*100)}%`,et("#cr",t).textContent=String(L.credits),et("#mu",t).textContent=String(L.mutagens),et("#needs",t).innerHTML=Object.keys(mr).map(I=>{const K=v.needs[I];return`<div class="need ${K<25?"low":""}"><div class="ring">${h1(K/100,K<25?"#ff5f7a":ld[I])}<div class="ic" style="color:${ld[I]}">${re(Y1[I])}</div></div>${mr[I]}</div>`}).join("");const b=Sh(v),T={feliz:"#7be3a0",bien:"#45d4dd",triste:"#a7a6d4",enfermo:"#ff5f7a",dormido:"#8f6cf0",hambriento:"#f1b766",cansado:"#7cc7ff"}[b];et("#mood",t).innerHTML=`<span class="mood-dot" style="background:${T};box-shadow:0 0 8px ${T}"></span>${wh[b]}${v.sick?" · necesita suero":""}`,et("#sleepB",t).innerHTML=v.sleeping?`${re("sun")}Despertar`:`${re("moon")}Dormir`;const D=L.inventory.medicina??0;et("#medB",t).textContent=String(D),et("#healB",t).classList.toggle("off",!v.sick&&v.needs.salud>90);const S=et("#gooB",t);S.textContent=String(v.goo),S.classList.toggle("hidden",v.goo===0);const M=La(v);et("#evoB",t).classList.toggle("glow",M),e.dim=v.sleeping?.35:1,e.setGoo(v.expedition?0:v.goo),v.expedition&&(et("#mood",t).innerHTML='<span class="mood-dot" style="background:var(--gold)"></span>De expedición');const U=e.main.anim;if(U&&!["eat"].includes(U.state)){const I=b==="dormido"?"sleep":b==="enfermo"?"sick":b==="triste"||b==="hambriento"||b==="cansado"?"sad":"idle";(U.state!=="happy"||I!=="idle")&&U.setState(I)}};s(),ce.refreshHome=s;const a=()=>{const v=i();return v.expedition?(J.error(),Ie(`${v.name} está de expedición.`,"bad"),!1):!0},r=(v,p="good")=>{v.msg&&Ie(v.msg,v.ok?p:"bad"),v.ok||J.error(),v.level&&Jr(i(),v.level),It(),s()},o=(v=2.5)=>{const p=e.main.anim;p&&(p.setState("happy"),p.play("jump"),setTimeout(()=>{e.main.anim===p&&p.state==="happy"&&p.setState("idle"),s()},v*1e3))},c=Zr(v=>e.drag(v),(v,p)=>{const m=i(),y=e.gooMeshes().length?ce.engine.pick(v,p,e.gooMeshes()):null;if(y){J.pop(),e.removeGooMesh(y.object),r(l1(m));return}if(ce.engine.pick(v,p,e.main.meshes)){const x=c1(m);x.ok?(d1(v,p,x.msg?4:1),x.msg&&(Yt("pet"),J.voice(m.genome.size/255,"feliz"),o())):J.voice(m.genome.size/255,"triste"),r({...x,msg:x.msg},"good")}}),l=ti.on("tick",s),u=ti.on("notice",v=>Ie(v,"bad",4e3)),d=()=>{const v=ce.pendingAway;if(!v)return Promise.resolve("");ce.pendingAway=null;const p=Math.floor(v.mins/60),m=Math.round(v.mins%60),y=i(),_=Object.keys(mr).filter(P=>y.needs[P]<35).map(P=>mr[P].toLowerCase());return Vt("Mientras no estabas…",`<p>Pasaron <b>${p?`${p} h `:""}${m} min</b>. ${oe(y.name)} te extrañó.</p>
      ${_.length?`<p>Necesita atención: <b>${_.join(", ")}</b>.</p>`:"<p>Está en buen estado. ¡Buen trabajo!</p>"}
      ${v.msgs.length?`<p class="small muted">${[...new Set(v.msgs)].map(oe).join("<br>")}</p>`:""}`)},f=ti.on("away",d);setTimeout(async()=>{await d(),L.tutorial.home3&&ce.currentName==="home"&&!document.querySelector(".modal-wrap")&&(await $1(),s())},600),Ct(t,{missions:()=>{J.tap(),Pc()},explore:()=>{J.tap(),Gh()},collectAway:async()=>{await Xl(i()),s()},archive:()=>{J.select(),ce.go("archive")},feed:()=>{a()&&(J.tap(),X1(v=>{const p=i(),m=ed(p,v);if(m.ok&&v!=="racion"&&(L.inventory[v]=Math.max(0,(L.inventory[v]??0)-1)),m.ok){Yt("feed"),J.eat();const y=e.main.anim;y&&(y.setState("eat"),setTimeout(()=>{y.state==="eat"&&y.setState("idle"),o(1.5)},1600)),e.bursts.emit(e.main.headWorld(),Aa[v].color,18,1)}r(m)}))},clean:()=>{if(!a())return;const v=o1(i());if(v.ok){Yt("clean"),J.clean();const p=e.main.headWorld();for(let m=0;m<4;m++)setTimeout(()=>e.bursts.emit(p.clone().add(new R(0,-.3+m*.15,0)),"#bfefff",25,1.6,{up:1,gravity:-.5}),m*150);e.setGoo(0),o(1.5)}r(v)},sleep:()=>{if(!a())return;const v=u1(i());v.ok&&J.sleep(),r(v,"")},heal:()=>{if(!a())return;const v=i();if(!v.sick&&v.needs.salud>90){Ie(`${v.name} está sano/a.`,"");return}if((L.inventory.medicina??0)<=0){Ie("No tienes suero curativo. Cómpralo en la tienda.","bad"),J.error();return}L.inventory.medicina--;const p=ed(v,"medicina");p.ok&&(J.heal(),e.main.anim?.pulseGlow(2),e.bursts.emit(e.main.headWorld(),"#7be3a0",50,1.8)),r(p)},train:()=>{a()&&(J.select(),ce.go("training"))},arena:()=>{a()&&(J.select(),ce.go("arenaMenu"))},evolve:()=>{a()&&(J.select(),ce.go("evolve"))},more:()=>{J.tap(),da()},ficha:()=>{J.tap(),da("ficha")},shop:()=>{J.tap(),da("shop")},feedback:()=>{J.tap(),Kr()},settings:()=>{J.tap(),da("settings")}}),(async()=>{const v=i();await Ti("home1",`¡Hola! Soy la asistente del laboratorio. Este es el hábitat de <b>${oe(v.name)}</b>. Vigila sus necesidades (arriba): nutrición, energía, ánimo, higiene y salud.`,"bottom"),await Ti("home2","Tócalo/a para acariciarlo/a y fortalecer el vínculo. Si aparecen residuos verdes en la plataforma, tócalos o usa <b>Limpiar</b>.","bottom"),await Ti("home3","Gana experiencia <b>entrenando</b> y <b>combatiendo</b> en la arena. Al subir de nivel podrá <b>evolucionar</b> y mutar nuevos rasgos.","bottom")})();let h=8,g=0;return{update(v){if(h-=v,g-=v,g<=0&&nn()?.sleeping&&e.main.rig){g=1.4;const p=ce.engine.project(e.main.headWorld().add(new R(.15,.3,0)));zi(p.x+20,p.y,"z","#b89cff","small")}h<0&&et("#hint",t)?.classList.add("hidden")},leave(){c(),l(),u(),f(),ce.refreshHome=null,e.yaw=0,e.main.anim&&(e.main.anim.allowWander=!1)}}});const $o=14,cd=[{id:"reflejos",name:"Reflejos",stat:"vel",desc:"Toca los orbes de energía antes de que se apaguen.",icon:"bolt",color:"#45d4dd"},{id:"fuerza",name:"Carga muscular",stat:"fue",desc:"Toca rápido para mantener la carga dentro de la zona.",icon:"train",color:"#e06f9c"},{id:"secuencia",name:"Secuencia neural",stat:"int",desc:"Memoriza y repite la secuencia de genes.",icon:"dna",color:"#a77bff"},{id:"equilibrio",name:"Equilibrio",stat:"res",desc:"Mantén pulsado para sostener el orbe dentro de la zona móvil.",icon:"shield",color:"#f1b766"}];function ud(n){return 4+n*2}Vn("training",()=>{const n=nn();if(!n)return ce.go("title"),{leave(){}};ce.useLab();const e=ce.lab;e.setCam("close"),e.main.anim&&(e.main.anim.allowWander=!1);let t=null;const i=()=>{ln().innerHTML="";const r=gt(`<div class="screen-full">
      <div class="screen-head"><button class="icon-btn" data-a="back">${re("back")}</button><div class="ttl glass">ENTRENAMIENTO</div></div>
      <div style="flex:1"></div>
      <div class="glass" style="padding:12px">
        <div class="small muted" style="margin-bottom:8px">Cada sesión cuesta ${$o} de energía. Energía actual: <b style="color:var(--cyan)">${Math.round(n.needs.energia)}</b></div>
        <div class="list">${cd.map(o=>{const c=ud(n.level),l=n.trained[o.stat];return`<button class="card" data-a="go" data-id="${o.id}"><div class="av" style="background:${o.color}">${re(o.icon)}</div>
            <div class="grow"><div class="t">${o.name} · <span style="color:${o.color}">${ji[o.stat]}</span></div><div class="s">${o.desc}</div>
            <div class="s">Entrenado: ${l}/${c}${l>=c?" · sube de nivel para seguir":""}</div></div></button>`}).join("")}</div>
      </div>
    </div>`);ln().appendChild(r),Ct(r,{back:()=>{J.back(),ce.go("home")},go:o=>{const c=cd.find(u=>u.id===o.dataset.id),l=ws(n,$o);if(l){J.error(),Ie(l,"bad");return}J.select(),a(c)}}),Ti("train1","Entrenar mejora sus estadísticas de forma permanente. ¡Tu puntuación decide cuánto aprende!","top")},s=async(r,o)=>{t=null,o=Math.max(0,Math.min(100,Math.round(o))),Eh(n,$o,8,4);const c=ud(n.level),l=o>=85?3:o>=55?2:o>=20?1:0,u=Math.max(0,Math.min(l,c-n.trained[r.stat]));n.trained[r.stat]+=u;const d=o>=70&&n.trained.ada<c&&Math.random()<.5?1:0;n.trained.ada+=d;const f=Math.round((6+Math.round(o*.2))*(1+Ei("xpEntreno"))),h=2+Math.round(o/14);L.credits+=h,L.stats.trained++,Yt("train");const g=ss(n,f);Dt(),o>=55?(J.win(),e.main.anim?.play("jump")):J.lose();const v=o>=85?"¡Excelente!":o>=55?"¡Bien hecho!":o>=20?"Puede mejorar":"Sin progreso";await Vt("",`<div class="result-big" style="color:${r.color}">${v}</div>
      <p class="center">Puntuación: <b>${o}</b></p>
      <div class="reward-row">
        <span class="pill">+${u} ${ji[r.stat]}</span>${d?'<span class="pill">+1 Adaptación</span>':""}
        <span class="pill" style="color:#c6a8ff">+${f} XP</span>
        <span class="pill" style="color:var(--gold)">${re("coin")}+${h}</span>
      </div>
      ${l>u?`<p class="small muted center">${oe(n.name)} alcanzó su límite de ${ji[r.stat]} para su nivel.</p>`:""}`,[{label:"Continuar",cls:"primary",value:"ok"}],{dismiss:!1}),Jr(n,g),i()},a=r=>{ln().innerHTML="";const o=gt(`<div class="game-area">
      <div class="mg-hud"><div class="glass">${r.name}</div><div class="timer"><i id="tm" style="width:100%"></i></div><div class="glass" id="sc">0</div></div>
    </div>`);ln().appendChild(o);const c=o.querySelector("#tm"),l=o.querySelector("#sc"),u=()=>{e.main.anim?.play("nod"),e.bursts.emit(e.main.headWorld(),r.color,10,1.2)};r.id==="reflejos"?t=K1(o,c,l,u,d=>s(r,d)):r.id==="fuerza"?t=Z1(o,c,l,u,d=>s(r,d)):r.id==="secuencia"?t=J1(o,l,u,d=>s(r,d)):t=Q1(o,c,l,u,d=>s(r,d))};return i(),{update(r){t?.update(r)},leave(){t?.stop()}}});function K1(n,e,t,i,s){let r=0,o=.5,c=0,l=0,u=!1;const d=["#45d4dd","#e06f9c","#f1b766","#a77bff","#7be3a0"],f=[],h=()=>window.innerWidth,g=()=>window.innerHeight;return{update(v){if(!u){if(r+=v,o-=v,e.style.width=`${Math.max(0,1-r/20)*100}%`,o<=0&&r<20-.8){o=Math.max(.42,.85-r*.02);const p=Math.max(.75,1.3-r*.025),m=gt(`<button class="orb-target" style="left:${40+Math.random()*(h()-80)}px;top:${g()*.18+Math.random()*g()*.62}px;--c:${d[l%d.length]};--life:${p}s"></button>`);l++;const y={el:m,life:p};m.addEventListener("pointerdown",_=>{_.stopPropagation(),c++,t.textContent=String(c),J.pop(),m.remove(),y.life=-99,c%3===0&&i()}),n.appendChild(m),f.push(y)}for(const p of f)p.life<=-50||(p.life-=v,p.life<=0&&(p.el.remove(),p.life=-99));r>=20&&(u=!0,s(l?c/l*115:0))}},stop(){u=!0}}}function Z1(n,e,t,i,s){let r=0,o=.2,c=0,l=!1,u=.6;const d=gt('<div class="power-meter"><div class="zone" id="z"></div><i id="f"></i></div>'),f=gt('<button class="btn pink big-tap">¡TOCA!</button>');n.append(d,f);const h=d.querySelector("#f"),g=d.querySelector("#z");f.addEventListener("pointerdown",p=>{p.preventDefault(),o=Math.min(1,o+.075),J.tap()});let v=0;return{update(p){if(l)return;r+=p,o=Math.max(0,o-p*(.32+r*.012)),u=.55+Math.sin(r*.6)*.12;const m=u+.22;g.style.bottom=`${u*100}%`,g.style.height=`${(m-u)*100}%`,h.style.height=`${o*100}%`,o>=u&&o<=m&&(c+=p,r-v>2&&(v=r,i())),t.textContent=`${Math.round(c/12*100)}%`,e.style.width=`${Math.max(0,1-r/12)*100}%`,r>=12&&(l=!0,s(c/12*125))},stop(){l=!0}}}function J1(n,e,t,i){const s=["#45d4dd","#e06f9c","#f1b766","#a77bff"],a=[523,659,784,988],r=gt(`<div class="pad4">${s.map((p,m)=>`<button style="--c:${p}" data-i="${m}"></button>`).join("")}</div>`),o=gt('<div class="glass center" style="position:absolute;left:50%;transform:translateX(-50%);top:calc(70px + var(--safe-top));padding:10px 16px;font-weight:800">Observa…</div>');n.append(r,o);const c=Array.from(r.querySelectorAll("button")),l=[];let u=0,d=!1,f=!1,h=0;const g=(p,m=380)=>{c[p].classList.add("lit"),ey(a[p]),setTimeout(()=>c[p].classList.remove("lit"),m)},v=()=>{if(l.push(Math.floor(Math.random()*4)),l.length<3)return v();d=!1,o.textContent="Observa…",u=0;const p=Math.max(300,600-l.length*30);l.forEach((m,y)=>setTimeout(()=>!f&&g(m,p*.7),500+y*p)),setTimeout(()=>{f||(d=!0,o.textContent="Tu turno")},500+l.length*p)};return c.forEach(p=>p.addEventListener("pointerdown",m=>{if(m.preventDefault(),!d||f)return;const y=Number(p.dataset.i);if(g(y,200),y!==l[u]){f=!0,J.error(),o.textContent="Secuencia rota",setTimeout(()=>i(Math.min(100,(h-2)*16+(h>=3?10:0))),700);return}if(u++,u>=l.length){if(h=l.length,e.textContent=String(h),t(),h>=9){f=!0,setTimeout(()=>i(100),500);return}d=!1,setTimeout(v,600)}})),setTimeout(v,400),{update(){},stop(){f=!0}}}function Q1(n,e,t,i,s){let r=0,o=.3,c=0,l=!1,u=0,d=!1;const f=gt('<div class="balance-track"><div class="zone" id="z"></div><div class="marker" id="m"></div></div>'),h=gt('<button class="btn gold big-tap">MANTÉN</button>');n.append(f,h);const g=f.querySelector("#z"),v=f.querySelector("#m"),p=_=>{_.preventDefault(),l=!0},m=()=>l=!1;h.addEventListener("pointerdown",p),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m);let y=0;return{update(_){if(d)return;r+=_,c+=(l?1.5:-1.3)*_,c*=1-_*1.2,o+=c*_,o<0&&(o=0,c=0),o>1&&(o=1,c=0);const x=.5+Math.sin(r*.9)*.25+Math.sin(r*2.3)*.1,P=.13;g.style.bottom=`${(x-P)*100}%`,v.style.bottom=`${o*100}%`,Math.abs(o-x)<P&&(u+=_,r-y>2.5&&(y=r,i())),t.textContent=`${Math.round(u/16*100)}%`,e.style.width=`${Math.max(0,1-r/16)*100}%`,r>=16&&(d=!0,window.removeEventListener("pointerup",m),s(u/16*120))},stop(){d=!0,window.removeEventListener("pointerup",m)}}}let yi=null;function ey(n){if(L.settings.sound)try{yi=yi||new AudioContext;const e=yi.createOscillator(),t=yi.createGain();e.type="triangle",e.frequency.value=n,t.gain.setValueAtTime(.15,yi.currentTime),t.gain.exponentialRampToValueAtTime(.001,yi.currentTime+.35),e.connect(t),t.connect(yi.destination),e.start(),e.stop(yi.currentTime+.4)}catch{}}function jl(n){if(n.length<2)return null;const e=new Map;n.forEach(i=>e.set(i,(e.get(i)??0)+1));const t=Math.max(...e.values());return e.size===n.length&&n.length>=3?{name:"Ecosistema diverso",desc:"Tres esencias distintas: +5% a todas las estadísticas.",mul:{fue:1.05,vel:1.05,res:1.05,int:1.05,ada:1.05}}:t===n.length?{name:`Manada de ${yt[n[0]].name}`,desc:"Todos comparten esencia: +10% Inteligencia y +5% Resistencia.",mul:{int:1.1,res:1.05}}:t>=2?{name:"Simbiosis",desc:"Dos comparten esencia: +6% Fuerza e Inteligencia.",mul:{fue:1.06,int:1.06}}:{name:"Dúo complementario",desc:"Esencias distintas: +4% Velocidad y Adaptación.",mul:{vel:1.04,ada:1.04}}}function dd(n,e){if(!e)return n;const t={...n};for(const i of Object.keys(e.mul))t[i]=Math.round(t[i]*(e.mul[i]??1));return t}let Yl="";async function Qr(n,e){return Yl="La arena online no está configurada.",null}function hd(n){const e=new Uint8Array(n);return crypto.getRandomValues(e),Array.from(e,t=>t.toString(16).padStart(2,"0")).join("")}function eo(){const n=L.online;if(!n.playerId){const e=hd(16);n.playerId=`${e.slice(0,8)}-${e.slice(8,12)}-4${e.slice(13,16)}-a${e.slice(17,20)}-${e.slice(20,32)}`,n.secret=hd(24),It()}return n}const $h=n=>Array.isArray(n)?n[0]:n;async function ty(n,e){const t=eo();Ua({name:n.name,genome:n.genome,stage:n.stage,level:n.level,trained:n.trained,mutations:n.mutations});const i=await Qr("anima_submit",{p_player:t.playerId,p_secret:t.secret,p_nick:e.slice(0,16),p_name:n.name.slice(0,16),p_level:n.level,p_essence:dt(n.genome)});if(!i)return!1;const s=$h(i);return s&&typeof s.rating=="number"&&(t.rating=s.rating),t.nick=e.slice(0,16),t.lastUpload=Date.now(),It(),!0}async function ny(){const n=eo(),e=await Qr("anima_opponents",{p_player:n.playerId,p_rating:n.rating});if(!e)return null;const t=[];for(const i of e){const s=kh(i.code);s&&t.push({playerId:i.player_id,nick:i.nick||"Anónimo",rating:i.rating,creature:s})}return t}async function iy(n,e){const t=eo(),i=await Qr("anima_report",{p_player:t.playerId,p_secret:t.secret});if(!i)return null;const s=$h(i);return s?(t.rating=s.rating,e?t.wins++:t.losses++,It(),s):null}async function sy(){const n=eo(),e=await Qr("anima_leaderboard",{p_player:n.playerId});return e?e.map(t=>({...t,me:!!t.me})):null}const Hi=12;Vn("arenaMenu",n=>{const e=nn();if(!e)return ce.go("title"),{leave(){}};ce.useArena();const t=ce.arena;t.a.set(e.genome,e.stage),t.b.clear(),t.a.anim?.setState("idle"),t.focus=null,t.viewY=.27,t.fracV=.26,t.faceOff();let i=n?.tab??"ligas",s=Math.min(n?.league??L.league.unlocked,L.league.unlocked),a=null,r=null,o=null,c=null;const l=gt(`<div class="screen-full">
    <div class="screen-head"><button class="icon-btn" data-a="back">${re("back")}</button><div class="ttl glass">ARENA</div></div>
    <div style="flex:1"></div>
    <div class="glass" style="padding:12px;max-height:60vh;display:flex;flex-direction:column">
      <div class="seg" id="seg"></div>
      <div id="body" style="display:flex;flex-direction:column;min-height:0;flex:1"></div>
    </div>
  </div>`);ln().appendChild(l);const u=dt(e.genome),d=()=>L.team.map(_=>L.creatures.find(x=>x.id===_)).filter(_=>!!_&&!_.expedition),f=(_,x)=>{_&&t.a.set(_.genome,_.stage),x?(t.b.set(x.genome,x.stage),t.b.anim?.play("jump")):t.b.clear(),t.faceOff()},h=()=>Ci.map((_,x)=>`<button class="tab ${x===s?"on":""}" data-a="league" data-i="${x}" ${x>L.league.unlocked?'style="opacity:.4"':""}>${x>L.league.unlocked?"🔒 ":""}${_.name}</button>`).join(""),g=()=>{const _=Ci[s],x=va(s),P=x.filter(b=>!b.boss&&L.league.defeated.includes(b.id)).length;return`<div class="league-tabs">${h()}</div>
      <div class="small muted" style="margin-bottom:8px">${_.desc} Niveles ${_.levels[0]}–${_.levels[1]}. Vence a los 4 rivales para retar al director/a (${P}/4).</div>
      <div class="list" style="overflow-y:auto;flex:1">${x.map(b=>{const T=yt[dt(b.genome)],D=L.league.defeated.includes(b.id),S=b.boss&&P<4,M=yn(u,dt(b.genome)),C=M>1?'<span style="color:var(--green)">ventaja de esencia</span>':M<1?'<span style="color:var(--red)">desventaja de esencia</span>':"";return`<button class="card ${D?"done":""} ${S?"locked":""} ${b.boss?"boss":""}" data-a="pick" data-id="${b.id}" ${a?.id===b.id?'style="border-color:var(--cyan);box-shadow:var(--glow)"':""}>
          <div class="av" style="background:${T.color}">${b.boss?re("trophy"):T.name.slice(0,2).toUpperCase()}</div>
          <div class="grow"><div class="t">${oe(b.trainer)} <span class="muted small">· ${oe(b.title)}</span></div>
          <div class="s">${oe(b.name)} · Nv. ${b.level} · ${ci(b.stage)} · ${T.name} ${C}</div>
          <div class="s" style="color:var(--gold)">${S?"Bloqueado":`${re("coin")} ${b.reward}${D?" · ✓ vencido":""}`}</div></div></button>`}).join("")}</div>
      <button class="btn primary block ${a?"":"disabled"}" style="margin-top:10px" data-a="fight">${re("swords")} ${a?`Combatir contra ${oe(a.name)}`:"Elige un rival"}</button>`},v=()=>{const _=d(),x=jl(_.map(b=>dt(b.genome))),P=Gl(s);return L.creatures.length<2?`<p class="small muted">El combate en equipo necesita al menos <b>2 criaturas</b> en tu Bioarchivo. Diseña una nueva o cruza dos ADN para formar tu escuadrón.</p>
        <button class="btn block" data-a="archive">${re("archive")} Ir al Bioarchivo</button>`:`<div class="small muted" style="margin-bottom:6px">Elige hasta 3 criaturas (el orden es el de salida):</div>
      <div class="team-pick">${L.creatures.map(b=>{const T=L.team.indexOf(b.id),D=yt[dt(b.genome)],S=b.expedition?"De expedición":ws(b,Math.round(Hi*.8));return`<button class="tp ${T>=0?"on":""} ${S?"off":""}" data-a="toggleTeam" data-id="${b.id}">
          ${T>=0?`<span class="n">${T+1}</span>`:""}<b>${oe(b.name)}</b><span>Nv. ${b.level} · <i style="color:${D.color}">${D.name}</i></span></button>`}).join("")}</div>
      ${x?`<div class="syn">🤝 <b>${oe(x.name)}</b> · ${oe(x.desc)}</div>`:""}
      <div class="league-tabs" style="margin-top:8px">${h()}</div>
      <div class="list" style="overflow-y:auto;flex:1">${P.map(b=>{const T=L.league.defeated.includes(b.id);return`<button class="card ${T?"done":""}" data-a="pickSquad" data-id="${b.id}" ${r?.id===b.id?'style="border-color:var(--cyan);box-shadow:var(--glow)"':""}>
          <div class="av" style="background:linear-gradient(135deg,${b.members.map(D=>yt[dt(D.genome)].color).join(",")})">${re("team")}</div>
          <div class="grow"><div class="t">${oe(b.name)} <span class="muted small">· ${oe(b.trainer)}</span></div>
          <div class="s">${b.members.map(D=>`${oe(D.name)} <span style="color:${yt[dt(D.genome)].color}">Nv.${D.level}</span>`).join(" · ")}</div>
          <div class="s" style="color:var(--gold)">${re("coin")} ${b.reward}${T?" · ✓ vencido":" · +1 mutágeno la primera vez"}</div></div></button>`}).join("")}</div>
      <button class="btn primary block ${r&&_.length>=2?"":"disabled"}" style="margin-top:10px" data-a="fightTeam">${re("swords")} ${_.length<2?"Elige al menos 2 criaturas":r?`Combatir contra ${oe(r.name)}`:"Elige un escuadrón"}</button>`},p=()=>`<div class="center" style="padding:10px 4px">
        <div class="az-big">${re("globe")}</div>
        <h3 style="margin:8px 0 4px;font-family:var(--font-title)">Arena online</h3>
        <p class="small muted">Muy pronto podrás subir a tu ANIMA y pelear contra las criaturas de otros jugadores, con clasificación semanal.</p>
        <p class="small muted">Mientras tanto, reta a tus amigos con el <b>Código ANIMA</b> (menú Laboratorio).</p></div>`,m=()=>{et("#seg",l).innerHTML=`
      <button class="${i==="ligas"?"on":""}" data-a="tab" data-t="ligas">${re("trophy")} Ligas</button>
      <button class="${i==="team"?"on":""}" data-a="tab" data-t="team">${re("team")} Equipo</button>
      <button class="${i==="online"?"on":""}" data-a="tab" data-t="online">${re("globe")} Online</button>`,et("#body",l).innerHTML=i==="ligas"?g():i==="team"?v():p()};m(),Ti("arena1","Cada rival tiene una <b>esencia</b>. El ciclo es: Bioluz › Sombra › Psique › Voltaje › Cristal › Toxina › Bioluz. Atacar con ventaja hace +50% de daño con habilidades de esencia.","top");const y=_=>{J.error(),Ie(_,"bad")};return Ct(l,{back:()=>{J.back(),ce.go("home")},archive:()=>{J.select(),ce.go("archive")},tab:_=>{i=_.dataset.t,J.tap(),a=null,r=null,c=null,f(e,null),m()},league:_=>{const x=Number(_.dataset.i);if(x>L.league.unlocked)return y("Vence al director/a de la liga anterior para desbloquearla.");J.tap(),s=x,a=null,r=null,t.b.clear(),m()},pick:_=>{const x=va(s).find(b=>b.id===_.dataset.id),P=va(s).filter(b=>!b.boss&&L.league.defeated.includes(b.id)).length;if(x.boss&&P<4)return y("Primero vence a los otros 4 rivales de la liga.");J.select(),a=x,f(null,x),m()},fight:()=>{if(!a)return;const _=ws(e,Hi);if(_)return y(_);J.select(),ce.go("battle",{rivalId:a.id})},toggleTeam:_=>{const x=_.dataset.id,P=L.creatures.find(T=>T.id===x);if(L.team.includes(x))L.team=L.team.filter(T=>T!==x);else{const T=P.expedition?`${P.name} está de expedición.`:ws(P,Math.round(Hi*.8));if(T)return y(T);if(L.team.length>=3)return y("Máximo 3 criaturas por equipo.");L.team.push(x)}L.team=L.team.filter(T=>L.creatures.some(D=>D.id===T)),It(),J.tap();const b=d()[0]??e;f(b,r?r.members[0]:null),m()},pickSquad:_=>{r=Gl(s).find(x=>x.id===_.dataset.id)??null,J.select(),f(d()[0]??e,r?.members[0]??null),m()},fightTeam:()=>{const _=d();if(_.length<2)return y("Elige al menos 2 criaturas para tu equipo.");if(r){for(const x of _){const P=ws(x,Math.round(Hi*.8));if(P)return y(P)}J.select(),ce.go("battle",{squadId:r.id})}},upload:async()=>{const _=l.querySelector("#nick")?.value.trim()||"Anónimo";m(),await ty(e,_)?(J.coin(),Ie(`${e.name} ya está en la arena online. ¡Otros jugadores podrán retarlo/a!`,"good",3200)):y(Yl||"No se pudo subir."),m()},search:async()=>{c=null,m(),o=await ny(),m()},pickOnline:_=>{c=o?.[Number(_.dataset.i)]??null,J.select(),c&&f(null,c.creature),m()},fightOnline:()=>{if(!c)return;if(!L.online.lastUpload)return y("Primero sube a tu ANIMA a la arena.");const _=ws(e,Hi);if(_)return y(_);J.select(),ce.go("battle",{online:c})},ranking:async()=>{const _=cn(`${sn("Clasificación online","Los 50 mejores laboratorios")}<div class="center" style="padding:20px"><div class="spinner" style="margin:auto"></div></div>`),x=await sy(),P=_.root.querySelector(".sheet");P.innerHTML=`${sn("Clasificación online","Los 50 mejores laboratorios")}${x===null?`<p class="small muted">${oe(Yl)}</p>`:`<div class="list">${x.map((b,T)=>`<div class="item" ${b.me?'style="border-color:var(--cyan)"':""}>
        <div class="rank">${T+1}</div><div class="grow"><div class="nm">${oe(b.nick)}${b.me?' <span class="ess-chip" style="color:var(--cyan)">TÚ</span>':""}</div>
        <div class="ds">${oe(b.name)} · Nv. ${b.level} · <span style="color:${yt[b.essence]?.color}">${yt[b.essence]?.name}</span> · ${b.wins}V/${b.losses}D</div></div><b style="color:var(--gold)">${b.rating}</b></div>`).join("")}</div>`}`}}),i==="team"&&f(d()[0]??e,null),{leave(){}}});const Wh=10,ay=3;function fd(n,e,t,i,s,a,r,o=50){return{side:n,name:e,genome:t,essence:dt(t),level:i,stats:s,maxHp:a,hp:a,energy:4,abilities:r,statuses:{},bond:o,lastStand:!1,defending:!1}}class ry{constructor(e,t,i,s){le(this,"f");le(this,"rng");le(this,"turn",1);le(this,"winner",null);le(this,"eventUsed",!1);le(this,"reserves",[[],[]]);le(this,"needSwap",[!1,!1]);this.f=[e,t],this.rng=new Gn(i),s&&(this.reserves=s)}alive(e){return this.reserves[e].filter(t=>t.hp>0)}swapIn(e,t,i,s){const a=this.reserves[e],r=a[t];if(!r||r.hp<=0)return;const o=this.f[e];a.splice(t,1),o.hp>0&&(o.defending=!1),a.push(o),this.f[e]=r,s.push({t:"swap",side:e,name:r.name,forced:i})}has(e,t){return(e.statuses[t]?.turns??0)>0}speed(e){let t=e.stats.vel;return this.has(e,"enredado")&&(t*=.5),this.has(e,"lesion")&&(t*=.8),t}canUse(e,t){const i=Lt[t];return!!i&&e.energy>=i.cost}resolveTurn(e){const t=[];if(this.winner!==null)return t;const i=a=>{const r=e[a];return r.type==="swap"?5:r.type==="defend"?2:Lt[r.id]?.priority??0},s=[0,1].sort((a,r)=>{const o=i(r)-i(a);if(o!==0)return o;const c=this.speed(this.f[r])-this.speed(this.f[a]);return Math.abs(c)>.01?c:this.rng.chance(.5)?-1:1});for(const a of this.f)a.defending=!1;for(const a of s){if(this.winner!==null)break;const r=e[a];if(r.type==="swap"){this.swapIn(a,r.index,!1,t);continue}this.needSwap[1-a]&&r.type==="ability"&&(Lt[r.id]?.power??0)>0||this.act(a,r,t)}this.winner===null&&this.endOfTurn(t);for(const a of[0,1])if(this.needSwap[a]&&this.winner===null){this.needSwap[a]=!1;const r=this.reserves[a].findIndex(o=>o.hp>0);r>=0&&this.swapIn(a,r,!0,t)}return this.turn++,t}act(e,t,i){const s=this.f[e],a=this.f[1-e];if(s.hp<=0)return;if(this.has(s,"aturdido")){i.push({t:"skip",actor:e,reason:`${s.name} está aturdido/a y no puede moverse.`}),this.clearStatus(s,"aturdido",i);return}if(this.has(s,"enredado")&&this.rng.chance(.3)){i.push({t:"skip",actor:e,reason:`${s.name} forcejea atrapado/a.`});return}if(t.type==="defend"){s.defending=!0,i.push({t:"defend",actor:e}),this.gainEnergy(s,2,i),this.heal(s,Math.round(s.maxHp*.03),i);return}if(t.type==="swap")return;let r=Lt[t.id];if((!r||s.energy<r.cost)&&(r=Lt.placaje),s.energy-=r.cost,i.push({t:"move",actor:e,ability:r.id}),r.power>0){const o=r.hits??1;for(let c=0;c<o&&a.hp>0;c++){if(!this.rollHit(s,a,r)){if(i.push({t:"miss",actor:e,target:1-e}),c===0)return;break}if(this.hit(s,a,r,i),this.winner!==null)return}}else if(r.effects?.some(o=>o.target==="foe")&&!this.rollHit(s,a,r)){i.push({t:"miss",actor:e,target:1-e});return}for(const o of r.effects??[])this.applyEffect(s,o.target==="self"?s:a,o,i)}rollHit(e,t,i){if(i.neverMiss)return!0;let s=i.acc;this.has(e,"cegado")&&(s*=.6);const a=t.statuses.evasion;return a&&a.turns>0&&i.power>0&&(s*=1-(a.value||.4)),this.rng.next()<s}estimate(e,t,i){if(i.power<=0)return 0;const{atk:s,def:a}=this.atkDef(e,t,i),r=i.kind==="esc"?yn(e.essence,t.essence):1;return i.power*(.26+.027*e.level)*Math.pow(s/a,.7)*r*(i.hits??1)}atkDef(e,t,i){let s=i.kind==="fis"?e.stats.fue:e.stats.int,a=i.kind==="fis"?t.stats.res:(t.stats.res+t.stats.ada)/2;return this.has(e,"atqUp")&&(s*=1.35),this.has(e,"atqDown")&&(s*=.72),this.has(e,"furia")&&(s*=1.3),this.has(e,"lesion")&&(s*=.85),this.has(t,"defUp")&&(a*=1.4),this.has(t,"defDown")&&(a*=.72),{atk:Math.max(1,s),def:Math.max(1,a)}}hit(e,t,i,s){e.side;const{atk:a,def:r}=this.atkDef(e,t,i),o=i.kind==="esc"?yn(e.essence,t.essence):1;let c=.07+(i.crit??0)+e.stats.vel/900;this.has(e,"concentrado")&&(c=1);const l=this.rng.next()<c;l&&this.has(e,"concentrado")&&this.clearStatus(e,"concentrado",s);let u=i.power*(.26+.027*e.level)*Math.pow(a/r,.7)*o;u*=this.rng.range(.88,1.12),l&&(u*=1.5),t.defending&&(u*=.5),this.has(t,"escudo")&&(u*=.5);const d=Math.max(1,Math.round(u));if(this.damage(t,d,l,o,"hit",s),i.drain&&d>0&&this.heal(e,Math.round(d*i.drain),s),i.recoil&&this.damage(e,Math.max(1,Math.round(d*i.recoil)),!1,1,"retroceso",s),i.kind==="fis"&&t.genome.spines===1&&e.hp>0){const f=Math.max(1,Math.round(d*(this.has(t,"defUp")?.18:.06)));this.damage(e,f,!1,1,"espinas",s)}}damage(e,t,i,s,a,r){if(!(e.hp<=0)&&(e.hp-=t,r.push({t:"damage",target:e.side,amount:t,crit:i,eff:s,source:a}),e.hp<=0)){if(!e.lastStand&&e.bond>=60&&this.rng.chance(.25+(e.bond-60)/100)){e.lastStand=!0,e.hp=1,r.push({t:"endure",target:e.side});return}e.hp=0,r.push({t:"faint",target:e.side}),this.alive(e.side).length?this.needSwap[e.side]=!0:this.winner=1-e.side}}heal(e,t,i){if(e.hp<=0||t<=0)return;const s=Math.min(e.maxHp-e.hp,t);s<=0||(e.hp+=s,i.push({t:"heal",target:e.side,amount:s}))}gainEnergy(e,t,i){const s=e.energy;e.energy=At(e.energy+t,0,Wh),e.energy!==s&&i.push({t:"energy",target:e.side,amount:e.energy-s})}addStatus(e,t,i,s,a){if(["veneno","sangrado","aturdido","cegado","enredado","atqDown","defDown","lesion"].includes(t)&&e.stats.ada>18&&this.rng.chance(Math.min(.35,(e.stats.ada-18)/80))){a.push({t:"msg",text:`${e.name} resiste gracias a su Adaptación.`});return}const o=e.statuses[t];e.statuses[t]={turns:Math.max(o?.turns??0,i),value:s||o?.value||0},(!o||o.turns<=0)&&a.push({t:"status",target:e.side,status:t,on:!0})}clearStatus(e,t,i){e.statuses[t]&&e.statuses[t].turns>0&&(delete e.statuses[t],i.push({t:"status",target:e.side,status:t,on:!1}))}applyEffect(e,t,i,s){if(!(t.hp<=0)&&!(i.chance!==void 0&&!this.rng.chance(i.chance)))switch(i.type){case"heal":this.heal(t,Math.round(t.maxHp*(i.value??.2)),s);break;case"energy":this.gainEnergy(t,i.value??1,s);break;case"cleanse":for(const a of Object.keys(t.statuses))["veneno","sangrado","cegado","enredado","atqDown","defDown","lesion","aturdido"].includes(a)&&this.clearStatus(t,a,s);break;default:this.addStatus(t,i.type,i.turns??2,i.value??0,s)}}endOfTurn(e){for(const t of this.f){if(this.winner!==null)return;if(t.hp<=0)continue;const i=t.statuses;if(i.veneno&&i.veneno.turns>0&&this.damage(t,Math.max(1,Math.round(t.maxHp*.055*(i.veneno.value||1))),!1,1,"veneno",e),this.winner!==null||(i.sangrado&&i.sangrado.turns>0&&this.damage(t,Math.max(1,Math.round(t.maxHp*.05)),!1,1,"sangrado",e),this.winner!==null))return;i.regen&&i.regen.turns>0&&this.heal(t,Math.round(t.maxHp*.07),e),this.gainEnergy(t,ay,e);for(const s of Object.keys(i))s==="concentrado"||s==="aturdido"||(i[s].turns--,i[s].turns<=0&&this.clearStatus(t,s,e));i.concentrado&&(i.concentrado.turns--,i.concentrado.turns<=0&&this.clearStatus(t,"concentrado",e))}}}function oy(n,e,t=.6){const i=n.f[e],s=n.f[1-e],a=i.hp/i.maxHp,r=[];for(const l of i.abilities){const u=Lt[l];if(!u||i.energy<u.cost)continue;let d=0;if(u.power>0){const f=n.estimate(i,s,u)*u.acc;d+=f,f>=s.hp&&(d+=60),u.drain&&(d+=f*u.drain*(1-a)*1.5)}for(const f of u.effects??[]){const g=(f.target==="self"?i:s).statuses[f.type]?.turns>0,v=f.chance??1;switch(f.type){case"heal":d+=(1-a)*70*(f.value??.2)*4,a>.85&&(d-=20);break;case"energy":d+=i.energy<4?14:2;break;case"cleanse":{const p=Object.keys(i.statuses).filter(m=>["veneno","sangrado","cegado","enredado","atqDown","defDown","lesion"].includes(m)).length;d+=p*14;break}default:g?d-=10:d+=16*v}}d-=u.cost*1.5,l==="concentrar"&&i.energy>=7&&(d-=30),d+=(Math.random()-.5)*40*(1-t),r.push({act:{type:"ability",id:l},score:d})}let o=8+(i.energy<3?14:0)+(a<.3?6:0);o+=(Math.random()-.5)*20*(1-t),r.push({act:{type:"defend"},score:o});const c=n.reserves[e];if(c.length&&t>.45&&n.turn%2===0&&yn(s.essence,i.essence)>1&&a>.35){let u=-1,d=0;c.forEach((f,h)=>{if(f.hp<=0)return;const g=yn(f.essence,s.essence)-yn(s.essence,f.essence)+f.hp/f.maxHp;g>d&&(d=g,u=h)}),u>=0&&d>1.2&&r.push({act:{type:"swap",index:u},score:45*t+(Math.random()-.5)*20})}return r.sort((l,u)=>u.score-l.score),r[0].act}function ly(n){const e=n.genome;return e.wings>0&&e.wings!==4?"un ala":e.tail>0?"la cola":e.horns>1?"un cuerno":e.body===3?"un tentáculo":"una pata"}function cy(n,e){if(n.eventUsed||n.winner!==null||n.turn<2)return null;const t=n.f[e],i=n.f[1-e],s=t.hp/t.maxHp;if(!n.rng.chance(s<.75?.4:.12))return null;n.eventUsed=!0;const a=n.rng.next();if(a<.45){const r=ly(t);return n.addStatus(t,"lesion",4,0,[]),{title:"Lesión",text:`${t.name} se lesionó ${r}. ¿Qué haces?`,options:[{label:"Curarla",hint:"Usa 3 de energía: quita la lesión y cura un poco.",apply:(o,c,l,u)=>{c.energy=Math.max(0,c.energy-3),o.clearStatus(c,"lesion",u),o.heal(c,Math.round(c.maxHp*.12),u)}},{label:"Protegerla y defender",hint:"Escudo y defensa alta, pero la lesión sigue 2 turnos.",apply:(o,c,l,u)=>{o.addStatus(c,"escudo",2,0,u),o.addStatus(c,"defUp",3,0,u),c.statuses.lesion={turns:2,value:0}}},{label:"Seguir atacando",hint:"Más riesgo: entra en furia (+30% daño) con la lesión activa.",apply:(o,c,l,u)=>{o.addStatus(c,"furia",3,0,u),o.damage(c,Math.max(1,Math.round(c.maxHp*.05)),!1,1,"sangrado",u)}},{label:"Retroceder y reagrupar",hint:"Recupera energía y regenera, pero el rival toma la iniciativa.",apply:(o,c,l,u)=>{o.gainEnergy(c,4,u),o.addStatus(c,"regen",3,0,u),o.addStatus(l,"atqUp",2,0,u)}}]}}return a<.75?{title:"Punto débil",text:`${i.name} deja al descubierto un punto débil.`,options:[{label:"Apuntar al punto débil",hint:"Tu próximo golpe será crítico seguro.",apply:(r,o,c,l)=>r.addStatus(o,"concentrado",3,0,l)},{label:"Romper su guardia",hint:"Baja su defensa durante 3 turnos.",apply:(r,o,c,l)=>r.addStatus(c,"defDown",3,0,l)},{label:"Desconfiar: es una trampa",hint:"Ganas evasión y 1 de energía.",apply:(r,o,c,l)=>{r.addStatus(o,"evasion",2,.45,l),r.gainEnergy(o,1,l)}},{label:"Provocarlo",hint:"Su ataque baja, pero tu defensa también.",apply:(r,o,c,l)=>{r.addStatus(c,"atqDown",3,0,l),r.addStatus(o,"defDown",2,0,l)}}]}:{title:"Vínculo",text:`${t.name} te mira buscando tu apoyo.`,options:[{label:"Animarlo/a con fuerza",hint:t.bond>=50?"Vínculo fuerte: furia y curación.":"Vínculo débil: solo un poco de ánimo.",apply:(r,o,c,l)=>{o.bond>=50?(r.addStatus(o,"furia",2,0,l),r.heal(o,Math.round(o.maxHp*.1),l)):r.gainEnergy(o,1,l)}},{label:"Calmarlo/a",hint:"Limpia estados negativos y regenera.",apply:(r,o,c,l)=>{for(const u of["veneno","sangrado","cegado","enredado","atqDown","defDown","lesion"])r.clearStatus(o,u,l);r.addStatus(o,"regen",2,0,l)}},{label:"Planear juntos",hint:"Recupera 3 de energía.",apply:(r,o,c,l)=>r.gainEnergy(o,3,l)},{label:"Dejar que improvise",hint:"Efecto al azar: puede salir muy bien… o no.",apply:(r,o,c,l)=>{const u=r.rng.next();u<.35?r.addStatus(o,"atqUp",3,0,l):u<.6?r.addStatus(c,"aturdido",1,0,l):u<.8?r.heal(o,Math.round(o.maxHp*.2),l):r.addStatus(o,"cegado",1,0,l)}}]}}Vn("battle",n=>{const e=nn();if(!e)return ce.go("title"),{leave(){}};let t=null,i=null;if(n.rivalId){const B=Number(n.rivalId.slice(1,n.rivalId.indexOf("R")));t=va(B).find(V=>V.id===n.rivalId)??null}if(n.squadId){const B=Number(n.squadId.slice(1,n.squadId.indexOf("T")));i=Gl(B).find(V=>V.id===n.squadId)??null}const s=i?i.members:t?[t]:n.friend?[n.friend]:n.online?[n.online.creature]:[];if(!s.length)return ce.go("arenaMenu"),{leave(){}};const a=!!i,r=i?`${i.trainer} (${i.name})`:t?t.trainer:n.online?n.online.nick:"Amigo/a",o=i?i.skill:t?t.skill:.72,c=a?L.team.map(B=>L.creatures.find(V=>V.id===B)).filter(B=>!!B&&!B.expedition):[e];if(!c.length)return ce.go("arenaMenu"),{leave(){}};const l=a?jl(c.map(B=>dt(B.genome))):null,u=a?jl(s.map(B=>dt(B.genome))):null,d=B=>{const V=qr(B),fe=Mh(B);let be={...V};for(const te of Object.keys(be))be[te]=Math.max(3,Math.round(be[te]*fe));be=dd(be,l);const j=fd(0,B.name,B.genome,B.level,be,Ra(be,B.level),B.loadout.length?B.loadout:["placaje","concentrar"],B.bond);return j.meta={stage:B.stage,id:B.id},j},f=B=>{const V=b1(B),fe=dd(V.stats,u),be=fd(1,B.name,B.genome,B.level,fe,a?Ra(fe,B.level):V.hp,M1(B),50);return be.meta={stage:B.stage},be},h=c.map(d),g=s.map(f),v=new ry(h[0],g[0],(Date.now()&4294967295)>>>0,[h.slice(1),g.slice(1)]),p=()=>v.f[0],m=()=>v.f[1],y=yn(h[0].essence,g[0].essence)>1;ce.useArena();const _=ce.arena;_.a.set(h[0].genome,h[0].meta.stage),_.b.set(g[0].genome,g[0].meta.stage),_.faceOff(),_.intro=1,_.focus=null,_.viewY=.04,_.fracV=.42,_.a.anim?.setState("idle"),_.b.anim?.setState("idle");const x=[_.a,_.b],P=a?`${oe(r)} te reta: ${g.length} contra ${h.length}`:t?`${oe(r)} te desafía con ${oe(g[0].name)}`:n.online?`Arena online: ${oe(r)} con ${oe(g[0].name)}`:`Duelo amistoso contra ${oe(g[0].name)}`,b=gt(`<div>
    <div class="hud">
      <div class="fcard glass" id="f0"></div>
      <div class="fcard glass foe" id="f1"></div>
    </div>
    <div class="battle-log" id="log">${P}</div>
    <div class="moves glass" id="moves"></div>
  </div>`);ln().appendChild(b);const T=[p().hp,m().hp],D=B=>a?`<div class="team-dots">${[v.f[B],...v.reserves[B]].map((fe,be)=>`<i class="${fe.hp<=0?"down":be===0?"cur":""}"></i>`).join("")}</div>`:"",S=(B,V)=>{const fe=yt[B.essence],be=B.hp/B.maxHp*100,j=T[V]/B.maxHp*100,te=Object.keys(B.statuses).filter(ve=>(B.statuses[ve]?.turns??0)>0);return`<div class="nm">${oe(B.name)}</div>
      <div class="lv">Nv. ${B.level} · <span style="color:${fe.color}">${fe.name}</span></div>
      <div class="hpbar"><i class="lag" style="width:${j}%"></i><i class="hp" style="width:${be}%"></i></div>
      <div class="row" style="justify-content:space-between;${V?"flex-direction:row-reverse":""}"><span class="hpnum">${B.hp}/${B.maxHp}</span>
      <div class="energy">${Array.from({length:Wh},(ve,pe)=>`<i class="${pe<B.energy?"on":""}"></i>`).join("")}</div></div>
      ${D(V)}
      <div class="statuses">${te.map(ve=>`<span class="st" style="color:${zo[ve].color}">${zo[ve].name}</span>`).join("")}</div>`},M=()=>{et("#f0",b).innerHTML=S(p(),0),et("#f1",b).innerHTML=S(m(),1),setTimeout(()=>{T[0]=p().hp,T[1]=m().hp},50)};let C=!1;const U=()=>{const B=p(),V=m(),fe=et("#moves",b),be=a&&v.alive(0).length>0;fe.innerHTML=`<div class="moves-grid">${B.abilities.map(j=>{const te=Lt[j],ve=B.energy>=te.cost,pe=te.kind==="esc"?yn(B.essence,V.essence):1,Pe=te.power>0?Math.round(v.estimate(B,V,te)):0,He=te.kind==="esc"?yt[B.essence].color:te.kind==="fis"?"#ff9f6b":"#7be3a0";return`<button class="move ${ve&&!C?"":"no"}" data-a="move" data-id="${j}" style="--mc:${He}">
        <div class="cost">${Array.from({length:te.cost},()=>"<i></i>").join("")}</div>
        <div class="mn">${oe(te.name)}</div>
        <div class="md">${te.power>0?`~${Pe} daño${te.hits?` (${te.hits} golpes)`:""} · `:""}${oe(te.desc)}</div>
        ${pe>1?'<div class="eff">¡Súper eficaz!</div>':pe<1?'<div class="eff" style="color:var(--muted)">Poco eficaz</div>':""}
      </button>`}).join("")}</div>
    <div class="moves-bar">
      <button class="btn ${C?"disabled":""}" data-a="defend">${re("shield")} Defender <span class="small muted">+2⚡</span></button>
      ${be?`<button class="btn ${C?"disabled":""}" data-a="swap">${re("team")} Cambiar</button>`:""}
      <button class="btn ghost ${C?"disabled":""} ${be?"icon-only":""}" data-a="flee" aria-label="Rendirse">${re("back")}${be?"":" Rendirse"}</button>
    </div>`};M(),U(),Ti("battle1","Cada habilidad cuesta <b>energía</b> (rombos dorados). Recuperas 3 por turno, o más si <b>Defiendes</b>. ¡Planifica tus golpes fuertes!","mid"),a&&(setTimeout(()=>{l&&Ie(`🤝 Tu equipo: <b>${oe(l.name)}</b> · ${oe(l.desc)}`,"good",4200)},900),Ti("team1","Combate en equipo: cuando una criatura cae, entra la siguiente. Usa <b>Cambiar</b> para meter a quien tenga ventaja de esencia (cambiar gasta tu turno, pero es lo primero que ocurre).","mid"));const I=B=>et("#log",b).innerHTML=B,K=B=>{const V=x[B].headWorld().clone().add(new R(0,.35,0));return ce.engine.project(V)},ie=async B=>{for(const V of B)switch(V.t){case"move":{const fe=Lt[V.ability],be=v.f[V.actor];I(`<span style="color:${V.actor?"#ff9fb0":"#9ff6ff"}">${oe(be.name)}</span> usa <b>${oe(fe.name)}</b>`);const j=x[V.actor].anim;if(_.focus=V.actor,fe.power>0&&fe.kind==="fis")j?.play("attack"),J.tap();else if(j?.pulseGlow(2.2),j?.play("jump"),fe.kind==="esc"){J.essence();const te=x[V.actor].headWorld(),ve=x[1-V.actor].headWorld();for(let pe=0;pe<5;pe++)setTimeout(()=>_.bursts.emit(te.clone().lerp(ve,pe/4),yt[be.essence].color,12,.8,{gravity:0}),pe*60)}else J.buff();await Bt(fe.power>0?380:520);break}case"defend":{I(`${oe(v.f[V.actor].name)} se pone en guardia`),x[V.actor].anim?.pulseGlow(1),_.bursts.emit(x[V.actor].headWorld(),"#6fd3ff",20,1),J.buff(),await Bt(450);break}case"skip":{I(oe(V.reason)),J.debuff(),await Bt(700);break}case"miss":{const fe=K(V.target);zi(fe.x,fe.y,"Falla","#c9c9ff","small"),x[V.target].anim?.play("jump"),J.miss(),await Bt(450);break}case"damage":{const fe=K(V.target),be=V.source==="veneno"?"#a6e35a":V.source==="sangrado"?"#ff6b81":V.crit?"#ffd166":"#ffffff";zi(fe.x,fe.y,`${V.crit?"¡":""}-${V.amount}${V.crit?"!":""}`,be,V.crit?"crit":V.source!=="hit"?"small":""),V.source==="hit"?(x[V.target].anim?.play("hit"),_.bursts.emit(x[V.target].headWorld(),V.crit?"#ffd166":"#ffffff",V.crit?40:22,2.2),_.doShake(V.crit?.35:.14),V.crit?J.crit():J.hit(),V.eff>1&&setTimeout(()=>zi(fe.x,fe.y+36,"¡Súper eficaz!","#7be3a0","small"),150),V.eff<1&&setTimeout(()=>zi(fe.x,fe.y+36,"Poco eficaz","#a7a6d4","small"),150)):J.debuff(),M(),await Bt(V.source==="hit"?520:380);break}case"heal":{const fe=K(V.target);zi(fe.x,fe.y,`+${V.amount}`,"#7be3a0"),_.bursts.emit(x[V.target].headWorld(),"#7be3a0",26,1.4,{gravity:.6}),J.heal(),M(),await Bt(380);break}case"status":{const fe=zo[V.status],be=K(V.target);V.on&&(zi(be.x,be.y-20,fe.name,fe.color,"small"),fe.good?J.buff():J.debuff()),M(),await Bt(V.on?320:80);break}case"energy":M();break;case"msg":I(oe(V.text)),await Bt(600);break;case"endure":I(`¡${oe(v.f[V.target].name)} resiste con 1 PV gracias a su vínculo!`),x[V.target].anim?.pulseGlow(3),J.buff(),await Bt(900);break;case"faint":x[V.target].anim?.setState("faint"),x[1-V.target].anim?.setState("happy"),J.faint(),I(`${oe(v.f[V.target].name)} ya no puede continuar`),await Bt(1100);break;case"swap":{const fe=v.f[V.side],be=x[V.side];_.bursts.emit(be.headWorld(),yt[fe.essence].color,40,2),J.essence(),be.set(fe.genome,fe.meta?.stage??2),_.faceOff(),be.anim?.setState("idle"),be.anim?.play("jump"),x[1-V.side].anim?.setState("idle"),T[V.side]=fe.hp,I(V.side?`${oe(r)} ${V.forced?"envía a":"cambia a"} <b>${oe(V.name)}</b>`:V.forced?`¡Adelante, <b>${oe(V.name)}</b>!`:`Cambias a <b>${oe(V.name)}</b>`),M(),await Bt(900);break}}_.focus=null},ee=async()=>{const B=cy(v,0);if(!B)return;M(),await Bt(200);const V=await new Promise(be=>{const j=gt(`<div class="modal-wrap"><div class="decision glass">
        <div class="small muted" style="text-transform:uppercase;letter-spacing:.12em;font-weight:900">Decisión en combate · ${oe(B.title)}</div>
        <h2 style="font-family:var(--font-title);margin:6px 0 4px">${oe(B.text)}</h2>
        ${B.options.map((te,ve)=>`<button class="opt-d" data-i="${ve}"><span class="n">${ve+1}</span><div><b>${oe(te.label)}</b><span>${oe(te.hint)}</span></div></button>`).join("")}
      </div></div>`);j.addEventListener("click",te=>{const ve=te.target.closest("[data-i]");ve&&(J.select(),j.remove(),be(Number(ve.dataset.i)))}),ka().appendChild(j)}),fe=[];B.options[V].apply(v,p(),m(),fe),await ie(fe),M(),U()},ue=async B=>{if(C||v.winner!==null)return;C=!0,U();const V=oy(v,1,o),fe=v.resolveTurn([B,V]);if(await ie(fe),M(),v.winner===null&&await ee(),C=!1,v.winner!==null)return we(v.winner===0,!1);U(),I(`Turno ${v.turn} · elige tu acción`)};let Z=!1;const we=async(B,V)=>{if(Z)return;Z=!0,C=!0,U();for(const Ce of c)Eh(Ce,a?Math.round(Hi*.8):Hi,6,8);L.stats.battles++;let fe=0,be=0,j=0,te="",ve="";const pe=Math.round(s.reduce((Ce,Ve)=>Ce+Ve.level,0)/s.length),Pe=t?!L.league.defeated.includes(t.id):i?!L.league.defeated.includes(i.id):!1;if(B){J.win(),L.stats.wins++,i?(fe=Math.round(i.reward*(Pe?1:.4)),be=Math.round((14+pe*5)*(Pe?1:.6)),j=Pe||Math.random()<.15?1:0,Pe&&L.league.defeated.push(i.id),Yt("teamWin")):t?(fe=Math.round(t.reward*(Pe?1:.4)),be=Math.round(18+pe*7*(Pe?1:.6)),(t.boss&&Pe||Math.random()<.12+t.league*.03)&&(j=1),Pe&&L.league.defeated.push(t.id),t.boss&&t.league===L.league.unlocked&&L.league.unlocked<Ci.length-1&&(L.league.unlocked++,te=Ci[L.league.unlocked].name)):(fe=n.online?35:20,be=Math.round(18+pe*5),Math.random()<.05&&(j=1)),fe=Math.round(fe*(1+Ei("creditos")));for(const Ce of c)Ce.wins++,Ce.needs.animo=At(Ce.needs.animo+12,0,100),Ce.bond=At(Ce.bond+2,0,100);if(t||i)for(const Ce of s)L.genePool.some(Ve=>JSON.stringify(Ve.genome)===JSON.stringify(Ce.genome))||(L.genePool.unshift({name:Ce.name,genome:Ce.genome,source:"rival",level:Ce.level}),L.genePool=L.genePool.slice(0,24));for(const Ce of s)ts(Ce.genome,!1);Yt("win"),y&&!a&&Yt("advWin")}else{J.lose(),be=V?0:Math.round(6+pe*2),fe=V?0:4;for(const Ce of c)Ce.losses++,Ce.needs.animo=At(Ce.needs.animo-8,0,100),Ce.needs.salud=At(Ce.needs.salud-6,0,100);Yt("lose")}if(n.online&&!V){const Ce=await iy(n.online.playerId,B);Ce&&(ve=`<p class="center small">Puntuación online: <b style="color:var(--cyan)">${Ce.rating}</b> (${Ce.delta>=0?"+":""}${Ce.delta})</p>`,B&&Yt("onlineWin"))}L.credits+=fe,L.mutagens+=j;const He=c.map(Ce=>ss(Ce,be));Dt(),await Bt(600);const je=a?"Tu equipo":oe(e.name);await Vt("",`<div class="result-big" style="color:${B?"var(--gold)":"var(--muted)"}">${B?"¡VICTORIA!":V?"Retirada":"Derrota"}</div>
      <p class="center">${B?`${je} venció a ${oe(a?i.name:g[0].name)}.`:`${oe(a?i.name:g[0].name)} fue más fuerte esta vez. Entrena, evoluciona o cambia de estrategia.`}</p>
      <div class="reward-row">
        <span class="pill" style="color:#c6a8ff">+${be} XP${a?" c/u":""}</span>
        <span class="pill" style="color:var(--gold)">${re("coin")}+${fe}</span>
        ${j?`<span class="pill" style="color:#c6a8ff">${re("flask")}+1 mutágeno</span>`:""}
      </div>
      ${te?`<p class="center" style="color:var(--gold);font-weight:800">🏆 ¡Desbloqueaste la ${te}!</p>`:""}
      ${ve}
      ${B&&(t||i)?'<p class="small muted center">Su ADN quedó guardado en tu banco genético para cruces.</p>':""}`,[{label:"Continuar",cls:"primary",value:"ok"}],{dismiss:!1}),c.forEach((Ce,Ve)=>Jr(Ce,He[Ve])),n.friend?ce.go("home"):n.online?ce.go("arenaMenu",{tab:"online"}):i?ce.go("arenaMenu",{tab:"team",league:i.league}):ce.go("arenaMenu",{league:t?.league})};return Ct(b,{move:B=>{const V=B.dataset.id;if(!C){if(p().energy<Lt[V].cost){J.error(),Ie("No tienes energía suficiente. Defiende o usa Concentrar.","bad",1800);return}J.select(),ue({type:"ability",id:V})}},defend:()=>{C||(J.select(),ue({type:"defend"}))},swap:async()=>{if(C)return;const B=v.reserves[0],V=m(),fe=await Vt("Cambiar de criatura",`<p class="small muted">Cambiar ocurre antes que cualquier ataque, pero gasta tu turno.</p>
        <div class="list">${B.map((be,j)=>{const te=yn(be.essence,V.essence),ve=yt[be.essence];return be.hp<=0?"":`<button class="item" data-v="${j}"><div class="orb" style="background:${ve.color};color:${ve.color}"></div><div class="grow"><div class="nm">${oe(be.name)} · Nv. ${be.level}</div>
            <div class="ds">PV ${be.hp}/${be.maxHp} · <span style="color:${ve.color}">${ve.name}</span>${te>1?' · <span style="color:var(--green)">ventaja</span>':te<1?' · <span style="color:var(--red)">desventaja</span>':""}</div></div></button>`}).join("")}</div>`,[{label:"Cancelar",cls:"ghost",value:"cancel"}]);fe==="cancel"||fe===""||(J.select(),ue({type:"swap",index:Number(fe)}))},flee:async()=>{if(C)return;await Vt("¿Rendirse?","<p>Perderás el combate sin recompensas.</p>",[{label:"Rendirse",cls:"pink",value:"yes"},{label:"Seguir luchando",cls:"ghost",value:"no"}])==="yes"&&we(!1,!0)}}),setTimeout(()=>!Z&&I("Turno 1 · elige tu acción"),1800),{leave(){_.focus=null}}});Vn("evolve",()=>{const n=nn();if(!n)return ce.go("title"),{leave(){}};ce.useLab();const e=ce.lab;e.setCam("close"),ce.showActive(),e.main.anim&&(e.main.anim.allowWander=!1,e.main.anim.setState("idle"));const t=Zr(l=>e.drag(l));let i=!1,s=!1;const a=gt(`<div class="screen-full">
    <div class="screen-head"><button class="icon-btn" data-a="back">${re("back")}</button><div class="ttl glass">EVOLUCIÓN</div></div>
    <div style="flex:1"></div>
    <div class="glass" id="panel" style="padding:14px;max-height:62vh;overflow-y:auto"></div>
  </div>`);ln().appendChild(a);const r=l=>Object.entries(l.bonus).map(([u,d])=>`${d>0?"+":""}${d} ${ji[u]}`).join(" · "),o=()=>{const l=Ju(n),u=La(n)&&!l,d=wr.map((f,h)=>`<div class="col" style="align-items:center;gap:2px;flex:1;opacity:${h<=n.stage?1:.45}">
      <div style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:${h<=n.stage?"var(--violet)":"rgba(255,255,255,.08)"};box-shadow:${h===n.stage?"0 0 14px var(--violet-2)":"none"}">${re(h===0?"egg":h===1?"dna":"star")}</div>
      <b class="small">${f}</b><span class="muted" style="font-size:10.5px">${h===0?"forma base":`nivel ${Ca[h]}`}</span></div>`).join('<div style="align-self:center;color:var(--cyan)">→</div>');et("#panel",a).innerHTML=`
      <div class="row" style="align-items:flex-start;margin-bottom:12px">${d}</div>
      ${n.stage<2?`<p class="small" style="margin:0 0 6px">Siguiente etapa: <b>${wr[n.stage+1]}</b> · Requiere nivel ${Ca[n.stage+1]} (actual ${n.level}) y cuidado ≥ ${bh}% (actual ${Math.round(n.care)}%).</p>`:'<p class="small" style="margin:0 0 6px">Ha alcanzado la <b>Madurez</b>. Aún puede mutar usando mutágenos.</p>'}
      ${l&&n.stage<2?`<p class="small" style="color:var(--gold);margin:0 0 8px">${oe(l)}</p>`:""}
      <div class="col">
        <button class="btn gold block ${u?"":"disabled"}" data-a="evolve">${re("evolve")} Evolucionar a ${n.stage<2?wr[n.stage+1]:"—"}</button>
        <button class="btn block ${L.mutagens>0&&n.stage>=1&&!n.sleeping?"":"disabled"}" data-a="induce">${re("flask")} Inducir mutación (1 mutágeno · tienes ${L.mutagens})</button>
        ${n.stage<1?'<p class="small muted center" style="margin:0">Las mutaciones inducidas se desbloquean en etapa Crecimiento.</p>':""}
      </div>`},c=(l,u)=>{const d=Z_(n.genome,n.stage,n.mutations,new Gn(Hs()),Xr().essence);if(!d.length){Ie("No hay mutaciones disponibles.","bad"),u();return}et("#panel",a).innerHTML=`<h2>${l}</h2><p class="small muted" style="margin:0 0 10px">Elige qué genes expresará ${oe(n.name)}. La decisión es permanente.</p>
      <div class="mut-cards">${d.map((h,g)=>`<button class="mut ${h.rarity}" data-a="mut" data-i="${g}"><span class="r">${h.rarity}</span><b>${oe(h.name)}</b><span>${oe(h.desc)}</span><span class="bon">${r(h)}</span></button>`).join("")}</div>`;const f=async h=>{const g=h.target.closest('[data-a="mut"]');if(!g)return;a.removeEventListener("click",f,!0),h.stopPropagation(),s=!1;const v=d[Number(g.dataset.i)];J.evolve(),e.main.anim?.setState("cast"),e.bursts.emit(e.main.headWorld(),"#c6a8ff",70,2.4),await Bt(900),Bl("#e8dcff"),v.apply(n.genome),n.mutations.push(v.id),L.stats.mutations++,Lh(v.id),ts(n.genome),Yt("mutation");const p=new Set(Pa({...n,mutations:n.mutations.filter(_=>_!==v.id)})),m=Pa(n),y=m.filter(_=>!p.has(_));n.loadout=n.loadout.filter(_=>m.includes(_));for(const _ of y)if(!n.loadout.includes(_)){if(n.loadout.length<4)n.loadout.push(_);else if(Lt[_].signature||Lt[_].power>Math.min(...n.loadout.map(x=>Lt[x].power||999))){const x=n.loadout.reduce((P,b)=>(Lt[P].power||999)<=(Lt[b].power||999)?P:b);n.loadout=n.loadout.map(P=>P===x?_:P)}}for(const _ of Rr(m))n.loadout.length<4&&!n.loadout.includes(_)&&n.loadout.push(_);n.loadout.length<1&&(n.loadout=Rr(m)),Dt(),ce.showActive(),e.main.anim?.setState("happy"),e.main.anim?.play("spin"),e.bursts.emit(e.main.headWorld(),"#ffe6a8",60,2.2),Ie(`🧬 ${oe(n.name)} expresó: ${oe(v.name)}${y.length?` · Nueva habilidad: ${y.map(_=>Lt[_].name).join(", ")}`:""}`,"gold",4200),setTimeout(()=>e.main.anim?.setState("idle"),2500),u()};a.addEventListener("click",f,!0)};return o(),Ct(a,{back:()=>{i||(s&&(L.mutagens++,Dt()),J.back(),ce.go("home"))},evolve:async()=>{if(i||!La(n)||Ju(n))return;i=!0,J.evolve(),et("#panel",a).innerHTML=`<div class="result-big" style="color:var(--gold)">Evolucionando…</div><p class="center muted">Los genes de ${oe(n.name)} se están expresando.</p>`,e.main.anim?.setState("cast");for(let u=0;u<6;u++)setTimeout(()=>e.bursts.emit(e.main.headWorld(),u%2?"#7ff3ff":"#c6a8ff",40,2.5),u*300);await Bt(2e3),Bl("#ffffff"),n.stage=n.stage+1,Dt(),ce.showActive(),e.main.anim?.setState("happy"),e.main.anim?.play("spin"),e.bursts.emit(e.main.headWorld(),"#ffe6a8",100,3),J.win(),await Bt(1400),i=!1,Ie(`✨ ¡${oe(n.name)} alcanzó la etapa ${ci(n.stage)}!`,"gold",3500),c(`Mutación de ${ci(n.stage)}`,o)},induce:()=>{i||L.mutagens<=0||n.stage<1||(L.mutagens--,s=!0,Dt(),J.essence(),c("Mutación inducida",o))}}),{leave(){t(),e.yaw=0}}});const Ms=60,_a=6;Vn("breed",()=>{const n=nn();if(!n)return ce.go("title"),{leave(){}};ce.useLab();const e=ce.lab;e.setCam("wide"),ce.showActive(),e.main.anim&&(e.main.anim.allowWander=!1),e.main.anim&&(e.main.anim.baseYaw=-.5),e.partner.anchor.visible=!1;const t=[...L.creatures.filter(r=>r.id!==n.id&&r.stage>=1).map(r=>({key:"c"+r.id,name:r.name,genome:r.genome,info:`Tu criatura · Nv. ${r.level} · ${ci(r.stage)}`})),...L.genePool.map((r,o)=>({key:"p"+o,name:r.name,genome:r.genome,info:`${r.source==="amigo"?"ADN de amigo/a":"ADN de rival"} · Nv. ${r.level}`}))];let i=null;const s=gt(`<div class="screen-full">
    <div class="screen-head"><button class="icon-btn" data-a="back">${re("back")}</button><div class="ttl glass">CRUCE GENÉTICO</div></div>
    <div style="flex:1"></div>
    <div class="glass" style="padding:12px;max-height:60vh;display:flex;flex-direction:column">
      <div class="small muted" id="req" style="margin-bottom:8px"></div>
      <div class="list" id="pl" style="overflow-y:auto;flex:1"></div>
      <button class="btn primary block" style="margin-top:10px" data-a="breed" id="bb"></button>
    </div>
  </div>`);ln().appendChild(s);const a=()=>{const r=n.stage===2,o=L.creatures.length<_a,c=L.credits>=Ms;et("#req",s).innerHTML=`Cruza a <b>${oe(n.name)}</b> con otro ADN para crear un embrión que herede rasgos de ambos (y quizá mutaciones). Requisitos:
      <span style="color:${r?"var(--green)":"var(--red)"}">Madurez</span> ·
      <span style="color:${c?"var(--green)":"var(--red)"}">${Ms} biocréditos</span> ·
      <span style="color:${o?"var(--green)":"var(--red)"}">espacio en Bioarchivo (${L.creatures.length}/${_a})</span>`,et("#pl",s).innerHTML=t.length?t.map(u=>{const d=yt[dt(u.genome)],f=Math.round(u_(n.genome,u.genome)*100);return`<button class="card" data-a="pick" data-k="${u.key}" ${i?.key===u.key?'style="border-color:var(--cyan);box-shadow:var(--glow)"':""}>
            <div class="av" style="background:${d.color}">${d.name.slice(0,2).toUpperCase()}</div>
            <div class="grow"><div class="t">${oe(u.name)} <span class="muted small">· ${Fn(u.genome)}</span></div>
            <div class="s">${oe(u.info)} · ${d.name} · diversidad genética ${f}%</div></div></button>`}).join(""):'<p class="muted small center">Aún no tienes ADN disponible. Vence rivales en la arena o importa el código ANIMA de un amigo.</p>';const l=et("#bb",s);l.innerHTML=i?`${re("dna")} Cruzar con ${oe(i.name)} (${Ms})`:`${re("dna")} Elige una pareja genética`,l.classList.toggle("disabled",!(i&&r&&o&&c))};return a(),Ti("breed1","El embrión hereda piezas al azar de ambos progenitores y mezcla sus colores. Cuanto más distintos sean, más sorprendente será el resultado.","top"),Ct(s,{back:()=>{J.back(),ce.go("home")},pick:r=>{J.select(),i=t.find(o=>o.key===r.dataset.k)??null,i&&(e.partner.anchor.visible=!0,e.partner.set(i.genome,2),e.partner.rig&&(e.partner.rig.root.rotation.y=.6),e.partner.anim?.play("jump")),a()},breed:async()=>{if(!i||n.stage!==2||L.credits<Ms||L.creatures.length>=_a)return;const r=O1(n.genome,i.genome,new Gn(Hs()),.1+Ei("mutacion"),Xr().essence);let o="";if(await Vt("Nuevo embrión",`<p>El embrión heredó un <b>${r.fromA}%</b> de piezas de ${oe(n.name)} y un ${100-r.fromA}% de ${oe(i.name)}.${r.mutated.length?` Además presenta <b>${r.mutated.length}</b> mutación(es) espontánea(s).`:""}</p>
        <input class="field" id="nm" maxlength="14" placeholder="Nombre del embrión" autocomplete="off">`,[{label:`Incubar (${Ms})`,cls:"primary",value:"ok"},{label:"Cancelar",cls:"ghost",value:"cancel"}],{onMount:u=>u.querySelector("#nm").addEventListener("input",d=>o=d.target.value)})!=="ok")return;L.credits-=Ms,L.stats.bred++,Yt("breed"),Dt(),e.partner.anchor.visible=!1;const l=Math.max(n.generation,L.creatures.find(u=>"c"+u.id===i.key)?.generation??1)+1;ce.go("incubate",{genome:r.child,name:(o.trim()||Fn(r.child).slice(0,7)).slice(0,14),generation:l,parents:[n.name,i.name]}),Ie("El embrión entra al tanque de incubación…","")}}),{leave(){e.partner.anchor.visible=!1,e.partner.clear(),e.main.anim&&(e.main.anim.baseYaw=0)}}});Vn("archive",()=>{ce.useLab();const n=ce.lab;n.setCam("home");let e=L.activeId;const t=gt(`<div class="screen-full">
    <div class="screen-head"><button class="icon-btn" data-a="back">${re("back")}</button><div class="ttl glass">BIOARCHIVO · ${L.creatures.length}/${_a}</div></div>
    <div style="flex:1"></div>
    <div class="glass" style="padding:12px;max-height:58vh;display:flex;flex-direction:column">
      <div class="list" id="cl" style="overflow-y:auto;flex:1"></div>
      <div class="row" style="margin-top:10px">
        <button class="btn primary grow" data-a="activate" id="ab">${re("check")} Hacer activa</button>
        <button class="btn ghost" data-a="release" id="rb">${re("close")} Liberar</button>
      </div>
      <button class="btn block small" style="margin-top:8px" data-a="new">${re("dna")} Diseñar nueva criatura</button>
    </div>
  </div>`);ln().appendChild(t);const i=()=>{const a=L.creatures.find(r=>r.id===e);a&&(n.main.set(a.genome,a.stage),n.setGoo(a.goo),n.main.anim?.play("jump"))},s=()=>{et("#cl",t).innerHTML=L.creatures.map(a=>{const r=yt[dt(a.genome)];return`<button class="card" data-a="view" data-id="${a.id}" ${e===a.id?'style="border-color:var(--cyan);box-shadow:var(--glow)"':""}>
        <div class="av" style="background:${r.color}">${r.name.slice(0,2).toUpperCase()}</div>
        <div class="grow"><div class="t">${oe(a.name)} ${a.id===L.activeId?'<span class="ess-chip" style="color:var(--cyan)">ACTIVA</span>':""}</div>
        <div class="s">${Fn(a.genome)} · Nv. ${a.level} · ${ci(a.stage)} · Gen. ${a.generation} · ${wh[Sh(a)]}</div>
        <div class="s">${a.wins}V/${a.losses}D${a.parents?` · Hijo/a de ${oe(a.parents[0])} y ${oe(a.parents[1])}`:""}</div></div></button>`}).join(""),et("#ab",t).classList.toggle("disabled",e===L.activeId),et("#rb",t).classList.toggle("disabled",L.creatures.length<=1)};return s(),i(),Ct(t,{back:()=>{J.back(),ce.go("home")},view:a=>{J.tap(),e=a.dataset.id,s(),i()},activate:()=>{e!==L.activeId&&(J.select(),L.activeId=e,Dt(),Ie("Criatura activa cambiada.","good"),s())},release:async()=>{if(L.creatures.length<=1)return;const a=L.creatures.find(o=>o.id===e);!a||await Vt(`¿Liberar a ${oe(a.name)}?`,"<p>Volverá a la naturaleza y saldrá de tu Bioarchivo para siempre. Su ADN se guardará en tu banco genético.</p>",[{label:"Liberar",cls:"pink",value:"yes"},{label:"Cancelar",cls:"ghost",value:"no"}])!=="yes"||(L.genePool.unshift({name:a.name,genome:a.genome,source:"amigo",level:a.level}),L.creatures=L.creatures.filter(o=>o.id!==a.id),L.activeId===a.id&&(L.activeId=L.creatures[0].id),e=L.activeId,Dt(),s(),i())},new:()=>{if(L.creatures.length>=_a){J.error(),Ie("Bioarchivo lleno. Libera una criatura primero.","bad");return}J.select(),ce.go("editor",{mode:"create"})}}),{leave(){}}});function uy(){const n=document.getElementById("gl");try{ce.init(n)}catch(i){console.error(i),document.body.innerHTML='<div style="padding:30px;font-family:sans-serif;color:#fff;background:#13112a;height:100vh">Tu navegador no soporta WebGL, necesario para ANIMA. Prueba con Chrome o Safari actualizados.</div>';return}Dr(L.settings.sound,L.settings.music);const e=()=>{ua(),window.removeEventListener("pointerdown",e)};window.addEventListener("pointerdown",e),ti.on("reward",i=>{const s=Tn(i.reward);i.kind==="achievement"?(J.levelUp(),Ie(`🏆 Logro: <b>${i.title}</b>${s?`<br><span class="small">${s}</span>`:""}`,"gold",4200)):i.kind==="mission"?Ie(`📋 ${i.title}`,"good",3e3):i.kind==="daily"?Ie(`🎉 ${i.title}${s?` · ${s}`:""}`,"gold",3800):i.kind==="codex"&&Ie(`📖 ${i.title}`,"",2600),ce.refreshHome?.()}),ce.go("title");const t=document.getElementById("loading");t&&(t.style.opacity="0",setTimeout(()=>t.remove(),500)),window.anima={game:ce,state:L}}uy();const dy=!!window.Capacitor?.isNativePlatform?.();"serviceWorker"in navigator&&!dy&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
