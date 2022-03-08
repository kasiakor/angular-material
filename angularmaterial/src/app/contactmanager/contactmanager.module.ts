import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactmanagerModule { }
