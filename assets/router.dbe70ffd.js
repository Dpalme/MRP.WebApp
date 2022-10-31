import{r as g,a as s,j as e,F as N,P as y}from"./index.005e34df.js";import{S as C,M as q,C as R,B as U,a as F,u as M,I as h}from"./index.esm.f557802e.js";import{d as _,M as v,T as b,e as j,E as x}from"./appRouter.4fd66e6a.js";import{u as w,N as f,O as S,R as k,d as E,a as B,b as p,c as O}from"./404.13c86de0.js";const L=r=>{const[a,n]=g.exports.useState([]),l=()=>{if(!r.users)return n([]);const t=[];for(var o=0;o<r.users.length;o++){const d=r.users[o];for(var i=0;i<d.roles.length;i++){const m=d.roles[i];t.includes(m)||t.push(m)}}n(t)};return g.exports.useMemo(()=>{l()},[r.users]),s("div",{className:"rounded-md flex flex-row gap-8",children:[s("div",{className:"flex flex-row gap-4 items-center relative my-4 grow",children:[e("h3",{className:"mt-4 hidden","aria-hidden":!0,children:"Buscar"}),e("input",{type:"text",id:"query",placeholder:"Buscar",autoComplete:"off","aria-label":"Buscar",className:"outline outline-neutral-70 w-full mt-2 placeholder:text-neutral-50 pl-10",onChange:t=>r.dispatch({property:"query",value:t.currentTarget.value})}),e(C,{className:"absolute left-2 mt-1 top-1/2 -translate-y-1/2"})]}),s("div",{className:"flex flex-col grow",children:[e("h3",{className:"mt-4",children:"Rol"}),e(q,{allOptions:a,selectedOptions:r.state.roles,onChange:t=>r.dispatch({property:"roles",value:t})})]})]})},I=r=>{const a=w();return s("tr",{className:"bg-surface-4 text-main rounded-lg cursor-pointer hover:bg-surface-5 hover:border-surface-1 hover:shadow-sm overflow-hidden",onClick:()=>a(`/users/${r.id}`),children:[e("td",{className:"px-4 py-2",children:e("h3",{children:r.name+" "+r.lastName})}),e("td",{className:"px-4 py-2",children:e("p",{children:r.email})}),e("td",{className:"px-4 py-2",children:e("p",{children:r.companyCode})}),e("td",{className:"px-4 py-2 pointer-events-none",children:e(R,{elements:r.roles,noMargin:!0})}),e("td",{className:"",children:e(f,{to:`/users/${r.id}`,children:e(_,{color:"info"})})})]})},T=r=>s("div",{className:"flex flex-col gap-4",children:[e("div",{className:"px-4 grid grid-cols-[minmax(max-content,_1fr)_minmax(max-content,_1fr)_minmax(max-content,_1fr)_minmax(min-content,_1fr)_1rem] gap-4 items-center pr-4"}),s("table",{className:"items-center border-spacing-y-2 border-separate",children:[e("thead",{children:s("tr",{className:"text-left",children:[e("th",{className:"px-4 py-2",children:"Nombre"}),e("th",{className:"px-4 py-2",children:"Correo"}),e("th",{className:"px-4 py-2",children:"Compa\xF1ia"}),e("th",{className:"px-4 py-2",children:"Roles"}),e("th",{})]})}),e("tbody",{children:r.users!==void 0&&r.users.map(a=>e(I,{...a},a.id))})]})]}),$=(r=1,a=50)=>({users:[{name:"juan",lastName:"pancho",email:"juan.pancho@gmail.com",id:"1",roles:["superadmin"],companyCode:"mrp-services"},{name:"pedro",lastName:"de la mar",email:"pedro.de.la.mar@gmail.com",id:"2",roles:["user"],companyCode:"4taquitos"}],error:void 0,loading:!1}),z=r=>({user:{name:"juan",lastName:"pancho",email:"juan@pancho.com",id:"1",roles:["superadmin"]},error:void 0,loading:!1}),A=(r,a)=>{switch(a.property){case"roles":return r.roles.includes(a.value)?{...r,roles:r.roles.filter(n=>n!=a.value)}:{...r,roles:[a.value,...r.roles]};case"query":return{...r,query:a.value};default:return console.error("Unkown action property"),{...r}}},P=()=>{const{users:r,loading:a,error:n}=$(),[l,t]=g.exports.useReducer(A,{roles:[],query:""}),o=g.exports.useMemo(()=>{if(!r)return[];const i=l.query!="",d=l.roles.length>0,m=new RegExp(l.query,"ig");return r.filter(c=>(!d||c.roles.some(u=>l.roles.includes(u)))&&(!i||[[c.name,c.lastName].join(" "),c.roles.join(" "),c.companyCode].some(u=>u!==void 0&&m.test(u))))},[r,l.roles,l.query]);return s(N,{children:[s(v,{children:[s("div",{className:"px-8 py-4 bg-surface-5 mb-12 rounded-lg shadow-inner",children:[e(b,{cta:e(f,{to:"new",className:"block",children:e(U,{variant:"contained",children:"Crear nuevo Usuario"})}),title:"Usuarios"}),e("div",{className:"-mt-8"}),e(L,{users:r,state:l,dispatch:t})]}),a?e(y,{}):n?e(F,{type:"error",title:"Error",message:n.toString()}):e(T,{users:o})]}),e(S,{})]})},D=()=>{const{register:r,handleSubmit:a}=M();return s("form",{onSubmit:a(()=>{}),className:"flex flex-col gap-4",children:[e(h,{type:"text",name:"name",register:r,required:!0}),e(h,{type:"text",name:"lastName",register:r,required:!0,label:"Last Name"}),e(h,{type:"email",name:"email",register:r,required:!0}),e(h,{type:"text",name:"companyCode",register:r,label:"Company Code"}),e("input",{type:"submit",value:"Crear",className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40 mx-auto"})]})},H=()=>s(v,{children:[s(k,{spacing:2,items:"center",wrap:!1,children:[e(f,{to:"../",className:"mb-8",children:e(j,{})}),e("h1",{className:"mb-8 grow",children:"Nuevo Usuario"})]}),e(D,{})]}),G=()=>{const{id:r}=E();if(!r)return e(x,{message:"Missing assessment id"});const{user:a,loading:n,error:l}=z(),t=w();return n?e(y,{}):l?e(x,{message:l.message}):s(N,{children:[e("div",{className:"fixed left-0 top-0 w-screen h-screen overflow-hidden bg-surface-1 bg-opacity-20 backdrop-blur-sm",onClick:()=>t("../")}),s("div",{className:"max-w-lg fixed right-0 top-0 h-screen bg-surface-5 px-8 py-16 z-10 overflow-y-auto",children:[e(b,{title:a.name+" "+a.lastName,back:!0}),s("div",{className:"flex flex-col gap-6 mb-10",children:[s("div",{className:"flex flex-col gap-1 grow",children:[e("h2",{children:"Email"}),e("p",{children:a.email})]}),s("div",{className:"flex flex-col gap-1 grow",children:[e("h2",{children:"Company Code"}),e("p",{children:a.companyCode||"Sin c\xF3digo"})]}),s("div",{className:"flex flex-col gap-1 grow",children:[e("h2",{children:"Rol"}),e("p",{children:a.roles})]})]}),e("div",{className:"flex flex-row gap-8",children:e("div",{className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40 mx-auto",children:"Reiniciar Contrase\xF1a"})}),e("h2",{className:"mt-12 mb-4",children:"Historial"})]})]})},W=()=>s(B,{children:[e(p,{path:"",element:e(P,{}),children:e(p,{path:":id",element:e(G,{})})}),e(p,{path:"new",element:e(H,{})}),e(p,{path:"*",element:e(O,{})})]});export{W as default};
