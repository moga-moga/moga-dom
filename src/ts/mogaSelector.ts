export class MogaSelector {

    element: string
    type: string
    classes: []
    id: string
    value: string
    name: string

    constructor(element: string, options: any) {
        this.element = element
        this.type = options.type || undefined
        this.classes = options.classes || undefined
        this.id = options.id || undefined
        this.value = options.value || undefined
        this.name = options.name || undefined
    }
}