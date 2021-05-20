import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-headlines-details',
  templateUrl: './headlines-details.component.html',
  styleUrls: ['./headlines-details.component.css']
})
export class HeadlinesDetailsComponent implements OnInit {
  id: any;
  newArray: any = [];
  authrDetails: any=[];
  constructor(private activatedRoute: ActivatedRoute, public service: NewService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.newArray = this.service.getListeddata();
    if (this.id != undefined) {
      if (this.newArray.length != 0) {
        this.getautherDetails()
      }
    }
  }
  getautherDetails() {
    this.authrDetails = this.newArray.filter((item) => item.id == this.id);
    console.log("this.details page",this.authrDetails)
  }
}
