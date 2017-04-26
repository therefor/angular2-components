import { Component, ViewChild } from '@angular/core';
import { SMSCode } from '../../class-src/index'
import {NgForm} from '@angular/forms';

@Component({
    selector: 'sms-demo',
    template: `
        <form (ngSubmit)="check(myForm)" #myForm="ngForm">
            <sms-code (sendSMSCode)="send(timer.value)"
                [counterInit]="counter"
                [sendCodeText]="SMSsendCodeText"
                #timer>
            </sms-code>
            <br>
            <br>
            <button type="submit" class="ui button">提交</button>
        </form>
    `
})

// Template Driven Example
export class SMSCodeDemo {
    @ViewChild(SMSCode)
    private SMS: SMSCode;
    SMSsendCodeText: string = "发送验证码";
    counter: number = 6;
    send(value:string) {
      alert(`执行Ajax===${value}`);
        // 向服务端请求发送验证码
    }
    check(args:any) {
        alert(`用户输入了:====${this.SMS.value}`)
    }
}
