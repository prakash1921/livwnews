import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  List: any = [];
  size: any = 10;
  p: number = 1;
  newArray: any = [];
  search: FormGroup;
  source: any = [];
  ListCopy: any = [];
  constructor(public service: NewService, public router: Router, public fb: FormBuilder) {

  }

  ngOnInit() {
    this.p = 1;
    this.getnewList()
    this.search = this.fb.group({
      searchvalue: '',
      source: ['ALL']
    })
  }
  getvalue(value) {
    var newarray = [];
    if(value!=''){
    for (var i = 0; i < this.ListCopy.articles.length; i++) {
      var objectvalue = this.ListCopy.articles[i];
      var values = Object.values(objectvalue);
      var flag = false;
      for (var j = 0; j < values.length; j++) {
        newarray.push(values[j])
        if (newarray.join('').includes(value) == true) {
          flag = true;
        }
      }
      if (flag == true) {
        this.List.articles = [this.ListCopy.articles[i]]
      }
    }
  }
  else if(this.search.value.source=="ALL"){
    this.getnewList();
  }else if(this.search.value.source!="ALL"){
    this.getList(this.search.value.source)
  }
  else{
    this.getnewList();
  }
  }
  getList(value) {
    if (value != 'ALL') {
      console.log('ee', value);
      this.List.articles = this.ListCopy.articles.filter(item => item.source.name == value)
      console.log(this.List, 'F', this.ListCopy)
    } else {
      this.getnewList();
    }

  }
  getnewList() {
    // this.p=1;
    // this.size=10;
    this.service.getList().subscribe(data => {
      this.List = data;
      this.ListCopy = Object.assign({}, this.List);
      for (var i = 0; i < this.List.articles.length; i++) {
        this.List.articles[i].id = i + 1;
        this.source.push(this.List.articles[i].source.name)
      }
      this.service.setListeddata(this.List.articles)

      // var i=0;
      // while(i<this.List.articles.length){
      //   this.List.articles[i].id = i+1; 
      // }
      console.log(this.List, "this.Listthis.List", this.List, this.newArray);

    });

  }
  detailsPage(id) {
    console.log("id", id);
    this.router.navigateByUrl('home/explore/details/' + id)

  }


}
