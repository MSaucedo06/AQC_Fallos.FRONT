import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FallasComponent } from "./components/fallas/fallas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FallasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aqc_fallos';
}
