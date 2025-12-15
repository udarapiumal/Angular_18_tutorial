import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getDesignation():Observable<APIresponseModel> {
    return this.http.get<APIresponseModel>("api/api/ClientStrive/GetAllDesignation")
  }
}
