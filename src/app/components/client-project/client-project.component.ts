import { Component , inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { APIresponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AlertComponent } from '../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe,DatePipe,AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  projectForm: FormGroup = new FormGroup({
    lientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")

  });
  clientSrv=inject(ClientService);
  employeeList: Employee[]=[];
  clientList: Client[]=[];

  firstName = signal("sss");
  projectList=signal<any>([]);


  ngOnInit(): void {
    const name = this.firstName();
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  changeFname(){
    this.firstName.set("llll");
  }

  getAllClientProject(){
     this.clientSrv.getAllClientProject().subscribe((res:APIresponseModel)=>{
      this.projectList.set(res.data);
    })
  }

  getAllEmployee(){
    this.clientSrv.getAllEmployee().subscribe((res:APIresponseModel)=>{
      this.employeeList=res.data;
    })
  }
   getAllClient(){
    this.clientSrv.getAllClients().subscribe((res:APIresponseModel)=>{
      this.clientList=res.data;
    })
  }
  OnSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res:APIresponseModel)=>{
      if(res.result){
        alert("Project created Successfuly");
      }else{
        alert(res.message);
      }
    })
  }
}
