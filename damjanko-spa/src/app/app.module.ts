/* 3rd party */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* 1st party */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

/* module */
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
