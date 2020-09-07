import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { routerTransition } from '../../router.animations';
import { ApiService  } from "../../shared/services/api.service";
import { StaffService } from './staff.service';
// import { ToastrManager } from 'ng6-toastr-notifications';
// import {  ModalDialogService } from '../../shared/services/modal-dialog.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { RESPONSE } from '../../config/Response';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
 
  getStaticPageList:[];
  defaultPagination: any;
  default:any;
  advancedPagination: number;
  paginationSize: number;
  disabledPagination: number;
  isDisabled: boolean;
  noOfPages;
  type: 'all';
  collectionSize;
  page: any;
  staticPageSearchForm: FormGroup;
  pageCount;
  pageSess: any;

  constructor(public router: Router, private http: ApiService, private fb: FormBuilder, private StaticPageService: StaffService) { 
    // this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
  }
  addstaffPage(){
         this.router.navigateByUrl('/staff/addstaff');
       }

  ngOnInit() {
      this.paginationView(); 
  }

  paginationView()
  { 
      // this.pageCount=JSON.parse(localStorage.getItem("pageSess"));
      this.pageCount = this.pageSess;
      this.defaultPagination=this.pageCount ? this.pageCount: 1;
      this.getstaticpagelist();
  }

  pageChange() {
    this.getstaticpagelist();
    // localStorage.setItem("pageSess", this.default.toString());  
    this.pageSess = this.default;
}
resetFilter() {
  this.defaultPagination = 1;
  localStorage.removeItem("customSearch"); 
  // localStorage.removeItem("pageSess");

  this.getstaticpagelist();
}
getstaticpagelist(){
  // let pageSess = localStorage.getItem("pageSess");
// this.defaultPagination = pageSess ? pageSess : 1;
    // let getSessionsearch = localStorage.getItem("customSearch");
    try {
       this.StaticPageService.getStaff( "", 'list', this.defaultPagination).subscribe(resp => {
               if (resp && resp.result.rows.length) {
                  this.noOfPages = resp.result.count;
                  this.getStaticPageList = resp.result.rows;
               }
               else {
                this.noOfPages = resp.result.count;
                this.getStaticPageList = [];
               }
                });
    } catch (error) {
        // this.spinner.hide();
        // this.toastr.error(this.translate.instant("error"));
    }
}
// deleteStaticPage(staticId) {
//   this.modalDialogService.confirm(CONSTANTS.CONFIRM, CONSTANTS.DEL_CONFIRMATION, CONSTANTS.BUTTONS.OK, CONSTANTS.BUTTONS.CANCEL).subscribe(result => {
//       if (result) {
//           this.deleteConfirm(staticId);
//       }
//   });
// }
// deleteConfirm(staticId){
//   localStorage.removeItem("customSearch"); 
//   this.staticPageSearchForm = this.fb.group({customSearch:['']});
//   this.StaticPageService.deleteStatic(staticId).subscribe(result => {
//     if (result && result.status) {
//       this.toastr.successToastr(this.response[result.message]);
//       this.getstaticpagelist();
//     }
//   }, error => {
//     this.toastr.errorToastr(this.response["staticPageError"]);
//   });
// }

}



































