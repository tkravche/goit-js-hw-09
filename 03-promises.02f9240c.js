!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=t.target.elements.amount.value,o=Number(t.target.elements.delay.value),r=Number(t.target.elements.step.value);if(o<0||r<0||n<0)e(i).Notify.warning("❗ Please enter a positive number");else{for(var a=1,u=0;u<n;u++)l(a,o).then((function(t){return e(i).Notify.success("✅ Fulfilled promise ".concat(t.position," in ").concat(t.delay,"ms"))})).catch((function(t){return e(i).Notify.failure("❌ Rejected promise ".concat(t.position," in ").concat(t.delay,"ms"))})),o+=r,a+=1;t.target.reset()}function l(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}}))}();
//# sourceMappingURL=03-promises.02f9240c.js.map