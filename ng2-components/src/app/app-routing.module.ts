import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * 组件demo
 */
import { DialogDemo } from './example/dialog/demo';
import { ValidateDemo } from './example/validate/demo';
import { SMSCodeDemo } from './example/smscode/demo';
import { ProgressDemo } from './example/progressBar/demo';
import { UploaderDemo } from './example/uploader/demo';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/validator',
    pathMatch: 'full' },
 {
    path: 'dialog',
    component: DialogDemo,
  },
  {
    path: 'validator',
    component: ValidateDemo
  },
  {
    path: 'progressbar',
    component: ProgressDemo
  },
  {
    path: 'uploader',
    component: UploaderDemo
  },
  {
    path: 'smscode',
    component: SMSCodeDemo
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
