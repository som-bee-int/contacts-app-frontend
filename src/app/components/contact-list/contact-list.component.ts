import { Component, inject, OnInit, signal } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, CapitalizePipe],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  private contactService = inject(ContactService);
  
  contacts = toSignal(this.contactService.contacts$, { initialValue: [] as Contact[] });
  selectedContact = signal<Contact | null>(null);
  isModalOpen = signal(false);
  isDeleteModalOpen = signal(false);
  contactToDeleteId = signal<number | null>(null);

  openCreateModal(): void {
    this.selectedContact.set({ firstName: '', lastName: '', email: '', isActive: true });
    this.isModalOpen.set(true);
  }

  openEditModal(contact: Contact): void {
    this.selectedContact.set({ ...contact });
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.selectedContact.set(null);
    this.isModalOpen.set(false);
  }

  onSave(contact: Contact): void {
    if (contact.id) {
      this.contactService.updateContact(contact);
    } else {
      this.contactService.createContact(contact);
    }
    this.closeModal();
  }


  onDelete(id: number): void {
    this.contactToDeleteId.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen.set(false);
    this.contactToDeleteId.set(null);
  }

  confirmDelete(): void {
    if (this.contactToDeleteId()) {
      this.contactService.deleteContact(this.contactToDeleteId()!);
      this.closeDeleteModal();
    }
  }

}