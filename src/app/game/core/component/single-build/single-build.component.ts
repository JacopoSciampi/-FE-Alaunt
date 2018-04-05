import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelSingleBuild } from '../../../main-pages/building/building.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../service/toast.service';
import { isNumber } from 'util';
import { GuardService } from '../../service/auth.guard';
import { BuildService } from '../../service/build.service';
import { LoadingBarModel } from '../loading-bar/loading-bar.component';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-single-build',
    templateUrl: './single-build.component.html',
    styleUrls: ['./single-build.component.scss']
})
export class SingleBuildComponent implements OnInit {
    @Input() model: ModelSingleBuild;
    @Input() isSomethingUpdating: boolean;

    public updateFormGroup: FormGroup;
    public workFormGroup: FormGroup;
    public updateData: LoadingBarModel;

    public isLoadingBarRenderComplete = false;
    public stringTime: string;
    public isUpdateRequestLoading = false;

    constructor(
        private fb: FormBuilder,
        private ms: ToastService,
        private guard: GuardService,
        private buildService: BuildService,
    ) { }

    public ngOnInit(): void {
        this.createFormGroups();
        const h = this.model.timeToUpdate / 60;
        let m = this.model.timeToUpdate as number | string;
        if (h >= 1) {
            m = this.model.timeToUpdate - (60 * h);
            if (m <= 9) {
                m = `0${m}`;
            }
            if (h > 9) {
                this.stringTime = `${h}:${m}:00`;
            } else {
                this.stringTime = `0${h}:${m}:00`;
            }
        } else {
            this.stringTime = `00:${m}:00`;
        }

        if (!!this.model.isUpdate) {
            const tInit = this.model.timeStart;
            const tEnd = this.model.timeEnd;
            const tTot = this.model.timeTotal;
            this.updateDataToUpdate(tInit, tEnd, tTot);
        }
    }

    public updateDataToUpdate(tInit: number, tEnd: number, tTot: number): void {
        Observable.interval(1000)
            .subscribe(() => {
                const t = tEnd - tInit;
                const Nvalue = ((100 * t) / +tTot);
                const r = 100 - Nvalue;
                const Pvalue = `${r.toFixed(2)}%`;

                this.updateData = {
                    value: Nvalue,
                    percent: Pvalue
                };
                this.isLoadingBarRenderComplete = true;
                tInit++;
                if (r >= 100) {
                    window.location.reload();
                }
            });
    }

    public createFormGroups(): void {
        this.updateFormGroup = this.fb.group({
            number: ['', Validators.required]
        });

        this.workFormGroup = this.fb.group({
            nWork: ['', Validators.required]
        });
    }

    public onAddWorkers(): void {
        const tmp = this.workFormGroup.value as FormModel;
        let ckh = false;
        if (!!tmp.nWork && +tmp.nWork === 0) { ckh = true; }
        if (this.workFormGroup.valid || ckh) {
            const data = this.workFormGroup.value as FormModel;
            if (isNumber(+data.nWork)) {
                this.isUpdateRequestLoading = true;
                const name = this.model.updateName;
                switch (name) {
                    case 'food':
                        this.updateFoodWorkers(+data.nWork);
                        break;

                    case 'wood':
                        this.updateWoodWorkers(+data.nWork);
                        break;

                    case 'stone':
                        this.updateStoneWorkers(+data.nWork);
                        break;

                    case 'ore':
                        this.updateOreWorkers(+data.nWork);
                        break;

                    case 'iron':
                        this.updateIronWorkers(+data.nWork);
                        break;

                }
            } else {
                this.ms.error('Invalid number');
            }
        } else {
            this.ms.error('Invalid data for update');
        }
    }

    public onUpdateClick(): void {
        if (this.updateFormGroup.valid) {
            const data = this.updateFormGroup.value as FormModel;
            if (isNumber(+data.number)) {
                this.isUpdateRequestLoading = true;
                const name = this.model.updateName;
                switch (name) {
                    case 'home':
                        this.updateHome(+data.number);
                        break;
                    case 'main':
                        break;
                    case 'food':
                        this.updateFood(+data.number);
                        break;
                    case 'wood':
                        this.updateWood(+data.number);
                        break;
                    case 'stone':
                        this.updateStone(+data.number);
                        break;
                    case 'ore':
                        this.updateOre(+data.number);
                        break;
                    case 'iron':
                        this.updateIron(+data.number);
                        break;

                }
            } else {
                this.ms.error('Invalid number');
            }
        } else {
            this.ms.error('Invalid data for update');
        }
    }

    // BUILD UPDATE

    public updateHome(workers: number): void {
        this.buildService.updateHome(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateFood(workers: number): void {
        this.buildService.updateFood(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateWood(workers: number): void {
        this.buildService.updateWood(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateStone(workers: number): void {
        this.buildService.updateStone(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateOre(workers: number): void {
        this.buildService.updateOre(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateIron(workers: number): void {
        this.buildService.updateIron(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Update started!');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    // WORKERS UPDATE

    public updateFoodWorkers(workers: number): void {
        this.buildService.updateFoodWokers(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Saved changes');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateWoodWorkers(workers: number): void {
        this.buildService.updateWoodWokers(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Saved changes');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateStoneWorkers(workers: number): void {
        this.buildService.updateStoneWokers(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Saved changes');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateOreWorkers(workers: number): void {
        this.buildService.updateOreWokers(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Saved changes');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }

    public updateIronWorkers(workers: number): void {
        this.buildService.updateIronWokers(workers, this.guard.currentUser)
            .finally(() => this.isUpdateRequestLoading = false)
            .subscribe((res: any) => {
                const data = JSON.parse(res._body) as StdModel;
                if (!!data && data.status) {
                    this.ms.info('Saved changes');
                    window.location.reload();
                } else {
                    this.ms.error(data.message);
                }
            });
    }
}

export class FormModel {
    public number: number;
    public nWork: number;
}

export class StdModel {
    public message: string;
    public isValid: boolean;
    public status: boolean;
}
