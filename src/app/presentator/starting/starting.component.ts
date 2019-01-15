import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormWatcherService} from '../../services/form-watcher.service';
import {Router} from '@angular/router';
import {PresControllService} from '../services/pres-controll.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  constructor(private readonly formService: FormWatcherService, private readonly router: Router, private readonly controll: PresControllService) {
  }

  ngOnInit() {
    this.subscription.add(this.formService.isFormStarted().subscribe(val => {
      if (val) {
        this.router.navigate(['/pres-questions']);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goToTheFuture() {
    this.controll.startForm().subscribe(() => {});
  }

}
