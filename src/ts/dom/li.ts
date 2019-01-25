import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaLiDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("li", { classes: classes, id: id })
        super(mogaSelector)
    }

}