import {Component, Input} from "@angular/core";
import {Dialog,DialogMethod} from './dialog';

@Component({
    selector: "pop-dialog",
    templateUrl: './dialog.html',
    styleUrls:['./dialog.css']
})
export class DialogComponent implements DialogMethod{
    @Input() options:Dialog;
    constructor(){
        this.options = null;
    }
    confirmDialog(){
        this.options.callback && this.options.callback();
        this.options = null;
    }
    hintDialog() {
        this.options = null;
    }
}
