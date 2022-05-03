import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { IntroComponent } from "./intro/intro.component";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HeaderComponent },
  { path: "About", component: IntroComponent },
  { path: "Services", component: ContentComponent },
  { path: "Contacts", component: ContactsComponent },
  { path: "Pricing", component: PricingComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
