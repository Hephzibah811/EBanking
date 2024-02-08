import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Register } from '../Model/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  register : Register;
  result : string=" ";
  myForm: FormGroup;


  constructor(private service : RegisterService, private router:Router){


    this.register=new Register;
    this.myForm=new FormGroup(
      {
        email_id: new FormControl('',[Validators.required,Validators.pattern('a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
        password:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      }


     
    )
  }


  loginUser(data:any){
    this.register.emailId=data.emailId;
    this.register.password=data.password;
 
   this.service.loginUser(this.register).subscribe(
     (resultdata:any)=> {
       console.log(resultdata)
       if(resultdata.message=="admin"){
        this.router.navigate(['/home']);
     } else if(resultdata.message=="user"){
       this.router.navigate(['/userhome']);
     }
     else{
       alert(resultdata.message);
     }
   }
  );




  }

}
