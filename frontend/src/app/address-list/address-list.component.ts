import {Component, OnInit} from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  private addresses: Array<Address> = [];
  private contentLoaded = false;
  private routerLinkDisabled = false;

  constructor(private addressService: AddressService, private router: Router) {
  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(addresses => {
      // console.log(addresses.results);
      addresses.forEach(address => {
        this.addresses.push(
          new Address(address.id, address.country, address.zipcode, address.city, address.street, address.number));
      });
      this.contentLoaded = true;
    });
  }

  getAddresses(): Address[] {
    return this.addresses;
  }

  getContentLoaded(): boolean {
    return this.contentLoaded;
  }

  deleteAddress(addressId: string): void {
    this.setRouterLinkDisabled(true);
    this.addressService.deleteAddress(addressId).subscribe(data => {
      window.location.reload();
    });
  }

  getRouterLinkDisabled(): boolean {
    return this.routerLinkDisabled;
  }

  setRouterLinkDisabled(disabled: boolean): void {
    this.routerLinkDisabled = disabled;
  }

  navigateToAddressDetails(addressId: string): void {
    if (this.getRouterLinkDisabled()) {
      return;
    }
    this.router.navigate(['address', addressId]);
  }

}
