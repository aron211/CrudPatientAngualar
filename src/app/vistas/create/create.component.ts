import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { ApiService } from '../../services/api/api.service'
import { pacienteI } from '../../modelos/paciente.interface'
import { AlertasService } from '../../services/alertas/alertas.service'
import { ResponseI } from '../../modelos/response.interface'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newForm = new FormGroup ({
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

  constructor(private api:ApiService, private activerouter:ActivatedRoute, private router:Router, private alertas:AlertasService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.newForm.patchValue({
      'token' : token
    });
  }

  postForm(form: any){
    console.log(form)
    this.api.postPatient(form).subscribe(data =>{
        // console.log(data)
        let respuesta:ResponseI =data
        if(respuesta.status=='ok'){
          this.alertas.showSuccess('Paciente Agregado Exitosamente', 'Exito!!')
          this.close();
        }else{
          this.alertas.showError(respuesta.result.error_msg, 'Error')
        }
        this.close();
    })
  }

  close(){
    this.router.navigate(['dashboard'])
  }

}
