import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../Model/Transaction';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  title = 'EBankingProject';
  transaction:Transaction;
  result : string=" ";
  


  transactionList:Transaction[]=[];
  transactionList2:string[]=["102","108","20000"];
  
  myForm:FormGroup;
  constructor(private pro : HistoryService){
    this.myForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      transactionId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      amount: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')]),
     
    })
  
  
    this.transaction = new Transaction();
    this.getAlltransaction();
  }

  InsertTransaction(data:any){
    this.transaction.userId= data.userId;
    this.transaction.transactionId = data.transactionId;
    this.transaction.amount = data.amount;
   
    this.result = this.pro.InsertTransaction(this.transaction);
    this.getAlltransaction();
    alert("Data Inserted");
  }
  
  
  
  
 
  
  
  getAlltransaction() {
    this.pro.getAllHistory().subscribe(transaction => this.transactionList = transaction);
  }

  }
  
