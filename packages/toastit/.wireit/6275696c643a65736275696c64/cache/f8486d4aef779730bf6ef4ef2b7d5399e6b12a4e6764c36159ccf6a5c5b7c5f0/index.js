var dt=function(i,t){return dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},dt(i,t)};function wt(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");dt(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var D=function(){return D=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},D.apply(this,arguments)};function f(i,t,e,r){var n=arguments.length,s=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(n<3?o(s):n>3?o(t,e,s):o(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}var Ct=i=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(i,t):((e,r)=>{let{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(o){customElements.define(e,o)}}})(i,t);var ne=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function E(i){return(t,e)=>e!==void 0?((r,n,s)=>{n.constructor.createProperty(s,r)})(i,t,e):ne(i,t)}var S=({finisher:i,descriptor:t})=>(e,r)=>{var n;if(r===void 0){let s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,o=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return i!=null&&(o.finisher=function(l){i(l,s)}),o}{let s=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i?.(s,r)}};function ut(i,t){return S({descriptor:e=>{let r={get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){let n=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var s,o;return this[n]===void 0&&(this[n]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&o!==void 0?o:null),this[n]}}return r}})}var pt,Re=((pt=window.HTMLSlotElement)===null||pt===void 0?void 0:pt.prototype.assignedElements)!=null?(i,t)=>i.assignedElements(t):(i,t)=>i.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var K=window,W=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Tt=new WeakMap,L=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(W&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Tt.set(e,t))}return t}toString(){return this.cssText}},Ot=i=>new L(typeof i=="string"?i:i+"",void 0,mt),ht=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new L(e,i,mt)},ft=(i,t)=>{W?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),n=K.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)})},J=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ot(e)})(i):i;var _t,Q=window,Nt=Q.trustedTypes,se=Nt?Nt.emptyScript:"",Pt=Q.reactiveElementPolyfillSupport,vt={toAttribute(i,t){switch(t){case Boolean:i=i?se:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Mt=(i,t)=>t!==i&&(t==t||i==i),bt={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:Mt},y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let n=this._$Ep(r,e);n!==void 0&&(this._$Ev.set(n,r),t.push(n))}),t}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){let s=this[t];this[e]=n,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||bt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(J(n))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ft(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=bt){var n;let s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){let o=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:vt).toAttribute(e,r.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var r;let n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){let o=n.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:vt;this._$El=s,this[s]=l.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},Pt?.({ReactiveElement:y}),((_t=Q.reactiveElementVersions)!==null&&_t!==void 0?_t:Q.reactiveElementVersions=[]).push("1.6.1");var yt,X=window,I=X.trustedTypes,It=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,Y="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,At="?"+g,oe=`<${At}>`,C=document,j=()=>C.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",Ft=Array.isArray,Bt=i=>Ft(i)||typeof i?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Dt=/>/g,k=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Ut=/"/g,zt=/^(?:script|style|textarea|title)$/i,Vt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),R=Vt(1),er=Vt(2),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),jt=new WeakMap,w=C.createTreeWalker(C,129,null,!1),qt=(i,t)=>{let e=i.length-1,r=[],n,s=t===2?"<svg>":"",o=U;for(let a=0;a<e;a++){let c=i[a],v,d,u=-1,h=0;for(;h<c.length&&(o.lastIndex=h,d=o.exec(c),d!==null);)h=o.lastIndex,o===U?d[1]==="!--"?o=Rt:d[1]!==void 0?o=Dt:d[2]!==void 0?(zt.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=k):d[3]!==void 0&&(o=k):o===k?d[0]===">"?(o=n??U,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,v=d[1],o=d[3]===void 0?k:d[3]==='"'?Ut:Lt):o===Ut||o===Lt?o=k:o===Rt||o===Dt?o=U:(o=k,n=void 0);let q=o===k&&i[a+1].startsWith("/>")?" ":"";s+=o===U?c+oe:u>=0?(r.push(v),c.slice(0,u)+Y+c.slice(u)+g+q):c+g+(u===-2?(r.push(void 0),a):q)}let l=s+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[It!==void 0?It.createHTML(l):l,r]},T=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0,l=t.length-1,a=this.parts,[c,v]=qt(t,e);if(this.el=T.createElement(c,r),w.currentNode=this.el.content,e===2){let d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(n=w.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let d=[];for(let u of n.getAttributeNames())if(u.endsWith(Y)||u.startsWith(g)){let h=v[o++];if(d.push(u),h!==void 0){let q=n.getAttribute(h.toLowerCase()+Y).split(g),G=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:G[2],strings:q,ctor:G[1]==="."?tt:G[1]==="?"?et:G[1]==="@"?rt:N})}else a.push({type:6,index:s})}for(let u of d)n.removeAttribute(u)}if(zt.test(n.tagName)){let d=n.textContent.split(g),u=d.length-1;if(u>0){n.textContent=I?I.emptyScript:"";for(let h=0;h<u;h++)n.append(d[h],j()),w.nextNode(),a.push({type:2,index:++s});n.append(d[u],j())}}}else if(n.nodeType===8)if(n.data===At)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:s}),d+=g.length-1}s++}}static createElement(t,e){let r=C.createElement("template");return r.innerHTML=t,r}};function O(i,t,e=i,r){var n,s,o,l;if(t===A)return t;let a=r!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[r]:e._$Cl,c=H(t)?void 0:t._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,e,r)),r!==void 0?((o=(l=e)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=O(i,a._$AS(i,t.values),a,r)),t}var Z=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:r},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:C).importNode(r,!0);w.currentNode=s;let o=w.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let v;c.type===2?v=new $(o,o.nextSibling,this,t):c.type===1?v=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(v=new it(o,this,t)),this._$AV.push(v),c=n[++a]}l!==c?.index&&(o=w.nextNode(),l++)}return w.currentNode=C,s}v(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},$=class{constructor(t,e,r,n){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Bt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;let{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=T.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(r);else{let o=new Z(s,this),l=o.u(this.options);o.v(r),this.$(l),this._$AH=o}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new T(t)),e}T(t){Ft(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let s of t)n===e.length?e.push(r=new $(this.k(j()),this.k(j()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},N=class{constructor(t,e,r,n,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){let s=this.strings,o=!1;if(s===void 0)t=O(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{let l=t,a,c;for(t=s[0],a=0;a<s.length-1;a++)c=O(this,l[r+a],e,a),c===A&&(c=this._$AH[a]),o||(o=!H(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},ae=I?I.emptyScript:"",et=class extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ae):this.element.removeAttribute(this.name)}},rt=class extends N{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){var r;if((t=(r=O(this,t,e,0))!==null&&r!==void 0?r:p)===A)return;let n=this._$AH,s=t===p&&n!==p||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==p&&(n===p||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}},Gt={O:Y,P:g,A:At,C:1,M:qt,L:Z,D:Bt,R:O,I:$,V:N,H:et,N:rt,U:tt,F:it},Ht=X.litHtmlPolyfillSupport;Ht?.(T,$),((yt=X.litHtmlVersions)!==null&&yt!==void 0?yt:X.litHtmlVersions=[]).push("2.7.4");var nt=(i,t,e)=>{var r,n;let s=(r=e?.renderBefore)!==null&&r!==void 0?r:t,o=s._$litPart$;if(o===void 0){let l=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new $(t.insertBefore(j(),l),l,void 0,e??{})}return o._$AI(i),o};var Et,$t;var x=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}};x.finalized=!0,x._$litElement$=!0,(Et=globalThis.litElementHydrateSupport)===null||Et===void 0||Et.call(globalThis,{LitElement:x});var Kt=globalThis.litElementPolyfillSupport;Kt?.({LitElement:x});(($t=globalThis.litElementVersions)!==null&&$t!==void 0?$t:globalThis.litElementVersions=[]).push("3.3.2");function xt(i){return{addClass:t=>{i.classList.add(t)},removeClass:t=>{i.classList.remove(t)},hasClass:t=>i.classList.contains(t)}}var ce=!1,Wt=()=>{},le={get passive(){return ce=!0,!1}};document.addEventListener("x",Wt,le);document.removeEventListener("x",Wt);var st=class extends x{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}};var ot=i=>(t,e)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){let r=t.constructor._observers;t.constructor._observers=new Map,r.forEach((n,s)=>t.constructor._observers.set(s,n))}}else{t.constructor._observers=new Map;let r=t.updated;t.updated=function(n){r.call(this,n),n.forEach((s,o)=>{let a=this.constructor._observers.get(o);a!==void 0&&a.call(this,this[o],s)})}}t.constructor._observers.set(e,i)};var Jt=function(){function i(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();var _={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},at={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},b={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};var Qt=_.OPENING,Xt=_.OPEN,Yt=_.CLOSING,de=at.REASON_ACTION,St=at.REASON_DISMISS,ue=function(i){wt(t,i);function t(e){var r=i.call(this,D(D({},t.defaultAdapter),e))||this;return r.opened=!1,r.animationFrame=0,r.animationTimer=0,r.autoDismissTimer=0,r.autoDismissTimeoutMs=b.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,r.closeOnEscape=!0,r}return Object.defineProperty(t,"cssClasses",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Qt),this.adapter.removeClass(Xt),this.adapter.removeClass(Yt)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Yt),this.adapter.addClass(Qt),this.adapter.announce(),this.runNextAnimationFrame(function(){e.adapter.addClass(Xt),e.animationTimer=setTimeout(function(){var r=e.getTimeoutMs();e.handleAnimationTimerEnd(),e.adapter.notifyOpened(),r!==b.INDETERMINATE&&(e.autoDismissTimer=setTimeout(function(){e.close(St)},r))},b.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(e){var r=this;e===void 0&&(e=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(e),this.adapter.addClass(_.CLOSING),this.adapter.removeClass(_.OPEN),this.adapter.removeClass(_.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){r.handleAnimationTimerEnd(),r.adapter.notifyClosed(e)},b.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(e){var r=b.MIN_AUTO_DISMISS_TIMEOUT_MS,n=b.MAX_AUTO_DISMISS_TIMEOUT_MS,s=b.INDETERMINATE;if(e===b.INDETERMINATE||e<=n&&e>=r)this.autoDismissTimeoutMs=e;else throw new Error(`
        timeoutMs must be an integer in the range `+r+"\u2013"+n+`
        (or `+s+" to disable), but got '"+e+"'")},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape=e},t.prototype.handleKeyDown=function(e){var r=e.key==="Escape"||e.keyCode===27;r&&this.getCloseOnEscape()&&this.close(St)},t.prototype.handleActionButtonClick=function(e){this.close(de)},t.prototype.handleActionIconClick=function(e){this.close(St)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(_.OPENING),this.adapter.removeClass(_.CLOSING)},t.prototype.runNextAnimationFrame=function(e){var r=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){r.animationFrame=0,clearTimeout(r.animationTimer),r.animationTimer=setTimeout(e,0)})},t}(Jt);var F=ue;var M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},B=i=>(...t)=>({_$litDirective$:i,values:t}),P=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Zt=B(class extends P{constructor(i){var t;if(super(i),i.type!==M.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in t)t[s]&&!(!((e=this.nt)===null||e===void 0)&&e.has(s))&&this.it.add(s);return this.render(t)}let n=i.element.classList;this.it.forEach(s=>{s in t||(n.remove(s),this.it.delete(s))});for(let s in t){let o=!!t[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(n.add(s),this.it.add(s)):(n.remove(s),this.it.delete(s)))}return A}});var{I:Mr}=Gt;var te=i=>i.strings===void 0;var z=(i,t)=>{var e,r;let n=i._$AN;if(n===void 0)return!1;for(let s of n)(r=(e=s)._$AO)===null||r===void 0||r.call(e,t,!1),z(s,t);return!0},ct=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},ee=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),he(t)}};function pe(i){this._$AN!==void 0?(ct(this),this._$AM=i,ee(this)):this._$AM=i}function me(i,t=!1,e=0){let r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)z(r[s],!1),ct(r[s]);else r!=null&&(z(r,!1),ct(r));else z(this,i)}var he=i=>{var t,e,r,n;i.type==M.CHILD&&((t=(r=i)._$AP)!==null&&t!==void 0||(r._$AP=me),(e=(n=i)._$AQ)!==null&&e!==void 0||(n._$AQ=pe))},lt=class extends P{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ee(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(z(this,t),ct(this))}setValue(t){if(te(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var{ARIA_LIVE_DELAY_MS:fe}=F.numbers,kt=class extends lt{constructor(t){if(super(t),this.labelEl=null,this.timerId=null,this.previousPart=null,t.type!==M.CHILD)throw new Error("AccessibleSnackbarLabel only supports child parts.")}update(t,[e,r]){var n;if(!r)return;if(this.labelEl===null){let l=document.createElement("div"),a=R`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;nt(a,l);let c=l.firstElementChild;return c.textContent=e,(n=t.endNode)===null||n===void 0||n.parentNode.insertBefore(c,t.endNode),this.labelEl=c,c}let s=this.labelEl;s.setAttribute("aria-live","off"),s.textContent="";let o=document.createElement("span");return o.style.display="inline-block",o.style.width="0",o.style.height="1px",o.textContent="\xA0",s.appendChild(o),s.setAttribute("data-mdc-snackbar-label-text",e),this.timerId!==null&&clearTimeout(this.timerId),this.timerId=window.setTimeout(()=>{this.timerId=null,s.setAttribute("aria-live","polite"),s.removeAttribute("data-mdc-snackbar-label-text"),s.textContent=e,this.setValue(this.labelEl)},fe),s}render(t,e){return e?R`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${t}</div>`:R``}},re=B(kt);var{OPENING_EVENT:_e,OPENED_EVENT:be,CLOSING_EVENT:ve,CLOSED_EVENT:ye}=F.strings,m=class extends st{constructor(){super(...arguments),this.mdcFoundationClass=F,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){let t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return R`
      <div class="mdc-snackbar ${Zt(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${re(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},xt(this.mdcRoot)),{announce:()=>{},notifyClosed:t=>{this.dispatchEvent(new CustomEvent(ye,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>{this.open=!1,this.dispatchEvent(new CustomEvent(ve,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(be,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(_e,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(t=""){this.reason=t,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}};f([ut(".mdc-snackbar")],m.prototype,"mdcRoot",void 0);f([ut(".mdc-snackbar__label")],m.prototype,"labelElement",void 0);f([E({type:Boolean,reflect:!0}),ot(function(i){this.mdcFoundation&&(i?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],m.prototype,"open",void 0);f([ot(function(i){this.mdcFoundation.setTimeoutMs(i)}),E({type:Number})],m.prototype,"timeoutMs",void 0);f([ot(function(i){this.mdcFoundation.setCloseOnEscape(i)}),E({type:Boolean})],m.prototype,"closeOnEscape",void 0);f([E({type:String})],m.prototype,"labelText",void 0);f([E({type:Boolean})],m.prototype,"stacked",void 0);f([E({type:Boolean})],m.prototype,"leading",void 0);var ie=ht`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action .mdc-button__ripple::before,.mdc-snackbar__action .mdc-button__ripple::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover .mdc-button__ripple::before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;var V=class extends m{};V.styles=[ie];V=f([Ct("mwc-snackbar")],V);function pi(i){return new Promise(async t=>{let e=new V;document.body.appendChild(e),await e.updateComplete,e.labelText=JSON.stringify(i);let r=()=>{document.body.removeChild(e),e.removeEventListener("closed",r),t(null)};e.addEventListener("closed",r),e.show()})}export{pi as toast};