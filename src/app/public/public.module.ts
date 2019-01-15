import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePublicComponent } from './home-public/home-public.component';
import { QuestionPublicComponent } from './question-public/question-public.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';

@NgModule({
  declarations: [
    HomePublicComponent,
    QuestionPublicComponent,
    ContactPublicComponent,
  ],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
