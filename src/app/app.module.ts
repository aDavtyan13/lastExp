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
import { UserComponent } from './user/user.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { SwitchComponent } from './switch/switch.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SelectmenuComponent } from './selectmenu/selectmenu.component';
import {MatSelectModule} from '@angular/material/select';
import { TextfieldComponent } from './textfield/textfield.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio/radio.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SmallComponentComponent,
    FourdivListComponent,
    FourdivComponent,
    ProgressSpinerComponent,
    UserComponent,
    GraphComponent,
    TableComponent,
    FooterComponent,
    SwitchComponent,
    SelectmenuComponent,
    TextfieldComponent,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
