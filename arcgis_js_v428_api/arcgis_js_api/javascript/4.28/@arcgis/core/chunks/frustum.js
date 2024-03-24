/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{O as T,c as _,g as O,h as R,b as r,a as t}from"./vector.js";import{m as n,i as A}from"./mat4.js";import{d as E,q as F,l as o,s}from"./vec3.js";import{c as a}from"./vec3f64.js";import{t as c}from"./vec4.js";import{f as e}from"./vec4f64.js";import{c as f,j as u,g as i,l as M,s as N,m as B}from"./plane.js";function G(T){return T?{ray:_(T.ray),c0:T.c0,c1:T.c1}:{ray:_(),c0:0,c1:Number.MAX_VALUE}}function H(T,_=G()){return O(T,_.ray),_.c0=0,_.c1=Number.MAX_VALUE,_}function I(T,_){return P(T,T.c0,_)}function L(T,_){return P(T,T.c1,_)}function P(T,_,O){return E(O,T.ray.origin,F(O,T.ray.direction,_))}function m(T){return T?[f(T[0]),f(T[1]),f(T[2]),f(T[3]),f(T[4]),f(T[5])]:[f(),f(),f(),f(),f(),f()]}function l(){return[a(),a(),a(),a(),a(),a(),a(),a()]}function p(T,_){for(let O=0;O<k;O++)u(T[O],_[O]);return T}function g(T,_,O,R=C){const E=n(r.get(),_,T);A(E,E);for(let T=0;T<q;++T){const _=c(t.get(),x[T],E);s(R[T],_[0]/_[3],_[1]/_[3],_[2]/_[3])}j(O,R)}function j(T,_){i(_[V.FAR_BOTTOM_LEFT],_[V.NEAR_BOTTOM_LEFT],_[V.NEAR_TOP_LEFT],T[U.LEFT]),i(_[V.NEAR_BOTTOM_RIGHT],_[V.FAR_BOTTOM_RIGHT],_[V.FAR_TOP_RIGHT],T[U.RIGHT]),i(_[V.FAR_BOTTOM_LEFT],_[V.FAR_BOTTOM_RIGHT],_[V.NEAR_BOTTOM_RIGHT],T[U.BOTTOM]),i(_[V.NEAR_TOP_LEFT],_[V.NEAR_TOP_RIGHT],_[V.FAR_TOP_RIGHT],T[U.TOP]),i(_[V.NEAR_BOTTOM_LEFT],_[V.NEAR_BOTTOM_RIGHT],_[V.NEAR_TOP_RIGHT],T[U.NEAR]),i(_[V.FAR_BOTTOM_RIGHT],_[V.FAR_BOTTOM_LEFT],_[V.FAR_TOP_LEFT],T[U.FAR])}function v(T,_){for(let O=0;O<k;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return!1}return!0}function y(T,_){return w(T,H(_,z.get()))}function b(T,_){for(let O=0;O<k;O++){const R=T[O];if(!M(R,_))return!1}return!0}function d(T,_,O){return w(T,function(T,_,O=G()){const r=o(T.vector);return R(T.origin,_,O.ray),O.c0=0,O.c1=r,O}(_,O,z.get()))}function h(T,_){for(let O=0;O<k;O++)if(N(T[O],_)>0)return!1;return!0}function w(T,_){for(let O=0;O<k;O++)if(!B(T[O],_))return!1;return!0}var U,V;new T((()=>G())),function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR"}(U||(U={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(V||(V={}));const X={bottom:[V.FAR_BOTTOM_RIGHT,V.NEAR_BOTTOM_RIGHT,V.NEAR_BOTTOM_LEFT,V.FAR_BOTTOM_LEFT],near:[V.NEAR_BOTTOM_LEFT,V.NEAR_BOTTOM_RIGHT,V.NEAR_TOP_RIGHT,V.NEAR_TOP_LEFT],far:[V.FAR_BOTTOM_RIGHT,V.FAR_BOTTOM_LEFT,V.FAR_TOP_LEFT,V.FAR_TOP_RIGHT],right:[V.NEAR_BOTTOM_RIGHT,V.FAR_BOTTOM_RIGHT,V.FAR_TOP_RIGHT,V.NEAR_TOP_RIGHT],left:[V.FAR_BOTTOM_LEFT,V.NEAR_BOTTOM_LEFT,V.NEAR_TOP_LEFT,V.FAR_TOP_LEFT],top:[V.FAR_TOP_LEFT,V.NEAR_TOP_LEFT,V.NEAR_TOP_RIGHT,V.FAR_TOP_RIGHT]},k=6,q=8,x=[e(-1,-1,-1,1),e(1,-1,-1,1),e(1,1,-1,1),e(-1,1,-1,1),e(-1,-1,1,1),e(1,-1,1,1),e(1,1,1,1),e(-1,1,1,1)],z=new T(G),C=l();export{k as N,U as P,p as a,G as b,m as c,H as d,b as e,g as f,I as g,L as h,v as i,V as j,l as k,j as l,y as m,d as n,h as o,X as p};
