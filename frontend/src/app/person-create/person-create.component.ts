import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {Router} from '@angular/router';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  addresses: Array<Address> = [];

  person = new Person(undefined, '', '', '', new Address(undefined, '', '', '', '', ''));

  submitted = false;

  constructor(private addressService: AddressService, private personService: PersonService, private router: Router) {
  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(addresses => {
      addresses.forEach(data => {
        this.addresses.push(
          new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number)
        );
      });
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  createPerson(): void {
    this.personService.createPerson(this.person).subscribe(data => {
      console.log(data);
      this.router.navigate(['person', data.id]);
    });
  }

}
