import{r as j,i as Q,a as D,E as x,u as V,b as X,M as z,T as _,I as O,d as se,c as re,e as ae,f as Y,A as ne,g as ie,h as oe,j as le,k as ce,l as ue,m as de}from"./appRouter.b1e82d96.js";import{j as e,U as C,a as n,F as v,r as d}from"./index.41ee9e78.js";import{d as $,u as P,N as A,R as M,O as me,a as ge,b as f,e as he,c as pe}from"./404.bf2387cd.js";import{C as Z,d as fe,M as xe,a as b,b as ve,u as R,I as S}from"./index.esm.d79214a6.js";var H={},be=Q.exports;Object.defineProperty(H,"__esModule",{value:!0});var B=H.default=void 0,ye=be(j()),Ne=D,Ce=(0,ye.default)((0,Ne.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");B=H.default=Ce;var W={},we=Q.exports;Object.defineProperty(W,"__esModule",{value:!0});var G=W.default=void 0,Ee=we(j()),Se=D,qe=(0,Ee.default)((0,Se.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");G=W.default=qe;const Me=()=>{const{id:t}=$();if(!t)return e(x,{message:"Missing assessment Id"});const s=P(),{assessment:r,error:a,loading:i}=V(t),{mutate:o}=X(()=>s("/MRP.WebApp/assessments"));return e(z,{bgImg:r==null?void 0:r.thumbnailUrl,children:i?e(C,{}):a?e(x,{message:a.toString()}):r!==void 0?n(v,{children:[e("div",{className:"my-2 mb-12",children:e(_,{title:r.title,back:!0,cta:n(v,{children:[e(A,{to:"./edit",className:"hover:text-orange hover:scale-110 transition-all",children:e(B,{})}),e(O,{onClick:()=>o(""),className:"hover:!text-error-50 hover:scale-110 transition-all",children:e(G,{})})]})})}),n(M,{spacing:4,className:"mb-8",items:"center",children:[e(U,{to:"details",label:"Detalles"}),e(U,{to:"questions",label:"Preguntas"}),e(U,{to:"ratings",label:"Rese\xF1a"})]}),e(me,{})]}):e(v,{})})};function U(t){return e(A,{to:t.to,className:({isActive:s})=>["px-4 py-2 hover:bg-primary-60","rounded-md hover:scale-105 transition-transform",s?"!bg-blue text-white hover:text-white":"text-main hover:text-main"].join(" "),children:t.label})}const Ae=t=>e(A,{to:`/MRP.WebApp/assessments/${t.id}`,children:e("div",{className:"rounded-md bg-surface-4 text-main hover:bg-surface-5 transition-all duration-300 overflow-hidden shadow-sm outline outline-solid outline-surface-2 hover:outline-white hover:shadow-glow w-full hover:translate-x-4 ",children:n("div",{className:"grid grid-cols-[minmax(2rem,8rem)_1fr_2rem] items-center pr-4",children:[t.thumbnailUrl!==void 0?e("img",{src:t.thumbnailUrl,className:"w-f self-stretch object-cover grow"}):e("div",{}),n("div",{className:"grow p-4 flex items-start self-start flex-col pointer-events-none",children:[t.categories!==void 0&&e(Z,{elements:t.categories}),e("h3",{className:"text-3xl mb-2",children:t.title}),t.description!==void 0&&e("p",{className:"mb-4",children:t.description})]}),e(se,{color:"info"})]})})}),Ie=t=>e("div",{className:"flex flex-col gap-8",children:t.assessments!==void 0&&t.assessments.map(s=>e(Ae,{...s},s.id))}),_e=t=>{const[s,r]=d.exports.useState([]),a=()=>{if(!t.assessments)return r([]);const i=[];for(var o=0;o<t.assessments.length;o++){const u=t.assessments[o];for(var c=0;c<u.categories.length;c++){const g=u.categories[c];i.includes(g)||i.push(g)}}r(i)};return d.exports.useMemo(()=>{a()},[t.assessments]),n("div",{className:"max-w-xs rounded-md",children:[e("h2",{className:"mb-2",children:"Filtros"}),n("div",{className:"flex flex-row gap-4 items-center relative my-4",children:[e("h3",{className:"mt-4 hidden","aria-hidden":!0,children:"Buscar"}),e("input",{type:"text",id:"query",placeholder:"Buscar",autoComplete:"off","aria-label":"Buscar",className:"outline outline-neutral-70 w-full mt-2 placeholder:text-neutral-50 pl-10",onChange:i=>t.dispatch({property:"query",value:i.currentTarget.value})}),e(fe,{className:"absolute left-2 mt-1 top-1/2 -translate-y-1/2"})]}),e("h3",{className:"mt-4",children:"Categor\xEDas"}),e(xe,{allOptions:s,selectedOptions:t.state.categories,onChange:i=>t.dispatch({property:"categories",value:i})})]})},Fe=(t,s)=>{switch(s.property){case"categories":return t.categories.includes(s.value)?{...t,categories:t.categories.filter(r=>r!=s.value)}:{...t,categories:[s.value,...t.categories]};case"query":return{...t,query:s.value};default:return console.error("Unkown action property"),{...t}}},$e=()=>{const{assessments:t,loading:s,error:r}=re(),[a,i]=d.exports.useReducer(Fe,{categories:[],query:""}),o=d.exports.useMemo(()=>{if(!t)return[];const c=a.query!="",u=a.categories.length>0,g=new RegExp(a.query,"ig");return t.filter(h=>(!u||h.categories.some(p=>a.categories.includes(p)))&&(!c||[h.title,h.categories.join(" "),h.description].some(p=>p!==void 0&&g.test(p))))},[t,a.categories,a.query]);return n(z,{sidebar:e(_e,{assessments:t,state:a,dispatch:i}),children:[e(_,{cta:e(A,{to:"new",className:"block bg-blue px-4 py-2 rounded-md text-white hover:bg-primary-40",children:"Crear nuevo Quiz"}),title:"Quizes"}),s?e(C,{}):e(v,{}),r?e(b,{type:"error",title:"Error",message:r.toString()}):e(v,{}),!s&&!r?e(Ie,{assessments:o}):e(v,{})]})};var K={},Le=Q.exports;Object.defineProperty(K,"__esModule",{value:!0});var J=K.default=void 0,Oe=Le(j()),Pe=D,Ve=(0,Oe.default)((0,Pe.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");J=K.default=Ve;const ee=t=>{const s=d.exports.useRef(null),[r,a]=d.exports.useState(t.defaultValue||[]),i=t.name[0].toLocaleUpperCase()+t.name.slice(1),o=()=>{s===null||s.current===null||(a([s.current.value.trim(),...r]),s.current.value="")},c=u=>{a(r.filter(g=>g!==u.value))};return d.exports.useEffect(()=>{t.setValue(t.name+"[]",r)},[r]),n("div",{className:"flex flex-col gap-4 w-full",children:[e("input",{type:"hidden",...t.register(t.name+"[]")}),n("div",{className:"flex flex-row gap-4 w-full items-end",children:[n("div",{className:"flex flex-col gap-1 grow",children:[n("label",{htmlFor:"multiselect",children:[i,":"]}),e("textarea",{onKeyUp:u=>{u.key=="Enter"&&(u.preventDefault(),o())},onSubmit:u=>{u.preventDefault(),o()},rows:1,className:"resize-none",placeholder:i,id:"multiselect",ref:s})]}),e(O,{"aria-label":"add",onClick:o,children:e(J,{color:"primary"})})]}),e(M,{spacing:4,wrap:!0,children:r.map(u=>e(ve,{color:"primary",label:u,onDelete:()=>c({value:u})},u))})]})},Re=()=>{const{register:t,handleSubmit:s,setValue:r,formState:a}=R(),[i,o]=d.exports.useState(),[c,u]=d.exports.useState(!1),g=P(),h=m=>{o({type:"info",content:`"${m.title}" se cre\xF3 exitosamente`}),u(!0),setTimeout(()=>g("../"),2e3)},p=m=>{o({type:"error",content:m})},{mutate:w,error:y,isLoading:I}=ae(h,p),N=m=>{confirm(`\xBFCrear ${m.title}?`)&&w(m)};return n("form",{onSubmit:s(m=>N(m)),className:"text-left flex flex-col items-stretch gap-6 mb-16 relative",children:[!!y&&e(b,{type:"error",title:"Error",message:y.toString()}),i!==void 0&&e(b,{type:i.type,message:i.content,title:i.type=="error"?"Error":"\xC9xito"}),!c&&n("div",{className:"flex flex-col gap-4",children:[e(S,{type:"text",register:t,name:"title",required:!0}),e(S,{type:"textarea",register:t,name:"description"}),e(ee,{register:t,name:"categories",setValue:r})]}),I?e(C,{}):!c&&e("input",{type:"submit",value:"Crear",disabled:!a.isValid&&!c,className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40 mx-auto"})]})},Te=()=>n(z,{children:[n(M,{spacing:2,items:"center",wrap:!1,children:[e(A,{to:"../",className:"mb-8",children:e(Y,{})}),e("h1",{className:"mb-8 grow",children:"Nuevo Quiz"})]}),e(Re,{})]}),ke=()=>{const{id:t}=$();if(!t)return e(x,{message:"Missing assessment Id"});const{assessment:s,error:r,loading:a}=V(t);return a?e(C,{}):r?e(x,{message:r.toString()}):s!==void 0?n(v,{children:[e(_,{title:"Detalles"}),e("h2",{children:"Categor\xEDas"}),s.categories!==void 0&&e(Z,{elements:s.categories}),e("hr",{className:"my-4"}),e("h2",{className:"mb-2",children:"Descripci\xF3n"}),e("p",{className:"mb-8",children:s.description!==void 0?s.description:"Sin descripci\xF3n"}),e("hr",{className:"my-4"}),e("h2",{className:"mb-4",children:"Vista Previa"}),e("div",{className:"p-8 rounded-md bg-surface-2",children:e(ne,{...s,id:t})})]}):e(v,{})};function Ue(t){const{mutate:s}=ie(t.assessmentId,t.question._id),r=()=>{!confirm(`Est\xE1s a punto de borrar la pregunta ${t.question.title}, esto no se puede deshacer.
    \xBFQuieres continuar?`)||s(t.question)};return n("div",{className:"rounded-md p-4 bg-surface-3",children:[n(M,{spacing:2,className:"mb-4",children:[e("h3",{className:"mb-0 text-2xl font-bold grow",children:t.question.title}),e(A,{to:t.question._id,className:"p-2 hover:scale-110 hover:text-orange transition-all",children:e(B,{})}),e(O,{onClick:r,className:"hover:scale-110 hover:!text-error-50 transition-all",children:e(G,{color:"inherit"})})]}),t.question.options.map((a,i)=>n("div",{className:["p-2 flex flex-row gap-4",a.isCorrectAnswer?"text-orange":""].join(" "),children:[e("h4",{className:"w-6 text-xl font-bold",children:i+1}),a.value]},i))]})}const je=()=>{var i;const{id:t}=$();if(!t)return e(x,{message:"Missing assessment Id"});const{assessment:s,error:r,loading:a}=V(t);return a?e(C,{}):r?e(x,{message:r.toString()}):n("div",{className:"flex flex-col gap-8",children:[e(_,{title:"Preguntas",cta:e(A,{to:"new",className:"bg-blue px-4 py-2 rounded-md text-white",children:"Agregar Pregunta"})}),s!==void 0?!!s.questions&&((i=s.questions)==null?void 0:i.length)>0?s.questions.map((o,c)=>e(Ue,{question:o,assessmentId:s._id||s.id},c)):e(b,{type:"info",title:"Oops, no hay preguntas",message:"Agrega una pregunta"}):e(b,{type:"error",title:"Oops, no encontr\xE9 ese quiz",message:"Intenta con otro"})]})},Qe=(t,s)=>{const r=t.slice();switch(s.type){case"add":return r.splice(r.length,0,{discriminator:"option",value:"",isCorrectAnswer:!1}),r;case"remove":if(s.index===void 0)throw"Missing index";return confirm(`Est\xE1s a punto de quitar la ${s.index+1} opci\xF3n`)?(r.splice(s.index,1),r):t;case"change":if(s.index===void 0)throw"Missing index";if(!s.item)throw"Missing item";return r.map((a,i)=>i!==s.index?{...a}:{...a,...s.item})}},te=t=>{const[s,r]=d.exports.useReducer(Qe,t.defaultValue||[]),a=(i,o)=>c=>{r({type:"change",index:i,item:o=="isCorrect"?{isCorrectAnswer:c.currentTarget.checked}:{value:c.currentTarget.value}})};return d.exports.useEffect(()=>{t.setValue(t.name,s)},[s]),e("div",{className:"mt-16",children:n(v,{children:[s.map((i,o)=>n("div",{className:"mb-8",children:[e("hr",{className:"mb-4"}),n(M,{spacing:4,className:"mb-4",children:[n("h4",{className:"grow w-6 text-2xl font-bold",children:["Opci\xF3n ",o+1,":"]}),e(O,{onClick:()=>r({type:"remove",index:o}),children:e(oe,{})})]}),n(M,{spacing:4,grow:!0,children:[n("div",{className:"grow",children:[e("label",{htmlFor:`${o}-value`,className:"mb-2 block",children:"Respuesta"}),e("input",{id:`${o}-value`,type:"text",onChange:a(o,"value"),value:i.value,className:"grow w-full",autoComplete:"none"})]}),n("div",{children:[e("label",{htmlFor:`${o}-isCorrect`,className:"block",children:"Es Correcta"}),e("input",{id:`${o}-isCorrect`,type:"checkbox",onChange:a(o,"isCorrect"),defaultChecked:i.isCorrectAnswer})]})]})]},o)),e(O,{onClick:()=>r({type:"add"}),className:"!mx-auto !block",children:e(J,{})})]})})},De=()=>{const{id:t,questionId:s}=$();if(!t)return e(x,{message:"Missing assessment id"});const[r,a]=d.exports.useState(),i=P(),[o,c]=d.exports.useState("MULTIPLE_CHOICE"),[u,g]=d.exports.useState(!1),h=()=>{a({type:"info",content:"La pregunta se agreg\xF3 correctamente"}),g(!0),setTimeout(()=>i("../"),2e3)},p=l=>{a({type:"error",content:l})},{mutate:w,error:y,isLoading:I,reset:N}=le({assessmentId:t,onSuccess:h,onError:p}),{register:m,handleSubmit:E,setValue:F,formState:q}=R(),L=l=>l.options.length>=2&&l.options.some(k=>k.isCorrectAnswer);return n("form",{onSubmit:E(l=>{if(a(void 0),N(),L(l))return w(l);p("La pregunta no es v\xE1lida")}),className:"text-left flex flex-col items-stretch gap-6 mb-16 relative",children:[e(_,{back:!0,title:"Nueva Pregunta"}),!u&&n("div",{className:"flex flex-col gap-4",children:[e(S,{type:"text",register:m,name:"title",required:!0}),n("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"type",children:"Tipo:"}),n("select",{...m("type"),onChange:l=>c(l.currentTarget.value),required:!0,children:[e("option",{value:"MULTIPLE_CHOICE",children:"Opci\xF3n M\xFAltiple"}),e("option",{value:"BOOLEAN",children:"S\xED o No"})]}),e("input",{type:"hidden",...m("options"),required:!0}),o==="MULTIPLE_CHOICE"?e(te,{setValue:F,name:"options"}):e(v,{})]})]}),!!y&&e(b,{type:"error",title:"Error",message:y.toString()}),r!==void 0&&!y&&e(b,{type:r.type,message:r.content.toString(),title:r.type=="error"?"Error":"\xC9xito"}),I?e(C,{}):!u&&e("input",{type:"submit",value:"Crear",disabled:!q.isValid&&!u,className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40 mx-auto"})]})};function ze(t){const{register:s,handleSubmit:r,setValue:a,formState:i,getValues:o}=R({defaultValues:{...t.assessment}}),[c,u]=d.exports.useState(),[g,h]=d.exports.useState(!1),p=P(),w=l=>{u({type:"info",content:`Cambios en "${l.title}" se guardaron correctamente`}),h(!0),setTimeout(()=>p("../"),2e3)},y=l=>{u({type:"error",content:l})},{mutate:I,error:N,isLoading:m}=ce(w,y),{mutate:E,error:F,isLoading:q}=X(()=>p("../../")),L=()=>{!confirm(`Est\xE1s a punto de borrar ${t.assessment.title}, esto no se puede deshacer.
        \xBFQuieres continuar?`)||(E(t.assessment._id||t.assessment.id),h(!0),u({type:"info",content:`${t.assessment.title} se borr\xF3 correctamente`}))},T=l=>{!!l.title&&confirm(`\xBFModificar ${l.title}?`)&&I({...t.assessment,...l})};return n("form",{onSubmit:r(l=>T(l)),className:"text-left flex flex-col items-stretch gap-6 mb-16 relative",children:[!!N&&e(b,{type:"error",title:"Error",message:N.toString()}),!!F&&e(b,{type:"error",title:"Error",message:F.toString()}),c!==void 0&&e(b,{type:c.type,message:c.content,title:c.type=="error"?"Error":"\xC9xito"}),!g&&n("div",{className:"flex flex-col gap-4",children:[e(A,{to:"../",children:e(Y,{})}),e(S,{type:"text",register:s,name:"title",required:!0}),e(S,{type:"textarea",register:s,name:"description"}),e(S,{type:"text",register:s,name:"thumbnailUrl",label:"URL de la foto"}),n(M,{className:"gap-16 mx-auto",children:[e(S,{type:"checkbox",register:s,name:"isPrivate",label:"Examen Privado"}),e(S,{type:"checkbox",register:s,name:"isPremium",label:"Examen Premium"})]}),e(ee,{register:s,name:"categories",setValue:a,defaultValue:o().categories})]}),m||q?e(C,{}):n(M,{spacing:4,items:"stretch",justify:"center",children:[e("div",{className:"bg-error-50 rounded-md text-white px-8 py-2 hover:bg-error-60 cursor-pointer",onClick:L,children:"Delete"}),e("input",{type:"submit",value:"Guardar",disabled:!i.isValid&&!g,className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40"})]})]})}const He=()=>{const{id:t}=$();if(!t)return e(x,{message:"No ID Found in route"});const{assessment:s,error:r,loading:a}=V(t);return a?e(C,{}):r?e(x,{message:r.toString()}):e(v,{children:e(ze,{assessment:s})})},Be=He,We=t=>{const[s,r]=d.exports.useState(),a=P(),[i,o]=d.exports.useState("MULTIPLE_CHOICE"),[c,u]=d.exports.useState(!1),g=()=>{r({type:"info",content:"La pregunta se agreg\xF3 correctamente"}),u(!0),setTimeout(()=>a("../"),2e3)},h=l=>{r({type:"error",content:l})},{mutate:p,error:w,isLoading:y,reset:I}=ue({assessmentId:t.assessmentId,questionId:t.question._id,onSuccess:g,onError:h}),{register:N,handleSubmit:m,setValue:E,formState:F,getValues:q}=R({defaultValues:{...t.question}});d.exports.useEffect(()=>{E("title",t.question.title),E("imageUrl",t.question.imageUrl),E("options",t.question.options),E("type",t.question.type)},[t.question]);const L=l=>l.options.length>=2&&l.options.some(k=>k.isCorrectAnswer);return n("form",{onSubmit:m(l=>{if(r(void 0),I(),L(l))return p(l);h("La pregunta no es v\xE1lida")}),className:"text-left flex flex-col items-stretch gap-6 mb-16 relative",children:[e(_,{back:!0,title:"Editar Pregunta"}),!c&&n("div",{className:"flex flex-col gap-4",children:[e(S,{type:"text",register:N,name:"title",required:!0}),n("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"type",children:"Tipo:"}),n("select",{...N("type",{required:!0}),onChange:l=>o(l.currentTarget.value),value:q().type,children:[e("option",{value:"MULTIPLE_CHOICE",children:"Opci\xF3n M\xFAltiple"}),e("option",{value:"BOOLEAN",children:"S\xED o No"})]}),e("input",{type:"hidden",...N("options",{required:!0}),value:q().options&&q().options.toString()||""}),i==="MULTIPLE_CHOICE"?e(te,{setValue:E,name:"options",defaultValue:q().options}):e(v,{})]})]}),!!w&&e(b,{type:"error",title:"Error",message:w.toString()}),s!==void 0&&!w&&e(b,{type:s.type,message:s.content.toString(),title:s.type=="error"?"Error":"\xC9xito"}),y?e(C,{}):!c&&e("input",{type:"submit",value:"Actualizar",disabled:!F.isValid&&!c,className:"px-8 py-2 bg-blue rounded-md text-white cursor-pointer hover:bg-primary-40 mx-auto"})]})},Ge=()=>{const{id:t,questionId:s}=$();if(!t)return e(x,{message:"Missing assessment id"});if(!s)return e(x,{message:"Missing question id"});const{question:r,error:a,loading:i}=de({assessmentId:t,questionId:s});return i?e(C,{}):a?e(x,{message:a.toString()}):e(We,{question:r,assessmentId:t})},Ke=Ge,et=()=>n(ge,{children:[e(f,{index:!0,element:e($e,{})}),e(f,{path:"new",element:e(Te,{})}),n(f,{path:":id",element:e(Me,{}),children:[e(f,{index:!0,element:e(he,{to:"details"})}),e(f,{path:"details",element:e(ke,{})}),n(f,{path:"questions",children:[e(f,{path:"",element:e(je,{})}),e(f,{path:"new",element:e(De,{})}),e(f,{path:":questionId",element:e(Ke,{})})]}),e(f,{path:"ratings",element:e(_,{title:"Rese\xF1as"})}),e(f,{path:"edit",element:e(Be,{})})]}),e(f,{path:"*",element:e(pe,{})})]});export{et as default};
