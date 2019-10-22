import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SmallComponentComponent } from './small-component/small-component.component';
import {MatButtonModule} from '@angular/material/button';
import { FourdivListComponent } from './fourdiv-list/fourdiv-list.component';
import { FourdivComponent } from './fourdiv/fourdiv.component';
import { ProgressSpinerComponent } from './progress-spiner/progress-spiner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SmallComponentComponent,
    FourdivListComponent,
    FourdivComponent,
    ProgressSpinerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
