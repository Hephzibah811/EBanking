import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Register } from '../Model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'EBankingProject';
  register:Register;
  result : string=" ";
  registerList : Register[] = [];
  myForm: FormGroup;


  constructor(private service : RegisterService){
    this.register = new Register;
    this.myForm = new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      customerName:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      emailId:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      password:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      mobile:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      aadharNo:new FormControl('',[Validators.required,Validators.pattern(' ')]),
      role:new FormControl('',[Validators.required,Validators.pattern(' ')]),
    })
  }
 
  insertRegister(data : any){
    this.register.userId= data.userId;
    this.register.customerName = data.customerName;
    this.register.emailId = data.emailId;
    this.register.password = data.password;
    this.register.mobile = data.mobile;
    this.register.aadharNo = data.aadharNo;
    this.register.role = data.role
   
    this.result = this.service.insertRegister(this.register);


  }


}



