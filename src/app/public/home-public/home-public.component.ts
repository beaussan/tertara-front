import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormWatcherService} from '../../services/form-watcher.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.scss']
})
export class HomePublicComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  constructor(private readonly formService: FormWatcherService, private readonly router: Router) {

  }

  ngOnInit() {
    this.subscription.add(this.formService.isFormStarted().subscribe(val => {
      if (val) {
        this.router.navigate(['/questions']);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
