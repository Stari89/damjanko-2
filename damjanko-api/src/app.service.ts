import { Injectable } from '@nestjs/common';

export interface IAppStatus {
    status: 'ok' | 'not ok';
}

@Injectable()
export class AppService {
    getAppStatus(): IAppStatus {
        return { status: 'ok' };
    }
}
