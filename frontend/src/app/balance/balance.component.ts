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
      user_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      balance: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      account_type: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')]),
     
    })
  
  
    this.account = new Account();
    this.getAllAccount();
  }

  InsertAccount(data:any){
    this.account.user_id= data.user_id;
    this.account.balance = data.balance;
    this.account.account_type = data.account_type;
   
    this.result = this.pro.InsertAccount(this.account);
    this.getAllAccount();
    alert("Data Inserted");
  }
  
  
  // UpdateAccount(data: any) {
  //   alert("Data Updated");
  //   this.account.user_id= data.user_id;
  //   this.account.balance = data.balance;
  //   this.account.account_type = data.account_type;
    
  //   this.getAllaccount();
  
  
  //  }
  
  
  //  DeleteAccount(data: any) {
  //   alert("data Deleted ");
  //   this.account.user_id = data.user_id;
  //   this.result = this.pro.DeleteAccount(this.account);
  //   this.getAllAccount();
  // }
  
  
  getAllAccount() {
    this.pro.getAllAccountDetails().subscribe(account => this.accountList = account);
  }

  }
  
