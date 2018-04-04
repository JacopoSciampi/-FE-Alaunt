import * as toastr from 'toastr';

import { Injectable } from '@angular/core';


const options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-bottom-right',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': 300,
    'hideDuration': 1000,
    'timeOut': 5000,
    'extendedTimeOut': 1000,
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
};

@Injectable()
export class ToastService {
    public info(message: string): void {
        toastr.info(message, '', options);
    }

    public error(message: string): void {
        toastr.error(message, '', options);
    }

    public success(message: string): void {
        toastr.success(message, '', options);
    }

    public warning(message: string): void {
        toastr.warning(message, '', options);
    }
}
