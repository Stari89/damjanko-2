import { NgModule } from '@angular/core';
/* 3rd party */
import { CommonModule } from '@angular/common';

/* 1st party */
import { SignInRoutingModule } from './sign-in-routing.module';

/* module */
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

@NgModule({
    declarations: [SignInPageComponent],
    imports: [CommonModule, SignInRoutingModule],
})
export class SignInModule {}
