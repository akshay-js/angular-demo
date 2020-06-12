import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../auth/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  public loginError: String;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.apiService.login(this.loginForm.value)
        .subscribe((data: any) => {
          this.router.navigate(['/spectrum']);
          },
          error => {
            this.loginError = error;
          }
        );
    }
  }
}
