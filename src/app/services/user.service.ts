import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    
  constructor(private _http: HttpClient){}
    getUsers(){
        return this._http.get('https://api.publicapis.org/entries');
        // return 'Hello';
    }
}