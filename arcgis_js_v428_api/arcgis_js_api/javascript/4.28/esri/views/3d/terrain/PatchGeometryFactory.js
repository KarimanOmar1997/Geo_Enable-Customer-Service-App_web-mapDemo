// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../chunks/vec4 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ./ElevationData ./interfaces ./ITile ./PatchGeometry ./PatchGeometryLUT ./PatchRenderData ./terrainUtils ./Tile ./tileUtils ../webgl-engine/lib/Normals".split(" "),function(kb,U,Kc,Xb,Lc,fa,xb,Yb,ka,Mc,Zb,C,$b,yb,zb){function Nc(a){var e=a.tile;if(e.intersectsClippingArea){var u=a.geometryState,F=u.numVerticesPerSide,m=F-2;--F;var x=a.geometry,D=x.vertexAttributes,
l=D.position,A=D.uv0,{typedBuffer:J,typedBufferStride:S}=D.normalCompressed,H=e.extent;D=H[0];var P=H[2],V=H[1];H=H[3];e=e.ellipsoid.radius;u=u.samplerData;var v=a.localOrigin;a=v[0];var r=v[1];v=v[2];var L=l.typedBuffer;l=l.typedBufferStride;var W=1/F;x=x.boundingBox;var N=0;if(1<=m){var h=V*(1-W)+H*W,d=ua.sinLatLUT[1],n=ua.cosLatLUT[1];for(var g=1;g<=m;g++){var k=g*W,f=ua.sinLonLUT[g],p=ua.cosLonLUT[g],B=e+fa.sampleElevation(D*(1-k)+P*k,h,u);p=-a+B*p*n;f=-r+B*f*n;B=-v+B*d;ka.minMaxBoundingBox(p,
f,B,x);var q=(g-1)*l;L[q]=p;L[q+1]=f;L[q+2]=B;ka.encodeUVInBuffer(A,g-1,k,W)}}for(h=1;h<=m;h++){d=h*W;d=V*(1-d)+H*d;n=ua.sinLatLUT[h];g=ua.cosLatLUT[h];f=h+1;k=f*W;p=V*(1-k)+H*k;B=ua.sinLatLUT[f];f=ua.cosLatLUT[f];var z=ua.sinLonLUT[0];q=ua.cosLonLUT[0];var t=e+fa.sampleElevation(D,d,u);q=q*g*t-a;z=z*g*t-r;t=n*t-v;var b=N*l;let ra=L[b],va=L[b+1];b=L[b+2];for(let na=1;na<=m;na++){var y=na*W,K=D*(1-y)+P*y,O=ua.sinLonLUT[na],aa=ua.cosLonLUT[na],Z=0,ba=0,T=0;na<m?(T=(N+1)*l,Z=L[T],ba=L[T+1],T=L[T+2]):
(ba=ua.sinLonLUT[F],Z=ua.cosLonLUT[F],T=e+fa.sampleElevation(P,d,u),Z=Z*g*T-a,ba=ba*g*T-r,T=n*T-v);var X=q,R=z,ca=t;q=ra;z=va;t=b;ra=Z;va=ba;b=T;Z-=X;ba-=R;T-=ca;X=R=ca=0;if(1<h)X=(N-m)*l,ca=L[X],R=L[X+1],X=L[X+2];else{X=ua.sinLatLUT[0];R=ua.cosLatLUT[0];var da=e+fa.sampleElevation(K,V,u);ca=aa*R*da-a;R=O*R*da-r;X=X*da-v}da=e+fa.sampleElevation(K,p,u);const c=aa*f*da-a;K=O*f*da-r;da=B*da-v;if(h<m){const w=N+m,G=w*l;L[G]=c;L[G+1]=K;L[G+2]=da;ka.minMaxBoundingBox(c,K,da,x);ka.encodeUVInBuffer(A,w,y,
k)}y=ca-c;K=R-K;ca=X-da;aa*=g;O*=g;R=n;.999>R*R&&(aa=T*K-ba*ca,O=Z*ca-T*y,R=ba*y-Z*K);y=1/Math.sqrt(aa*aa+O*O+R*R);zb.compressNormal(J,N,aa*y,O*y,R*y,S);++N}}}}function ac(a){a.tile.intersectsClippingArea&&(Ab(a),bc(a))}function bc(a,e=!1){var u=a.geometryState;const F=a.geometry,m=u.neighborData,x=a.tile,D=x.level,l=x.extent,A=x.ellipsoid.radius;var J=x.extentInRadians;const S=J[0],H=J[2],P=J[1];J=J[3];const V=u.samplerData,v=l[0],r=l[2],L=l[1],W=l[3],N=Eb(a),h=F.boundingBox;u=a.localOrigin;const d=
u[0],n=u[1],g=u[2];u=F.vertexAttributes;var k=u.position;const f=k.typedBuffer,p=k.typedBufferStride,B=u.uv0;for(let t=0;4>t;++t){const b=1===t||3===t;u=m.edgeResolutions[t];C.internalAssert(U.isPowerOfTwo(u));const y=u+1;var q=Zb.neighborTileIfLoadedOrSelf(x,m.edgePeerNeighbors[t]);if(cc(x,q,t)){dc(a,t,q);continue}const K=null!=q;C.internalAssert(!K||q.level===x.level);C.internalAssert(!K||0>=yb.compareTilesByLij(x,q));k=q?.renderData?.geometryState;if(C.enableTerrainInternalChecks){var z=x.surface;
if(!q&&z&&!z.updatingRootTiles){const E=C.neighborEdgeIndices[t],Y=x.findNeighborTile(E,oa=>oa.isLoaded||oa.isLeaf||oa.level===x.level);Y?Y.intersectsClippingArea&&(C.internalAssert(!Y.isLoaded),C.internalAssert(!Y.isLeaf),C.internalAssert(Y.level===D)):C.internalAssert(null==z?.rootTiles||!x.shouldHaveNeighbor(E))}}const O=1===t?l[2]:l[0],aa=(q=q?.extent)&&b?1===t?q[0]:q[2]:O,Z=0===t?l[3]:l[1],ba=1===t?1:0,T=0===t?1:0,X=1===t?H:S,R=0===t?J:P,ca=Math.sin(X),da=Math.cos(X),ra=Math.sin(R),va=Math.cos(R),
na=k?.samplerData;k=(E,Y,oa)=>fa.sampleElevation(E,Y,V);z=(E,Y,oa)=>.5*(fa.sampleElevation(E,Y,V)+fa.sampleElevation(oa,Y,na));const c=K?z:k,w=F.outerEdges[t],G=e&&3<y?y-3:1;k=null!=V&&V.some(E=>null!=E);z=null!=na&&na.some(E=>null!=E);const M=k||z,I=1/u,Q=w.index0;C.internalAssert(!q||C.almostEquals(q[2]-q[0],l[2]-l[0]));(()=>{const E=1===t?-1:3===t?1:0,Y=0===t?-1:2===t?1:0,oa=(l[2]-l[0])*I,la=E*oa,Pa=Y*oa,za=H-S,Ka=b?E*za*I:0,Aa=b?0:Y*I,sa=T,Ba=b?X+Ka:X,ta=b?Math.sin(Ba):ca,Ca=b?Math.cos(Ba):da,
pa=b?X-Ka:X,Da=b?Math.sin(pa):ca,La=b?Math.cos(pa):da,Ea=b?R:N(sa+Aa),Sa=b?ra:Math.sin(Ea),wa=b?va:Math.cos(Ea),Ma=b?R:N(sa-Aa),Ta=b?ra:Math.sin(Ma),ha=b?va:Math.cos(Ma);let ea=0,ma=0,Fa=0;const ia=0*I,Na=b?O:v*(1-ia)+r*ia,db=b?aa:Na,eb=b?L*(1-ia)+W*ia:Z,Ya=b?X:S*(1-ia)+H*ia,fb=b?ca:Math.sin(Ya),Ua=b?da:Math.cos(Ya),Za=b?N(ia):R,cb=b?Math.sin(Za):ra,$a=b?Math.cos(Za):va,Va=A+c(Na,eb,db);ea=Ua*$a*Va;ma=fb*$a*Va;Fa=cb*Va;let Oa=0,Ia=0,Wa=0;const Ja=1*I,Ga=b?O:v*(1-Ja)+r*Ja,xa=b?aa:Ga,Ha=b?L*(1-Ja)+
W*Ja:Z,ya=b?X:S*(1-Ja)+H*Ja,ja=b?ca:Math.sin(ya),qa=b?da:Math.cos(ya),Qa=b?N(Ja):R,ab=b?Math.sin(Qa):ra,jb=b?Math.cos(Qa):va,gb=A+c(Ga,Ha,xa);Oa=qa*jb*gb;Ia=ja*jb*gb;Wa=ab*gb;for(let Ra=1;Ra<y-1;Ra+=G){let lb=0,hb=0,bb=0;const Xa=(Ra+1)*I,ib=b?O:v*(1-Xa)+r*Xa,ob=b?aa:ib,tb=b?L*(1-Xa)+W*Xa:Z,mb=b?X:S*(1-Xa)+H*Xa,Bb=b?ca:Math.sin(mb),Oc=b?da:Math.cos(mb),ec=b?N(Xa):R,Pc=b?Math.sin(ec):ra,fc=b?Math.cos(ec):va,Fb=A+c(ib,tb,ob);lb=Oc*fc*Fb;hb=Bb*fc*Fb;bb=Pc*Fb;const gc=lb,hc=hb,ic=bb,Gb=Oa,Hb=Ia,Ib=Wa;
Oa=gc;Ia=hc;Wa=ic;const jc=Q+Ra,Jb=jc*p,kc=Gb-d,lc=Hb-n,mc=Ib-g;f[Jb]=kc;f[Jb+1]=lc;f[Jb+2]=mc;ka.minMaxBoundingBox(kc,lc,mc,h);const nc=Ra*I;ka.encodeUVInBuffer(B,jc,b?ba:nc,b?nc:T);const Qc=ea,Rc=ma,Sc=Fa;ea=Gb;ma=Hb;Fa=Ib;const ub=Gb,vb=Hb,pb=Ib,Cb=1/Math.sqrt(ub*ub+vb*vb+pb*pb),oc=pb*Cb;let qb=0,rb=0,sb=0;if(M&&.999>oc*oc){let Kb=0,Lb=0,Mb=0;const Nb=0===t?-1:1;Kb=Nb*(gc-Qc);Lb=Nb*(hc-Rc);Mb=Nb*(ic-Sc);const nb=Ra*I,pc=b?O:v*(1-nb)+r*nb,Tc=b?aa:pc,qc=b?L*(1-nb)+W*nb:Z,rc=b?X:S*(1-nb)+H*nb,sc=
b?ca:Math.sin(rc),tc=b?da:Math.cos(rc),uc=b?N(nb):R,vc=b?Math.sin(uc):ra,wc=b?Math.cos(uc):va;let Ob=ub,Pb=vb,Qb=pb;if(K){const Rb=A+fa.sampleElevation(Tc-la,qc-Pa,na),Uc=b?Da:sc,Vc=b?vc:Ta,xc=b?wc:ha;Ob=(b?La:tc)*xc*Rb;Pb=Uc*xc*Rb;Qb=Vc*Rb}const Sb=A+fa.sampleElevation(pc+la,qc+Pa,V),yc=b?wc:wa,zc=(b?Ca:tc)*yc*Sb,Ac=(b?ta:sc)*yc*Sb,Bc=(b?vc:Sa)*Sb;K||(Ob=2*ub-zc,Pb=2*vb-Ac,Qb=2*pb-Bc);const Tb=3===t?-1:1,Cc=Tb*(Ob-zc),Dc=Tb*(Pb-Ac),Ec=Tb*(Qb-Bc);qb=Mb*Dc-Lb*Ec;rb=Kb*Ec-Mb*Cc;sb=Lb*Cc-Kb*Dc;const Ub=
1/Math.sqrt(qb*qb+rb*rb+sb*sb);qb*=Ub;rb*=Ub;sb*=Ub}else qb=ub*Cb,rb=vb*Cb,sb=pb*Cb;w.setNormalFromValues(Ra,qb,rb,sb)}})()}}function Eb(a){a=a.tile;if(a.surface.isWebMercator){const u=a.extent,F=a.ellipsoid.radius;return m=>Math.PI/2-2*Math.atan(Math.exp(-(u[1]*(1-m)+u[3]*m)/F))}const e=a.extentInRadians;return u=>e[1]*(1-u)+e[3]*u}function Wc(a){const e=a.tile;if(e.intersectsClippingArea){var u=a.geometryState,F=u.samplerData,m=a.localOrigin,x=e.surface.isWebMercatorOnPlateeCarree,D=u.clippingArea,
l=null!=D?D:Vb,A=e.extent,J=A[0],S=A[1],H=A[2],P=A[3],V=Math.max(J,l[0]),v=Math.min(H,l[2]),r=Math.max(S,l[1]),L=Math.min(P,l[3]),W=e.ellipsoid.radius,N=e.horizontalScale,h=u.numVerticesPerSide,d=h-1,n=h-2,g=a.geometry,k=g.vertexAttributes,f=k.position,p=k.uv0,{typedBuffer:B,typedBufferStride:q}=k.normalCompressed,z=g.uvRange,t=z[0],b=z[1],y=z[2],K=z[3],O=g.boundingBox,aa=m[0],Z=m[1],ba=m[2],T=f.typedBuffer,X=f.typedBufferStride,R=0,ca=U.clamp(S,r,L),da=x?(Math.PI/2-2*Math.atan(Math.exp(-ca/W)))*
W:ca*N,ra=1/d,va=U.clamp(S*(1-ra)+P*ra,r,L),na=da,c=x?(Math.PI/2-2*Math.atan(Math.exp(-va/W)))*W:va*N;for(let w=1;w<=n;w++){const G=w/d,M=U.clamp(S*(1-G)+P*G,r,L),I=U.clamp(G,b,K),Q=c,E=(w-1)/d,Y=U.clamp(S*(1-E)+P*E,r,L),oa=na,la=(w+1)/d,Pa=U.clamp(S*(1-la)+P*la,r,L),za=x?(Math.PI/2-2*Math.atan(Math.exp(-Pa/W)))*W:Pa*N,Ka=U.clamp(la,b,K);na=c;c=za;const Aa=U.clamp(J,V,v);let sa=Aa*N,Ba=fa.sampleElevation(Aa,M,F);const ta=1/d,Ca=U.clamp(ta,t,y),pa=U.clamp(J*(1-Ca)+H*Ca,V,v);let Da=Ca,La=pa,Ea=pa*N,
Sa=fa.sampleElevation(pa,M,F);if(1===w){const wa=Ea-aa,Ma=na-Z,Ta=Sa-ba,ha=0*X;T[ha]=wa;T[ha+1]=Ma;T[ha+2]=Ta;ka.minMaxBoundingBox(wa,Ma,Ta,O);const ea=U.clamp(ta,t,y);ka.encodeUVInBuffer(p,R,ea,I)}for(let wa=1;wa<=n;wa++){const Ma=Ea,Ta=Sa,ha=(wa+1)/d,ea=U.clamp(ha,t,y),ma=U.clamp(J*(1-ha)+H*ha,V,v),Fa=La;La=ma;const ia=R+1,Na=ia*X;if(1===w||wa===n){const Ga=fa.sampleElevation(ma,M,F),xa=ma*N,Ha=Q,ya=Ga;if(1===w&&wa<n){const ja=xa-aa,qa=Ha-Z,Qa=ya-ba;T[Na]=ja;T[Na+1]=qa;T[Na+2]=Qa;ka.minMaxBoundingBox(ja,
qa,Qa,O);ka.encodeUVInBuffer(p,ia,ea,I)}Ea=xa;Sa=ya}else Ea=T[Na]+aa,Sa=T[Na+2]+ba;const db=Ea,eb=Sa,Ya=sa,fb=Ba;sa=Ma;Ba=Ta;const Ua=(R-n)*X,Za=1===w?fa.sampleElevation(Fa,Y,F):T[Ua+2]+ba,cb=fa.sampleElevation(Fa,Pa,F);if(w<n){const Ga=R+n,xa=Ga*X,Ha=Ma-aa,ya=za-Z,ja=cb-ba;T[xa]=Ha;T[xa+1]=ya;T[xa+2]=ja;ka.minMaxBoundingBox(Ha,ya,ja,O);const qa=Da;Da=ea;ka.encodeUVInBuffer(p,Ga,qa,Ka)}const $a=db-Ya,Va=oa-za,Oa=Va*(eb-fb),Ia=$a*(Za-cb),Wa=-Va*$a,Ja=Oa*Oa+Ia*Ia+Wa*Wa;if(0===Ja)zb.compressNormal(B,
R,0,0,1,q);else{const Ga=1/Math.sqrt(Ja);zb.compressNormal(B,R,Oa*Ga,Ia*Ga,Wa*Ga,q)}++R}}}}function Fc(a,e){a.tile.intersectsClippingArea&&(Ab(a),Gc(a,!1))}function Gc(a,e){const u=a.geometryState,F=u.neighborData,m=a.tile,x=m.surface,D=m.extent,l=u.clippingArea,A=null!=l?l:Vb,J=D[0],S=D[2],H=D[1],P=D[3],V=[P>A[3],S>A[2],H<A[1],J<A[0]],v=a.geometry,r=m.horizontalScale,L=Hc(x.isWebMercatorOnPlateeCarree,m.ellipsoid.radius,r),W=v.boundingBox,N=v.uvRange[0],h=v.uvRange[1],d=v.uvRange[2],n=v.uvRange[3],
g=Math.max(J,A[0]),k=Math.min(S,A[2]),f=Math.max(H,A[1]),p=Math.min(P,A[3]),B=a.localOrigin,q=B[0],z=B[1],t=B[2],b=u.samplerData;for(let y=0;4>y;++y){const K=1===y||3===y,O=F.edgeResolutions[y];C.internalAssert(U.isPowerOfTwo(O));const aa=O+1,Z=V[y],ba=Zb.neighborTileIfLoadedOrSelf(m,F.edgePeerNeighbors[y]);if(!Z&&cc(m,ba,y)){dc(a,y,ba);continue}const T=null!=ba&&!Z,X=ba?.renderData?.geometryState;if(C.enableTerrainInternalChecks&&(C.internalAssert(!T||ba.level===m.level),C.internalAssert(!T||0>=
yb.compareTilesByLij(m,ba)),m&&!ba&&!x.updatingRootTiles)){const ha=C.neighborEdgeIndices[y],ea=m.findNeighborTile(ha,ma=>ma.isLoaded||ma.isLeaf||ma.level===m.level);x.updatingRootTiles||(ea?ea.intersectsClippingArea&&(C.internalAssert(!ea.isLoaded),C.internalAssert(!ea.isLeaf),C.internalAssert(ea.level===m.level)):C.internalAssert(null==x?.rootTiles||!m.shouldHaveNeighbor(ha)))}const R=U.clamp(1===y?S:J,g,k),ca=U.clamp(0===y?P:H,f,p),da=X?.samplerData,ra=v.outerEdges[y],va=e&&3<aa?aa-3:1,na=U.clamp(1===
y?1:0,N,d),c=U.clamp(0===y?1:0,h,n),w=(ha,ea)=>fa.sampleElevation(ha,ea,b),G=(ha,ea)=>.5*(fa.sampleElevation(ha,ea,da)+fa.sampleElevation(ha,ea,b)),M=T?G:w,I=(S-J)/O,Q=K?1===y?I:-I:0,E=K?0:0===y?I:-I,Y=-Q,oa=-E;let la=0,Pa=0,za=0;const Ka=0/O,Aa=K?R:U.clamp(J*(1-Ka)+S*Ka,g,k),sa=K?U.clamp(H*(1-Ka)+P*Ka,f,p):ca,Ba=M(Aa,sa);la=Aa*r;Pa=L(sa);za=Ba;let ta=0,Ca=0,pa=0;const Da=1/O,La=K?R:U.clamp(J*(1-Da)+S*Da,g,k),Ea=K?U.clamp(H*(1-Da)+P*Da,f,p):ca,Sa=M(La,Ea),wa=La*r,Ma=L(Ea),Ta=Sa;ta=wa;Ca=Ma;pa=Ta;
for(let ha=1;ha<aa-1;ha+=va){const ea=ha/O,ma=ta,Fa=Ca,ia=pa,Na=K?na:U.clamp(ea,N,d),db=K?U.clamp(ea,h,n):c,eb=ma-q,Ya=Fa-z,fb=ia-t;ka.minMaxBoundingBox(ma,Ya,fb,W);ra.setVertexFromValuesRawPositionUV(ha,eb,Ya,fb,Na,db);const Ua=(ha+1)/O,Za=K?R:U.clamp(J*(1-Ua)+S*Ua,g,k),cb=K?U.clamp(H*(1-Ua)+P*Ua,f,p):ca,$a=M(Za,cb);ta=Za*r;Ca=L(cb);pa=$a;const Va=ta,Oa=Ca,Ia=pa,Wa=la,Ja=Pa,Ga=za;la=ma;Pa=Fa;za=ia;let xa=0,Ha=0,ya=0;if(K){const qa=Oa-Fa,Qa=Ia-ia,ab=Ja-Fa,jb=Ga-ia,gb=U.clamp(H*(1-ea)+P*ea,f,p),Ra=
R+Y,lb=Ra*r,hb=fa.sampleElevation(Ra,gb,b),bb=lb-ma,Xa=hb-ia,ib=3===y?-1:1;xa=ib*(-ab+qa)*Xa;Ha=ib*bb*(-jb+Qa);ya=-ib*bb*(-ab+qa);if(T){const ob=R+Q,tb=ob*r,mb=fa.sampleElevation(ob,gb,da),Bb=tb-ma;xa=(-ab+qa)*(Xa-(mb-ia));Ha=(bb-Bb)*(-jb+Qa);ya=-(bb-Bb)*(-ab+qa)}}else{const qa=Va-ma,Qa=Ia-ia,ab=Wa-ma,jb=Ga-ia,gb=U.clamp(J*(1-ea)+S*ea,g,k),Ra=ca+oa,lb=fa.sampleElevation(gb,Ra,b)-ia,hb=L(Ra)-Fa,bb=2===y?-1:1;xa=bb*hb*(-jb+Qa);Ha=bb*(-ab+qa)*lb;ya=-bb*hb*(-ab+qa);if(T){const Xa=gb,ib=ca+E,ob=L(ib),
tb=fa.sampleElevation(Xa,ib,da)-ia,mb=ob-Fa;xa=(-hb+mb)*(-jb+Qa);Ha=(-ab+qa)*(-lb+tb);ya=-(-hb+mb)*(-ab+qa)}}const ja=1/Math.sqrt(xa*xa+Ha*Ha+ya*ya);ra.setNormalFromValues(ha,xa*ja,Ha*ja,ya*ja)}}}function Hc(a,e,u){return a?F=>(Math.PI/2-2*Math.atan(Math.exp(-F/e)))*e:F=>F*u}function Ic(a,e,u,F,m,x){const D=e-1,l=a.vertexAttributes.count,A=2*(Math.min(e-2,F[1])-Math.max(1,F[0]))*(Math.min(e-2,m[1])-Math.max(1,m[0])),J=C.neighborEdgeIndices.map((h,d)=>0===d&&m[1]<e-2||1===d&&F[1]<e-2||2===d&&1<m[0]||
3===d&&1<F[0]),S=a.outerEdges.reduce((h,d,n)=>h+(J[n]?0:D-2+d.count-1),0),H=u.reduce((h,d)=>h+D*(2*(d.latitudeResolution-1)+1),0),P=x?2:1,V=3*(A+S+H)*P,v=65536<=l?new Uint32Array(V):new Uint16Array(V);let r=0;const L=e-2,W=D-2;C.internalAssert(0<=W);const N=(h,d,n,g,k,f)=>{var p=h*k;h=f[p];const B=f[p+1];p=f[p+2];var q=d*k;d=f[q];const z=f[q+1];q=f[q+2];var t=n*k;n=f[t];const b=f[t+1];t=f[t+2];const y=g*k;g=f[y];k=f[y+1];f=f[y+2];return(d-g)*(d-g)+(z-k)*(z-k)+(q-f)*(q-f)>(h-n)*(h-n)+(B-b)*(B-b)+(p-
t)*(p-t)};if(x){const h=(d,n,g)=>{v[r++]=d;v[r++]=n;v[r++]=n;v[r++]=g;v[r++]=g;v[r++]=d;C.enableTerrainInternalChecks&&(C.internalAssert(d<l),C.internalAssert(n<l),C.internalAssert(g<l),C.internalAssert(r<=V))};(()=>{for(let d=Math.max(m[0],1)-1;d<Math.min(m[1],e-2)-1;++d){const n=d*L;for(let g=Math.max(F[0],1)-1;g<Math.min(F[1],e-2)-1;++g){const k=d*L+g,f=k+1,p=f+L,B=p-1,q=n+g,z=q+1,t=z+L;N(q,z,t,t-1,a.vertexAttributes.position.typedBufferStride,a.vertexAttributes.position.typedBuffer)?(h(k,f,p),
h(p,B,k)):(h(k,f,B),h(B,p,f))}}})();C.internalAssert(r===3*A*P);(()=>{for(let n=0;4>n;++n){const g=r;if(J[n])continue;const k=a.outerEdges[n],f=a.innerEdges[n];let p=0,B=0;const q=k.count,z=f.count;C.internalAssert(z===D-1);let t=0;const b=1===n||2===n?(y,K,O)=>h(y,K,O):(y,K,O)=>h(y,O,K);for(;p<q-1||B<z-1;){const y=f.getVertexIndex(B),K=k.getVertexIndex(p);var d=p<q-1;const O=B<z-1,aa=d?D*(p+.5)/(q-1):0,Z=O?1+W*(B+.5)/(z-1):0;d&&(!O||aa<=Z)?(++p,C.enableTerrainInternalChecks&&C.internalAssert(p<q),
d=k.getVertexIndex(p),b(y,K,d)):(++B,C.enableTerrainInternalChecks&&C.internalAssert(B<z),d=f.getVertexIndex(B),b(y,K,d));t++}C.enableTerrainInternalChecks&&(C.internalAssert(p===q-1),C.internalAssert(B===z-1),C.internalAssert(t===q+z-2),C.internalAssert(t===D-2+k.count-1),C.internalAssert(r===g+3*t*P))}})();C.internalAssert(r===3*(A+S)*P);u.forEach(d=>{var n=a.outerEdges[d.connectedOuterEdgeOffset];let g=n.getVertexIndex(0);n=n.stride;for(let k=0;k<d.latitudeResolution;++k){const f=0===k?d.rowOffset:
g+e;for(let p=0;p<D;p++)h(g,g+1,f+p),k<d.latitudeResolution-1&&h(g+1,f+p+1,f+p),g+=n;g=f;n=1}})}else(()=>{var h=Math.max(m[0],1)-1;const d=Math.min(m[1],e-2)-1,n=Math.max(F[0],1)-1,g=Math.min(F[1],e-2)-1;for(;h<d;++h){const k=h*L;for(let f=n;f<g;++f){const p=k+f,B=p+1,q=B+L,z=q-1;N(p,B,q,z,a.vertexAttributes.position.typedBufferStride,a.vertexAttributes.position.typedBuffer)?(v[r]=p,v[r+1]=B,v[r+2]=q,v[r+3]=q,v[r+4]=z,v[r+5]=p):(v[r]=p,v[r+1]=B,v[r+2]=z,v[r+3]=z,v[r+4]=B,v[r+5]=q);r+=6}}})(),C.internalAssert(r===
3*A*P),(()=>{for(let k=0;4>k;++k){if(J[k])continue;var h=a.outerEdges[k],d=a.innerEdges[k];let f=0,p=0;const B=h.count,q=d.count;C.internalAssert(q===D-1);var n=1===k||2===k;const z=n?1:2;n=n?2:1;const t=h.index0;h=h.stride;const b=d.index0;for(d=d.stride;f<B-1||p<q-1;){const y=b+p*d,K=t+f*h;var g=f<B-1;const O=p<q-1,aa=g?D*(f+.5)/(B-1):0,Z=O?1+W*(p+.5)/(q-1):0;(g=g&&(!O||aa<=Z))?++f:++p;g=g?K+h:y+d;v[r]=y;v[r+z]=K;v[r+n]=g;r+=3}}})(),C.internalAssert(r===3*(A+S)*P),u.forEach(h=>{var d=a.outerEdges[h.connectedOuterEdgeOffset];
let n=d.getVertexIndex(0);d=d.stride;for(let g=0;g<h.latitudeResolution;++g){const k=0===g?h.rowOffset:n+e;for(let f=0;f<D;f++){const p=k+f;v[r]=n;v[r+1]=n+1;v[r+2]=p;g<h.latitudeResolution-1?(v[r+3]=n+1,v[r+4]=p+1,v[r+5]=p,r+=6):r+=3;n+=d}n=k;d=1}});C.internalAssert(r===V);a.indices=v;a.indexCount=V}function Jc(a,e){const u=a.localOrigin,F=a.geometry;a=a.geometryState.neighborData.edgeResolutions;const m=F.numVerticesPerSide-2,x=F.vertexAttributes;for(let l=0;4>l;++l){var D=0===l||2===l;F.innerEdges[l]=
new ka.EdgeDescriptor(x,u,(0===l?m-1:0)*m+(1===l?m-1:0),(D?0:1)*m+(D?1:0),m);D=a[l]+1;F.outerEdges[l]=new ka.EdgeDescriptor(x,u,e,1,D);e+=D}}function dc(a,e,u){var F=(e+2)%4,m=a.tile,x=m.level-u.level;const D=1===e||3===e,l=a.geometryState.neighborData.edgeResolutions[e];C.internalAssert(U.isPowerOfTwo(l));const A=l+1;var J=a.geometry;const S=J.boundingBox;var H=J.outerEdges[e];const P=J.uvRange[0],V=J.uvRange[1],v=J.uvRange[2];J=J.uvRange[3];const r=U.clamp(1===e?1:0,P,v),L=U.clamp(0===e?1:0,V,J);
var W=u.renderData,N=W.geometryState,h=W.geometry.outerEdges[F];e=m.getNeighborEdgeStartVertexIndex(e,u)*l;x=l*2**x;C.internalAssert(N.neighborData.edgeResolutions[F]===x);C.internalAssert(h.count-1===x);F=W.localOrigin[0]-a.localOrigin[0];x=W.localOrigin[1]-a.localOrigin[1];a=W.localOrigin[2]-a.localOrigin[2];var d=H.attributes;W=H.index0;H=H.stride;N=d.position.typedBuffer;u=d.position.typedBufferStride;m=d.normalCompressed.typedBuffer;const n=d.normalCompressed.typedBufferStride;d=d.uv0;var g=
h.attributes;const k=h.index0;h=h.stride;const f=g.position.typedBuffer,p=g.position.typedBufferStride,B=g.normalCompressed.typedBuffer;g=g.normalCompressed.typedBufferStride;for(let b=1;b<A-1;++b){const y=W+H*b;var q=k+h*(e+b),z=y*u,t=q*p;const K=f[t]+F,O=f[t+1]+x;t=f[t+2]+a;N[z]=K;N[z+1]=O;N[z+2]=t;ka.minMaxBoundingBox(K,O,t,S);z=y*n;q*=g;m[z]=B[q];m[z+1]=B[q+1];z=b/l;q=D?r:U.clamp(z,P,v);z=D?U.clamp(z,V,J):L;ka.encodeUVInBuffer(d,y,q,z)}}function Ab(a){const e=a.geometryState,u=a.localOrigin,F=
e.neighborData.cornerNeighborData,m=a.geometry,x=m.outerEdges,D=m.boundingBox,l=a.tile,A="local"===a.tile.surface.view?.viewingMode,J=l.ellipsoid.radius,S=l.extentInRadians,H=l.horizontalScale;let P=0,V=0,v=0;const r=()=>{const c=a.geometryState.clippingArea,w=l.extent,G=null!=c&&(w[3]>c[3]||w[2]>c[2]||w[1]<c[1]||w[0]<c[0]),M=Hc(l.surface.isWebMercatorOnPlateeCarree,l.ellipsoid.radius,H);return(I,Q,E)=>{I=0===I?t[0]:t[2];Q=0===Q?t[1]:t[3];I=G?U.clamp(I,c[0],c[2]):I;Q=G?U.clamp(Q,c[1],c[3]):Q;P=I*
H;V=M(Q);v=E}},L=(c,w,G)=>{var M=S[0===w?1:3];c=S[0===c?0:2];w=Math.cos(M);M=Math.sin(M);const I=Math.sin(c);G=J+G;P=Math.cos(c)*w*G;V=I*w*G;v=M*G},W=A?r():L;let N=0,h=0,d=0,n=0,g=0,k=0,f=0,p=0,B=0;const q=A&&a.tile.surface.isWebMercatorOnPlateeCarree,z=(c,w,G,M,I)=>{var Q=0,E=0;let Y=0;A?(G=q?(Math.PI/2-2*Math.atan(Math.exp(-G/J)))*J:G*H,Q=w*H-P,E=G-V,Y=M-v):(Q=Eb(c),c=c.tile,E=c.extent,c=c.extentInRadians,w=(w-E[0])/(E[2]-E[0]),w=c[0]*(1-w)+c[2]*w,Q=Q((G-E[1])/(E[3]-E[1])),G=Math.cos(Q),c=Math.sin(Q),
E=Math.sin(w),M=J+M,Q=Math.cos(w)*G*M-P,E=E*G*M-V,Y=c*M-v);switch(I){case 0:f+=Q;p+=E;B+=Y;break;case 1:n-=Q;g-=E;k-=Y;break;case 2:f-=Q;p-=E;B-=Y;break;case 3:n+=Q,g+=E,k+=Y}},t=l.extent,b=e.clippingArea??Vb,y=t[0],K=t[2],O=t[1],aa=t[3],Z=[aa>b[3],K>b[2],O<b[1],y<b[0]],ba=Math.max(y,b[0]),T=Math.min(K,b[2]),X=Math.max(O,b[1]),R=Math.min(aa,b[3]),ca=m.uvRange[0],da=m.uvRange[1],ra=m.uvRange[2],va=m.uvRange[3],na=c=>{c=F[c].cornerTiles;h=N=0;d=1;B=p=f=k=g=n=0;var w=Infinity;for(var G=0;4>G;++G)w=Math.min(w,
c[G]?.level??Infinity);for(G=0;4>G;++G){var M=c[G];wb[G]=M?.level===w?M:null}c=1;w=0;for(G=0;4>G;++G)if(M=wb[G])c=Math.max(c,M?.renderData.geometryState.numVerticesPerSide),w=M.extent[2]-M.extent[0];C.internalAssert(1<c);c=w/c;for(w=0;4>w;++w){var I=wb[(w+3)%4],Q=wb[w%4];if(I||Q){M=0===w?1:1===w?2:2===w?3:0;var E=0===w?2:1===w?3:2===w?0:1;if(I&&Q){var Y=Wb[w][0]*c,oa=Wb[w][1]*c,la=I.extent;G=Math.max(b[0],Math.min(b[2],la[0===M||1===M?2:0]+Y));M=Math.max(b[1],Math.min(b[3],la[0===M||3===M?3:1]+oa));
la=Q.extent;Y=Math.max(b[0],Math.min(b[2],la[0===E||1===E?2:0]+Y));E=Math.max(b[1],Math.min(b[3],la[0===E||3===E?3:1]+oa));I=I.renderData;oa=Q.renderData;Q=fa.sampleElevation(G,M,I.geometryState.samplerData);E=fa.sampleElevation(Y,E,oa.geometryState.samplerData);z(I,G,M,.5*(Q+E),w)}else G=I??Q,I=I?M:E,Q=G.extent,E=Wb[w],M=Math.max(b[0],Math.min(b[2],Q[0===I||1===I?2:0]+E[0]*c)),I=Math.max(b[1],Math.min(b[3],Q[0===I||3===I?3:1]+E[1]*c)),G=G.renderData,Q=fa.sampleElevation(M,I,G.geometryState.samplerData),
z(G,M,I,Q,w)}}A||(c=Math.sqrt(P*P+V*V+v*v),N=P/c,h=V/c,d=v/c);if(A||.999>d*d)c=Math.sqrt(n*n+g*g+k*k),n/=c,g/=c,k/=c,c=Math.sqrt(f*f+p*p+B*B),f/=c,p/=c,B/=c,N=k*p-g*B,h=n*B-k*f,d=g*f-n*p,c=1/Math.sqrt(N*N+h*h+d*d),N*=c,h*=c,d*=c};for(let c=0;4>c;++c){const w=c,G=(c+1)%4,M=0===c||1===c?1:0,I=0===c||3===c?1:0,Q=U.clamp(M,ca,ra),E=U.clamp(I,da,va),Y=x[w],oa=0===c||3===c?Y.count-1:0,la=x[G],Pa=0===c||1===c?la.count-1:0,za=F[c].cornerTiles;let Ka=-1;for(let Ba=0;4>Ba;++Ba){const ta=za[Ba];ta&&(-1===Ka||
0<yb.compareTilesByLij(za[Ka],ta))&&(Ka=Ba)}const Aa=Ka,sa=za[Aa];if(sa!==l){const Ba=l.level-sa.level,ta=2**Ba,Ca=[sa.lij[0]+Ba,sa.lij[1]*ta,sa.lij[2]*ta],pa=[Ca[1]+ta===l.lij[1],0===c&&(1===Aa||0===Aa&&sa!==za[3])||1===c&&(0===Aa||1===Aa&&sa!==za[2]),Ca[1]===l.lij[1]+1,2===c&&(3===Aa||2===Aa&&sa!==za[1])||3===c&&(2===Aa||3===Aa&&sa!==za[0])],Da=pa.reduce((ja,qa)=>ja+(qa?1:0),0);C.internalAssert(1===Da||2===Da);let La=-1,Ea=-1;const Sa=sa.renderData;if(1===Da){const ja=pa.findIndex(Qa=>Qa);C.internalAssert(0<=
ja&&3>=ja);La=(ja+2)%4;const qa=a.geometryState.neighborData.edgeResolutions[ja];Ea=l.getNeighborEdgeStartVertexIndex(ja,sa)*qa+qa*(0===ja&&0===c||1===ja&&0===c||2===ja&&1===c||3===ja&&3===c?1:0)}else{C.internalAssert(pa[1]||pa[3]);La=pa[1]?3:1;const ja=Sa.geometryState.neighborData.edgeResolutions[La];Ea=0===c||3===c?0:ja}const wa=Sa.geometry.outerEdges[La],Ma=Y.index0+oa*Y.stride,Ta=la.index0+Pa*la.stride,ha=wa.index0+Ea*wa.stride,ea=wa.attributes.position,ma=ea.typedBuffer,Fa=ha*ea.typedBufferStride,
ia=a.localOrigin,Na=wa.localOrigin,db=ma[Fa]+Na[0]-ia[0],eb=ma[Fa+1]+Na[1]-ia[1],Ya=ma[Fa+2]+Na[2]-ia[2];ka.minMaxBoundingBox(db,eb,Ya,D);const fb=Y.attributes.position,Ua=fb.typedBuffer,Za=Ma*fb.typedBufferStride;Ua[Za]=db;Ua[Za+1]=eb;Ua[Za+2]=Ya;const cb=la.attributes.position,$a=cb.typedBuffer,Va=Ta*cb.typedBufferStride;$a[Va]=db;$a[Va+1]=eb;$a[Va+2]=Ya;ka.encodeUVInBuffer(Y.attributes.uv0,Ma,Q,E);ka.encodeUVInBuffer(la.attributes.uv0,Ta,Q,E);const Oa=wa.attributes.normalCompressed.typedBuffer,
Ia=ha*wa.attributes.normalCompressed.typedBufferStride,Wa=Y.attributes.normalCompressed,Ja=Wa.typedBuffer,Ga=Ma*Wa.typedBufferStride;Ja[Ga]=Oa[Ia];Ja[Ga+1]=Oa[Ia+1];const xa=la.attributes.normalCompressed,Ha=xa.typedBuffer,ya=Ta*xa.typedBufferStride;Ha[ya]=Oa[Ia];Ha[ya+1]=Oa[Ia+1]}else{const Ba=Z[G];let ta=void 0;if(Z[w]||Ba){const La=U.clamp(y*(1-M)+K*M,ba,T),Ea=U.clamp(O*(1-I)+aa*I,X,R);ta=fa.sampleElevation(La,Ea,e.samplerData)}else ta=Xc(za);W(M,I,ta);na(c);const Ca=P-u[0],pa=V-u[1],Da=v-u[2];
ka.minMaxBoundingBox(Ca,pa,Da,D);Y.setVertexFromValuesRawPositionUVNormal(oa,Ca,pa,Da,Q,E,N,h,d);la.setVertexFromValuesRawPositionUVNormal(Pa,Ca,pa,Da,Q,E,N,h,d)}}for(let c=0;4>c;++c)wb[c]=null}function Xc(a){const e=a.reduce((x,D)=>Math.min(x,D?.level??Infinity),Infinity);C.enableTerrainInternalChecks&&(C.internalAssert(!a[0]||!a[2]||$b.isCornerNeighbor(a[0],a[2],Yb.NeighborIndex.SOUTH_WEST)),C.internalAssert(!a[1]||!a[3]||$b.isCornerNeighbor(a[1],a[3],Yb.NeighborIndex.NORTH_WEST)));let u=0,F=0;
for(let x=0;4>x;++x){var m=a[x];if(m&&m.level===e){const D=m.extent;m=fa.sampleElevation(D[0===x||1===x?0:2],D[0===x||3===x?1:3],m.renderData?.geometryState?.samplerData);F+=m;u++}}a=u?F/u:0;C.internalAssert(null!=a);return a}function Db(a){const e=a.geometry.vertexAttributes.position.typedBuffer;a.vao.vertexBuffers.geometry.setSubData(e,0,0,e.length)}function cc(a,e,u){if(!e)return!1;a=yb.compareTilesByLij(a,e);return 0<a||0===a&&2<=u}const Wb=[[0,1],[1,0],[0,-1],[-1,0]],ua=new Mc.PatchGeometryLUT,
Vb=Lc.fromValues(-Infinity,-Infinity,Infinity,Infinity),wb=[null,null,null,null];kb.createPlanarGlobePatch=function(a,e){const {extent:u,surface:F}=a.tile;e=a.geometryState;var m=u[0],x=u[1],D=u[2]-m,l=u[3]-x,A=e.clippingArea;const J=null!=A?Math.max(0,(A[0]-m)/D):0,S=null!=A?Math.max(0,(A[1]-x)/l):0;m=null!=A?Math.min(1,(A[2]-m)/D):1;x=null!=A?Math.min(1,(A[3]-x)/l):1;l=e.numVerticesPerSide;A=(l-2)**2;D=e.neighborData.edgeResolutions.reduce((P,V)=>P+V+1,0);D=F.renderer.tileGeometryCache.acquire(A+
D);const H=a.geometry;Xb.empty(H.boundingBox);H.numVerticesPerSide=e.numVerticesPerSide;H.vertexAttributes=D;Kc.set(H.uvRange,J,S,m,x);Wc(a);Jc(a,A);Fc(a);Ic(H,e.numVerticesPerSide,[],[0,l-1],[0,l-1],e.wireframe);a.intersectionData=null};kb.createSphericalGlobePatch=function(a,e){const u=a.tile,{extent:F,extentInRadians:m,surface:x}=u,D=a.localOrigin,l=a.geometryState;var A=x.isWebMercator;const J=l.numVerticesPerSide,S=J-1,H=(J-2)**2,P=A&&(e===xb.PatchType.HAS_SOUTH_POLE||e===xb.PatchType.HAS_BOTH_POLES),
V=A&&(e===xb.PatchType.HAS_NORTH_POLE||e===xb.PatchType.HAS_BOTH_POLES);A=6*((P?1:0)+(V?1:0))*(S+1);e=l.neighborData;const v=e.edgeResolutions.reduce((h,d)=>h+d+1,0),r=x.renderer.tileGeometryCache.acquire(H+A+v);A=a.geometry;A.numVerticesPerSide=l.numVerticesPerSide;A.vertexAttributes=r;const L=A.boundingBox;Xb.empty(L);const W=Eb(a);ua.update(S,m,W);Nc(a);Jc(a,H);ac(a);const N=[];(()=>{let h=H+v;const d=D[0],n=D[1],g=D[2],k=u.ellipsoid.radius,f=F[1],p=F[3],B=(q,z)=>{z*=J;ka.minMaxBoundingBox(-d,
-n,-g+q*k,L);N.push({connectedRowOffset:z,connectedOuterEdgeOffset:1===q?0:2,rowOffset:h,latitudeResolution:6});z=Math.PI/2-2*Math.atan(Math.exp(-(-1===q?f:p)/k));const t=q*Math.PI/2-z;q=.99*(1===q?1:-1);const b=k+0,{position:y,uv0:K}=r,{typedBuffer:O,typedBufferStride:aa}=r.normalCompressed;for(let ba=1;6>=ba;++ba){var Z=z+ba/6*t;const T=Math.cos(Z);Z=Math.sin(Z);for(let X=0;X<=S;X++){const R=X/S,ca=ua.cosLonLUT[X]*T,da=ua.sinLonLUT[X]*T,ra=Z,va=ca*b-d,na=da*b-n,c=ra*b-g;ka.minMaxBoundingBox(va,
na,c,L);y.setValues(h,va,na,c);ka.encodeUVInBuffer(K,h,R,q);zb.compressNormal(O,h,ca,da,ra,aa);++h}}};P&&B(-1,0);V&&B(1,S)})();Ic(A,l.numVerticesPerSide,N,[0,J-1],[0,J-1],l.wireframe);a.intersectionData=null;if(C.enableTerrainInternalChecks)for(a=0;4>a;++a)C.internalAssert(A.outerEdges[a].count===e.edgeResolutions[a]+1)};kb.updateCornerSpherical=function(a){a.tile.intersectsClippingArea&&(Ab(a),bc(a,!0),Db(a))};kb.updateCornersPlanar=function(a,e){a.tile.intersectsClippingArea&&(Ab(a),Gc(a,!0),Db(a))};
kb.updateEdgesAndCornersPlanar=function(a,e){a.tile.intersectsClippingArea&&(Fc(a),Db(a))};kb.updateEdgesAndCornersSpherical=function(a){a.tile.intersectsClippingArea&&(ac(a),Db(a))};Object.defineProperty(kb,Symbol.toStringTag,{value:"Module"})});