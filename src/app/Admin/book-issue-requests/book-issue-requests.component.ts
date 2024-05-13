import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue-requests',
  templateUrl: './book-issue-requests.component.html',
  styleUrl: './book-issue-requests.component.css'
})
export class BookIssueRequestsComponent {
  Requests=[
    {
      bookTitle:'Book 1',category:'Fiction', author:'Author 1', isbn:"123456789",date:'20-05-2023'
  
    },
    
   ]
   toggleSearch()
   {
  
   }
   toggleFilter()
   {
    
   }
   acceptRequest()
   {
 
   }
   rejectRequest()
   {
    
   }
}
