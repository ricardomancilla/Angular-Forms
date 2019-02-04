import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {

  constructor() { }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
  }
}
