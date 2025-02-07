import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showDetails = false;  // Controls the visibility of the details

  toggleDetails() {
    this.showDetails = !this.showDetails;  // Toggle the visibility on click
  }
}
