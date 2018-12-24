import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar/navbar.component";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "../../../node_modules/@angular/router";
import {SecurityModule} from "../security/security.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SecurityModule,
    HttpClientModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class CoreModule {}
