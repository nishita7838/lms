import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addUserForm: FormGroup=new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() :void{
  this.addUserForm = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]],
    status: ['', [Validators.required]],
    phone: ['',[Validators.required,Validators.pattern(/^([1-9]{1})([0-9]{9})$/)]],
    role: ['', [Validators.required]],

    

  });
}
}
