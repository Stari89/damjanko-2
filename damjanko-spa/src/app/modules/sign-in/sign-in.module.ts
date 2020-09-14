/* 3rd party */
import { NgModule } from '@angular/core';

/* 1st party */
import { CommonImportsModule } from '@core/common-imports.module';
import { SignInRoutingModule } from './sign-in-routing.module';

/* module */
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

@NgModule({
    declarations: [SignInPageComponent],
    imports: [CommonImportsModule, SignInRoutingModule],
})
export class SignInModule {}
