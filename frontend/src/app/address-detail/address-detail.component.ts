import {Component, OnInit} from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  private address: Address;
  private contentLoaded = false;

  constructor(private addressService: AddressService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.addressService.getAddress(id).subscribe(data => {
      this.address = new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number);
      this.contentLoaded = true;
    });
  }

  getAddress(): Address {
    return this.address;
  }

  getContentLoaded(): boolean {
    return this.contentLoaded;
  }

  deleteAddress(addressId: string): void {
    this.addressService.deleteAddress(addressId).subscribe((data => {
      this.router.navigate(['address']);
    }));
  }

}
