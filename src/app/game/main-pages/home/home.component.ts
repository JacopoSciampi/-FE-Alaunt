import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/service/home.service';
import { HomeModelsFromBE } from './home.models';
import { GuardService } from '../../core/service/auth.guard';
import { ToastService } from '../../core/service/toast.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public data: HomeModelsFromBE;
    public isRequestLoading = true;

    constructor(
        private ms: ToastService,
        private guard: GuardService,
        private service: HomeService,
    ) { }

    ngOnInit() {
        this.guard.currentUser = 'jeko';
        this.service.getRiepilogo(this.guard.currentUser)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as HomeModelsFromBE;
                if (!!data && data.status) {
                    this.data = data;
                    this.isRequestLoading = false;
                } else {
                    this.ms.error(data.message);
                }
            });
    }

}
