import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;

  constructor(private flashMessages: FlashMessagesService,
              private router: Router,
              private loginService: LoginService) { }
          
  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    })
  }

  registro() {
    this.loginService.registrarse(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.flashMessages.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      });
  }

}
