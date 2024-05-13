import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Admin/home/home.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  {
    path:"",component:LandingPageComponent,data:{ 'id':1,name:'Login'},
    

  },
  {
    path:"cat",component:CategoryComponent,data:{ 'id':4,name:'Category'},
  },
  {
    path:"login",component:LandingPageComponent,data:{ 'id':2,name:'Login'},
    
  },
  {
    path:"register",component:LandingPageComponent,data:{ 'id':3,name:'Register'},
    
  },
  {
    path: 'admin/home',component: HomeComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
