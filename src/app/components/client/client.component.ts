import { Component , inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { ClientService } from '../../service/client.service';
import { APIresponseModel } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { AlertComponent } from '../reusableComponents/alert/alert.component';
import { MybuttonComponent } from '../reusableComponents/mybutton/mybutton.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule,AsyncPipe,DatePipe,AlertComponent,MybuttonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj : Client = new Client();
  clientList :Client[]=[];

  clientService=inject(ClientService);

userList$ :Observable<any>=new Observable<any>;



  ngOnInit(): void {
    this.loadClient();
    this.userList$=this.clientService.getAllUsers();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIresponseModel)=>{
      this.clientList=res.data;
    })
  }

  OnSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIresponseModel)=>{
        if(res.result){
          alert("client created success");
          this.loadClient();
          this.clientObj=new Client();
        }else{
          alert(res.message);
        }
    })
  }
  OnDelete(id:number) {

    const isDelete=confirm("Are you sure you want to delete");
    if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res:APIresponseModel)=>{
        if(res.result){
          alert("client deleted success");
          this.loadClient();
         
        }else{
          alert(res.message);
        }
    })
    }


     
  }

  OnEdit(data : Client){
    this.clientObj=data;
  }



}
