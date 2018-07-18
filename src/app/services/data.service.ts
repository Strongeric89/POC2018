import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams, HttpClientModule, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { tap, distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()

export class DataService{
    constructor(private http:HttpClient){

    }


   public data: Observable<string>
    private liveURL: string = 'https://my-json-server.typicode.com/Strongeric89/json-server/widget';
  
   

    private url:string = "http://localhost:3000/widget";
    getData(){
        return this.http.get(this.url).map((response: Response)=> response.json());
    }

    getAll(){
        return this.http.get<string[]>(this.url);
    }

    getAll2(){
        return this.http.get<string[]>(this.url);
    }

 



}
