import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  //  headers=new HttpHeaders();
  dataList:any=[]
  url: any = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-20&sortBy=publishedAt&apiKey=c791e422aa4140029eb0a9717782fdea';
  constructor(public http: HttpClient,public headers:HttpHeaders) { }
  getList() {
    this.headers.append('Access-Control-Allow-Origin','*')
    this.headers.append('Content-type','application/json')
   


    return this.http.get(this.url)
  }
  setListeddata(data){
    this.dataList=data
  }
  getListeddata(){
    return this.dataList;
  }

}
