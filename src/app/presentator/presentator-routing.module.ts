import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartingComponent } from './starting/starting.component';
import { QuestionComponent } from './question/question.component';
import { AdminComponent } from './admin/admin.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path: 'presentateur',
    component: StartingComponent,
  },
  {
    path: 'pres-questions',
    component: QuestionComponent,
  },
  {
    path: 'pres-admin',
    component: AdminComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentatorRoutingModule {}
