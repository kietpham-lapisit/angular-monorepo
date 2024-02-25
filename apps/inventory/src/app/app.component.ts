import { Component } from '@angular/core';
import { ProductListComponent } from '@angular-monorepo/products';

@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
