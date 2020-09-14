/* 3rd party */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* 1st party */
import { AppRoutingModule } from './app-routing.module';
import { CommonImportsModule } from '@core/common-imports.module';
import { CoreModule } from '@core/core.module';

/* module */
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonImportsModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
