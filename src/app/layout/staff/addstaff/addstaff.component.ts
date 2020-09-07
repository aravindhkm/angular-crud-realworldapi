import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms'
import { StaffService } from '../staff.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {

  addStaffForm: FormGroup;
  stfid ='';

  constructor(private router: Router,private activateRoute: ActivatedRoute, 
    private fb: FormBuilder, private stfapi: StaffService,
    )
     { 
       this.activateRoute.params.subscribe((params: Params) => {
         this.stfid = params['id'];
       });
     }

  get f() {
    return this.addStaffForm.controls
  }

  ngOnInit() {
    this.addStaffForm = this.fb.group({
      stfname: ['', [Validators.required]],
      stfusername: ['', [Validators.required]],
      stfpassword: ['', [Validators.required]],
      stfaddress: ['', [Validators.required]]
    });
    
    if(this.stfid) {
      // this.getStaffList()
      this.stfapi.getStaff(this.stfid,'edit','').subscribe(res => {
            if (res) {
              this.addStaffForm = this.fb.group({
                stfname: [res.result.rows.staffname, [Validators.required]],
                stfusername: [res.result.rows.username, [Validators.required]],
                stfpassword: [res.result.rows.password, [Validators.required]],
                stfaddress: [res.result.rows.address, [Validators.required]]
              });
            }
          });  
    }
   
  }

  // getStaffList(){
  //   this.stfapi.getStaff(this.stfid, 'edit', '',).subscribe(res => {
  //     if (res) {
  //       this.addStaffForm = this.fb.group({
  //         stfname: [res.result.rows.name, Validators.required],
  //         stfusername: [res.result.rows.username, Validators.required],
  //         stfpassword: [res.result.rows.password, Validators.required],
  //         stfaddress: [res.result.rows.address, Validators.required]
  //       });
  //     }
  //   });  
  // }


  staffPage() {
    this.router.navigateByUrl('/staff');
  }

  onSubmit(){
    const staffValues = this.addStaffForm.value;
    if(this.addStaffForm.valid){
      let staffParams = {
        'staffname': staffValues.stfname.trim(),
        'username': staffValues.stfusername,
        'address': staffValues.stfaddress,
        'password': staffValues.stfpassword
      }
    try {
      if(!this.stfid){
        this.stfapi.postStaff(staffParams).subscribe(res => {
          if(res && res.status){
            this.router.navigateByUrl('/staff');
          }
        }, err => {
          console.log
             ({Message : "error"})
        });
      } 

      else{
        this.stfapi.putStaff(staffParams, this.stfid).subscribe(res => {
          if(res && res.status) {
            this.staffPage();
          } else {
            console.log({Message: "Error"});
          }
        }, err => {
          console.log({Message: "Error catch"})
        });
      }
    } catch{

    }
    }
  }




}
