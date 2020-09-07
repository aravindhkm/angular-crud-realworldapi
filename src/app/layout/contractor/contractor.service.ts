import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private apiService: ApiService) { }

  // getStaff(id,type): Observable<any> {
  //   // let passOffset = '?page='+offset+'&size=10';
  //   // let params = type == 'list' ? '/staff' + passOffset : '/staff' +id;
       
  //     let params = type == 'list' ? '/staff' : '/staff' +id;
  //     return this.apiService.get(params)
  // }
   
  getStaff(id,type,offset): Observable<any> {
    let customSearch = "";
    //  if(searchParams){
    //    let passSearch = JSON.parse(searchParams);
    //    customSearch = passSearch.customSearch?'&search='+passSearch.customSearch:''
    //  }
    let passOffset = '?page='+offset+'&size=10';
    let param = type == 'list' ? '/staff' + passOffset : '/staff/'+id;

      return this.apiService.get(param)
  }

  postStaff(staffValues): Observable<any> {
    return this.apiService.post('/staff', staffValues);
  }

  putStaff(staffValues, id): Observable<any> {
    return this.apiService.put('/staff/' +id, staffValues);
  }
    

}
