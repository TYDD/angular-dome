import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

// 共享的组件 
import { ComboxComponent } from './combox/combox.component'; 

const baseAntComponent = [
  NzButtonModule ,
]; // 组件

const baseComponent = [
    ComboxComponent,
]; // 自定义组件


@NgModule({
  imports: [
    CommonModule,
    ...baseAntComponent
  ],
  declarations: [
    ...baseComponent,
  ],
  exports:[...baseComponent,...baseAntComponent ], // 把共享的组件放入到导出的出口中 
})
export class CommonShareModule { }