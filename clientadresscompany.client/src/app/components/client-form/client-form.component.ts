import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../interfaces/Client.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  client: Client = { id: 0, name: '', email: '', phoneNumber: '' };
  isEditMode = false;
  nameError = false;
  emailError = false;
  phoneNumberError = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id;

    if (this.isEditMode && id) {
      this.clientService.getClientById(id).subscribe((data) => (this.client = data));
    }
  }

  saveClient(): void {

    this.nameError = this.client.name.length < 3;
    this.emailError = this.client.email.length < 3;
    this.phoneNumberError = this.client.phoneNumber.length < 3;

    if (this.nameError || this.emailError || this.phoneNumberError) {
      return;
    }

    if (this.isEditMode) {
      this.clientService.updateClient(this.client.id, this.client).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    } else {
      this.clientService.createClient(this.client).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    }
  }
}
