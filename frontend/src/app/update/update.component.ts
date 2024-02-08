import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from '../update.service';
import { Register } from '../Model/Register';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  title = 'EBankingProject';
  register:Register;
  result : string=" ";
  registerList : Register[] = [];
  myForm: FormGroup;


  constructor(private service : UpdateService){
    this.register = new Register;
    this.myForm = new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      customerName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      emailId:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      aadharNo:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      role:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    })
  }
 
  updateRegister(data : any){
    this.register.userId= data.userId;
    this.register.customerName = data.customerName;
    this.register.emailId = data.emailId;
    this.register.password = data.password;
    this.register.mobile = data.mobile;
    this.register.aadharNo = data.aadharNo;
    this.register.role = data.role
   
    this.result = this.service.updateRegister(this.register);


  }


}
