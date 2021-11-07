import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  model: any = {};
  errorMessage = '';

  constructor(
    private authService: AuthServiceService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  Login(){

    this.authService.logIn(this.model).subscribe( 
      
      res => {
        // console.log(res);
        this.route.navigate(['/home']);

    },
    err => {
      // console.log(err);
      this.errorMessage = 'Oups! Something goes wrong! Please try it again.';
    }
    )

}

}
