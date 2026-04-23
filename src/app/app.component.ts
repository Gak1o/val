import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
