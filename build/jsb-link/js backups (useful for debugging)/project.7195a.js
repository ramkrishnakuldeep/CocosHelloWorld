window.__require = function e(r, t, n) {
function o(i, u) {
if (!t[i]) {
if (!r[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!r[c]) {
var f = "function" == typeof __require && __require;
if (!u && f) return f(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var s = t[i] = {
exports: {}
};
r[i][0].call(s.exports, function(e) {
return o(r[i][1][e] || e);
}, s, s.exports, e, r, t, n);
}
return t[i].exports;
}
for (var l = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
HelloWorld: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {
this.label.string = this.text;
},
update: function(e) {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld" ]);