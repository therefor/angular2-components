/**
 * uploader组件基于https://github.com/danialfarid/ng-file-upload/二次开发
 * 集成了progressBar
 * 目前仅仅在能够支持HTML5标准的浏览器中使用
 */
import {Component} from '@angular/core';
//import { Directive } from '@angular/core';
import { FileUploader,ProgressBar } from "../../class-src/index";

@Component({
    selector: 'upload-demo',
    templateUrl: './demo.html'
    //directives: [FILE_UPLOAD_DIRECTIVES,Directive,ProgressBar]
})
export class UploaderDemo {
    public uploader:FileUploader =
        new FileUploader({
            url: "http://localhost:3001/upload",
            isHTML5:true
        });
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
}
