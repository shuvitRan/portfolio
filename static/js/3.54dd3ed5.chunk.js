(this["webpackJsonpdanran-portfolio"]=this["webpackJsonpdanran-portfolio"]||[]).push([[3],{426:function(e,t,i){"use strict";t.a={exit:{opacity:0,x:5,y:-4},enter:{opacity:1,y:0,x:0,delay:function(e){return 4*e.charIndex}}}},427:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),n=i(1),a=u(n),r=u(i(26)),s=i(428),l=u(i(429)),c=u(i(430)),d=u(i(431));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=0,g=0,v=0,y=0,b="data-lazyload-listened",w=[],E=[],P=!1;try{var T=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,T)}catch(S){}var _=!!P&&{capture:!1,passive:!0},C=function(e){var t=e.ref;if(t instanceof HTMLElement){var i=(0,l.default)(t);(e.props.overflow&&i!==t.ownerDocument&&i!==document&&i!==document.documentElement?function(e,t){var i=e.ref,o=void 0,n=void 0,a=void 0,r=void 0;try{var s=t.getBoundingClientRect();o=s.top,n=s.left,a=s.height,r=s.width}catch(S){o=f,n=g,a=y,r=v}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),u=Math.max(n,0),p=Math.min(l,o+a)-d,m=Math.min(c,n+r)-u,h=void 0,b=void 0,w=void 0,E=void 0;try{var P=i.getBoundingClientRect();h=P.top,b=P.left,w=P.height,E=P.width}catch(S){h=f,b=g,w=y,E=v}var T=h-d,_=b-u,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return T-C[0]<=p&&T+w+C[1]>=0&&_-C[0]<=m&&_+E+C[1]>=0}(e,i):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var i=void 0,o=void 0;try{var n=t.getBoundingClientRect();i=n.top,o=n.height}catch(S){i=f,o=y}var a=window.innerHeight||document.documentElement.clientHeight,r=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return i-r[0]<=a&&i+o+r[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},D=function(){E.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),E=[]},j=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}D()},x=void 0,M=null,A=function(e){function t(e){p(this,t);var i=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.visible=!1,i.setRef=i.setRef.bind(i),i}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var i=void 0!==this.props.debounce&&"throttle"===x||"debounce"===x&&void 0===this.props.debounce;if(i&&((0,s.off)(e,"scroll",M,_),(0,s.off)(window,"resize",M,_),M=null),M||(void 0!==this.props.debounce?(M=(0,c.default)(j,"number"===typeof this.props.debounce?this.props.debounce:300),x="debounce"):void 0!==this.props.throttle?(M=(0,d.default)(j,"number"===typeof this.props.throttle?this.props.throttle:300),x="throttle"):M=j),this.props.overflow){var o=(0,l.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var n=+o.getAttribute(b)+1;1===n&&o.addEventListener("scroll",M,_),o.setAttribute(b,n)}}else if(0===w.length||i){var a=this.props,r=a.scroll,u=a.resize;r&&(0,s.on)(e,"scroll",M,_),u&&(0,s.on)(window,"resize",M,_)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(b)-1;0===t?(e.removeEventListener("scroll",M,_),e.removeAttribute(b)):e.setAttribute(b,t)}}var i=w.indexOf(this);-1!==i&&w.splice(i,1),0===w.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",M,_),(0,s.off)(window,"scroll",M,_))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,i=e.children,o=e.placeholder,n=e.classNamePrefix;return a.default.createElement("div",{className:n+"-wrapper",ref:this.setRef},this.visible?i:o||a.default.createElement("div",{style:{height:t},className:n+"-placeholder"}))}}]),t}(n.Component);A.propTypes={classNamePrefix:r.default.string,once:r.default.bool,height:r.default.oneOfType([r.default.number,r.default.string]),offset:r.default.oneOfType([r.default.number,r.default.arrayOf(r.default.number)]),overflow:r.default.bool,resize:r.default.bool,scroll:r.default.bool,children:r.default.node,throttle:r.default.oneOfType([r.default.number,r.default.bool]),debounce:r.default.oneOfType([r.default.number,r.default.bool]),placeholder:r.default.node,scrollContainer:r.default.oneOfType([r.default.string,r.default.object]),unmountIfInvisible:r.default.bool},A.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var N=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(i){function n(){p(this,n);var e=m(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.displayName="LazyLoad"+N(t),e}return h(n,i),o(n,[{key:"render",value:function(){return a.default.createElement(A,e,a.default.createElement(t,this.props))}}]),n}(n.Component)}},t.default=A,t.forceCheck=j,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}D()}},428:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,i,o){o=o||!1,e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){i.call(e,t||window.event)}))},t.off=function(e,t,i,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i)}},429:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,i=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var n=window.getComputedStyle(o),a=n.position,r=n.overflow,s=n["overflow-x"],l=n["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(i.test(r)&&i.test(s)&&i.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},430:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var o=void 0,n=void 0,a=void 0,r=void 0,s=void 0,l=function l(){var c=+new Date-r;c<t&&c>=0?o=setTimeout(l,t-c):(o=null,i||(s=e.apply(a,n),o||(a=null,n=null)))};return function(){a=this,n=arguments,r=+new Date;var c=i&&!o;return o||(o=setTimeout(l,t)),c&&(s=e.apply(a,n),a=null,n=null),s}}},431:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var o,n;return t||(t=250),function(){var a=i||this,r=+new Date,s=arguments;o&&r<o+t?(clearTimeout(n),n=setTimeout((function(){o=r,e.apply(a,s)}),t)):(o=r,e.apply(a,s))}}},435:function(e,t,i){e.exports={containerWrap:"PortfolioContentV2_containerWrap__ZMOw0",contentContainer:"PortfolioContentV2_contentContainer__1GnY6",imgHeader:"PortfolioContentV2_imgHeader__19uZj",fadein:"PortfolioContentV2_fadein__3YAO3",mainLayout:"PortfolioContentV2_mainLayout__E2t2H",textLayout:"PortfolioContentV2_textLayout__2DFlO",descriptionText:"PortfolioContentV2_descriptionText__rjIn_",categoryColumns:"PortfolioContentV2_categoryColumns__1HGZs",imgDes:"PortfolioContentV2_imgDes__28CUJ",imgSecLayout:"PortfolioContentV2_imgSecLayout__39dcS",DescriptionWithTitle:"PortfolioContentV2_DescriptionWithTitle__1fHwp",moreDescriptionText:"PortfolioContentV2_moreDescriptionText__3j1YV",h_iframe:"PortfolioContentV2_h_iframe__2Ke0n",videoContainer:"PortfolioContentV2_videoContainer__aTGWD",videoTitle:"PortfolioContentV2_videoTitle__1L6CV",goBack:"PortfolioContentV2_goBack__1vWbh",goBackIcon:"PortfolioContentV2_goBackIcon__3TsLh"}},436:function(e){e.exports=JSON.parse('[{"id":0,"title":"ALL AT ONCE","tools":["D3","Bootstrap","JQuery","Canvas","Openseadragon","Interaction Design"],"role":["Interaction Designer","Developer"],"descriptions":"This creative web application is a new part of the Studio TheGreenEyl\'s All At Once series, a project that invites an algorithmic, data-driven dive into Williams College Museum of Art\'s collection. A design and research practice, the project presents WCMA\'s collection as a whole, seen from a new perspective, and allows new adjacencies and connections to come to the fore.","imgFolder":"WCMA","header":"WCMATop.png","imgsSection":[{"img":"WCMAMov1.gif","text":"I did the interaction design and developed this application for the Studio TheGreenEyl in May 2020. The concept design is by Richard The. This canvas and SVG based application render more than 4000 High-resolution images in one browser tab fluently. With a very tight schedule, this project is executed beautifully and efficiently.","des":"Show different cluster."},{"img":"WCMAMov2.gif","des":"Show next related art."},{"img":"3.png"},{"img":"5.png"},{"img":"6.jpg"}],"videoName":"Video Documentation","videoLink":["https://player.vimeo.com/video/428276309"],"videoTop":false,"button":[],"buttonName":[]},{"id":1,"title":"Shenzhen: The Growth and Livability of a Mega City ","tools":["Vue.js","Nuxt.js","Mapbox GL JS & Studio","D3.js","Scrollama","Baidu Map API"],"role":["Designer","Developer"],"descriptions":"This is a web application and interactive storytelling project,  partnered with The Nature Conservancy: Shenzhen. It is a project aimed to raise people\'s awareness to improve the livability of the cities in developing countries, instead of solely focusing on pursuing economic growth.  It is also the application part of my thesis project in partial fulfillment of the requirements for the degree of Master of Science in Data Visualization at Parsons School of Design.","button":["https://shuvitran.github.io/szapp/","https://github.com/shuvitRan/ShenzhenLivability/blob/master/ShenzhenLivabilityinThreeAspects.pdf"],"buttonName":["Desktop Web App","Academic Paper"],"imgFolder":"TNC","header":"TNCTop.jpg","imgsSection":[{"img":"1.png","title":"Why Shenzhen","text":"Shenzhen, known as China\'s booming silicon valley today, used to be a small fish town 40 years ago. Today, it ranks one of the top mega-cities in China and leading examples of urbanization in developing countries. By looking at Shenzhen, we could learn about the challenges that come with rapid growth and learn to build our city better."},{"img":"2.jpg","des":"Story of Growth Intro"},{"img":"3.jpg","des":"Story of Growth 1979 Satellite Image"},{"img":"4.jpg","des":"Story of Growth"},{"img":"5.jpg","des":"The Livability in Three Aspects: Green Coverage"},{"img":"6.jpg","des":"The Livability in Three Aspects: Hospital Accessibility"},{"img":"7.jpg","des":"The Livability in Three Aspects: Crime and Safety"}],"videoName":"Video Documentation","videoLink":["https://player.vimeo.com/video/420423868"],"videoTop":true},{"id":2,"title":"Firis App Design","tools":["Product Design","Sketch","After Effects","Premiere","Illustrator","UI & UX","Motion Graphics","VFX","Video Editing"],"role":["Designer"],"descriptions":"Have you or your friends dreamed to act as Harley Quinn or IronMan in a movie video? We are building a mobile app to enable you to fuse yourself with the movie characters you love and even place yourself into movie fragments using computer vision. Firis is a startup idea and product prototype developed and incubated in Cornell Tech Startup studio.  ","imgFolder":"Firis","header":"FirisTop.jpg","imgsSection":[{"img":"ironduan.gif","text":"As the full-stack designer, I teamed up with four developers. I designed a full package for the Firis, including brand identity, pitch deck, UI/UX, motion and interaction, special effects, and video commercial."},{"img":"FirisMotion.gif","text":"Firis is more than a logo and a set of UI. It\u2019s a story, a mood, a tone of voice, a dependable experience that consumers trust and love."},{"img":"Essense.jpg"},{"img":"LogoMark.jpg"},{"img":"FirisColornType.jpg"},{"img":"Components.jpg"},{"img":"UIMotionNew.gif"},{"img":"firisUI.jpg"},{"img":"firisUINite.jpg","des":"Nite Mode Test"},{"img":"3.jpg"}]},{"id":3,"title":"MET Creative Projects","tools":["D3","DeepAR SDK ","p5.js","OpenCV","Python","Numpy","Pandas","Web Design","Data Visualization"],"role":["Designer","Developer"],"descriptions":"This is a collection of four very different creative applications that I made for the research collaboration between the Metropolitan Museum of Art and MSDV at Parsons School of Design.","imgFolder":"Met","button":["https://shuvitran.github.io/MetPartnershipProjectsDoc/BuddhasAtTheMet/","https://shuvitran.github.io/MetPartnershipProjectsDoc/MetMasquerade/","https://shuvitran.github.io/MetPartnershipProjectsDoc/WhatAreTheyPainting/","https://shuvitran.github.io/MetPartnershipProjectsDoc/LetTheMusicPlay/"],"buttonName":["Buddhas at the Met","Met Masquerade","What Are They Painting?","Let the Music Play"],"header":"METTop.png","imgsSection":[{"img":"1.jpg","title":"Buddha at The Met","text":" A computer-vision based research and data visualization on the Buddha statues at the museum."},{"img":"2.jpg","title":"Met Masquerade","text":"A playful AR application, introducing the mask collection at the Met."},{"img":"3.jpg","title":"What are They Painting?","text":"An insight into the Met\'s paintings collection. A data visualization of the top 10 tags of paintings from 9 countries/civilizations during four periods of time."},{"img":"4.jpg","title":"Let the Music Play","text":"An interactive listen-and-guess game to provide the audience with a sensual association between 24 instruments and their sounds."}],"videoTop":false},{"id":4,"title":"Peeq","tools":["UI & UX","Product Design","Interaction Design","Motion Graphics","Video Editing"],"role":["Motion Designer","Interaction Designer","Video Specialist"],"descriptions":"Peeq Data is a technology start-up company based in the San Francisco Bay Area. Peeq IOS app is a smart mobile multi-angle camera and editing system which can auto-generate highlight videos. ","imgFolder":"Peeq","header":"1.jpg","imgsSection":[{"img":"PeeqMov2.gif","des":"Peeq demo video intro.","text":"I was a full-time motion and interaction designer at Peeq Data, Inc. Responsible for design-related activities including creating motion graphics and processing video, user interface, and user experience of the website and mobile applications."},{"img":"4.gif","des":"Video tags motion design."},{"img":"PeeqSwitchAngle.gif","des":"Switch angle."},{"img":"2.jpg","text":"I was in charge of the design interaction motion template and video sample for the Peeq app and its video product. The clients of our video products include Dew NBA, SteveNash Foundation, Drew League, and WorkForce Athletics.  As a member of the Peeq design team, I worked on the app UI/UX design, Peeq website design, and its development. One of the video samples that I created was shown on the Discovery Channel Daily Planet Show featuring Peeq in December 2017."},{"img":"3.gif","des":"App onboarding."},{"img":"5.jpg","des":"Capture flow."}],"videoName":"Peeq Intro","videoLink":["https://player.vimeo.com/video/310027671"]},{"id":5,"title":"Blue Desert Disco","role":["Project Manager","Game Designer","Game Developer"],"tools":["Unity","C#","Game Design & Development","Physical Computing","Arduino"],"descriptions":"Blue Desert Disco is a multiple-players fighting digital game that comes with custom 3D print controllers.  It was showcased in Wonderville ( An Independent Game Space) in Brooklyn in December 2019. I lead the team and serve as the concept designer and developer of this game. I am the sole developer of the game software. I also helped with physical computing development.","imgFolder":"Games","header":"GamesTop.jpg","imgsSection":[{"img":"1.jpg","text":"In this game, each gamer has their own custom 3D print controller paired with a specific character in the game. Each character has their own unique \\"weapon\\" that reflects on their corresponding controller. Their speed and strengths also vary from each other. The controllers are identical in their overall shape but different in the reflective device/components of the characters\' abilities. The players have to adapt to the controller and figure out their own way to play quickly, and meanwhile, defeats the other players. The winner, of course, has the dance floor all to herself/himself."},{"img":"2.jpg","des":"Game characters."},{"img":"3.jpg","des":"Game showcase in Brooklyn."}],"button":["https://vimeo.com/376450826","https://vimeo.com/370009707"],"buttonName":["early stage documenation","more game I made - Love You Away"],"videoName":"Video Documentation","videoLink":["https://player.vimeo.com/video/378023986"],"videoTop":true}]')},438:function(e,t,i){"use strict";i.r(t);var o=i(1),n=i.n(o),a=i(435),r=i.n(a),s=i(436),l=i(76),c=i(62),d=i(61),u=i(426),p=i(10),m=i(427),h=i.n(m);t.default=function(e){var t,i,a,m=Object(p.h)(),f=s,g=Object(p.g)();if(Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]),!f[m.id])return n.a.createElement(p.a,{to:"/404"});f[m.id]&&"undefined"!=typeof f[m.id].header&&(t=n.a.createElement(h.a,{height:200},n.a.createElement("div",{className:r.a.imgHeader},n.a.createElement("img",{src:"/assets/projectImgs/".concat(f[m.id].imgFolder,"/").concat(f[m.id].header)})))),f[m.id].role&&"undefined"!=f[m.id].role&&(i=n.a.createElement("span",null,n.a.createElement("b",null,n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},"ROLE")),f[m.id].role.map((function(e,t){return n.a.createElement("div",{key:"Role"+t},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},e))})))),"undefined"!=f[m.id].tools&&(a=n.a.createElement("span",null,n.a.createElement("b",null,n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},"SKILLS")),f[m.id].tools.map((function(e,t){return n.a.createElement("div",{key:"thisTools"+t},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},e))}))));var v,y,b,w,E=null;return f[m.id].button&&"undefined"!=f[m.id].button&&f[m.id].button.length>0&&(E=n.a.createElement("span",null,n.a.createElement("b",null,n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},"LINK")),f[m.id].button.map((function(e,t){return n.a.createElement("div",{key:"buttonout"+t,className:r.a.buttonToWeb},n.a.createElement(l.a.OutboundLink,{eventLabel:f[m.id].buttonName[t]+" Button Clicked",to:e,target:"_blank",trackerNames:["tracker2"]},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},f[m.id].buttonName[t])))})))),f[m.id]&&(v=n.a.createElement("div",{className:r.a.mainLayout},n.a.createElement(h.a,{height:200},n.a.createElement("h1",null,n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},f[m.id].title))),n.a.createElement("div",{className:r.a.textLayout},n.a.createElement("div",{className:r.a.descriptionText},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:u.a},f[m.id].descriptions)),n.a.createElement(h.a,{height:300},n.a.createElement("span",{className:r.a.categoryColumns},i,a,E))))),f[m.id]&&"undefined"!=typeof f[m.id].imgsSection&&(y=n.a.createElement(n.a.Fragment,null,f[m.id].imgsSection.map((function(e,t){return n.a.createElement("div",{className:r.a.imgSecLayout,key:"content"+t},n.a.createElement(h.a,{height:200},n.a.createElement("img",{src:"/assets/projectImgs/".concat(f[m.id].imgFolder,"/").concat(e.img)})),e.des&&"undefined"!=typeof e.des?n.a.createElement("div",{className:r.a.imgDes},n.a.createElement(h.a,{height:200},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},e.des))):n.a.createElement(n.a.Fragment,null),e.title&&"undefined"!=typeof e.title?n.a.createElement("div",{className:r.a.DescriptionWithTitle},n.a.createElement("h1",null,n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},e.title)),n.a.createElement("span",{className:r.a.textLayout},n.a.createElement(h.a,{height:300},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:u.a},e.text)))):n.a.createElement(n.a.Fragment,null),e.text&&"undefined"!=typeof e.text&&"undefined"==typeof e.title?n.a.createElement("div",{className:r.a.textLayout},n.a.createElement("div",{className:r.a.moreDescriptionText},n.a.createElement(h.a,{height:300},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:u.a},e.text)))):n.a.createElement(n.a.Fragment,null))})))),f[m.id]&&"undefined"!=typeof f[m.id].videoLink&&(b=n.a.createElement("div",{className:r.a.videoContainer},n.a.createElement("div",{className:r.a.videoTitle},n.a.createElement("h1",null,n.a.createElement(h.a,{height:200},n.a.createElement(c.a,{initialPose:"exit",pose:"enter",charPoses:d.a},f[m.id].videoName)))),f[m.id].videoLink.map((function(e,t){return n.a.createElement("div",{key:"video"+t,className:r.a.h_iframe},n.a.createElement(h.a,{height:200},n.a.createElement("iframe",{src:"".concat(e,"?autoplay=0&loop=1&title=0&byline=0&portrait=0"),frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})))})))),w=f[m.id]&&"undefined"!=f[m.id].videoTop&&f[m.id].videoTop?n.a.createElement(n.a.Fragment,null,b,y):n.a.createElement(n.a.Fragment,null,y,b),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r.a.containerWrap},n.a.createElement("div",{className:r.a.contentContainer},n.a.createElement("div",{onClick:function(){l.a.event({category:"GoBack Button is Clicked",action:"BackToHome"}),g.push("/")},className:[r.a.goBack,"noselect"].join(" ")},n.a.createElement("div",{className:r.a.goBackIcon})),t,v,w)))}}}]);
//# sourceMappingURL=3.54dd3ed5.chunk.js.map