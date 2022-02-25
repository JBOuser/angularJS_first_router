import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalServiceService } from './services/modal/modal-service.service';
import { EmployeesDataServiceService } from './services/employees-data/employees-data-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutUsComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ModalServiceService,
    EmployeesDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
