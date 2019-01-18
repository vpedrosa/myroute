import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm = new FormGroup({
        name: new FormControl(''),
        avatar_url: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private _user_service: UserService, private _router: Router) {
    }

    ngOnInit() {

    }

    onSubmit() {
        this._user_service.register(this.registerForm.value).subscribe(
            result => {
                if (result.id) {
                    this._router.navigate(['/login']);
                }
            }
        );
    }

}
