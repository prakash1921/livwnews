import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  List: any = [];
  size: any = 10;
  p: number = 1;
  newArray: any=[];
  search: FormGroup
  ListCopy: any=[];
  afterawait:boolean=false;
  constructor(public service: NewService,public router:Router,  public fb: FormBuilder) {

  }

  ngOnInit() {
    this.p = 1;
    this.getnewList()
    this.search = this.fb.group({
      searchvalue:''
    })
  }
  getvalue(value){
    if(value!=''){
      console.log('ee',this.List.articles)
      console.log('ff',this.ListCopy.articles)
      this.List.articles = this.ListCopy.articles.filter(item => item.author == value)
      console.log('rr',this.List.articles)
       
    }else{
      this.getnewList()
    }
  }

   async getnewList() {
    // this.p=1;
    // this.size=10;
  // this.data =await this.service.getList()
      this.List = await this.service.getList();
      console.log('thh',this.List)
      this.List=this.List.data;
      console.log('iiiiiiiiiiiii',this.List)
      this.ListCopy= await this.service.getList();
      this.ListCopy=this.ListCopy.data
      if(this.List!=undefined){
        for(var i=0;i<this.List.articles.length;i++){
          this.List.articles[i].id = i+1;
        }
        this.service.setListeddata(this.List.articles)
      console.log(this.List, "this.Listthis.List",this.List, this.newArray);
      this.afterawait=true;
      }
     
  
      // var i=0;
      // while(i<this.List.articles.length){
      //   this.List.articles[i].id = i+1;
      // }

    // });

  }
  detailsPage(id){
console.log("id",id);
this.router.navigateByUrl('home/headline/details/' + id)

  }
}
