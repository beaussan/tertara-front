import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CalculatedAnswer, Question } from '../../types/form';
import { FormWatcherService } from '../../services/form-watcher.service';
import { Router } from '@angular/router';
import { PresControllService } from '../services/pres-controll.service';
import { lightSpeedIn, zoomInDown } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(zoomInDown))])

  ]
})
export class QuestionComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  currentQuestion$: Observable<Question>;

  answerForCurrent$: Observable<CalculatedAnswer[]>;

  isQuestionsOver$: Observable<boolean>;

  colorScheme = {
    domain: ['#9c27b0', '#007cfa', '#00afff', '#00d4dc', '#69f0ae']
  };

  constructor(
    private readonly formService: FormWatcherService,
    private readonly router: Router,
    private readonly constroller: PresControllService,
  ) {
    this.currentQuestion$ = this.formService.getCurrentQuestion();
    this.answerForCurrent$ = this.constroller.getAnswerFromLatestQuestion();
    this.isQuestionsOver$ = this.formService.isAllQuestionsOver();
  }

  ngOnInit() {
    this.subscription.add(
      this.formService.isFormOver().subscribe(val => {
        if (val) {
          this.router.navigate(['/thanks']);
        }
      }),
    );
  }

  finishForm() {
    this.constroller.stopForm().subscribe(() => {});
  }

  goToNextQuestion() {
    this.constroller.goToNextQuestion().subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
