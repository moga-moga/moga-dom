import { MogaDivDom } from "./dom/div"
import { MogaSpanDom } from "./dom/span"
import { MogaUlDom } from "./dom/ul"
import { MogaLiDom } from "./dom/li"
import { MogaTableDom } from "./dom/table"
import { MogaTdDom } from "./dom/td"
import { MogaThDom } from "./dom/th"
import { MogaTrDom } from "./dom/tr"
import { MogaIDom } from "./dom/i"
import { MogaTextDom } from "./dom/text"
import { MogaButtonDom } from "./dom/button"
import { MogaSelectDom } from "./dom/select"
import { MogaOptionDom } from "./dom/option"
import { MogaCheckboxDom } from "./dom/checkbox"

const getDivDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaDivDom(classes, id)).getDom()
}
const getSpanDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaSpanDom(classes, id)).getDom()
}
const getUlDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaUlDom(classes, id)).getDom()
}
const getLiDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaLiDom(classes, id)).getDom()
}

const getTableDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaTableDom(classes, id)).getDom()
}
const getTdDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaTdDom(classes, id)).getDom()
}
const getThDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaThDom(classes, id)).getDom()
}
const getTrDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaTrDom(classes, id)).getDom()
}
const getIDom = (classes = undefined, id = undefined): JQuery => {
    return (new MogaIDom(classes, id)).getDom()
}

const getTextDom = (value = undefined, classes = undefined, id = undefined, name = undefined): JQuery => {
    return (new MogaTextDom(value, classes, id, name)).getDom()
}
const getButtonDom = (value = undefined, classes = undefined, id = undefined, name = undefined): JQuery => {
    return (new MogaButtonDom(value, classes, id, name)).getDom()
}

const getSelectDom = (classes = undefined, id = undefined, name = undefined): JQuery => {
    return (new MogaSelectDom(classes, id, name)).getDom()
}

const getOptionDom = (value = undefined, classes = undefined, id = undefined): JQuery => {
    return (new MogaOptionDom(value, classes, id)).getDom()
}

const getCheckboxDom = (checked = false, classes = undefined, id = undefined): JQuery => {
    return (new MogaCheckboxDom(checked, classes, id)).getDom()
}


export {
    getDivDom, getSpanDom, getUlDom, getLiDom,
    getTableDom, getTdDom, getThDom, getTrDom, getIDom,
    getTextDom, getButtonDom, getSelectDom, getOptionDom,
    getCheckboxDom
}