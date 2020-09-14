import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: NotFoundPageComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotFoundRoutingModule {}
