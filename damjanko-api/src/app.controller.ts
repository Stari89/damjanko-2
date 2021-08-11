import { Controller, Get } from '@nestjs/common';
import { AppService, IAppStatus } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getAppStatus(): IAppStatus {
        return this.appService.getAppStatus();
    }
}
