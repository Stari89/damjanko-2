import { NgModule } from '@angular/core';
/* 3rd party */
import { RouterModule, Routes } from '@angular/router';

/* module */
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
    {
        path: '',
        component: SignInPageComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignInRoutingModule {}
