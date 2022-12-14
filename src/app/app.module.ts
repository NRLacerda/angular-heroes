import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AuthbutComponent } from './authbut/authbut.component';
import { LogoutComponent } from './login/logout.component';
import { ButtonModule } from 'primeng/button';
import { UserInfoComponent } from './userinfo/userinfo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { TabelaComponent } from './vendas/tabela/tabela.component';
import { VendasComponent } from './vendas/vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NotfoundComponent,
    DashboardComponent,
    ListItemComponent,
    AuthbutComponent,
    LogoutComponent,
    UserInfoComponent,
    NavComponent,
    MenuComponent,
    TabelaComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule,
    MatButtonModule,
    AuthModule.forRoot({
      domain: 'dev-1z5bav6h7rag3tfd.us.auth0.com',
      clientId: '8Pj0qdG97aeRW8J47ZDLd3TyPHfhq4Gl',
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
