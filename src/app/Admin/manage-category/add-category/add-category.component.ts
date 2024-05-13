import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  addCategoryForm: FormGroup=new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() :void{
  this.addCategoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/)]],
    status:['',[Validators.required]]

  });
}
}
