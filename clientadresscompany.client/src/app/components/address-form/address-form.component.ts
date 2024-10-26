import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../interfaces/Address.interface';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  @Input() clientId!: string;
  address: Address = {
    id: 0,
    clientId: 0,
    street: '',
    city: '',
    state: '',
    zipCode: '',
  };
  isEditMode = false;
  error = false;
  streetError = false;
  cityError = false;
  stateError = false;
  zipCodeError = false;

  constructor(
    private addressService: AddressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('addressId');
    const idClient = this.route.snapshot.paramMap.get('clientId');
    this.clientId = this.route.snapshot.paramMap.get('clientId')!;
    this.address.clientId = parseInt(idClient || '0');
    this.isEditMode = !!id;
    if (this.isEditMode && id) {
      this.addressService.getAddressById(id).subscribe((addresses) => {
        this.address = addresses;
      });
    }
  }

  saveAddress(): void {
    this.streetError = this.address.street.length < 3;
    this.cityError = this.address.city.length < 3;
    this.stateError = this.address.state.length < 3;
    this.zipCodeError = this.address.zipCode.length < 3;

    if (this.streetError || this.cityError || this.stateError || this.zipCodeError) {
      this.error = true;
      return;
    }

    if (this.isEditMode) {
      this.addressService
        .updateAddress(this.address.id, this.address)
        .subscribe(() => {
          this.router.navigate([`/clients/${this.clientId}/addresses`]);
        });
    } else {
      this.addressService.createAddress(this.address).subscribe(() => {
        this.router.navigate([`/clients/${this.clientId}/addresses`]);
      });
    }
  }
}