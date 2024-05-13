import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  addBookForm: FormGroup=new FormGroup({});
  quantities:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor(private formBuilder: FormBuilder) {
  //  for(let i=1;i<=10;i++)
  //   {
  //     this.quantities.push(i);
      
  //   }
  }
  ngOnInit() :void{
  this.addBookForm = this.formBuilder.group({
    
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/)]],
    category: ['', [Validators.required]],
    isbn: ['', [Validators.required, Validators.pattern
      (/^(?:ISBN(?:-10)?:?\s)?(?=.{17}$|.{13}$|.{10}$)\d{1,5}-?\d{1,7}-?\d{1,6}-?\d{1,3}-(?:\d|X)$/)]],
     
    author: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
    publisher: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    price: ['', [Validators.required,]],
    phoneNo: ['', [Validators.required, Validators.pattern(/^([1-9]{1})([0-9]{9})$/)]],
    quantity: [[1], [Validators.required,]],
    location :['', [Validators.required]],

  });
  
}

}
