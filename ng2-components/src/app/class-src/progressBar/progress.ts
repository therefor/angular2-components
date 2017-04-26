/**
 *
 */

import { Component,Input } from '@angular/core';
import { ProgressModel} from './progress.model';

@Component({
    templateUrl:'./progress.html',
    selector: 'progress-bar'
})
export class ProgressBar {
    @Input() progressState:ProgressModel;
}
