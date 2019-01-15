import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentatorRoutingModule } from './presentator-routing.module';
import { StartingComponent } from './starting/starting.component';
import { QuestionComponent } from './question/question.component';
import { AdminComponent } from './admin/admin.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    StartingComponent,
    QuestionComponent,
    AdminComponent,
    ThanksComponent,
  ],
  imports: [
    CommonModule,
    PresentatorRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    NgxChartsModule,
  ],
})
export class PresentatorModule {}
