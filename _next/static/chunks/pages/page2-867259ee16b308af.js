(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{3468:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/page2",function(){return t(2342)}])},530:(e,s,t)=>{"use strict";t.d(s,{A:()=>S});var a=t(4848),i=t(7088),n=t(8875),r=t(5141),o=t(3968),l=t(6540),c=t(4953),h=t.n(c),x=t(2445),p=t(6252);function f(){let[e,s,t,i,n,r]=(0,x.zo)(["/textures/skybox/front.jpg","/textures/skybox/back.jpg","/textures/skybox/top.jpg","/textures/skybox/bottom.jpg","/textures/skybox/right.jpg","/textures/skybox/left.jpg"]);return(0,a.jsxs)("mesh",{scale:[1,1,1],children:[(0,a.jsx)("boxGeometry",{args:[5e3,5e3,5e3]}),(0,a.jsx)("meshBasicMaterial",{attach:"material-0",map:e,side:p.hsX}),(0,a.jsx)("meshBasicMaterial",{attach:"material-1",map:s,side:p.hsX}),(0,a.jsx)("meshBasicMaterial",{attach:"material-2",map:t,side:p.hsX}),(0,a.jsx)("meshBasicMaterial",{attach:"material-3",map:i,side:p.hsX}),(0,a.jsx)("meshBasicMaterial",{attach:"material-4",map:n,side:p.hsX}),(0,a.jsx)("meshBasicMaterial",{attach:"material-5",map:r,side:p.hsX})]})}function d(){let e=(0,x.zo)("/textures/grass.jpg",e=>{e.wrapS=e.wrapT=p.GJx,e.repeat.set(100,100)});return(0,a.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-2,0],receiveShadow:!0,children:[(0,a.jsx)("planeGeometry",{args:[100,100]}),(0,a.jsx)("meshStandardMaterial",{map:e,roughness:1,metalness:0,normalScale:new p.I9Y(.3,.3)})]})}var u=t(2180),m=t(2961);function j(e){let{color:s="#fffbef",basePosition:t=[3,6,3],radius:n=3,speed:r=.2,phase:o=0,intensity:c=15,angle:h=.7}=e,x=(0,l.useRef)(null),p=(0,u.b)({frames:1});return(0,i.F)(e=>{let s=e.clock.elapsedTime;x.current&&(x.current.position.x=t[0]+Math.sin(s*r+o)*n,x.current.position.z=t[2]+Math.cos(s*r+o)*n,x.current.position.y=t[1]+.5*Math.sin(s*r*.5))}),(0,a.jsx)(m.n,{ref:x,position:t,angle:h,distance:25,attenuation:2,anglePower:7,intensity:c,volumetric:!0,opacity:.8,depthBuffer:p,color:s})}var g=t(5312),b=t(2232),y=t(9521),w=t(7928),k=t(3394);function v(){let e=(0,l.useRef)(null);return(0,i.F)((s,t)=>{e.current&&(e.current.rotation.y+=.1*t)}),(0,a.jsxs)("mesh",{ref:e,castShadow:!0,position:[0,2,0],scale:1e3,children:[(0,a.jsx)("sphereGeometry",{args:[2,64,64]}),(0,a.jsx)("meshPhysicalMaterial",{metalness:.9,roughness:.1,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,color:"#ffffff"})]})}let M=()=>(0,a.jsx)("div",{style:{width:"100%",height:"75vh",position:"relative"},children:(0,a.jsxs)(n.Hl,{style:{position:"absolute"},camera:{position:[1500,1500,1500],far:1e5,near:100,fov:45},dpr:[1,2],shadows:!0,gl:{antialias:!0,alpha:!1,stencil:!1,depth:!1,toneMapping:3},children:[(0,a.jsx)("color",{attach:"background",args:["#000000"]}),(0,a.jsx)("fog",{attach:"fog",args:["#000000",1e3,5e3]}),(0,a.jsx)("ambientLight",{intensity:2}),(0,a.jsx)("directionalLight",{position:[-5,8,-5],intensity:3,color:"#b6ceff",castShadow:!0}),(0,a.jsx)("directionalLight",{position:[5,8,5],intensity:3,color:"#ffd4b6",castShadow:!0}),(0,a.jsx)("pointLight",{position:[10,10,10],castShadow:!0,intensity:4,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}),(0,a.jsxs)(l.Suspense,{fallback:null,children:[(0,a.jsx)(f,{}),(0,a.jsx)(d,{}),(0,a.jsx)(v,{}),(0,a.jsx)(j,{color:"#fffbef",basePosition:[.75,4,.75],radius:.75,speed:.2,intensity:30,angle:.7}),(0,a.jsx)(j,{color:"#b6e4ff",basePosition:[-1,3.5,-1],radius:.6,speed:.15,phase:.5*Math.PI,intensity:120,angle:.6}),(0,a.jsx)(j,{color:"#e2b6ff",basePosition:[1,3,-.75],radius:.5,speed:.25,phase:1.2*Math.PI,intensity:100,angle:.5}),(0,a.jsx)(r.OH,{preset:"sunset",background:!1}),(0,a.jsx)(o.N,{enableZoom:!0,maxDistance:1e4,minDistance:300,target:[0,2,0]}),(0,a.jsxs)(g.s,{multisampling:0,children:[(0,a.jsx)(b.b,{focusDistance:0,focalLength:.02,bokehScale:2,height:480}),(0,a.jsx)(y.m,{luminanceThreshold:0,luminanceSmoothing:.9,height:300}),(0,a.jsx)(w.f,{opacity:.02}),(0,a.jsx)(k.f,{eskil:!1,offset:.1,darkness:1.1})]})]})]})}),S=h()(()=>Promise.resolve(M),{ssr:!1,loading:()=>(0,a.jsx)("div",{style:{width:"100%",height:"75vh",position:"relative"},className:"bg-gray-800"})})},2342:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var a=t(4848),i=t(530);function n(){return(0,a.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white",children:(0,a.jsx)("div",{className:"container flex flex-col items-center justify-center gap-12 px-4 py-16",children:(0,a.jsx)("div",{className:"w-full max-w-3xl h-full",children:(0,a.jsx)(i.A,{})})})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[438,624,66,696,636,593,792],()=>s(3468)),_N_E=e.O()}]);