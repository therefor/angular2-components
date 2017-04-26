import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

//import route module
import { AppRoutingModule } from './app-routing.module';


//import directives
import {FileSelectDirective} from './class-src/uploader/logic/file-select.directive';
import {FileDropDirective} from './class-src/uploader/logic/file-drop.directive';


//import components
import { AppComponent } from './app.component';
import { DialogComponent } from './class-src/dialog/dialog.component';
import { DialogService  } from './class-src/dialog/dialog.service';
//import { SuperValidator } from './class-src/validation/validator';
import { ProgressBar} from './class-src/progressBar/progress';
//import { ProgressModel } from './class-src/progressBar/progress.model';
//import * as uploadSrc from  './class-src/uploader/index';
import { SMSCode } from './class-src/smscode/smscode.component';

//import demos
import { DialogDemo } from './example/dialog/demo';
import { ValidateDemo } from './example/validate/demo';
import { SMSCodeDemo } from './example/smscode/demo';
import { UploaderDemo } from './example/uploader/demo';
import { ProgressDemo } from './example/progressBar/demo'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DialogComponent,
    FileSelectDirective,
    FileDropDirective,
    //uploadSrc,
    ProgressBar,
    SMSCode,
    DialogDemo,
    ValidateDemo,
    SMSCodeDemo,
    UploaderDemo,
    ProgressDemo
  ],
  providers: [ DialogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule{ }
