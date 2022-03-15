import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {Router} from '@angular/router';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  private people: Array<Person> = [];
  private contentLoaded = false;
  private routerLinkDisabled = false;

  constructor(private personService: PersonService, private router: Router) {
  }

  ngOnInit(): void {
    this.personService.getPeople().subscribe(people => {
      // console.log(addresses.results);
      people.forEach(person => {
        this.people.push(
          new Person(person.id, person.name, person.email, person.phoneNumber));
      });
      this.contentLoaded = true;
    });
  }

  getPeople(): Person[] {
    return this.people;
  }

  getContentLoaded(): boolean {
    return this.contentLoaded;
  }

  deletePerson(personId: string): void {
    this.setRouterLinkDisabled(true);
    this.personService.deletePerson(personId).subscribe(data => {
      window.location.reload();
    });
  }

  getRouterLinkDisabled(): boolean {
    return this.routerLinkDisabled;
  }

  setRouterLinkDisabled(disabled: boolean): void {
    this.routerLinkDisabled = disabled;
  }

  navigateToPersonDetails(personId: string): void {
    if (this.getRouterLinkDisabled()) {
      return;
    }
    this.router.navigate(['person', personId]);
  }

}
