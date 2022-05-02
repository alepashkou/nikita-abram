import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { ClientsComponent } from "./clients/clients.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConfigService } from "./config.service";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ContentComponent,
    FooterComponent,
    ClientsComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
