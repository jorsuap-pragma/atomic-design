import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HomeComponent } from './components/templates/home/home.component';
import { BannerComponent } from './components/organisms/banner/banner.component';
import { ImagesBannerComponent } from './components/molecules/images-banner/images-banner.component';
import { PrincipalBottonComponent } from './components/atoms/principal-botton/principal-botton.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BannerComponent,
        ImagesBannerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        LogoComponent,
        PrincipalBottonComponent
    ]
})
export class AppModule { }
