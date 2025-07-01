import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
person0: Person={
  givenName:'chris',
  surName:'frag',
  age:55,
  email:'chfrag@gmail.com',
  address:'newYork'

}
person1: Person = {
  givenName: 'John',
  surName: 'Doe',
  age: 30,
  email: 'jdoe@gmail.com',
  address: 'city'
}
}
