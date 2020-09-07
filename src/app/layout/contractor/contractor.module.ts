import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorComponent } from './contractor.component';
import { Routes, RouterModule } from '@angular/router';
import { AddcontractorComponent } from './addcontractor/addcontractor.component';
import {ContractorService} from './contractor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormModule } from 'src/app/design/forms/form.module';


const routes: Routes = [
  { path: '', component: ContractorComponent},
  { path : 'addcontractor', component: AddcontractorComponent},

]

@NgModule({
  declarations: [ContractorComponent, AddcontractorComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  providers: [ContractorService]
})
export class ContractorModule { }
