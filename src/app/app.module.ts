import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefixerInterceptor } from './http/prefixer.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';
import { PresentatorModule } from './presentator/presentator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PublicModule,
    PresentatorModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PrefixerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
