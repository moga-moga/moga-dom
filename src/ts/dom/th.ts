import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaThDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("th", { classes: classes, id: id })
        super(mogaSelector)
    }

}