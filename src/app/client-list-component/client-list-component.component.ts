import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client-model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent {
  constructor(private clientService : ClientService) {};

  isEditing : boolean = false;
  selectedClient : Client | null = null;
  clientList : Array<Client> = [];

  editForm = new FormGroup({
    firstNameEditValue : new FormControl(''),
    lastNameEditValue : new FormControl(''),
    dniEditValue : new FormControl(''),
    emailEditValue : new FormControl(''),
    addressEditValue : new FormControl('')
  })

  ngOnInit(){
    this.clientList = this.clientService.getClients()
  }

  deleteClient(cliente : Client){
    this.clientService.deleteClient(cliente);
    this.ngOnInit();
  }

  editClient(cliente : Client){

    this.editForm.patchValue({
      firstNameEditValue: cliente.firstName,
      lastNameEditValue: cliente.lastName,
      dniEditValue: cliente.dni?.toString(),
      emailEditValue: cliente.email,
      addressEditValue: cliente.address
    });

    this.isEditing = true;
    this.selectedClient = cliente;
  }

  patchClient(){
    let client = new Client();

    client.clientId = this.selectedClient?.clientId;
    client.firstName = this.editForm.get("firstNameEditValue")?.value!;
    client.lastName = this.editForm.get("lastNameEditValue")?.value!;
    client.dni = Number(this.editForm.get("dniEditValue")?.value!);
    client.email = this.editForm.get("emailEditValue")?.value!;
    client.address = this.editForm.get("addressEditValue")?.value!;

    this.isEditing = false;
    this.selectedClient = null;

    this.clientService.uptadeClient(client);
    this.ngOnInit();
  }
}
