import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaCheckboxDom extends MogaDom {

    constructor(checked = false, classes = undefined, id = undefined, name = undefined) {
        const mogaSelector = new MogaSelector("input", {
            type: "checkbox",
            checked: checked,
            classes: classes,
            id: id,
            name: name
        })
        super(mogaSelector)
    }

}