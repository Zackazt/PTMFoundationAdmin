(this["webpackJsonpptmfoundation-admin"]=this["webpackJsonpptmfoundation-admin"]||[]).push([[0],{13:function(e,t,n){e.exports={loginInput:"styles_loginInput__1199H",loginButton:"styles_loginButton__m-EkS",error:"styles_error__2y5DR"}},14:function(e,t,n){e.exports={form:"styles_form__2BpkQ",cancelButton:"styles_cancelButton__lHh0r",imgErr:"styles_imgErr__3RZQR",error:"styles_error__1y1cV"}},17:function(e,t,n){e.exports={postContainer:"styles_postContainer__1w0gv",post:"styles_post__1KNJg",deleteButton:"styles_deleteButton__o47Gn"}},30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(28),l=n.n(i),r=(n(35),n(9)),c=n(4);n(20),n(26);c.initializeApp({apiKey:"AIzaSyAPr55APpnid8bxmYeBT32Slz_HOnTBsQs",authDomain:"ptmfoundation-8c7fd.firebaseapp.com",databaseURL:"https://ptmfoundation-8c7fd.firebaseio.com",projectId:"ptmfoundation-8c7fd",storageBucket:"ptmfoundation-8c7fd.appspot.com",messagingSenderId:"864000579543",appId:"1:864000579543:web:5944d2c9615ad9f20a9d92"});c.firestore();var u=c.auth(),s=n(13),d=n.n(s),m=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(""),c=Object(r.a)(l,2),s=c[0],m=c[1],p=Object(a.useState)(""),f=Object(r.a)(p,2),g=f[0],h=f[1],b=function(){var e,t;n&&s&&(e=n.trim(),t=s.trim(),u.signInWithEmailAndPassword(e,t)).catch((function(e){"auth/invalid-email"===e.code?h("Invalid credentials"):(console.log("auth/wrong-password"===e.code),h("Incorrect password"))}))};return o.a.createElement("div",{style:{width:"300px",maxWidth:"100%",margin:"auto",marginTop:"100px"}},o.a.createElement("h1",{style:{textAlign:"center"}},"Login"),o.a.createElement("input",{className:d.a.loginInput,type:"email",placeholder:"email",onKeyDown:function(e){"Enter"===e.key&&b()},onChange:function(e){return i(e.target.value)}}),o.a.createElement("input",{className:d.a.loginInput,style:{width:"300px",maxWidth:"100%",marginBottom:"25px"},type:"password",placeholder:"password",onKeyDown:function(e){"Enter"===e.key&&b()},onChange:function(e){return m(e.target.value)}}),g&&o.a.createElement("div",{className:d.a.error},g),o.a.createElement("button",{disabled:!n||!s,className:d.a.loginButton,onClick:b},"Login"))},p=n(2),f=n(8),g=n(17),h=n.n(g),b=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(p.f)();Object(a.useEffect)((function(){var e=!1;return c.firestore().collection("posts").orderBy("date","desc").get().then((function(t){if(!e){var n=[];t.forEach((function(e){var t=e.data();n.push(Object(f.a)(Object(f.a)({},t),{},{id:e.id}))})),i(n)}})),function(){e=!0}}),[]);return o.a.createElement("div",{className:h.a.postContainer},o.a.createElement("h1",null,"Posts"),o.a.createElement("button",{onClick:function(){return l.push("/PTMFoundationAdmin/new")}},"Create New Post"),n.length?n.map((function(e,t){return o.a.createElement("div",{className:h.a.post,key:t},o.a.createElement("h1",null,e.title),o.a.createElement("img",{alt:"post",src:e.img}),o.a.createElement("button",{onClick:function(){return function(e){return l.push("/PTMFoundationAdmin/edit?post=".concat(e.id))}(e)}},"Edit"),o.a.createElement("button",{onClick:function(){return function(e){window.confirm("Are you sure you want to delete: ".concat(e.title,"?"))&&c.firestore().collection("posts").doc(e.id).delete().then((function(){return l.go()}))}(e)},className:h.a.deleteButton},"Delete"))})):o.a.createElement(o.a.Fragment,null,"No posts yet"))},E=n(14),y=n.n(E),v=function(e){var t=e.isEdit,n=Object(a.useState)({body:"",title:"",img:"",date:0}),i=Object(r.a)(n,2),l=i[0],u=i[1],s=Object(p.f)(),d=Object(p.g)(),m=Object(a.useState)(""),g=Object(r.a)(m,2),h=g[0],b=g[1];Object(a.useEffect)((function(){var e,n,a=null===(e=d.search)||void 0===e||null===(n=e.split("post="))||void 0===n?void 0:n[1];t&&a&&c.firestore().collection("posts").doc(a).get().then((function(e){var t=e.data();t&&u(t)}))}),[d.search,t]);var E,v=function(e){return null!=e.match(/\.(jpeg|jpg|gif|png)$/)},O=function(e){return new Date(e)?new Date(e).valueOf():null};return o.a.createElement("div",{className:y.a.form},o.a.createElement("h1",null,t?"Edit Post":"Create Post"),o.a.createElement("label",null,"Date"),o.a.createElement("input",{style:{width:"auto",display:"block"},type:"date",value:(E=l.date,new Date(E)?new Date(E).toISOString().slice(0,10):null),onChange:function(e){e.persist(),O(e.target.value)&&u(Object(f.a)(Object(f.a)({},l),{},{date:O(e.target.value)}))}}),o.a.createElement("label",null,"Title"),o.a.createElement("input",{placeholder:"Title",value:l.title,onChange:function(e){return u(Object(f.a)(Object(f.a)({},l),{},{title:e.target.value}))}}),o.a.createElement("label",null,"Image URL"),o.a.createElement("input",{placeholder:"Image URL",value:l.img,className:h?y.a.error:"",onChange:function(e){return u(Object(f.a)(Object(f.a)({},l),{},{img:e.target.value}))}}),o.a.createElement("span",{className:y.a.imgErr},h),o.a.createElement("label",null,"Post Body"),o.a.createElement("textarea",{onChange:function(e){return u(Object(f.a)(Object(f.a)({},l),{},{body:e.target.value}))},placeholder:"Post",defaultValue:l.body}),o.a.createElement("button",{onClick:function(){var e,n,a=null===(e=d.search)||void 0===e||null===(n=e.split("post="))||void 0===n?void 0:n[1];l.title&&l.body&&l.img&&v(l.img)?t&&a?c.firestore().collection("posts").doc(a).update({title:l.title.trim(),body:l.body.trim(),img:l.img.trim(),date:l.date}).then((function(){return s.push("/PTMFoundationAdmin/home")})):c.firestore().collection("posts").add({title:l.title.trim(),body:l.body.trim(),img:l.img.trim(),date:Date.now()}).then((function(){return s.push("/PTMFoundationAdmin/home")})):l.img&&!v(l.img)&&b("Please post the direct link to the image. It should end in .png, .jpg, etc")}},t?"Update":"Create"),o.a.createElement("button",{className:y.a.cancelButton,onClick:function(){return s.push("/PTMFoundationAdmin/home")}},"Cancel"))},O=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(p.f)();return c.auth().onAuthStateChanged((function(e){i(e)})),Object(a.useEffect)((function(){n?l.push("/PTMFoundationAdmin/home"):l.push("/PTMFoundationAdmin/login")}),[n,l]),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){c.auth().signOut()}},"Log Out"),o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/PTMFoundationAdmin/login"},o.a.createElement(m,null)),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/home"},o.a.createElement(b,null)),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/new"},o.a.createElement(v,{isEdit:!1})),o.a.createElement(p.a,{path:"/PTMFoundationAdmin/edit"},o.a.createElement(v,{isEdit:!0}))))},j=n(11);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j.a,null,o.a.createElement(O,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8a6c81af.chunk.js.map