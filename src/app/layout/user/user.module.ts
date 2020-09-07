import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';



@NgModule({
  declarations: [UserComponent, AdduserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
