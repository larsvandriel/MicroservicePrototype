import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from './address';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl = 'http://localhost:7194/api/';

  constructor(private httpClient: HttpClient) {
  }

  getPeople(): Observable<any> {
    const url = this.baseUrl + 'people';
    return this.httpClient.get(url);
  }

  getPerson(personId: string): Observable<any> {
    const url = this.baseUrl + 'people/' + personId;
    return this.httpClient.get(url);
  }

  deletePerson(personId: string): Observable<any> {
    const url = this.baseUrl + 'people/' + personId;
    return this.httpClient.delete(url);
  }

  createPerson(person: Person): Observable<any> {
    const url = this.baseUrl + 'people';
    const body = JSON.stringify(person);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post(url, body, httpOptions);
  }

  editPerson(person: Person): Observable<any> {
    const url = this.baseUrl + 'people/' + person.id;
    const body = JSON.stringify(person);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.put(url, body, httpOptions);
  }
}
