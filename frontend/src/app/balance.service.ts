import { Injectable } from '@angular/core';
import { Account } from './Model/Account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private url : string="http://localhost:7811";
  constructor(private http:HttpClient) { }


 InsertAccount(account: Account){
    this.http.post(this.url+"/performAccountInsert",account).subscribe();
    return "Record Inserted";
  }


  // DeleteAccount(account: Account) {
  //   this.http.delete(this.url + "/deleteOrders/" + account.user_id).subscribe();
  //   return "Record Deleted";
  // }


  // UpdateAccount(account: Account)
  // {
  //   this.http.put(this.url+"/updateOrders",account).subscribe();
  //   return "Record Updated";
  // }
  getAllAccountDetails() {
    return this.http.get<Account[]>(this.url + "/ViewAllAccounts");
  }


}

