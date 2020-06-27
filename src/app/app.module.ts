import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./homeComponent/app.homeComponent";
import { Header } from "./header/header.component";
import { Carousel } from "./carousel/carousel.component";
import { ContactComponent } from "./contactComponent/app.contactComponent";
import { AppRoutingModule } from "./app-routing.component";
import { AppComponent } from "./app.component";
import { ProjectComponent } from "./projectComponent/app.projectComponent";


@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, ProjectComponent, Header, Carousel],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}