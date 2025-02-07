import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatTabsModule,
    RouterModule
  ]
})
export class HeaderComponent {}
