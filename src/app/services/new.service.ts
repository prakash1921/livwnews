import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';
// import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
// import { METHODS } from 'http';
// import 'rxjs/add/operator/map';
// import { Observable, Subject } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  public headers: Headers;
  // public  proxyUrl ='https://news-c3238.web.app/'
  public  proxyUrl ='https://localhost:4200'

  // public requestoptions: RequestOptions;
  dataList:any=[]
  url: any = `https://newsapi.org/v2/everything?q=tesla&from=2021-05-20&sortBy=publishedAt&apiKey=c791e422aa4140029eb0a9717782fdea`;
  constructor(public http: HttpClient) { }
async  getList() {
  //   const httpOptions = {
  //     headers: {
  //     //   'Access-Control-Allow-Origin':'*', 
  //     // 'Content-Type': 'application/json',
  //     // 'X-Api-Key': 'c791e422aa4140029eb0a9717782fdea',
  //     'Authorization': 'Bearer ' + 'c791e422aa4140029eb0a9717782fdea'
  //   },
      
  // };
  //   return this.http.get(this.url,httpOptions)


  // var data =
  return await  axios.get(this.url,{headers: {'Authorization': 'Bearer '+'c791e422aa4140029eb0a9717782fdea'}});
  // return data;
  // .then(function (response) {
  //   // handle success
  //   console.log(response.data);
  //   return response.data
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

    // return this.http.(this.url)
  }
  setListeddata(data){
    this.dataList=data
  }
  getListeddata(){
    return this.dataList;
  }
}
