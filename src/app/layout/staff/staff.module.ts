import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { RouterModule, Routes } from '@angular/router';
import { StaffService } from './staff.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'src/app/design/forms/form.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes : Routes = [
  { path : '', component: StaffComponent},
  { path : 'addstaff', component: AddstaffComponent},
  { path : 'edit/:id', component: AddstaffComponent}
];

@NgModule({
  declarations: [StaffComponent, AddstaffComponent],
  imports: [
    CommonModule,NgbModule,
    RouterModule.forChild(routes),FormModule,ReactiveFormsModule
  ],
  providers: [StaffService]
})
export class StaffModule { }