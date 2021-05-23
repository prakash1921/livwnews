import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { environment } from 'src/environments/environment';
// import process from 'dotenv'
// import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
// import { METHODS } from 'http';
// import 'rxjs/add/operator/map';
// import { Observable, Subject } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  public headers: Headers;
  public  proxyUrl ='http://cors-anywhere.news-c3238.web.app/'
  // public  proxyUrl ='https://cors-anywhere.localhost:4200/'

  // public requestoptions: RequestOptions;
  dataList:any=[]
  url: any = `${this.proxyUrl}https://newsapi.org/v2/everything?q=tesla&from=2021-05-20&sortBy=publishedAt&apiKey=c791e422aa4140029eb0a9717782fdea`;

  // url: any = 'https://newsapi.org/v2/everything?q=tesla&from=2021-05-20&sortBy=publishedAt&apiKey='+environment.newskey;
  constructor(public http: HttpClient) { }
async  getList() {
// console.log('prrr',process.env)
  return await  axios.get(this.url,{headers: {'Authorization': 'Bearer '+ 'c791e422aa4140029eb0a9717782fdea'}});
  }
  setListeddata(data){
    this.dataList=data
  }
  getListeddata(){
    return this.dataList;
  }
}
