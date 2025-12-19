import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIresponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  private base_url= "http://localhost:5158";

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAllClients():Observable<APIresponseModel>{
    return this.http.get<APIresponseModel>(`${this.base_url}/api/Client/SelectAllClients`);
  }

  getAllClientProject():Observable<APIresponseModel>{
    console.log("sds");
    return this.http.get<APIresponseModel>("api/api/ClientStrive/GetAllClientProjects");
  }
  
  addUpdate(obj:Client):Observable<APIresponseModel>{
    return this.http.post<APIresponseModel>(`${this.base_url}/api/Client/InsertClient`,obj);
  }
  
  deleteClientById(id:number):Observable<APIresponseModel>{
  return this.http.delete<APIresponseModel>(`${this.base_url}/api/Client/DeleteClient/${id}`);
}
  getAllEmployee():Observable<APIresponseModel>{
    return this.http.get<APIresponseModel>("api/api/ClientStrive/GetAllEmployee");
  }
  addClientProjectUpdate(obj:Client):Observable<APIresponseModel>{
    return this.http.post<APIresponseModel>("api/api/ClientStrive/AddUpdateClientProject",obj);
  }

}
