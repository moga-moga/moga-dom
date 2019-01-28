import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaSelectDom extends MogaDom {

    constructor(classes = undefined, id = undefined, name = undefined) {
        const mogaSelector = new MogaSelector("select", {
            classes: classes,
            id: id,
            name: name
        })
        super(mogaSelector)
    }

}