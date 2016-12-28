// Angular:
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Interfaces:
import { User } from './user.interface';

@Component({
  moduleId: 'myApp',
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor (private _fb: FormBuilder) {
  }

  ngOnInit (): void {
    this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['']
            })
        });
  }

  saveUser (user: User, isValid: boolean) {
    this.submitted = true;
    alert(`${user.name} saved`);
  }
}
