import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardService implements CanActivate {
    public isUserLoggedIn = false;

    public currentUser: string;
    public path: string;
    public sessionStartDate: Date;

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.isUserLoggedIn;
    }

    public login(username: string, path: string, date: Date): void {
        this.currentUser = username;
        this.isUserLoggedIn = true;
        this.path = path;
        this.sessionStartDate = date;
    }

    public logout(): void {
        this.currentUser = '';
        this.isUserLoggedIn = false;
    }
}
