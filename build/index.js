!function(){"use strict";var e,t={503:function(){var e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"boilerplate/bootstrap","version":"0.1.0","title":"Bootstrap Block","category":"boilerplate","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"attributes":{"content":{"type":"string","default":"Hello World!"},"color":{"type":"string","default":"#00ff00"}},"textdomain":"boilerplate"}'),o=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components;const{__:__}=wp.i18n;var a=[{name:__("Black","boilerplate"),color:"#000000"},{name:__("White","boilerplate"),color:"#ffffff"},{name:__("Red","boilerplate"),color:"#ff0000"},{name:__("Green","boilerplate"),color:"#00ff00"},{name:__("Blue","boilerplate"),color:"#0000ff"},{name:__("Yellow","boilerplate"),color:"#ffff00"}];const{Fragment:i}=wp.element;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:c}=e;const{content:s,color:p}=t;return(0,o.createElement)(i,null,(0,o.createElement)(n.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,r.__)("Settings","boilerplate"),initialOpen:!0},(0,o.createElement)("p",{className:"custom__editor__label"},(0,r.__)("Text Color","boilerplate")),(0,o.createElement)(l.ColorPalette,{colors:a,value:p,onChange:e=>c({color:e})}))),(0,o.createElement)("div",(0,n.useBlockProps)(),(0,o.createElement)(n.RichText,{tagName:"h4",value:s,onChange:e=>c({content:e}),style:{color:p}})))},save:function(e){let{attributes:t}=e;const{content:r,color:l}=t;return(0,o.createElement)("div",n.useBlockProps.save(),(0,o.createElement)(n.RichText.Content,{tagName:"h4",value:r,style:{color:l}}))}});var c=JSON.parse('{"apiVersion":2,"name":"boilerplate/test","version":"0.1.0","title":"Test Block","category":"boilerplate","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"attributes":{"content":{"type":"string","default":"Hello World!"},"color":{"type":"string","default":"#00ff00"}},"textdomain":"boilerplate"}');const{Fragment:s}=wp.element;(0,e.registerBlockType)(c,{edit:function(e){let{attributes:t,setAttributes:i}=e;const{content:c,color:p}=t;return(0,o.createElement)(s,null,(0,o.createElement)(n.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,r.__)("Settings","boilerplate"),initialOpen:!0},(0,o.createElement)("p",{className:"custom__editor__label"},(0,r.__)("Text Color","boilerplate")),(0,o.createElement)(l.ColorPalette,{colors:a,value:p,onChange:e=>i({color:e})}))),(0,o.createElement)("div",(0,n.useBlockProps)(),(0,o.createElement)(n.RichText,{tagName:"h4",value:c,onChange:e=>i({content:e}),style:{color:p}})))},save:function(e){let{attributes:t}=e;const{content:r,color:l}=t;return(0,o.createElement)("div",n.useBlockProps.save(),(0,o.createElement)(n.RichText.Content,{tagName:"h4",value:r,style:{color:l}}))}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,o,n,l){if(!o){var a=1/0;for(p=0;p<e.length;p++){o=e[p][0],n=e[p][1],l=e[p][2];for(var i=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,n,l]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,l,a=o[0],i=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var p=c(r)}for(t&&t(o);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(p)},o=self.webpackChunkgutenberg_boilerplate=self.webpackChunkgutenberg_boilerplate||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=r.O(void 0,[431],(function(){return r(503)}));n=r.O(n)}();