import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHotjarModule, NgxHotjarRouterModule } from 'ngx-hotjar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHotjarModule.forRoot("2413281"),
    NgxHotjarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
