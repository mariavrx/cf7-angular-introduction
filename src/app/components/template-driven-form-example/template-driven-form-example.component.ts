import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormsExampleComponent } from '../eperson-template-driven-forms-example/eperson-template-driven-forms-example.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
@Component({
  selector: 'app-template-driven-form-example',
  imports: [EpersonTemplateDrivenFormsExampleComponent, PersonTableComponent,SimpleDatatableComponent],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})
export class TemplateDrivenFormExampleComponent {

}
