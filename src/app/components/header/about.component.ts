import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true, // Mark as standalone component
  imports: [
    MatToolbarModule,
    MatTabsModule,
    RouterModule
  ]
})
export class AboutComponent { }
