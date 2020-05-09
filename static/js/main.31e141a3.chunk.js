(this.webpackJsonplauren=this.webpackJsonplauren||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),s=(a(15),a(1)),l=a(2),c=a(4),m=a(3),u=a(6),h=a(9),d=a.n(h),p=(a(18),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.name,this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Introduction")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"Letter")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Collage")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Meaningful Verses")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"Lauren's Birthday Webpage"),i.a.createElement("h3",null,"Lauren, happy 22nd birthday!!!!! I was initially planning to mail you a regular handwritten letter, but COVID-19 gave me inspiration to make it virtual by building a website instead HAHA. Hope you enjoy! :)"),i.a.createElement("hr",null))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=(n.Component,function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.name,this.props.data.bio,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"https://bellaoh.github.io/lauren.github.io/images/profilepic.jpg",alt:"Birthday Letter Icon"})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"Lauren,"),i.a.createElement("p",null,"As I begin writing this letter, I'm slowly beginning to realize how extra ","\n","this whole thing is LOL. But it's too late to turn back now. I'll go back to ","\n","handwritten letters starting next year, so please bear with me just this one time HAHA. "),i.a.createElement("p",null,"With that being said, I'm sorry I can't physically be there to celebrate with you, but ","\n","happiest of birthdays, Lauren! :) I know I say this ","\n","every year, but I'm always SO thankful for you. It's been 4 years since the first time we've met, which ","\n","can be both a short and long time, depending on how you look at it. ","\n","Regardless, the time we spent together in those 4 years are all memories that I feel truly grateful for,","\n","whether that's ordering bubble tea together (lowkey yikes because this happened too many times), ","\n","waking each other up in the mornings, watching the stars during a night walk, going on group trips or ","\n","accidentally having deep talks until 8am. You teach me so much just by being you, and you make me realize the importance/power of","\n","having a strong sisterhood/friendship :). "),i.a.createElement("p",null,"To be able to call a wise, encouraging, empathetic, supportive, beautiful sister in Christ ","\n","like you as my best friend is one of the biggest blessings I've had in my life.","\n","Thank you for being my best friend, and I'm excited to see what the future holds for both of us!","\n","Gosh this is getting too cheesy, so I'll end it right here LOL. Lauren I love you so very much, and once again, happy birthday!!! "))))}}]),a}(n.Component)),g=(n.Component,n.Component,function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return i.a.createElement("li",{key:e.user},i.a.createElement("blockquote",null,i.a.createElement("p",null,e.text),i.a.createElement("cite",null,e.user)))}));return i.a.createElement("section",{id:"testimonials"},i.a.createElement("div",{className:"text-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"two columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Client Testimonials"))),i.a.createElement("div",{className:"ten columns flex-container"},i.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component)),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="https://bellaoh.github.io/lauren.github.io/images/portfolio/"+e.image;return i.a.createElement("div",{key:e.title,className:"columns portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("a",{href:e.url,title:e.title},i.a.createElement("img",{alt:e.title,src:t,height:"100"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.title),i.a.createElement("p",null,e.category))))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Collage of our quality time"),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(l.a)(a,[{key:"getResumeData",value:function(){d.a.ajax({url:"https://bellaoh.github.io/lauren.github.io/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{data:this.state.resumeData.main}),i.a.createElement(f,{data:this.state.resumeData.main}),i.a.createElement(b,{data:this.state.resumeData.portfolio}),i.a.createElement(g,{data:this.state.resumeData.testimonials}))}}]),a}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/lauren.github.io",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/lauren.github.io","/service-worker.js");E?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.31e141a3.chunk.js.map