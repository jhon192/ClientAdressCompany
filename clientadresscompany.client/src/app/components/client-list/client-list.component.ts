import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../interfaces/Client.interface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clients: Client[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.http.get<Client[]>('/api/clients').subscribe(
      (response) => {
        this.clients = response;
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

  viewAddresses(clientId: number): void {
    this.router.navigate([`/clients/${clientId}/addresses`]);
  }

  editClient(clientId: number): void {
    this.router.navigate([`/clients/edit/${clientId}`]);
  }

  deleteClient(clientId: number): void {
    this.http.delete(`/api/clients/${clientId}`).subscribe(
      () => {
        this.clients = this.clients.filter(client => client.id !== clientId);
        console.log('Cliente eliminado correctamente');
      },
      (error) => {
        console.error('Error al eliminar el cliente:', error);
      }
    );
  }
}
