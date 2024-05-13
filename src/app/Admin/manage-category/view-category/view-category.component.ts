import { Component } from '@angular/core';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css'
})
export class ViewCategoryComponent {
  Categories=[
    {
      name:'Fiction'
  
    },
    {
      name:'Non Fiction'
  
    },
   ]
   toggleSearch()
   {
  
   }
   toggleFilter()
   {
    
   }
   editCategory(category:any)
   {
  console.log('edit',category)
   }
   deleteCategory(category:any)
   {
    console.log('edit',category)
   }
}
