import { Component, OnInit } from '@angular/core';
import { PkService } from './../pk.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  
pk:any[]=[];
  
  constructor(private _servicio:PkService) {
   
      this.pk=_servicio.obtenerPk();
   }
    

  ngOnInit() {
  }

}
