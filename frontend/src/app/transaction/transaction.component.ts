import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../Model/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  title = 'EBankingProject';
  transaction:Transaction;
  result : string=" ";
  transactionList : Transaction[] = [];
  myForm: FormGroup;


  constructor(private service : TransactionService){
    this.transaction = new Transaction;
    this.myForm = new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),      
      transactionId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      amount:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      
    })
  }
 
  insertTransaction(data : any){
    this.transaction.userId= data.userId;
   
    this.transaction.transactionId = data.transactionId;
    this.transaction.amount = data.amount;  
    this.result = this.service.insertTransaction(this.transaction);


  }


}

