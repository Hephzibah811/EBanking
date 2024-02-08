import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../Model/Register';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
register:Register;
result:String="";
registerList:Register[]=[];
myForm:FormGroup;
constructor(private pro : ViewService){
  this.myForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    customerName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    emailId: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    aadharNo : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])
  })


  this.register = new Register();
  this.getAllRegister();
}
Insertregister(data:any){
  this.register.userId= data.userId;
  this.register.customerName = data.customerName;
  this.register.emailId = data.emailId;
  this.register.mobile = data.mobile;
  this.register.aadharNo = data.aadharNo;
  this.result = this.pro.InsertRegister(this.register);
  this.getAllRegister();
  alert("Data Inserted");
}


UpdateRegister(data: any) {
  alert("Data Updated");
  this.register.userId= data.userId;
  this.register.customerName = data.customerName;
  this.register.emailId = data.emailId;
  this.register.mobile = data.mobile;
  this.register.aadharNo = data.aadharNo;
  this.result = this.pro.UpdateRegister(this.register);
  this.getAllRegister();


 }


 DeleteRegister(data: any) {
  alert("data Deleted ");
  this.register.userId = data.userId;
  this.result = this.pro.DeleteRegister(this.register);
  this.getAllRegister();
}


getAllRegister() {
  this.pro.getAllRegisterDetails().subscribe(register => this.registerList = register);
}

}

