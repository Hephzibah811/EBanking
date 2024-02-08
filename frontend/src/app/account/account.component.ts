import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../Model/Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  title = 'EBankingProject';
  account:Account;
  result : string=" ";
  accountList : Account[] = [];
  myForm: FormGroup;

  constructor(private service : AccountService){
    this.account = new Account;
    this.myForm = new FormGroup({
      user_id:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      account_type:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      
      balance:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      aadhar_no:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      role:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    })
  }
 
  insertAccount(data : any){
    this.account.user_id= data.user_id;
    this.account.account_type = data.account_type;
    this.account.balance = data.balance; 
    this.result = this.service.insertAccount(this.account);
  }

}
