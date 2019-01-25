import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaDivDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("div", { classes: classes, id: id })
        super(mogaSelector)
    }

}