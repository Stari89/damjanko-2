import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const modules: any[] = [CommonModule];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class CommonImportsModule {}
