import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule,DesignationComponent,RolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent : string = "Roles"

  changeTab(message : string){
    this.currentComponent=message;
  }
}
