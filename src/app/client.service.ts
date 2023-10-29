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
 
  uptadeClient(clienteActualizar : Client){
    this.clientList = this.clientList.map(cliente => cliente.clientId == clienteActualizar.clientId ? clienteActualizar : cliente);
  }
}

