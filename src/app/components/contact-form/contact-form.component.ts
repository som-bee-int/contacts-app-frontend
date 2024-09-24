import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnChanges {
  @Input() contact!: Contact;
  @Output() save = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter<void>();


  contactForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      isActive: [true]
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contact'] && this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      const updatedContact: Contact = {
        ...this.contact,
        ...this.contactForm.value
      };
      this.save.emit(updatedContact);
    }
  }


  onCancel(): void {
    this.cancel.emit();
  }
}

