import { Component,Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person| EPerson |  undefined
  name= "Maria"
  person={
    givenName:"Maria",
    surName:"Vracha",
    age:20,
    email:'mariavrx36@aueb.gr'

  }

}
