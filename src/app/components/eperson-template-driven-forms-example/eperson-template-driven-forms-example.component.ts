import { Component } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-eperson-template-driven-forms-example',
  imports: [FormsModule,MatSelectModule,MatInputModule,MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-template-driven-forms-example.component.html',
  styleUrl: './eperson-template-driven-forms-example.component.css'
})
export class EpersonTemplateDrivenFormsExampleComponent {

}
