import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MockServiceService {

  constructor(private _http:HttpClient) { }


  get(url){
    return this._http.get(url);
  }

}