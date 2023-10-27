import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client-model';
import { ClientAddComponentComponent } from '../client-add-edit-component/client-add-edit-component.component';



@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent {
  constructor(private clientService : ClientService, private ClientAdd : ClientAddComponentComponent) {};

  clientList : Array<Client> = [];

  ngOnInit(){
    this.clientList = this.clientService.getClients()
  }

  deleteClient(cliente : Client){
    this.clientService.deleteClient(cliente);
    this.ngOnInit();
  }

  editClient(cliente : Client){
    this.ClientAdd.editClient(cliente);
  }
}
