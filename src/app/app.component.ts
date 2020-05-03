import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'control-clientes';
  ngOnInit(): void {
    $(document).ready(() => {
      console.log('The document ready!');
    });
  }
}
