import { NgModule } from '@angular/core';

// import { NzButtonModule } from 'ng-zorro-antd/button';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonShareModule } from '../../components/commonShare.module';


@NgModule({
  imports: [WelcomeRoutingModule,CommonShareModule],
  declarations: [
    WelcomeComponent,
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
