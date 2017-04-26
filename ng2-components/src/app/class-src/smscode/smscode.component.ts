import { Component, Input, Output, EventEmitter,OnDestroy  } from '@angular/core';

@Component({
    selector: 'sms-code',
    templateUrl: './smscode.component.html'
})

export class SMSCode implements OnDestroy {
    @Output() sendSMSCode = new EventEmitter();
    @Input() sendCodeText: string;
    @Input() counterInit: number; // 倒计时（秒）
    btnText: string;
    counter: number;
    value: string;
    timer: any= null;
    placeholdertext: string = "请输入手机号码";

    sendCode() {
        this.counter = this.counterInit;
        this.timer = setInterval(() => {
            --this.counter;
            if(this.counter <= 0) {
                clearInterval(this.timer);
                this.btnText = this.sendCodeText;
                this.timer = null;
                this.placeholdertext = "请输入手机号码"
            } else {
                this.btnText = this.counter + 'S';
                this.placeholdertext = "请输入验证码"
            }
        }, 1000);
        this.sendSMSCode.emit(this.counter);
        this.value = "";
    }
    ngOnDestroy() {
        if(this.timer) {
            clearInterval(this.timer);
        }
    }
    ngOnInit(){
      this.btnText = this.sendCodeText;
      this.counter = this.counterInit;
    }
}
