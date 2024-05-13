import { Component } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent {
 Books=[
  {
    title:'Book 1',category:'Fiction', author:'Author 1', isbn:"123456789"

  },
  {
    title:'Book 1',category:'Fiction', author:'Author 1', isbn:"123456789"

  },
 ]
 toggleSearch()
 {

 }
 toggleFilter()
 {
  
 }
 editBook(book:any)
 {
console.log('edit',book)
 }
 deleteBook(book:any)
 {
  console.log('edit',book)
 }
}
