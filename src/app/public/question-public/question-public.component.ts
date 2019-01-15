import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormWatcherService } from '../../services/form-watcher.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AnswerPossibility, Question } from '../../types/form';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-public',
  templateUrl: './question-public.component.html',
  styleUrls: ['./question-public.component.scss'],
})
export class QuestionPublicComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  currentQuestion$: Observable<Question>;

  isQuestionsOver$: Observable<boolean>;

  get lastIdAnswered(): number {
    const count_str = localStorage.getItem('count');

    if (count_str == null || count_str === 'null') {
      return 0;
    }
    return parseInt(count_str, 10);
  }

  set lastIdAnswered(value: number) {
    localStorage.setItem('count', `${value}`);
  }

  constructor(
    private readonly formService: FormWatcherService,
    private readonly httpClient: HttpClient,
    private readonly router: Router,
  ) {
    this.currentQuestion$ = this.formService.getCurrentQuestion();
    this.lastIdAnswered = 0;
    this.isQuestionsOver$ = this.formService.isAllQuestionsOver();
  }

  ngOnInit() {
    this.subscription.add(
      this.formService.isFormOver().subscribe(val => {
        if (val) {
          this.router.navigate(['/contact']);
          this.lastIdAnswered = 0;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  answerToQuestion(question: Question, answer: AnswerPossibility): void {
    this.lastIdAnswered = question.id;
    if (!question.ignoreResponse) {
      this.httpClient
        .post(`/questions/${question.id}/answers`, answer)
        .subscribe(() => {});
    }
  }
}
