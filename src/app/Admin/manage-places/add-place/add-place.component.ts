import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.css'
})
export class AddPlaceComponent {
  addPlaceForm: FormGroup=new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() :void{
  this.addPlaceForm = this.formBuilder.group({
    name: [''],
    gender:['']

  });
}
}