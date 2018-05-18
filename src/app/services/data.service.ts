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
//    private hdfs: string = "http://mo-ca7106ea2.mo.sap.corp:50070" + "/tmp/sap/eric" + "/sparkjobpco_pipeline.json";
//    private jsonServer: string = "https://github.com/typicode/demo/blob/master/db.json";

    private url:string = "http://localhost:3000/widget";
    getData(){
        return this.http.get(this.url).map((response: Response)=> response.json());
    }

    getAll(){
        return this.http.get<string[]>(this.url);
    }


 
}