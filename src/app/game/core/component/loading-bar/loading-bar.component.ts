import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent {
    @Input() data: LoadingBarModel;
}

export class LoadingBarModel {
    value: number;
    percent: string;
}
