import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <header></header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}