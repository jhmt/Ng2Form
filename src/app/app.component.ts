// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

// Interfaces:
import { User } from './user.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public formGroup: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor (private _fb: FormBuilder) {
  }

  ngOnInit (): void {

  }

  saveUser (user: User, isValid: boolean) {
    this.submitted = true;
    alert(`${user.name} saved`);
  }
}
