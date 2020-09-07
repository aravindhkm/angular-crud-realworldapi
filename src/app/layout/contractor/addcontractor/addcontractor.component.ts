import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontractor',
  templateUrl: './addcontractor.component.html',
  styleUrls: ['./addcontractor.component.scss']
})
export class AddcontractorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

contractorpage() {
    this.router.navigateByUrl('/staff')
  }


}
