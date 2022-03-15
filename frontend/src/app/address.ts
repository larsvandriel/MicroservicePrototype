export class Address {
  id: string;
  country: string;
  zipcode: string;
  city: string;
  street: string;
  number: string;

  constructor(
    id: string,
    country: string = '',
    zipcode: string = '',
    city: string = '',
    street: string = '',
    // tslint:disable-next-line:variable-name
    _number: string = ''
  ) {
    this.id = id;
    this.country = country;
    this.zipcode = zipcode;
    this.city = city;
    this.street = street;
    this.number = _number;
  }

  ToString(): string
  {
    return this.zipcode + ' ' + this.city + ' ' + this.street + ' ' + this.number;
  }
}
