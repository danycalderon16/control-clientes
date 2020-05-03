import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from '../../modelo/configuracion.model';
import { ConfiguracionServicio } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  permitirRegistro = false;

  constructor( private router: Router,
    private configuracionServicio:ConfiguracionServicio) { }

  ngOnInit(): void {
    this.configuracionServicio.getConfiguracion().subscribe(
      (config: Configuracion) =>{
        this.permitirRegistro = config.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = { permitirRegistro: this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
