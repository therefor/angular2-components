/**
 *
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

/**
 * 验证组件父类
 */
import { SuperValidator } from "../../class-src/index";

@Component({
  templateUrl:'./demo.html',
  selector: 'validate-demo',
  styleUrls:['./demo.css']
})
export class ValidateDemo {
    private myForm: FormGroup;
    private emailControl: FormControl;
    private textControl:FormControl;
    private codeControl:FormControl;
    private selectControl: FormControl;
    private passwordControl: FormControl;
    private mustCheckControl: FormControl;
    private maxControl: FormControl;
    public minControl: FormControl;
    private numControl: FormControl;
    private submitted :boolean =false;
    validator:any;
    test:{};
    constructor(){
        this.validator = new SuperValidator();
        this.emailControl = this.validator._emailControl('请输入正确的邮箱地址');
        this.textControl = this.validator._min_lengthControl(2,'请至少输入2位文字');
        this.codeControl = this.validator._isLengthControl(4,'请输入正确的4位验证码');
        this.selectControl = this.validator._hasValueControl('请选择性别');
        this.passwordControl = this.validator._lengthControl({min:6,max:14},'请输入6至14位密码');
        this.mustCheckControl = this.validator._trueValueControl('请同意该协议');
        this.numControl = this.validator._rangeControl({min:10,max:100},'请输入10-100内的数字');
        this.minControl = this.validator._min_valueControl(100,'请输入大于100的数字');
        this.maxControl =this.validator._max_valueControl(100,'请输入小于100的数字');
        this.myForm = new FormGroup({
            email: this.emailControl,
            text: this.textControl,
            num:this.numControl,
            min:this.minControl,
            code:this.codeControl,
            select:this.selectControl,
            password:this.passwordControl,
            max: this.maxControl,
            agree: this.mustCheckControl
        });
        this.test = {value:""}
    }
    showError(control:AbstractControl){
        return this.validator.showError(control);
    }
    shouldShowError( control:AbstractControl ){
        return this.showError(control) && !control.untouched;
    }
    get ErrorMessage():string{
        let errorObj = this.validator.showAllError(this.myForm);
        return JSON.stringify(errorObj,null,2)
    }
    get getFormData(){
        if(this.submitted) {
            return  JSON.stringify(this.myForm.value, null, 2)
        }
    }
    onSubmit() {
        this.submitted=true;
    }
}
