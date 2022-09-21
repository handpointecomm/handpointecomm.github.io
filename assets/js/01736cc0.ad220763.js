"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[2096],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3104:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const l={sidebar_position:2},i="Transaction Types",o={unversionedId:"transactiontypes",id:"transactiontypes",title:"Transaction Types",description:"Financial Operations Types",source:"@site/docs/transactiontypes.md",sourceDirName:".",slug:"/transactiontypes",permalink:"/docs/transactiontypes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sample Code & Examples",permalink:"/docs/samplecode"},next:{title:"3D Secure & Strong Customer Authentication (SCA)",permalink:"/docs/3dsecure"}},d={},s=[{value:"Financial Operations Types",id:"financial-operations-types",level:2},{value:"E-Commerce (ECOM)",id:"ecommerce",level:3},{value:"Mail Order/Telephone Order (MOTO)",id:"moto",level:3},{value:"How do I choose between MOTO and ECOM?",id:"how-do-i-choose-between-moto-and-ecom",level:3},{value:"Financial Operations Actions",id:"financial-operations-actions",level:2},{value:"SALE",id:"sale",level:3},{value:"VERIFY",id:"verify",level:3},{value:"PREAUTH",id:"preauth",level:3},{value:"Transaction Request",id:"transactionRequest",level:3},{value:"Transaction Response",id:"transactionResponse",level:3}],u={toc:s};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-types"},"Transaction Types"),(0,r.kt)("h2",{id:"financial-operations-types"},"Financial Operations Types"),(0,r.kt)("p",null,"The Gateway supports card not present (CNP) types of transactions, made where the Cardholder does not or cannot physically present the card for your visual examination at the time that an order is placed and payment effected."),(0,r.kt)("p",null,"The type of transaction required is specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," request field when performing a new payment transaction."),(0,r.kt)("h3",{id:"ecommerce"},"E-Commerce (ECOM)"),(0,r.kt)("p",null,"E-commerce transactions are supported by the Gateway by using a transaction ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". They are designed for you to accept payments via a website, such as a shopping cart payment. E-commerce transactions in the EU region MUST use advance fraud detection, such as 3-D Secure V2."),(0,r.kt)("h3",{id:"moto"},"Mail Order/Telephone Order (MOTO)"),(0,r.kt)("p",null,"Mail Order/Telephone Order transactions are supported by the Gateway by using a transaction ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". They are designed for you to build your own virtual terminal system to enter remote order details. MOTO transactions cannot use 3-D Secure as the cardholder is not able to perform the challenge."),(0,r.kt)("p",null,"Your Acquirer may need to enable MOTO capabilities on your main acquiring account, or they provide a separate acquiring account which will be available through its own Gateway Merchant Account."),(0,r.kt)("h3",{id:"how-do-i-choose-between-moto-and-ecom"},"How do I choose between MOTO and ECOM?"),(0,r.kt)("p",null,"If you are building a website ",(0,r.kt)("strong",{parentName:"p"},"facing the cardholder"),", for example a webshop to sell clothes, attraction tickets, pizzas etc. you should use ECOM (1) as a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and if you are in the EU region, 3D-Secure must be used as well. If you are building a backend or a website ",(0,r.kt)("strong",{parentName:"p"},"for the merchant")," to be able to process card not present transactions, for example orders received over the phone, where the cardholder will dictate the card number to the merchant, then in this case you should use MOTO (2) as a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and the cardholder will be exempt from using 3D-Secure. MOTO (2) should also be used for merchant initiated refunds, for example if a customer calls and wants to get reimbursed for a product."),(0,r.kt)("h2",{id:"financial-operations-actions"},"Financial Operations Actions"),(0,r.kt)("p",null,"All requests must specify what action they require the Gateway to perform, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," request field."),(0,r.kt)("h3",{id:"sale"},"SALE"),(0,r.kt)("p",null,"This will create a new transaction and attempt to seek authorisation for a sale from the Acquirer. A successful authorisation will reserve the funds on the Cardholder\u2019s account until the transaction is settled."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"captureDelay")," field can be used to state whether the transaction should be authorised only and settled at a later date. **For more details on delayed capture, refer to the ",(0,r.kt)("a",{parentName:"p",href:"annexes#captureDelay"},"delayed capture guide"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"captureDelay")," is not used the transaction will be automatically settled at the end of the day."),(0,r.kt)("h3",{id:"verify"},"VERIFY"),(0,r.kt)("p",null,"This will create a new transaction and attempt to verify that the card account exists with the Acquirer. The transaction will result in no transfer of funds and no hold on any funds on the Cardholder\u2019s account. It cannot be captured and will not be settled. The transaction ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," must always be zero."),(0,r.kt)("p",null,"This transaction type is the preferred method for validating that the card account exists and is in good standing; however, it cannot be used to validate that it has sufficient funds."),(0,r.kt)("h3",{id:"preauth"},"PREAUTH"),(0,r.kt)("p",null,"This will create a new transaction and attempt to seek authorisation for a sale from the Acquirer. If authorisation is approved, then it is immediately voided (where possible) so that no funds are reserved on the Cardholder\u2019s account. The transaction will result in no transfer of funds. It cannot be captured and will not be settled."),(0,r.kt)("p",null,"This transaction type can be used to check whether funds are available and that the account is valid. However, due to the problem highlighted below, it is recommended that Merchants use the VERIFY action when supported by their Acquirer."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If the transaction is to be completed then a new authorisation must be sought using the SALE action. If the PREAUTH authorisation could not be successfully voided, then this will result in the funds\u2019 being authorised twice effectively putting two holds on the amount on the Cardholder\u2019s account and thus requiring twice the amount to be available in the Cardholder\u2019s account. It is therefore recommended only to PREAUTH small amounts, such as \xa31.00 to check mainly account validity.")),(0,r.kt)("h3",{id:"transactionRequest"},"Transaction Request"),(0,r.kt)("p",null,"For the Hosted payment page integration, only a few fields are required (see table below). However, you can customise the appearance of the Hosted Payment Page by sending additional fields in the request."),(0,r.kt)("p",null,"You can control which payment methods are displayed and the default or initial value to display in the input fields."),(0,r.kt)("p",null,"You can also state which fields you require to be mandatory, in which case the payment form may not be submitted until the cardholder has completed all the mandatory fields. On the standard modal Hosted Payment Page, the mandatory requirement can also control whether the field needs to be displayed. A value of \u2018Y\u2019 or \u2018N\u2019 means the field must be displayed, \u2018Y\u2019 indicates that a value must be supplied, while \u2018N\u2019 indicates the value can be blank. Omitting the request field means that the field need not be displayed if the form can provide a better user experience without it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Your Gateway Merchant Account ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantPwd"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Any password used for an added security layer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signature"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Hash used to sign this request. See ",(0,r.kt)("a",{parentName:"td",href:"samplecode#signatureCalculation"},"signature calculation")," for information on how to create the hash. A signature maybe mandatory on some Merchant Accounts and requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Possible values are: PREAUTH, VERIFY, SALE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of the transaction. Either major currency units by providing a value that includes a single decimal point such as \u201910.99\u2019; or in minor currency units by providing a value that contains no decimal points such as \u20181099\u2019. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of transaction. Possible values are: ",(0,r.kt)("br",null)," 1 \u2013 ",(0,r.kt)("a",{parentName:"td",href:"#ecommerce"},"E-commerce (ECOM)"),(0,r.kt)("br",null)," 2 -  ",(0,r.kt)("a",{parentName:"td",href:"#moto"},"Mail Order/Telephone Order (MOTO)"),(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countryCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant's location. Either the ISO-3166-1 2-letter, 3-letter or 3-digit code. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currencyCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction currency. Either the ISO-4217 3-letter or 3-digit code.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectURL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"badge badge--primary"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to which the hosted form will redirect the Customer\u2019s browser after the transaction has been completed. The URL must be fully qualified and include at least the scheme and host components. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"overview#redirectUrl"},"redirect URL")," docs for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paymentMethod"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"The payment method required. For card payments either omit this field or use the value ",(0,r.kt)("inlineCode",{parentName:"td"},"card"),". It can also request the Hosted Payment Page to invoke an alternative payment method on display without the need for the Customer to select it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowedPaymentMethods"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of paymentMethods supported by the Merchant to show on Hosted Payment Page where supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"The primary account number (PAN) as printed on the front of the payment card. Digits and spaces only. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional"),":",(0,r.kt)("br",null)," - if provided it will be used to initialise the corresponding hosted payment page input field.",(0,r.kt)("br",null)," - This should only be used by Merchants who are storing Card numbers as per PCI DSS requirements",(0,r.kt)("br",null)," - if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardExpiryMonth"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment card\u2019s expiry month from 1 to 12. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional"),":",(0,r.kt)("br",null),"- if provided it will be used to initialise the corresponding hosted payment page input field.",(0,r.kt)("br",null)," - if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardExpiryYear"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment card\u2019s expiry year from 00 to 99. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional"),":",(0,r.kt)("br",null),"- if provided it will be used to initialise the corresponding hosted payment page input field.",(0,r.kt)("br",null),"- if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardExpiryDate"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment card\u2019s expiry date in MMYY format as an alternative to sending a separate ",(0,r.kt)("inlineCode",{parentName:"td"},"cardExpiryMonth")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"cardExpiryYear"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Optional"),":",(0,r.kt)("br",null),"- if provided it will be used to initialise the corresponding hosted payment page input field.",(0,r.kt)("br",null),"- if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardCVV"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment card\u2019s security number. The 3-digit number printed on the signature strip. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Optional"),":",(0,r.kt)("br",null),"- if provided it will be used to initialise the corresponding hosted payment page input field.",(0,r.kt)("br",null),"- This should only be used for test purpose as Merchants are not allowed to store Card CVV numbers.",(0,r.kt)("br",null),"- if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionUnique"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"You can supply a unique identifier for this transaction. This is an added security feature to combat transaction spoofing.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderRef"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Free format text field to store order details, reference numbers, etc. for the Merchant\u2019s records.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Optional")," if an ",(0,r.kt)("inlineCode",{parentName:"td"},"xref")," is provided as the value will be taken from the cross-referenced transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderDate"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional date to record with the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"captureDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of days to wait between authorisation of a payment and subsequent settlement. refer to the ",(0,r.kt)("a",{parentName:"td",href:"annexes#captureDelay"},"delayed capture")," guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xref"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to a previous transaction. refer to ",(0,r.kt)("a",{parentName:"td",href:"credentialsonfile#paymentTokenisation"},"payment tokenisation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackURL"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"URL which will receive a copy of the transaction result by POST. The URL must be fully qualified and include at least the scheme and host components. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"overview#callbackUrl"},"callback URL")," docs for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerName"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s name field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s address field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerTown"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s town field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerCounty"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s county field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerPostcode"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s postcode field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerCountryCode"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s country field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerEmail"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s email field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerPhone"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s phone number field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiverDateOfBirth"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value for the Cardholder\u2019s date of birth field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardCVVMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Card security number field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerNameMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s name field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerFullNameMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s name field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerAddressMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s address field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerTownMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s town field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerCountyMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s county field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerPostcodeMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s postcode field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerCountryCodeMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s country field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerPostcodeMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s postcode field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerEmailMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s email field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerPhoneMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s phone field requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiverDateOfBirthMandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cardholder\u2019s date of birth requirements (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formAmountEditable"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables the payment amount to be edited by the consumer thus allowing the consumer to choose the amount they wish to pay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formResponsive"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Request the Hosted Payment Page adjust its layout according to the browser display size etc. (Y or N).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formAllowCancel"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Request the Hosted Payment Page show a cancel button to allow the payment to be cancelled resulting in a transaction responseCode of 65576 (REQUEST CANCELLED).")))),(0,r.kt)("h3",{id:"transactionResponse"},"Transaction Response"),(0,r.kt)("p",null,"The response will contain all the fields sent in the request (minus any ",(0,r.kt)("inlineCode",{parentName:"p"},"cardNumber")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cardCVV"),") plus the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Returned"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"A numeric code providing the specific outcome. Common values are:",(0,r.kt)("br",null),"  0 - Successful / authorised transaction. ",(0,r.kt)("br",null)," 1 - Card referred \u2013 Refer to card issuer.",(0,r.kt)("br",null),"  2 - Card referred \u2013 Special condition. ",(0,r.kt)("br",null)," 4 - Card declined \u2013 Keep card. ",(0,r.kt)("br",null)," 5 - Card declined.",(0,r.kt)("br",null),"  Check ",(0,r.kt)("inlineCode",{parentName:"td"},"responseMessage")," for more details of any error that occurred. Refer to ",(0,r.kt)("a",{parentName:"td",href:"annexes#responseCodes"},"Response Codes")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"A numeric code providing the outcome category. Possible values are:",(0,r.kt)("br",null)," 0 \u2013 Authorisation Approved / No reason to decline ",(0,r.kt)("br",null)," 1 \u2013 Authorisation Declined. ",(0,r.kt)("br",null)," 2 \u2013 Authorisation Error / Transaction malformed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Message received from the Acquiring bank, or any error message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionID"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique ID assigned by the Gateway.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xref"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"You may store the cross reference for repeat transactions. Refer to ",(0,r.kt)("a",{parentName:"td",href:"credentialsonfile#paymentTokenisation"},"payment tokenisation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"annexes#transactionStates"},"Transaction state"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Time the transaction was created or last modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionUnique"),(0,r.kt)("td",{parentName:"tr",align:null},"If supplied"),(0,r.kt)("td",{parentName:"tr",align:null},"Any value supplied in the initial request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorisationCode"),(0,r.kt)("td",{parentName:"tr",align:null},"On success"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorisation code received from Acquirer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"referralPhone"),(0,r.kt)("td",{parentName:"tr",align:null},"If provided"),(0,r.kt)("td",{parentName:"tr",align:null},"Telephone number supplied by Acquirer to phone for voice authorisation when provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountReceived"),(0,r.kt)("td",{parentName:"tr",align:null},"On success"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount the Acquirer authorised. This should always be the full ",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," requested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderRef"),(0,r.kt)("td",{parentName:"tr",align:null},"If supplied"),(0,r.kt)("td",{parentName:"tr",align:null},"Any value supplied in the initial request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardNumberMask"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Card number masked for Merchant storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardTypeCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the type of card used. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"annexes#cardIdentification"},"Card Identification")," guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardType"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the type of card used. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"annexes#cardIdentification"},"Card Identification")," guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardSchemeCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the Card Scheme used. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"annexes#cardIdentification"},"Card Identification")," guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the Card Scheme used. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"annexes#cardIdentification"},"Card Identification")," guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardIssuer"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Card Issuer name (when known).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardIssuerCountry"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Card issuing country\u2019s name (when known).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardIssuerCountryCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Always"),(0,r.kt)("td",{parentName:"tr",align:null},"Card issuing country\u2019s ISO-3166 2-letter code (when known).")))),(0,r.kt)("p",null,"Undocumented fields may be returned at the Gateways discretion but should not be relied upon.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"acquirerResponseXXXX")," fields are dependent on the Acquirer in use and are supplied for additional information only.\nThe response is also POSTed to any URL provided by optional ",(0,r.kt)("inlineCode",{parentName:"p"},"callbackURL"),"."))}p.isMDXComponent=!0}}]);