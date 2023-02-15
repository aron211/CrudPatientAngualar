import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service'
import { Router } from '@angular/router'
import { listaPacienteI } from '../../modelos/listaPaciente.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { 
  }
  pacientes:listaPacienteI[] | undefined;

  ngOnInit(): void {
    this.api.getAllPatients(3).subscribe(data =>{
      this.pacientes=data
      // console.log(data)
    })
  }

  editPatient(id: any){
    this.router.navigate(['edit', id])
    // console.log(id)
  }

  newPatient(){
    this.router.navigate(['create'])
  }

}
