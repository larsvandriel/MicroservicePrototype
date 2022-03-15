import {Address} from './address';

export class Person {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: Address;

  constructor(
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    address: Address = null,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
