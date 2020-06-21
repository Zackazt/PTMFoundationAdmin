(this["webpackJsonpptmfoundation-admin"]=this["webpackJsonpptmfoundation-admin"]||[]).push([[0],{13:function(t,e,n){t.exports={loginInput:"styles_loginInput__1199H",loginButton:"styles_loginButton__m-EkS",error:"styles_error__2y5DR"}},16:function(t,e,n){t.exports={postContainer:"styles_postContainer__1w0gv",post:"styles_post__1KNJg",deleteButton:"styles_deleteButton__o47Gn"}},22:function(t,e,n){t.exports={form:"styles_form__2BpkQ",cancelButton:"styles_cancelButton__lHh0r"}},30:function(t,e,n){t.exports=n(43)},35:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(28),l=n.n(i),c=(n(35),n(8)),r=n(4);n(19),n(26);r.initializeApp({apiKey:"AIzaSyAPr55APpnid8bxmYeBT32Slz_HOnTBsQs",authDomain:"ptmfoundation-8c7fd.firebaseapp.com",databaseURL:"https://ptmfoundation-8c7fd.firebaseio.com",projectId:"ptmfoundation-8c7fd",storageBucket:"ptmfoundation-8c7fd.appspot.com",messagingSenderId:"864000579543",appId:"1:864000579543:web:5944d2c9615ad9f20a9d92"});r.firestore();var u=r.auth(),s=n(13),d=n.n(s),m=function(){var t=Object(a.useState)(""),e=Object(c.a)(t,2),n=e[0],i=e[1],l=Object(a.useState)(""),r=Object(c.a)(l,2),s=r[0],m=r[1],p=Object(a.useState)(""),f=Object(c.a)(p,2),h=f[0],g=f[1],b=function(){var t,e;n&&s&&(t=n.trim(),e=s.trim(),u.signInWithEmailAndPassword(t,e)).catch((function(t){"auth/invalid-email"===t.code?g("Invalid credentials"):(console.log("auth/wrong-password"===t.code),g("Incorrect password"))}))};return o.a.createElement("div",{style:{width:"300px",maxWidth:"100%",margin:"auto",marginTop:"100px"}},o.a.createElement("h1",{style:{textAlign:"center"}},"Login"),o.a.createElement("input",{className:d.a.loginInput,type:"email",placeholder:"email",onKeyDown:function(t){"Enter"===t.key&&b()},onChange:function(t){return i(t.target.value)}}),o.a.createElement("input",{className:d.a.loginInput,style:{width:"300px",maxWidth:"100%",marginBottom:"25px"},type:"password",placeholder:"password",onKeyDown:function(t){"Enter"===t.key&&b()},onChange:function(t){return m(t.target.value)}}),h&&o.a.createElement("div",{className:d.a.error},h),o.a.createElement("button",{disabled:!n||!s,className:d.a.loginButton,onClick:b},"Login"))},p=n(2),f=n(9),h=n(16),g=n.n(h),b=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],i=e[1],l=Object(p.f)();Object(a.useEffect)((function(){var t=!1;return r.firestore().collection("posts").orderBy("date","desc").get().then((function(e){if(!t){var n=[];e.forEach((function(t){var e=t.data();n.push(Object(f.a)(Object(f.a)({},e),{},{id:t.id}))})),i(n)}})),function(){t=!0}}),[]);return o.a.createElement("div",{className:g.a.postContainer},o.a.createElement("h1",null,"Posts"),o.a.createElement("button",{onClick:function(){return l.push("/PTMFoundationAdmin/new")}},"Create New Post"),n.length?n.map((function(t,e){return o.a.createElement("div",{className:g.a.post,key:e},o.a.createElement("h1",null,t.title),o.a.createElement("img",{alt:"post",src:t.img}),o.a.createElement("button",{onClick:function(){return function(t){return l.push("/PTMFoundationAdmin/edit?post=".concat(t.id))}(t)}},"Edit"),o.a.createElement("button",{onClick:function(){return function(t){window.confirm("Are you sure you want to delete: ".concat(t.title,"?"))&&r.firestore().collection("posts").doc(t.id).delete().then((function(){return l.go()}))}(t)},className:g.a.deleteButton},"Delete"))})):o.a.createElement(o.a.Fragment,null,"No posts yet"))},E=n(22),v=n.n(E),y=function(t){var e=t.isEdit,n=Object(a.useState)({body:"",title:"",img:""}),i=Object(c.a)(n,2),l=i[0],u=i[1],s=Object(p.f)(),d=Object(p.g)();Object(a.useEffect)((function(){var t,n,a=null===(t=d.search)||void 0===t||null===(n=t.split("post="))||void 0===n?void 0:n[1];e&&a&&r.firestore().collection("posts").doc(a).get().then((function(t){var e=t.data();e&&u(e)}))}),[d.search,e]);return o.a.createElement("div",{className:v.a.form},o.a.createElement("h1",null,e?"Edit Post":"Create Post"),o.a.createElement("label",null,"Title"),o.a.createElement("input",{placeholder:"Title",value:l.title,onChange:function(t){return u(Object(f.a)(Object(f.a)({},l),{},{title:t.target.value}))}}),o.a.createElement("label",null,"Image URL"),o.a.createElement("input",{placeholder:"Image URL",value:l.img,onChange:function(t){return u(Object(f.a)(Object(f.a)({},l),{},{img:t.target.value}))}}),o.a.createElement("label",null,"Post Body"),o.a.createElement("textarea",{onChange:function(t){return u(Object(f.a)(Object(f.a)({},l),{},{body:t.target.value}))},placeholder:"Post",defaultValue:l.body}),o.a.createElement("button",{onClick:function(){var t,n,a=null===(t=d.search)||void 0===t||null===(n=t.split("post="))||void 0===n?void 0:n[1];l.title&&l.body&&l.img&&(e&&a?r.firestore().collection("posts").doc(a).update({title:l.title.trim(),body:l.body.trim(),img:l.img.trim()}).then((function(){return s.push("/PTMFoundationAdmin/home")})):r.firestore().collection("posts").add({title:l.title.trim(),body:l.body.trim(),img:l.img.trim(),date:Date.now()}).then((function(){return s.push("/PTMFoundationAdmin/home")})))}},e?"Update":"Create"),o.a.createElement("button",{className:v.a.cancelButton,onClick:function(){return s.push("/PTMFoundationAdmin/home")}},"Cancel"))},O=function(){var t=Object(a.useState)(),e=Object(c.a)(t,2),n=e[0],i=e[1],l=Object(p.f)();return r.auth().onAuthStateChanged((function(t){i(t)})),Object(a.useEffect)((function(){n?l.push("/PTMFoundationAdmin/home"):l.push("/PTMFoundationAdmin/login")}),[n,l]),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){r.auth().signOut()}},"Log Out"),o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/PTMFoundationAdmin/login"},o.a.createElement(m,null)),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/home"},o.a.createElement(b,null)),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/new"},o.a.createElement(y,{isEdit:!1})),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/edit"},o.a.createElement(y,{isEdit:!0}))))},j=n(11);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j.a,null,o.a.createElement(O,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.80ad0912.chunk.js.map