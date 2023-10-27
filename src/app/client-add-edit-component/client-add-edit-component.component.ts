import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client-model';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-edit-component.component.html',
  styleUrls: ['./client-add-edit-component.component.css']
})
export class ClientAddComponentComponent {
                    ///////////
  constructor(private Servicio : ClientService){};

  studentForm = new FormGroup({
    firstNameInputValue : new FormControl(''),
    lastNameInputValue : new FormControl(''),
    dniInputValue : new FormControl(''),
    emailInputValue : new FormControl(''),
    addressInputValue : new FormControl('')
  })

  


  addClient(){
    let client = new Client();
    client.clientId = this.Servicio.getNextId();
    client.firstName = this.studentForm.get("firstNameInputValue")?.value!;
    client.lastName = this.studentForm.get("lastNameInputValue")?.value!;
    client.dni = Number(this.studentForm.get("dniInputValue")?.value!);
    client.email = this.studentForm.get("emailInputValue")?.value!;
    client.address = this.studentForm.get("addressInputValue")?.value!;
   
    let cartelAdd = document.getElementById("addCartel") as HTMLParagraphElement
    cartelAdd.innerHTML = "AÑADIR";

    this.Servicio.addClient(client);
    console.log(this.Servicio.getClients());
  }

  editClient(cliente : Client){

    let cartelAdd = document.getElementById("addCartel") as HTMLParagraphElement
    cartelAdd.innerHTML = "EDITAR";

    this.studentForm.setValue({
      'firstNameInputValue' : cliente.firstName!,
      'lastNameInputValue' : cliente.lastName!,
      'dniInputValue' : cliente.dni!.toString(),
      'emailInputValue' : cliente.address!,
      'addressInputValue' : cliente.address!
    })

    this.Servicio.getClients().indexOf(cliente);

  }

  

}
