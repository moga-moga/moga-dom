"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var div_1 = require("./dom/div");
var span_1 = require("./dom/span");
var ul_1 = require("./dom/ul");
var li_1 = require("./dom/li");
var table_1 = require("./dom/table");
var td_1 = require("./dom/td");
var th_1 = require("./dom/th");
var tr_1 = require("./dom/tr");
var i_1 = require("./dom/i");
var text_1 = require("./dom/text");
var button_1 = require("./dom/button");
var select_1 = require("./dom/select");
var option_1 = require("./dom/option");
var checkbox_1 = require("./dom/checkbox");
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
var getTableDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new table_1.MogaTableDom(classes, id)).getDom();
};
exports.getTableDom = getTableDom;
var getTdDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new td_1.MogaTdDom(classes, id)).getDom();
};
exports.getTdDom = getTdDom;
var getThDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new th_1.MogaThDom(classes, id)).getDom();
};
exports.getThDom = getThDom;
var getTrDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new tr_1.MogaTrDom(classes, id)).getDom();
};
exports.getTrDom = getTrDom;
var getIDom = function (classes, id) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new i_1.MogaIDom(classes, id)).getDom();
};
exports.getIDom = getIDom;
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
var getSelectDom = function (classes, id, name) {
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    if (name === void 0) { name = undefined; }
    return (new select_1.MogaSelectDom(classes, id, name)).getDom();
};
exports.getSelectDom = getSelectDom;
var getOptionDom = function (value, classes, id) {
    if (value === void 0) { value = undefined; }
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new option_1.MogaOptionDom(value, classes, id)).getDom();
};
exports.getOptionDom = getOptionDom;
var getCheckboxDom = function (checked, classes, id) {
    if (checked === void 0) { checked = false; }
    if (classes === void 0) { classes = undefined; }
    if (id === void 0) { id = undefined; }
    return (new checkbox_1.MogaCheckboxDom(checked, classes, id)).getDom();
};
exports.getCheckboxDom = getCheckboxDom;
