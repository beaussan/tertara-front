import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  restart() {
    this.httpClient.post(`/forms/reset`, null).subscribe(() => {
      this.router.navigate( ['/presentateur']);
    });
  }

}
