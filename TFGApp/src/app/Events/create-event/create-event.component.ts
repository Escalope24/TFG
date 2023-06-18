import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { SocialService } from '../social.service';
import { AuthService } from 'src/app/Auth/auth.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  formReg:FormGroup=new FormGroup({
    name:new FormControl(),
    participantes:new FormControl( FormArray),
    value:new FormControl(),
    date:new FormControl(),
    idUser:new FormControl(this._authService.getUserId()),
  })  
  added:boolean=false;
  agregarParticipantes:FormGroup=new FormGroup({
    participante:new FormControl()
  })
  participantes:string[]=[]
  constructor(private _socialService:SocialService, private _authService:AuthService){}

  addParticipante(){
    this.added=false
    let participante=this.agregarParticipantes.value;
    this.participantes.push(participante.participante)
    this.agregarParticipantes.reset()
    this.added=true
  }
  createEvent(){
    if(this.participantes.length>0 && this.formReg.value['name'] && this.formReg.value['value'] && this.formReg.value['date']){
      this.formReg.value['participantes']=this.participantes
      this._socialService.createEvent(this.formReg.value)
      this.formReg.reset()
    }
    else{
      alert('No se puede crear un evento sin rellenar todos campos o añadir participantes')
    }
    console.log(this.formReg.value)
  }
  eliminarUsuario(participante:any){
    let value=this.participantes.indexOf(participante)
    this.participantes.splice(value)
    console.log(this.participantes)
  }

}
