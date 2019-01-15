import { Injectable } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';
import { Form, Question } from '../types/form';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormWatcherService {
  private formObservable: Observable<Form>;

  constructor(private readonly httpClient: HttpClient) {}

  getForm(): Observable<Form> {
    if (!this.formObservable) {
      this.formObservable = merge(interval(1800), of('')).pipe(
        mergeMap(() => this.httpClient.get<Form>('/forms/latest')),
        share(),
      );
    }
    return this.formObservable;
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

  isAllQuestionsOver(): Observable<boolean> {
    return this.getForm().pipe(
      map(form => form.questions),
      map(arr => arr.reduce((acc, curr) => acc && curr.terminated, true)),
    );
  }
}
