import { Component } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
  Users=[
    {
      name:"Nishita",email:'nishita@gmail.com',role:'Reader',phoneNo:'8765334555'
  
    },
    
   ]
   toggleSearch()
   {
  
   }
   toggleFilter()
   {
    
   }
   editUser(user:any)
   {
  console.log('edit',user)
   }
   deleteUser(user:any)
   {
    console.log('edit',user)
   }
}
