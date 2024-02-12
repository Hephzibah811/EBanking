import { Injectable } from '@angular/core';
import { Transaction } from './Model/Transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private url : string="http://localhost:7811";


  insertTransaction(transaction : Transaction){
    this.http.post(this.url+"/performTransactionInsert",transaction).subscribe();
    return "Register successfully";
}


  constructor(private http : HttpClient) { }
}

