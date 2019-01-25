import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaSpanDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("span", { classes: classes, id: id })
        super(mogaSelector)
    }

}