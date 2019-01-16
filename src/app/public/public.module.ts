import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePublicComponent } from './home-public/home-public.component';
import { QuestionPublicComponent } from './question-public/question-public.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePublicComponent,
    QuestionPublicComponent,
    ContactPublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
})
export class PublicModule {}
