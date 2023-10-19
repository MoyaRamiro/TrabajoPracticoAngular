import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  clientList: Client[] = [];

  private clientId=0;

  getNextId(): number {
    return ++this.clientId;
  }

  getClients(): Client[] {
    return this.clientList;
  }
  
}

interface Client
{
  clientId : number | undefined;
  firstName : string | undefined;
  lastName : string | undefined;
  dni : number | undefined;
  email : string | undefined;
  address : string | undefined;
}  