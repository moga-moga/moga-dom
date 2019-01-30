import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaTdDom extends MogaDom {

    constructor(classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("td", { classes: classes, id: id })
        super(mogaSelector)
    }

}