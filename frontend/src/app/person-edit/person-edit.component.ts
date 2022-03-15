import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;
  addresses: Array<Address> = [];

  submitted = false;
  contentLoaded = false;

  constructor(private personService: PersonService, private addressService: AddressService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(data => {
      this.person = new Person(data.id, data.name, data.email, data.phoneNumber, new Address(data.address.id));
    });
    this.addressService.getAddress(this.person.address.id).subscribe(data => {
      this.person.address = new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number);
    });
    this.addressService.getAddresses().subscribe(data => {
      this.addresses.push(
        new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number)
      );
      this.contentLoaded = true;
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  editPerson(): void {
    this.personService.editPerson(this.person).subscribe(data => {
      this.router.navigate(['person', this.person.id]);
    });
  }

}
