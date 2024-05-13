import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Admin/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { BookIssueRequestsComponent } from './Admin/book-issue-requests/book-issue-requests.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { AddBooksComponent } from './Admin/manage-books/add-books/add-books.component';
import { ViewBooksComponent } from './Admin/manage-books/view-books/view-books.component';
import { AddCategoryComponent } from './Admin/manage-category/add-category/add-category.component';
import { ViewCategoryComponent } from './Admin/manage-category/view-category/view-category.component';
import { AddPlaceComponent } from './Admin/manage-places/add-place/add-place.component';
import { ViewPlacesComponent } from './Admin/manage-places/view-places/view-places.component';
import { AddUserComponent } from './Admin/manage-users/add-user/add-user.component';
import { ViewUsersComponent } from './Admin/manage-users/view-users/view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingPageComponent,
    LoginComponent,
    CategoryComponent,
    HomeComponent,
    DashboardComponent,
   
    BookIssueRequestsComponent,
         AddBooksComponent,
         ViewBooksComponent,
         AddCategoryComponent,
         ViewCategoryComponent,
         AddPlaceComponent,
         ViewPlacesComponent,
         AddUserComponent,
         ViewUsersComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatIcon,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
