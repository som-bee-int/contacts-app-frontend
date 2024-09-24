import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl: string;
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = `${this.config.getApiUrl()}/contacts`;
    this.loadContacts();
  }

   loadContacts(): void {
    this.http.get<Contact[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error loading contacts', error);
        return [];
      })
    ).subscribe(contacts => this.contactsSubject.next(contacts));
  }

  searchContacts(term: string): void {
    const params = new HttpParams().set('search', term);
    this.http.get<Contact[]>(this.apiUrl, { params }).pipe(
      tap(contacts => this.contactsSubject.next(contacts)),
      catchError(error => {
        console.error('Error searching contacts', error);
        return [];
      })
    ).subscribe();
  }

  createContact(contact: Contact): void {
    this.http.post<Contact>(this.apiUrl, contact).pipe(
      tap(() => this.loadContacts()),
      catchError(error => {
        console.error('Error creating contact', error);
        return [];
      })
    ).subscribe();
  }

  updateContact(contact: Contact): void {
    this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact).pipe(
      tap(() => this.loadContacts()),
      catchError(error => {
        console.error('Error updating contact', error);
        return [];
      })
    ).subscribe();
  }

  deleteContact(id: number): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadContacts()),
      catchError(error => {
        console.error('Error deleting contact', error);
        return [];
      })
    ).subscribe();
  }
}