import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { LoginI } from '../../modelos/login.interface'
import { ResponseI } from '../../modelos/response.interface'
import { listaPacienteI } from '../../modelos/listaPaciente.interface'
import { pacienteI } from '../../modelos/paciente.interface'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url:string = "https://localhost:44306/swagger/index.html"
  url:string = "https://api.solodata.es/"

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllPatients(page:number):Observable<listaPacienteI[]>{
    let direccion = this.url + "pacientes?page=" +page;
    return this.http.get<listaPacienteI[]>(direccion);
  }

  getPatient(id:string):Observable<pacienteI>{
    let direccion = this.url + "pacientes?id=" + id;
    return this.http.get<pacienteI>(direccion);
  }
  putPatient(form:pacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    return this.http.put<ResponseI>(direccion, form);
  }
  delete(form:pacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes"; 
    let Options = {
      headers: new HttpHeaders({
      'content-Type': 'application/json'
    }),
    body:form
  }
    return this.http.delete<ResponseI>(direccion, Options)
  }
}
