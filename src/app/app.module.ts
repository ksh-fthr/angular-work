import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// form を作成するために必要
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { PiyoChildComponent } from './piyo-child/piyo-child.component';
import { PiyoParentComponent } from './piyo-parent/piyo-parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CompParentComponent } from './comp-parent/comp-parent.component';
import { CompChildComponent } from './comp-child/comp-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HogeHogeComponent,
    ContentParentComponent,
    ContentChildComponent,
    PiyoChildComponent,
    PiyoParentComponent,
    ViewParentComponent,
    ViewChildComponent,
    CompParentComponent,
    CompChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
