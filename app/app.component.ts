import { Component } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  model: any = {};
  countries = ['USA', 'Canada', 'Uk'];
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
