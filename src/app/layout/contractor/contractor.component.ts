import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services';
import { ContractorService } from './contractor.service';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  contractorListData:[];
  defaultPagination: any;
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

  constructor(public router: Router, private http: ApiService,private ContractorService: ContractorService,private fb: FormBuilder)
   { 
    this.defaultPagination = 1;
    this.advancedPagination = 1;
    this.paginationSize =1; 
    this.disabledPagination = 1;
        this.isDisabled = true; 
   }

  addContractor(){
    this.router.navigateByUrl('/contractor/addcontractor');
  }
  

  ngOnInit() {
    this.paginationView();
  }

  paginationView()
  { 
    if(this.router.url!= "/staticPages?back=true")
      {
        localStorage.removeItem("customSearch");
        localStorage.removeItem("pageSess");
        this.staticPageSearchForm = this.fb.group({
          customSearch:[""]
          });
        this.getstaffList();
      }
    else
    {
     let backCustomsearch = JSON.parse(localStorage.getItem("customSearch"));
      let customSearchVal = backCustomsearch ? backCustomsearch.customSearch : '';
      let blockSearchVal = backCustomsearch ? backCustomsearch.adType :'';
      this.staticPageSearchForm = this.fb.group({
      customSearch: customSearchVal
      });
      this.pageCount=JSON.parse(localStorage.getItem("pageSess"));
      this.defaultPagination=this.pageCount ? this.pageCount: 1;
      this.getstaffList();
    
  }
  }


  
 
  pageChange(type) {
    this.getstaffList();
    localStorage.setItem("pageSess", this.defaultPagination.toString());
}



  
  getstaffList(){
    let pageSess = localStorage.getItem("tableNav");
    // this.defaultPagination = pageSess ? pageSess: 1;
    try{
      this.ContractorService.getStaff( "all", "list", this.defaultPagination).subscribe(res => {
        if(res && res.result.rows.length) {
          this.noOfPages = res.result.count;
          this.contractorListData =res.result.rows;
        }
        else{
          this.noOfPages = res.result.count;
          this.contractorListData= [];
        }
      });
    }
    catch(error){ 
      
    }
  }

}
