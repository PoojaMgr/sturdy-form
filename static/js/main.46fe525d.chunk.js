(this["webpackJsonpform-validation"]=this["webpackJsonpform-validation"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){},14:function(e,s,t){},15:function(e,s,t){"use strict";t.r(s);var a=t(0),n=t(1),c=t.n(n),r=t(6),i=t.n(r),l=(t(12),t(13),t(3)),o=t(5),b=t(2),d=(t(14),function(){var e=Object(n.useState)({email:"",password:""}),s=Object(b.a)(e,2),t=s[0],c=s[1],r=Object(n.useState)({}),i=Object(b.a)(r,2),d=i[0],j=i[1],m=Object(n.useState)(!1),u=Object(b.a)(m,2),p=u[0],O=u[1],h=Object(n.useState)(!0),f=Object(b.a)(h,2),w=f[0],v=f[1],x=function(e){var s=e.target,a=s.name,n=s.value;" "!==n&&v(!1),c(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},a,n)))},g=function(e){var s={};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(s.email="Invalid email format"):s.email="Cannot be blank",e.password?e.password.length<4&&(s.password="Password must be more than 4 characters"):s.password="Cannot be blank",s};return Object(n.useEffect)((function(){0===Object.keys(d).length&&p&&console.log(t)}),[d]),Object(a.jsxs)("div",{className:"container",children:[0===Object.keys(d).length&&p&&Object(a.jsx)("span",{className:"success-msg",children:"Form submitted successfully"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(g(t)),O(!0)},noValidate:!0,className:"form-detail",children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",id:"email",value:t.email,onChange:x,className:d.email&&"input-error"}),d.email&&Object(a.jsx)("span",{className:"error",children:d.email})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password",value:t.password,onChange:x,className:d.password&&"input-error"}),d.password&&Object(a.jsx)("span",{className:"error",children:d.password})]}),Object(a.jsx)("span",{className:"button-style",children:Object(a.jsx)("button",{type:"submit",className:w&&"disabled-btn",disabled:w,children:"Sign In"})})]})]})});var j=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d,{})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,c=s.getLCP,r=s.getTTFB;t(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.46fe525d.chunk.js.map