import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentatorRoutingModule } from './presentator-routing.module';
import { StartingComponent } from './starting/starting.component';
import { QuestionComponent } from './question/question.component';
import { AdminComponent } from './admin/admin.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [StartingComponent, QuestionComponent, AdminComponent, ThanksComponent],
  imports: [
    CommonModule,
    PresentatorRoutingModule
  ]
})
export class PresentatorModule { }
