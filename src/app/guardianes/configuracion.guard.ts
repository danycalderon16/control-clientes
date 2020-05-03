import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfiguracionServicio } from '../servicios/configuracion.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate{

  constructor(private router: Router,
              private confiServicio: ConfiguracionServicio){}

  canActivate(): Observable<boolean> {
    return this.confiServicio.getConfiguracion().pipe(
      map( configuracion => {
        if(configuracion.permitirRegistro){
          return true;
        }
        else{
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
