/* 3rd party */
import { NgModule } from '@angular/core';

/* 1st party */
import { NotFoundRoutingModule } from './not-found-routing.module';

/* module */
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CommonImportsModule } from '@core/common-imports.module';

@NgModule({
    declarations: [NotFoundPageComponent],
    imports: [CommonImportsModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
