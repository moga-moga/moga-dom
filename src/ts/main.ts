import { MogaDivDom } from "./dom/div";
import { MogaSpanDom } from "./dom/span";
import { MogaUlDom } from "./dom/ul";
import { MogaLiDom } from "./dom/li";
import { MogaTextDom } from "./dom/text";
import { MogaButtonDom } from "./dom/button";

const getDivDom = (classes = undefined, id = undefined) => {
    return (new MogaDivDom(classes, id)).getDom();
}
const getSpanDom = (classes = undefined, id = undefined) => {
    return (new MogaSpanDom(classes, id)).getDom();
}
const getUlDom = (classes = undefined, id = undefined) => {
    return (new MogaUlDom(classes, id)).getDom();
}
const getLiDom = (classes = undefined, id = undefined) => {
    return (new MogaLiDom(classes, id)).getDom();
}

const getTextDom = (value = undefined, classes = undefined, id = undefined, name = undefined) => {
    return (new MogaTextDom(value, classes, id, name)).getDom();
}
const getButtonDom = (value = undefined, classes = undefined, id = undefined, name = undefined) => {
    return (new MogaButtonDom(value, classes, id, name)).getDom();
}

export {
    getDivDom, getSpanDom, getUlDom, getLiDom,
    getTextDom, getButtonDom,
}