import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaTextDom extends MogaDom {

    constructor(value = undefined, classes = undefined, id = undefined, name = undefined) {
        const mogaSelector = new MogaSelector("input", {
            type: "text",
            value: value,
            classes: classes,
            id: id,
            name: name
        })
        super(mogaSelector)
    }

}