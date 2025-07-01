import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpersonTemplateDrivenFormsExampleComponent } from './eperson-template-driven-forms-example.component';

describe('EpersonTemplateDrivenFormsExampleComponent', () => {
  let component: EpersonTemplateDrivenFormsExampleComponent;
  let fixture: ComponentFixture<EpersonTemplateDrivenFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpersonTemplateDrivenFormsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpersonTemplateDrivenFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
