import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './Model/Register';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private url : string="http://localhost:7811";


  DeleteRegister(register : Register){
    this.http.delete(this.url+"/Delete"+register.userId).subscribe();
    return "Deleted successfully";
}



  constructor(private http : HttpClient) { }
}
