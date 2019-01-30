import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaTableDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("table", { classes: classes, id: id })
        super(mogaSelector)
    }

}