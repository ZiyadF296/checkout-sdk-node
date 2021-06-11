(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"Highlight",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(8),o=(r(0),r(98)),a={id:"customers",title:"Customers"},s={unversionedId:"customers",id:"customers",isDocsHomePage:!1,title:"Customers",description:"<span",source:"@site/docs/customers.md",slug:"/customers",permalink:"/checkout-sdk-node/customers",version:"current",sidebar:"someSidebar",previous:{title:"Reconciliation",permalink:"/checkout-sdk-node/reconciliation"},next:{title:"Hosted Payments",permalink:"/checkout-sdk-node/hosted-payments"}},u=[{value:"Create",id:"create",children:[]},{value:"Get customer",id:"get-customer",children:[]},{value:"Update a customer",id:"update-a-customer",children:[]},{value:"Delete a customer",id:"delete-a-customer",children:[]}],i=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{color:r,padding:"0.2rem"}},t)},l={toc:u,Highlight:i};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(o.b)("a",{parentName:"p",href:"https://api-reference.checkout.com/#tag/Customers"},"here"),"."),Object(o.b)("h2",{id:"create"},"Create"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const customerResponse = await cko.customers.create({\n    email: 'JohnTest@test.com',\n    name: 'John Test',\n    phone: {\n        country_code: '+1',\n        number: '4155552671',\n    },\n    metadata: {\n        coupon_code: 'NY2018',\n        partner_id: 123989,\n    },\n});\n")),Object(o.b)("h2",{id:"get-customer"},"Get customer"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const customerResponse = await cko.customers.get('cus_2tvaccfvs3lulevzg42vgyvtdq');\n")),Object(o.b)("h2",{id:"update-a-customer"},"Update a customer"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const customerResponse = await cko.customers.update('cus_2tvaccfvs3lulevzg42vgyvtdq', {\n    name: 'James Bond',\n});\n")),Object(o.b)("h2",{id:"delete-a-customer"},"Delete a customer"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const customerResponse = await cko.customers.delete('cus_2tvaccfvs3lulevzg42vgyvtdq');\n")))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return r?c.a.createElement(b,s(s({ref:t},i),{},{components:r})):c.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);