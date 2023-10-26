import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client-model';


@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-edit-component.component.html',
  styleUrls: ['./client-add-edit-component.component.css']
})
export class ClientAddComponentComponent {
                    ///////////
  constructor(private Servicio : ClientService){};



  firstNameInputValue : string = "";
  lastNameInputValue : string = "";
  dniInputValue : number = -1;
  emailInputValue : string = "";
  addressInputValue : string = ""


  addClient(){
    let client = new Client();
    client.clientId = this.Servicio.getNextId();
    client.firstName = this.firstNameInputValue;
    client.lastName = this.lastNameInputValue;
    client.dni = this.dniInputValue;
    client.email = this.emailInputValue;
    client.address = this.addressInputValue;
   


    this.Servicio.addClient(client);
    console.log(this.Servicio.getClients());
  }

  

}
