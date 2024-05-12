(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{2204:function(e,t,r){Promise.resolve().then(r.bind(r,7509))},7509:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ex}});var s=r(9506),n=r(2820),o=r(9631),l=r(5066),a=r(2560),i=r(8357),d=r(9112),c=r(572),u=r(2776),h=r(4859),g=r(249),x=r(9799),p=r(462),f=r(4985),m=r(2539);let j=[{r:/([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?(?:\.(\d?\d?\d))?am/,f:(e,t)=>{let r=parseFloat(t[1]),s=t[2];s=s?parseFloat(t[2]):0;let n=t[3];n=n?parseFloat(t[3]):0;let o=t[3];o=o?parseFloat(t[4]):0,e.time.setHours(r,s,n,o);let l=t[0].slice(0,-2)+"AM";return{t:l,d:"Sets the time to "+l}}},{r:/([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?(?:\.(\d?\d?\d))?pm/,f:(e,t)=>{let r=parseFloat(t[1])+12,s=t[2];s=s?parseFloat(t[2]):0;let n=t[3];n=n?parseFloat(t[3]):0;let o=t[3];o=o?parseFloat(t[4]):0,e.time.setHours(r,s,n,o);let l=t[0].slice(0,-2)+"PM";return{t:l,d:"Sets the time to "+l}}},{r:/([0-1]?\d|2[0-3])(?:\/([0-2]?\d|3[0-1]))(?:\/(\d?\d?\d?\d))?/,f:(e,t)=>{let r=parseFloat(t[1]),s=parseFloat(t[2]),n=t[3];n=n?parseFloat(t[3]):e.time.getFullYear(),e.time.setFullYear(n,r-1,s);let o=r+"/"+s+"/"+n;return{t:o,d:"Sets the day to "+o}}},{t:"Today",d:"Sets the time to today",r:/today/,f:(e,t)=>{e.time=e.time},a:[{t:"Now",d:"Sets the time to now",r:/now/}]},{t:"Start of today",d:"Sets the time to the start of today",r:/today/,c:[/start/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time.setHours(0,0,0,0)}},{t:"End of today",d:"Sets the time to the end of today",r:/today/,c:[/end/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time.setHours(23,59,59,999)}},{t:"Yesterday",d:"Sets the time to yesterday",r:/yesterday/,f:(e,t)=>{e.time=new Date(e.time.getTime()-864e5)}},{t:"Start of yesterday",d:"Sets the time to the start of yesterday",r:/yesterday/,c:[/start/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time=new Date(e.time.getTime()-864e5),e.time.setHours(0,0,0,0)}},{t:"End of yesterday",d:"Sets the time to the end of yesterday",r:/yesterday/,c:[/end/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time=new Date(e.time.getTime()-864e5),e.time.setHours(23,59,59,999)}},{t:"Tomorrow",d:"Sets the time to tomorrow",r:/tomorrow/,f:(e,t)=>{e.time=new Date(e.time.getTime()+864e5)}},{t:"Start of tomorrow",d:"Sets the time to the start of tomorrow",r:/tomorrow/,c:[/start/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time=new Date(e.time.getTime()+864e5),e.time.setHours(0,0,0,0)}},{t:"End of tomorrow",d:"Sets the time to the end of tomorrow",r:/tomorrow/,c:[/end/,/of/],co:[/by/,/the/],f:(e,t,r)=>{e.time=new Date(e.time.getTime()+864e5),e.time.setHours(23,59,59,999)}}];for(let e=0;e<j.length;e++){let t=j[e];if(t.a){for(let e=0;e<t.a.length;e++){let r=t.a[e];r.f=t.f,j.push(r)}delete t.a}}let y=[];for(let e=0;e<j.length;e++){let t=j[e];t.c&&y.push(t)}for(let e=0;e<j.length;e++){let t=j[e];t.c||y.push(t)}function w(e){let{createTaskDone:t}=e,[r,y]=(0,n.useState)([]),[w,C]=(0,n.useState)(!1),[b,k]=(0,n.useState)([]);function v(e,t){let s=structuredClone(r);for(let r=0;r<b.length;r++){let n=b[r],o=n.end+1<e||n.start>t,l=n.arg;if(!1!==l){if(!0===l){let e=structuredClone(w);e.borderColor=o?"#E5E7EB":"#65BA74",C(e)}else s[l].borderColor=o?"#E5E7EB":"#0090FF"}}y(s)}return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.W,{size:"4",className:"relative",children:[(0,s.jsx)(l.x,{height:"9"}),(0,s.jsxs)(a.TextField.Root,{children:[(0,s.jsx)(a.TextField.Slot,{children:(0,s.jsx)(f.VZf,{height:"16",width:"16"})}),(0,s.jsx)(a.TextField.Input,{size:"3",placeholder:"Start typing",autoFocus:!0,onChange:function(e){let t=e.target.value,r=t.split(" "),s={title:"",time:new Date,progress:"Not started",groups:[],progressBar:0,progressBarTotal:0,borderColor:void 0},n=[],o=[],l=[],a=0;for(let e=0;e<r.length;e++){let t=r[e].toLowerCase(),i=!1;for(let d=0;d<j.length;d++){let c=j[d],u=t.match(c.r);if(null!=u){if(c.c){if(e>=c.c.length){let d=[];for(let t=0;t<c.c.length;t++){let s=r[e+t-c.c.length].toLowerCase().match(c.c[t]);if(null==s){d=!1;break}d.push(s)}if(d){let h,g;c.t?(h=c.t,g=c.d,c.f(s,u)):{t:h,d:g}=c.f(s,d,u);let x=[];for(let e=0;e<d.length;e++)x.push(...d[e]);x.push(...u),n.push({title:h,description:g,found:x,borderColor:void 0,start:a,end:a+t.length-1});for(let t=e-c.c.length;t<e;t++)o[t]=!0,l[t]={arg:n.length-1};if(c.co)for(let t=0;t<c.co.length;t++){let s=e-c.c.length-c.co.length+t;if(s<0)break;r[s].match(c.co[t])&&(o[s]=!0,l[s]={arg:n.length-1})}i=!0,l[e]={arg:n.length-1};break}}}else{let r,o;c.t?(r=c.t,o=c.d,c.f(s,u)):{t:r,d:o}=c.f(s,u),n.push({title:r,description:o,found:u,borderColor:void 0,start:a,end:a+t.length-1}),i=!0,l[e]={arg:n.length-1};break}}}a+=t.length+1,o[e]=i}let i=!1,d=[],c=0;for(let e=0;e<o.length;e++){!1==o[e]&&(s.title+=r[e]+" ",l[e]={arg:!0,color:"#65BA74"});let t=l[e];t.token=r[e],i&&i.arg===t.arg?(i.token+=" "+t.token,c+=1+t.token.length):(i&&(i.end=c-1,d.push({arg:!1,token:" ",start:c,end:c}),c++),(i=t).start=c,c+=i.token.length,d.push(i),i.color||(i.color="#0090FF"))}i.end=t.length-1,s.title=s.title.slice(0,-1),C(s),y(n),k(d)},id:"input",onSelect:e=>v(e.target.selectionStart,e.target.selectionEnd),onBlur:e=>{v(-1,-1)},onKeyDown:e=>{let r=e.code,s=e.target.value;"Enter"==r&&(0==s.length?t([]):!1==w||t([w]))},onPaste:e=>{console.log(e)}}),(0,s.jsxs)(a.TextField.Slot,{children:[(0,s.jsx)(i.r,{href:"/app/schedule",children:(0,s.jsx)(d.h,{variant:"soft",children:(0,s.jsx)(f.Que,{height:"16",width:"16"})})}),(0,s.jsx)(i.r,{href:"/app/people",children:(0,s.jsx)(d.h,{variant:"soft",children:(0,s.jsx)(f.Tk0,{height:"16",width:"16"})})}),(0,s.jsx)(i.r,{href:"/app/settings",children:(0,s.jsx)(d.h,{variant:"soft",children:(0,s.jsx)(f.UG6,{height:"16",width:"16"})})})]})]}),(0,s.jsxs)(c.k,{gap:"0",className:"absolute top-24",children:[(0,s.jsx)(l.x,{height:"0",className:"w-[33px]"}),b.map(e=>(0,s.jsx)(u.x,{className:!1===e.arg?"whitespace-pre select-none text-transparent":"border-t-2 z-50 whitespace-pre select-none text-transparent",style:{borderColor:e.color},children:e.token},crypto.randomUUID()))]}),(0,s.jsx)(l.x,{height:"3"}),(0,s.jsxs)(h.Callout.Root,{size:"1",children:[(0,s.jsx)(h.Callout.Icon,{children:(0,s.jsx)(f.H4u,{})}),(0,s.jsx)(h.Callout.Text,{children:w&&""!==w.title?"Press enter when something is typed to create tasks.":"Press escape to quickly view tasks."})]}),(0,s.jsx)(l.x,{height:"3"}),(0,s.jsxs)(g.r,{columns:"3",gap:"3",width:"auto",children:[w?(0,s.jsx)(l.x,{children:(0,s.jsxs)(x.Z,{style:{borderColor:w.borderColor},children:[(0,s.jsxs)(u.x,{children:[(0,s.jsx)(p.c,{children:w.title}),": "+(0,m.getDate)(w.time)]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}):(0,s.jsx)(s.Fragment,{}),r.map(e=>(0,s.jsx)(l.x,{children:(0,s.jsxs)(x.Z,{style:{borderColor:e.borderColor},onClick:t=>{let r=document.getElementById("input");r.focus(),r.setSelectionRange(e.start,e.end+1),v(e.start,e.end)},children:[(0,s.jsxs)(u.x,{children:[(0,s.jsx)(p.c,{children:e.title}),": "+e.description]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Matches: "+e.found.join(", ")]})},crypto.randomUUID()))]})]})})}j=y;var C=r(687),b=r(1018),k=r(9241),v=r(5966),D=r(4183),S=r(7221),T=r(729),F=r(4629),A=r(9357),N=r(6434),M=r(4845),I=r(5867),z=r(4460),R=r(9993);function E(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,R.m6)((0,z.W)(t))}var H=r(5896),P=r(6832);let _=(0,P.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),O=n.forwardRef((e,t)=>{let{className:r,variant:n,size:o,asChild:l=!1,...a}=e,i=l?H.g7:"button";return(0,s.jsx)(i,{className:E(_({variant:n,size:o,className:r})),ref:t,...a})});O.displayName="Button";var B=r(2435),U=r(9178),Y=r(7335);function G(e){let{className:t,classNames:r,showOutsideDays:n=!0,...o}=e;return(0,s.jsx)(Y._W,{showOutsideDays:n,className:E("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:E(_({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:E(_({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:e=>{let{...t}=e;return(0,s.jsx)(B.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,s.jsx)(U.Z,{className:"h-4 w-4"})}},...o})}G.displayName="Calendar";var V=r(8821);let Z=V.fC,L=V.xz,W=n.forwardRef((e,t)=>{let{className:r,align:n="center",sideOffset:o=4,...l}=e;return(0,s.jsx)(V.h_,{children:(0,s.jsx)(V.VY,{ref:t,align:n,sideOffset:o,className:E("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});function K(e){let{hook:t}=e,[r,n]=t;return(0,s.jsxs)(Z,{children:[(0,s.jsx)(L,{asChild:!0,children:(0,s.jsxs)(O,{variant:"outline",className:E("w-[280px] justify-start text-left font-normal",!r&&"text-muted-foreground"),children:[(0,s.jsx)(I.Z,{className:"mr-2 h-4 w-4"}),r?(0,M.WU)(r,"PPP"):(0,s.jsx)("span",{children:"Pick a date"})]})}),(0,s.jsx)(W,{className:"w-auto p-0",children:(0,s.jsx)(G,{mode:"single",selected:r,onSelect:n,initialFocus:!0})})]})}W.displayName=V.VY.displayName;var Q=r(9212),$=r(2216);let q=(0,P.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),X=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)($.f,{ref:t,className:E(q(),r),...n})});X.displayName=$.f.displayName;let J=n.forwardRef((e,t)=>{let{className:r,type:n,...o}=e;return(0,s.jsx)("input",{type:n,className:E("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});function ee(e,t){let{max:r,min:s=0,loop:n=!1}=t,o=parseInt(e,10);return isNaN(o)?"00":(n?(o>r&&(o=s),o<s&&(o=r)):(o>r&&(o=r),o<s&&(o=s)),o.toString().padStart(2,"0"))}function et(e){return/^(0[0-9]|1[0-9]|2[0-3])$/.test(e)?e:ee(e,{max:23})}function er(e){return/^[0-5][0-9]$/.test(e)?e:ee(e,{max:59})}function es(e,t){let{min:r,max:s,step:n}=t,o=parseInt(e,10);return isNaN(o)?"00":ee(String(o+=n),{min:r,max:s,loop:!0})}function en(e,t,r){switch(r){case"minutes":return function(e,t){let r=er(t);return e.setMinutes(parseInt(r,10)),e}(e,t);case"seconds":return function(e,t){let r=er(t);return e.setSeconds(parseInt(r,10)),e}(e,t);case"hours":return function(e,t){let r=et(t);return e.setHours(parseInt(r,10)),e}(e,t);default:return e}}J.displayName="Input";let eo=n.forwardRef((e,t)=>{let{className:r,type:o="tel",value:l,id:a,name:i,date:d=new Date(new Date().setHours(0,0,0,0)),setDate:c,onChange:u,onKeyDown:h,picker:g,onLeftFocus:x,onRightFocus:p,...f}=e,[m,j]=n.useState(!1);n.useEffect(()=>{if(m){let e=setTimeout(()=>{j(!1)},2e3);return()=>clearTimeout(e)}},[m]);let y=n.useMemo(()=>(function(e,t){switch(t){case"minutes":return er(String(e.getMinutes()));case"seconds":return er(String(e.getSeconds()));case"hours":return et(String(e.getHours()));default:return"00"}})(d,g),[d,g]),w=e=>{if("Tab"!==e.key){if(e.preventDefault(),"ArrowRight"===e.key&&(null==p||p()),"ArrowLeft"===e.key&&(null==x||x()),["ArrowUp","ArrowDown"].includes(e.key)){let t=function(e,t,r){switch(r){case"minutes":case"seconds":return es(e,{min:0,max:59,step:t});case"hours":return es(e,{min:0,max:23,step:t});default:return"00"}}(y,"ArrowUp"===e.key?1:-1,g);m&&j(!1),c(en(new Date(d),t,g))}if(e.key>="0"&&e.key<="9"){let t=m?y.slice(1,2)+e.key:"0"+e.key;m&&(null==p||p()),j(e=>!e),c(en(new Date(d),t,g))}}};return(0,s.jsx)(J,{ref:t,id:a||g,name:i||g,className:E("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",r),value:l||y,onChange:e=>{e.preventDefault(),null==u||u(e)},type:o,inputMode:"decimal",onKeyDown:e=>{null==h||h(e),w(e)},...f})});function el(e){let{hook:t}=e,[r,o]=t,l=n.useRef(null),a=n.useRef(null),i=n.useRef(null);return(0,s.jsxs)("div",{className:"flex items-end gap-2",children:[(0,s.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,s.jsx)(X,{htmlFor:"hours",className:"text-xs",children:"Hours"}),(0,s.jsx)(eo,{picker:"hours",date:r,setDate:o,ref:a,onRightFocus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}})]}),(0,s.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,s.jsx)(X,{htmlFor:"minutes",className:"text-xs",children:"Minutes"}),(0,s.jsx)(eo,{picker:"minutes",date:r,setDate:o,ref:l,onLeftFocus:()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.focus()},onRightFocus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.focus()}})]}),(0,s.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,s.jsx)(X,{htmlFor:"seconds",className:"text-xs",children:"Seconds"}),(0,s.jsx)(eo,{picker:"seconds",date:r,setDate:o,ref:i,onLeftFocus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}})]}),(0,s.jsx)("div",{className:"flex h-10 items-center",children:(0,s.jsx)(Q.Z,{className:"ml-2 h-4 w-4"})})]})}eo.displayName="TimePickerInput";var ea=r(8868);function ei(e){let{children:t,editingHooks:r,task:n,setEditing:o,data:l,setDataAndSave:a,index:i}=e;return(0,s.jsxs)(ea.ContextMenu.Root,{children:[(0,s.jsx)(ea.ContextMenu.Trigger,{children:t}),(0,s.jsxs)(ea.ContextMenu.Content,{children:[(0,s.jsx)(ea.ContextMenu.Item,{onClick:()=>{r.time[1](new Date(n[1])),r.time2[1](new Date(n[1])),o({title:n[0],index:i})},children:"Edit"}),(0,s.jsx)(ea.ContextMenu.Item,{onClick:()=>{let e=structuredClone(l),t=structuredClone(n);t[8]=crypto.randomUUID(),e.tasks.push(t),a(e)},children:"Duplicate"}),(0,s.jsx)(ea.ContextMenu.Item,{onClick:()=>{let e=structuredClone(l);e.tasks[i][6]=!0,a(e)},children:"Archive"}),(0,s.jsx)(ea.ContextMenu.Separator,{}),(0,s.jsx)(ea.ContextMenu.Item,{color:"red",onClick:()=>{let e=structuredClone(l);e.tasks[i][7]=!0,a(e)},children:"Delete"})]})]})}var ed=r(7559);function ec(e){let{data:t,setDataAndSave:r,index:n,id:o,get:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(ed.Popover.Root,{children:[(0,s.jsx)(ed.Popover.Trigger,{children:(0,s.jsx)(b.z,{size:"1",asChild:!0,children:(0,s.jsxs)(F.C,{children:[(0,s.jsx)(f.pOD,{width:"16",height:"16"}),"Add group…"]})})}),(0,s.jsx)(ed.Popover.Content,{style:{width:360},children:(0,s.jsx)(c.k,{gap:"3",children:(0,s.jsxs)(l.x,{grow:"1",children:[(0,s.jsx)(a.TextField.Root,{children:(0,s.jsx)(a.TextField.Input,{id:o+"addGroupInput",placeholder:"Group name…",onKeyDown:e=>{if("Enter"==e.key){let e=i(o+"addGroupInput").value,s=structuredClone(t),l=s.groups;l.includes(e)||l.push(e),s.tasks[n][3].push(e),r(s)}}})}),(0,s.jsxs)(c.k,{gap:"3",mt:"3",justify:"between",children:[(0,s.jsx)(c.k,{align:"center",gap:"2",asChild:!0,children:(0,s.jsxs)(u.x,{as:"label",size:"2",children:[(0,s.jsx)(v.Checkbox,{}),(0,s.jsx)(u.x,{children:"Send to group"})]})}),(0,s.jsx)(ed.Popover.Close,{children:(0,s.jsx)(b.z,{size:"1",variant:"soft",onClick:()=>{let e=structuredClone(t);e.tasks[n][3].push(i(o+"addGroupInput").value),r(e)},children:"Add group"})})]})]})})})]}),(0,s.jsxs)(ed.Popover.Root,{children:[(0,s.jsx)(ed.Popover.Trigger,{asChild:!0,children:(0,s.jsx)(b.z,{size:"1",asChild:!0,children:(0,s.jsxs)(F.C,{children:[(0,s.jsx)(f.Tk0,{width:"16",height:"16"}),"Assign to…"]})})}),(0,s.jsx)(ed.Popover.Content,{style:{width:360},children:(0,s.jsx)(c.k,{gap:"3",children:(0,s.jsxs)(l.x,{grow:"1",children:[(0,s.jsx)(a.TextField.Root,{children:(0,s.jsx)(a.TextField.Input,{id:o+"addAssignInput",placeholder:"Entity name…",onKeyDown:e=>{i(o+"addAssignInput").value,e.key}})}),(0,s.jsxs)(c.k,{gap:"3",mt:"3",justify:"between",children:[(0,s.jsx)(c.k,{align:"center",gap:"2",asChild:!0,children:(0,s.jsxs)(u.x,{as:"label",size:"2",children:[(0,s.jsx)(v.Checkbox,{}),(0,s.jsx)(u.x,{children:"Send to group"})]})}),(0,s.jsx)(ed.Popover.Close,{children:(0,s.jsx)(b.z,{size:"1",variant:"soft",onClick:()=>{let e=structuredClone(t);e.tasks[n][3].push(i(o+"addGroupInput").value),r(e)},children:"Add entities"})})]})]})})})]}),(0,s.jsx)(b.z,{size:"1",asChild:!0,onClick:()=>{let e=structuredClone(t);e.tasks[n][2]=t.config.progressOptions[t.config.progressOptions.length-1],r(e)},children:(0,s.jsxs)(F.C,{children:[(0,s.jsx)(f.nQG,{width:"16",height:"16"}),"Done!"]})})]})}function eu(e){let{task:t,data:r,setDataAndSave:n,index:o}=e;return(0,s.jsx)(s.Fragment,{children:t[3].map((e,t)=>(0,s.jsxs)(T.DropdownMenu.Root,{children:[(0,s.jsx)(T.DropdownMenu.Trigger,{children:(0,s.jsx)(b.z,{size:"1",asChild:!0,color:r.config.groupColors[e]||r.config.defaultGroupColor,children:(0,s.jsx)(F.C,{children:e},e)})}),(0,s.jsx)(T.DropdownMenu.Content,{children:(0,s.jsx)(T.DropdownMenu.Item,{color:"red",onClick:()=>{let s=structuredClone(r);s.tasks[o][3].splice(t,1);let l=!1;for(let t=0;t<s.tasks.length;t++)if(s.tasks[t][3].includes(e)){l=!0;break}!1==l&&s.groups.splice(s.groups.indexOf(e),1),n(s)},children:"Delete"})})]},e))})}function eh(e){let{data:t,setDataAndSave:r}=e,[i,h]=(0,n.useState)("notComplete"),[j,y]=(0,n.useState)("table"),[w,M]=(0,n.useState)(!1),[I,z]=(0,n.useState)(!1),[R,E]=(0,n.useState)(!1),H={time:(0,n.useState)(!1),time2:(0,n.useState)(!1)},[P,_]=(0,n.useState)({}),[O,B]=(0,n.useState)({});if(!t)return null;function U(e){return document.getElementById(e)}function Y(e){if(!w&&e[6]||!I&&e[7])return!1;if("all"==i)return!0;if("notComplete"==i)return"Complete"!=e[2];if(i.includes(e[2]))return!0;let t=e[3];for(let e=0;e<t.length;e++)if(i.includes(t[e]))return!0;return!1}let G={};for(let e=0;e<t.tasks.length;e++)G[t.tasks[e][8]]=e;let V=structuredClone(t.tasks);V.sort((e,t)=>{let r=new Date(e[1]).getTime(),s=new Date(t[1]).getTime();return r<s?-1:r>s?1:0});let Z={},L={},W=new Date(0);for(let e=0;e<V.length;e++){let t=V[e],r=new Date(t[1]);Y(t)&&(r.getDate()!==W.getDate()||r.getMonth()!==W.getMonth()||r.getYear()!==W.getYear())&&(L[t[8]]=[{type:"TableOnlyDateSeparator",title:"Due "+(0,m.getDayOnly)(r)+" "+(0,m.getDateOnlyRaw)(r),id:crypto.randomUUID()}],W=r),Z[e]=G[t[8]]}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.Dialog.Root,{open:!1!==R,children:(0,s.jsxs)(C.Dialog.Content,{style:{maxWidth:450},children:[(0,s.jsx)(C.Dialog.Title,{children:"Edit task"}),(0,s.jsx)(C.Dialog.Description,{size:"2",mb:"4",children:"Make changes to your task."}),(0,s.jsxs)(c.k,{direction:"column",gap:"3",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)(u.x,{as:"div",size:"2",mb:"1",weight:"bold",children:"Title"}),(0,s.jsx)(a.TextField.Input,{id:"editingTitle",defaultValue:R.title,placeholder:"Title"})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)(u.x,{as:"div",size:"2",mb:"1",weight:"bold",children:"Time"}),(0,s.jsx)(K,{hook:H.time}),(0,s.jsx)(l.x,{height:"3"}),(0,s.jsx)(el,{hook:H.time2})]})]}),(0,s.jsxs)(c.k,{gap:"3",mt:"4",justify:"end",children:[(0,s.jsx)(C.Dialog.Close,{children:(0,s.jsx)(b.z,{variant:"soft",color:"gray",onClick:()=>{E(!1)},children:"Cancel"})}),(0,s.jsx)(C.Dialog.Close,{children:(0,s.jsx)(b.z,{onClick:()=>{let e=structuredClone(t),s=e.tasks[R.index];s[0]=U("editingTitle").value;let n=H.time[0],o=H.time2[0];n.setHours(o.getHours(),o.getMinutes(),o.getSeconds()),s[1]=n,r(e),E(!1)},children:"Save"})})]})]})}),(0,s.jsxs)(o.W,{size:"4",id:"view",className:"min-h-screen",children:[(0,s.jsx)(l.x,{height:"3"})," ",(0,s.jsxs)(c.k,{gap:"9",children:[(0,s.jsx)(u.x,{as:"label",size:"2",className:"align-right",children:(0,s.jsxs)(c.k,{gap:"3",children:["Card view",(0,s.jsx)(k.Switch,{checked:"table"==j,onClick:()=>{"card"==j?y("table"):y("card")}}),"Table view"]})}),(0,s.jsx)(u.x,{as:"label",size:"2",children:(0,s.jsxs)(c.k,{gap:"3",children:[(0,s.jsx)(v.Checkbox,{onClick:()=>{M(!w)}}),"Include archived"]})}),(0,s.jsx)(u.x,{as:"label",size:"2",children:(0,s.jsxs)(c.k,{gap:"3",children:[(0,s.jsx)(v.Checkbox,{onClick:()=>{z(!I)}}),"Include trashed"]})})]}),(0,s.jsxs)(D.Tabs.Root,{defaultValue:"Not complete",children:[(0,s.jsxs)(D.Tabs.List,{children:[(0,s.jsx)(D.Tabs.Trigger,{onClick:()=>{h("all")},value:"All",children:"All"}),(0,s.jsx)(D.Tabs.Trigger,{onClick:()=>{h("notComplete")},value:"Not complete",children:"Not Complete"}),t.config.progressOptions.map(e=>(0,s.jsx)(D.Tabs.Trigger,{onClick:()=>{h([e])},value:e,children:e},e)),t.groups.map(e=>(0,s.jsx)(D.Tabs.Trigger,{onClick:()=>{h([e])},value:e,children:e},e))]}),(0,s.jsx)(l.x,{height:"3"})]}),"card"==j?(0,s.jsx)(g.r,{columns:"3",gap:"3",width:"auto",children:V.map((e,n)=>{if(!Y(e))return null;let a=Z[n],i=e[8];return(0,s.jsx)(ei,{editingHooks:H,task:e,setEditing:E,data:t,setDataAndSave:r,index:a,children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(d.h,{variant:"ghost",radius:"full",className:"absolute top-2 right-2",onClick:()=>{let e=structuredClone(t);e.tasks[a][7]=!0,r(e)},children:(0,s.jsx)(f.ypG,{width:"16",height:"16"})}),(0,s.jsx)(u.x,{children:(0,s.jsx)(p.c,{children:e[0]})}),(0,s.jsx)("br",{}),(0,s.jsx)(u.x,{children:(0,m.getDate)(new Date(e[1]))}),(0,s.jsx)("br",{}),0==e[5]?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(c.k,{gap:"3",children:[(0,s.jsx)(u.x,{children:"1/2"}),(0,s.jsxs)(o.W,{children:[(0,s.jsx)(l.x,{style:{height:"7.5px"}}),(0,s.jsx)(S.Slider,{defaultValue:[50]})]})]}),(0,s.jsx)(l.x,{height:"3"}),(0,s.jsxs)(c.k,{wrap:"wrap",gap:"3",width:"auto",children:[(0,s.jsxs)(T.DropdownMenu.Root,{children:[(0,s.jsx)(T.DropdownMenu.Trigger,{children:(0,s.jsx)(b.z,{size:"1",asChild:!0,color:t.config.progressColors[e[2]]||t.config.defaultProgressColor,children:(0,s.jsx)(F.C,{children:e[2]})})}),(0,s.jsx)(T.DropdownMenu.Content,{children:t.config.progressOptions.map(e=>(0,s.jsx)(T.DropdownMenu.Item,{onClick:()=>{let s=structuredClone(t);s.tasks[a][2]=e,r(s)},children:e},e))})]}),(0,s.jsx)(eu,{task:e,data:t,setDataAndSave:r,index:a}),(0,s.jsx)(ec,{data:t,setDataAndSave:r,index:a,id:i,get:U})]})]})},i)})}):(0,s.jsxs)(A.iA.Root,{children:[(0,s.jsx)(A.iA.Header,{children:(0,s.jsxs)(A.iA.Row,{children:[(0,s.jsx)(A.iA.ColumnHeaderCell,{children:(0,s.jsx)(v.Checkbox,{checked:P[-1],onClick:()=>{let e=structuredClone(P),r=!1;for(let s=0;s<t.tasks.length;s++)if(e[s]){r=!0;break}r?(r=!1,e[-1]=!1):(r=!0,e[-1]=!0);for(let s=0;s<t.tasks.length;s++)e[s]=r;_(e)}})}),(0,s.jsx)(A.iA.ColumnHeaderCell,{children:"Title"}),(0,s.jsx)(A.iA.ColumnHeaderCell,{children:"Time"}),(0,s.jsx)(A.iA.ColumnHeaderCell,{children:"Progress"}),(0,s.jsx)(A.iA.ColumnHeaderCell,{children:"Groups"}),(0,s.jsx)(A.iA.ColumnHeaderCell,{children:"Actions"})]})}),(0,s.jsx)(A.iA.Body,{children:V.map((e,o)=>{if(!Y(e))return null;let l=Z[o],a=e[8];return(0,s.jsxs)(n.Fragment,{children:[L[a]?L[a].map(e=>{if("TableOnlyDateSeparator"==e.type)return(0,s.jsxs)(A.iA.Row,{children:[(0,s.jsx)(A.iA.Cell,{children:(0,s.jsx)(N.X,{mb:"2",size:"2",className:"m-0",children:e.title})}),(0,s.jsx)(A.iA.Cell,{}),(0,s.jsx)(A.iA.Cell,{}),(0,s.jsx)(A.iA.Cell,{}),(0,s.jsx)(A.iA.Cell,{}),(0,s.jsx)(A.iA.Cell,{})]},e.id)}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(ei,{editingHooks:H,task:e,setEditing:E,data:t,setDataAndSave:r,index:l,children:(0,s.jsxs)(A.iA.Row,{children:[(0,s.jsx)(A.iA.RowHeaderCell,{children:(0,s.jsx)(v.Checkbox,{checked:P[l],onClick:()=>{let e=structuredClone(P);e[l]=!e[l],console.log(e),_(e)}})}),(0,s.jsx)(A.iA.Cell,{children:e[0]}),(0,s.jsx)(A.iA.Cell,{children:(0,m.getDate)(new Date(e[1]))}),(0,s.jsx)(A.iA.Cell,{children:(0,s.jsx)(c.k,{wrap:"wrap",gap:"3",width:"auto",children:(0,s.jsxs)(T.DropdownMenu.Root,{children:[(0,s.jsx)(T.DropdownMenu.Trigger,{children:(0,s.jsx)(b.z,{size:"1",asChild:!0,color:t.config.progressColors[e[2]]||t.config.defaultProgressColor,children:(0,s.jsx)(F.C,{children:e[2]})})}),(0,s.jsx)(T.DropdownMenu.Content,{children:t.config.progressOptions.map(e=>(0,s.jsx)(T.DropdownMenu.Item,{onClick:()=>{let s=structuredClone(t);s.tasks[l][2]=e,r(s)},children:e},e))})]})})}),(0,s.jsx)(A.iA.Cell,{children:(0,s.jsx)(c.k,{wrap:"wrap",gap:"3",width:"auto",children:(0,s.jsx)(eu,{task:e,data:t,setDataAndSave:r,index:l})})}),(0,s.jsx)(A.iA.Cell,{children:(0,s.jsx)(c.k,{wrap:"wrap",gap:"3",width:"auto",children:(0,s.jsx)(ec,{data:t,setDataAndSave:r,index:l,id:a,get:U})})})]})})]},a)})})]})]})]})}var eg=r(1054);function ex(){let[e,t]=(0,m.useData)();function r(r,s){let n=structuredClone(s||e);for(let e=0;e<r.length;e++){let t=r[e];n.tasks.push([t.title,t.time.toString(),t.progress,t.groups,t.progressBar,t.progressBarTotal,!1,!1,crypto.randomUUID()])}t(n)}return(0,n.useEffect)(()=>{window.onkeydown=e=>{"Escape"==e.key&&document.getElementById("scrollarea").scroll({top:document.getElementById("view").getBoundingClientRect().top,left:0,behavior:"instant"})}}),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"h-screen overflow-hidden",children:(0,s.jsxs)(eg.ScrollArea,{type:"always",scrollbars:"vertical",id:"scrollarea",children:[(0,s.jsx)(w,{createTaskDone:function(t){e?r(t):dataPromise.then(e=>{r(t,e)})}}),(0,s.jsx)(eh,{data:e,setDataAndSave:t})]})})})}},2539:function(e,t,r){let{useState:s,useEffect:n,useRef:o}=r(2820);t.getDayOnly=function(e){return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(e)},t.getDateOnlyRaw=function(e){return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},t.getDateOnly=function(e){let r=!1,s=new Date;return s.setDate(s.getDate()),r||s.getMonth()!=e.getMonth()||s.getDate()!=e.getDate()||s.getFullYear()!=e.getFullYear()||(r="Today"),(s=new Date).setDate(s.getDate()+1),r||s.getMonth()!=e.getMonth()||s.getDate()!=e.getDate()||s.getFullYear()!=e.getFullYear()||(r="Tomorrow"),(s=new Date).setDate(s.getDate()-1),r||s.getMonth()!=e.getMonth()||s.getDate()!=e.getDate()||s.getFullYear()!=e.getFullYear()||(r="Yesterday"),r||(r=t.getDateOnlyRaw(e)),r},t.getTimeOnly=function(e){var t=e.getHours(),r=e.getMinutes(),s=t>=12?"PM":"AM";return t%=12,(t=t||12)+":"+(r=r<10?"0"+r:r)+s},t.getDate=function(e){return t.getDateOnly(e)+" "+t.getTimeOnly(e)},t.getMsForDate=function(e){return e.getMilliseconds()+1e3*e.getSeconds()+6e4*e.getMinutes()+36e5*e.getHours()},t.useData=function(){let e={id:"default"},[t,r]=s(!1),[l,a]=s(!1),i=o();function d(){return new Promise((e,t)=>{if(i.current)e();else{let t=indexedDB.open("db",1);t.onupgradeneeded=function(e){let r=t.result;0===e.oldVersion&&r.createObjectStore("data")},t.onerror=function(){console.error("Error",t.error)},t.onsuccess=function(){let r=t.result;r.onversionchange=function(){r.close(),alert("Database is outdated, please reload the page.")},i.current=r,e()}}})}function c(t){d().then(()=>{let r=i.current.transaction("data","readwrite").objectStore("data").put(t,e.id);r.onerror=function(){console.log("Error",r.error)}})}return n(()=>{!1==l&&(a(!0),d().then(()=>{let t=i.current.transaction("data","readonly").objectStore("data").get(e.id);t.onsuccess=function(){let e=t.result;void 0==e&&c(e={tasks:[],groups:[],config:{defaultProgressColor:"grass",defaultGroupColor:"grass",progressColors:{"Not started":"red","In progress":"orange",Complete:"grass"},groupColors:{},progressOptions:["Not started","In progress","Complete"]},events:[],people:[]}),r(e)},t.onerror=function(){console.log("Error",t.error)}}))},[l,a]),[t,function(e){r(e),c(e)}]}}},function(e){e.O(0,[641,545,66,483,455,512,184,744],function(){return e(e.s=2204)}),_N_E=e.O()}]);