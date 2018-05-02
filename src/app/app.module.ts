import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UseDirectiveComponent } from './component/use-directive/use-directive.component';
import { NetworkAddressValidatorDirective } from './directive/network-address-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UseDirectiveComponent,
    NetworkAddressValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
