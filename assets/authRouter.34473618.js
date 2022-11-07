import{u as S,C as w,R as p,N as u,O as R,B as I,a as A,b as l,c as j}from"./404.44482caf.js";import{u as F,r as t,j as e,a}from"./index.98a4bc96.js";const M=()=>{const{login:h}=F(),[x,f]=t.exports.useState(""),[b,g]=t.exports.useState(""),[i,o]=t.exports.useState(""),c=S(),d=n=>{const r=n=="email"?f:g;return N=>{o(""),r(N.target.value||"")}};return e("div",{className:"max-w-md",children:e(w,{padding:8,rounded:"lg",bg:"surface-1",children:a("div",{className:"text-main",children:[a("div",{className:"mb-8",children:[e("h1",{children:"Iniciar Sesi\xF3n"}),e("p",{children:"Te damos la bienvenida, por favor inicia sesi\xF3n"})]}),i!==""&&e("div",{className:"bg-surface-3 p-4 mb-4 rounded-md border border-solid border-error-50 text-error-60",children:i}),a("form",{onSubmit:async n=>{n.preventDefault();const r=await h(x,b);return r.error?o(r.error):c("/MRP.WebApp/")},className:"text-left flex flex-col items-stretch gap-6 mb-16",children:[a("div",{className:"flex flex-col gap-4",children:[a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"email",className:"block",children:"Correo:"}),e("input",{id:"email",type:"email",onInput:d("email"),autoComplete:"email"})]}),a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"password",children:"Contrase\xF1a:"}),e("input",{id:"password",type:"password",onInput:d("password"),autoComplete:"password"})]})]}),e("input",{type:"submit",value:"Iniciar Sesi\xF3n",className:"px-8 py-2 bg-blue rounded-md cursor-pointer hover:bg-primary-40 mx-auto text-white"})]}),a("div",{className:"text-center",children:[e("p",{children:"No tienes una cuenta?"}),e(p,{spacing:8,justify:"center",children:e(u,{to:"/MRP.WebApp/signup",children:"Cr\xE9ala ahora"})})]})]})})})},W=()=>e("div",{className:"max-w-md",children:e(w,{padding:8,rounded:"lg",bg:"surface-1",color:"white",children:a("div",{className:"text-main text-center",children:[a("div",{className:"mb-16",children:[a("h1",{children:["MRP"," Administraci\xF3n"]}),e("p",{children:"Te damos la bienvenida, por favor inicia sesi\xF3n o crea una cuenta para continuar"})]}),a(p,{spacing:8,justify:"center",children:[e(u,{to:"/MRP.WebApp/login",children:"Iniciar Sesi\xF3n"}),e(u,{to:"/MRP.WebApp/signup",children:"Crear una Cuenta"})]})]})})}),k=()=>{const{signup:h}=F(),[x,f]=t.exports.useState(""),[b,g]=t.exports.useState(""),[i,o]=t.exports.useState(""),[c,d]=t.exports.useState(""),[C,n]=t.exports.useState(""),[r,N]=t.exports.useState(""),[B,y]=t.exports.useState(""),P=S(),s=v=>m=>{v(m.target.value||"")};return e("div",{className:"max-w-2xl w-full text-main",children:a(w,{padding:8,rounded:"lg",bg:"surface-1",color:"main",children:[a("div",{className:"mb-8",children:[e("h1",{children:"Crear una cuenta"}),e("p",{children:"Te damos la bienvenida, llena el formulario para crear tu cuenta"})]}),a("form",{onSubmit:async v=>{if(v.preventDefault(),c!=C)return y("Passwords don't match");const m=await h(x,b,i,c,r);return m.isSuccess?P("/MRP.WebApp/"):y(m.error)},className:"text-left flex flex-col items-stretch gap-6 mb-16",children:[a(p,{spacing:8,items:"start",justify:"stretch",children:[a("div",{className:"flex flex-col gap-4 flex-grow",children:[a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"email",className:"block",children:"Correo:"}),e("input",{id:"email",type:"email",onInput:s(o),autoComplete:"email"})]}),a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"password",children:"Contrase\xF1a:"}),e("input",{id:"password",type:"password",onInput:s(d),autoComplete:"new-password"})]}),a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"confirmPassword",children:"Confirmar contrase\xF1a:"}),e("input",{id:"confirmPassword",type:"password",onInput:s(n),autoComplete:"new-password"})]})]}),a("div",{className:"flex flex-col gap-4 flex-grow",children:[a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"name",className:"block",children:"Nombre:"}),e("input",{id:"name",type:"text",onInput:s(f),autoComplete:"given-name"})]}),a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"lastName",className:"block",children:"Apellido:"}),e("input",{id:"lastName",type:"text",onInput:s(g),autoComplete:"family-name"})]}),a("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"password",children:"Compa\xF1ia:"}),e("input",{id:"company",type:"text",onInput:s(N),autoComplete:"organization"})]})]})]}),e("input",{type:"submit",value:"Crear cuenta",className:"px-8 py-2 bg-blue rounded-md cursor-pointer hover:bg-primary-40 mx-auto text-white"})]}),a("div",{className:"text-center",children:[e("p",{children:"Ya tienes una cuenta?"}),e(p,{spacing:8,justify:"center",children:e(u,{to:"/MRP.WebApp/login",children:"Inicia sesi\xF3n"})})]})]})})},E=()=>e("div",{className:"h-screen flex flex-row items-center justify-center p-16",children:e(R,{})}),D=()=>e(I,{children:a(A,{children:[a(l,{path:"/MRP.WebApp/",element:e(E,{}),children:[e(l,{index:!0,element:e(W,{})}),e(l,{path:"login",element:e(M,{})}),e(l,{path:"signup",element:e(k,{})})]}),e(l,{path:"*",element:e(j,{})})]})});export{D as default};
