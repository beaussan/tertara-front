import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePublicComponent } from './home-public/home-public.component';
import { QuestionPublicComponent } from './question-public/question-public.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';

const routes: Routes = [
  {
    path: 'public',
    component: HomePublicComponent,
  },
  {
    path: 'questions',
    component: QuestionPublicComponent,
  },
  {
    path: 'contact',
    component: ContactPublicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
