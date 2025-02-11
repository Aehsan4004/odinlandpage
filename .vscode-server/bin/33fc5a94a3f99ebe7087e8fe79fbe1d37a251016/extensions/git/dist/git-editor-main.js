(()=>{"use strict";var e={7745:function(e,t,r){var n,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||(n=function(e){return n=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},n(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=n(e),s=0;s<r.length;s++)"default"!==r[s]&&o(t,e,r[s]);return i(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.IPCClient=void 0;const a=s(r(8611));t.IPCClient=class{constructor(e){this.handlerName=e;const t=process.env.VSCODE_GIT_IPC_HANDLE;if(!t)throw new Error("Missing VSCODE_GIT_IPC_HANDLE");this.ipcHandlePath=t}call(e){const t={socketPath:this.ipcHandlePath,path:`/${this.handlerName}`,method:"POST"};return new Promise(((r,n)=>{const o=a.request(t,(e=>{if(200!==e.statusCode)return n(new Error(`Bad status code: ${e.statusCode}`));const t=[];e.on("data",(e=>t.push(e))),e.on("end",(()=>r(JSON.parse(Buffer.concat(t).toString("utf8")))))}));o.on("error",(e=>n(e))),o.write(JSON.stringify(e)),o.end()}))}}},8611:e=>{e.exports=require("http")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0});const t=r(7745);!function(e){const r=new t.IPCClient("git-editor"),n=e[e.length-1];r.call({commitMessagePath:n}).then((()=>{setTimeout((()=>process.exit(0)),0)})).catch((e=>function(e){console.error(e),process.exit(1)}(e)))}(process.argv)})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/33fc5a94a3f99ebe7087e8fe79fbe1d37a251016/extensions/git/dist/git-editor-main.js.map