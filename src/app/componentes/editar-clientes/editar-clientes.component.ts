import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  id: string;

  constructor(private clientesService: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesService.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  guardar({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Por favor llena el formulario coretamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    }
    else {
      value.id = this.id;
      //modificar el cliente
      this.clientesService.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar() {
    if(confirm('¿Seguro de que desea eliminar el cliente?')){

      this.clientesService.eliminarCliente(this.cliente);
      this.router.navigate(['/']);

      }
    }
}
