"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var div_1 = require("./dom/div");
var span_1 = require("./dom/span");
var ul_1 = require("./dom/ul");
var li_1 = require("./dom/li");
var text_1 = require("./dom/text");
var button_1 = require("./dom/button");
var getDivDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new div_1.MogaDivDom(classes, id)).getDom();
};
exports.getDivDom = getDivDom;
var getSpanDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new span_1.MogaSpanDom(classes, id)).getDom();
};
exports.getSpanDom = getSpanDom;
var getUlDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new ul_1.MogaUlDom(classes, id)).getDom();
};
exports.getUlDom = getUlDom;
var getLiDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new li_1.MogaLiDom(classes, id)).getDom();
};
exports.getLiDom = getLiDom;
var getTextDom = function (value, classes, id, name) {
    if (value === void 0) { value = undefined; }
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    if (name === void 0) { name = undefined; }
    return (new text_1.MogaTextDom(value, classes, id, name)).getDom();
};
exports.getTextDom = getTextDom;
var getButtonDom = function (value, classes, id, name) {
    if (value === void 0) { value = undefined; }
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    if (name === void 0) { name = undefined; }
    return (new button_1.MogaButtonDom(value, classes, id, name)).getDom();
};
exports.getButtonDom = getButtonDom;
