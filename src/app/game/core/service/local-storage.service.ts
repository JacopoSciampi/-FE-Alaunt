import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    public addItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public getUser(): string {
        return localStorage.getItem('user');
    }
}
