(()=>{"use strict";var e,t={478:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.components,n=JSON.parse('{"UU":"masterblocks/copy-block"}');(0,t.registerBlockType)(n.UU,{icon:{src:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,e.createElement)("path",{d:"M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"}))},edit:function({attributes:t,setAttributes:n}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,r.__)("Extras")},(0,e.createElement)(a.PanelRow,null,(0,e.createElement)(a.TextareaControl,{label:(0,r.__)("JSON Data"),help:(0,r.__)("Enter your JSON data"),onChange:e=>{n({jsonData:e})},value:(0,r.__)(t.jsonData)})))),(0,e.createElement)("div",{...(0,o.useBlockProps)()},(0,e.createElement)("div",{className:"is-layout-flex"},(0,e.createElement)(o.RichText,{value:""!==t.buttonName?t.buttonName:"Click Me",className:"wp-element-button",placeholder:"Your CTA text",onChange:e=>{n({buttonName:e})}}))))}})}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,a,n)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,n]=e[u],c=!0,s=0;s<r.length;s++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(c=!1,n<l&&(l=n));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,a,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={829:0,33:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[l,c,s]=r,i=0;if(l.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var u=s(o)}for(t&&t(r);i<l.length;i++)n=l[i],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=globalThis.webpackChunkmasterblocks=globalThis.webpackChunkmasterblocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[33],(()=>o(478)));a=o.O(a)})();