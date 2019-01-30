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
var MogaIDom = /** @class */ (function (_super) {
    __extends(MogaIDom, _super);
    function MogaIDom(classes, id) {
        if (classes === void 0) { classes = undefined; }
        if (id === void 0) { id = undefined; }
        var _this = this;
        var mogaSelector = new mogaSelector_1.MogaSelector("i", { classes: classes, id: id });
        _this = _super.call(this, mogaSelector) || this;
        return _this;
    }
    return MogaIDom;
}(dom_1.MogaDom));
exports.MogaIDom = MogaIDom;
