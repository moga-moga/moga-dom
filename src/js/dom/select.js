"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./dom");
var mogaSelector_1 = require("../mogaSelector");
var MogaSelectDom = /** @class */ (function (_super) {
    __extends(MogaSelectDom, _super);
    function MogaSelectDom(classes, id, name) {
        if (classes === void 0) { classes = undefined; }
        if (id === void 0) { id = undefined; }
        if (name === void 0) { name = undefined; }
        var _this = this;
        var mogaSelector = new mogaSelector_1.MogaSelector("select", {
            classes: classes,
            id: id,
            name: name
        });
        _this = _super.call(this, mogaSelector) || this;
        return _this;
    }
    return MogaSelectDom;
}(dom_1.MogaDom));
exports.MogaSelectDom = MogaSelectDom;
