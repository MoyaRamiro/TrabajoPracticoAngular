import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client-model';


@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent {
  constructor(private clientService : ClientService) {}


  clientList : Array<Client> = [];


  ngOnInit(){
    this.clientList = this.clientService.getClients()
  }
}
