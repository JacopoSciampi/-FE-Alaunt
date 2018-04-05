import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ArmyService } from '../../core/service/army.service';
import { GuardService } from '../../core/service/auth.guard';
import { BackEndBuildResponce } from '../../core/const/building.const';
import { BuildService } from '../../core/service/build.service';
import { ToastService } from '../../core/service/toast.service';
import { AccademyModelsBE } from './army.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-army',
    templateUrl: './army.component.html',
    styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
    public level: BackEndBuildResponce;
    public mainLevel: number;
    public isRequestLoading = true;
    public updateFormGroup: FormGroup;

    public accademy: AccademyModelsBE;

    public accademyStringTime: string;
    public canShowDataInfoAccademy = false;

    constructor(
        private g: GuardService,
        private fb: FormBuilder,
        private mg: ToastService,
        private service: ArmyService,
        private buildService: BuildService,
    ) { }

    public ngOnInit(): void {
        this.createFormGroup();
        this.g.currentUser = 'jeko';
        Observable.zip(
            this.service.getMainLevel(this.g.currentUser),
            this.buildService.getbuildLevel(this.g.currentUser)
        )
            .subscribe(([rMain, rLevel]: [any, any]) => {
                const main = JSON.parse(rMain._body) as MainModel;
                const lvls = JSON.parse(rLevel._body) as BackEndBuildResponce;

                if (!!main && !!lvls && main.status && lvls.status) {
                    this.mainLevel = main.level;
                    this.level = lvls;
                    this.createDataForCards();
                } else {
                    this.mg.error(main.message + lvls.message);
                }
            });
    }

    public createDataForCards(): void {
        Observable.zip(
            this.service.getAccademyInfo(this.level.lvAccademy, this.g.currentUser)
        )
            .subscribe(([rAccademy]: [any]) => {
                const ac = JSON.parse(rAccademy._body) as AccademyModelsBE;
                if (!!ac && ac.status) {
                    this.accademy = ac;
                    this.accademyStringTime = this.timeCast(ac.timeToUpdate);
                    (this.mainLevel >= ac.mainLevelToUpdate) ? this.canShowDataInfoAccademy = true : this.canShowDataInfoAccademy = false;
                    this.isRequestLoading = false;

                } else {
                    this.mg.error(ac.message);
                }
            });
    }

    public createFormGroup(): void {
        this.updateFormGroup = this.fb.group({
            number: ['', Validators.required]
        });
    }

    public timeCast(time: number): string {
        let stringTime = '';
        const h = time / 60;
        let m = time as number | string;
        if (h >= 1) {
            m = time - (60 * h);
            if (m <= 9) {
                m = `0${m}`;
            }
            if (h > 9) {
                stringTime = `${h.toFixed(0)}:${m}:00`;
            } else {
                stringTime = `0${h.toFixed(0)}:${m}:00`;
            }
        } else {
            stringTime = `00:${m}:00`;
        }

        return stringTime;
    }

}

export class MainModel {
    public level: number;
    public status: boolean;
    public message: string;
}
