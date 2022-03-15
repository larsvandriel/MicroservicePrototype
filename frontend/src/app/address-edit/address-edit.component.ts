import {Component, OnInit} from '@angular/core';
import {Address} from '../address';
import {AddressService} from '../address.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  address: Address;

  submitted = false;
  contentLoaded = false;

  constructor(private addressService: AddressService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.addressService.getAddress(id).subscribe(data => {
      this.address = new Address(data.id, data.country, data.zipcode, data.city, data.street, data.number);
      this.contentLoaded = true;
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  editAddress(): void {
    this.addressService.editAddress(this.address).subscribe(data => {
      this.router.navigate(['address', this.address.id]);
    });
  }

}
