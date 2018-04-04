import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginAccountFormModel, LoginAccountDataModel } from './login-account.models';

import { LoginService } from '../../game/core/service/login.service';
import { ToastService } from '../../game/core/service/toast.service';
import { LocalStorageService } from '../../game/core/service/local-storage.service';
import { BackEndLoginResponse } from '../../game/core/const/back-end';
import { GuardService } from '../../game/core/service/auth.guard';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private guard: GuardService,
        private message: ToastService,
        private loginService: LoginService,
        private storageService: LocalStorageService,
    ) { }

    public ngOnInit(): void {
        this.createFormGroup();

        const userSaved = JSON.parse(this.storageService.getUser()) as LoginAccountDataModel;
        if (!!userSaved) {
            this.loginService.executeLogin(userSaved)
                .subscribe((res: any) => {
                    const data = JSON.parse(res._body) as BackEndLoginResponse;
                    if (data.status) {
                        this.guard.login(data.username, data.path, new Date());
                        this.guard.currentUser = 'jeko';
                        this.router.navigate([`game/${data.path}`]);
                    } else {
                        this.message.error('Data corrupted, clean your cache');
                    }
                });
        }
    }

    public createFormGroup(): void {
        this.formGroup = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            rememberMe: false
        });
    }

    public onLoginClick(): void {
        if (this.formGroup.valid) {
            const data = this.formGroup.value as LoginAccountFormModel;
        } else {
            this.message.warning('Empty field not allowed');
        }
    }

    public onCreateAccount(): void {
        this.router.navigate(['create-account']);
    }

}
