import { Component, OnInit } from '@angular/core';
import { GuardService } from './game/core/service/auth.guard';
import { NavbarService } from './game/core/service/navbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private s: NavbarService,
        private g: GuardService
    ) { }
    ngOnInit() {
        this.g.currentUser = 'jeko';
        this.s.updateResources(this.g.currentUser);
    }
}
