import { Component } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-component.component.html',
  styleUrls: ['./client-add-component.component.css']
})
export class ClientAddComponentComponent {
                    ///////////
  constructor(private Servicio : ClientService){}

  firstNameInputValue : string | undefined;
  lastNameInputValue : string | undefined;
  dniInputValue : number | undefined;
  emailInputValue : string | undefined;
  addressInputValue : string | undefined;

  addClient(){
    let client = {
      clientId : this.Servicio.getNextId(),
      firstName: this.firstNameInputValue,
      lastName: this.lastNameInputValue,
      dni: this.dniInputValue,
      email: this.emailInputValue,
      address: this.addressInputValue
    }

    this.Servicio.clientList.push(client);
  }
}
