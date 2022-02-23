import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = 'https://localhost:7176/api/';

  constructor(private httpClient: HttpClient) {
  }

  getAddresses(): Observable<any> {
    const url = this.baseUrl + 'address';
    return this.httpClient.get(url);
  }

  getAddress(addressId: string): Observable<any> {
    const url = this.baseUrl + 'address/' + addressId;
    return this.httpClient.get(url);
  }

  deleteAddress(addressId: string): Observable<any> {
    const url = this.baseUrl + 'address/' + addressId;
    return this.httpClient.delete(url);
  }

  createAddress(address: Address): Observable<any> {
    const url = this.baseUrl + 'address';
    const body = JSON.stringify(address);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post(url, body, httpOptions);
  }

  editAddress(address: Address): Observable<any> {
    const url = this.baseUrl + 'address/' + address.id;
    const body = JSON.stringify(address);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.put(url, body, httpOptions);
  }
}
