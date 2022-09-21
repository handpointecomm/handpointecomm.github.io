"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4573],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],c={sidebar_position:4,id:"javascriptquickintegration"},s="Integration Guide",l={unversionedId:"javascriptquickintegration",id:"version-JavaScript SDK 6.1.0/javascriptquickintegration",title:"Integration Guide",description:"Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint.",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.1.0/javascriptquickintegration.md",sourceDirName:".",slug:"/javascriptquickintegration",permalink:"/javascript/javascriptquickintegration",tags:[],version:"JavaScript SDK 6.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"javascriptquickintegration"},sidebar:"tutorialSidebar",previous:{title:"Trigger Amounts",permalink:"/javascript/javascriptprocessingpayments"},next:{title:"Handpoint Sandbox",permalink:"/javascript/javascriptsandbox"}},p={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint. "))),(0,r.kt)("p",null,"The following example shows how you can integrate your web application with the Handpoint javascript SDK to perform a sale transaction in four easy steps:"),(0,r.kt)("p",null,"1) Download the ",(0,r.kt)("a",{parentName:"p",href:"/javascript/javascriptintroduction#javascriptIntro"},"handpoint.js")," SDK."),(0,r.kt)("p",null,"2) In the same directory, copy both handpoint.js and the code below in an html file."),(0,r.kt)("p",null,"3) In the code below, replace the variable apiKey with your test api key and replace the variable deviceName with the concatenation of your terminal serial number and model, for example 0821032395-PAXA920. If your payment terminal shows the debug watermark on the screen when it is on, then keep the variable environmentIsDevelopment to true otherwise change it to false. "),(0,r.kt)("p",null,"4)Open the html file in the browser and see the test transaction immediately."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SIMPLE, FAST, and EASY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!doctype html>\n<html>\n\n<head>\n  <title>Handpoint SDK Trial Integration</title>\n  <script src=\"handpoint.js\"><\/script>\n</head>\n\n<body>\n  <script>\n      var hp = new Handpoint()\n      //************* Test configuration *************//\n      var apiKey = 'YourApiKey';\n      var deviceName = '082245-Device';\n      var environmentIsDevelopment = true;\n      //*********************************************//\n      hp.init(apiKey, environmentIsDevelopment, (pendingEoT) => {\n        console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT));\n      }).then(\n        response1 => {\n          console.log('Successful initialization')\n          //document.writeln('Successful initialization<br />')\n          hp.connect(deviceName).then(\n            response2 => {\n              console.log('Successful Connection to device [' + deviceName + ']');\n              //document.writeln('Successful Connection to device [' + deviceName + ']<br />')\n              console.log('Executing sale');\n              //document.writeln('Executing sale<br />')\n              hp.sale('10', 'EUR').then(\n                response3 => {\n                  console.log('Successful sale');\n                  //document.writeln('Successful sale<br />');\n                  hp.disconnect(deviceName).then(\n                    response3 => {\n                      console.log('Successful disconnection from device [' + deviceName + ']')\n                      //document.writeln('Successful disconnection from device [' + deviceName + ']<br />')\n                    }\n                  ).catch(\n                    error => console.log('Disconnection from device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n                  );\n                }\n              ).catch(\n                error => console.log('Sale Failed -> ' + JSON.stringify(error))\n              );\n            }\n          ).catch(\n            error => console.log('Connection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n          );\n        }\n      ).catch(\n        error => console.log('Initialization Failed -> ' + JSON.stringify(error))\n      );\n  <\/script>\n</body>\n\n</html>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Maintain the connection with the terminal at all times:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"To be able to recover a transaction result through the callback passed in the ",(0,r.kt)("a",{parentName:"li",href:"/javascript/javascriptterminalmanagement#1"},(0,r.kt)("em",{parentName:"a"},"init"))," method, the point of sale and the terminal ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction."),(0,r.kt)("li",{parentName:"ul"},"Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue.")),(0,r.kt)("p",{parentName:"div"},"How Transaction Recovery Works:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The terminal has a transaction recovery loop to automatically send back the pending ",(0,r.kt)("a",{parentName:"li",href:"/javascript/javascriptobjects#18"},(0,r.kt)("em",{parentName:"a"},"Transaction Result"))," to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used.")))))}u.isMDXComponent=!0}}]);