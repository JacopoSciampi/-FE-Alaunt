import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ModelSingleArmy } from './single-army.models';

@Component({
    selector: 'app-single-army',
    templateUrl: './single-army.component.html',
    styleUrls: ['./single-army.component.scss']
})
export class SingleArmyComponent implements OnInit {
    @Input() model: ModelSingleArmy;

    constructor(

    ) { }

    public ngOnInit(): void {

    }
}
