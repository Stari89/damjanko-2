/* 3rd party */
import { ModuleWithProviders, NgModule } from '@angular/core';

/* 1st party */
import { CommonImportsModule } from './common-imports.module';

const services: any[] = [];

@NgModule({
    imports: [CommonImportsModule],
    providers: [...services],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return { ngModule: CoreModule, providers: [...services] };
    }
}
