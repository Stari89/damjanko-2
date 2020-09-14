/* 3rd party */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const services: any[] = [];

@NgModule({
    imports: [CommonModule],
    providers: [...services],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return { ngModule: CoreModule, providers: [...services] };
    }
}
