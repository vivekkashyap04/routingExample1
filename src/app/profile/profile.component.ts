import { Component, OnInit } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { MathesComponent } from '../mathes/mathes.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
