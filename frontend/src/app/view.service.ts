import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './Model/Register';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private url : string="http://localhost:7811";
  constructor(private http:HttpClient) { }


 InsertRegister(register: Register){
    this.http.post(this.url+"/Register",register).subscribe();
    return "Record Inserted";
  }


  DeleteRegister(register: Register) {
    this.http.delete(this.url + "/deleteOrders/" + register.userId).subscribe();
    return "Record Deleted";
  }


  UpdateRegister(register: Register)
  {
    this.http.put(this.url+"/updateOrders",register).subscribe();
    return "Record Updated";
  }
  getAllRegisterDetails() {
    return this.http.get<Register[]>(this.url + "/ViewAllRegistrations");
  }


}
