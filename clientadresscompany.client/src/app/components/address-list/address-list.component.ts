import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../interfaces/Address.interface';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {
  addresses: Address[] = [];
  clientId: string | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    if (this.clientId) {
      this.getAddresses();
    }
  }

  getAddresses(): void {
    this.http.get<Address[]>(`/api/clients/${this.clientId}/addresses`).subscribe(
      (response) => {
        this.addresses = response;
      },
      (error) => {
        console.error('Error al obtener las direcciones:', error);
      }
    );
  }

  createAddress(): void {
    this.router.navigate([`/clients/${this.clientId}/addresses/create`]);
  }

  editAddress(addressId: number): void {
    this.router.navigate([`/clients/${this.clientId}/addresses/edit/${addressId}`]);
  }

  deleteAddress(addressId: number): void {
    this.http.delete(`/api/clients/${this.clientId}/addresses/${addressId}`).subscribe(
      () => {
        this.addresses = this.addresses.filter(address => address.id !== addressId);
        console.log('Dirección eliminada correctamente');
      },
      (error) => {
        console.error('Error al eliminar la dirección:', error);
      }
    );
  }
}
