function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=t.target.elements.amount.value;let r=Number(t.target.elements.delay.value);const o=Number(t.target.elements.step.value);if(r<0||o<0||n<0)e(i).Notify.warning("❗ Please enter a positive number");else{let e=1;for(let t=0;t<n;t++)l(e,r),r+=o,e+=1;t.target.reset()}function l(t,n){return new Promise(((e,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?e(`✅ Fulfilled promise ${t} in ${n}ms`):r(`❌ Rejected promise ${t} in ${n}ms`)}),n)})).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t)))}}));
//# sourceMappingURL=03-promises.39242904.js.map
