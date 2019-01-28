import { MogaDom } from "./dom";
import { MogaSelector } from "../mogaSelector";

export class MogaOptionDom extends MogaDom {

    constructor(value = undefined, classes = undefined, id = undefined) {
        const mogaSelector = new MogaSelector("option", {
            value: value,
            classes: classes,
            id: id,
        })
        super(mogaSelector)
    }

}