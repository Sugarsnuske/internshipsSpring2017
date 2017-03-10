import { AboutComponent } from './about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InternshipFormComponent } from './internship-form.component';
import { HomeComponent } from './home.component';
import { InternshipsComponent } from './internships.component';
import { InternshipsListComponent } from './internships-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'internships', component: InternshipsComponent,
    children: [
      {
        path: 'index',
        component: InternshipsListComponent
      },
      {
        path: 'new-internship',
        component: InternshipFormComponent
      },
    ]
 },
  { path: 'about', component: AboutComponent },
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    InternshipFormComponent,
    HomeComponent,
    AboutComponent,
    InternshipsComponent,
    InternshipsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
