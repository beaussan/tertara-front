import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-public',
  templateUrl: './contact-public.component.html',
  styleUrls: ['./contact-public.component.scss'],
})
export class ContactPublicComponent implements OnInit {
  loginForm: FormGroup;

  hasSendEmail = false;

  emailInUse = false;

  constructor(private readonly httpClient: HttpClient, private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newsletter: [true],
    });
  }


  submitForm() {
    this.emailInUse = false;
    const email = this.loginForm.get('email').value;
    const newsletter = this.loginForm.get('newsletter').value;
    this.httpClient.post('/subscription', { email, newsletter})
      .subscribe({
        next: value => {
          this.hasSendEmail = true;
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.emailInUse = true;
          }
        },
        complete: () => {}
      });
  }
}
