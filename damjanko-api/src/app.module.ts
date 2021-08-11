import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmploymentsController } from './employments/employments.controller';

@Module({
    imports: [],
    controllers: [AppController, EmploymentsController],
    providers: [AppService],
})
export class AppModule {}
