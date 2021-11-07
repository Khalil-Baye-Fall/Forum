import { Component } from '@angular/core';
import { AuthServiceService } from './Auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forum';

  constructor(
    private authService: AuthServiceService
  ){

  }
}
