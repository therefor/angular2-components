/**
 * dialog服务
 */
import { Injectable,EventEmitter } from '@angular/core';

import { Dialog } from './dialog';

/**
 * 依赖注入
 * service
 */
@Injectable()
export class DialogService {
    dialog$ = new EventEmitter();
    constructor() {}
    public showDialog(options:Dialog){
        this.dialog$.emit(options);
    }
}
