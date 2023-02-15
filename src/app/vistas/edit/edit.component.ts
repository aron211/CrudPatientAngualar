import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router'
import { ApiService } from '../../services/api/api.service'
import { pacienteI } from '../../modelos/paciente.interface'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private api:ApiService, private activerouter:ActivatedRoute, private router:Router) { }

  datosPacientes:pacienteI | undefined;
  editForm = new FormGroup ({
    pacienteId :  new FormControl(''), 
    dni : new FormControl(''),
    nombre : new FormControl(''),
    direccion : new FormControl(''),
    codigoPostal : new FormControl(''),
    telefono :  new FormControl(''),
    genero : new FormControl(''),
    fechaNacimiento :  new FormControl(''),
    correo : new FormControl(''),
    token :  new FormControl(''),

  })

  ngOnInit(): void {
    let pacienteid = this.activerouter.snapshot.paramMap.get('id')!;
    let token = this.getToken();
    this.api.getPatient(pacienteid).subscribe(data => {
      this.datosPacientes = data[0]
      console.log(this.datosPacientes)
      this.editForm.setValue({
        'pacienteId' : pacienteid,
        'dni' : this.datosPacientes?.DNI!,
        'nombre' : this.datosPacientes?.Nombre!, 
        // 'nombre': this.datosPacientes[0].Nombre
        'direccion' : this.datosPacientes?.Direccion!,
        'codigoPostal' : this.datosPacientes?.CodigoPostal!,
        'telefono' : this.datosPacientes?.Telefono!,
        'genero' : this.datosPacientes?.Genero!,
        'fechaNacimiento' : this.datosPacientes?.FechaNacimiento!,
        'correo' : this.datosPacientes?.Correo!,
        'token' : token,
      })
      console.log(this.editForm.value)
    })
    // console.log(pacienteid)
    // console.log(token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form: any){
    this.api.putPatient(form).subscribe(data =>{
        console.log(data)
        this.close();
    })
  }
  delete(){
    // console.log('eliminado')
    let datos:any = this.editForm.value;
    this.api.delete(datos).subscribe(data =>{
      console.log(data)
      this.close();
    });
  }
  close(){
    this.router.navigate(['dashboard'])
  }

}
