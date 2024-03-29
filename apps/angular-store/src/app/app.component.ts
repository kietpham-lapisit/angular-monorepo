import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-store';
}
