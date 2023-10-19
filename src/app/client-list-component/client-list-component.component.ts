import { Component } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent {
  constructor(private clientService : ClientService) {}


  showClients(){
    let table = document.querySelector("tbody") as HTMLTableSectionElement;
    table.innerHTML = "";

    this.clientService.clientList.forEach(element => {
      
      let clientTr = document.createElement("tr");

      let id = document.createElement("td");
      id.textContent = element.clientId?.toString() ?? "NO EXISTE";

      let firstName = document.createElement("td");
      firstName.textContent = element.firstName ?? "NO EXISTE";

      let lastName = document.createElement("td");
      lastName.textContent = element.lastName ?? "NO EXISTE";

      let dni = document.createElement("td");
      dni.textContent = element.dni?.toString() ?? "NO EXISTE";

      let email = document.createElement("td");
      email.textContent = element.email ?? "NO EXISTE";

      let address = document.createElement("td");
      address.textContent = element.address ?? "NO EXISTE";

      clientTr.appendChild(id);
      clientTr.appendChild(firstName);
      clientTr.appendChild(lastName);
      clientTr.appendChild(dni);
      clientTr.appendChild(email);
      clientTr.appendChild(address);
      table.appendChild(clientTr);
    });
  }
}


