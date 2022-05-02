import { Component } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  header = {};

  constructor(private config: ConfigService) {
    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }
}
