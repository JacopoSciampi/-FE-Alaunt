import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
    @Output() $navigateTo: EventEmitter<string> = new EventEmitter();

    public onNavClick(name: string): void {
        this.$navigateTo.emit(name);
    }
}
