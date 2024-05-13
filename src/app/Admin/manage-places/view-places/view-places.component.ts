import { Component } from '@angular/core';

@Component({
  selector: 'app-view-places',
  templateUrl: './view-places.component.html',
  styleUrl: './view-places.component.css'
})
export class ViewPlacesComponent {
 Places=[
    {
      name:'Rack1'
  
    },
    {
      name:'Rack2'
  
    },
   ]
   toggleSearch()
   {
  
   }
   toggleFilter()
   {
    
   }
   editPlace(place:any)
   {
  console.log('edit',place)
   }
   deletePlace(place:any)
   {
    console.log('edit',place)
   }
}
