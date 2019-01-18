import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login_form = this.form_builder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    login_error = false;

    constructor(private form_builder: FormBuilder,
                private auth_service: AuthService,
                private router: Router) {
    }

    ngOnInit() {

    }

    onSubmit() {
        if (this.login_form.valid) {
            this.login_error = false;
            this.auth_service.login(this.login_form.value).subscribe((data) => {
                this.router.navigate(['/']);
            }, (error) => {
                console.log(error, typeof error);
                if (error === 'Unauthorized') {
                    this.login_error = true;
                }
            });
        }
    }

}
