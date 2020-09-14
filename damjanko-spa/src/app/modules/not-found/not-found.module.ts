/* 3rd party */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 1st party */
import { NotFoundRoutingModule } from './not-found-routing.module';

/* module */
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
    declarations: [NotFoundPageComponent],
    imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
