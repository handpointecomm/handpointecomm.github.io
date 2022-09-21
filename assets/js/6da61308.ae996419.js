"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1054],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,id:"iosinstallation"},p="Installation",u={unversionedId:"iosinstallation",id:"version-iOS SDK 4.0.0/iosinstallation",title:"Installation",description:"CocoaPods",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.0/iosinstallation.md",sourceDirName:".",slug:"/iosinstallation",permalink:"/ios/iOS SDK 4.0.0/iosinstallation",tags:[],version:"iOS SDK 4.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"iosinstallation"},sidebar:"version-iOS SDK 4.0.0/tutorialSidebar",previous:{title:"Introduction",permalink:"/ios/iOS SDK 4.0.0/iosintroduction"},next:{title:"Migration from 3.X",permalink:"/ios/iOS SDK 4.0.0/iosmigration"}},c={},d=[{value:"CocoaPods",id:"cocoapods",level:2},{value:"Carthage",id:"carthage",level:2},{value:"Manually",id:"manually",level:2},{value:"Prebuilt static library",id:"prebuilt-static-library",level:3},{value:"Building the project yourself",id:"building-the-project-yourself",level:3},{value:"Framework",id:"framework",level:3},{value:"Static Library",id:"static-library",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"cocoapods"},"CocoaPods"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"CocoaPods")," is a dependency manager for Cocoa projects. You can install it with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ gem install cocoapods\n")),(0,o.kt)("p",null,"If you don't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Podfile")," yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pod init\n")),(0,o.kt)("p",null,"To integrate HandpointSDK into your Xcode project using CocoaPods, specify it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source 'https://github.com/CocoaPods/Specs.git'\nplatform :ios, '8.0'\nuse_frameworks!\n\ntarget 'your_target' do\n    pod 'HandpointSDK', '~> 3.2.3'\nend\n")),(0,o.kt)("p",null,"Then, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pod install\n")),(0,o.kt)("h2",{id:"carthage"},"Carthage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage"},"Carthage")," is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks."),(0,o.kt)("p",null,"You can install Carthage with ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ brew update\n$ brew install carthage\n")),(0,o.kt)("p",null,"To integrate HandpointSDK into your Xcode project using Carthage, specify it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Cartfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'github "handpoint/HandpointSDK-iOS"\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"carthage update")," to build the framework and drag the built ",(0,o.kt)("inlineCode",{parentName:"p"},"HandpointSDK.framework")," into your Xcode project."),(0,o.kt)("h2",{id:"manually"},"Manually"),(0,o.kt)("p",null,"If you'd rather handle the dependency manually there are three approaches to include ",(0,o.kt)("inlineCode",{parentName:"p"},"HandpointSDK")," in your project:"),(0,o.kt)("h3",{id:"prebuilt-static-library"},"Prebuilt static library"),(0,o.kt)("p",null,"Download the latest pre-built static library from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/handpoint/HandpointSDK-iOS"},"Handpoint's developer portal")," and refer to the documentation there for the installation steps."),(0,o.kt)("h3",{id:"building-the-project-yourself"},"Building the project yourself"),(0,o.kt)("p",null,"Download the latest version from the master branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/handpoint/HandpointSDK-iOS.git\n")),(0,o.kt)("p",null,"Alternatively you can add it as a git ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-submodule"},"submodule"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git submodule add https://github.com/handpoint/HandpointSDK-iOS.git\n")),(0,o.kt)("h3",{id:"framework"},"Framework"),(0,o.kt)("p",null,"You'll find the dynamic framework project called ",(0,o.kt)("inlineCode",{parentName:"p"},"HandpointSDK.xcodeproj")," at the root of the repo."),(0,o.kt)("p",null,"Static Library\nYou'll find the static library project called ",(0,o.kt)("inlineCode",{parentName:"p"},"headstart.xcodeproj")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Library")," folder."),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," discourage you from building this project yourself."),(0,o.kt)("p",null,"This project contains several targets, you need to build the aggregated target ",(0,o.kt)("inlineCode",{parentName:"p"},"device-simulator Release")),(0,o.kt)("p",null,"This target produces a .zip file in the same directory as the ",(0,o.kt)("inlineCode",{parentName:"p"},"headstart.xcodeproj")," file containing both the library and the simulator library."),(0,o.kt)("h3",{id:"static-library"},"Static Library"),(0,o.kt)("p",null,"You'll find the static library project called ",(0,o.kt)("inlineCode",{parentName:"p"},"headstart.xcodeproj")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Library")," folder."),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," discourage you from building this project yourself."),(0,o.kt)("p",null,"This project contains several targets, you need to build the aggregated target ",(0,o.kt)("inlineCode",{parentName:"p"},"device-simulator Release")),(0,o.kt)("p",null,"This target produces a .zip file in the same directory as the ",(0,o.kt)("inlineCode",{parentName:"p"},"headstart.xcodeproj")," file containing both the library and the simulator library."))}m.isMDXComponent=!0}}]);