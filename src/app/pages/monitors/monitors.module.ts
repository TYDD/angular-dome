import { NgModule } from '@angular/core';

import { MonitorsRoutingModule } from './monitors-routing.module';

import { MonitorsComponent } from './monitors.component';
import { CommonShareModule } from '../../components/commonShare.module';


@NgModule({
  imports: [MonitorsRoutingModule,CommonShareModule],
  declarations: [
    MonitorsComponent,
  ],
  exports: [MonitorsComponent]
})
export class MonitorsModule { }
