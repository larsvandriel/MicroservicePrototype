import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {A} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  private person: Person;
  private contentLoaded = false;

  constructor(private personService: PersonService, private addressService: AddressService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(data => {
      console.log(data);
      this.person = new Person(data.id, data.name, data.email, data.phoneNumber, new Address(data.address.id));
    });
    this.addressService.getAddress(this.person.address.id).subscribe(data => {
      this.person.address = new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number);
      this.contentLoaded = true;
    });
  }

  getPerson(): Person {
    return this.person;
  }

  getContentLoaded(): boolean {
    return this.contentLoaded;
  }

  deletePerson(personId: string): void {
    this.personService.deletePerson(personId).subscribe((data => {
      this.router.navigate(['person']);
    }));
  }

}
