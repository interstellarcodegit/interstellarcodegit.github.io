import{j as f,R as b,g as c,a as d}from"./vendor.2a78347c.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};_();const e=f.exports.jsx,i=f.exports.jsxs,w=document.querySelector("#main"),y=()=>(d.useEffect(()=>{c.to("#bd-div",{opacity:1,duration:2})},[]),i("div",{id:"bd-div",style:{opacity:0},children:[e(k,{}),i("div",{className:"main_stuff",children:[e(A,{}),e(u,{}),e(I,{}),e(u,{}),e(D,{}),e(u,{}),e(L,{}),e(u,{}),e(M,{})]}),e(R,{})]}));var v=1,p=.5;const k=()=>(d.useLayoutEffect(()=>{c.to("#anchor",{opacity:1,duration:2,delay:2,stagger:.3})},[]),d.useEffect(()=>{document.querySelector(".nav_toggler").addEventListener("click",()=>{v==0?(c.to(".bar_one",{duration:p,rotateZ:0,y:0}),c.to(".bar_three",{duration:p,rotateZ:0,y:0}),c.to(".nav-main",{duration:p*2,height:"7vh"}),document.querySelector(".bar_center").style.display="block",v=1):(c.to(".bar_one",{duration:p,rotateZ:45,y:-3}),c.to(".nav-main",{duration:p*1,height:"100vh"}),c.to(".bar_three",{duration:p,rotateZ:-45,y:-12.5}),document.querySelector(".bar_center").style.display="none",v=0)})},[]),i("nav",{className:"nav-main",children:[i("div",{className:"top_logo_div",children:[e("img",{src:"images/log.png",className:"logo"}),i("div",{className:"nav_toggler",children:[e("div",{className:"bar bar_one"}),e("div",{className:"bar bar_center"}),e("div",{className:"bar bar_three"})]})]}),i("ul",{className:"nav-items",children:[e("li",{children:e("a",{id:"anchor",href:"#preamble",className:"active",children:"Home"})}),e("li",{children:e("a",{id:"anchor",href:"#about",children:"About"})}),e("li",{children:e("a",{id:"anchor",href:"#portfolio",children:"Projects"})}),e("li",{children:e("a",{id:"anchor",href:"#skills",children:"Skills"})}),e("li",{children:e("a",{id:"anchor",href:"#contact",children:"Contact"})})]}),e("div",{className:"pointer"})]})),A=()=>e("div",{className:"preambles-main",id:"preamble",children:i("div",{className:"wrap_div",children:[i("div",{className:"cover",children:[i("div",{className:"pre-header-div",children:[e("h1",{id:"pre-header",children:"Kelvin Ng'eno "}),i("div",{className:"skills_header",children:[i("h3",{className:"header_skill",children:[e("div",{className:"seperator2"}),"Software Developer"]}),e("div",{className:"seperator"}),i("h3",{className:"header_skill",children:[e("div",{className:"seperator2"}),"Designer"]}),e("div",{className:"seperator"}),i("h3",{className:"header_skill",children:[e("div",{className:"seperator2"}),"App Developer"]})]})]}),e("br",{}),e("div",{className:"top_description",children:i("p",{className:"lower_top_description",children:["I'm a Software Engineer and Internet Entrepreneur I do design, I make apps for both iOS android and the web",e(u,{})," I am a content creator, a great instructor and mentor"]})})]}),e("img",{className:"about_image",src:"../images/me.jpg"})]})}),h=a=>i("div",{className:"page_top_div",children:[e("span",{className:"page_top_text",children:a.page}),e("div",{className:"rule"})]}),l=a=>e("div",{className:"skillItem group",children:i("div",{className:"flex flex-col",children:[e("span",{className:"skillName",children:a.name}),e("img",{className:" opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-3 transition duration-1000",src:`../images/${a.image}`})]})}),I=()=>{const[a,o]=d.useState(""),[t,r]=d.useState(""),[s,n]=d.useState(!1);return e("div",{className:"about",id:"about",children:i("div",{className:"about_main",children:[e(h,{page:"About"}),e("div",{className:"about_desc",children:i("p",{children:["Hello !I am Kelvin Ngeno a visionary , creative and focused web developer....",e("br",{}),e("br",{}),"I design, develop and deploy backend services (APIs) with focus on high availability, low latency and scalability.",e("br",{}),e("br",{}),"I write client-facing code that consume web services.",e("br",{}),e("br",{}),"I work with technologies such as Python , Javascript , and Web frameworks like Django and many others"]})}),e(h,{page:"My Skills"}),e("div",{className:"skillPopup",style:{display:s?"flex":"none"},children:i("div",{className:"skillPopupMain",children:[e("h3",{className:"popupTitle",children:a}),e("p",{className:"popupDescription",children:t})]})}),i("div",{className:"skillsView",id:"skills",children:[e(l,{image:"javascript3.svg",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Javascript"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"React ",image:"react.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Html",image:"html5.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"CSS",image:"css.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Python",image:"python.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Django",image:"django.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Sass",image:"sass.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"React-Native",image:"react.svg"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Django Rest",image:"djangorest.png"}),e(l,{description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum",name:"Figma",image:"figma.svg"})]})]})})},m=a=>i("div",{className:"work_display",children:[e("div",{className:"works_title_wrap_cover",children:i("div",{className:"works_title_wrap",children:[i("h2",{className:"works_title",children:[e("h3",{className:"work_number",children:a.number}),a.title]}),e("div",{className:"works_title_bottom_rule"})]})}),i("div",{className:"work_desc_wrap",children:[e("p",{className:"work_desc",children:a.description}),e("div",{className:"technologies",children:i("div",{className:"tech_list",children:[a.tech.map((o,t)=>e("span",{className:"tech_span",children:o})),e("a",{href:a.to,className:"external_link",children:e("i",{className:"fas fa-external-link-alt"})})]})}),e("div",{className:"work_images",children:a.images!==null&&a.images!==void 0?a.images.map((o,t)=>e("div",{className:"workImageDiv",children:e("img",{src:o.src,alt:o.alt,className:"workImage"})})):e("div",{})})]})]}),x=[{title:"Notehandy Desktop",description:"An app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",images:[{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"}]},{title:"Interstellar  Music",description:"A beautiful music desktop app with a beautiful app user interface which is fully interactive",images:[{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"}]}],j=[{title:"Repent app",images:[{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"}],description:"A design for the repent app"},{title:"My Portfolio",images:[{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"},{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"}]}],q=[{title:"NotehandyApp API",description:"An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences"},{title:"NotehandyApp API",description:"An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences"},{title:"NotehandyApp API",description:"An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences"},{title:"Repent App API",description:"An api made for a app of The Ministry of Repentance  and Holiness that enables updates , and playing and saving & organisation of videos& audio on the cloud..It also enables messanging between the Sheep Of Christ of the Church"}],P=[{title:"Notehandy",description:"An app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",images:[{src:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",alt:"My design"}]},{title:"Repent App",description:"An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences"},{title:"flex chat",description:"An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences"},{title:"Interstellar Code app",description:"An api made for a app of The Ministry of Repentance  and Holiness that enables updates , and playing and saving & organisation of videos& audio on the cloud..It also enables messanging between the Sheep Of Christ of the Church"}],D=()=>{const[a,o]=d.useState("web");return i("div",{className:"past_work",children:[e(h,{page:"My Past Work"}),i("div",{className:"past_work_main_page",children:[e("div",{className:"works_list",children:i("ul",{children:[e("li",{onClick:t=>{o("web")},children:e("a",{children:"Web"})}),e("li",{onClick:t=>{o("apps")},children:e("a",{children:"Mobile Apps"})}),e("li",{onClick:t=>{o("apis")},children:e("a",{children:"APIs"})}),e("li",{onClick:t=>{o("designs")},children:e("a",{children:"Designs"})}),e("li",{onClick:t=>{o("desktopapps")},children:e("a",{children:"Desktop Apps"})})]})}),e("div",{className:"works_wrap",children:e("div",{className:"works_main_view",children:a=="web"?i("div",{className:"wrap_works_list",children:[e(m,{to:"#",tech:["html","css","Javascript","React","Python","Django"],number:"01",title:"Website for Jipas Tensail",description:"Association of Lawyers and Technologists in Africa. Designed and created the website to help the association be visible on the internet and register new members."}),e(m,{to:"#",tech:["html","css","Javascript","React","Python","Django"],number:"02",title:"Africa Lawyers Organisation",description:"Association of Lawyers and Technologists in Africa."}),e(m,{to:"#",tech:["html","css","Javascript","React","Python","Django"],number:"03",title:"Website for Jipas Tensail",description:`Association of Lawyers and Technologists in Africa.
Designed and created the website to help the association be visible on the internet and register new members.`})]}):a=="apps"?e("div",{className:"wrap_works_list",children:P.map((t,r)=>e(m,{to:"#",tech:["React-Native","Python","Django"],number:`0${r+1}`,images:t.images,title:t.title,description:t.description}))}):a=="apis"?e("div",{className:"wrap_works_list",children:q.map((t,r)=>e(m,{to:"#",tech:["React-Native","Python","Django"],number:`0${r+1}`,images:t.images,title:t.title,description:t.description}))}):a=="designs"?e("div",{className:"wrap_works_list",children:j.map((t,r)=>e(m,{to:"#",tech:["figma"],number:`0${r+1}`,images:t.images,title:t.title,description:t.description}))}):a=="desktopapps"?e("div",{className:"wrap_works_list",children:x.map((t,r)=>e(m,{to:"#",tech:["Electron","Python","Django"],number:`0${r+1}`,images:t.images,title:t.title,description:t.description}))}):e("div",{className:"wrap_works_list"})})})]})]})},u=()=>e("div",{className:"spacer"}),N=a=>i("div",{className:"portfolio_item",style:{flexDirection:a.flexDirection},children:[i("div",{className:"glass_title_cover",children:[e("div",{className:"bubble1"}),e("div",{className:"bubble2"}),i("div",{className:"float_glass",children:[e("h2",{className:"glass_title",children:a.title}),e("p",{className:"font-abel text-gray-100 ",children:a.description}),e("div",{className:"project_image2",children:e("img",{className:"project_img2",src:a.src,alt:a.image_alt})})]})]}),e("div",{className:"project_image",children:e("img",{className:"project_img",src:a.src,alt:a.image_alt})})]}),S=a=>i("div",{id:"portfolio",className:"main_portfolio_view",children:[e(N,{flexDirection:"row",title:"Website for Finance Grow",description:"Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design, ",src:"./images/financeapp.webp"}),e(N,{flexDirection:"row-reverse",title:"Website for Finance Grow",description:"Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design,",src:"./images/financeapp.webp"})]}),L=()=>i("div",{className:"portfolio_page",children:[e(h,{page:"Portfolio"}),e("div",{className:"main_portfolio_view",children:e(S,{})})]}),M=()=>i("div",{className:"getintouch",id:"contact",children:[e(h,{page:"Get in Touch"}),i("div",{className:"main_contact_view",children:[i("p",{className:" text-gray-400 font-dosis text-2xl w-160px text-center",children:["I do make high end web and mobile apps of all types.",e("br",{}),"for about 2 hours a day , I teach upcoming software engineers some of the technologies I use",e("br",{})," Feel free to contact me in case you need one of the services or if you want to learn any of the technologies I use.",e("br",{}),"You can also ask questions, clarifications or even say Hi to me."]}),e("div",{className:"anchor_contact_div",children:e("a",{className:"anchor_contact",href:"mailto:techinterstellarcg@gmail.com",children:"Contact Interstellar"})})]})]}),R=()=>i("div",{className:"ft-main",children:[e("div",{className:"ft-row",children:i("ul",{className:"social-ul",children:[e("li",{className:"soc-li",children:e("a",{className:"soc-ref",href:"",children:e("i",{className:"fa fa-facebook"})})}),e("li",{className:"soc-li",children:e("a",{className:"soc-ref",href:"https://twitter.com/CgInterstellar",children:e("i",{className:"fa fa-twitter"})})}),e("li",{className:"soc-li",children:e("a",{className:"soc-ref",href:"#",children:e("i",{className:"fa fa-linkedin"})})}),e("li",{className:"soc-li",children:e("a",{className:"soc-ref",href:"https://www.instagram.com/cginfinite/",children:e("i",{className:"fa fa-instagram"})})}),e("li",{className:"soc-li",children:e("a",{className:"soc-ref",href:"https://youtu.be/MiBtJRV3wp0",children:e("i",{className:"fa fa-youtube"})})})]})}),e("p",{className:"ft-info",children:"Interstellar code \xA9 2020"})]});b.render(e(y,{}),w);c.to(".card-bd",{duration:2,x:20});c.to("#pre-header",{duration:3,x:20});