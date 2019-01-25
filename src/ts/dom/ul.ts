import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaUlDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("ul", { classes: classes, id: id })
        super(mogaSelector)
    }

}