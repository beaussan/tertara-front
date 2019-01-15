import { Injectable } from '@angular/core';
import {interval, merge, Observable, of} from 'rxjs';
import {Form, Question} from '../types/form';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormWatcherService {

  constructor(private readonly httpClient: HttpClient) { }

  getForm(): Observable<Form> {
    return merge(interval(1000), of('')).pipe(
      mergeMap(() => this.httpClient.get<Form>('/forms/latest')),
      share(),
    );
  }

  isFormOver(): Observable<boolean> {
    return this.getForm().pipe(map(form => form.over));
  }

  isFormStarted(): Observable<boolean> {
    return this.getForm().pipe(map(form => form.started));
  }

  getCurrentQuestion(): Observable<Question> {
    return this.getForm().pipe(
      map(form => form.questions),
      map(arr => arr.filter(item => !item.terminated)),
      map(questions => questions.sort((a, b) => a.position - b.position)),
      map(arr => arr[0]),
    );
  }
}
