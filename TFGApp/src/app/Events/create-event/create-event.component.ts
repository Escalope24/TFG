import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SocialService } from '../social.service';
import { AuthService } from 'src/app/Auth/auth.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit{
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
  dateMin:string=''
  participantes:string[]=[]
  showNavigationBar:boolean=false;
  constructor(private _socialService:SocialService, private _authService:AuthService, private _router:Router){}

  ngOnInit(): void {
    const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
    const date=new Date().getDate()+1;
      if(month<10){
        this.dateMin=year+'-'+0+month+'-'+date
      }
      else{
        this.dateMin=year+'-'+month+'-'+date
      }
  }
  addParticipante(){
    this.added=false
    let participante=this.agregarParticipantes.value;
    this.participantes.push(participante.participante)
    this.agregarParticipantes.reset()
    this.added=true
  }
  createEvent(){
    if(this.participantes.length>0 && this.formReg.value['name'] && this.formReg.value['value'] && this.formReg.value['date']){
      this.formReg.value['participantes']=this.participantes;
      this._socialService.createEvent(this.formReg.value).then(()=>{
        this._router.navigate([CONSTANTS.ROUTES.EVENTS.SOCIAL])
      })
    }
    else{
      alert('No se puede crear un evento sin rellenar todos campos o añadir participantes')
    }
  }
  eliminarUsuario(participante:any){
    let value=this.participantes.indexOf(participante)
    this.participantes.splice(value)
  }
  showNavigation(){
    this.showNavigationBar=true;

  }
  leaveNavigation(){
    this.showNavigationBar=false
  }

}
