import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaIDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("i", { classes: classes, id: id })
        super(mogaSelector)
    }

}