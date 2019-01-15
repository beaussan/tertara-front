import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormWatcherService} from '../../services/form-watcher.service';
import {combineLatest, interval, merge, Observable, of} from 'rxjs';
import {filter, flatMap, map, take, tap} from 'rxjs/operators';
import {ApiAnswer, CalculatedAnswer, Question} from '../../types/form';

@Injectable({
  providedIn: 'root'
})
export class PresControllService {

  constructor(private readonly httpClient: HttpClient, private readonly formWatcher: FormWatcherService) { }

  startForm(): Observable<any> {
    return this.formWatcher.getForm().pipe(
      filter(val => !!val),
      take(1),
      flatMap(form => this.httpClient.post(`/forms/${form.id}/start`, null)),
    );
  }

  stopForm(): Observable<any> {
    return this.formWatcher.getForm().pipe(
      filter(val => !!val),
      take(1),
      flatMap(form => this.httpClient.post(`/forms/${form.id}/terminate`, null)),
    );
  }

  goToNextQuestion(): Observable<any> {
    return this.formWatcher.getCurrentQuestion().pipe(
      filter(val => !!val),
      take(1),
      flatMap(question => this.httpClient.post(`/questions/${question.id}/terminate`, null)),
    );
  }

  getAnswerFromLatestQuestion(): Observable<CalculatedAnswer[]> {
    return this.formWatcher.getCurrentQuestion().pipe(
      filter(val => !!val),
      tap(data => console.log('ABOUT TO BE FLATMAPEED')),
      flatMap(ques => combineLatest(this.httpClient.get<ApiAnswer[]>(`/questions/${ques.id}/answers`), of(ques))),
      map<[ApiAnswer[], Question], CalculatedAnswer[]>(([arr, question]) => {
        const initialArray = question.answerPossibilities.map(answ => ({ count: 0, value: answ.value }));
        return arr.reduce((acc: CalculatedAnswer[], obj) => {
          const idFound = acc.findIndex(val => val.value === obj.answerValue.value);
          if (idFound === -1) {
            return [...acc, {count: 1, value: obj.answerValue.value}];
          } else {
            return acc.map(item => {
              if (item.value === obj.answerValue.value) {
                return {
                  value: item.value,
                  count: item.count + 1,
                };
              }
              return item;
            });
          }
        }, initialArray);
      }),
    );
  }
}
