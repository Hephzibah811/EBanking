import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './Model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url : string="http://localhost:7811";


  insertAccount(account:Account){
    this.http.post(this.url+"/performAccountInsert",account).subscribe();
    return "Register successfully";
}


  constructor(private http : HttpClient) { }
}
