import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../Services/data.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private dataService: DataService) {}
 
  
  ngOnInit(): void {
this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([1-9]{1})([0-9]{9})$/),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      role: new FormControl(''),
      token: new FormControl(''),
    });
  }
  onSubmit() {
    {
      if(this.registerForm.valid)
      {
        this.dataService.registerUser(this.registerForm.value).subscribe
        (response=>
          {
              console.log(response);
          },
          error=>
            {
              console.error(error);
            }
          
        );
    }     
  }
  }
}