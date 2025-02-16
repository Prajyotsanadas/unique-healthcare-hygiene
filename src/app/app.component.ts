import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking this component as standalone
  imports: [RouterOutlet, HeaderComponent, FooterComponent],  // Import necessary components here
  templateUrl: './app.component.html',  // HTML Template that links to your layout
  styleUrls: ['./app.component.scss']  // Styles for the app component
})
export class AppComponent {
  // This component handles rendering the header, footer, and dynamically the main content via router-outlet
}
