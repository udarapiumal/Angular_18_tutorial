import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http=inject(HttpClient);

  roleList : IRole [] = [];

ngOnInit(): void {
  this.getAllRoles();
}

getAllRoles(){
 this.http.get("/api/api/ClientStrive/GetAllRoles")
.subscribe((res:any)=>{
    this.roleList=res.data;
  })
}



  // firstName : string = "Angular Version";
  // isActive : boolean = true;
  // number : number = 15;
  // Date : Date=new Date;
  // type : string= "checkbox";
  // selectedString : String = "sd";

}
