import { inject, bindable, computedFrom } from 'aurelia-framework';

export class DataForm {
    @bindable readOnly = false;
    @bindable data = {};
    @bindable error = {};

    constructor() {
    }

    @computedFrom("data._id")
    get isEdit() {
        return (this.data._id || '').toString() != '';
    }

    @computedFrom("data.minute", "data.second")
    get totalDuration() {
        this.data.duration = this.data.minute * 60 + this.data.second;
        return this.data.duration;
    }

    activate() {
    }

    attached() {
    }

} 
