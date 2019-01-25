import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaButtonDom extends MogaDom {

    constructor(value = undefined, classes = undefined, id = undefined, name = undefined) {
        const mogaSelector = new MogaSelector("input", {
            type: "button",
            value: value,
            classes: classes,
            id: id,
            name: name
        })
        super(mogaSelector)
    }

}