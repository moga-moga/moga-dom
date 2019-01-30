import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaTrDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("tr", { classes: classes, id: id })
        super(mogaSelector)
    }

}