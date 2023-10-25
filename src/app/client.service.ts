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
 
}
