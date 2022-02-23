import {Component, OnInit} from '@angular/core';
import {AddressService} from '../address.service';
import {Router} from '@angular/router';
import {Address} from '../address';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {

  address = new Address(undefined, '', '', '', '', '');

  submitted = false;

  constructor(private addressService: AddressService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

  createAddress(): void {
    this.addressService.createAddress(this.address).subscribe(data => {
      console.log(data);
      this.router.navigate([data.id]);
    });
  }
}
