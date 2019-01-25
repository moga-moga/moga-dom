"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MogaDom = /** @class */ (function () {
    function MogaDom(mogaSelector) {
        this.dom = $("<" + mogaSelector.element + "></" + mogaSelector.element + ">");
        if (mogaSelector.classes instanceof Array) {
            this.dom.attr('class', mogaSelector.classes.join(' '));
        }
        if (mogaSelector.id !== undefined) {
            this.dom.attr('id', mogaSelector.id);
        }
        if (mogaSelector.id !== undefined) {
            this.dom.attr('id', mogaSelector.id);
        }
        if (mogaSelector.type !== undefined) {
            this.dom.attr('type', mogaSelector.type);
        }
        if (mogaSelector.value !== undefined) {
            this.dom.val(mogaSelector.value);
        }
        if (mogaSelector.name !== undefined) {
            this.dom.attr('name', mogaSelector.name);
        }
    }
    MogaDom.prototype.getDom = function () {
        return this.dom;
    };
    return MogaDom;
}());
exports.MogaDom = MogaDom;
