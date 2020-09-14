/* 3rd party */
import { NgModule } from '@angular/core';

/* 1st party */
import { CommonImportsModule } from '@core/common-imports.module';

/* module */
import { PageComponent } from './page/page.component';

const components: any[] = [PageComponent];

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [CommonImportsModule],
})
export class LayoutModule {}
