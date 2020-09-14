import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
    declarations: [SignInPageComponent],
    imports: [CommonModule, SignInRoutingModule],
})
export class SignInModule {}
