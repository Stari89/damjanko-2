/* 3rd party */
import { NgModule } from '@angular/core';

/* 1st party */
import { CommonImportsModule } from '@core/common-imports.module';
import { LayoutModule } from '@layout/layout.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

/* module */
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
    declarations: [NotFoundPageComponent],
    imports: [CommonImportsModule, LayoutModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
