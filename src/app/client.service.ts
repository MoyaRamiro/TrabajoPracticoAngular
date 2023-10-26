import { Injectable } from '@angular/core';
import { Client } from './models/client-model';


@Injectable({
  providedIn: 'root'
})


export class ClientService {


  private clientList: Client[] = [];


  private clientId=0;


  getNextId(): number {
    return ++this.clientId;
  }


  getClients(): Client[] {
    return this.clientList;
  }


  addClient(cliente : Client){
    this.clientList.push(cliente);
  }

  deleteClient(cliente : Client){
    this.clientList = this.clientList.filter(element => element != cliente);
  }
 
  editClient(){
    let editP = document.querySelector("#editP") as HTMLParagraphElement;

    editP.innerHTML = "<form> <b>EDITAR:</b> <br><br> <b>Nombre: </b><input type='text' placeholder='firstName' name='firstNameInput' [(ngModel)]='firstNameEditValue'> <br><br> <b>Apellido: </b> <input type='text' placeholder='lastName' name='lastNameInput' [(ngModel)]='lastNameEditValue'> <br><br> <b>Dni: </b> <input type='text' placeholder='dni' name='dniInput' [(ngModel)]='dniEditValue'> <br><br> <b>Email: </b> <input type='text' placeholder='email' name='emailInput' [(ngModel)]='emailEditValue'> <br><br> <b>Address: </b> <input type='text' placeholder='address' name='addressInput' [(ngModel)]='addressEditValue'> <br><br> <button type='submit' id='clienteSubmit' (click)='addClient()'>ENVIAR</button> </form>";
  }
}

