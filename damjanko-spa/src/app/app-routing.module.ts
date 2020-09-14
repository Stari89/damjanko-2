import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'not-found',
        loadChildren: () =>
            import('./modules/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
    {
        path: 'sign-in',
        loadChildren: () =>
            import('./modules/sign-in/sign-in.module').then(
                (m) => m.SignInModule
            ),
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
