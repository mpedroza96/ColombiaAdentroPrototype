import { Component, OnInit } from '@angular/core';
import { Email } from './shared/email';
import { EmailService } from './email.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ColombiaAdentro';

  constructor(private service: EmailService,
    public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'UA-149460609-1',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    });
  }

  email: Email;

  formGroup: FormGroup;

  gracias: boolean;

  createEmail() {
    this.email.email = this.formGroup.value.email;
    console.log(this.formGroup.value)
    this.service.createEmail(this.email).subscribe(
      () => {
        this.gracias = true;
        console.log('creado')
      },
      err => {
        console.log(err);
      }
    );
  }




  ngOnInit() {
    this.email = new Email();
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.gracias = false;
  }
}
