import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../service/navbar.service';
import { GuardService } from '../../service/auth.guard';
import { NavbarResourceBackEndModel } from '../../const/navbar.const';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public resources: NavbarResourceBackEndModel;

    public isLoading = true;
    public showFood = false;
    public showWood = false;
    public showStone = false;
    public showIron = false;
    public showOre = false;
    public showMitril = false;
    public showPlease = false;
    public showWorkers = false;


    constructor(
        private auth: GuardService,
        private service: NavbarService,
    ) { }

    public ngOnInit(): void {
        this.getResources();


    }

    public getResources(): void {
        // this.service.getResources(this.auth.currentUser)
        this.service.updateResources('jeko');
        this.service.getResources('jeko')
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as NavbarResourceBackEndModel;
                if (!!data && data.status) {
                    this.resources = data;
                    this.isLoading = false;

                    // const timer = +data.refresh * 1000;
                    // Observable.interval(timer)
                    //     .subscribe(() => { this.getResources(); });
                }
            });
    }

    public triggerPopup(selector: string, mode: boolean): void {
        switch (selector) {
            case 'food': {
                this.showFood = mode;
                break;
            }
            case 'wood': {
                this.showWood = mode;
                break;
            }
            case 'stone': {
                this.showStone = mode;
                break;
            }
            case 'iron': {
                this.showIron = mode;
                break;
            }
            case 'ore': {
                this.showOre = mode;
                break;
            }
            case 'mitril': {
                this.showMitril = mode;
                break;
            }
            case 'please': {
                this.showPlease = mode;
                break;
            }
            case 'workers': {
                this.showWorkers = mode;
                break;
            }
        }
    }

}
