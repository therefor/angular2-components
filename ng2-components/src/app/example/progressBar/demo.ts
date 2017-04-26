/**
 *
 */
import { Component } from '@angular/core';

//上传进度条
import { ProgressBar, ProgressModel } from "../../class-src/index";

@Component({
    templateUrl:'./demo.html',
    selector: 'progress-demo',
    styleUrls:['./demo.css']
})
export class ProgressDemo {
    private progressError:ProgressModel={
        state:'error',
        progress:'100%'
    };
    private progressSuccess:ProgressModel={
        state:'success',
        progress:'100%'
    };
    private progressStateProgress:ProgressModel={
        state:'progress',
        progress:'50%'
    }
}
