import { Injectable } from '@angular/core';
import { Transaction } from './Model/Transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private url : string="http://localhost:7811";
  constructor(private http:HttpClient) { }


 InsertTransaction(account: Transaction){
    this.http.post(this.url+"/performAccountInsert",account).subscribe();
    return "Record Inserted";
  }


 
  getAllHistory() {
    return this.http.get<Transaction[]>(this.url + "/ViewAllAccounts");
  }


}

  




