import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { RouterModule } from "../../../node_modules/@angular/router";
import {SharedModule} from "../shared/shared.module";
import {SecurityModule} from "../security/security.module";

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
    SecurityModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class CoreModule {}
