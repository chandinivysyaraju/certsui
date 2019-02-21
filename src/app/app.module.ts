import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificateComponent } from './certificate/certificate.component';
import { WalletComponent } from './wallet/wallet.component';
import { KycComponent } from './kyc/kyc.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArticleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    CertificateComponent,
    WalletComponent,
    KycComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'certificate',
        component: CertificateComponent
      },
      {
        path: 'wallet',
        component: WalletComponent 
      },
      {
        path: 'kyc',
        component: KycComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },

    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
