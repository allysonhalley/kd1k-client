import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title :string = 'kd1k-client';
}
