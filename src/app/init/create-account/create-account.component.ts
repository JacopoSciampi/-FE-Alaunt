import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CreateAccountFormModel } from './create-account.models';
import { BackEndRegistrateResponse } from '../../game/core/const/back-end';

import { GuardService } from '../../game/core/service/auth.guard';
import { ToastService } from '../../game/core/service/toast.service';
import { NewAccountService } from '../../game/core/service/new-account.service';
import { LocalStorageService } from '../../game/core/service/local-storage.service';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private guard: GuardService,
        private message: ToastService,
        private accountService: NewAccountService,
        private storageService: LocalStorageService,
    ) { }

    public ngOnInit(): void {
        this.createFormGroup();
    }

    public createFormGroup(): void {
        this.formGroup = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            rememberMe: false
        });
    }

    public onCreateAccountClick(): void {
        if (this.formGroup.valid) {
            const user = this.formGroup.value as CreateAccountFormModel;
            this.accountService.createNewUser(user)
                .subscribe((res: any) => {
                    const data = JSON.parse(res._body) as BackEndRegistrateResponse;
                    if (!!data && data.status) {
                        if (user.rememberMe) {
                            this.storageService.addItem('user', JSON.stringify(user));
                        }
                        this.guard.login(user.username, 'home', new Date());
                        this.router.navigate(['game/home']);
                    } else {
                        this.message.error(data.message);
                    }
                });
        } else {
            this.message.warning('Invalid data');
        }
    }

}
