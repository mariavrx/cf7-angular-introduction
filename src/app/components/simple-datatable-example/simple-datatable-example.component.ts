import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson'; 


@Component({
  selector: 'app-simple-datatable-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;

  showPersonClicked(person: EPerson){
    console.log("Component Output", person);
    alert(this.personTemplate(person));
  }
  personTemplate(person: EPerson) {
    return`Person Details
    
    First Name:${person.givenName}
    Last Name:${person.surName}
    Age Name:${person.age}
    Email:${person.email}
    Education:${person.education}`
  }


}

