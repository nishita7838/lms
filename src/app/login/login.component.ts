import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private route: Router) {}

 
  ngOnInit(): void {
this.loginForm = this.formBuilder.group({
email: ['', Validators.required, Validators.email],
      password: ['', Validators.required,Validators.minLength(6),
      Validators.maxLength(15) ]
    })
  }
  onSubmit(){
    this.route.navigate(['/admin/home']);
  }
}
