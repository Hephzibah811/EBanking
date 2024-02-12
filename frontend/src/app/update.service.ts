import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './Model/Register';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private url : string="http://localhost:7811";


  updateRegister(register : Register){
    this.http.put(this.url+"/Update",register).subscribe();
    return "Register successfully";
}


  constructor(private http : HttpClient) { }
}