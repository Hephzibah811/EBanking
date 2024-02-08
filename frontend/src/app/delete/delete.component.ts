import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../Model/Register';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    title = 'EBankingProject';
    register:Register;
    result : string=" ";
    registerList : Register[] = [];
    myForm: FormGroup;
  
  
    constructor(private service : DeleteService){
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

    DeleteRegister(data: any) {
      alert("data Deleted ");
      this.register.userId = data.userId;
      this.result = this.service.DeleteRegister(this.register);
      // this.getAllRegister();
    }

}
