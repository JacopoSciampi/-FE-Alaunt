import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';

import { NavMenuComponent } from './core/component/nav-menu/nav-menu.component';
import { LoginService } from './core/service/login.service';
import { LoginAccountDataModel } from '../init/login/login-account.models';
import { BackEndLoginResponse } from './core/const/back-end';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    @ViewChild('navMenu') menuComponent: NavMenuComponent;

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }

    public ngOnInit(): void {
        this.menuComponent.$navigateTo
            .subscribe(url => {
                this.navigateTo(`game/${url}`);
            });
    }

    public navigateTo(url: string): void {
        this.router.navigate([url]);
    }
}
