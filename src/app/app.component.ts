import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PullRequestsComponent } from './pull-requests/pull-requests.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PullRequestsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto';
  showFilter = true;

  toggleFilter() {
    this.showFilter = !this.showFilter
  }
}
