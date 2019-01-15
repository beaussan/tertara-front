import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Form} from './types/form';
import {FormWatcherService} from './services/form-watcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tertara-front';

  form$: Observable<Form>;

  constructor(private readonly formService: FormWatcherService) {
    this.form$ = formService.getForm();
  }
}
