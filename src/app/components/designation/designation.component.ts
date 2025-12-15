import { Component , inject , OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIresponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
   masterService = inject(MasterService);
   isLoader : boolean = true;

    designationList : IDesignation [] =[];


   ngOnInit(): void {
     this.masterService.getDesignation().subscribe((res:APIresponseModel)=>{
      this.designationList = res.data;
      this.isLoader=false;
     } , error=>{
      alert("API error/network Down");
     })
   }


}
