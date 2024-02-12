import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../Model/Account';
import { BalanceService } from '../balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  account:Account;
  result:String="";

  accountList:Account[]=[];
  accountList2:string[]=["103","saving","50000"];
  
  myForm:FormGroup;
  constructor(private pro : BalanceService){
    this.myForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      balance: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      accountType: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')]),
     
    })
  
  
    this.account = new Account();
    this.getAllAccount();
  }

  InsertAccount(data:any){
    this.account.userId= data.userId;
    this.account.balance = data.balance;
    this.account.accountType = data.accountType;
   
    this.result = this.pro.InsertAccount(this.account);
    this.getAllAccount();
    alert("Data Inserted");
  }
  
 
  
  getAllAccount() {
    this.pro.getAllAccountDetails().subscribe(account => this.accountList = account);
  }

  }
  
