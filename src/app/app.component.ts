import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/header/about.component';  // Correct import path
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking this component as standalone
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LandingComponent, AboutComponent],  // Import necessary components here
  templateUrl: './app.component.html',  // HTML Template that links to your layout
  styleUrls: ['./app.component.scss']  // Styles for the app component
})
export class AppComponent {
  // This component handles rendering the header, footer, and dynamically the main content via router-outlet
}
