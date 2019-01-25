"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MogaSelector = /** @class */ (function () {
    function MogaSelector(element, options) {
        this.element = element;
        this.type = options.type || undefined;
        this.classes = options.classes || undefined;
        this.id = options.id || undefined;
        this.value = options.value || undefined;
        this.name = options.name || undefined;
    }
    return MogaSelector;
}());
exports.MogaSelector = MogaSelector;
