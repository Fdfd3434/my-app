import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CarComponent, FormsModule, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
